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

// Chart functions

var chart = c3.generate({
    bindto: '#donutchart',
    data: {
        // recyclePercent data
        columns: [
            ['audubonData[0].event', audubonData[0].goal],
            ['audubonData[1].event', audubonData[1].goal],
            ['audubonData[2].event', audubonData[2].goal],
            ['audubonData[3].event', audubonData[3].goal],
            ['audubonData[4].event', audubonData[4].goal],
            ['audubonData[5].event', audubonData[5].goal],
            ['audubonData[6].event', audubonData[6].goal],
        ],
        type : 'donut',
        onclick: function (d, i) { console.log("onclick", d, i); },
        onmouseover: function (d, i) { console.log("onmouseover", d, i); },
        onmouseout: function (d, i) { console.log("onmouseout", d, i); }
    }
});

var chart = c3.generate({
    bindto: '#areachart',
    data: {
        columns: [
            ['Recycling', 300, 350, 300, 0, 0, 0],
            ['Landfill', 130, 100, 140, 200, 150, 50]
        ],
        types: {
            data1: 'area',
            data2: 'area-spline'
        }
    }
});

var chart = c3.generate({
    bindto: '#gaugechart',
    data: {
        columns: [
            ['audubonData[0].event', audubonData[0].percentgoal],
        ],
        type: 'gauge',
        onclick: function (d, i) { console.log("onclick", d, i); },
        onmouseover: function (d, i) { console.log("onmouseover", d, i); },
        onmouseout: function (d, i) { console.log("onmouseout", d, i); }
    },
    gauge: {
//        label: {
//            format: function(value, ratio) {
//                return value;
//            },
//            show: false // to turn off the min/max labels.
//        },
//    min: 0, // 0 is default, //can handle negative min e.g. vacuum / voltage / current flow / rate of change
//    max: 100, // 100 is default
//    units: ' %',
//    width: 39 // for adjusting arc thickness
    },
    color: {
        pattern: ['#FF0000', '#F97600', '#F6C600', '#60B044'], // the three color levels for the percentage values.
        threshold: {
//            unit: 'value', // percentage is default
//            max: 200, // 100 is default
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