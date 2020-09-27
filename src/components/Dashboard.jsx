import React, { useEffect } from "react";
import AppTab from "./AppTab";

const Dashboard = () => {
  useEffect(() => {
    console.log("Hello dash");
    return () => {
      console.log("bye dash");
    };
  });

  return (
    <>
      <AppTab />
    </>
  );
};

export default Dashboard;
