import React from "react";
import { background, e1, e2, iPhone, g1, g2, arrow1 } from "../../assets";
import {
  dashboard1,
  dashboard2,
  dashboard21,
  dashboard3,
  dashboar4,
  dashboard5,
  dashboard6,
  header1,
  dashboard31,
} from "../../constants";

const AutoTrading = () => {
  return (
    <div
      className="flex flex-row min-h-[820px] bg-no-repeat bg-cover w-full"
      style={{ backgroundImage: `url(${background})` }}
    >
      <div className="flex flex-col pt-40 pl-20 w-1/3">
        <div className="flex flex-row">
          <img
            alt="arrow1"
            src={arrow1}
            className="w-[42px] h-[20px] mr-6 mt-2"
          />
          <p className="text-black text-3xl not-italic font-bold">
            {dashboard1}
          </p>
        </div>
        <p className="text-green-500 text-6xl not-italic font-bold  mt-10">
          {dashboard2}
        </p>
        <p className="text-black text-6xl not-italic font-bold">
          {dashboard21}
        </p>
        <p className="text-black text-2xl not-italic font-normal mt-8">
          {dashboard3}
        </p>
        <p className="text-black text-2xl not-italic font-semibold">
          {dashboard31}
        </p>
        <button className="w-60 rounded-full bg-green-400 mr-20 mt-12 h-12 px-2 py-1 hover:bg-black cursor-pointer">
          <p className="text-white text-lg font-mono">{header1}</p>
        </button>
      </div>
      <div className="w-2/3 relative">
        <div className="w-[389px] h-[114px] top-[70px] right-[110px] bg-[#FFFFFF] rounded-[21px] opacity-[0.8]  absolute flex flex-col px-2 py-2">
          <div className="flex flex-row items-center justify-around">
            <img alt="e1" src={g2} className="w-[26px] h-[28px] mr-2 " />
            <p className="text-black text-xl not-italic font-bold mt-2">
              {dashboar4}
            </p>
            <p className="text-sm font-medium pt-1">{dashboard5}</p>
          </div>
          <p className="pl-[12px] text-sm font-medium">{dashboard6}</p>
        </div>
        <img
          alt="e1"
          src={e1}
          className="w-[185px] h-[175px] top-[73px] right-[590px] absolute"
        />
        <img
          alt="e2"
          src={e2}
          className="w-[186px] h-[180px] top-[479px] right-[165px] absolute"
        />
        <img
          alt="iPhone"
          src={iPhone}
          className="w-[906px] h-[720px] top-[75px] right-[90px] absolute"
        />
        <img
          alt="g1"
          src={g1}
          className="w-[297px] h-[49px] top-[570px] right-[500px] absolute"
        />
      </div>
    </div>
  );
};

export default AutoTrading;
