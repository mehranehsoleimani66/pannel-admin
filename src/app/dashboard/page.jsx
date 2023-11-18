import React from "react";
import Card from "../ui/dashboard/card/Card";
import RightBar from "../ui/dashboard/rightbar/RightBar";
import Transection from "../ui/dashboard/transection/Transection";
import Chart from "../ui/dashboard/chart/Chart";

const DashboardPage = () => {
  return (
    <div className="flex justify-between  gap-5">
      <div className="flex-3 flex flex-col gap-5">
        <div className="flex gap-3 justify-between  items-center  ">
          <Card />
          <Card />
          <Card />
        </div>
        <Chart />
        <Transection />
      </div>

      <div className="flex flex-1">
        <RightBar />
      </div>
    </div>
  );
};

export default DashboardPage;
