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

	const handleHighlightTypeChange = (event) => {
		data.isHighlighted = event;
	}

	const handleFeaturedTypeChange = (event) => {
		data.type = event;
	}

	const apiUrl = process.env.VITE_API_URL;
	console.log('API URL:', apiUrl);


function handleClubTypeChange(event) {
    data.club_type = event;
		if(event==="school"){
			club_type_label="School";
		}else{
			club_type_label="Sponsor";
		}
  }


	function handleIsAdminChange(event) {
    data.is_admin = event;
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

  let link = '';
  let announcement = '';
	let isHighlighted = false;
	let buttonText = '';



  async function handleSubmit() {
    console.log("Inside submit");
    console.log(data);
	console.log(data.schoolId);
	console.log(token);

	let userdata_api = apiUrl + '/admin/userData';
    try {
        const userDataResponse = await axios.get(userdata_api, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });

        const createdById = userDataResponse.data.user.id;
        console.log('Created By ID:', createdById);

        data.created_by_id = createdById;
				data.created_by_account_type = "admin";
				data.isHighlighted = data.isHighlighted ?? false;
				data.type = data.type?? "suggested";

        // Create JSON data format with link and announcement
        data.data = JSON.stringify({
            link: link,
            announcement: announcement,
						buttonText: buttonText
        });

		let endpoint = apiUrl + '/admin/featuredannouncedpostsRegistration/';

        const response = await axios.post(endpoint, data, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
		open=false
		window.location.reload();
        console.log(response.data);
    } catch (error) {
        console.error('Error:', error);
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
	title={Object.keys(data).length ? 'Edit Featured Announced Post' : 'Add New Featured Announced Post'}
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
						name="title"
						type="text"
						class="border outline-none"
						placeholder="Enter title"
						required
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

                <Label class="col-span-6 space-y-2 sm:col-span-3">
					<span>Link</span>
					<Input
					bind:value={link}
						name="link"
						type="url"
						class="border outline-none"
						placeholder="e.g. https://example.com"
					/>
				</Label>

				<Label class="col-span-6 space-y-2 sm:col-span-3">
					<span>Button Text</span>
					<Input
					bind:value={buttonText}
						name="buttonText"
						type="text"
						class="border outline-none"
						placeholder="e.g. see morer"
					/>
				</Label>


                <Label class="col-span-6 space-y-2">
					<span>Announcement</span>
					<Textarea
					bind:value={announcement}
						name="announcement"
						class="border outline-none"
						placeholder="Enter announcement text"
						rows="3"
					/>
				</Label>
			</div>
		</form>
	</div>

	<!-- Modal footer -->
	<div slot="footer">
		<Button on:click={handleSubmit}>{Object.keys(data).length ? 'Save changes' : 'Add post'}</Button>
	</div>
</Modal>
