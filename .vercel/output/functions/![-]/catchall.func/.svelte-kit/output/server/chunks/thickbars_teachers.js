var define_process_env_default$1 = { VITE_API_URL: "https://prodbackend.octobrain.org" };
let chartOptions$1 = {
  colors: ["#1A56DB", "#FDBA8C"],
  series: [
    {
      name: "Quantity",
      color: "#EF562F",
      data: []
      // Initialize with an empty array
    }
  ],
  chart: {
    type: "bar",
    height: "140px",
    fontFamily: "Inter, sans-serif",
    foreColor: "#4B5563",
    toolbar: {
      show: false
    }
  },
  plotOptions: {
    bar: {
      columnWidth: "90%",
      borderRadius: 3
    }
  },
  tooltip: {
    shared: false,
    intersect: false,
    style: {
      fontSize: "14px",
      fontFamily: "Inter, sans-serif"
    }
  },
  states: {
    hover: {
      filter: {
        type: "darken",
        value: 1
      }
    }
  },
  stroke: {
    show: true,
    width: 5,
    colors: ["transparent"]
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
fetch(define_process_env_default$1.VITE_API_URL + "/admin/weeklyStudentGain").then((response) => response.json()).then((data) => {
  const fetchedData = data.result;
  chartOptions$1.series[0].data = fetchedData;
}).catch((error) => {
  console.error("Error fetching data:", error);
});
var define_process_env_default = { VITE_API_URL: "https://prodbackend.octobrain.org" };
let chartOptions = {
  colors: ["#1A56DB", "#FDBA8C"],
  series: [
    {
      name: "Quantity",
      color: "#EF562F",
      data: []
      // Initialize with an empty array
    }
  ],
  chart: {
    type: "bar",
    height: "140px",
    fontFamily: "Inter, sans-serif",
    foreColor: "#4B5563",
    toolbar: {
      show: false
    }
  },
  plotOptions: {
    bar: {
      columnWidth: "90%",
      borderRadius: 3
    }
  },
  tooltip: {
    shared: false,
    intersect: false,
    style: {
      fontSize: "14px",
      fontFamily: "Inter, sans-serif"
    }
  },
  states: {
    hover: {
      filter: {
        type: "darken",
        value: 1
      }
    }
  },
  stroke: {
    show: true,
    width: 5,
    colors: ["transparent"]
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
fetch(define_process_env_default.VITE_API_URL + "/admin/weeklyTeacherGain").then((response) => response.json()).then((data) => {
  const fetchedData = data.result;
  chartOptions.series[0].data = fetchedData;
}).catch((error) => {
  console.error("Error fetching data:", error);
});
export {
  chartOptions as a,
  chartOptions$1 as c
};
