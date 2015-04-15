document.addEventListener('DOMContentLoaded', function() {
   	var URL = "1WaDf5UEy-WFd7QQvoFXg-ZbEJHNmYPqiUraLzjFSr-w";
  		Tabletop.init( { 
  		key: URL, 
  		callback: showInfo, 
  		parseNumbers: true,
  		simpleSheet: true 
  		} );
  	
// Tabletop Callback
    function showInfo(data) {
    audubonData = data;
    console.log( "Here is your data", audubonData);

// Top Row functions
var goalTotal = 0;
var goalDollars = audubonData[].totalpercentgoal;
for ( var i = 0; i < goalDollars.length; i++ ){
    goalTotal += goalDollars[i];
}

var raisedTotal = 0;
var percentRaised = audubonData[].raised;
for ( var i = 0; i < percentRaised.length; i++ ){
    goalTotal += percentRaised[i];
}

$("#goalDollars").text(goalTotal);
$("#percentRaised").text(raisedTotal);


// Chart functions

var chart1 = c3.generate({
    bindto: '#donutchart',
    data: {
        // recyclePercent data
        columns: [
            [audubonData[0].event, audubonData[0].totalpercentgoal],
            [audubonData[1].event, audubonData[1].totalpercentgoal],
            [audubonData[2].event, audubonData[2].totalpercentgoal],
            [audubonData[3].event, audubonData[3].totalpercentgoal],
            [audubonData[4].event, audubonData[4].totalpercentgoal],
            [audubonData[5].event, audubonData[5].totalpercentgoal],
            [audubonData[6].event, audubonData[6].totalpercentgoal],
        ],
        type : 'donut',
        onclick: function (d, i) { console.log("onclick", d, i); },
        onmouseover: function (d, i) { console.log("onmouseover", d, i); },
        onmouseout: function (d, i) { console.log("onmouseout", d, i); }
    }
});

var chart2 = c3.generate({
    bindto: '#areachart',
    data: {
        columns: [
            ['Goal', audubonData[0].dollargoal, audubonData[1].dollargoal, audubonData[2].dollargoal, audubonData[3].dollargoal, audubonData[4].dollargoal, audubonData[5].dollargoal, audubonData[6].dollargoal],
            ['Raised', audubonData[0].raised, audubonData[1].raised, audubonData[2].raised, audubonData[3].raised, audubonData[4].raised, audubonData[5].raised, audubonData[6].raised]
        ],
        types: {
            data1: 'area',
            data2: 'area-spline'
        },
        axis: {
              y: {
                label: 'Thousands of $'
                }
            }
        }
});

var chart3 = c3.generate({
    bindto: '#gaugechart',
    data: {
        columns: [
            [audubonData[0].event, audubonData[0].percentreached],
        ],
        type: 'gauge',
        onclick: function (d, i) { console.log("onclick", d, i); },
        onmouseover: function (d, i) { console.log("onmouseover", d, i); },
        onmouseout: function (d, i) { console.log("onmouseout", d, i); }
    },
    gauge: {
       label: {
            format: function(value, ratio) {
                return value;
            },
            show: false // to turn off the min/max labels.
        },
    min: 0, // 0 is default, //can handle negative min e.g. vacuum / voltage / current flow / rate of change
    max: 100, // 100 is default
    units: ' %',
    width: 39 // for adjusting arc thickness
    },
    color: {
        pattern: ['#FF0000', '#F97600', '#F6C600', '#60B044'], // the three color levels for the percentage values.
        threshold: {
            unit: 'value', // percentage is default
            max: 200, // 100 is default
            values: [30, 60, 90, 100]
        }
    },
    size: {
        height: 180
    }
});

    }

    $('#leftcontent').royalSlider({
        autoScaleSlider: 'true',
        autoScaleSliderHeight: 450,
        imgScaleMode: 'fit',
        imageAlignCenter: 'false',
        controlNavigation: 'bullets',
        numImagesToPreload: 8,
        arrowsNav: 'true',
        arrowsNavAutoHide: 'true',
        arrowsNavHideOnTouch: 'true',
    	transitionType: 'fade',
    	sliderDrag: 'true',
    	sliderTouch: 'true',
    	loop: 'true',
    	allowCSS3: 'true',
    	usePreloader: 'true',
    	keyboardNavEnabled: 'true',
    	controlsInside: 'true',
    	deeplinking: { 
    	    enabled: 'true',
    	    change: 'true',
    	    prefix: 'recycle-'}
    });
    
        $('#rightcontent').royalSlider({
        autoScaleSlider: 'true',
        autoScaleSliderHeight: 450,
        imgScaleMode: 'fit',
        imageAlignCenter: 'false',
        controlNavigation: 'bullets',
        numImagesToPreload: 8,
        arrowsNav: 'true',
        arrowsNavAutoHide: 'true',
        arrowsNavHideOnTouch: 'true',
    	transitionType: 'fade',
    	sliderDrag: 'true',
    	sliderTouch: 'true',
    	loop: 'true',
    	allowCSS3: 'true',
    	usePreloader: 'true',
    	keyboardNavEnabled: 'true',
    	controlsInside: 'true',
    	deeplinking: { 
    	    enabled: 'true',
    	    change: 'true',
    	    prefix: 'recycle-'}
    });
    
})