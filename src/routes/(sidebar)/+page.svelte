<script lang="ts">
	import type { PageData } from './$types';
	import Dashboard from '../../lib/dashboard/Dashboard.svelte';
import Users from "../../lib/crud/Users.svelte";
	import MetaTag from '../utils/MetaTag.svelte';
	import A0 from '../(no-sidebar)/pages/500.svelte';
	export let data: PageData;

	const path: string = '';
  const description: string = 'Admin Dashboard example using Flowbite Svelte';
  const title: string = 'Octobrain Admin Dashboard - Home';
  const subtitle: string = 'Admin Dashboard';
</script>

<MetaTag {path} {description} {title} {subtitle} />
<main class="p-4">
	<!-- <Dashboard {data} /> -->
	<Users />
</main>
