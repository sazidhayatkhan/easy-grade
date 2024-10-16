"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation"; // Import useRouter from Next.js
import { FaCaretDown } from "react-icons/fa";
import Image from "next/image";
type Props = {
  buttonContent?: any;
};

const DrawerUI = ({ buttonContent }: Props) => {
  const router = useRouter(); // Initialize useRouter for navigation

  const handleNavigation = (url: string) => {
    // Close the drawer by unchecking the checkbox
    (document.getElementById("my-drawer") as HTMLInputElement).checked = false;

    // Navigate to the clicked item's URL
    router.push(url);
  };
  const [drop, setDrop] = useState(false);
  return (
    <div className="drawer z-[21]">
      <input id="my-drawer" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        {/* Page content here */}
        <label
          htmlFor="my-drawer"
          className="text-white text-3xl drawer-button"
        >
          {buttonContent}
        </label>
      </div>
      <div className="drawer-side">
        <label
          htmlFor="my-drawer"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="menu bg-white text-black min-h-full w-80 p-4">
          {/* Sidebar content here */}
          {menuData?.map((item: any, i: any) => (
            <div key={i}>
              {item?.title === "All Tools" ? (
                <div className="m-4 text-xl">
                  <button
                    onClick={() => setDrop(!drop)}
                    className="flex justify-start gap-2 items-center"
                  >
                    All Tools{" "}
                    <span className="mt-[4px]">
                      <FaCaretDown />
                    </span>
                  </button>
                  {drop && (
                    <div className="mt-4 space-y-4">
                      {ToolsData?.map((item: any, i: any) => (
                        <div
                          key={i}
                          className="flex justify-start items-center gap-3"
                        >
                          <Image
                            src={item?.icon ? item?.icon : "/images/10.svg"}
                            alt="icon"
                            width={0}
                            height={0}
                            sizes="100vw"
                            className="w-[40px] h-[40px] object-cover"
                          />
                          <button
                            className="text-lg"
                            onClick={() => handleNavigation(item.url)} // Navigate to the URL and close drawer
                          >
                            {item?.title}
                          </button>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <li className="text-xl">
                  <a
                    href="#"
                    onClick={() => handleNavigation(item.url)} // Navigate to the URL and close drawer
                  >
                    {item?.title}
                  </a>
                </li>
              )}
            </div>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default DrawerUI;

const menuData = [
  {
    title: "Home",
    url: "/",
  },
  {
    title: "All Tools",
    url: "",
  },
  {
    title: "About",
    url: "/about",
  },
  { title: "Request Tool", url: "/request-tool" },
];
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
