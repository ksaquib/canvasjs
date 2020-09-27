import React, { useEffect, useState } from "react";
import io from "socket.io-client";
import AppButton from "../common/components/AppButton";
import { mapToChartData } from "../common/utils/mapData";
import Chart from "../common/components/Chart";
import appConstants from "../common/constants/appConstants";
import Loader from "../common/components/Loader";

let socket;
const LiveChart = ({ theme }) => {
  const [value, setValue] = useState([]);
  const [data, setData] = useState([]);
  const [type, setType] = useState("ohlc");

  const ENDPOINT = `${appConstants.BASE_URL}/watch`;

  useEffect(() => {
    socket = io(ENDPOINT, {
      extraHeaders: {
        "Accept-­Encoding": "gzip",
      },
    });

    socket.emit("sub", { state: true });

    socket.on(
      "data",
      (data, callback) => {
        value.push(data);
        setValue(value);
        let liveData = [];
        if (value.length > 2) {
          liveData = mapToChartData(value);
        }
        console.log(liveData);
        setData(liveData);
        callback(1);
      },
      [data]
    );

    return () => {
      socket.emit("unsub", { state: false });
      socket.off();
    };
  });

  return (
    <div className='live-chart-container'>
      {value.length > 3 ? (
        <>
          <AppButton type={type} setType={setType} />

          <Chart
            chartData={data}
            type={type}
            title={"Live Charts"}
            theme={theme ? "dark2" : "light2"}
          />
        </>
      ) : (
        <Loader />
      )}
    </div>
  );
};

export default LiveChart;
