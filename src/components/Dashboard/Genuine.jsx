import React from "react";
import { e1, arrow2, arrow3, r20, r22, r23, e6, e7 } from "../../assets";
import { userList } from "../../constants";

const Genuine = () => {
  return (
    <div className="flex flex-col w-full justify-center items-center pt-20 bg-white h-auto relative">
      <div className="w-full px-20 py-10 flex flex-row max-lg:w-full max-lg:flex-col max-ss:px-1">
        <div className="w-1/3 flex flex-col items-start justify-start max-lg:w-full">
          <p className="text-green-500 text-center text-2xl not-italic font-normal max-xs:text-[30px]">
            Testimonials
          </p>
          <p className="text-black text-5xl not-italic font-bold mt-8 w-full max-xs:text-[32px]">
            What our clients <br /> think about us?
          </p>
          <img
            alt="e1"
            src={e1}
            className="w-[244px] h-[244px] absolute top-[165px] left-[-103px] opacity-40 max-lg:top-[165px]"
          />
        </div>
        <div className="w-2/3 flex flex-col justify-start max-lg:w-full max-lg:mt-8">
          <div className="flex justify-between">
            <div className="flex flex-row justify-center">
              {userList.map((user, index) => (
                <img
                  key={user.id}
                  src={user.icon}
                  alt={user.id}
                  className={`w-[60px] h-[60px] object-contain cursor-pointer ${
                    index !== userList.length - 1 ? "-mr-2" : "mr-0"
                  }`}
                  onClick={() => window.open(user.link)}
                />
              ))}
            </div>
            <div className="flex flex-row max-xs:hidden">
              <img
                alt="arrow3"
                src={arrow3}
                className="w-[30px] h-[30px] mr-4"
              />
              <img
                alt="arrow2"
                src={arrow2}
                className="w-[30px] h-[30px] max-xs:hidden"
              />
            </div>
          </div>
          <p className="text-black text-3xl not-italic font-normal mt-8 max-ss:text-[18px]">
            “Ever since I started using Capiwise, my investment <br /> journey
            has been nothing short of amazing. As a beginner <br /> in the world
            of trading and stocks, I was initially <br /> overwhelmed by the
            complexities involved. However, this
            <br /> app has been an absolute game-changer for me”
          </p>
          <p className="text-black text-3xl not-italic font-bold mt-12">
            -Rose May
          </p>
        </div>
      </div>
      <div className="w-full flex flex-row relative ">
        <div
          className="w-2/3 pl-16 bg-no-repeat bg-cover py-20 flex flex-row justify-between max-ss:w-full max-ss:px-1 max-ss:py-8"
          style={{ backgroundImage: `url(${r20})` }}
        >
          <div className="flex flex-col">
            <p className="text-black text-5xl not-italic font-bold opacity-50 max-ss:opacity-100 max-ss:text-[24px] ">
              Genuine human backing
            </p>
            <p className="text-black text-3xl not-italic font-semibold mt-12 opacity-50 max-ss:opacity-100 max-ss:text-[16px]">
              Our dedicated team of experts is <br /> here to listen, guide, and
              assist you <br /> in making wise investment <br /> decisions.
            </p>
            <button className="mt-16 bg-green-400 text-center text-2xl not-italic font-normal text-white rounded-full px-3 py-1 w-[287px] h-auto z-10">
              Contact us
            </button>
          </div>
          <img
            alt="arrow1"
            src={r23}
            className="w-[330px] h-[460px] absolute top-[4%] left-[55%] max-ss:hidden"
          />
        </div>
        <div
          className="w-1/3 px-16 bg-no-repeat bg-cover py-20 max-ss:hidden"
          style={{ backgroundImage: `url(${r22})` }}
        >
          <div className="flex flex-col"></div>
        </div>
      </div>
    </div>
  );
};

export default Genuine;
