import React, { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import {
  g3,
  g4,
  g5,
  iPhone1,
  iPhone2,
  iPhone4,
  g8,
  g9,
  g10,
  g11,
  g12,
  iPhone5,
} from "../../assets";
import { capiwise, capiwise1 } from "../../constants";

gsap.registerPlugin(ScrollTrigger);

const Capiwise = () => {
  const component = useRef();
  const slider = useRef();

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      let panels = gsap.utils.toArray(".panel");
      gsap.to(panels, {
        xPercent: -100 * (panels.length - 1),
        ease: "none",
        scrollTrigger: {
          trigger: slider.current,
          pin: true,
          scrub: 1,
          snap: 1 / (panels.length - 1),
          end: () => "+=" + slider.current.offsetWidth,
          markers: true,
        },
      });
    }, component);
    return () => ctx.revert();
  });
  return (
    <div ref={component}>
      <div ref={slider} className="ycontainer">
        <div className="panel">
          <div className="flex flex-col w-full justify-center py-10 relative">
            <p className="text-green-500 text-center text-6xl not-italic font-bold">
              {capiwise}
            </p>
            <p className="text-black text-center text-6xl not-italic font-bold mt-2">
              {capiwise1}
            </p>
            <div className="flex justify-center items-center">
              <img
                alt="iPhone2"
                src={iPhone2}
                className="w-[240px] h-[440px] left-[260px] top-[280px] absolute"
              />
              <img
                alt="iPhone1"
                src={iPhone1}
                className="w-[210px] h-[440px] left-[450px] top-[334px]  absolute"
              />
              <img
                alt="g4"
                src={g4}
                className="w-[300px] h-[200px] left-[575px] top-[220px]  absolute"
              />

              <img
                alt="g5"
                src={g5}
                className="w-[100px] h-[30px] left-[855px] top-[322px]   absolute"
              />
              <img
                alt="g3"
                src={g3}
                className="w-[380px] h-[160px]  right-[296px] bottom-[-370px] absolute"
              />
            </div>
          </div>
        </div>
        <div className="panel relative">
          <div className="flex flex-col w-full justify-center items-center py-10">
            <p className="text-green-500 text-center text-6xl not-italic font-bold">
              {capiwise}
            </p>
            <p className="text-black text-center text-6xl not-italic font-bold mt-2">
              {capiwise1}
            </p>
            <img
              alt="g8"
              src={g8}
              className="w-[389px] h-[114px] rounded-[21px] left-[140px] top-[240px] z-10 absolute"
            />
            <img
              alt="g10"
              src={g10}
              className="w-[260px] h-[158px] rounded-[4px] right-[420px] top-[255px] absolute"
            />
            <img
              alt="g11"
              src={g11}
              className="w-[515px] h-[165px] rounded-[4px] right-[147px] bottom-[250px] absolute"
            />
            <img
              alt="iPhone4"
              src={iPhone4}
              className="w-[260px] h-[510px] rounded-[4px]  left-[390px] top-[300px] absolute flex-shrink-0"
            />
            <img
              alt="g9"
              src={g9}
              className="w-[389px] h-[114px] rounded-[21px] right-[480px] bottom-[98px] opacity-[0.8] absolute"
            />
          </div>
        </div>
        <div className="panel relative">
          <div className="flex flex-col w-full justify-center items-center py-10">
            <p className="text-green-500 text-center text-6xl not-italic font-bold">
              {capiwise}
            </p>
            <p className="text-black text-center text-6xl not-italic font-bold mt-2">
              {capiwise1}
            </p>
            <img
              alt="g12"
              src={g12}
              className="w-[450px] h-[180px] rounded-[21px] left-[800px] top-[440px] z-10 absolute"
            />
            <img
              alt="iPhone5"
              src={iPhone5}
              className="w-[1200px] h-[700px] rounded-[21px] left-[-83px] top-[195px] z-10 absolute"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Capiwise;
