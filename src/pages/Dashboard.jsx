import React from "react";
import AutoTrading from "../components/Dashboard/AutoTrading";
import Capiwise from "../components/Dashboard/Capiwise";
import Client from "../components/Dashboard/Client";
import Genuine from "../components/Dashboard/Genuine";

const Dashboard = () => {
  return (
    <div className="flex flex-col w-full px-30">
      <AutoTrading />
      <Capiwise />
      <Client />
      <Genuine />
    </div>
  );
};

export default Dashboard;
