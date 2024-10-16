"use client";
import React, { useState } from "react";
import Link from "next/link";
import AllTools from "./components/AllTools";
type Props = {};

const NavPC = (props: Props) => {
  const [open, setOpen] = useState(false);
  const [hoveredMenuItem, setHoveredMenuItem] = useState<any>(null); // To track the hovered menu item
  const childDrawerClose = () =>{
    setOpen(false)
  }
  const serviceData = [
    {
      title: "All Tools",
      url: "",
      content: <AllTools handleDrop={childDrawerClose}/>,
    },
    {
      title: "About",
      url: "/about",
      content: "",
    },
    {
      title: "Request Tool",
      url: "/request-tool",
      content: "",
    },
  ];
  return (
    <div>
      <div className="flex justify-end items-center">
        {serviceData?.map((item: any, i: any) => (
          <Link href={item?.url || ""} key={i}>
            <button
              onMouseEnter={() => {
                setHoveredMenuItem(item); // Set the hovered menu item
                setOpen(true);
              }}
              onMouseLeave={() => setOpen(false)}
              className="font-semibold text-sm text-white p-4"
            >
              {item?.title}
            </button>
          </Link>
        ))}
      </div>
      {open && hoveredMenuItem && hoveredMenuItem.content && (
        <div
          className="absolute top-[53px] left-1/2 transform -translate-x-1/2 w-[85%] z-[20]"
          onMouseEnter={() => setOpen(true)}
          onMouseLeave={() => setOpen(false)}
        >
          <div className="bg-white shadow-lg p-4">
            {hoveredMenuItem.content} {/* Render the content dynamically */}
          </div>
        </div>
      )}
    </div>
  );
};

export default NavPC;
