// Description:

// In this kata you should simply determine, whether a given year is a leap year or not. In case you don't know the rules, here they are:

//     Years divisible by 4 are leap years,
//     but years divisible by 100 are not leap years,
//     but years divisible by 400 are leap years.

// Tested years are in range 1600 ≤ year ≤ 4000.


//number, always positive, always valid
//true if a leap year else false
//2020 => false
//2000 => true
//2015 => true
//2100 => true


function isLeapYear(year) {
  return year % 4 === 0 && year % 100 != 0 || year % 400 === 0 ? true : false
}


//Codewars
function isLeapYear(year) {
  return (year % 100 !== 0 && year % 4 === 0) || year % 400 === 0;
}


//Codewars
function isLeapYear(year) {
  if(0 == year%400) return true;
  if(0 == year%100) return false;
  if(0 == year%4) return true;
  return false;
}


//Codewars
const moment = require('moment');

function isLeapYear(year) {
  return moment([year]).isLeapYear()
}


//Codewars
const isLeapYear = year => new Date(year, 1, 29).getDate() == 29;