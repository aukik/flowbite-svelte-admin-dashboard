// Define chartOptions outside the fetch callback
let chartOptions = {
    colors: ['#1A56DB', '#FDBA8C'],
    series: [
        {
            name: 'Quantity',
            color: '#EF562F',
            data: [] // Initialize with an empty array
        }
    ],
    chart: {
        type: 'bar',
        height: '140px',
        fontFamily: 'Inter, sans-serif',
        foreColor: '#4B5563',
        toolbar: {
            show: false
        }
    },
    plotOptions: {
        bar: {
            columnWidth: '90%',
            borderRadius: 3
        }
    },
    tooltip: {
        shared: false,
        intersect: false,
        style: {
            fontSize: '14px',
            fontFamily: 'Inter, sans-serif'
        }
    },
    states: {
        hover: {
            filter: {
                type: 'darken',
                value: 1
            }
        }
    },
    stroke: {
        show: true,
        width: 5,
        colors: ['transparent']
    },
    grid: {
        show: false
    },
    dataLabels: {
        enabled: false
    },
    legend: {
        show: false
    },
    xaxis: {
        floating: false,
        labels: {
            show: false
        },
        axisBorder: {
            show: false
        },
        axisTicks: {
            show: false
        }
    },
    yaxis: {
        show: false
    },
    fill: {
        opacity: 1
    }
};

console.log("GG");

// Fetch data from the server
fetch('process.env.VITE_API_URL/admin/weeklyTeacherGain')
    .then(response => response.json())
    .then(data => {
        // Extracting result from the response
        const fetchedData = data.result;

        // Modify the chart data with fetched data
        chartOptions.series[0].data = fetchedData;

        // Assuming you have already initialized your chart, update the chart with modified data
        // chart.updateOptions(chartOptions);
    })
    .catch(error => {
        console.error('Error fetching data:', error);
    });

// Export chartOptions
export default chartOptions;
