<script lang="ts">
	import { Button, Input, Label, Modal, Textarea,Dropdown, DropdownItem, DropdownDivider, DropdownHeader,Checkbox } from 'flowbite-svelte';
	import { ChevronDownOutline } from 'flowbite-svelte-icons';
	import axios from 'axios';
	import { onMount, afterUpdate} from 'svelte';
	export let open: boolean = false; // modal control

	export let data: Record<string, string> = {};

	const apiUrl = process.env.VITE_API_URL;
	let schoolData = [];
	let student_medium_label="Account Type";
	let is_admin_label="Is Admin";
	let inputValue;
	let token;
	let user_label = "Select School";


	let tagArray: { tagId: any }[] = [];

	let tagData: any = [];
	let tag_label = 'Select Tags';



	const handleSchoolSelect = (id,name) => {
	user_label=name
	data.schoolId=id
	data.schoolName = name
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

	let teacherUpdate_api = apiUrl + '/admin/userTeacherStudentUpdate/';
	const tagsToSend = data.tags ? data.tags.map(tag => ({ tagId: tag.tag.id })) : [];
    try {
		const response = await axios.patch(teacherUpdate_api, { ...data, tags: tagsToSend }, {
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
  let alltag_api = apiUrl + '/admin/tags/';
  token = getCookie('token');
  console.log("token",token);
  const response= await axios.get(`${apiUrl}/admin/allschoolData/`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
				schoolData=response.data.result
				console.log(schoolData)

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

	title={Object.keys(data).length ? 'Edit Teacher' : 'Add new user'}

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
					<span>Email</span>
					<Input
					bind:value={data.email}
						name="email"
						type="email"
						class="border outline-none"
						placeholder="e.g. bonnie@flowbite.com"
					/>
				</Label>
                <Label class="col-span-6 space-y-2 sm:col-span-3">
					<span>Accreditation</span>
					<Input
					bind:value={data.teacher_institution_accreditation}
						name="student id"
						type="text"
						class="border outline-none"
						placeholder="e.g. bonnie@flowbite.com"
					/>
				</Label>

				<Label class="col-span-6 space-y-2 sm:col-span-3">
					<span>School</span>
					<!-- <Input bind:value={data.userId} name="name" class="border outline-none" placeholder="" required /> -->
					<span></span>

					<div class="pt-5">
						<Button >{data.schoolName}<ChevronDownOutline class="w-6 h-6 ms-2 text-white dark:text-white" /></Button>
						<Dropdown  class="overflow-y-auto max-h-80">
							{#each schoolData as user}
								<DropdownItem  on:click={() => handleSchoolSelect(user?.id,user?.name)}>{user?.name}, {user?.location}</DropdownItem>
							<!-- <DropdownItem  on:click={() => handleIsAdminChange('false')}>False</DropdownItem> -->
							{/each}
						</Dropdown>
					</div>
				</Label>
                <Label class="col-span-6 space-y-2 sm:col-span-3">
					<span>Designation</span>
					<Input
					bind:value={data.teacher_designation}
						name="student id"
						type="text"
						class="border outline-none"
						placeholder="e.g. bonnie@flowbite.com"
					/>
				</Label>

                <Label class="col-span-6 space-y-2 sm:col-span-3">
                    <span>Gender</span>
                    <Input bind:value={data.gender} name="gender" type="text" class="border outline-none" placeholder="e.g. React Developer" required />
                </Label>

                <Label class="col-span-6 space-y-2 sm:col-span-3">
                    <span>Birth Date</span>
                    <Input bind:value={data.birth_date} name="birth_date" type="text" class="border outline-none" placeholder="e.g. React Developer" required />
                </Label>

                <Label class="col-span-6 space-y-2 sm:col-span-3">
                    <span>Phone Number</span>
                    <Input bind:value={data.phone_number} name="phone_number" type="text" class="border outline-none" placeholder="e.g. React Developer" required />
                </Label>

                <Label class="col-span-6 space-y-2 sm:col-span-3">
                    <span>User Bio</span>
                    <Input bind:value={data.user_bio} name="user_bio" type="text" class="border outline-none" placeholder="e.g. React Developer" required />
                </Label>






				<Label class="col-span-6 space-y-2 sm:col-span-3">
					<span>Tags</span>
					<div class="pt-5">
						<Button>{tag_label}<ChevronDownOutline class="w-6 h-6 ms-2 text-white dark:text-white" /></Button>
						<Dropdown class="overflow-y-auto max-h-80 w-44 p-3 space-y-3 text-sm">
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




			</div>
		</form>
	</div>

	<!-- Modal footer -->
	<div slot="footer">
		<Button on:click = {handleSubmit}>{Object.keys(data).length ? 'Save all' : 'Add user'}</Button>
	</div>
</Modal>
