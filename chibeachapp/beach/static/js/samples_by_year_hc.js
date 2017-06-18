function drawSamplesByYear(samplesByYear) {

    Highcharts.chart('samplesByYearGraph', {
        chart: {
            type: 'column'
        },
        title: {
            text: 'Sample CFU readings'
        },
        xAxis: {
            categories: samplesByYear['years']
        },
        yAxis: {
            min: 0,
            title: {
                text: 'Bacteria Samples'
            },
            stackLabels: {
                enabled: true,
                style: {
                    fontWeight: 'bold',
                    color: (Highcharts.theme && Highcharts.theme.textColor) || 'gray'
                },
                formatter: function() {
                    var percent = Math.round((this.points[1][1] / this.total) * 100);
                    return percent.toString() + "%" ;
                }
            },
        },
        legend: {
            align: 'right',
            x: -30,
            verticalAlign: 'top',
            y: 25,
            floating: true,
            backgroundColor: (Highcharts.theme && Highcharts.theme.background2) || 'white',
            borderColor: '#CCC',
            borderWidth: 1,
            shadow: false
        },
        tooltip: {
            headerFormat: '<b>{point.x}</b><br/>',
            pointFormat: '{series.name}: {point.y}<br/>Total: {point.stackTotal}'
        },
        plotOptions: {
            column: {
                stacking: 'normal',
                dataLabels: {
                    enabled: true,
                    color: (Highcharts.theme && Highcharts.theme.dataLabelsColor) || 'white'
                }
            }
        },
        series: samplesByYear['series'],
    });
}
