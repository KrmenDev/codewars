// A very easy task for you!

// You have to create a method, that corrects a given date string. There was a problem in addition, so many of the date strings are broken. Date-Format is european. That means "DD.MM.YYYY".

// Some examples:

// "30.02.2016" -> "01.03.2016"
// "40.06.2015" -> "10.07.2015"
// "11.13.2014" -> "11.01.2015"
// "99.11.2010" -> "07.02.2011"

// If the input-string is null or empty return exactly this value!
// If the date-string-format is invalid, return null.

// Hint: Correct first the month and then the day!


//string with dates, DD.MM.YYYY
//Return MM.DD.YYYY null or  ""
// null => null
// "" => ""
// 01112016 => null
//"0a.1c.2016" => null
//'01.2.4' => null


// function dateCorrect(datestring) {
//     let date = []
//     if(datestring == null || !datestring.includes('.')){
//         return null
//     }else if(datestring == ""){
//         return datestring
//     }else{
//         let month = datestring.slice(0,1)
//         let day = datestring.slice(3,4)
//         let year = datestring.slice(6,9)
//         return `${month}.${day}.${year}`
//     }
//   }


  function dateCorrect(datestring) {
    if(!datestring){
        return datestring
    }
    let dateArr = datestring.split('.')
    if(dateArr.length !==3){
        return null
    }
    let correctDate = new Date(dateArr[2], +dateArr[1]-1, dateArr[0])
    return +correctDate ? correctDate.toLocaleDateString('uk-UK') : null
  }



//Codewars
  function dateCorrect(datestring) {
    if(!datestring)return datestring;
    const splited=datestring.split(".");
    if(splited.length!==3)return null;
    const corrected=new Date(splited[2],+splited[1]-1,splited[0]);
    return +corrected ? corrected.toLocaleDateString("uk-Uk") : null;
  }



//Codewars
  function dateCorrect(datestring) {
    if(!datestring) return datestring;
    if(!/^([0-9]{2}\.){2}[0-9]{4}$/.test(datestring)) return null;
    let correctDate = new Date(datestring.slice(-4),datestring.slice(3,5)-1,datestring.slice(0,2)).toLocaleDateString().split('/');
    return [correctDate[1],correctDate[0],correctDate[2]].map(e => e.padStart(2,'0')).join('.');
  }