import React from "react";
import logob from "/public/logob.png";
import facebook from "/public/facebook.svg";
import linkdan from "/public/linkdan.svg";
import axe from "/public/x.svg";
import Image from "next/image";

const Footer = () => {
  return (
    <div className=" bg-[#0F172A] h-[100vh] text-white">
      <div className=" flex flex-col px-20">
        {/* Top section   */}
        <div className=" flex flex-col justify-center items-center gap-10 py-28">
          <div className=" text-4xl font-bold text-center">
            Contact Us & <br /> Let’s Build Your Dream Project.
          </div>
          <button className=" bg-white px-8 py-3 text-black rounded-full font-bold">
            Contact Us
          </button>
        </div>

        {/* Lower Section  */}
        <div className="">
          {/* Link Section  */}
          <div className=" grid grid-cols-4 gap-10">
            <div className="">
              <h2 className=" text-lg font-bold mb-4">LINKS</h2>
              <ul>
                <li>
                  <a href="" className=" hover:underline text-gray-300">
                    Home
                  </a>
                </li>
                <li>
                  <a href="" className=" hover:underline text-gray-300">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="" className=" hover:underline text-gray-300">
                    Our Creation
                  </a>
                </li>
                <li>
                  <a href="" className=" hover:underline text-gray-300">
                    Case Studies
                  </a>
                </li>
                <li>
                  <a href="" className=" hover:underline text-gray-300">
                    Ingight Hub
                  </a>
                </li>
                <li>
                  <a href="" className=" hover:underline text-gray-300">
                    Careers
                  </a>
                </li>
                <li>
                  <a href="" className=" hover:underline text-gray-300">
                    Visual Hub
                  </a>
                </li>
              </ul>
            </div>
            <div className="">
              <h2 className=" text-lg font-bold mb-4">SERVICESS</h2>

              <ul>
                <li>
                  <a href="" className=" hover:underline text-gray-300">
                    SCO Services
                  </a>
                </li>
                <li>
                  <a href="" className=" hover:underline text-gray-300">
                    Social Media Marketing
                  </a>
                </li>
                <li>
                  <a href="" className=" hover:underline text-gray-300">
                    PPC Markiting
                  </a>
                </li>
                <li>
                  <a href="" className=" hover:underline text-gray-300">
                    Content Marketing
                  </a>
                </li>
                <li>
                  <a href="" className=" hover:underline text-gray-300">
                    Custom Software Development
                  </a>
                </li>
                <li>
                  <a href="" className=" hover:underline text-gray-300">
                    Mobile App Development
                  </a>
                </li>
                <li>
                  <a href="" className=" hover:underline text-gray-300">
                    Web Development
                  </a>
                </li>
                <li>
                  <a href="" className=" hover:underline text-gray-300">
                    UI/UX Desiging
                  </a>
                </li>
              </ul>
            </div>
            <div className="">
              <h2 className=" text-lg font-bold mb-4">FOCUS</h2>
              <ul>
                <li>
                  <a href="" className=" hover:underline text-gray-300">
                    Brand Layalty
                  </a>
                </li>
                <li>
                  <a href="" className=" hover:underline text-gray-300">
                    Responsive Designs
                  </a>
                </li>
                <li>
                  <a href="" className=" hover:underline text-gray-300">
                    Development
                  </a>
                </li>
                <li>
                  <a href="" className=" hover:underline text-gray-300">
                    Media Production
                  </a>
                </li>
                <li>
                  <a href="" className=" hover:underline text-gray-300">
                    Website Maintenance
                  </a>
                </li>
                <li>
                  <a href="" className=" hover:underline text-gray-300">
                    Virtual Tour
                  </a>
                </li>
                <li>
                  <a href="" className=" hover:underline text-gray-300">
                    Performance Optmization
                  </a>
                </li>
              </ul>
            </div>
            <div className="">
              <h2 className=" text-lg font-bold mb-4">INLINE</h2>

              <ul>
                <li>
                  <a href="" className=" hover:underline text-gray-300">
                    Market Research & Analysis
                  </a>
                </li>
                <li>
                  <a href="" className=" hover:underline text-gray-300">
                    Social Media Content
                  </a>
                </li>
                <li>
                  <a href="" className=" hover:underline text-gray-300">
                    Graphic Design
                  </a>
                </li>
                <li>
                  <a href="" className=" hover:underline text-gray-300">
                    E-Commerce
                  </a>
                </li>
                <li>
                  <a href="" className=" hover:underline text-gray-300">
                    Brand Identity
                  </a>
                </li>
              </ul>
            </div>
          </div>
          {/* info Section  */}
          <div className="  border-t p4 text-gray-300 my-20">
            <div className=" flex items-center flex-row justify-between my-20">
              <div className="">
                <Image
                  src={logob}
                  alt="logo"
                  className=" h-[52px] w-[125px] "
                />
              </div>
              <div className="">
                <p className="">
                  © 2025 SMB DigitalZone. All Rights Reserved.{" "}
                </p>
              </div>
              <div className=" flex gap-4">
                <div className=" w-[52px] h-[36px] rounded-full border-1 ">
                  <Image
                    src={facebook}
                    alt="facebook"
                    className=" w-[42px] h-[36px]   px-1 py-1 text-center"
                  />
                </div>
                <div className=" w-[52px] h-[36px] rounded-full border-1 ">
                  <Image
                    src={linkdan}
                    alt="linkdan"
                    className=" w-[42px] h-[36px] px-1 py-1 text-center "
                  />
                </div>
                <div className=" w-[52px] h-[36px] rounded-full border-1 ">
                  <Image
                    src={axe}
                    alt="x"
                    className=" w-[42px] h-[36px] px-1 py-1 text-center "
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
