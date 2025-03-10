import React, { useState } from "react";
import logo from "../assets/logo.png";
import avatar from "../assets/avatar.jpg";
import {
  HiHome,
  HiMagnifyingGlass,
  HiPlayCircle,
  HiStar,
  HiTv,
} from "react-icons/hi2";
import { HiPlus, HiDotsVertical } from "react-icons/hi";
import HeaderItem from "./HeaderItem";

function Header() {
    const [toggle, setToggle]=useState(false);
  const menu = [
    {
      name: "Home",
      icon: HiHome,
    },
    {
      name: "Search",
      icon: HiMagnifyingGlass,
    },
    {
      name: "Watch List",
      icon: HiPlus,
    },
    {
      name: "Originals",
      icon: HiStar,
    },
    {
      name: "Movies",
      icon: HiPlayCircle,
    },
    {
      name: "Series",
      icon: HiTv,
    },
  ];
  return (
    <div className="flex gap-8 items-center justify-between p-4">
      <div className="flex gap-8 items-center">
        <img
          src={logo}
          className="w-[80px] md:w-[115px] object-cover"
          alt=""
          srcset=""
        />
        <div className="hidden md:flex gap-8">
          {menu.map((item) => {
            return <HeaderItem name={item.name} Icon={item.icon} />;
          })}
        </div>
        <div className="flex md:hidden gap-8">
          {menu.map((item, index) => {
            return (
              index < 3 && <HeaderItem name="" Icon={item.icon} />
            );
          })}
          <div className="md:hidden" onClick={()=>setToggle(!toggle)}>
            <HeaderItem name="" Icon={HiDotsVertical} />
            {toggle? <div className="absolute mt-3 bg-[#121212] border-[1px] p-1 border-gray-700 px-5 py-4">
              {menu.map((item, index) => {
                return (
                  index >= 3 && (
                    <div className="p-2">
                      <HeaderItem name={item.name} Icon={item.icon} />
                    </div>
                  )
                );
              })}
            </div>:null}
          </div>
        </div>
      </div>
      <img src={avatar} className="w-[40px] rounded-full" alt="" srcset="" />
    </div>
  );
}

export default Header;
