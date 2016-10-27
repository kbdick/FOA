
    //data connection
    // Retrieve Data from TableTop
    /* global Tabletop */
document.addEventListener('DOMContentLoaded', function() {
   	var URL = "1OVgXVxrfM13WwwjqBC4jlYlzTQuSrHrn43r5T0KWbjY";
  		Tabletop.init( { 
  		key: URL, 
  		callback: showInfo, 
  		parseNumbers: true,
  		simpleSheet: true 
  		});
  	

// Tabletop Callback
    function showInfo(data) {
    console.log( "Here is your data", data); 
        var currentAmount = 1367;
        return currentAmount;
    }
});