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
	import Verification from './verification.svelte';
	import User from './EditTeacher.svelte';
	import Adduser from './Addnewteacher.svelte';
	import Delete from './Delete.svelte';
	import MetaTag from '../../../utils/MetaTag.svelte';
	import { onMount } from 'svelte';
	import axios from 'axios';

	const apiUrl = process.env.VITE_API_URL;

	// Define the base URL for the API
	const BASE_URL = apiUrl;

	// Define instructorData variable
	let instructorData = [];

	// Function to fetch all instructor data
	const fetchAllInstructorData = async (token) => {
		try {
			// Make a GET request to the endpoint with the Authorization header
			const response = await axios.get(`${BASE_URL}/admin/getAllInstructors`, {
				headers: {
					Authorization: `Bearer ${token}`
				}
			});

			// Update instructorData with response data
			instructorData = response.data.result;
		} catch (error) {
			// Log and handle errors
			console.error('Error fetching instructor data:', error);
		}
	};

	// Function to get token from cookies
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

	// Call fetchAllInstructorData on component mount
	onMount(async () => {
		// Retrieve the token from cookies
		const token = getCookie('token');
		console.log('Token:', token);

		// If token exists, call fetchAllInstructorData
		if (token) {
			await fetchAllInstructorData(token);
		} else {
			console.error('Token not found in cookies.');
		}
	});

	let openVerification: boolean = false; // modal control
	let openUser: boolean = false; // modal control
	let addUser: boolean = false; // modal control
	let openDelete: boolean = false; // modal control

	let current_user: any = {};
	const path: string = '/crud/instructors';
	const description: string = 'CRUD instructors example - Octobrain Admin Dashboard';
	const title: string = 'Octobrain Admin Dashboard - CRUD Instructors';
	const subtitle: string = 'CRUD Instructors';
</script>

<MetaTag {path} {description} {title} {subtitle} />

<main class="relative h-full w-full overflow-y-auto bg-white dark:bg-gray-800">
	<div class="p-4">
		<Breadcrumb class="mb-5">
			<BreadcrumbItem home>Home</BreadcrumbItem>
			<BreadcrumbItem href="/crud/instructors">Instructors</BreadcrumbItem>
			<BreadcrumbItem>List</BreadcrumbItem>
		</Breadcrumb>
		<Heading tag="h1" class="text-xl font-semibold text-gray-900 dark:text-white sm:text-2xl">
			All Instructors
		</Heading>

		<Toolbar embedded class="w-full py-4 text-gray-500 dark:text-gray-400">
			<div slot="end" class="flex items-center space-x-2">
				<Button
					size="sm"
					class="gap-2 whitespace-nowrap px-3"
					on:click={() => ((current_user = {}), (addUser = true))}
				>
					<PlusOutline size="sm" />Add Instructor
				</Button>
			</div>
		</Toolbar>
	</div>
	<Table>
		<TableHead class="border-y border-gray-200 bg-gray-100 dark:border-gray-700">
			{#each ['Name', 'School', 'Designation', 'Phone Number',  'Actions'] as title}
				<TableHeadCell class="p-4 font-medium">{title}</TableHeadCell>
			{/each}
		</TableHead>
		<TableBody>
			{#each instructorData as instructor}
				<TableBodyRow class="text-base">
					<TableBodyCell class="mr-12 flex items-center space-x-6 whitespace-nowrap p-4">
						<div class="text-sm font-normal text-gray-500 dark:text-gray-400">
							<div class="text-base font-semibold text-gray-900 dark:text-white">
								{instructor.teacher.name}
							</div>
							<div class="text-sm font-normal text-gray-500 dark:text-gray-400">
								{instructor.teacher.sso.email}
							</div>
						</div>
					</TableBodyCell>

					<TableBodyCell class="p-4">{instructor.teacher.school?.name || 'N/A'}</TableBodyCell>
					<TableBodyCell class="p-4">{instructor.teacher.teacher_designation || 'N/A'}</TableBodyCell>
					<TableBodyCell class="p-4">{instructor.teacher.phone_number || 'N/A'}</TableBodyCell>
					<!-- <TableBodyCell class="space-x-2 p-4">
						<Button
							size="sm"
							class="gap-2 px-3"
							on:click={() => {
								if (!instructor.teacher.isVerified) {
									current_user = instructor;
									openVerification = true;
								}
							}}
						>
							<EditOutline size="sm" />{instructor.teacher.isVerified ? 'Yes' : 'No'}
						</Button>
					</TableBodyCell> -->

					<TableBodyCell class="space-x-2 p-4">
						<Button
							size="sm"
							class="gap-2 px-3"
							on:click={() => ((current_user = instructor), (openUser = true))}
						>
							<EditOutline size="sm" /> Edit
						</Button>
						<Button
							color="red"
							size="sm"
							class="gap-2 px-3"
							on:click={() => ((current_user = instructor), (openDelete = true))}
						>
							<TrashBinSolid size="sm" /> Delete
						</Button>
					</TableBodyCell>
				</TableBodyRow>
			{/each}
		</TableBody>
	</Table>
</main>

<!-- Modals -->
<Verification bind:open={openVerification} data={current_user} />
<User bind:open={openUser} data={current_user} />
<Adduser bind:open={addUser} data={current_user} />
<Delete bind:open={openDelete} data={current_user} />