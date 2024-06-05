<script lang="ts">
	import { Card, Chart } from 'flowbite-svelte';
	import options from '$lib/graphs/traffic';
	import SmallPanel from './SmallPanel.svelte';
	import { UsersGroupSolid, BookOpenSolid, BriefcaseSolid } from 'flowbite-svelte-icons';
	import More from '$lib/widgets/More.svelte';

	export let dark: boolean = false;
</script>

<Card size="xl" class="h-fit">
	<div
		class="mb-4 items-center justify-between border-b border-gray-200 pb-4 dark:border-gray-700 sm:flex"
	>
		<div class="mb-4 w-full sm:mb-0">
			<!-- <h3 class="text-base font-normal text-gray-500 dark:text-gray-400">Traffic by device</h3> -->
			<span class="text-2xl font-bold leading-none text-gray-900 dark:text-white sm:text-3xl"
				>Total Users</span
			>
			<h3 class="text-base font-normal text-gray-500 dark:text-gray-400">percentage %</h3>
		</div>
		<!-- <More title="Full report" href="#top" /> -->
	</div>
	<Chart options={options(dark)}></Chart>
	<div class="mb-4 flex items-center justify-between pt-4 sm:pt-6 lg:justify-evenly">
		<SmallPanel title="Student" subtitle="22" change={4}>
			<UsersGroupSolid slot="icon" size="xl" class="mb-1" />
		</SmallPanel>
		<SmallPanel title="Sponsors" subtitle="4" change={-1}>
			<BookOpenSolid slot="icon" size="xl" class="mb-1" />
		</SmallPanel>
		<SmallPanel title="Teacher" subtitle="12" change={-0.6}>
			<BriefcaseSolid slot="icon" size="xl" class="mb-1" />
		</SmallPanel>
	</div>
</Card>
