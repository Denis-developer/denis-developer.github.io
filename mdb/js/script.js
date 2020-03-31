new WOW().init();

var ctx = document.getElementById('myChart').getContext('2d');
var myChart = new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ["Россия", "США", "Китай", "Индия", "Италия"],
    datasets: [{
      label: 'Население',
      data: [146745098, 328915700, 1404328000, 1352754507, 60317000],
      backgroundColor: [
        'rgba(255,255,255,0.4)',
        'rgba(0,0,255,0.4)',
        'rgba(255,0,0,0.4)',
        'rgba(255,165,0,0.4)',
        'rgba(0,255,0,0.4)'
      ],
      borderColor: [
        'grey',
        'blue',
        'red',
        'orange',
        'green'
      ],
      borderWidth: 2
    }]
  },
  options: {
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero: true
        }
      }]
    }
  }
});

var ctxP = document.getElementById('pieChart').getContext('2d');
var myPieChart = new Chart(ctxP, {
  type: 'pie',
  data: {
    labels: ["Россия", "США", "Китай"],
    datasets: [{
      data: [146745098,328915700,1404328000],
      backgroundColor: [
        'rgba(192,192,192,0.4)',
        'rgba(0,0,255,0.4)',
        'rgba(255,0,0,0.4)'
      ],
      hoverBackgroundColor: [
        'rgba(192,192,192,0.8)',
        'rgba(0,0,255,0.8)',
        'rgba(255,0,0,0.8)'
      ]
    }],
  },
  options: {
    responsive: true
  }
});

var ctxL = document.getElementById('lineChart').getContext('2d');
var lineChart = new Chart(ctxL, {
  type: 'line',
  data: {
    labels: ["1", "2", "3", "4"],
    datasets: [{
      label: "Линия 1",
      fillColor: "black",
      strokeColor: "red",
      pointColor: "red",
      pointStrokeColor: "green",
      pointHighlightFill: "#fff",
      pointHighlightStroke: "yellow",
      data: [34,66,22,102]
    },
    {
      label: "Линия 2",
      fillColor: "black",
      strokeColor: "red",
      pointColor: "red",
      pointStrokeColor: "green",
      pointHighlightFill: "#fff",
      pointHighlightStroke: "yellow",
      data: [54,163,1,51]
    }],
  },
  options: {
    responsive: true
  }
});

var ctxR = document.getElementById('radarChart').getContext('2d');
var radarChart = new Chart(ctxR, {
  type: 'radar',
  data: {
    labels: ["С", "В", "Ю", "З"],
    datasets: [{
      label: "Тело 1",
      fillColor: "black",
      strokeColor: "red",
      pointColor: "red",
      pointStrokeColor: "green",
      pointHighlightFill: "#fff",
      pointHighlightStroke: "yellow",
      data: [34,66,22,102]
    },
    {
      label: "Тело 2",
      fillColor: "black",
      strokeColor: "red",
      pointColor: "red",
      pointStrokeColor: "green",
      pointHighlightFill: "#fff",
      pointHighlightStroke: "yellow",
      data: [54,163,1,51]
    }],
  },
  options: {
    responsive: true
  }
});

var ctxD = document.getElementById('doughnutChart').getContext('2d');
var doughnutChart = new Chart(ctxD, {
  type: 'doughnut',
  data: {
    labels: ["Россия", "США", "Китай", "Индия", "Италия"],
    datasets: [{
      data:[146745098, 328915700, 1404328000, 1352754507, 60317000],
      backgroundColor: ['rgba(192,192,192,0.4)',
      'rgba(0,0,255,0.4)',
      'rgba(255,0,0,0.4)',
      'rgba(255,165,0,0.4)',
      'rgba(0,255,0,0.4)'],
      hoverBackgroundColor: ['rgba(192,192,192,0.8)',
      'rgba(0,0,255,0.8)',
      'rgba(255,0,0,0.8)',
      'rgba(255,165,0,0.8)',
      'rgba(0,255,0,0.8)']
    }]
  },
  options: {
    responsive: true
  }
});
