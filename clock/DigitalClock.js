// Date() function counts from 1970 in miliseconds to get your time based on where you are
function clock(){
var date = new Date();
var hours = date.getHours();
var minutes = date.getMinutes();
var seconds = date.getSeconds();
var AmPm = "AM";

if (hours == 0) hours = 12;
if (hours >= 12) {
  hours = hours - 12;
  AmPm = "PM";
}

hours = hours < 10 ? `0${hours}` : hours;
minutes = minutes < 10 ? `0${minutes}` : minutes;
seconds = seconds < 10 ? `0${seconds}`  : seconds;


var time = `${hours}:${minutes}:${seconds}:${AmPm}`;
document.getElementById("clock").innerText = time;
setTimeout(clock, 1000);
};

clock();