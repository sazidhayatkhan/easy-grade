"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
type Props = {
    handleDrop?: any;
};

const AllTools = ({ handleDrop }: Props) => {
  const childDrop = () => {
    handleDrop();
  };
  return (
    <div className="grid grid-cols-3 gap-6">
      {ToolsData?.map((item: any, i: any) => (
        <Link href={item?.url || ""}>
          <div
            onClick={childDrop}
            className="group bg-white border border-primary rounded-xl p-24 flex flex-col justify-center items-center"
          >
            <Image
              src={item?.icon ? item?.icon : "/images/10.svg"}
              alt="icon"
              width={0}
              height={0}
              sizes="100vw"
              className="w-[90px] h-[90px] object-cover scale-100 group-hover:scale-110 transition duration-500"
            />
            <button className="mt-4 text-black font-semibold">
              {item?.title}
            </button>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default AllTools;

const ToolsData = [
  {
    title: "Mark Convert",
    url: "/mark-convert",
    icon: "/images/10.svg",
  },
  {
    title: "Grade Convert",
    url: "/grade-convert",
    icon: "/images/A.svg",
  },
];
