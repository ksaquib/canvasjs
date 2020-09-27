import React, { useEffect, useState } from "react";
import axios from "axios";
import Chart from "./Chart";

const Home = () => {
  const [data, setData] = useState();
  const [type, setType] = useState("ohlc");
  useEffect(() => {
    getData();
    return () => {
      console.log("bye home");
    };
  }, []);
  const getData = async () => {
    try {
      const res = await axios.get(
        "http://kaboom.rksv.net/api/historical?interval=1"
      );

      let data = res.data;
      let historicalData = data.map((val) => {
        let splittedArr = val.split(",");
        const [timestamp, open, high, low, close] = splittedArr;

        return {
          x: new Date(parseFloat(timestamp)),
          y: [parseInt(open), parseInt(high), parseInt(low), parseInt(close)],
        };
      });
      console.log(historicalData);
      setData(historicalData);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="home-container">
      {type === "ohlc" ? (
        <button onClick={() => setType("candlestick")}>
          Switch To CandleStick
        </button>
      ) : (
        <button onClick={() => setType("ohlc")}>Switch To OHLC</button>
      )}

      <Chart data={data} type={type} />
    </div>
  );
};

export default Home;
