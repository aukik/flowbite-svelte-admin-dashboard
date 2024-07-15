<script lang="ts">
	import { Button, CloseButton, Heading, Modal } from 'flowbite-svelte';
	import { ExclamationCircleOutline } from 'flowbite-svelte-icons';
	import axios from 'axios';
	import { onMount } from 'svelte';
	export let open: boolean = false; // modal control
	export let data: Record<string, string> = {};
	let token:any;

  const apiUrl = process.env.VITE_API_URL;
  console.log('API URL:', apiUrl);
  let tagDelete_api = apiUrl +'/admin/tag/'

	function getCookie(name:any) {
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

    try {
        const response = await axios.delete(tagDelete_api+"?id="+data?.id,  {
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

  token = getCookie('token');

});
</script>

<Modal bind:open size="sm">
	<ExclamationCircleOutline class="mx-auto mb-4 mt-8 h-10 w-10 text-red-600" />

	<h3 class="mb-6 text-center text-lg text-gray-500 dark:text-gray-400">
		Are you sure you want to delete this AnnouncedFeaturedPosts?
	</h3>

	<div class="flex items-center justify-center">
		<Button on:click = {handleSubmit}  color="red" class="mr-2">Yes, I'm sure</Button>
		<Button color="alternative" on:click={() => (open = false)}>No, cancel</Button>
	</div>
</Modal>
