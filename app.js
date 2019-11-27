// ****************
// TRAFFIC CHART  
// ****************

var ctx = document.getElementById('trafficChart');
var trafficChart = new Chart(ctx, {
  type: 'line',
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
            yAxes: [{
                ticks: {
                  beginAtZero: true,
              }
          }]
      }
  }
});
// *****************
// DAILY CHART
// ****************

var ctx = document.getElementById('dailyChart');
var dailyChart = new Chart(ctx, {
  type: 'bar',
  data: {
      labels: ["S", "M", "T", "W", "R", "F", "Sa"],
      datasets: [{
          data: [50, 75, 150, 100, 200, 175, 75],
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
            yAxes: [{
                ticks: {
                  beginAtZero: true,
              }
          }]
      }
  }
});


// ************
// MOBILE CHART
// ************

var ctx = document.getElementById('mobileChart');
var mobileChart = new Chart(ctx, {
  type: 'pie',
  data: {
      labels: ["Desktop", "Phones", "Tablets"],
      datasets: [{
          data: [67, 18, 15],
          backgroundColor: [
              'purple',
              'green',
              'teal'
          ],
          borderColor: [
              'purple'
          ],
          borderWidth: 1
      }]
  },
  options: {
      scales: {
            yAxes: [{
                ticks: {
                  beginAtZero: true,
              }
          }]
      }
  }
});
