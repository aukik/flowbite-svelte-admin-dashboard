<script lang="ts">
	import { Button, Input, Label, Modal,  } from 'flowbite-svelte';

	import axios from 'axios';
	import { onMount} from 'svelte';
	export let open: boolean = false; // modal control

	export let data: Record<string, string> = {};



const apiUrl = process.env.VITE_API_URL;
console.log('API URL:', apiUrl);



	let token:any;
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

	let tagupdate_api = apiUrl + '/admin/tag';
    try {
        const response = await axios.patch(tagupdate_api,
				{
					name:data?.name,
					id:data?.id
				}
				, {
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
	1;


	onMount(async () => {
  // Retrieve the token from session storage
  //const token = sessionStorage.getItem('token');

  token = getCookie('token');

});




</script>

<Modal
	bind:open

	title={'Edit Tag'}

	size="md"
	class="m-4"
>
	<!-- Modal body -->
	<div class="space-y-6 p-0">
		<form on:submit={handleSubmit} use:init>
			<div class="grid grid-cols-6 gap-6">

				<Label class="col-span-6 space-y-2 sm:col-span-3">
					<span>Tag Name</span>
					<Input
					bind:value={data.name}
						name="name"
						type="text"
						class="border outline-none"
						placeholder="e.g. Technology, Sports"
					/>
				</Label>


			</div>
		</form>
	</div>

	<!-- Modal footer -->
	<div slot="footer">
		<Button on:click = {handleSubmit}>{"Update"}</Button>
	</div>
</Modal>
