<script lang="ts">
    import { Button, Input, Label, Modal, Textarea, Dropdown, DropdownItem, DropdownDivider, DropdownHeader,Checkbox} from 'flowbite-svelte';
    import { ChevronDownOutline } from 'flowbite-svelte-icons';
    import axios from 'axios';
    import { onMount } from 'svelte';
    import { writable } from 'svelte/store';

    export let open: boolean = false; // modal control
    export let data: Record<string, string> = {};

    let inputValue;
    let token;
    const apiUrl = process.env.VITE_API_URL;
    let student_medium_label="Student Medium";
    let user_label="Select School";
    let avatar_label = "Select Avatar";
    let is_admin_label="Is Admin";
    let tagArray: { tagId: any }[] = [];

    let tagData: any = [];
    let tag_label = 'Select Tags';

    // Create a writable store for the selected file
    const selectedFile = writable<File | null>(null);

    const handleSchoolSelect = (id,name) => {
        user_label=name
        data.schoolId=id
    }

    const handleAvatarSelect = (id,name) => {
        avatar_label = name
        data.avatarId = id
    }

    function handleStudentMediumChange(event) {
        data.student_medium_of_education = event;
        if(event==="English"){
            student_medium_label="English";
        }else{
            student_medium_label="Bangla";
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
    //         const response = await axios.post('http://localhost:3000/admin/uploadImage', formData, {
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
    data.user_type = "student";

    // Include tags in the data object
    data.tags = tagArray;

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

    try {
        const response = await axios.post(`${apiUrl}/admin/userTeacherStudentRegistration/`, formData, {
            headers: {
                Authorization: `Bearer ${token}`,
                'Content-Type': 'multipart/form-data'
            }
        });

        open = false;
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

    let schoolData = [];
    let avatarData = [];

    onMount(async () => {
        token = getCookie('token');
        console.log("token",token);
        let alltag_api = apiUrl + '/admin/tags/';

        const response= await axios.get(`${apiUrl}/admin/allschoolData/`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        schoolData=response.data.result
        console.log(schoolData)


        const responsex = await axios.get(`${apiUrl}/admin/avatarList`, {
	  headers: {
		Authorization: `Bearer ${token}`
	        }
	        });


//
	        // Update avatarData with response data
	        avatarData = responsex.data.result;




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
    title={Object.keys(data).length ? 'Edit user' : 'Add new student'}
    size="md"
    class="m-4"
>
    <!-- Modal body -->
    <div class="space-y-6 p-0">
        <form on:submit|preventDefault={handleSubmit} use:init>
            <div class="grid grid-cols-6 gap-6">
                <Label class="col-span-6 space-y-2 sm:col-span-3">
                    <span>Name</span>
                    <Input bind:value={data.name} name="name" class="border outline-none" placeholder="e.g. Bonnie" required />
                </Label>

                <Label class="col-span-6 space-y-2 sm:col-span-3">
                    <span>School</span>
                    <span></span>

                    <div class="pt-5">
                        <Button>{user_label}<ChevronDownOutline class="w-6 h-6 ms-2 text-white dark:text-white" /></Button>
                        <Dropdown class="overflow-y-auto max-h-80">
                            {#each schoolData as user}
                                <DropdownItem on:click={() => handleSchoolSelect(user?.id,user?.name)}>{user?.name}, {user?.location}</DropdownItem>
                            {/each}
                        </Dropdown>
                    </div>
                </Label>

                <Label class="col-span-6 space-y-2 sm:col-span-3">
                    <span>Avatar</span>
                    <span></span>

                    <div class="pt-5">
                        <Button>{avatar_label}<ChevronDownOutline class="w-6 h-6 ms-2 text-white dark:text-white" /></Button>
                        <Dropdown class="overflow-y-auto max-h-80">
                            {#each avatarData as user}
                            <p>{user?.name}</p>
                                <DropdownItem on:click={() => handleAvatarSelect(user?.id,user?.name)}><img width="80px" src={user?.imageUrl} alt={"avatar-"+user?.imagename} class="text-sm font-normal text-gray-500 dark:text-gray-400"/></DropdownItem>
                            {/each}
                        </Dropdown>
                    </div>
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
                    <span>Student ID</span>
                    <Input
                        bind:value={data.student_id}
                        name="student_id"
                        type="text"
                        class="border outline-none"
                        placeholder="e.g. bonnie@flowbite.com"
                    />
                </Label>
                <Label class="col-span-6 space-y-2 sm:col-span-3">
                    <span></span>
                    <div class="pt-5">
                        <Button>{student_medium_label}<ChevronDownOutline class="w-6 h-6 ms-2 text-white dark:text-white" /></Button>
                        <Dropdown class="overflow-y-auto max-h-80">
                            <DropdownItem on:click={() => handleStudentMediumChange('Bangla')}>Bangla</DropdownItem>
                            <DropdownItem on:click={() => handleStudentMediumChange('English')}>English</DropdownItem>
                        </Dropdown>
                    </div>
                </Label>

                <Label class="col-span-6 space-y-2 sm:col-span-3">
                    <span>Password</span>
                    <Input
                        bind:value={data.password}
                        name="password"
                        type = "password"
                        class="border outline-none"
                        placeholder="e.g. React Developer"
                        required
                    />
                </Label>
                <Label class="col-span-6 space-y-2 sm:col-span-3">
                    <span>Phone Number</span>
                    <Input
                        bind:value={data.phone_number}
                        name="phone_number"
                        type="text"
                        class="border outline-none"
                        placeholder="e.g. bonnie@flowbite.com"
                    />
                </Label>
                <Label class="col-span-6 space-y-2 sm:col-span-3">
                    <span>Gender</span>
                    <Input
                        bind:value={data.gender}
                        name="gender"
                        type="text"
                        class="border outline-none"
                        placeholder="e.g. bonnie@flowbite.com"
                    />
                </Label>

                <Label class="col-span-6 space-y-2 sm:col-span-3">
                    <span>Address</span>
                    <Input
                        bind:value={data.address}
                        name="address"
                        type="text"
                        class="border outline-none"
                        placeholder="e.g. bonnie@flowbite.com"
                    />
                </Label>


                <Label class="col-span-6 space-y-2 sm:col-span-3">
                    <span>User Bio</span>
                    <Input
                        bind:value={data.user_bio}
                        name="user_bio"
                        type="text"
                        class="border outline-none"
                        placeholder="e.g. bonnie@flowbite.com"
                    />
                </Label>

                <Label class="col-span-6 space-y-2 sm:col-span-3">
                    <span>Academic Level</span>
                    <Input
                        bind:value={data.academic_level}
                        name="academic_level"
                        type="text"
                        class="border outline-none"
                        placeholder="e.g. bonnie@flowbite.com"
                    />
                </Label>

                <Label class="col-span-6 space-y-2 sm:col-span-3">
                    <span>Location</span>
                    <Input
                        bind:value={data.location}
                        name="location"
                        type="text"
                        class="border outline-none"
                        placeholder="e.g. bonnie@flowbite.com"
                    />
                </Label>


                <Label class="col-span-6 space-y-2 sm:col-span-3">
                    <span>About Student</span>
                    <Input
                        bind:value={data.aboutStudent}
                        name="aboutStudent"
                        type="text"
                        class="border outline-none"
                        placeholder="e.g. bonnie@flowbite.com"
                    />
                </Label>

                <Label class="col-span-6 space-y-2 sm:col-span-3">
                    <span>Academic Objective</span>
                    <Input
                        bind:value={data.academicObjective}
                        name="academicObjective"
                        type="text"
                        class="border outline-none"
                        placeholder="e.g. bonnie@flowbite.com"
                    />
                </Label>

				<Label class="col-span-6 space-y-2 sm:col-span-3">
					<span>Tags</span>
					<div class="pt-5">
						<Button>{tag_label}<ChevronDownOutline class="w-6 h-6 ms-2 text-white dark:text-white" /></Button>
						<Dropdown class="overflow-y-auto max-h-80 w-44 p-3 space-y-3 text-sm">
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
            </div>
        </form>
    </div>

    <!-- Modal footer -->
    <div slot="footer">
        <Button on:click={handleSubmit}>{Object.keys(data).length ? 'Save all' : 'Add student'}</Button>
    </div>
</Modal>
