<script lang="ts">
	import options from '$lib/graphs/thinmultibars';
	import LastRange from '$lib/widgets/LastRange.svelte';
	import { Card, Chart, Input } from 'flowbite-svelte';
	import { CalendarMonthOutline } from 'flowbite-svelte-icons';
	import Change from './Change.svelte';
	import More from '$lib/widgets/More.svelte';
</script>

<Card size="xl" class="h-fit">
	<div
		class="items-center justify-between border-b border-gray-200 pb-4 dark:border-gray-700 sm:flex"
	>
		<div class="mb-4 w-full sm:mb-0">
			<h3 class="text-base font-normal text-gray-500 dark:text-gray-400">Club, Workshop and Events</h3>
			<span class="text-2xl font-bold leading-none text-gray-900 dark:text-white sm:text-3xl"
				>Growth</span
			>
			<!-- <Change value={2.5} since="Since last month" size="sm" /> -->
		</div>
		<div class="w-full max-w-lg">
			<div class="grid grid-cols-2 items-center gap-4">
				<Input placeholder="From" class="border">
					<CalendarMonthOutline slot="left" size="md" />
				</Input>
				<Input placeholder="To" class="border">
					<CalendarMonthOutline slot="left" size="md" />
				</Input>
			</div>
		</div>
	</div>
	<Chart {options}></Chart>
	<div
		class="mt-4 flex items-center justify-between border-t border-gray-200 pt-3 dark:border-gray-700 sm:pt-6"
	>
		<LastRange />
		<!-- <More title="Sales Report" href="#top" /> -->
	</div></Card
>
