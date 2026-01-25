<script lang="ts">
	import {
		Avatar,
		Breadcrumb,
		BreadcrumbItem,
		Button,
		Checkbox,
		Heading,
		Indicator,
		Toast
	} from 'flowbite-svelte';
	import { Input, Table, TableBody, TableBodyCell, TableBodyRow, TableHead } from 'flowbite-svelte';
	import { TableHeadCell, Toolbar, ToolbarButton, ToolbarGroup } from 'flowbite-svelte';
	import { CogSolid, DotsVerticalOutline, DownloadSolid, MailBoxSolid, EyeOutline } from 'flowbite-svelte-icons';
	import {
		EditOutline,
		ExclamationCircleSolid,
		PlusOutline,
		TrashBinSolid,
		CheckCircleSolid,
		CloseCircleSolid
	} from 'flowbite-svelte-icons';
	import { imagesPath } from '$lib/variables';

	import CustomPayment from './CustomPayment.svelte';
	import AddCustomPayment from './AddCustomPayment.svelte';
	import Delete from './Delete.svelte';
	import EmailPreview from './EmailPreview.svelte';
	import MetaTag from '../../../../utils/MetaTag.svelte';
	import { onMount } from 'svelte';
	import axios from 'axios';
	import { CUSTOM_PAYMENT_TYPE_1 } from '../../../../../utils/global_variable';

	const apiUrl = process.env.VITE_API_URL;
	
	// Set payment_type to python-course for this specific route
	const payment_type = CUSTOM_PAYMENT_TYPE_1;

	function setCookie(name, value, days) {
		let expires = "";
		if (days) {
			let date = new Date();
			date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
			expires = "; expires=" + date.toUTCString();
		}
		document.cookie = name + "=" + (value || "") + expires + "; path=/";
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

	// Define the base URL for the API
	const BASE_URL = apiUrl;

	// Define customPaymentData variable
	let customPaymentData = [];
	let selectedPayments = [];
	let selectAll = false;
	let emailSending = false;
	let emailResults = null;
	let showToast = false;
	let toastMessage = '';
	let toastType = 'success'; // 'success' or 'error'

	// Function to fetch all custom payment data
	const fetchAllCustomPaymentData = async (token) => {
		try {

			const url = `${BASE_URL}/admin/allcustomPaymentData?search_value=${payment_type}&search_by=what_are_you_purchasing`;
			console.log('url==', url);
			const response = await axios.get(url, {
				headers: {
					Authorization: `Bearer ${token}`
				}
			});

			// Update customPaymentData with response data
			customPaymentData = response.data.result;
			console.log('Custom Payment Data fetched successfully:', customPaymentData);
		} catch (error) {
			// Log and handle errors
			console.error('Error fetching custom payment data:', error);
			console.error('Error response:', error.response?.data);
		}
	};

	const BASE_URL_refreshtoken = apiUrl;

	// Function to get refresh token
	const getRefreshToken = async () => {
		try {
			// Retrieve token and refresh token from session storage
			const token = sessionStorage.getItem('token');
			const refreshToken = sessionStorage.getItem('refreshToken');

			// Check if both token and refresh token exist
			if (!token || !refreshToken) {
				throw new Error('Token or refresh token not found in session storage.');
			}

			// Make a POST request to the refreshToken endpoint with the token and refresh token
			console.log(token);
			console.log(refreshToken);
			const response = await axios.post(`${BASE_URL_refreshtoken}/admin/refreshToken/`, {
				token,
				refreshToken
			}, {
				headers: {
					'Content-Type': 'application/json'
				}
			});

			// Extract the new token and refresh token from the response
			const newToken = response.data.token;
			const newRefreshToken = response.data.refreshToken;

			// Update session storage with the new tokens
			sessionStorage.setItem('token', newToken);
			sessionStorage.setItem('refreshToken', newRefreshToken);

			console.log('Tokens refreshed successfully.');
			return newToken;
		} catch (error) {
			console.error('Error refreshing token:', error.message);
			throw error;
		}
	};

	// Function to start polling for token refresh
	const startPolling = () => {
		setInterval(async () => {
			try {
				const newToken = await getRefreshToken();
				await fetchAllCustomPaymentData(newToken);
			} catch (error) {
				console.error('Error during polling:', error.message);
			}
		}, 10000); // Poll every 10 seconds
	};

	// On component mount
	onMount(async () => {
		// Retrieve the token from session storage
		const token = getCookie('token');

		if (token) {
			// Fetch all custom payment data using the token
			await fetchAllCustomPaymentData(token);

			// Start polling for token refresh
			startPolling();
		} else {
			console.error('Token not found in session storage.');
		}
	});

	let openCustomPayment: boolean = false;
	let addCustomPayment: boolean = false;
	let openDelete: boolean = false;
	let openEmailPreview: boolean = false;
	let current_customPayment: any = {};

	function init(form: HTMLFormElement) {
		const data = new FormData(form);
		current_customPayment.name = data.get('name');
		current_customPayment.email = data.get('email');
		current_customPayment.amount = data.get('amount');
		current_customPayment.what_are_you_purchasing = data.get('what_are_you_purchasing');
		current_customPayment.reference = data.get('reference');
		current_customPayment.contact_number = data.get('contact_number');
		current_customPayment.transaction_id = data.get('transaction_id');
	}

	const handleEdit = (customPayment) => {
		current_customPayment = { ...customPayment };
		openCustomPayment = true;
	};

	const handleDelete = (customPayment) => {
		current_customPayment = { ...customPayment };
		openDelete = true;
	};

	const handleAdd = () => {
		current_customPayment = {
			what_are_you_purchasing: payment_type // Pre-fill with current payment type
		};
		addCustomPayment = true;
	};

	// Format date function
	const formatDate = (dateString) => {
		const date = new Date(dateString);
		return date.toLocaleDateString() + ' ' + date.toLocaleTimeString();
	};

	// Format payment type for display
	const formatPaymentType = (type) => {
		return type ? type.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase()) : '';
	};

	// Handle select all checkbox
	const handleSelectAll = () => {
		if (selectAll) {
			selectedPayments = customPaymentData.map(payment => payment.id);
		} else {
			selectedPayments = [];
		}
	};

	// Handle individual checkbox
	const handleSelectPayment = (paymentId, checked) => {
		if (checked) {
			selectedPayments = [...selectedPayments, paymentId];
		} else {
			selectedPayments = selectedPayments.filter(id => id !== paymentId);
		}
		
		// Update selectAll state
		selectAll = selectedPayments.length === customPaymentData.length;
	};

	// Send Python course emails
	const sendPythonCourseEmails = async () => {
		if (selectedPayments.length === 0) {
			showToastMessage('Please select at least one payment to send emails.', 'error');
			return;
		}

		emailSending = true;
		emailResults = null;

		try {
			console.log('selectedPayments', selectedPayments)
			const token = getCookie('token');
			const response = await axios.post(
				`${apiUrl}/admin/sendPythonCourseEmails`,
				{ customPaymentIds: selectedPayments },
				{
					headers: {
						Authorization: `Bearer ${token}`,
						'Content-Type': 'application/json'
					}
				}
			);

			emailResults = response.data;
			showToastMessage(
				`Emails sent! ${response.data.summary.successful} successful, ${response.data.summary.failed} failed. ${response.data.summary.emailsMarkedAsVerified} emails marked as verified.`,
				'success'
			);

			console.log('emailResults====', emailResults)
			
			// Clear selections after successful send
			selectedPayments = [];
			selectAll = false;

			// Refresh the data to show updated verification status
			const refreshToken = getCookie('token');
			if (refreshToken) {
				await fetchAllCustomPaymentData(refreshToken);
			}

		} catch (error) {
			console.error('Error sending emails:', error);
			showToastMessage(
				error.response?.data?.error || 'Failed to send emails. Please try again.',
				'error'
			);
		} finally {
			emailSending = false;
		}
	};

	// Show toast message
	const showToastMessage = (message, type) => {
		toastMessage = message;
		toastType = type;
		showToast = true;
		
		// Auto-hide toast after 5 seconds
		setTimeout(() => {
			showToast = false;
		}, 5000);
	};
