var ctx = document.getElementById('trafficChart');
var trafficChart = new Chart(ctx, {
  type: 'line',
  fillOpacity: .3,
  data: {
      labels: ["16-22", "23-29", "30-35", "6-12", "13-19", "20-26", "27-30", "4-10", "11-17", "18-24", "25-31"],
      datasets: [{
          data: [500, 1000, 1500, 1200, 1700, 2200, 1700, 1500, 1800, 2500, 2000, 2500],
          backgroundColor: [
              '#E6E6FA',
          ],
          borderColor: [
              'purple'
          ],
          borderWidth: 1
      }]
  },
  options: {
      scales: {
            xAxis: {
                gridZIndex: 4
            },
            yAxes: [{
                gridYIndex: 4,
                ticks: {
                  beginAtZero: true,
              }
          }]
      }
  }


});