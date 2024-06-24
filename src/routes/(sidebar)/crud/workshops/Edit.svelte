<script lang="ts">
	import { Button, Input, Label, Modal, Textarea,Dropdown, DropdownItem, DropdownDivider, DropdownHeader } from 'flowbite-svelte';
	import { ChevronDownOutline } from 'flowbite-svelte-icons';
	import axios from 'axios';
	import { onMount, afterUpdate} from 'svelte';
	export let open: boolean = false; // modal control

	export let data: Record<string, string> = {};

	let  clubData=[];
	const apiUrl = process.env.VITE_API_URL;
	let teacherData = [];
	let sponsorData = [];
	let is_certificate_label="Certificate";
	let user_label="Select School";
	let club_type_label="Club Type";
	let is_admin_label="Is Admin";
	const handleSchoolSelect = (id,name) => {
	user_label=name
	data.schoolId=id

}
	let teacher_label = "Select Teacher";
	let sponsor_label = "Select Sponsor";
	let workshop_type_label="Workshop Type";
	const handleClubSelect = (id,name) => {
	user_label=name
	data.clubId=id
	data.club.club_name= name
}

	const handleSponsorSelect = (id, name) => {
		sponsor_label = name,
		data.sponsorId = id
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

  function handleClubTypeChange(event) {
	// console.log(event)
    data.club_type = event;
		// console.log(data)
		if(event==="school"){
			club_type_label="School";
		}else{
			club_type_label="Sponsor";
		}
  }
  function handleWorkshopTypeChange(event) {
	// console.log(event)
    data.workshop_type = event;
		// console.log(data)
		if(event==="public"){
			workshop_type_label="Public";
		}else{
			workshop_type_label="Private";
		}
  }


  function handleIsCertificateChange(event) {
    data.certificate = event === "true";
    
    if (data.certificate) {
        is_certificate_label = "True";
    } else {
        is_certificate_label = "False";
    }
}

  async function handleSubmit() {
    // Assuming `token` is defined somewhere accessible
    

    // Assuming `data` contains the payload you want to send in the request
    console.log("Inside submit");
    console.log(data);
    console.log(data.id);
	console.log(token);
	data.user_type = "teacher"

    try {
        const response = await axios.post(`${apiUrl}/admin/workshopUpdate/`, data, {
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
	}
	1;

	onMount(async () => {
  // Retrieve the token from session storage
  //const token = sessionStorage.getItem('token');

  token = getCookie('token');
  console.log("token",token);



	
  // Retrieve the token from session storage
  //const token = sessionStorage.getItem('token');

  token = getCookie('token');
  console.log("token",token);
  const response= await axios.get(`${apiUrl}/admin/allclubData/`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
				clubData=response.data.result
				console.log(clubData)





});

afterUpdate(() => {
		if (open && data.student_medium_of_education) {
			if(data.student_medium_of_education === "Bangla"){
				student_medium_label = "Bangla";
			} else {
				student_medium_label = "English";
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

	title={Object.keys(data).length ? 'Edit Workshop' : 'Add new user'}
	
	size="md"
	class="m-4"
>
	<!-- Modal body -->
	<div class="space-y-6 p-0">
		<form on:submit={handleSubmit} use:init>
			<div class="grid grid-cols-6 gap-6">
				<Label class="col-span-6 space-y-2 sm:col-span-3">
					<span>Name</span>
					<Input bind:value={data.name} name="name" class="border outline-none" placeholder="e.g. Bonnie" required />
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
							<!-- <DropdownItem  on:click={() => handleIsCertificateChange('false')}>False</DropdownItem> -->
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
						name="student_id"
						type="text"
						class="border outline-none"
						placeholder="e.g. bonnie@flowbite.com"
					/>
				</Label>



                <Label class="col-span-6 space-y-2 sm:col-span-3">
					<span>People Joined</span>
					<Input
					bind:value={data.people_joined}
						name="student_id"
						type="text"
						class="border outline-none"
						placeholder="e.g. bonnie@flowbite.com"
					/>
				</Label>
                <Label class="col-span-6 space-y-2 sm:col-span-3">
					<span>Waiting List</span>
					<Input
					bind:value={data.people_waiting_list}
						name="student_id"
						type="text"
						class="border outline-none"
						placeholder="e.g. bonnie@flowbite.com"
					/>
				</Label>
                <Label class="col-span-6 space-y-2 sm:col-span-3">
					<span>Rating</span>
					<Input
					bind:value={data.rating}
						name="student_id"
						type="text"
						class="border outline-none"
						placeholder="e.g. bonnie@flowbite.com"
					/>
				</Label>
                <Label class="col-span-6 space-y-2 sm:col-span-3">
					<span>Duration</span>
					<Input
					bind:value={data.duration}
						name="student_id"
						type="text"
						class="border outline-none"
						placeholder="e.g. bonnie@flowbite.com"
					/>
				</Label>



                <Label class="col-span-6 space-y-2 sm:col-span-3">
					<span>workshop Type</span>
					<!-- <Input bind:value={data.account_type} name="account_type" class="border outline-none" placeholder="e.g. Green" required /> -->
					<div class="pt-5">
						<Button >{data.workshop_type}<ChevronDownOutline class="w-6 h-6 ms-2 text-white dark:text-white" /></Button>
						<Dropdown>
							<DropdownItem  on:click={() => handleWorkshopTypeChange('public')}>Public</DropdownItem>
							<DropdownItem  on:click={() => handleWorkshopTypeChange('private')}>Private</DropdownItem>
						</Dropdown>
					</div>
				</Label>




                <Label class="col-span-6 space-y-2 sm:col-span-3">
					<span>Certificate</span>
					<!-- <Input bind:value={data.account_type} name="account_type" class="border outline-none" placeholder="e.g. Green" required /> -->
					<div class="pt-5">
						<Button >{data.certificate}<ChevronDownOutline class="w-6 h-6 ms-2 text-white dark:text-white" /></Button>
						<Dropdown>
							<DropdownItem  on:click={() => handleIsCertificateChange('true')}>True</DropdownItem>
							<DropdownItem  on:click={() => handleIsCertificateChange('false')}>False</DropdownItem>
						</Dropdown>
					</div>
				</Label>
				<Label class="col-span-6 space-y-2 sm:col-span-3">
					<span>Course Outline</span>
					<Input
					bind:value={data.course_outline}
						name="student_id"
						type="text"
						class="border outline-none"
						placeholder="e.g. bonnie@flowbite.com"
					/>
				</Label>
                <Label class="col-span-6 space-y-2 sm:col-span-3">
					<span>Wokrshop For</span>
					<Input
					bind:value={data.workshop_for}
						name="student_id"
						type="text"
						class="border outline-none"
						placeholder="e.g. bonnie@flowbite.com"
					/>
				</Label>
                <Label class="col-span-6 space-y-2 sm:col-span-3">
					<span>Progress Limit</span>
					<Input
					bind:value={data.course_total_progress_limit}
						name="student_id"
						type="text"
						class="border outline-none"
						placeholder="e.g. bonnie@flowbite.com"
					/>
				</Label>
                <Label class="col-span-6 space-y-2 sm:col-span-3">
					<span>What Students will Learn</span>
					<Input
					bind:value={data.what_you_will_learn}
						name="student_id"
						type="text"
						class="border outline-none"
						placeholder="e.g. bonnie@flowbite.com"
					/>
				</Label>
                <Label class="col-span-6 space-y-2 sm:col-span-3">
					<span>Content</span>
					<Input
					bind:value={data.course_content}
						name="student_id"
						type="text"
						class="border outline-none"
						placeholder="e.g. bonnie@flowbite.com"
					/>
				</Label>




			</div>
		</form>
	</div>

	<!-- Modal footer -->
	<div slot="footer">
		<Button on:click = {handleSubmit}>{Object.keys(data).length ? 'Save all' : 'Add user'}</Button>
	</div>
</Modal>
