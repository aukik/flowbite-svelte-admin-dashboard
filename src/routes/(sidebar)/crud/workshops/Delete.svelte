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
    // Assuming `token` is defined somewhere accessible


    // Assuming `data` contains the payload you want to send in the request
    console.log("Inside submit");
    console.log(data);
    console.log(data.id);
	console.log(token);
  data.user_type = "student"

    try {
        const response = await axios.post(`${apiUrl}/admin/workshopDelete/`, data, {
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


onMount(async () => {
  // Retrieve the token from session storage
  //const token = sessionStorage.getItem('token');

  token = getCookie('token');
  console.log("token",token);


});
</script>

<Modal bind:open size="sm">
	<ExclamationCircleOutline class="mx-auto mb-4 mt-8 h-10 w-10 text-red-600" />

	<h3 class="mb-6 text-center text-lg text-gray-500 dark:text-gray-400">
		Are you sure you want to delete this Workshop?
	</h3>

	<div class="flex items-center justify-center">
		<Button on:click = {handleSubmit}  color="red" class="mr-2">Yes, I'm sure</Button>
		<Button color="alternative" on:click={() => (open = false)}>No, cancel</Button>
	</div>
</Modal>
