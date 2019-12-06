// ****************
// TRAFFIC CHART  
// ****************
var trafficCanvas = document.getElementById('trafficChart');

let trafficData = {
      labels: ["16-22", "23-29", "30-35", "6-12", "13-19", "20-26", "27-30", "4-10", "11-17", "18-24", "25-31"],
      datasets: [{
          data: [500, 1000, 1500, 1200, 1700, 2200, 1700, 1500, 1800, 2500, 2000, 2500],
          backgroundColor: '#E6E6FA',
          borderColor: 'purple',
          borderWidth: 1,
      }]
  };

  let trafficOptions = {
      aspectRatio: 2.5,
      animation: {
          duration: 0
      },
      scales: {
            yAxes: [{
                ticks: {
                  beginAtZero: true
              }
          }]
      },
      legend : {
          display: false
      }

  };

let trafficChart = new Chart(trafficCanvas, {
    type: 'line',
    data: trafficData,
    options: trafficOptions
});



// *****************
// DAILY CHART
// ****************

const dailyCanvas = document.getElementById('dailyChart');


const dailyData = {
      labels: ["S", "M", "T", "W", "R", "F", "Sa"],
      datasets: [{
          label: '# of Hits',
          data: [50, 75, 150, 100, 200, 175, 75],
          backgroundColor: '#8080ff',
          borderColor: 'purple',
          borderWidth: 1
      }]
  };
  
  const dailyOptions = {
      scales: {
            yAxes: [{
                ticks: {
                  beginAtZero: true,
              }
          }]
      },
      legend : {
        display: false
    }
  }

let dailyChart = new Chart(dailyCanvas, {
    type: 'bar',
    data: dailyData,
    options: dailyOptions
});

// ************
// MOBILE CHART
// ************

var mobileCanvas = document.getElementById('mobileChart');

const mobileData = {
    labels: ["Desktop", "Phones", "Tablets"],
    datasets: [{
    label: '# of Users',   
       data: [67, 18, 15],
       borderWidth: 0,
       backgroundColor: [
           '#8080ff',
            'limegreen',
             'blue',
            ]
      }
    ]};
  
  const mobileOptions = {
    legend: {
        position: 'right',
        labels: {
            boxWidth: 20,
            fontStyle: 'bold'
        }
        }
      }

let mobileChart = new Chart(mobileCanvas, {
    type: 'doughnut',
    data: mobileData,
    options: mobileOptions
    }
    );
 



// ************
// REMOVE ALERT
// ************

document.getElementById('alert').addEventListener('click', myFunction);

function myFunction() {
     var chartDiv = document.getElementById('charts');
     chartDiv.removeChild(chartDiv.childNodes[6]);
}; 

// ************
// SEND MESSAGE
// ************

function sendMessage() {
    alert("Your message was sent.  We will get back to you soon!");
    document.getElementById("send-message").onsubmit();
   
}

function messageValidate() {
    var messageCheck = document.forms["sendMessage"]["textbox"].value;
    if (messageCheck == "") {
        alert("Message is blank");
        return false;
    }
    var nameCheck = document.forms["sendMessage"]["userSearch"].value;
    if (nameCheck == "") {
        alert("User not selected");
        return false;
    }
    else {
        alert("Your message was sent.  We will get back to you soon!");
        return true;
    }
}

// ************
// BELL NOTIFICATIONS
// ************

document.getElementById('bell').addEventListener('click', ringBell);

function ringBell() {
     alert("Tom commented on your photo" + "\n" + "Bert liked your photo")
}; 

// **************
// SWITCH CHARTS - HIDE CHART
// **************
window.addEventListener('load', showWeekly);



document.getElementById('monthly').addEventListener('click', showMonthly);

    function showMonthly() {
        clearColor();
        document.getElementById('monthly').style.backgroundColor = "limegreen"; 
        removeCurrentChart();
        document.getElementById('chartSpot2').style.display = "block";
    }

document.getElementById('daily').addEventListener('click', showDaily);

    function showDaily() {
        clearColor();
        document.getElementById('daily').style.backgroundColor = "limegreen";
        removeCurrentChart();
        document.getElementById('chartSpot3').style.display = "block";
    }

document.getElementById('weekly').addEventListener('click', showWeekly);

    function showWeekly() {
        clearColor();
        document.getElementById('weekly').style.backgroundColor = "limegreen";
        removeCurrentChart();
        document.getElementById('chartSpot').style.display = "block";
    }

document.getElementById('hourly').addEventListener('click', showHourly);

    function showHourly() {
        clearColor();
        document.getElementById('hourly').style.backgroundColor = "limegreen";
        removeCurrentChart();
        document.getElementById('chartSpot4').style.display = "block";
    }



function clearColor() {
    var nodeA = document.getElementById('traffic').children;
    for (var i = 0; i < nodeA.length; i++) {
       nodeA[i].style.backgroundColor = "white";
       }
}; 


