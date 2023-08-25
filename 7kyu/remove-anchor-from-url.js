// DESCRIPTION:
// Complete the function/method so that it returns the url with anything after the anchor (#) removed.


//My Solution

//P: string, never empty, includes letters and symbols, not always an #
//R: return string without # and everything that comes after
//E: 
// "www.codewars.com#about" --> "www.codewars.com"
// "www.codewars.com?page=1" -->"www.codewars.com?page=1"
//"www.x.com#us" --> "www.x.com"
//P: check string if it has #
// remove everything from there
//return string


function removeUrlAnchor(url){
    const delim = '#'
        newUrl = url.split(delim)
        return newUrl[0]
  }



//CodeWars
function removeUrlAnchor(url){
    return url.split('#')[0];
  }

  

//CodeWars
function removeUrlAnchor(url){
    // TODO: complete
    return url.replace(/#.*/gi,"");
  }