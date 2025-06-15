<script lang="ts">
    import { Button, Input, Label, Modal, Dropdown, DropdownItem, DropdownHeader, Checkbox } from 'flowbite-svelte';
    import { ChevronDownOutline } from 'flowbite-svelte-icons';
    import axios from 'axios';
    import { onMount } from 'svelte';
    import { writable } from 'svelte/store';

    export let open: boolean = false; // modal control
    export let data: Record<string, string> = {};

    let inputValue;
    let token;
    const apiUrl = process.env.VITE_API_URL;
    let user_label = "Select Teacher";
    let tag_label = "Select Tags";

    let teacherData = [];
    let tagArray: { tagId: any }[] = [];
    let tagData: any = [];

    const selectedFile = writable<File | null>(null);

    const handleTeacherSelect = (id, name) => {
        user_label = name;
        data.teacherId = id;
    };

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
    };

    const updateTagLabel = () => {
        if (tagArray.length === 0) {
            tag_label = 'Select Tags';
        } else if (tagArray.length === 1) {
            tag_label = tagData.find(tag => tag.id === tagArray[0].tagId)?.name || 'Select Tags';
        } else {
            tag_label = `${tagArray.length} tags selected`;
        }
    };

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

    async function handleSubmit() {
        console.log("Inside submit");
        console.log(data);
        console.log(token);
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
            const response = await axios.post(`${apiUrl}/admin/postInstructorData`, formData, {
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

    onMount(async () => {
        token = getCookie('token');
        console.log("Token:", token);

        // Fetch all teachers
        const teacherResponse = await axios.get(`${apiUrl}/admin/allteacherData`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        teacherData = teacherResponse.data.result;
        console.log("Teacher Data:", teacherData);

        // Fetch all tags
        const tagResponse = await axios.get(`${apiUrl}/admin/tags/`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        tagData = tagResponse.data.result;
        console.log("Tag Data:", tagData);
    });
</script>

<Modal bind:open title="Add Instructor" size="md" class="m-4">
    <!-- Modal body -->
    <div class="space-y-6 p-0">
        <form on:submit={handleSubmit}>
            <div class="grid grid-cols-6 gap-6">
                <Label class="col-span-6 space-y-2 sm:col-span-3">
                    <span>Teacher</span>
                    <div class="pt-5">
                        <Button>{user_label}<ChevronDownOutline class="w-6 h-6 ms-2 text-white dark:text-white" /></Button>
                        <Dropdown class="overflow-y-auto max-h-80">
                            {#each teacherData as teacher}
                                <DropdownItem on:click={() => handleTeacherSelect(teacher?.id, teacher?.name)}>
                                    {teacher?.name} ({teacher?.email})
                                </DropdownItem>
                            {/each}
                        </Dropdown>
                    </div>
                </Label>

                <Label class="col-span-6 space-y-2 sm:col-span-3">
                    <span>Description</span>
                    <Input bind:value={data.description} name="description" class="border outline-none" placeholder="e.g. Expert in AI" required />
                </Label>

                <Label class="col-span-6 space-y-2 sm:col-span-3">
                    <span>Academic Background</span>
                    <Input bind:value={data.academicBackground} name="academicBackground" class="border outline-none" placeholder="e.g. PhD in Computer Science" required />
                </Label>

                <Label class="col-span-6 space-y-2 sm:col-span-3">
                    <span>Rating</span>
                    <Input bind:value={data.rating} name="rating" type="number" step="0.1" class="border outline-none" placeholder="e.g. 4.5" required />
                </Label>

                <Label class="col-span-6 space-y-2 sm:col-span-3">
                    <span>Topics</span>
                    <Input bind:value={data.topics} name="topics" class="border outline-none" placeholder="e.g. AI, Robotics" required />
                </Label>


                <Label class="col-span-6 space-y-2 sm:col-span-3">
                    <span>Years of Experience</span>
                    <Input bind:value={data.yearsofexperience} name="yearsofexperience" class="border outline-none" placeholder="3" required />
                </Label>

                                <Label class="col-span-6 space-y-2 sm:col-span-3">
                    <span>Meeting Link</span>
                    <Input bind:value={data.meetingUrl} name="meetingUrl" class="border outline-none" placeholder="gg.com" required />
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
                    <Input type="file" name="photo" accept="image/*" on:change={handleFileChange} class="border outline-none" />
                </Label>
            </div>
        </form>
    </div>

    <!-- Modal footer -->
    <div slot="footer">
        <Button on:click={handleSubmit}>Add Instructor</Button>
    </div>
</Modal>