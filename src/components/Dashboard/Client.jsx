import React, { useRef, useLayoutEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

import {
  r1,
  r7,
  e1,
  r8,
  r9,
  r13,
  r14,
  r15,
  r16,
  r17,
  r18,
  r19,
  r20,
  r21,
  r2,
  r3,
  r4,
  r5,
  r6,
} from "../../assets";

import {
  retangle4,
  retangle8,
  retangle9,
  retangle10,
  retangle11,
  retangle13,
} from "../../constants";

gsap.registerPlugin(ScrollTrigger);

const Client = () => {
  const component = useRef();
  const slider = useRef();

  // useLayoutEffect(() => {
  //   let ctx = gsap.context(() => {
  //     let panels = gsap.utils.toArray(".panel");
  //     gsap.to(panels, {
  //       xPercent: -100 * (panels.length - 1),
  //       ease: "none",
  //       scrollTrigger: {
  //         trigger: slider.current,
  //         pin: true,
  //         scrub: 1,
  //         snap: 1 / (panels.length - 1),
  //         end: () => "+=" + slider.current.offsetWidth,
  //         markers: false,
  //       },
  //     });
  //   }, component);
  //   return () => ctx.revert();
  // });

  return (
    <div className="flex flex-col justify-center items-center bg-[#040B11] rounded-[50px] pt-[300px] pb-[40px]">
      <div className="flex flex-row w-full justify-center mt-30 px-20">
        <div className="w-1/2 flex flex-col justify-center relative">
          <img
            alt="arrow1"
            src={r1}
            className="w-full h-[665px] mr-6 rounded-[10px]"
          />
          <img
            alt="arrow1"
            src={r4}
            className="w-[230px] h-[49px] right-80 ml-10px  absolute top-[-24px] left-10 z-10"
          />
          <img
            alt="arrow1"
            src={r5}
            className="w-[80px] h-[80px] absolute top-[-40px] left-2/3 z-10"
          />
          <img
            alt="arrow1"
            src={r2}
            className="w-[80px] h-[80px] mr-6 absolute top-[150px] left-[-45px] z-10"
          />
          <img
            alt="arrow1"
            src={r3}
            className="w-[80px] h-[80px] mr-6 absolute top-[200px] z-10"
            style={{ position: "absolute", left: "92%" }}
          />
          <img
            alt="arrow1"
            src={r6}
            className="w-[80px] h-[80px] mr-6 absolute top-[610px] left-10 z-10"
          />
        </div>
        <div className="w-1/2 flex flex-col justify-center text-white relative left-40">
          <p className="text-5xl not-italic font-bold">
            From begginer <br /> to expert
          </p>
          <p className="text-2xl not-italic font-normal mt-20">
            We take data, and visualise the most, <br /> important details.
            Meaning that you
            <p className="text-green-500 text-2xl not-italic font-bold">
              can understand what is important.
            </p>
          </p>
        </div>
      </div>
      {/* <div ref={component}>
        <div ref={slider} className="ycontainer">
          <div className="panel flex justify-center mt-40 h-[581px] w-full relative">
            <div className="flex w-[94%] bg-[#FBFBF9] rounded-[17px] py-20 px-20">
              <div className="flex flex-col pl-[20px]">
                <p className="text-green-500 text-2xl not-italic font-normal">
                  {retangle4}
                </p>
                <p className="text-black text-3xl not-italic font-bold">
                  We make impossible
                  {
                    <p className="text-green-500 text-3xl not-italic font-bold">
                      easy
                    </p>
                  }
                </p>
                <div className="flex flex-row mt-10">
                  <img
                    alt="arrow1"
                    src={r7}
                    className="w-[30px] h-[30px] mr-6"
                  />
                  <p className="text-black text-2xl not-italic font-normal">
                    Millions of stock and ETF <br /> valuations performed
                    instantly.
                  </p>
                </div>
                <div className="flex flex-row mt-5">
                  <img
                    alt="arrow1"
                    src={r7}
                    className="w-[30px] h-[30px] mr-6"
                  />
                  <p className="text-black text-2xl not-italic font-normal">
                    Fair value and risk-return <br /> valuation, find out if it
                    is a good <br /> time to buy in a second
                  </p>
                </div>
              </div>
              <div className="flex">
                <img
                  alt="arrow1"
                  src={e1}
                  className="w-[180px] h-[180px] top-[300px] right-[733px] absolute"
                />
                <img
                  alt="arrow1"
                  src={r8}
                  className="w-[500px] h-[628px] top-[-74px] right-[500px] absolute"
                />
                <img
                  alt="arrow1"
                  src={r9}
                  className="w-[300px] h-[300px] top-[100px] right-[150px] absolute"
                />
              </div>
            </div>
          </div>
        </div>
      </div> */}

      <div className="flex justify-center items-center mt-24 flex-col w-full px-30 py-20">
        <p className="text-green-500 text-base not-italic font-normal">
          {retangle8}
        </p>
        <div className="flex flex-row justify-center mt-8">
          <p className="text-center text-3xl not-italic font-bold text-white mr-3">
            {retangle9}
          </p>
          <p className="text-green-500 text-3xl not-italic font-bold">
            {retangle10}
          </p>
        </div>
        <div className="flex flex-row justify-center mt-20 w-full">
          <div className="flex flex-col  items-center justify-center mr-20">
            <div className="flex w-full justify-start mb-2">
              <img alt="arrow1" src={r15} className="w-[60px] h-[60px]" />
            </div>
            <div className="text-white border-b border-dotted border-gray-400 font-mono text-[16px] w-[270px] py-4">
              <p className="text-xl not-italic font-bold text-white w-[360px]">
                Check the impact on your <br /> portfolio before buying. Get
                <br /> alternative recommendations.
              </p>
            </div>
          </div>
          <img alt="arrow1" src={r13} className="w-[400px] h-[700px] mr-5" />
          <img
            alt="arrow1"
            src={r14}
            className="w-[380px] h-[450px] mt-20 mr-20"
          />
        </div>
      </div>
      <div className="flex w-full flex-row mt-24 h-[1000px] justify-around rounded-[10px] opacity-[0.8] ">
        <div
          className="w-1/2 h-full bg-no-repeat bg-cover flex flex-col justify-center items-start"
          style={{ backgroundImage: `url(${r16})` }}
        >
          <p className="text-5xl not-italic font-bold text-white mb-8 px-4">
            {retangle11}
          </p>
          <p className="text-2xl not-italic font-bold text-white px-4">
            We want people to be able to trade <br /> side by side with
            professionals.{" "}
          </p>
          <p className="text-green-500 text-2xl not-italic font-normal px-4">
            {retangle13}
          </p>
        </div>
        <div
          className="w-1/5 h-full bg-no-repeat bg-cover  "
          style={{ backgroundImage: `url(${r17})` }}
        ></div>
        <div
          className="w-1/5 h-ful bg-no-repeat bg-cover "
          style={{ backgroundImage: `url(${r18})` }}
        ></div>
      </div>
      <div className="flex w-full flex-row mt-24 justify-center">
        <div className="flex flex-col justify-around py-20 px-20">
          <div className="flex flex-row w-3/6 justify-center">
            <div className="w-1/2 h-1 bg-slate-50"></div>
            <div className="w-1/2 h-1 bg-slate-600"></div>
          </div>
          <p className="text-green-500 text-2xl not-italic font-normal">
            Learning
          </p>
          <p className="text-5xl not-italic font-bold text-white">
            From beginner to <br /> expert
          </p>
          <p className="text-2xl not-italic font-normal text-white">
            Unlock a learning journey from <br /> beginner to expert in our{" "}
            <br />
            comprehensive hub.
          </p>
          <div>
            <button className="text-2xl not-italic font-normal border rounded-full px-3 py-2 mt-12">
              <img alt="arrow1" src={r19} />
            </button>
          </div>
        </div>
        <div
          className="w-1/2 rounded-[22px] flex flex-row justify-center items-center py-30"
          style={{ backgroundImage: `url(${r20})` }}
        >
          <img alt="arrow1" src={r13} className="w-[330px] h-[600px]" />
        </div>
      </div>
      <div
        className="flex w-full flex-row mt-24 justify-center h-[800px] bg-no-repeat bg-cover"
        style={{ backgroundImage: `url(${r21})` }}
      ></div>
    </div>
  );
};

export default Client;
