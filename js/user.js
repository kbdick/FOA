
    //data connection
    // Retrieve Data from TableTop
    /* global Tabletop */
document.addEventListener('DOMContentLoaded', function() {
  		Tabletop.init( { 
  		key: "1OVgXVxrfM13WwwjqBC4jlYlzTQuSrHrn43r5T0KWbjY", 
  		callback: showInfo, 
  		parseNumbers: true,
  		simpleSheet: true 
  		});
  	

// Tabletop Callback
    function showInfo(Audubondata) {
    console.log( "Here is your data", Audubondata); 
    return Audubondata;
    }
});

var currentAmount = data[0].dollarsraised;