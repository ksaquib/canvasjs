export const mapToChartData = (data) => {
  return data.map((val) => {
    let splittedArr = val.split(",");
    const [timestamp, open, high, low, close] = splittedArr;

    return {
      x: new Date(parseFloat(timestamp)),
      y: [
        parseFloat(open),
        parseFloat(high),
        parseFloat(low),
        parseFloat(close),
      ],
    };
  });
};
