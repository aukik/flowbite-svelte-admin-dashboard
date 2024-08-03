<script lang="ts">
	import { Button, Input, Label, Modal, Textarea,Dropdown, DropdownItem, DropdownDivider, DropdownHeader ,Checkbox} from 'flowbite-svelte';
	import { ChevronDownOutline } from 'flowbite-svelte-icons';
	import axios from 'axios';
	import { onMount, afterUpdate} from 'svelte';
	export let open: boolean = false; // modal control
	export let data: Record<string, string> = {};

	let  clubData=[];
	const apiUrl = process.env.VITE_API_URL;
	let user_label= data?.club?.club_name;
	console.log(user_label);
	let tagData: any = [];
	let tag_label = 'Select Tags';
	
	let is_admin_label="Is Admin";
	const handleClubSelect = (id,name) => {
	user_label=name
	data.clubId=id
	data.club.club_name = name
}

	let teacher_label = "Select Teacher";
	let sponsor_label = "Select Sponsor";
	let student_medium_label = "Select Type"

	const handleTeacherSelect = (id,name) =>{
		teacher_label = name,
		data.teacherId = id
	}

	const handleSponsorSelect = (id, name) => {
		sponsor_label = name,
		data.sponsorId = id
	}

	function isTagSelected(tagId: string) {
		return data.tags && data.tags.some(tag => tag.tag.id === tagId);
	}

	const handleTagSelect = (id: string, name: string) => {
		if (!data.tags) {
			data.tags = [];
		}

		const index = data.tags.findIndex(tag => tag.tag.id === id);

		if (index !== -1) {
			// Tag is already selected, remove it
			data.tags = data.tags.filter(tag => tag.tag.id !== id);
		} else {
			// Tag is not selected, add it
			data.tags = [...data.tags, { tag: { id, name } }];
		}

		// Update the tag label
		updateTagLabel();
	}

	const updateTagLabel = () => {
		if (!data.tags || data.tags.length === 0) {
			tag_label = 'Select Tags';
		} else if (data.tags.length === 1) {
			tag_label = data.tags[0].tag.name;
		} else {
			tag_label = `${data.tags.length} tags selected`;
		}
	}

	let inputValue;
	let token;
	function getCookie(name) {
    const cookies = document.cookie.split(';');
    for (let i = 0; i < cookies.length; i++) {
      const cookie = cookies[i].trim();
      if (cookie.startsWith(name + '=')) {
        return cookie.substring(name.length + 1);
      }
    }
    return null;
  }