function removeCurrentChart() {
    if (document.getElementById('chartSpot').style.display == "block") {
        document.getElementById('chartSpot').style.display = "none";
    }
    else if (document.getElementById('chartSpot2').style.display == "block") {
        document.getElementById('chartSpot2').style.display = "none";
    }
    else if (document.getElementById('chartSpot3').style.display == "block") {
        document.getElementById('chartSpot3').style.display = "none";
    }
    else {
            document.getElementById('chartSpot4').style.display = "none";
        }
    }

 /* ***********************
SWITCH CHARTS- CHARTS TO ADD
*************************** */

var trafficMonthlyCanvas = document.getElementById('trafficMonthlyChart');

let trafficMonthlyData = {
      labels: ["16-22", "23-29", "30-35", "6-12", "13-19", "20-26", "27-30", "4-10", "11-17", "18-24", "25-31"],
      datasets: [{
          data: [6500, 5400, 2050, 6000, 8700, 9200, 9000, 6500, 1800, 9500, 10000, 2500],
          backgroundColor: '#E6E6FF',
          borderColor: 'purple',
          borderWidth: 1,
      }]
  };

  let trafficMonthlyOptions = {
      aspectRatio: 2.5,
      animation: {
          duration: 0
      },
      scales: {
            yAxes: [{
                ticks: {
                  beginAtZero: true
              }
          }]
      },
      legend : {
          display: false
      }

  };

let trafficMonthlyChart = new Chart(trafficMonthlyCanvas, {
    type: 'line',
    data: trafficMonthlyData,
    options: trafficMonthlyOptions
});


var trafficDailyCanvas = document.getElementById('trafficDailyChart');

let trafficDailyData = {
      labels: ["16-22", "23-29", "30-35", "6-12", "13-19", "20-26", "27-30", "4-10", "11-17", "18-24", "25-31"],
      datasets: [{
          data: [350, 40, 450, 100, 170, 200, 170, 150, 180, 250, 200, 250],
          backgroundColor: '#E6E6FF',
          borderColor: 'purple',
          borderWidth: 1,
      }]
  };

  let trafficDailyOptions = {
      aspectRatio: 2.5,
      animation: {
          duration: 0
      },
      scales: {
            yAxes: [{
                ticks: {
                  beginAtZero: true
              }
          }]
      },
      legend : {
          display: false
      }

  };

let trafficDailyChart = new Chart(trafficDailyCanvas, {
    type: 'line',
    data: trafficDailyData,
    options: trafficDailyOptions
});


var trafficHourlyCanvas = document.getElementById('trafficHourlyChart');

let trafficHourlyData = {
      labels: ["16-22", "23-29", "30-35", "6-12", "13-19", "20-26", "27-30", "4-10", "11-17", "18-24", "25-31"],
      datasets: [{
          data: [15, 14, 15, 10, 20, 20, 17, 10, 18, 35, 9, 25],
          backgroundColor: '#E6E6FF',
          borderColor: 'purple',
          borderWidth: 1,
      }]
  };

  let trafficHourlyOptions = {
      aspectRatio: 2.5,
      animation: {
          duration: 0
      },
      scales: {
            yAxes: [{
                ticks: {
                  beginAtZero: true
              }
          }]
      },
      legend : {
          display: false
      }

  };

let trafficHourlyChart = new Chart(trafficHourlyCanvas, {
    type: 'line',
    data: trafficHourlyData,
    options: trafficHourlyOptions
});
// **********************
// SEARCH AUTOCOMPLETE
// **********************

var names = ["Victoria Chambers", "Dale Byrd", "Dawn Wood", "Dan Oliver"]




var entry = document.getElementById('searchBar');

entry.addEventListener('keyup', autoComplete);

function autoComplete() {
    entry.value = entry.value.toLowerCase();
    var myEntry = entry.value;
    console.log(myEntry);
}

/* start
var items = document.getElementsByTagName('a');
var itemsParent = document.getElementsByClassName('flex-item')



function myFunction() {

    for (var i = 0; i < items.length; i += 1) {
        var title = items[i].getAttribute('data-caption');
        console.log(title);
        if (title.indexOf(myEntry) > -1) {
            itemsParent[i].style.display = "";
        } else {
            itemsParent[i].style.display = "none";
        }
}
}
end */

/* *******************
SAVE SETTINGS
***************** */
function supportsLocalStorage() {
    try {
    return 'localStorage' in window && window['localStorage'] !== null
    } catch (e) {
        return false;
    }
}

function getRecentEntry() {
    var searches = localStorage.getItem('recentSearches');
}

/*
window.onload = function() {
    if(suportsLocalStorage()) {
        var settings = document.getElementById('changeSettings');

        entry.addEventListener('submit', saveSettings);

        saveSettings() {

        }
    }
}

*/