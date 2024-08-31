<script lang="ts">
	import {  Button, Input, Label, Modal, Textarea,Dropdown, DropdownItem, DropdownDivider, DropdownHeader } from 'flowbite-svelte';
	import axios from 'axios';
    import { ChevronDownOutline } from 'flowbite-svelte-icons';
	import { onMount, afterUpdate } from 'svelte';
	export let open: boolean = false; // modal control

	export let data: Record<string, string> = {};
	const apiUrl = process.env.VITE_API_URL;
	let user_label = "Select School";
	let student_medium_label = "Account Type";
	let is_admin_label = "Is Admin";
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
    function handleStudentVerificationChange(event) {
        data.isVerified = event;
        if(event===true){
            student_medium_label="True";
        }else{
            student_medium_label="False";
        }
    }

	async function handleSubmit() {
		console.log("Inside submit");
		console.log(data);
		console.log(data.id);
		console.log(token);
		data.user_type = "student";

		try {
			const response = await axios.patch(`${apiUrl}/admin/updatingTeacherVerification/`, data, {
				headers: {
					Authorization: `Bearer ${token}`
				}
			});
			open = false;
			window.location.reload();
			console.log(response.data); // Handle response data as needed
		} catch (error) {
			console.error('Error:', error);
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
		token = getCookie('token');
		console.log("token", token);
	});

	afterUpdate(() => {
		if (open && data.student_medium_of_education) {
			if (data.student_medium_of_education === "Bangla") {
				student_medium_label = "Bangla";
			} else {
				student_medium_label = "English";
			}
		}

		if (open) {
			console.log("-----------------------{}")
			console.log(data.is_admin);
			if (data.is_admin) {
				is_admin_label = "True";
			} else {
				is_admin_label = "False";
			}
		}
	});
</script>

<Modal
	bind:open
	title={Object.keys(data).length ? 'Verification Teacher' : 'Add new user'}
	size="md"
	class="m-4"
>
	<!-- Modal body -->
	<div class="space-y-6 p-0">
		<form on:submit={handleSubmit} use:init>
			<div class="grid grid-cols-6 gap-6">
                <Label class="col-span-6 space-y-2 sm:col-span-3">
					<span>Verification</span>
					<!-- <Input bind:value={data.account_type} name="account_type" class="border outline-none" placeholder="e.g. Green" required /> -->
					<div class="pt-5">
						<Button >{data.isVerified}<ChevronDownOutline class="w-6 h-6 ms-2 text-white dark:text-white" /></Button>
						<Dropdown>
							<DropdownItem  on:click={() => handleStudentVerificationChange(true)}>True</DropdownItem>
							<DropdownItem  on:click={() => handleStudentVerificationChange(false)}>False</DropdownItem>
						</Dropdown>
					</div>
				</Label>


			</div>
		</form>

		<!-- Display verification images as a list -->
		<div class="space-y-4 mt-4">
			{#each data.verificationfileUrls as url}
				<img src={url} alt="Verification Image" class="w-full h-auto rounded-md shadow-md" />
			{/each}
		</div>
	</div>

	<!-- Modal footer -->
	<div slot="footer">
		<Button on:click={handleSubmit}>{Object.keys(data).length ? 'Save all' : 'Add user'}</Button>
	</div>
</Modal>
