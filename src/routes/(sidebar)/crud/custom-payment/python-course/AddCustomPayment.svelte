<script lang="ts">
	import { Button, Input, Label, Modal, Textarea, Dropdown, DropdownItem, DropdownHeader, Toggle } from 'flowbite-svelte';
	import { ChevronDownOutline } from 'flowbite-svelte-icons';
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
		console.log(token);

		try {
			const response = await axios.post(`${apiUrl}/admin/customPaymentRegistration`, data, {
				headers: {
					Authorization: `Bearer ${token}`,
					'Content-Type': 'application/json'
				}
			});
			open = false;
			window.location.reload();
			console.log(response.data);
		} catch (error) {
			console.error('Error creating custom payment:', error);
		}
	}

	onMount(async () => {
		// Retrieve the token from session storage
		token = getCookie('token');
	});

	function init(form: HTMLFormElement) {
		const formData = new FormData(form);
		data.name = formData.get('name') as string;
		data.email = formData.get('email') as string;
		data.emailVerified = data.emailVerified || false; // Keep the current toggle state
		data.amount = formData.get('amount') as string;
		data.what_are_you_purchasing = formData.get('what_are_you_purchasing') as string;
		data.reference = formData.get('reference') as string;
		data.contact_number = formData.get('contact_number') as string;
		data.transaction_id = formData.get('transaction_id') as string;
		data.school_name = formData.get('school_name') as string;
		data.grade = formData.get('grade') as string;
		data.coupon_code = formData.get('coupon_code') as string;
		data.discount_amount = formData.get('discount_amount') as string;
		data.final_amount = formData.get('final_amount') as string;
	}
</script>

<Modal bind:open size="md" autoclose={false} class="w-full">
	<form class="flex flex-col space-y-6" action="#" use:init>
		<h3 class="mb-4 text-xl font-medium text-gray-900 dark:text-white">Add New Custom Payment</h3>
		
		<Label class="space-y-2">
			<span>Name</span>
			<Input
				type="text"
				name="name"
				bind:value={data.name}
				placeholder="Enter name"
				required
			/>
		</Label>

		<Label class="space-y-2">
			<span>Email</span>
			<Input
				type="email"
				name="email"
				bind:value={data.email}
				placeholder="Enter email"
				required
			/>
		</Label>

		<Label class="space-y-2">
			<span>Email Verified</span>
			<Toggle bind:checked={data.emailVerified} />
		</Label>

		<Label class="space-y-2">
			<span>Amount</span>
			<Input
				type="text"
				name="amount"
				bind:value={data.amount}
				placeholder="Enter amount"
				required
			/>
		</Label>

		<Label class="space-y-2">
			<span>What are you purchasing</span>
			<Input
				type="text"
				name="what_are_you_purchasing"
				bind:value={data.what_are_you_purchasing}
				placeholder="Enter what you are purchasing"
				required
			/>
		</Label>

		<Label class="space-y-2">
			<span>Reference</span>
			<Input
				type="text"
				name="reference"
				bind:value={data.reference}
				placeholder="Enter reference"
			/>
		</Label>

		<Label class="space-y-2">
			<span>Contact Number</span>
			<Input
				type="text"
				name="contact_number"
				bind:value={data.contact_number}
				placeholder="Enter contact number"
			/>
		</Label>

		<Label class="space-y-2">
			<span>Transaction ID</span>
			<Input
				type="text"
				name="transaction_id"
				bind:value={data.transaction_id}
				placeholder="Enter transaction ID"
			/>
		</Label>

		<Label class="space-y-2">
			<span>School Name</span>
			<Input
				type="text"
				name="school_name"
				bind:value={data.school_name}
				placeholder="Enter school name"
			/>
		</Label>

		<Label class="space-y-2">
			<span>Grade</span>
			<Input
				type="text"
				name="grade"
				bind:value={data.grade}
				placeholder="Enter grade (e.g., Grade 8, Class 10)"
			/>
		</Label>

		<Label class="space-y-2">
			<span>Coupon Code</span>
			<Input
				type="text"
				name="coupon_code"
				bind:value={data.coupon_code}
				placeholder="Enter coupon code (optional)"
			/>
		</Label>

		<Label class="space-y-2">
			<span>Discount Amount</span>
			<Input
				type="number"
				name="discount_amount"
				bind:value={data.discount_amount}
				placeholder="Enter discount amount (optional)"
			/>
		</Label>

		<Label class="space-y-2">
			<span>Final Amount</span>
			<Input
				type="number"
				name="final_amount"
				bind:value={data.final_amount}
				placeholder="Enter final amount"
			/>
		</Label>

		<Button type="submit" class="w-full" on:click={handleSubmit}>Add Custom Payment</Button>
	</form>
</Modal>