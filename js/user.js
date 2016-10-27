
    //data connection
    // Retrieve Data from TableTop
    /* global Tabletop */
var currentAmount = document.addEventListener('DOMContentLoaded', function() {
  		Tabletop.init( { 
  		key: "1OVgXVxrfM13WwwjqBC4jlYlzTQuSrHrn43r5T0KWbjY", 
  		callback: function(data, tabletop) { console.log( "Here is the Audubon Thermometer Data", data) }, 
  		parseNumbers: true,
  		simpleSheet: true 
  		});
  		return data[0].dollarsraised;
});
