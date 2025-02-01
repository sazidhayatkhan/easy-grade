import React, { useState } from "react";
import Link from "next/link";
import NavPC from "./NavPC";
import NavPhone from "./NavPhone";
import { IoLogoFirebase } from "react-icons/io5";
type Props = {};

const NavbarUI = (props: Props) => {
  return (
    <div className="bg-primary fixed z-[20] top-0 w-full px-4 flex justify-between items-center">
      <Link href="/">
        <div>
          <p className="text-white font-semibold text-2xl py-3 md:py-0 flex justify-start items-center gap-1"><IoLogoFirebase/>Easy Grade</p>
        </div>
      </Link>
      <div className="hidden md:block">
        <NavPC/>
      </div>
      <div className="block md:hidden">
        <NavPhone/>
      </div>
    </div>
  );
};

export default NavbarUI;
