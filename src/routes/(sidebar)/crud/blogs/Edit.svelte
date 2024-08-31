<script lang="ts">
	import { Button, Input, Label, Modal, Textarea,Dropdown, DropdownItem, DropdownDivider, DropdownHeader, Checkbox } from 'flowbite-svelte';
	import { ChevronDownOutline } from 'flowbite-svelte-icons';
	import axios from 'axios';
	import { onMount, afterUpdate} from 'svelte';
	import { writable } from 'svelte/store';
	export let open: boolean = false; // modal control

	export let data: Record<string, string> = {};
	const selectedFile = writable<File | null>(null);
	let  schoolData=[];
	let teacherData = [];
	let sponsorData :any= [];
	let tagData:any = [];
  let tagArray: { tagId: any }[] = [];
  let tag_label = 'Select Tags';

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


	const handleTeacherSelect = (id:any,name:any) =>{
		teacher_label = name,
		data.teacherId = id,
		data.teacherName = name
	}

	const handleSponsorSelect = (id:any, name:any) => {
		sponsor_label = name,
		data.sponsorId = id
	}
	function handleFileChange(event: Event) {
        const target = event.target as HTMLInputElement;
        if (target.files) {
            selectedFile.set(target.files[0]);
        }
    }

  const handleTagSelect = (id: any, name: any) => {
    const index = tagArray.findIndex(tag => tag.tagId === id);

    if (index !== -1) {
      // Tag is already selected, remove it
      tagArray = tagArray.filter(tag => tag.tagId !== id);
    } else {
      // Tag is not selected, add it
      tagArray = [...tagArray, { tagId: id }];
    }

    // Update the tag label
    updateTagLabel();
  }

  const updateTagLabel = () => {
    if (tagArray.length === 0) {
      tag_label = 'Select Tags';
    } else if (tagArray.length === 1) {
      tag_label = tagData.find(tag => tag.id === tagArray[0].tagId)?.name || 'Select Tags';
    } else {
      tag_label = `${tagArray.length} tags selected`;
    }
  }

  $: console.log(tagArray);



	let inputValue;
	let token:any;
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
	let file;

	selectedFile.subscribe(value => {
            file = value;
        })();

        if (!file) {
            console.error('No file selected');
            return null;
        }

        const formData = new FormData();
        formData.append('images', file);
        formData.append('data', JSON.stringify(data));



	// data.user_type = "teacher"

	let blogsUpdate_api = apiUrl + '/admin/featuredPostsUpdate/';
	console.log(blogsUpdate_api);
    try {
		console.log(data);
        const response = await axios.patch(blogsUpdate_api, formData, {
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
//   let allschool_api = apiUrl + '/admin/allschoolData/';
//   let allteacher_api = apiUrl + '/admin/allteacherData/';
//   let allsponsor_api = apiUrl + '/admin/allsponsorData/';
// 	let alltag_api = apiUrl + '/admin/tags/';


//   // Retrieve the token from session storage
//   //const token = sessionStorage.getItem('token');

//   const response= await axios.get(allschool_api, {
//             headers: {
//                 Authorization: `Bearer ${token}`
//             }
//         });
// 				schoolData=response.data.result
// 				console.log(schoolData)

// 	const responsetags= await axios.get(alltag_api, {
// 			headers: {
// 					Authorization: `Bearer ${token}`
// 			}
// 	});
// 	tagData=responsetags.data.result
// 	console.log("This is tag data")
// 	console.log(tagData)

// 	const responsesponsor= await axios.get(allsponsor_api, {
//             headers: {
//                 Authorization: `Bearer ${token}`
//             }
//         });
// 				sponsorData=responsesponsor.data.result
// 				console.log(sponsorData)

// 	const responseteacher= await axios.get(allteacher_api, {
//             headers: {
//                 Authorization: `Bearer ${token}`
//             }
//         });
// 				teacherData=responseteacher.data.result
// 				console.log(teacherData)






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

	title={Object.keys(data).length ? 'Edit Blog' : 'Add new user'}

	size="md"
	class="m-4"
>
	<!-- Modal body -->
	<div class="space-y-6 p-0">
		<form on:submit={handleSubmit} use:init>
			<div class="grid grid-cols-6 gap-6">
				<Label class="col-span-6 space-y-2 sm:col-span-3">
					<span>Title</span>
					<Input bind:value={data.title} name="name" class="border outline-none" placeholder="e.g. Bonnie" required />
				</Label>






				<Label class="col-span-6 space-y-2 sm:col-span-3">
					<span>Text Content</span>
					<Input
					bind:value={data.text_box}
						name="email"
						type="email"
						class="border outline-none"
						placeholder="e.g. bonnie@flowbite.com"
					/>
				</Label>

				<Label class="col-span-6 space-y-2 sm:col-span-3">
					<span>Author</span>
					<Input
					bind:value={data.author}
						name="email"
						type="email"
						class="border outline-none"
						placeholder="e.g. bonnie@flowbite.com"
					/>
				</Label>
				<Label class="col-span-6 space-y-2 sm:col-span-3">
					<span>Tag</span>
					<Input
					bind:value={data.tag}
						name="email"
						type="email"
						class="border outline-none"
						placeholder="e.g. bonnie@flowbite.com"
					/>
				</Label>
				<Label class="col-span-6 space-y-2 sm:col-span-3">
					<span>Url</span>
					<Input
					bind:value={data.url}
						name="email"
						type="email"
						class="border outline-none"
						placeholder="e.g. bonnie@flowbite.com"
					/>
				</Label>




				<Label class="col-span-6 space-y-2">
                    <span>Photo</span>
                    <Input type="file" name="photo" accept="image/*" on:change={handleFileChange} class="border outline-none" />
                </Label>





			</div>
		</form>
	</div>

	<!-- Modal footer -->
	<div slot="footer">
		<Button on:click = {handleSubmit}>{Object.keys(data).length ? 'Save all' : 'Add user'}</Button>
	</div>
</Modal>
