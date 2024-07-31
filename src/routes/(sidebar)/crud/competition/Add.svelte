<script lang="ts">
	import { Button, Input, Label, Modal, Textarea, Dropdown, DropdownItem, DropdownDivider, DropdownHeader,Checkbox} from 'flowbite-svelte';
	import { ChevronDownOutline } from 'flowbite-svelte-icons';
	import axios from 'axios';
	
	import { onMount } from 'svelte';
	export let open: boolean = false; // modal control

	export let data: Record<string, string> = {};
	import { writable } from 'svelte/store';  // Add this import

	let inputValue;
	let token;
	let tagArray: { tagId: any }[] = [];
	let tag_label = 'Select Tags';
	let tagData: any = [];
	let user_label="Select Club";
	let competition_type_label="Competition Type";
	let is_admin_label="Is Admin";
	const selectedFile = writable<File | null>(null);
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

	const apiUrl = process.env.VITE_API_URL;
	
function handleCompetitionTypeChange(event) {
	// console.log(event)
    data.competition_type = event;
		// console.log(data)
		if(event==="public"){
			competition_type_label="Public";
		}else{
			competition_type_label="Private";
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
  function handleFileChange(event: Event) {
        const target = event.target as HTMLInputElement;
        if (target.files) {
            selectedFile.set(target.files[0]);
        }
    }

    // async function uploadImage() {
    //     let file;
    //     selectedFile.subscribe(value => {
    //         file = value;
    //     })();

    //     if (!file) {
    //         console.error('No file selected');
    //         return null;
    //     }

    //     const formData = new FormData();
    //     formData.append('image', file);

    //     try {
    //         const response = await axios.post(`${apiUrl}/admin/uploadImage`, formData, {
    //             headers: {
    //                 'Content-Type': 'multipart/form-data',
    //                 Authorization: `Bearer ${token}`
    //             }
    //         });
    //         return response.data;
    //     } catch (error) {
    //         console.error('Error uploading image:', error);
    //         return null;
    //     }
    // }

    async function handleSubmit() {
        console.log("Inside submit");
        console.log(data);
        console.log(token);
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
        formData.append('data', JSON.stringify({ ...data, tags: tagArray }));

        try {
            // First, upload the image
            // const imageData = await uploadImage();
            // if (imageData) {
            //     data.imageUrl = imageData.imageUrl;
            //     data.imagename = imageData.localImageName;
            // }

            // const userDataResponse = await axios.get(`${apiUrl}/admin/userData`, {
            //     headers: {
            //         Authorization: `Bearer ${token}`
            //     }
            // });

            // const createdById = userDataResponse.data.user.id;
            // console.log('Created By ID:', createdById);

            // data.created_by_id = createdById;
            // data.created_by_account_type = "admin";

            const response = await axios.post(`${apiUrl}/admin/competitionRegistration/`, formData, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            open=false;
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
	let  clubData=[];
	let teacherData = [];
	let sponsorData = [];

	onMount(async () => {
  // Retrieve the token from session storage
  //const token = sessionStorage.getItem('token');

  token = getCookie('token');
  console.log("token",token);
  let allClubData_api = apiUrl + '/admin/allclubData/' ;
  let alltag_api = apiUrl + '/admin/tags/';
  const response= await axios.get(allClubData_api, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
				clubData=response.data.result;
				console.log(clubData);
	const responsetags = await axios.get(alltag_api, {
			headers: {
				Authorization: `Bearer ${token}`
			}
		});
		tagData = responsetags.data.result;
		console.log("This is tag data", tagData);


});
</script>

<Modal
	bind:open
	title={Object.keys(data).length ? 'Add new user' : 'Add New Competition'}
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
					<span>Host Region</span>
					<Input
					bind:value={data.host_region}
						name="student_id"
						type="text"
						class="border outline-none"
						placeholder="e.g. bonnie@flowbite.com"
					/>
				</Label>
				





                <Label class="col-span-6 space-y-2 sm:col-span-3">
					<span></span>
					<!-- <Input bind:value={data.account_type} name="account_type" class="border outline-none" placeholder="e.g. Green" required /> -->
					<div class="pt-5">
						<Button >{competition_type_label}<ChevronDownOutline class="w-6 h-6 ms-2 text-white dark:text-white" /></Button>
						<Dropdown>
							<DropdownItem  on:click={() => handleCompetitionTypeChange('public')}>public</DropdownItem>
							<DropdownItem  on:click={() => handleCompetitionTypeChange('private')}>private</DropdownItem>
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
									<Checkbox checked={tagArray.some(t => t.tagId === tag.id)} on:change={() => handleTagSelect(tag.id, tag.name)}>
										{tag.name}
									</Checkbox>
								</li>
							{/each}
						</Dropdown>
					</div>
				</Label>



				<Label class="col-span-6 space-y-2">
                    <span>Photo</span>
                    <Input
                        type="file"
                        name="photo"
                        accept="image/*"
                        on:change={handleFileChange}
                        class="border outline-none"
                    />
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
		<Button on:click = {handleSubmit}>{Object.keys(data).length ? 'Save all' : 'Add Competition'}</Button>
	</div>
</Modal>
