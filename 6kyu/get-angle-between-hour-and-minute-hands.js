// Description:

// Your task is to write a function that accepts string parameter time (Example: "22:17") and returns angle between minute and hour hands on round clock at that time.

// The angle measured is the smaller of two angles the two hands may form.

// If hours or minutes out of their range return or input is "Invalid input".

// For example:

// getAngle("15:15"); // 7.5
// getAngle("s5:15"); // "Invalid input"
// getAngle("error"); // "Invalid input"




//'7:20' => 100 (210 - 110)
//'1:20' =>  80
//multiply hour * 30 and minutes * 11/2 
//then substract two vals
//if greater than 180 => 360 - angle
//if negative use Math.abs()
//separate hours from minutes, multiply first by 30 and second by 11/2


function getAngle(t) {

    let hour = Number(t.split(':')[0])
    let minutes = Number(t.split(':')[1])

    let angle = (hour * 30 - 5.5 * minutes + 360) % 360


    if(isNaN(hour) || isNaN(minutes)){
        return 'Invalid input'
    }else if(hour > 23 || hour < 0|| minutes > 59 || minutes < 0){
         return 'Invalid input'
    }else{
        return Math.min(360 - angle)
    }

}


//Codewars
const getAngle = time => {
  if (!/^(?!2[4-9])[0-2]?\d\:[0-5]\d$/.test(time)) return 'Invalid input';
  
  const [hh, mm] = time.split`:`.map(Number);
  const angle = (hh * 30 - 5.5 * mm + 360) % 360;
  
  return Math.min(angle, 360 - angle);
}





//Codewars
const getAngle = (t) => {
  const [h, min] = t.split(':').map(Number)
  
  if (isNaN(h) || isNaN(min)) return 'Invalid input'
  if (h > 24 || min > 60 || h < 0 || min < 0) return 'Invalid input'
  
  const res = 360 * ((h%12 + min/60)/12 - min/60)

  return Math.abs(Math.min(res, 360 - res))
}



//Codewars
function getAngle(t) {
    if (/[^0-9:]/g.test(t)==true) return "Invalid input";
    let lst = t.split(":");
    if (lst.length!=2) return "Invalid input";
    let h = parseFloat(lst[0]);
    let m = parseFloat(lst[1]);
    if (h<0 || m<0 || h>24 || m>=60) return "Invalid input";
    h = h%12;
    if (m==60){
        m=0;
        h = (h+1)%12
    }
    let a1 = 0.5*(h*60+m);
    let a2 = 6*m;
    let ans1 = Math.abs(a1-a2);
    return Math.min(360-ans1, ans1);
}
