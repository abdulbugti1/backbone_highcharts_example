var SalesItemsView = Backbone.View.extend({

  initialize: function(){

  },

  render: function(){
    var data = [];

    _.each(this.collection.models, function(model){
      var onePoint = [model.attributes.year, model.attributes.sales]
      data.push(onePoint)
    });

    // sort the data by date
    sortedData = data.sort(function(a, b) {return b[0] - a[0];});


    Highcharts.chart('container', {

      title: {
        text: 'Sales by year, 1980-2000'
      },

      yAxis: {
        title: {
          text: 'Amount'
        }
      },

      xAxis: {
        accessibility: {
          rangeDescription: 'Range: 1985 to 2000'
        },
        type: "year",
        breakSize: 5
      },

      legend: {
        layout: 'vertical',
        align: 'right',
        verticalAlign: 'middle'
      },

      plotOptions: {
        series: {
          label: {
            connectorAllowed: false
          },
        }
      },

      tooltip: {
        valuePrefix: "$"
      },

      series: [{
        name: 'Sales',
        data: sortedData
      }],

      responsive: {
        rules: [{
          condition: {
            maxWidth: 500
          },
          chartOptions: {
            legend: {
              layout: 'horizontal',
              align: 'center',
              verticalAlign: 'bottom'
            }
          }
        }]
      }

    });

    return this
  }
})
