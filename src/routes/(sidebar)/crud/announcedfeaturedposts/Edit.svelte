<script lang="ts">
	import { Button, Input, Label, Modal, Textarea,Dropdown, DropdownItem, DropdownDivider, DropdownHeader } from 'flowbite-svelte';
	import { ChevronDownOutline } from 'flowbite-svelte-icons';
	import axios from 'axios';
	import { onMount, afterUpdate} from 'svelte';
	export let open: boolean = false; // modal control

	export let data: Record<string, string> = {};

	let  schoolData=[];
	let teacherData = [];
	let sponsorData = [];

	let user_label="Select School";
	let club_type_label="Club Type";
	let is_admin_label="Is Admin";
	const handleSchoolSelect = (id,name) => {
	user_label=name
	data.schoolId=id

}
const apiUrl = process.env.VITE_API_URL;
console.log('API URL:', apiUrl);
	let teacher_label = "Select Teacher";
	let sponsor_label = "Select Sponsor";

	const handleTeacherSelect = (id,name) =>{
		teacher_label = name,
		data.teacherId = id,
		data.teacherName = name
	}

	const handleSponsorSelect = (id, name) => {
		sponsor_label = name,
		data.sponsorId = id
	}

	const handleFeaturedTypeChange = (event) => {
		data.type = event;
	}

	const handleHighlightTypeChange = (event) => {
		data.isHighlighted = event;
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
  function handleStudentMediumChange(event) {
	console.log("________event:::::")
	console.log(event)
    data.student_medium_of_education = event;
		// console.log(data)
		if(event==="Bangla"){
			student_medium_label="Bangla";
		}else{
			student_medium_label="English";
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
	data.user_type = "teacher"
	let clubUpdate_api = apiUrl + '/admin/featuredannouncedpostsUpdate/';
    try {
        const response = await axios.patch(clubUpdate_api, data, {
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
  let allschool_api = apiUrl + '/admin/allschoolData/';
  let allteacher_api = apiUrl + '/admin/allteacherData/';
  let allsponsor_api = apiUrl + '/admin/allsponsorData/';



  // Retrieve the token from session storage
  //const token = sessionStorage.getItem('token');

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

	title={Object.keys(data).length ? 'Edit Featured Announced Post' : 'Add new user'}

	size="md"
	class="m-4"
>
	<!-- Modal body -->
	<div class="space-y-6 p-0">
		<form on:submit={handleSubmit} use:init>
			<div class="grid grid-cols-6 gap-6">
				<Label class="col-span-6 space-y-2 sm:col-span-3">
					<span>Type</span>
					<!-- <Input bind:value={data.account_type} name="account_type" class="border outline-none" placeholder="e.g. Green" required /> -->
					<div class="pt-5">
						<Button >{data?.type=== "around octobrain" ? "Around Octobrain" : data?.type=== "sponsored" ? "Sponsored" : "Suggested"}<ChevronDownOutline class="w-6 h-6 ms-2 text-white dark:text-white" /></Button>
						<Dropdown>

							<DropdownItem  on:click={() => handleFeaturedTypeChange("around octobrain")}>Around Octobrain</DropdownItem>
							<DropdownItem  on:click={() => handleFeaturedTypeChange("sponsored")}>Sponsored</DropdownItem>
							<DropdownItem  on:click={() => handleFeaturedTypeChange("suggested")}>Suggested</DropdownItem>

						</Dropdown>
					</div>
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
					<span>Is Highlighted</span>
					<!-- <Input bind:value={data.account_type} name="account_type" class="border outline-none" placeholder="e.g. Green" required /> -->
					<div class="pt-5">
						<Button >{data?.isHighlighted?"True":"False"}<ChevronDownOutline class="w-6 h-6 ms-2 text-white dark:text-white" /></Button>
						<Dropdown>
							<DropdownItem  on:click={() => handleHighlightTypeChange(true)}>True</DropdownItem>
							<DropdownItem  on:click={() => handleHighlightTypeChange(false)}>False</DropdownItem>
						</Dropdown>
					</div>
				</Label>


                <!-- <Label class="col-span-6 space-y-2 sm:col-span-3">
					<span>Data</span>
					<Input
					bind:value={data.data}
						name="student_id"
						type="text"
						class="border outline-none"
						placeholder="e.g. bonnie@flowbite.com"
					/>
				</Label> -->
				<Label class="col-span-6 space-y-2 sm:col-span-3">
					<span>Link</span>
					<Input
					bind:value={data.data.link}
						name="student_id"
						type="text"
						class="border outline-none"
						placeholder="e.g. bonnie@flowbite.com"
					/>
				</Label>


				<Label class="col-span-6 space-y-2 sm:col-span-3">
					<span>Button Text</span>
					<Input
					bind:value={data.data.buttonText}
						name="buttonText"
						type="text"
						class="border outline-none"
						placeholder="e.g. click this button"
					/>
				</Label>






			</div>
			<Label class="col-span-6 space-y-2 sm:col-span-3 my-8">
				<span>Announcement</span>
				<Textarea
				bind:value={data.data.announcement}
					name="student_id"
					type="text"
					class="border outline-none"
					placeholder="e.g. bonnie@flowbite.com"
				/>
			</Label>
		</form>
	</div>

	<!-- Modal footer -->
	<div slot="footer">
		<Button on:click = {handleSubmit}>{Object.keys(data).length ? 'Save all' : 'Add user'}</Button>
	</div>
</Modal>
