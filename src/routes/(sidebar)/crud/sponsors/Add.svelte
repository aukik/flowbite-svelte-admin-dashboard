<script lang="ts">
	import { Button, Input, Label, Modal, Textarea, Dropdown, DropdownItem, DropdownDivider, DropdownHeader} from 'flowbite-svelte';
	import { ChevronDownOutline } from 'flowbite-svelte-icons';
	import axios from 'axios';
	import { onMount } from 'svelte';
	export let open: boolean = false; // modal control

	export let data: Record<string, string> = {};


	let token;

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
    //console.log(data.id);
	console.log(token);
	data.user_type = "student"


    try {
        const userDataResponse = await axios.get('http://localhost:3000/admin/userData', {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });

        // Extracting the created_by_id from the response
        const createdById = userDataResponse.data.user.id;
        console.log('Created By ID:', createdById);

        // Assigning the created_by_id to data
        data.created_by_id = createdById;
		data.created_by_account_type = "admin";


        const response = await axios.post('http://localhost:3000/admin/sponsorRegistration/', data, {
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
	;


	onMount(async () => {
  // Retrieve the token from session storage
  //const token = sessionStorage.getItem('token');

  token = getCookie('token');
  console.log("token",token);

  



});
</script>

<Modal
	bind:open
	title={Object.keys(data).length ? 'Edit user' : 'Add new Sponsor'}
	size="md"
	class="m-4"
>
	<!-- Modal body -->
	<div class="space-y-6 p-0">
		<form on:submit={handleSubmit} use:init>
			<div class="grid grid-cols-6 gap-6">
				<Label class="col-span-6 space-y-2 sm:col-span-3">
					<span>Name</span>
					<Input bind:value={data.name} name="name" class="border outline-none" placeholder="e.g. Bonnie" required />
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
					<span>Passowrd</span>
					<Input
					bind:value={data.password}
						name="student_id"
						type="password"
						class="border outline-none"
						placeholder="e.g. bonnie@flowbite.com"
					/>
				</Label>









			</div>
		</form>
	</div>

	<!-- Modal footer -->
	<div slot="footer">
		<Button on:click = {handleSubmit}>{Object.keys(data).length ? 'Save all' : 'Add Sponsor'}</Button>
	</div>
</Modal>
