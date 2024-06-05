/** @type {import('./$types').PageLoad} */
export function load({ params }) {
	return {
		series: [
			{
				name: 'Students',
				data: [6356, 6218, 6156, 6526, 6356, 6256, 6056],
				color: '#EF562F'
			},
			{
				name: 'Students (previous period)',
				data: [6556, 6725, 6424, 6356, 6586, 6756, 6616],
				color: '#FDBA8C'
			}
		]
	};
}
