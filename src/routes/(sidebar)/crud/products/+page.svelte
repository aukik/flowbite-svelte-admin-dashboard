<script lang="ts">
	import { Breadcrumb, BreadcrumbItem, Button, Checkbox, Drawer, Heading } from 'flowbite-svelte';
	import { Input, Table, TableBody, TableBodyCell, TableBodyRow, TableHead } from 'flowbite-svelte';
	import { TableHeadCell, Toolbar, ToolbarButton } from 'flowbite-svelte';
	import { CogSolid, DotsVerticalOutline, EditOutline } from 'flowbite-svelte-icons';
	import { ExclamationCircleSolid, TrashBinSolid } from 'flowbite-svelte-icons';
	import Products from '../../../data/product.json';
	import Product from './Product.svelte';
	import Postupdate from './Postupdate.svelte';
	import Addnewpost from './Addnewpost.svelte';
	import Delete from './Delete.svelte';
	import type { ComponentType } from 'svelte';
	import MetaTag from '../../../utils/MetaTag.svelte';
	import { onMount } from 'svelte';
	import axios from 'axios';

	let hidden: boolean = true; // modal control
	let drawerComponent: ComponentType = Product; // drawer component
	let current_user: any = {};
	let openUser: boolean = false; // modal control
	let updateUser: boolean = false; // modal control
	let openDelete: boolean = false; // modal control

	const toggle = (component: ComponentType) => {
		drawerComponent = component;
		hidden = !hidden;
	};
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
  function setCookie(name, value, days) {
    let expires = "";
    if (days) {
      let date = new Date();
      date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
      expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "") + expires + "; path=/";
  }
  const BASE_URL = 'http://localhost:3000';

// Define userData variable
let userData = [];
let postData = [];
// Function to fetch all user data
const fetchAllUserData = async (token) => {
  try {
	// Make a GET request to the endpoint with the Authorization header
	const response = await axios.get(`${BASE_URL}/admin/allpostData`, {
	  headers: {
		Authorization: `Bearer ${token}`
	  }
	});

	// Update postData with response data
	postData = response.data.result;
  } catch (error) {
	// Log and handle errors
	console.error('Error fetching user data:');
  }
};


const BASE_URL_refreshtoken = 'http://localhost:3000';

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
                Authorization: `Bearer ${token}`
            }
        });
		const { token: newToken, refreshToken: newRefreshToken } = response.data.result;
        // Return the response data
		console.log(response.data);
        return { newToken, newRefreshToken };
    } catch (error) {
        // Log and handle errors
        console.error('Error refreshing token:');
        throw error;
    }
};

const updateTokens = async () => {
    try {
        const { newToken, newRefreshToken } = await getRefreshToken();
        console.log('New token:', newToken);
        console.log('New refresh token:', newRefreshToken);

        // Set the new token and refresh token to session storage
        //sessionStorage.setItem('token', newToken);
        //sessionStorage.setItem('refreshToken', newRefreshToken);
		setCookie('token', newToken, 7);
		setCookie('refreshToken', newRefreshToken, 7);




    } catch (error) {
        // Handle errors
        console.error('Error:');
    }
};

const startPolling = () => {

//updateTokens(); // Initial call
setInterval(updateTokens, 10000); // Poll every 5 seconds
};



// Call fetchAllUserData on component mount
onMount(async () => {
  // Retrieve the token from session storage
  //const token = sessionStorage.getItem('token');

  const token = getCookie('token');
  console.log("token",token);

  //const sessionData = sessionStorage.getItem('key');
 // console.log(sessionData);

  // If token exists, call fetchAllUserData
  if (token) {
	await fetchAllUserData(token);
  } else {
	console.error('Token not found in session storage.');
  }

  console.log("GG");
  startPolling();
});


	const path: string = '/crud/products';
  const description: string = 'CRUD products examaple - Octobrain Admin Dashboard';
  const title: string = 'Octobrain Admin Dashboard - CRUD Products';
  const subtitle: string = 'CRUD Products';
</script>

<MetaTag {path} {description} {title} {subtitle} />


<main class="relative h-full w-full overflow-y-auto bg-white dark:bg-gray-800">
	<div class="p-4">
		<Breadcrumb class="mb-5">
			<BreadcrumbItem home>Home</BreadcrumbItem>
			<BreadcrumbItem href="/crud/products">Posts</BreadcrumbItem>
			<BreadcrumbItem>List</BreadcrumbItem>
		</Breadcrumb>
		<Heading tag="h1" class="text-xl font-semibold text-gray-900 dark:text-white sm:text-2xl">
			All Posts
		</Heading>

		<Toolbar embedded class="w-full py-4 text-gray-500 dark:text-gray-400">
			<!-- <Input placeholder="Search for products" class="me-6 w-80 border xl:w-96" />
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
			</ToolbarButton> -->

			<div slot="end" class="space-x-2">
				<Button class="whitespace-nowrap" on:click={() => ((current_user = {}), (updateUser = true))}>Add new Post</Button>
			</div>
		</Toolbar>
	</div>
	<Table>
		<TableHead class="border-y border-gray-200 bg-gray-100 dark:border-gray-700">
			<!-- <TableHeadCell class="w-4 p-4"><Checkbox /></TableHeadCell> -->
			{#each ['Post Title', 'Post Content',  'Actions'] as title}
				<TableHeadCell class="ps-4 font-normal">{title}</TableHeadCell>
			{/each}
		</TableHead>
		<TableBody>
			{#each postData as post}
				<TableBodyRow class="text-base">
					<!-- <TableBodyCell class="w-4 p-4"><Checkbox /></TableBodyCell> -->
					<TableBodyCell class="flex items-center space-x-6 whitespace-nowrap p-4">
						<div class="text-sm font-normal text-gray-500 dark:text-gray-400">
							<div class="text-base font-semibold text-gray-900 dark:text-white">
								{post.title}
							</div>

						</div>
					</TableBodyCell>
					
					<TableBodyCell
						class="max-w-sm overflow-hidden truncate p-4 text-base font-normal text-gray-500 dark:text-gray-400 xl:max-w-xs"
						>{post.text_content}</TableBodyCell
					>

					<TableBodyCell class="space-x-2">
						<Button size="sm" class="gap-2 px-3" on:click={() => ((current_user = post), (openUser = true))}>
							<EditOutline size="sm" /> Update
						</Button>
						<Button color="red" size="sm" class="gap-2 px-3" on:click={() => ((current_user = post), (openDelete = true))}>
							<TrashBinSolid size="sm" /> Delete Post
						</Button>
					</TableBodyCell>
				</TableBodyRow>
			{/each}
		</TableBody>
	</Table>
</main>

<Drawer placement="right" transitionType="fly" bind:hidden>
	<svelte:component this={drawerComponent} bind:hidden />
</Drawer>
<Postupdate bind:open={openUser} data={current_user} />
<Addnewpost bind:open={updateUser} data={current_user}/>
<Delete bind:open={openDelete} data={current_user}/>