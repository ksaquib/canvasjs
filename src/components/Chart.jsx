/* App.js */
import React, { Component } from "react";
import CanvasJSReact from "../assets/canvasjs.react";
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

class Chart extends Component {
  render() {
    const { data, type } = this.props;
    const options = {
      animationEnabled: true,
      exportEnabled: true,
      theme: "light2",
      zoomEnabled: true,
      exportFileName: "Historical Data of Upstox",
      title: {
        text: "Historical Data",
      },
      axisX: {
        interval: 1,
        intervalType: "month",
        valueFormatString: "MMM",
        crosshair: {
          enabled: true,
          snapToDataPoint: true,
          valueFormatString: "MMM DD YYYY",
        },
      },

      axisY: {
        includeZero: false,
        prefix: "",
        title: "Price (in USD)",
        interval: 50,
      },

      data: [
        {
          type: type,
          yValueFormatString: "###0.00",
          xValueFormatString: "MMM YYYY",
          color: "steelblue",
          dataPoints: data,
        },
      ],
      navigator: {
        slider: {
          minimum: new Date("2011-03-01"),
          maximum: new Date("2011-05-01"),
        },
      },
    };
    return (
      <div>
        <CanvasJSChart options={options} onRef={(ref) => (this.chart = ref)} />
      </div>
    );
  }
}
export default Chart;
