document.addEventListener('DOMContentLoaded', function () {
    var URL = "1WaDf5UEy-WFd7QQvoFXg-ZbEJHNmYPqiUraLzjFSr-w";
  		Tabletop.init({ 
  		key: URL, 
  		callback: showInfo, 
  		parseNumbers: true,
  		wanted: [ "Fundraising" ],
  		simpleSheet: true 
});
  	
// Tabletop Callback
    function showInfo(data) {
    audubonData = data;
    console.log("Here is your data", audubonData);

// Chart functions

    var chart = c3.generate({
        bindto: '#donutchart',
        data: {
        // Audubon data
        columns: [
            ['Hawkwalk', audubonData[0].marker],
            ['Winter Gala', audubonData[1].marker],
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
            ['Events', 300, 350, 300, 0, 0, 0],
            ['Miscellaneous', 130, 100, 140, 200, 150, 50]
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
            ['Hawk Walk', audubonData[0].marker],
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
}