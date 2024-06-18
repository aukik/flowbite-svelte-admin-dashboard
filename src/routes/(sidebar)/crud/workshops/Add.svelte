<script lang="ts">
	import { Button, Input, Label, Modal, Textarea, Dropdown, DropdownItem, DropdownDivider, DropdownHeader} from 'flowbite-svelte';
	import { ChevronDownOutline } from 'flowbite-svelte-icons';
	import axios from 'axios';
	import { onMount } from 'svelte';
	export let open: boolean = false; // modal control

	export let data: Record<string, string> = {};

	let inputValue;
	let token;
	let user_label="Select Club";
	let workshop_type_label="Workshop Type";
	let is_certificate_label="Certificate";
	const handleClubSelect = (id,name) => {
	user_label=name
	data.clubId=id
}
	let teacher_label = "Select Teacher";
	let sponsor_label = "Select Sponsor";

	const handleTeacherSelect = (id,name) =>{
		teacher_label = name,
		data.teacherId = id
	}

	const handleSponsorSelect = (id, name) => {
		sponsor_label = name,
		data.sponsorId = id
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
  async function handleSubmit() {
    // Assuming `token` is defined somewhere accessible


    // Assuming `data` contains the payload you want to send in the request
    console.log("Inside submit");
    console.log(data);
	console.log(data.schoolId);
    //console.log(data.id);
	console.log(token);


    try {
        const userDataResponse = await axios.get('http://localhost:3000/admin/userData', {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });

        // Extracting the created_by_id from the response
        const createdById = userDataResponse.data.user.id;
        console.log('Created By ID:', createdById);

        // Assigning the created_by_id to data
        data.created_by_id = createdById;
		data.created_by_account_type = "admin";
		

		
		let  endpoint = 'http://localhost:3000/admin/workshopRegistration/';
    // if (data.club_type === 'school') {
    //     endpoint = 'http://localhost:3000/admin/clubRegistrationSchool/';
    // } else {
    //     endpoint = 'http://localhost:3000/admin/clubRegistrationSponsor/';
    // }

    // Making the POST request to the appropriate endpoint
    const response = await axios.post(endpoint, data, {
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
	let  clubData=[];
	let teacherData = [];
	let sponsorData = [];

	onMount(async () => {
  // Retrieve the token from session storage
  //const token = sessionStorage.getItem('token');

  token = getCookie('token');
  console.log("token",token);
  const response= await axios.get('http://localhost:3000/admin/allclubData/', {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
				clubData=response.data.result
				console.log(clubData)



});
</script>

<Modal
	bind:open
	title={Object.keys(data).length ? 'Add new user' : 'Add Workshop'}
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
						<Button >{user_label}<ChevronDownOutline class="w-6 h-6 ms-2 text-white dark:text-white" /></Button>
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
					<span>Workshop Type</span>
					<!-- <Input bind:value={data.account_type} name="account_type" class="border outline-none" placeholder="e.g. Green" required /> -->
					<div class="pt-5">
						<Button >{workshop_type_label}<ChevronDownOutline class="w-6 h-6 ms-2 text-white dark:text-white" /></Button>
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
						<Button >{is_certificate_label}<ChevronDownOutline class="w-6 h-6 ms-2 text-white dark:text-white" /></Button>
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
		<Button on:click = {handleSubmit}>{Object.keys(data).length ? 'Save all' : 'Add Workshop'}</Button>
	</div>
</Modal>
