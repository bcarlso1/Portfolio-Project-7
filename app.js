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
            '#8080ff',
              'limegreen',
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
// SWITCH CHARTS
// **************

document.getElementById('monthly').addEventListener('click', showMonthly);

    function showMonthly() {
        clearColor();
        document.getElementById('monthly').style.backgroundColor = "limegreen"; 
        removeCurrentChart();
    }

document.getElementById('daily').addEventListener('click', showDaily);

    function showDaily() {
        clearColor();
        document.getElementById('daily').style.backgroundColor = "limegreen";
        removeCurrentChart();
    }

document.getElementById('weekly').addEventListener('click', showWeekly);

    function showWeekly() {
        clearColor();
        document.getElementById('weekly').style.backgroundColor = "limegreen";
        removeCurrentChart();
    }

document.getElementById('hourly').addEventListener('click', showHourly);

    function showHourly() {
        clearColor();
        document.getElementById('hourly').style.backgroundColor = "limegreen";
        removeCurrentChart();
    }



function clearColor() {
    var nodeA = document.getElementById('traffic').children;
    for (var i = 0; i < nodeA.length; i++) {
       nodeA[i].style.backgroundColor = "white";
       }
}; 


function removeCurrentChart() {
    var trafficDiv = document.getElementById('traffic');
    var trafficChartDiv = document.getElementById('chartSpot');
    var trafficGone = trafficDiv.removeChild(trafficChartDiv);
}

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