let event_type_label = data?.event_type;

  function handleEventTypeChange(event) {
	// console.log(event)
    data.event_type = event;
		// console.log(data)
		if(event==="public"){
			event_type_label="Public";
		}else{
			event_type_label="Private";
		}
  }

	function handleIsAdminChange(event) {
	// console.log(event)
    data.is_admin = event;
		// console.log(data)
		if(event==="true"){
			is_admin_label="True";
		}else{
			is_admin_label="False";
		}
  }


  async function handleSubmit() {
    // Assuming `token` is defined somewhere accessible
    

    // Assuming `data` contains the payload you want to send in the request
    console.log("Inside submit");
    console.log(data);
    console.log(data.id);
	console.log(token);
	let eventUpdate_api = apiUrl + '/admin/eventUpdate/';
	const tagsToSend = data.tags ? data.tags.map(tag => ({ tagId: tag.tag.id })) : [];

    try {
        const response = await axios.patch(eventUpdate_api,{ ...data, tags: tagsToSend },{
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
		open=false
		window.location.reload();
        console.log(response.data); // Handle response data as needed
    } catch (error) {
        console.error('Error:');
    }
}



	function init(form: HTMLFormElement) {
		if (data?.name) [data.first_name, data.last_name] = data.name.split(' ');
		for (const key in data) {
			console.log(key, data[key]);
			const el = form.elements.namedItem(key);
			if (el) el.value = data[key];
		}
		updateTagLabel();
	}
	1;

	onMount(async () => {
  // Retrieve the token from session storage
  //const token = sessionStorage.getItem('token');

  token = getCookie('token');
  console.log("token",token);

	user_label = data?.club?.club_name;
	
	let teacherData = [];
	let sponsorData = [];


  // Retrieve the token from session storage
  //const token = sessionStorage.getItem('token');
  event_type_label = data?.event_type
	
  let allClubData_api = apiUrl + '/admin/allclubData/' ;
  let alltag_api = apiUrl + '/admin/tags/';
  const response= await axios.get(allClubData_api, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
				clubData=response.data.result
				console.log(clubData)


	const responsetags = await axios.get(alltag_api, {
			headers: {
				Authorization: `Bearer ${token}`
			}
		});
		tagData = responsetags.data.result;
		console.log("This is tag data", tagData);
		updateTagLabel();


});

afterUpdate(() => {
		if (open && data.event_type) {
			if(data.event_type === "public"){
				event_type_label = "Public";
			} else {
				student_medium_label = "Private";
			}
		}
		
		if (open) {
			console.log("-----------------------{}")
			console.log(data.is_admin);
			if(data.is_admin){
				is_admin_label = "True";
			} else {
				is_admin_label = "False";
			}
		}
	}



);


</script>

<Modal
	bind:open

	title={Object.keys(data).length ? 'Edit Event' : 'Add new user'}
	
	size="md"
	class="m-4"
>
	<!-- Modal body -->
	<div class="space-y-6 p-0">
		<form on:submit={handleSubmit} use:init>
			<div class="grid grid-cols-6 gap-6">
				<Label class="col-span-6 space-y-2 sm:col-span-3">
					<span>Name</span>
					<Input bind:value={data.event_name} name="name" class="border outline-none" placeholder="e.g. Bonnie" required />
				</Label>
				<Label class="col-span-6 space-y-2 sm:col-span-3">
					<span>Club</span>
					<!-- <Input bind:value={data.userId} name="name" class="border outline-none" placeholder="" required /> -->
					<span></span>

					<div class="pt-5">
						<Button >{data.club.club_name}<ChevronDownOutline class="w-6 h-6 ms-2 text-white dark:text-white" /></Button>
						<Dropdown>
							{#each clubData as user}
								<DropdownItem  on:click={() => handleClubSelect(user?.id,user?.club_name)}>{user?.club_name}, {user?.motto}</DropdownItem>
							<!-- <DropdownItem  on:click={() => handleIsAdminChange('false')}>False</DropdownItem> -->
							{/each}
						</Dropdown>
					</div>
				</Label>
				<Label class="col-span-6 space-y-2 sm:col-span-3">
					<span>Motto</span>
					<Input
					bind:value={data.motto}
						name="email"
						type="email"
						class="border outline-none"
						placeholder="e.g. bonnie@flowbite.com"
					/>
				</Label>
                <Label class="col-span-6 space-y-2 sm:col-span-3">
					<span>Description</span>
					<Input
					bind:value={data.description}
						name="student id"
						type="text"
						class="border outline-none"
						placeholder="e.g. bonnie@flowbite.com"
					/>
				</Label>
                <Label class="col-span-6 space-y-2 sm:col-span-3">
					<span>Fee</span>
					<Input
					bind:value={data.event_fee}
						name="student_id"
						type="text"
						class="border outline-none"
						placeholder="e.g. bonnie@flowbite.com"
					/>
				</Label>
                <Label class="col-span-6 space-y-2 sm:col-span-3">
					<span>Event is for</span>
					<Input
					bind:value={data.event_is_for}
						name="student_id"
						type="text"
						class="border outline-none"
						placeholder="e.g. bonnie@flowbite.com"
					/>
				</Label>
                <!-- <Label class="col-span-6 space-y-2 sm:col-span-3">
					<span>People Joined</span>
					<Input
					bind:value={data.people_joined}
						name="student_id"
						type="text"
						class="border outline-none"
						placeholder="e.g. bonnie@flowbite.com"
					/>
				</Label> -->
                <!-- <Label class="col-span-6 space-y-2 sm:col-span-3">
					<span>Rating</span>
					<Input
					bind:value={data.rating}
						name="student_id"
						type="text"
						class="border outline-none"
						placeholder="e.g. bonnie@flowbite.com"
					/>
				</Label> -->
                <Label class="col-span-6 space-y-2 sm:col-span-3">
					<span></span>
					<!-- <Input bind:value={data.account_type} name="account_type" class="border outline-none" placeholder="e.g. Green" required /> -->
					<div class="pt-5">
						<Button >{data.event_type}<ChevronDownOutline class="w-6 h-6 ms-2 text-white dark:text-white" /></Button>
						<Dropdown>
							<DropdownItem  on:click={() => handleEventTypeChange('public')}>public</DropdownItem>
							<DropdownItem  on:click={() => handleEventTypeChange('private')}>private</DropdownItem>
						</Dropdown>
					</div>
				</Label>				
				<Label class="col-span-6 space-y-2 sm:col-span-3">
					<span>Host Location</span>
					<Input
					bind:value={data.host_location}
						name="student_id"
						type="text"
						class="border outline-none"
						placeholder="e.g. bonnie@flowbite.com"
					/>
				</Label>
				<Label class="col-span-6 space-y-2 sm:col-span-3">
					<span>Tags</span>
					<div class="pt-5">
						<Button>{tag_label}<ChevronDownOutline class="w-6 h-6 ms-2 text-white dark:text-white" /></Button>
						<Dropdown class="w-44 p-3 space-y-3 text-sm">
							{#each tagData as tag}
								<li>
									<Checkbox checked={isTagSelected(tag.id)} on:change={() => handleTagSelect(tag.id, tag.name)}>
										{tag.name}
									</Checkbox>
								</li>
							{/each}
						</Dropdown>
					</div>
				</Label>
				<!-- <Label class="col-span-6 space-y-2 sm:col-span-3">
					<span>Start Date</span>
					<Input
					bind:value={data.host_start_date}
						name="student_id"
						type="text"
						class="border outline-none"
						placeholder="e.g. bonnie@flowbite.com"
					/>
				</Label>
				<Label class="col-span-6 space-y-2 sm:col-span-3">
					<span>End Date</span>
					<Input
					bind:value={data.host_end_date}
						name="student_id"
						type="text"
						class="border outline-none"
						placeholder="e.g. bonnie@flowbite.com"
					/>
				</Label> -->



			</div>
		</form>
	</div>

	<!-- Modal footer -->
	<div slot="footer">
		<Button on:click = {handleSubmit}>{Object.keys(data).length ? 'Save all' : 'Add user'}</Button>
	</div>
</Modal>
