import { Button } from "@material-ui/core";
import React from "react";
import appConstants from "../constants/appConstants";

const AppButton = ({ type, setType }) => {
  const {
    CHART_TYPE: { OHLC, CANDLESTICK },
  } = appConstants;
  return (
    <div className='app-button'>
      {type === OHLC ? (
        <Button variant='contained' onClick={() => setType(CANDLESTICK)}>
          Switch To CandleStick
        </Button>
      ) : (
        <Button
          variant='contained'
          color='primary'
          onClick={() => setType(OHLC)}
        >
          Switch To OHLC
        </Button>
      )}
    </div>
  );
};

export default AppButton;
