<script lang="ts">
	import { Button, Input, Label, Modal, Textarea, Dropdown, DropdownItem, DropdownDivider, DropdownHeader} from 'flowbite-svelte';
	import { ChevronDownOutline } from 'flowbite-svelte-icons';
	import axios from 'axios';
	import { onMount } from 'svelte';
	export let open: boolean = false; // modal control


	let data: any = {
		name:""
	}
	let token:any;
	const apiUrl = process.env.VITE_API_URL;


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
		if(data?.name==="") return ;
		let endpoint = apiUrl + '/admin/tagRegistration/';

    // Making the POST request to the appropriate endpoint
    const response = await axios.post(endpoint, data, {
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



	onMount(async () => {
  // Retrieve the token from session storage
  //const token = sessionStorage.getItem('token');

  token = getCookie('token');


});
</script>

<Modal
	bind:open
	title={'Add new Tag'}
	size="md"
	class="m-4"
>
	<!-- Modal body -->
	<div class="space-y-6 p-0">
		<form on:submit={handleSubmit} use:init>
			<div class="grid grid-cols-6 gap-6">
				<Label class="col-span-6 space-y-2 sm:col-span-3">
					<span>Tag Name</span>
					<Input bind:value={data.name} name="name" class="border outline-none" placeholder="e.g. Technology, Traveling " required />
				</Label>


			</div>
		</form>
	</div>

	<!-- Modal footer -->
	<div slot="footer">
		<Button on:click = {handleSubmit}>Add Tag</Button>
	</div>
</Modal>
