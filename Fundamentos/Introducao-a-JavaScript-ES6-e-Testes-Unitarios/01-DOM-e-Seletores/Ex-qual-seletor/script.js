const header = document.getElementById("header-container");
header.style.backgroundColor = "#00b069";
const emergency = document.getElementsByClassName("emergency-tasks")[0];
emergency.style.backgroundColor = '#ff9f84';
const urgency = document.querySelectorAll('.emergency-tasks h3');
for (let i = 0; i < urgency.length; i+=1) {
  urgency[i].style.backgroundColor = '#a500f3';
}
const noEmergency = document.getElementsByClassName("no-emergency-tasks")[0];
noEmergency.style.backgroundColor = '#f9db5e';
const noUrgency = document.querySelectorAll('.no-emergency-tasks h3');
for (let i = 0; i < noUrgency.length; i+=1) {
  noUrgency[i].style.backgroundColor = '#232525';
}
const rodape = document.querySelector('#footer-container');
rodape.style.backgroundColor = '#003533';
const fonte = document.getElementById('container');
fonte.style.fontFamily = 'Arial, Helvetica, sans-serif';
