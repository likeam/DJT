import Image from "next/image";
import React from "react";
import logo from "/public/logo.jpg";

const Navbar = () => {
  return (
    <div className=" flex justify-between items-center w-full mb-7 px-20">
      <div className=" flex justify-between items-center gap-5">
        {/* Left Side  */}
        <Image src={logo} alt="logo" width={160} height={72} />
      </div>
      <div className="flex gap-8">
        <p className=" font-bold text-sm">Home</p>
        <p className=" font-bold text-sm">About Us ^</p>
        <p className=" font-bold text-sm">Services</p>
        <p className=" font-bold text-sm">Our Creation</p>
        <p className=" font-bold text-sm">Case Studies</p>
        <p className=" font-bold text-sm">Insight Hub</p>
        <p className=" font-bold text-sm">Careers</p>
        <p className=" font-bold text-sm">visual Hub</p>
      </div>

      {/* Right Side  */}
      <div className=" flex justify-between items-center gap-5">
        <div className=" flex justify-between items-center gap-5">
          <div>
            <button className="text-white font-semibold px-4 py-2 rounded-lg  bg-blue-900">
              LOG OUT
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