</script>

<MetaTag
	title="Custom Payment - Python Course"
	description="Manage custom payments for Python Course"
/>

<main class="relative h-full w-full overflow-y-auto bg-gray-50 p-4 dark:bg-gray-900">
	<div class="mx-auto max-w-screen-2xl">
		<Breadcrumb class="mb-5">
			<BreadcrumbItem href="/" home>Home</BreadcrumbItem>
			<BreadcrumbItem href="/crud">CRUD</BreadcrumbItem>
			<BreadcrumbItem>Custom Payment - Python Course</BreadcrumbItem>
		</Breadcrumb>
		<Heading tag="h1" class="text-xl font-semibold text-gray-900 dark:text-white sm:text-2xl">
			Custom Payment - Python Course
		</Heading>
		<p class="mb-6 text-gray-500 dark:text-gray-400">
			Manage custom payments for Python Course
		</p>

		<div class="relative overflow-hidden bg-white shadow-md dark:bg-gray-800 sm:rounded-lg">
			<Toolbar embedded class="w-full py-4 text-left text-gray-500 dark:text-gray-400">
				<ToolbarGroup>
					<Button on:click={handleAdd} class="whitespace-nowrap">
						<PlusOutline class="mr-2 h-3.5 w-3.5" />
						Add Custom Payment
					</Button>
					<Button 
						on:click={() => openEmailPreview = true}
						disabled={selectedPayments.length === 0}
						class="whitespace-nowrap ml-2"
						color="alternative"
					>
						<EyeOutline class="mr-2 h-3.5 w-3.5" />
						Preview Email
					</Button>
					<Button 
						on:click={sendPythonCourseEmails} 
						disabled={selectedPayments.length === 0 || emailSending}
						class="whitespace-nowrap ml-2"
						color="blue"
					>
						<MailBoxSolid class="mr-2 h-3.5 w-3.5" />
						{#if emailSending}
							Sending Emails...
						{:else}
							Send Python Course Emails ({selectedPayments.length})
						{/if}
					</Button>
				</ToolbarGroup>
				<ToolbarGroup>
					<ToolbarButton>
						<DownloadSolid class="h-3.5 w-3.5" />
					</ToolbarButton>
					<ToolbarButton>
						<CogSolid class="h-3.5 w-3.5" />
					</ToolbarButton>
					<ToolbarButton>
						<DotsVerticalOutline class="h-3.5 w-3.5" />
					</ToolbarButton>
				</ToolbarGroup>
			</Toolbar>

			{#if selectedPayments.length > 0}
				<div class="bg-blue-50 border-l-4 border-blue-400 p-4 mb-4 dark:bg-blue-900 dark:border-blue-600">
					<div class="flex">
						<div class="flex-shrink-0">
							<MailBoxSolid class="h-5 w-5 text-blue-400" />
						</div>
						<div class="ml-3">
							<p class="text-sm text-blue-700 dark:text-blue-200">
								{selectedPayments.length} payment{selectedPayments.length > 1 ? 's' : ''} selected for email sending.
								Click "Send Python Course Emails" to notify these users about their verified registration.
							</p>
						</div>
					</div>
				</div>
			{/if}

			{#if emailResults}
				<div class="bg-green-50 border-l-4 border-green-400 p-4 mb-4 dark:bg-green-900 dark:border-green-600">
					<div class="flex">
						<div class="flex-shrink-0">
							<CheckCircleSolid class="h-5 w-5 text-green-400" />
						</div>
						<div class="ml-3">
							<h3 class="text-sm font-medium text-green-800 dark:text-green-200">
								Email Sending Results
							</h3>
							<div class="mt-2 text-sm text-green-700 dark:text-green-200">
								<p>Total: {emailResults.summary.total}</p>
								<p>Successful: {emailResults.summary.successful}</p>
								<p>Failed: {emailResults.summary.failed}</p>
								<p>Emails marked as verified: {emailResults.summary.emailsMarkedAsVerified || 0}</p>
							</div>
							{#if emailResults.results.some(r => !r.success)}
								<div class="mt-2">
									<p class="text-sm font-medium text-red-800 dark:text-red-200">Failed emails:</p>
									<ul class="list-disc list-inside text-sm text-red-700 dark:text-red-200">
										{#each emailResults.results.filter(r => !r.success) as failedResult}
											<li>{failedResult.email || failedResult.name} - {failedResult.error}</li>
										{/each}
									</ul>
								</div>
							{/if}
						</div>
					</div>
				</div>
			{/if}

			<Table hoverable={true}>
				<TableHead>
					<TableHeadCell>
						<Checkbox 
							bind:checked={selectAll} 
							on:change={handleSelectAll}
						/>
					</TableHeadCell>
					<TableHeadCell>Name</TableHeadCell>
					<TableHeadCell>Email</TableHeadCell>
					<TableHeadCell>Email Verified</TableHeadCell>
					<TableHeadCell>Amount</TableHeadCell>
					<TableHeadCell>Contact Number</TableHeadCell>
					<TableHeadCell>Transaction ID</TableHeadCell>
					<TableHeadCell>School Name</TableHeadCell>
					<TableHeadCell>Grade</TableHeadCell>
					<TableHeadCell>Coupon Code</TableHeadCell>
					<TableHeadCell>Final Amount</TableHeadCell>
					<TableHeadCell>Reference</TableHeadCell>
					<TableHeadCell>Created At</TableHeadCell>
					<TableHeadCell>Actions</TableHeadCell>
				</TableHead>
				<TableBody>
					{#each customPaymentData as customPayment, index}
						<TableBodyRow>
							<TableBodyCell>
								<Checkbox 
									checked={selectedPayments.includes(customPayment.id)}
									on:change={(e) => handleSelectPayment(customPayment.id, e.target.checked)}
								/>
							</TableBodyCell>
							<TableBodyCell>{customPayment.name || 'N/A'}</TableBodyCell>
							<TableBodyCell>
								<div class="flex items-center">
									{customPayment.email || 'N/A'}
									{#if !customPayment.email}
										<ExclamationCircleSolid class="ml-2 h-4 w-4 text-red-500" title="No email address" />
									{/if}
								</div>
							</TableBodyCell>
							<TableBodyCell>
								<div class="flex items-center">
									{#if customPayment.emailVerified}
										<CheckCircleSolid class="h-4 w-4 text-green-500 mr-1" />
										<span class="text-green-700 dark:text-green-400">Verified</span>
									{:else}
										<CloseCircleSolid class="h-4 w-4 text-red-500 mr-1" />
										<span class="text-red-700 dark:text-red-400">Not Verified</span>
									{/if}
								</div>
							</TableBodyCell>
							<TableBodyCell>{customPayment.amount || 'N/A'}</TableBodyCell>
							<TableBodyCell>{customPayment.contact_number || 'N/A'}</TableBodyCell>
							<TableBodyCell>{customPayment.transaction_id || 'N/A'}</TableBodyCell>
							<TableBodyCell>{customPayment.school_name || 'N/A'}</TableBodyCell>
							<TableBodyCell>{customPayment.grade || 'N/A'}</TableBodyCell>
							<TableBodyCell>
								{#if customPayment.coupon_code}
									<span class="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded">
										{customPayment.coupon_code}
									</span>
								{:else}
									N/A
								{/if}
							</TableBodyCell>
							<TableBodyCell>
								{#if customPayment.final_amount}
									<span class="font-semibold">৳{customPayment.final_amount}</span>
									{#if customPayment.discount_amount}
										<span class="text-green-600 text-sm block">(-৳{customPayment.discount_amount})</span>
									{/if}
								{:else}
									{customPayment.amount || 'N/A'}
								{/if}
							</TableBodyCell>
							<TableBodyCell>{customPayment.reference || 'N/A'}</TableBodyCell>
							<TableBodyCell>{formatDate(customPayment.createdAt)}</TableBodyCell>
							<TableBodyCell>
								<Button
									on:click={() => handleEdit(customPayment)}
									class="mr-2 font-medium text-primary-600 hover:underline dark:text-primary-500"
									color="none"
									size="sm"
								>
									<EditOutline class="h-4 w-4" />
								</Button>
								<Button
									on:click={() => handleDelete(customPayment)}
									class="font-medium text-red-600 hover:underline dark:text-red-500"
									color="none"
									size="sm"
								>
									<TrashBinSolid class="h-4 w-4" />
								</Button>
							</TableBodyCell>
						</TableBodyRow>
					{/each}
				</TableBody>
			</Table>
		</div>
	</div>
</main>

<CustomPayment bind:open={openCustomPayment} bind:data={current_customPayment} />
<AddCustomPayment bind:open={addCustomPayment} bind:data={current_customPayment} />
<Delete bind:open={openDelete} bind:data={current_customPayment} />
<EmailPreview bind:open={openEmailPreview} selectedCount={selectedPayments.length} />

<!-- Toast for notifications -->
{#if showToast}
	<Toast 
		position="top-right" 
		color={toastType === 'success' ? 'green' : 'red'}
		class="mb-4"
	>
		<svelte:fragment slot="icon">
			{#if toastType === 'success'}
				<CheckCircleSolid class="w-5 h-5" />
			{:else}
				<CloseCircleSolid class="w-5 h-5" />
			{/if}
		</svelte:fragment>
		{toastMessage}
	</Toast>
{/if}