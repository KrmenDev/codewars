// Description:

// Enjoying your holiday, you head out on a scuba diving trip!

// Disaster!! The boat has caught fire!!

// You will be provided a string that lists many boat related items. If any of these items are "Fire" you must spring into action. Change any instance of "Fire" into "~~". Then return the string.

// Go to work!


//string, never empty, different length
// replace all 'Fire' => '~'
//"Mast Deck Engine Water Fire" => "Mast Deck Engine Water ~~"
//loop string if word == 'Fire' replace with '~~'

function fireFight(s){
    return s.split(' ').map((word) => word === 'Fire' ? '~~' : word).join(' ')
  }


//Codewars
const fireFight = s =>
    s.replace(/Fire/g, `~~`);


//Codewars
function fireFight(s){
    while(s.includes("Fire"))
    {
      s = s.replace("Fire","~~");
    }
    return s;
  }


//Codewars
function fireFight(s){
    return s.split(' ').map((item) => item === 'Fire' ? item = '~~' : item).join(' ');
    
   }


//Codewars
function fireFight(s){
    var arr=s.split(' ');
    for (var i=0; i<arr.length; ++i)
      if (arr[i]=='Fire')
        arr[i]='~~';
    return arr.join(' ');
  }