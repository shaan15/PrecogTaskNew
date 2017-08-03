$( document ).ready(function() {
Highcharts.chart('container', {
    chart: {
        type: 'column'
    },
    title: {
        text: 'Popularity: Modi vs Kejriwal'
    },
    
    xAxis: {
        type: 'category'
    },
    yAxis: {
        title: {
            text: 'Number of tweets'
        }

    },
    legend: {
        enabled: false
    },
    plotOptions: {
        series: {
            borderWidth: 0,
            dataLabels: {
                enabled: true,
                format: '{point.y:.1f}%'
            }
        }
    },

    tooltip: {
        headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
        pointFormat: '<span style="color:{point.color}">{point.name}</span>: <b>{point.y:.2f}%</b> of total<br/>'
    },

    series: [{
        name: 'Tweets with hashtags',
        colorByPoint: true,
        data: [{
            name: 'Narendra Modi',
            y: modi_count, //956 modi_count
            drilldown: 'Narendra Modi'
            
        }, {
            name: 'Arvind Kejriwal',
            y: kejriwal_count, //9 kejriwal_count
            drilldown: 'Arvind Kejriwal'
            
        }]
    }],
    drilldown: {
        series: [{
            name: 'Narendra Modi',
            id: 'Narendra Modi',
            
        }, {
            name: 'Arvind Kejriwal',
            id: 'Arvind Kejriwal',
            
        }]
    }
    
                ]
       
       
});
});