<script lang="ts">
	import { Button, CloseButton, Heading, Modal } from 'flowbite-svelte';
	import { ExclamationCircleOutline } from 'flowbite-svelte-icons';
	import axios from 'axios';
	import { onMount } from 'svelte';
	export let open: boolean = false; // modal control
	export let data: Record<string, string> = {};
	let token;
	const apiUrl = process.env.VITE_API_URL;

	// Function to retrieve a specific cookie by name
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

	// Function to handle the delete request for an instructor
	async function handleDeleteInstructor() {
		console.log("Inside delete instructor");
		console.log(data);
		console.log(data.id);
		console.log(token);

		try {
			// Send DELETE request to the /admin/deleteInstructor endpoint
			const response = await axios.delete(`${apiUrl}/admin/deleteInstructor?id=${data.id}`, {
				headers: {
					Authorization: `Bearer ${token}`
				}
			});
			open = false; // Close the modal
			window.location.reload(); // Reload the page to reflect changes
			console.log(response.data); // Handle response data as needed
		} catch (error) {
			console.error('Error:', error); // Log any errors
		}
	}

	// Retrieve the token on component mount
	onMount(async () => {
		token = getCookie('token');
		console.log("token", token);
	});
</script>

<Modal bind:open size="sm">
	<ExclamationCircleOutline class="mx-auto mb-4 mt-8 h-10 w-10 text-red-600" />

	<h3 class="mb-6 text-center text-lg text-gray-500 dark:text-gray-400">
		Are you sure you want to delete this Instructor?
	</h3>

	<div class="flex items-center justify-center">
		<Button on:click={handleDeleteInstructor} color="red" class="mr-2">Yes, I'm sure</Button>
		<Button color="alternative" on:click={() => (open = false)}>No, cancel</Button>
	</div>
</Modal>