<script lang="ts">
	import { Button, Input, Label, Modal, Textarea } from 'flowbite-svelte';
	import axios from 'axios';
	import { onMount } from 'svelte';
	export let open: boolean = false; // modal control
	import { Dropdown, DropdownItem, DropdownDivider, DropdownHeader} from 'flowbite-svelte';
	import { ChevronDownOutline } from 'flowbite-svelte-icons';
	export let data: Record<string, string> = {};
	const apiUrl = process.env.VITE_API_URL;
let user_label="Select User";
	let inputValue;
	let token;
	const handleUserSelect = (id,name) => {
	user_label=name
	data.userId=id
}
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


    try {
        const response = await axios.post('process.env.VITE_API_URL/admin/addPost/', data, {
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
	let  userData=[];
	onMount(async () => {
  // Retrieve the token from session storage
  // const token = sessionStorage.getItem('token');

  token = getCookie('token');
	const response= await axios.get('process.env.VITE_API_URL/admin/alluserData/', {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
				userData=response.data
				console.log(userData)
  console.log("token",token);


});
</script>

<Modal
	bind:open
	title={Object.keys(data).length ? 'Edit Post' : 'Add New Post'}
	size="md"
	class="m-4"
>
	<!-- Modal body -->
	<div class="space-y-6 p-0">
		<form on:submit={handleSubmit} use:init>
			<div class="grid grid-cols-6 gap-6">
				<Label class="col-span-6 space-y-2 sm:col-span-3">
					<span>Post Title</span>
					<Input bind:value={data.title} name="name" class="border outline-none" placeholder="" required />
				</Label>
				<Label class="col-span-6 space-y-2 sm:col-span-3">
					<span>UserId</span>
					<!-- <Input bind:value={data.userId} name="name" class="border outline-none" placeholder="" required /> -->
					<span></span>

					<div class="pt-5">
						<Button >{user_label}<ChevronDownOutline class="w-6 h-6 ms-2 text-white dark:text-white" /></Button>
						<Dropdown>
							{#each userData as user}
								<DropdownItem  on:click={() => handleUserSelect(user?.id,user?.name)}>{user?.name}, {user?.email}</DropdownItem>
							<!-- <DropdownItem  on:click={() => handleIsAdminChange('false')}>False</DropdownItem> -->
							{/each}
						</Dropdown>
					</div>
				</Label>
                <Label class="col-span-6 space-y-2">
					<span>Post Content</span>
					<Textarea bind:value={data.text_content}
						id="biography"
						rows="4"
						class="bg-gray-50 outline-none dark:bg-gray-700"
						placeholder=""
					>
						👨‍💻Full-stack web developer. Open-source contributor.
					</Textarea>
				</Label>




			</div>
		</form>
	</div>

	<!-- Modal footer -->
	<div slot="footer">
		<Button on:click = {handleSubmit}>{Object.keys(data).length ? 'Save all' : 'Add user'}</Button>
	</div>
</Modal>
