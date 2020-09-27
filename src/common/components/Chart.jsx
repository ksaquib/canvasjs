/* App.js */
import React from "react";
import CanvasJSReact from "../../assets/canvasjs.react";
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

const Chart = ({ chartData, type, title, theme }) => {
  const options = {
    animationEnabled: true,
    exportEnabled: true,
    theme: theme,
    zoomEnabled: true,
    exportFileName: title,
    title: {
      text: title,
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
      interval: 100,
    },

    data: [
      {
        type: type,
        yValueFormatString: "###0.00",
        xValueFormatString: "MMM YYYY",
        color: "steelblue",
        dataPoints: chartData,
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
      <CanvasJSChart options={options} />
    </div>
  );
};

export default Chart;
