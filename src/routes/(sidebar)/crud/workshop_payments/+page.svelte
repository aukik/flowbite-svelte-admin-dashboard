<script lang="ts">
	import { page } from '$app/stores';
	import {
		Breadcrumb,
		BreadcrumbItem,
		Button,
		Heading,
		Input,
		Table,
		TableBody,
		TableBodyCell,
		TableBodyRow,
		TableHead,
		TableHeadCell,
		Toolbar
	} from 'flowbite-svelte';

	import MetaTag from '../../../utils/MetaTag.svelte';
	import { onMount } from 'svelte';
	import axios from 'axios';

	const apiUrl = process.env.VITE_API_URL;

	// Define the base URL for the API
	const BASE_URL = apiUrl;

	// Define variables
	let userData: any = [];
	let currentPage = 1; // Start from page 1
	let totalPages = 1; // Initialize with 1, will be updated dynamically
	const itemsPerPage = 10; // Number of items per page
	let searchQuery = ""; // For storing the search query (name)
	let isPaidFilter = "all"; // For storing the filter value (paid or all)

	// Workshop details from URL
	$: workshopId = $page.url.searchParams.get('workshopId');
	$: workshopName = $page.url.searchParams.get('workshopName');

	// Function to fetch students with filters, search, and pagination
	const fetchFilteredUserData = async (token: any) => {
		try {
			// Build the query parameters based on the search and filter values
			const params: Record<string, any> = {
				workshopId,
				page: currentPage,
				limit: itemsPerPage,
			};
			if (searchQuery) {
				params.search = searchQuery;
			}
			if (isPaidFilter !== "all") {
				params.isPaid = isPaidFilter === "true";
			}

			const response = await axios.get(`${BASE_URL}/admin/getAllStudentsByWorkshopPayment`, {
				headers: {
					Authorization: `Bearer ${token}`
				},
				params
			});

			// Populate userData and pagination details
			userData = response.data.result;
			totalPages = response.data.pagination.totalPages || 1;
		} catch (error) {
			console.error('Error fetching user data:', error);
		}
	};

	// Function to get token from cookies
	function getCookie(name: any) {
		const cookies = document.cookie.split(';');
		for (let i = 0; i < cookies.length; i++) {
			const cookie = cookies[i].trim();
			if (cookie.startsWith(name + '=')) {
				return cookie.substring(name.length + 1);
			}
		}
		return null;
	}

	// Call fetchFilteredUserData on component mount
	onMount(async () => {
		const token = getCookie('token');
		if (token) {
			await fetchFilteredUserData(token);
		} else {
			console.error('Token not found in session storage.');
		}
	});

	// Function to apply filters and search
	const applyFilters = async () => {
		const token = getCookie('token');
		if (token) {
			await fetchFilteredUserData(token);
		} else {
			console.error('Token not found in session storage.');
		}
	};
</script>

<MetaTag path="/crud/users" description="CRUD users example - Octobrain Admin Dashboard" title="Octobrain Admin Dashboard - CRUD Users" subtitle="CRUD Users" />

<main class="relative h-full w-full overflow-y-auto bg-white dark:bg-gray-800">
	<div class="p-4">
		<Breadcrumb class="mb-5">
			<BreadcrumbItem home>Home</BreadcrumbItem>
			<BreadcrumbItem href="/crud/workshops">Workshop</BreadcrumbItem>
			<BreadcrumbItem>List</BreadcrumbItem>
		</Breadcrumb>
		<Heading tag="h1" class="text-xl font-semibold text-gray-900 dark:text-white sm:text-2xl">
			Paid Students under {workshopName} Workshop
		</Heading>

		<Toolbar embedded class="w-full py-4 text-gray-500 dark:text-gray-400">
			<Input
				placeholder="Search by Name"
				bind:value={searchQuery}
				class="me-4 w-80 border xl:w-96"
			/>

			<select bind:value={isPaidFilter} class="me-4 w-40 border xl:w-52 rounded-md bg-gray-800 text-gray-300 placeholder-gray-400 p-2">
				<option value="all">All Students</option>
				<option value="true">Paid Students</option>
				<option value="false">Unpaid Students</option>
			</select>

			<Button size="sm" on:click={applyFilters} class="gap-2 whitespace-nowrap px-3">
				Apply Filters
			</Button>
		</Toolbar>
	</div>
	<Table>
		<TableHead class="border-y border-gray-200 bg-gray-100 dark:border-gray-700">
			{#each ['Name', 'School', 'Payment Number', 'TrxDetails', 'Is Payment Complete'] as title}
				<TableHeadCell class="p-4 font-medium">{title}</TableHeadCell>
			{/each}
		</TableHead>
		<TableBody>
			{#each userData as user}
				<TableBodyRow class="text-base">
					<TableBodyCell class="mr-12 flex items-center space-x-6 whitespace-nowrap p-4">
						<div class="text-sm font-normal text-gray-500 dark:text-gray-400">
							<div class="text-base font-semibold text-gray-900 dark:text-white">{user?.name}</div>
							<div class="text-sm font-normal text-gray-500 dark:text-gray-400">{user?.sso?.email}</div>
						</div>
					</TableBodyCell>

					<TableBodyCell class="p-4">{user?.school?.name || "N/A"}</TableBodyCell>
					<TableBodyCell class="p-4">{user?.payerAccount || "N/A"}</TableBodyCell>
					<TableBodyCell class="mr-12 flex items-center space-x-6 whitespace-nowrap p-4">
						<div class="text-sm font-normal text-gray-500 dark:text-gray-400">
							<div class="text-base font-semibold text-gray-900 dark:text-white">{user?.trxID || "N/A"}</div>
							<div class="text-sm font-normal text-gray-500 dark:text-gray-400">{user?.date || "N/A"}</div>
						</div>
					</TableBodyCell>
					<TableBodyCell class="p-4">{user?.paymentComplete ? "True" : "False"}</TableBodyCell>
				</TableBodyRow>
			{/each}
		</TableBody>
	</Table>

	<div class="flex flex-col items-center">
		<!-- Pagination Help text -->
		<span class="text-sm text-gray-700 dark:text-gray-400">
			Showing <span class="font-semibold text-gray-900 dark:text-white">{currentPage}</span> of{' '}
			<span class="font-semibold text-gray-900 dark:text-white">{totalPages}</span> Entries
		</span>
		<div class="inline-flex mt-2 xs:mt-0">
			<!-- Previous Page -->
			<button
				class="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-gray-800 border-0 border-l border-gray-700 rounded-l hover:bg-gray-900 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
				on:click={() => {
					if (currentPage > 1) {
						currentPage--;
						fetchFilteredUserData(getCookie('token'));
					}
				}}
				disabled={currentPage === 1}
			>
				Prev
			</button>
			<!-- Next Page -->
			<button
				class="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-gray-800 border-0 border-l border-gray-700 rounded-r hover:bg-gray-900 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
				on:click={() => {
					if (currentPage < totalPages) {
						currentPage++;
						fetchFilteredUserData(getCookie('token'));
					}
				}}
				disabled={currentPage >= totalPages}
			>
				Next
			</button>
		</div>
	</div>
</main>