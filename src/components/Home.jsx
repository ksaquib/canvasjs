import React, { useEffect, useState } from "react";
import axios from "axios";
import Chart from "../common/components/Chart";
import { mapToChartData } from "../common/utils/mapData";
import AppButton from "../common/components/AppButton";
import appConstants from "../common/constants/appConstants";
import Loader from "../common/components/Loader";

const Home = ({ theme }) => {
  const [data, setData] = useState([]);
  const [type, setType] = useState("ohlc");

  useEffect(() => {
    getData();
    return () => {};
  }, []);
  const getData = async () => {
    try {
      const res = await axios.get(
        `${appConstants.BASE_URL}/api/historical?interval=1`
      );

      let data = res.data;
      let historicalData = mapToChartData(data);
      setData(historicalData);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className='home-container'>
      {data.length > 0 ? (
        <>
          <AppButton type={type} setType={setType} />

          <Chart
            chartData={data}
            type={type}
            title={"Historical Data"}
            theme={theme ? "dark2" : "light2"}
          />
        </>
      ) : (
        <Loader />
      )}
    </div>
  );
};

export default Home;
