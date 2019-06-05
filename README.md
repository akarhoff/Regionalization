# Displaying Regionalized Content
_For non-cask minisites_

<h3>Benefits</h3>
* Allow us to test and personalize site content without dropping cookies, which causes flashing and has privacy implications.</br>
* Currently unable to test international traffic and convert them on short courses - especially on mastersindatascience.org


<h3>Get Testing Setup in the Console</h3>

Step 1: Copy and paste this script into the console. This will _temporarily_ add jQuery to the head of the site. We want to use jQuery because we want to change and manipulate elements of the site's DOM.

```javascript
var jq = document.createElement('script');
jq.src = "https://ajax.googleapis.com/ajax/libs/jquery/2.1.4/jquery.min.js";
document.getElementsByTagName('head')[0].appendChild(jq);
```
Step 2: Copy and paste API request into the console. 

```javascript
$.getJSON('https://ipapi.co/json/', function(data){
  let country = data.country;
  let region = data.region;
  if(country === "US"){
    console.log("This user's country is " + country + " and state is " + region + ", so we should display DGPs.") // "This user's country is US and state is New York, so we should display DGPs."
  } else {
    console.log("This user's country is not in the US, so we should display short courses.") // "This user's country is not in the US, so we should display short courses"
  }
})
```

In this function, we're grabbing the user's country and region and adding them to variables. In this testing example, we're printing out the values to the console to confirm this function is working correctly. If you copy and paste the codes above, you should see _"This user's country is US and state is New York, so we should display DGPs."_ printed to your console.

Here is the API documentation: https://ipapi.co/api/?javascript--jquery#location-of-clients-ip
