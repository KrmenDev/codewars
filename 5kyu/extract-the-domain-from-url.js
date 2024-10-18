// Description:

// Write a function that when given a URL as a string, parses out just the domain name and returns it as a string. For example:

// * url = "http://github.com/carbonfive/raygun" -> domain name = "github"
// * url = "http://www.zombie-bites.com"         -> domain name = "zombie-bites"
// * url = "https://www.cnet.com"                -> domain name = cnet"





// URL, string
// return the domain name
//www.cnn.com => cnn
//https://youtube.com => youtube
//replace all elements we dont want return the first part only


function domainName(url){
    let domain = url.replace('http://', '').replace('www.', '').replace('https://', '').split('.')
    return domain[0]
  }




//Codewars
function domainName(url){
    url = url.replace("https://", '');
    url = url.replace("http://", '');
    url = url.replace("www.", '');
    return url.split('.')[0];
  };
  


//Codewars
domainName = (url) =>
    url.includes("www")
     ? url.split(".")[1]
     : url.includes("http")
     ? url.split("//")[1].split(".")[0]
     : url.split(".")[0]