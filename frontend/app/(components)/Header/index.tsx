import Image from "next/image";
import React from "react";
import header from "/public/header.jpg";

const Header = () => {
  return (
    <div className=" flex items-center px-20">
      <Image src={header} alt="header" height={460} />
    </div>
  );
};

export default Header;
