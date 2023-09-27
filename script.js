function openNav() {
    document.getElementById("mySidenav").style.width = "100%";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}

var data = {
    labels: ['อนุบาล', 'ประถม', 'มัธยม'],
    datasets: [{
        label: 'จำนวนนักเรียน',
        data: [321, 700, 2025],
        borderWidth: 2,
        backgroundColor: [
            'rgb(161, 208, 255)',
            'rgb(88, 171, 255)',
            'rgb(0, 127, 255)'
        ],
    }],
};

var data2 = {
    labels: ['ชาย', 'หญิง'],
    datasets: [{
        label: 'จำนวนบุคลากร',
        data: [82, 169],
        borderWidth: 2,
        backgroundColor: [
            'rgb(88, 171, 255)',
            'rgb(0, 127, 255)'
        ],
    }],
};




var options = {
    maintainAspectRatio: false,
    responsive: true,
    plugins: {
        layout: {
            padding: 32
          },
        legend: {
            display: false
        },
        datalabels: {
            borderColor: 'white',
            borderRadius: 10,
            borderWidth: 0,
            color: 'white',
            display: true,
            font: {
              weight: 'bold',
              size: 15
            },
            padding: 0,
            formatter: (value, ctx) => {
                const datapoints = ctx.chart.data.datasets[0].data
                 const total = datapoints.reduce((total, datapoint) => total + datapoint, 0)
                const percentage = value / total * 100
                return percentage.toFixed(1) + "%";
              }
          },
    },
    scales: {
        y: {
            ticks: {display: false,},
            grid: {
                display: false,
                drawBorder: false
            }
        },
        xAxis:{display:false},
    }
};
