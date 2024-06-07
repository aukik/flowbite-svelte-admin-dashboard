<script lang="ts">
	import thickbars from '$lib/graphs/thickbars';
	import thickbars_teacher from '$lib/graphs/thickbars_teachers';
	import thinfillbars from '$lib/graphs/thinfillbars';
	import ChartWidget from '$lib/widgets/ChartWidget.svelte';
	import { Card, Chart } from 'flowbite-svelte';
	import type { PageData } from '../../routes/(sidebar)/$types';
	import Stats from './Stats.svelte';

	import { onMount } from 'svelte';
	import ActivityList from './ActivityList.svelte';
	import Change from './Change.svelte';
	import Chat from './Chat.svelte';
	import DesktopPc from './DesktopPc.svelte';
	import Insights from './Insights.svelte';
	import Traffic from './Traffic.svelte';
	import Transactions from './Transactions.svelte';
	import chart_options_func from '../../routes/(sidebar)/dashboard/chart_options';

	export let data: PageData;

	let chartOptions = chart_options_func(false);
	chartOptions.series = data.series;

	let dark = false;
	let studentCount = 2340;
	let percentageGain = 12.5;
	let teacherCount = 23;
	let percentageGainTeacher = 10;

	function handler(ev: Event) {
		if ('detail' in ev) {
			chartOptions = chart_options_func(ev.detail);
			chartOptions.series = data.series;
			dark = !!ev.detail;
		}
	}

	onMount(async () => {
		document.addEventListener('dark', handler);
		try {
			const response = await fetch('http://localhost:3000/admin/dashboardStudent');
			const json = await response.json();
			studentCount = json.result.currentWeekStudentCount;
			percentageGain = json.result.percentageGain;
		} catch (error) {
			console.error('Failed to fetch data:', error);


		}

		try {
			const response = await fetch('http://localhost:3000/admin/dashboardTeacher');
			const json = await response.json();
			teacherCount = json.result.currentWeekTeacherCount;
			percentageGainTeacher = json.result.percentageGain;
		} catch (error) {
			console.error('Failed to fetch data:', error);}
		return () => document.removeEventListener('dark', handler);
	});
</script>

<div class="mt-px space-y-4">
	<div class="grid gap-4 xl:grid-cols-2 2xl:grid-cols-3">
		<ChartWidget {chartOptions} title="22 Students" subtitle="Total Number of Students" />
		<Traffic {dark} />
		<!-- <Stats /> -->
	</div>
	<div class="grid grid-cols-2 gap-4">
		<div class="grid grid-cols-1 grid-rows-3 gap-4 xl:grid-cols-2 xl:grid-rows-3 2xl:grid-cols-2 2xl:grid-rows-3">
			<Card horizontal class="items-center justify-between" size="xl">
				<div class="w-full">
					<p>New students</p>
					<p class="text-2xl font-bold leading-none text-gray-900 dark:text-white sm:text-3xl">
						{studentCount}
					</p>
					<p>Since Last week</p>
					<!-- <Change size="sm" value={percentageGain} since="Since last week" /> -->
				</div>
				<Chart options={thickbars} class="w-full" />
			</Card>
			<Card horizontal class="items-center justify-between" size="xl">
				<div class="w-full">
					<p>New teachers</p>
					<p class="text-2xl font-bold leading-none text-gray-900 dark:text-white sm:text-3xl">
						{teacherCount}
					</p>
					<!-- <Change size="sm" value={percentageGainTeacher} since="Since last week" /> -->
					<p>Since Last week</p>
				</div>
				<Chart options={thickbars_teacher} class="w-full" />
			</Card>

			<Card horizontal class="items-center justify-between" size="xl">
				<div class="w-full">
					<p>New Students</p>
					<p class="text-2xl font-bold leading-none text-gray-900 dark:text-white sm:text-3xl">
						18
					</p>
					<!-- <Change size="sm" value={-3.4} since="Since last month" /> -->
					<p>Since Last Month</p>
				</div>
				<Chart options={thinfillbars} class="w-full" />
			</Card>
			<Card horizontal class="items-center justify-between" size="xl">
				<div class="w-full">
					<p>New Teachers</p>
					<p class="text-2xl font-bold leading-none text-gray-900 dark:text-white sm:text-3xl">
						12
					</p>
					<p>Since Last Month</p>
					<!-- <Change size="sm" value={-3.4} since="Since last month" class="w-full" /> -->
				</div>
				<Chart options={thinfillbars} class="w-full" />
			</Card>
			<Card horizontal class="items-center justify-between" size="xl">
				<div class="w-full">
					<p>New Clubs</p>
					<p class="text-2xl font-bold leading-none text-gray-900 dark:text-white sm:text-3xl">
						5
					</p>
					<p>Since Last Month</p>
					<!-- <Change size="sm" value={-3.4} since="Since last month" class="w-full" /> -->
				</div>
				<Chart
					options={{
						...thinfillbars,
						plotOptions: {
							...thinfillbars.plotOptions,
							bar: { ...thinfillbars.plotOptions?.bar, horizontal: true }
						}
					}}
				/>
				/>
			</Card>
			<Card horizontal class="items-center justify-between" size="xl">
				<div class="w-full">
					<p>New Workshop</p>
					<p class="text-2xl font-bold leading-none text-gray-900 dark:text-white sm:text-3xl">
						6
					</p>
					<p>Since Last Month</p>
					<!-- <Change size="sm" value={-3.4} since="Since last month" class="w-full" /> -->
				</div>
				<Chart
					options={{
						...thinfillbars,
						plotOptions: {
							...thinfillbars.plotOptions,
							bar: { ...thinfillbars.plotOptions?.bar, horizontal: true }
						}
					}}
				/>
			</Card>
		</div>
		<DesktopPc />
	</div>

	<!-- <div class="grid grid-cols-1 gap-4 xl:grid-cols-2"> -->
		<!-- <Chat /> -->
		<!-- <div class="flex flex-col gap-4">
			<DesktopPc />

		</div>
	</div> -->
	<!-- <div class="grid grid-cols-1 gap-4 xl:grid-cols-2">
		<ActivityList />
		<Insights />
	</div> -->

	<!-- <Transactions {dark} /> -->
</div>
