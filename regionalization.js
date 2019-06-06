// Add this to use jquery to test on the console 
var jq = document.createElement('script');
jq.src = "https://ajax.googleapis.com/ajax/libs/jquery/2.1.4/jquery.min.js";
document.getElementsByTagName('head')[0].appendChild(jq);

// Gets all user information 
jQuery.getJSON('https://ipapi.co/json/', function(data){
  let country = data.country;
  let region = data.region;
  if(country === "US"){
    console.log("This user's country is " + country + " and state is " + region + ", so we should display DGPs.")
  } else {
    console.log("This user's country is not in the US, so we should display short courses.")
  }
}) 
