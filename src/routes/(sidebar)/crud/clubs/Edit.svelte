<script lang="ts">
	import { Button, Input, Label, Modal, Textarea, Dropdown, DropdownItem, Checkbox } from 'flowbite-svelte';
	import { ChevronDownOutline } from 'flowbite-svelte-icons';
	import axios from 'axios';
	import { onMount, afterUpdate } from 'svelte';
	export let open: boolean = false; // modal control
	export let data: Record<string, any> = {};

	let schoolData = [];
	let teacherData = [];
	let sponsorData: any = [];
	let tagData: any = [];
	let tag_label = 'Select Tags';

	let user_label = "Select School";
	let club_type_label = "Club Type";
	let is_admin_label = "Is Admin";
	const handleSchoolSelect = (id, name) => {
		user_label = name;
		data.schoolId = id;
	}
	const apiUrl = process.env.VITE_API_URL;
	console.log('API URL:', apiUrl);
	let teacher_label = "Select Teacher";
	let sponsor_label = "Select Sponsor";

	const handleTeacherSelect = (id: any, name: any) => {
		teacher_label = name;
		data.teacherId = id;
		data.teacherName = name;
	}

	const handleSponsorSelect = (id: any, name: any) => {
		sponsor_label = name;
		data.sponsorId = id;
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

	let inputValue;
	let token: any;
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
		data.club_type = event;
		if (event === "school") {
			club_type_label = "School";
		} else {
			club_type_label = "Sponsor";
		}
	}

	function handleIsAdminChange(event) {
		data.is_admin = event;
		if (event === "true") {
			is_admin_label = "True";
		} else {
			is_admin_label = "False";
		}
	}

	async function handleSubmit() {
		data.user_type = "teacher";
		let clubUpdate_api = apiUrl + '/admin/clubUpdate/';
		const tagsToSend = data.tags ? data.tags.map(tag => ({ tagId: tag.tag.id })) : [];
		try {
			const response = await axios.patch(clubUpdate_api, { ...data, tags: tagsToSend }, {
				headers: {
					Authorization: `Bearer ${token}`
				}
			});
			open = false;
			window.location.reload();
			console.log(response.data); // Handle response data as needed
		} catch (error) {
			console.error('Error:', error);
		}
	}

	function init(form: HTMLFormElement) {
		if (data?.name) [data.first_name, data.last_name] = data.name.split(' ');
		for (const key in data) {
			const el = form.elements.namedItem(key);
			if (el) el.value = data[key];
		}
		updateTagLabel();
	}

	onMount(async () => {
		token = getCookie('token');
		console.log("token", token);
		let allschool_api = apiUrl + '/admin/allschoolData/';
		let allteacher_api = apiUrl + '/admin/allteacherData/';
		let allsponsor_api = apiUrl + '/admin/allsponsorData/';
		let alltag_api = apiUrl + '/admin/tags/';

		const response = await axios.get(allschool_api, {
			headers: {
				Authorization: `Bearer ${token}`
			}
		});
		schoolData = response.data.result;
		console.log(schoolData);

		const responsetags = await axios.get(alltag_api, {
			headers: {
				Authorization: `Bearer ${token}`
			}
		});
		tagData = responsetags.data.result;
		console.log("This is tag data", tagData);

		const responsesponsor = await axios.get(allsponsor_api, {
			headers: {
				Authorization: `Bearer ${token}`
			}
		});
		sponsorData = responsesponsor.data.result;
		console.log(sponsorData);

		const responseteacher = await axios.get(allteacher_api, {
			headers: {
				Authorization: `Bearer ${token}`
			}
		});
		teacherData = responseteacher.data.result;
		console.log(teacherData);

		updateTagLabel();
	});

	afterUpdate(() => {
		if (open) {
			if (data.is_admin) {
				is_admin_label = "True";
			} else {
				is_admin_label = "False";
			}
		}
	});
</script>

<Modal bind:open title={Object.keys(data).length ? 'Edit Club' : 'Add new user'} size="md" class="m-4">
	<!-- Modal body -->
	<div class="space-y-6 p-0">
		<form on:submit={handleSubmit} use:init>
			<div class="grid grid-cols-6 gap-6">
				<Label class="col-span-6 space-y-2 sm:col-span-3">
					<span>Name</span>
					<Input bind:value={data.club_name} name="name" class="border outline-none" placeholder="e.g. Bonnie" required />
				</Label>

				<Label class="col-span-6 space-y-2 sm:col-span-3">
					<span>Motto</span>
					<Input bind:value={data.motto} name="email" type="email" class="border outline-none" placeholder="e.g. bonnie@flowbite.com" />
				</Label>
				<Label class="col-span-6 space-y-2 sm:col-span-3">
					<span>Description</span>
					<Input bind:value={data.description} name="student id" type="text" class="border outline-none" placeholder="e.g. bonnie@flowbite.com" />
				</Label>

				<Label class="col-span-6 space-y-2 sm:col-span-3">
					<span>Club Type</span>
					<div class="pt-5">
						<Button>{club_type_label}<ChevronDownOutline class="w-6 h-6 ms-2 text-white dark:text-white" /></Button>
						<Dropdown>
							<DropdownItem on:click={() => handleClubTypeChange('school')}>School</DropdownItem>
							<DropdownItem on:click={() => handleClubTypeChange('sponsor')}>Sponsor</DropdownItem>
						</Dropdown>
					</div>
				</Label>

				<Label class="col-span-6 space-y-2 sm:col-span-3">
					<span>Total Students</span>
					<Input bind:value={data.total_students} name="student id" type="text" class="border outline-none" placeholder="e.g. bonnie@flowbite.com" />
				</Label>

				{#if data.club_type === 'school'}
					<Label class="col-span-6 space-y-2 sm:col-span-3">
						<span>Teacher</span>
						<div class="pt-5">
							<Button>{teacher_label}<ChevronDownOutline class="w-6 h-6 ms-2 text-white dark:text-white" /></Button>
							<Dropdown>
								{#each teacherData as teacher}
									<DropdownItem on:click={() => handleTeacherSelect(teacher.id, teacher.name)}>{teacher.name}, {teacher.teacher_designation}</DropdownItem>
								{/each}
							</Dropdown>
						</div>
					</Label>
				{/if}

				{#if data.club_type === 'sponsor'}
					<Label class="col-span-6 space-y-2 sm:col-span-3">
						<span>Sponsor</span>
						<div class="pt-5">
							<Button>{sponsor_label}<ChevronDownOutline class="w-6 h-6 ms-2 text-white dark:text-white" /></Button>
							<Dropdown>
								{#each sponsorData as sponsor}
									<DropdownItem on:click={() => handleSponsorSelect(sponsor.id, sponsor.name)}>{sponsor.name}, {sponsor.email}</DropdownItem>
								{/each}
							</Dropdown>
						</div>
					</Label>
				{/if}

				<Label class="col-span-6 space-y-2 sm:col-span-3">
					<span>Tags</span>
					<div class="pt-5">
						<Button>{tag_label}<ChevronDownOutline class="w-6 h-6 ms-2 text-white dark:text-white" /></Button>
						<Dropdown class="w-44 p-3 space-y-3 text-sm">
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
		<Button on:click={handleSubmit}>{Object.keys(data).length ? 'Save all' : 'Add user'}</Button>
	</div>
</Modal>