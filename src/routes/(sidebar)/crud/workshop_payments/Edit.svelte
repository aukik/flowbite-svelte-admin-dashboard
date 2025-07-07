<script lang="ts">
	import { Button, Input, Label, Modal } from 'flowbite-svelte';
	import axios from 'axios';
	import { onMount } from 'svelte';

	export let open: boolean = false; // modal control
	export let data: Record<any, any> = {}; // Student data
	export let workshopId: any = {}; // Workshop ID
	let payerAccount: string = ""; // Payer account (e.g., email)
	let transactionId: string = ""; // Transaction ID
	let paymentId: string = ""; // Payment ID
	let amount: number = 0; // Payment amount
	let token: string = '';
	const apiUrl: string = process.env.VITE_API_URL;
	let buttonDisabled: boolean = false;

	// Function to get token from cookies
	function getCookie(name: string) {
		const cookies = document.cookie.split(';');
		for (let i = 0; i < cookies.length; i++) {
			const cookie = cookies[i].trim();
			if (cookie.startsWith(name + '=')) {
				return cookie.substring(name.length + 1);
			}
		}
		return "";
	}

	// Function to handle form submission
	async function handleSubmit() {
		try {
			buttonDisabled = true;

			// Prepare the payment data
			const paymentData = {
				payerAccount: payerAccount || data?.email, // Use the provided payer account or student's email
				paymentID: paymentId, // Generate a unique payment ID
				trxID: transactionId, // Generate a unique transaction ID
				date: new Date(), // Current date and time
				amount: amount, // Payment amount
				workshopId: workshopId, // Workshop ID
				studentId: data?.id // Student ID
			};

			// Make the payment API call
			const paymentResponse = await axios.post(`${apiUrl}/admin/createStudentPayment`, paymentData, {
				headers: {
					Authorization: `Bearer ${token}`,
					'Content-Type': 'application/json'
				}
			});

			if (paymentResponse.status === 200) {
				alert('Payment processed successfully');
			} else {
				alert('Error processing payment');
			}

			buttonDisabled = false;
			open = false;
			window.location.reload();
		} catch (error) {
			console.error('Error:', error);
			alert('An error occurred. Please try again.');
			buttonDisabled = false;
		}
	}

	// Fetch token on component mount
	onMount(async () => {
		token = getCookie('token');
	});
</script>

<Modal
	bind:open
	title={"Make Payment"}
	size="md"
	class="m-4"
>
	<!-- Modal body -->
	<div class="space-y-6 p-0">
		<form on:submit|preventDefault={handleSubmit}>
			<div class="flex flex-col">
				<Label class="col-span-6 space-y-2 my-4">
					<span>Payer Account (PhoneNumber)</span>
					<Input
						type="number"
						name="payerAccount"
						placeholder="Enter payer PhoneNumber"
						class="border outline-none"
						bind:value={payerAccount}
						required
					/>
				</Label>

				<Label class="col-span-6 space-y-2 my-4">
					<span>Amount</span>
					<Input
						type="number"
						name="amount"
						placeholder="Enter payment amount"
						class="border outline-none"
						bind:value={amount}
						required
					/>
				</Label>
								<Label class="col-span-6 space-y-2 my-4">
					<span>Transaction ID</span>
					<Input
						type="text"
						name="amount"
						placeholder="Enter Transaction ID"
						class="border outline-none"
						bind:value={transactionId}
						required
					/>
				</Label>

				<Label class="col-span-6 space-y-2 my-4">
					<span>Payment ID</span>
					<Input
						type="text"
						name="paymentId"
						placeholder="Enter Payment ID"
						class="border outline-none"
						bind:value={paymentId}
						required
					/>
				</Label>
			</div>
		</form>
	</div>

	<!-- Modal footer -->
	<div slot="footer">
		<Button disabled={buttonDisabled} on:click={handleSubmit}>{'Make Payment'}</Button>
	</div>
</Modal>