<script lang="ts">
	import {
		Avatar,
		Breadcrumb,
		BreadcrumbItem,
		Button,
		Checkbox,
		Heading,
		Indicator
	} from 'flowbite-svelte';
	import { Input, Table, TableBody, TableBodyCell, TableBodyRow, TableHead } from 'flowbite-svelte';
	import { TableHeadCell, Toolbar, ToolbarButton, ToolbarGroup } from 'flowbite-svelte';
	import { CogSolid, DotsVerticalOutline, DownloadSolid } from 'flowbite-svelte-icons';
	import {
		EditOutline,
		ExclamationCircleSolid,
		PlusOutline,
		TrashBinSolid
	} from 'flowbite-svelte-icons';
	import Users from '../../../data/users.json';
	import { imagesPath } from '$lib/variables';

	import User from './Edit.svelte';
	import Adduser from './Add.svelte';
	import Delete from './Delete.svelte';
	import Verification from './verification.svelte'
	import MetaTag from '../../../utils/MetaTag.svelte';
	import { onMount } from 'svelte';
	import axios from 'axios';
	const apiUrl = process.env.VITE_API_URL;
	let currentPage = 1; // Start from page 1
	let totalPages = 1; // Initialize with 1, will be updated dynamically
	const itemsPerPage = 10; // Number of items per page

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

	// Define userData variable
	let userData = [];
	let totalEntries = 0; // Track total number of entries

	// Function to fetch all user data with pagination
	const fetchAllUserData = async (token) => {
		try {
			const response = await axios.get(`${BASE_URL}/admin/getAllSchoolsPagination`, {
				headers: {
					Authorization: `Bearer ${token}`
				},
				params: {
					page: currentPage,
					limit: itemsPerPage,
				}
			});

			userData = response.data.result;
			totalEntries = response.data.pagination.totalSchools;
			totalPages = response.data.pagination.totalPages;

			// Handle edge case where the current page might exceed total pages
			if (currentPage > totalPages && totalPages > 0) {
				currentPage = totalPages;
				await fetchAllUserData(token); // Fetch data for the last valid page
			}
		} catch (error) {
			console.error('Error fetching user data:', error);
		}
	};

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
			const response = await axios.post(`${BASE_URL}/admin/refreshToken/`, {
				token,
				refreshToken
			}, {
				headers: {
					Authorization: `Bearer ${token}`
				}
			});

			const { token: newToken, refreshToken: newRefreshToken } = response.data.result;
			return { newToken, newRefreshToken };
		} catch (error) {
			console.error('Error refreshing token:', error);
			throw error;
		}
	};

	const updateTokens = async () => {
		try {
			const { newToken, newRefreshToken } = await getRefreshToken();

			// Store the new token and refresh token in cookies
			setCookie('token', newToken, 7);
			setCookie('refreshToken', newRefreshToken, 7);
		} catch (error) {
			console.error('Error updating tokens:', error);
		}
	};

	const startPolling = () => {
		// Start polling for token refresh
		setInterval(updateTokens, 10000); // Poll every 10 seconds
	};

	// Call fetchAllUserData on component mount
	onMount(async () => {
		const token = getCookie('token');
		if (token) {
			await fetchAllUserData(token);
		} else {
			console.error('Token not found in session storage.');
		}
		startPolling();
	});

	let openVerification = false; // modal control
	let openUser = false; // modal control
	let addUser = false; // modal control
	let openDelete = false; // modal control

	let current_user: any = {};
	const path = '/crud/users';
	const description = 'CRUD users example - Octobrain Admin Dashboard';
	const title = 'Octobrain Admin Dashboard - CRUD Users';
	const subtitle = 'CRUD Users';
</script>

<MetaTag {path} {description} {title} {subtitle} />

