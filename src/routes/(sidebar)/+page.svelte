<script lang="ts">
	import type { PageData } from './$types';
	import Dashboard from '../../lib/dashboard/Dashboard.svelte';
	import Signin from '../../routes/authentication/sign-in.svelte'
import Users from "../../lib/crud/Users.svelte";
	import MetaTag from '../utils/MetaTag.svelte';
	import A0 from '../(no-sidebar)/pages/500.svelte';
	// import { decodeToken } from "./+page"
	import { onMount } from 'svelte';
	import { goto } from '$app/navigation';
	export let data: PageData;

	const path: string = '';
  const description: string = 'Admin Dashboard example using Flowbite Svelte';
  const title: string = 'Octobrain Admin Dashboard - Home';
  const subtitle: string = 'Admin Dashboard';


	function decodeToken(token) {
		if (!token) {
      return false; // Return false if the cookie is not present
    }
	const [header, payload, signature] = token.split('.');
	const decodedPayload = JSON.parse(atob(payload));
	console.log('Decoded Payload:', decodedPayload);

	// Check expiration
	const expirationTime = decodedPayload.exp * 1000; // Convert from seconds to milliseconds
	const currentTime = Date.now();
	if (currentTime > expirationTime) {
		return false

	} else {
		return true
	}
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
	let isTokenAlive

	onMount(async () => {
		isTokenAlive=decodeToken(getCookie("token"))
		if(!isTokenAlive) goto("/authentication/sign-in")
		// console.log(isTokenAlive)
	});
</script>

<MetaTag {path} {description} {title} {subtitle} />
<main class="p-4 flex flex-col items-center align-center">
	<!-- <Dashboard {data} /> -->
	<!-- <Signin /> -->

	<p class="text-6xl font-bold text-white">Welcome To Octobrain Admin Panel</p>


</main>
