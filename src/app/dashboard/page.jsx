import React from "react";
import Card from "../ui/dashboard/card/Card";
import RightBar from "../ui/dashboard/rightbar/RightBar";
import Chart from "../ui/dashboard/chart/Chart";
import Transaction from "../ui/dashboard/Transaction/Transaction";

const DashboardPage = () => {
  return (
    <div className="flex justify-between  gap-3">
      <div className="flex-3 flex flex-col gap-5 ">
        <div className="flex w-full justify-center gap-3  ml-3">
          <Card />
          <Card />
          <Card />
        </div>
        <Transaction />
        <Chart />
      </div>

      <div className="flex flex-1 ml-3">
        <RightBar />
      </div>
    </div>
  );
};

export default DashboardPage;
