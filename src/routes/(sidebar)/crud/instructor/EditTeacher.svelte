<script lang="ts">
	import { Button, Input, Label, Modal, Dropdown, DropdownItem, Checkbox } from 'flowbite-svelte';
	import { ChevronDownOutline } from 'flowbite-svelte-icons';
	import axios from 'axios';
	import { onMount, afterUpdate } from 'svelte';

	export let open: boolean = false; // modal control
	export let data: Record<string, string> = {}; // instructor data to edit

	const apiUrl = process.env.VITE_API_URL;
	let token;
	let tagData: any = [];
	let tag_label = 'Select Tags';

	// Check if a tag is selected
	function isTagSelected(tagId: string) {
		return data.tags && data.tags.some(tag => tag.tag.id === tagId);
	}

	// Handle tag selection
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
	};

	// Update the tag label
	const updateTagLabel = () => {
		if (!data.tags || data.tags.length === 0) {
			tag_label = 'Select Tags';
		} else if (data.tags.length === 1) {
			tag_label = data.tags[0].tag.name;
		} else {
			tag_label = `${data.tags.length} tags selected`;
		}
	};

	// Get token from cookies
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

	// Handle form submission
	async function handleSubmit() {
		console.log("Inside submit");
		console.log(data);

		// Prepare the tags to send
		const tagsToSend = data.tags ? data.tags.map(tag => ({ tagId: tag.tag.id })) : [];

		// API endpoint for updating the instructor
		let instructorUpdateApi = `${apiUrl}/admin/editInstructor`;

		try {
			// Make the PATCH request to update the instructor
			const response = await axios.patch(instructorUpdateApi, { ...data, tags: tagsToSend }, {
				headers: {
					Authorization: `Bearer ${token}`
				}
			});

			// Close the modal and reload the page
			open = false;
			window.location.reload();
			console.log(response.data); // Handle response data as needed
		} catch (error) {
			console.error('Error:', error);
		}
	}

	// Initialize the modal with existing data
	function init(form: HTMLFormElement) {
		for (const key in data) {
			console.log(key, data[key]);
			const el = form.elements.namedItem(key);
			if (el) el.value = data[key];
		}
		updateTagLabel();
	}

	// Fetch tags on component mount
	onMount(async () => {
		token = getCookie('token');
		console.log("Token:", token);

		// Fetch all tags
		let allTagApi = `${apiUrl}/admin/tags/`;
		const responseTags = await axios.get(allTagApi, {
			headers: {
				Authorization: `Bearer ${token}`
			}
		});
		tagData = responseTags.data.result;
		console.log("This is tag data", tagData);
		updateTagLabel();
	});

	// Update tag label after data changes
	afterUpdate(() => {
		updateTagLabel();
	});
</script>

<Modal
	bind:open
	title="Edit Instructor"
	size="md"
	class="m-4"
>
	<!-- Modal body -->
	<div class="space-y-6 p-0">
		<form on:submit={handleSubmit} use:init>
			<div class="grid grid-cols-6 gap-6">
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

				<Label class="col-span-6 space-y-2">
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
		<Button on:click={handleSubmit}>Save Changes</Button>
	</div>
</Modal>