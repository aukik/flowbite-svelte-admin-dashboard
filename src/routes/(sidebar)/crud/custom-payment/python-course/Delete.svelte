<script lang="ts">
	import { Button, CloseButton, Heading, Modal } from 'flowbite-svelte';
	import { ExclamationCircleOutline } from 'flowbite-svelte-icons';
	import axios from 'axios';
	import { onMount } from 'svelte';

	export let open: boolean = false; // modal control
	export let data: Record<string, string> = {};
	
	let token;
	const apiUrl = process.env.VITE_API_URL;

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

	async function handleSubmit() {
		console.log("Inside submit");
		console.log(data);
		console.log(data.id);
		console.log(token);

		try {
			const response = await axios.delete(`${apiUrl}/admin/customPaymentDelete?id=` + data?.id, {
				headers: {
					Authorization: `Bearer ${token}`
				}
			});
			open = false;
			window.location.reload();
			console.log(response.data);
		} catch (error) {
			console.error('Error deleting custom payment:', error);
		}
	}

	onMount(async () => {
		// Retrieve the token from session storage
		token = sessionStorage.getItem('token');
	});
</script>

<Modal bind:open size="md" autoclose={false} class="w-full">
	<div class="text-center">
		<ExclamationCircleOutline class="mx-auto mb-4 h-14 w-14 text-gray-400 dark:text-gray-200" />
		<h3 class="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
			Are you sure you want to delete this custom payment?
		</h3>
		<div class="flex justify-center gap-4">
			<Button color="red" on:click={handleSubmit}>Yes, I'm sure</Button>
			<Button color="alternative" on:click={() => (open = false)}>No, cancel</Button>
		</div>
	</div>
</Modal>