import Image from "next/image";
import React from "react";
import group from "/public/group.jpg";
import simo from "/public/simo.png";

const Hero = () => {
  return (
    <div className=" grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 xl:overflow-auto gap-10  custom-grid-rows px-20">
      <div className="row-span-2 col-span-2   flex flex-col justify-between">
        <h1 className=" font-bold text-5xl">
          {" "}
          WELCOME TO <span className=" text-amber-600 ">SMB DIGITALZONE,</span>
        </h1>
      </div>
      <div className="row-span-12 ">
        <div className="">
          <Image src={group} alt="group" />
        </div>
      </div>
      <div className="row-span-4  " />
      <div className="row-span-10 mr-16 ">
        <h1 className=" font-medium text-3xl">
          your cosmic command center for digital supremacy in{" "}
          <span className=" font-bold">Dubai, United Arab Emirates!</span>
        </h1>
        <p className="">
          At SMB DigitalZone, we're more than just a digital marketing agency.
          we're your celestial navigators on a cosmic voyage through the
          ever-evolving digital universe. <br /> Our mission? To guide
          businesses like yours through the nebulous digital realm and ensure
          you thrive amidst its swirling challenges and opportunities. We've
          assembled a star-studded team of seasoned navigators, each dedicated
          to plotting a course to your success.
        </p>
      </div>
      <div className="row-span-12 overflow-visible  ">
        <Image src={simo} alt="simo" className=" ml-36 z-40  w-full h-full" />
      </div>
      <div className="row-span-6 col-span-2 -mt-12  ml-28 -z-30 ">
        <h5 className=" font-bold text-xl mt-20">SINCE</h5>
        <h1 className=" text-[300px] text-gray-400">2017</h1>
      </div>
    </div>
  );
};

export default Hero;
