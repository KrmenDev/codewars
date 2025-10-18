// Description:

// Write a function, which takes a non-negative integer (seconds) as input and returns the time in a human-readable format (HH:MM:SS)

//     HH = hours, padded to 2 digits, range: 00 - 99
//     MM = minutes, padded to 2 digits, range: 00 - 59
//     SS = seconds, padded to 2 digits, range: 00 - 59

// The maximum time never exceeds 359999 (99:59:59)

// You can find some examples in the test fixtures.


//number, always valid
//return string with readable hour
// 0 => '00:00:00'
// 60 => '00:01:00'
// 3,599 => '00:59:59'
// 45,296 => '12:34:56'
// 359,999 => '99:59:59'

//return string as "HH:MM:SS"


function humanReadable (seconds) {
    
  let hh = parseInt(seconds/3600)
  let mm = parseInt(seconds/60) % 60
  let ss = seconds % 60

  let time = function(num){
    return num < 10 ? "0" + num : num
  }

  return time(hh) + ":" + time(mm) + ":" + time(ss)
}



//Codewars
function humanReadable(seconds) {
  var pad = function(x){ 
    return (x < 10) ? "0"+x : x; 
}
  return pad(parseInt(seconds / (60*60))) + ":" +
         pad(parseInt(seconds / 60 % 60)) + ":" +
         pad(seconds % 60)
}



//Codewars
function humanReadable(seconds) {
var hours = parseInt( seconds / 3600 ) ;
var minutes = parseInt( seconds / 60 ) % 60;
var seconds = seconds % 60;

var pad = function(val){
  return val < 10 ? "0" + val : val;
}

return pad(hours) + ":" + pad(minutes) + ":" + pad(seconds);
}



//Codewars
function humanReadable(seconds) {
  var HH, MM, SS;
  HH = "0" + Math.floor(seconds/3600);
  seconds -= HH * 3600;
  MM = "0" + Math.floor(seconds/60);
  seconds -= MM * 60;
  SS = "0" + seconds;
  return HH.slice(-2) + ":" + MM.slice(-2) + ":" + SS.slice(-2);
}


//Codewars
function humanReadable(seconds) {
  const oneMinute = 60
  const oneHour = oneMinute * 60
  const H = ('0' + Math.floor(seconds / oneHour)).slice(-2)
  const M = ('0' + Math.floor(seconds / oneMinute) % 60).slice(-2)
  const S = ('0' + seconds % 60).slice(-2)
  return `${H}:${M}:${S}`
}