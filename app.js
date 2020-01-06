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
    document.getElementById('alert').style.display = "none";
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


/* *******************
SAVE SETTINGS (Local Storage)
***************** */


function supportsLocalStorage() {
    try {
    return 'localStorage' in window && window['localStorage'] !== null;
    } catch(e) {
      return false;
    }
  }

window.onload = function() {
    if (supportsLocalStorage()) {
    
// Pull Stored Data
loadStorage();

function loadStorage() {  
  // load profile radio  
    var storedProfileSetting = localStorage.getItem('publicRadio');
      if  (storedProfileSetting) {
        document.getElementById("publicRadio").setAttribute('checked', 'checked')
      }
// load email radio
      var storedEmailSetting = localStorage.getItem('emailsRadio');
      if  (storedEmailSetting) {
        document.getElementById("emailsRadio").setAttribute('checked', 'checked')
      }
      var storedTimezone = localStorage.getItem('timezone');
      if  (storedTimezone == "EST") {
        document.getElementById("timezone").selectedIndex = "1";
      }  else if (storedTimezone == "CST") {
            document.getElementById("timezone").selectedIndex = "2";
        } else if  (storedTimezone == "MST") {
        document.getElementById("timezone").selectedIndex = "3";
        
    }
    }
}
}

// click event on save button

 document.getElementById("save").addEventListener("click", function(){
    
     // Set Storage for Email Notifications 
        var radioSettings = document.getElementById("emailsRadio");  


        if(radioSettings.checked) {
           radioSettings.checked = true;
           localStorage.setItem('emailsRadio', radioSettings.checked);  
         }
         else (
            localStorage.removeItem('emailsRadio')
            ) 
          


    // Set Storage for Profile Public
    
        var profileSetting = document.getElementById("publicRadio");
         
        if (profileSetting.checked) {
              localStorage.setItem('publicRadio', profileSetting.checked);
          }
          else (
            localStorage.removeItem('publicRadio')
            ) 
          
    // Select Area

        setTimeZone();
        function setTimeZone() {
            var timezone = document.getElementById('timezone');
                localStorage.setItem('timezone', timezone.value);
            };

        });
         
        
    
// Cancel

document.getElementById('cancel').addEventListener('click', cancelSettings);

function cancelSettings() {
    localStorage.clear();
};





// **********************
// SEARCH AUTOCOMPLETE
// **********************

const names = [
    {name: "Victoria Chambers"},
    {name: "Dale Byrd"},
    {name: "Dawn Wood"},
    {name: "Dan Oliver"}
];

const userSearch = document.getElementById("userSearch");
const suggestionsDiv = document.getElementById("suggestions");

userSearch.addEventListener("keyup", function(){
    const input = userSearch.value;
    if (input == "") {
        suggestionsDiv.innerHTML = "";
    }
    suggestionsDiv.innerHTML = "";
    const suggestions = names.filter(function(person) {
        return person.name.toLowerCase().startsWith(input);
      })
      suggestions.forEach(function(suggested) {
            const div = document.createElement('div');
            div.innerHTML = suggested.name;
            suggestionsDiv.appendChild(div);
      });
      if (input == "") {
        suggestionsDiv.innerHTML = "";
    }
});

suggestionsDiv.addEventListener("click", function(event){
    var divText = event.target.innerHTML;
    userSearch.value = divText;
    suggestionsDiv.innerHTML = "";
});