<main class="relative h-full w-full overflow-y-auto bg-white dark:bg-gray-800">
	<div class="p-4">
		<Breadcrumb class="mb-5">
			<BreadcrumbItem home>Home</BreadcrumbItem>
			<BreadcrumbItem href="/crud/users">Institution</BreadcrumbItem>
			<BreadcrumbItem>List</BreadcrumbItem>
		</Breadcrumb>
		<Heading tag="h1" class="text-xl font-semibold text-gray-900 dark:text-white sm:text-2xl">
			All Schools
		</Heading>

		<Toolbar embedded class="w-full py-4 text-gray-500  dark:text-gray-400">
			<!-- <Input placeholder="Search for users" class="me-4 w-80 border xl:w-96" />
			<div class="border-l border-gray-100 pl-2 dark:border-gray-700">
				<ToolbarButton
					color="dark"
					class="m-0 rounded p-1 hover:bg-gray-100 focus:ring-0 dark:hover:bg-gray-700"
				>
					<CogSolid size="lg" />
				</ToolbarButton>
				<ToolbarButton
					color="dark"
					class="m-0 rounded p-1 hover:bg-gray-100 focus:ring-0 dark:hover:bg-gray-700"
				>
					<TrashBinSolid size="lg" />
				</ToolbarButton>
				<ToolbarButton
					color="dark"
					class="m-0 rounded p-1 hover:bg-gray-100 focus:ring-0 dark:hover:bg-gray-700"
				>
					<ExclamationCircleSolid size="lg" />
				</ToolbarButton>
				<ToolbarButton
					color="dark"
					class="m-0 rounded p-1 hover:bg-gray-100 focus:ring-0 dark:hover:bg-gray-700"
				>
					<DotsVerticalOutline size="lg" />
				</ToolbarButton>
			</div> -->

			<div slot="end" class="flex items-center space-x-2">
				<Button
					size="sm"
					class="gap-2 whitespace-nowrap px-3"
					on:click={() => ((current_user = {}), (addUser = true))}
				>
					<PlusOutline size="sm" />Add Schools
				</Button>
				<!-- <Button size="sm" color="alternative" class="gap-2 px-3">
					<DownloadSolid size="md" class="-ml-1" />Export
				</Button> -->
			</div>
		</Toolbar>
	</div>
	<Table>
		<TableHead class="border-y border-gray-200 bg-gray-100 dark:border-gray-700">
			<!-- <TableHeadCell class="w-4 p-4"><Checkbox /></TableHeadCell> -->
			{#each ['Name', 'Location','Email','Phone Number','Is Verified','Actions'] as title}
				<TableHeadCell class="p-4 font-medium">{title}</TableHeadCell>
			{/each}
		</TableHead>
		<TableBody>
			{#each userData as user}
				<TableBodyRow class="text-base">
					<!-- <TableBodyCell class="w-4 p-4"><Checkbox /></TableBodyCell> -->
					<TableBodyCell class="p-4">{user.name||"N/A"}</TableBodyCell>

					<TableBodyCell class="mr-12 flex items-center space-x-6 whitespace-nowrap p-4">

						<div class="text-sm font-normal text-gray-500 dark:text-gray-400">
							<div class="text-base font-semibold text-gray-900 dark:text-white">{user?.city}</div>
							<div class="text-sm font-normal text-gray-500 dark:text-gray-400">{user?.country}</div>
						</div>
					</TableBodyCell>
					<TableBodyCell class="p-4">{user.email||"N/A"}</TableBodyCell>
					<TableBodyCell class="p-4">{user.contact_number||"N/A"}</TableBodyCell>
					<!-- <TableBodyCell class="p-4">{user.created_by_account_type||"N/A"}</TableBodyCell> -->



					<TableBodyCell class="space-x-2 p-4">
						<Button
							size="sm"
							class="gap-2 px-3"
							on:click={() => {
								if (!user.isVerified) { // Check if isVerified is false
									current_user = user;
									openVerification = true;
								}
							}}
						>
							<EditOutline size="sm" />{user.isVerified}
						</Button>
					</TableBodyCell>
					
					<TableBodyCell class="space-x-2 p-4">
						<Button
							size="sm"
							class="gap-2 px-3"
							on:click={() => ((current_user = user), (openUser = true))}
						>
							<EditOutline size="sm" /> Edit
						</Button>
						<Button
							color="red"
							size="sm"
							class="gap-2 px-3"
							on:click={() => ((current_user = user), (openDelete = true))}
						>
							<TrashBinSolid size="sm" /> Delete
						</Button>
					</TableBodyCell>
				</TableBodyRow>
			{/each}
		</TableBody>
	</Table>
</main>

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
					fetchAllUserData(getCookie('token'));
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
					fetchAllUserData(getCookie('token'));
				}
			}}
			disabled={currentPage >= totalPages}
		>
			Next
		</button>
	</div>
</div>

<Verification bind:open={openVerification} data={current_user} />
<User bind:open={openUser} data={current_user} />
<Adduser bind:open={addUser} data={current_user}/>
<Delete bind:open={openDelete}  data={current_user} />
