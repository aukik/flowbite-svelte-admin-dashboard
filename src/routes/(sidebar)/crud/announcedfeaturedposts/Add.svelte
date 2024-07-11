<script lang="ts">
	import { Button, Input, Label, Modal, Textarea, Dropdown, DropdownItem, DropdownDivider, DropdownHeader} from 'flowbite-svelte';
	import { ChevronDownOutline } from 'flowbite-svelte-icons';
	import axios from 'axios';
	import { onMount } from 'svelte';
	export let open: boolean = false; // modal control

	export let data: Record<string, string> = {};

	let inputValue;
	let token;
	let user_label="Select School";
	let club_type_label="Club Type";
	let is_admin_label="Is Admin";
	const handleSchoolSelect = (id,name) => {
	user_label=name
	data.schoolId=id
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
	const apiUrl = process.env.VITE_API_URL;
	console.log('API URL:', apiUrl);


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

	let userdata_api = apiUrl + '/admin/userData';
    try {
        const userDataResponse = await axios.get(userdata_api, {
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
		

		
		let endpoint = apiUrl + '/admin/featuredannouncedpostsRegistration/';


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
	let  schoolData=[];
	let teacherData = [];
	let sponsorData = [];

	onMount(async () => {
  // Retrieve the token from session storage
  //const token = sessionStorage.getItem('token');

  token = getCookie('token');
  console.log("token",token);
  let allschool_api = apiUrl + '/admin/allschoolData/';
  let allteacher_api = apiUrl + '/admin/allteacherData/';
  let allsponsor_api = apiUrl + '/admin/allsponsorData/';

  const response= await axios.get(allschool_api, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
				schoolData=response.data.result
				console.log(schoolData)
	const responseteacher= await axios.get(allteacher_api, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
				teacherData=responseteacher.data.result
				console.log(teacherData)
	const responsesponsor= await axios.get(allsponsor_api, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
				sponsorData=responsesponsor.data.result
				console.log(sponsorData)


});
</script>

<Modal
	bind:open
	title={Object.keys(data).length ? 'Add new user' : 'Add  new Featured Announced Posts'}
	size="md"
	class="m-4"
>
	<!-- Modal body -->
	<div class="space-y-6 p-0">
		<form on:submit={handleSubmit} use:init>
			<div class="grid grid-cols-6 gap-6">
				<Label class="col-span-6 space-y-2 sm:col-span-3">
					<span>Type</span>
					<Input bind:value={data.type} name="name" class="border outline-none" placeholder="e.g. Bonnie" required />
				</Label>



				<Label class="col-span-6 space-y-2 sm:col-span-3">
					<span>Title</span>
					<Input
					bind:value={data.title}
						name="email"
						type="email"
						class="border outline-none"
						placeholder="e.g. bonnie@flowbite.com"
					/>
				</Label>

                <Label class="col-span-6 space-y-2 sm:col-span-3">
					<span>Color Code</span>
					<Input
					bind:value={data.colorcode}
						name="student_id"
						type="text"
						class="border outline-none"
						placeholder="e.g. bonnie@flowbite.com"
					/>
				</Label>



                <Label class="col-span-6 space-y-2 sm:col-span-3">
					<span>Data</span>
					<Input
					bind:value={data.data}
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
		<Button on:click = {handleSubmit}>{Object.keys(data).length ? 'Save all' : 'Add teacher'}</Button>
	</div>
</Modal>
