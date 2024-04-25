<script lang="ts">
	import { Button, Input, Label, Modal, Textarea } from 'flowbite-svelte';
	import axios from 'axios';
	import { onMount } from 'svelte';
	export let open: boolean = false; // modal control

	export let data: Record<string, string> = {};

	let inputValue;
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
	

    try {
        const response = await axios.post('http://localhost:3000/admin/userRegistration/', data, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
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
  console.log("token",token);


});
</script>

<Modal
	bind:open
	title={Object.keys(data).length ? 'Edit user' : 'Add new user'}
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
					<span>Account Type</span>
					<Input bind:value={data.account_type} name="account_type" class="border outline-none" placeholder="e.g. Green" required />
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
					<span>Institution Name</span>
					<Input
					bind:value={data.institution_name}
						name="institution_name"
						class="border outline-none"
						placeholder="e.g. React Developer"
						required
					/>
				</Label>
				<Label class="col-span-6 space-y-2 sm:col-span-3">
					<span>Institution Address</span>
					<Input 
					bind:value={data.institution_address}
						name="institution_address"
						class="border outline-none"
						placeholder="e.g. React Developer"
						required
					/>
				</Label>

				<Label class="col-span-6 space-y-2 sm:col-span-3">
					<span>Teacher Accreditation</span>
					<Input bind:value={data.teacher_institution_accreditation}
						name="teacher_institution_accreditation"
						class="border outline-none"
						placeholder="e.g. React Developer"
						required
					/>
				</Label>
				<Label class="col-span-6 space-y-2 sm:col-span-3">
					<span>Teacher Designation</span>
					<Input bind:value={data.teacher_designation}
						name="teacher_designation"
						class="border outline-none"
						placeholder="e.g. React Developer"
						required
					/>
				</Label>
				<Label class="col-span-6 space-y-2 sm:col-span-3">
					<span>Student ID</span>
					<Input bind:value={data.student_id}
						name="student_id"
						class="border outline-none"
						placeholder="e.g. React Developer"
						required
					/>
				</Label>
				<Label class="col-span-6 space-y-2 sm:col-span-3">
					<span>Medium</span>
					<Input bind:value={data.student_medium_of_education}
						name="student_medium_of_education"
						class="border outline-none"
						placeholder="English"
						required
					/>
				</Label>
				<Label class="col-span-6 space-y-2 sm:col-span-3">
					<span>Is Admin</span>
					<Input bind:value={data.is_admin}
						name="is_admin"
						class="border outline-none"
						placeholder="e.g. React Developer"
						required
					/>
				</Label>
				<Label class="col-span-6 space-y-2 sm:col-span-3">
					<span>Password</span>
					<Input bind:value={data.password}
						name="password"
						class="border outline-none"
						placeholder="e.g. React Developer"
						required
					/>
				</Label>




			</div>
		</form>
	</div>

	<!-- Modal footer -->
	<div slot="footer">
		<Button on:click = {handleSubmit}>{Object.keys(data).length ? 'Save all' : 'Add user'}</Button>
	</div>
</Modal>
