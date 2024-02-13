"use client";

import { Wrapper } from "./wrapper";
import Image from "next/image";
import { Button } from "./button";
import { Close, Hamburger } from "../icon";
import { useState } from "react";
import { MobileMenu } from "./mobilemenu";

export const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="min-h-[70px] flex z-20 sticky top-0 items-center bg-[white]">
      <Wrapper>
        <div className="flex justify-between items-center">
          <div className="logo relative w-[150px] h-[25px]">
            <Image src="/images/logo.svg" alt="logo" fill={true} />
          </div>
          {open && <MobileMenu />}
          <div className="md:flex hidden items-center self-stretch min-h-[90px] font-p_sans  md:relative">
            <ul className="group flex justify-center items-center gap-[25px] text-[hsl(233,8%,62%)] h-full">
              <li className="relative after:h-[3px] after:bg-[hsl(136,65%,51%)] after:w-full after:absolute bottom-0 after:invisible h-full hover:after:visible">
                <a
                  href="#"
                  className="h-full w-full flex items-center justify-center"
                >
                  Home
                </a>
              </li>
              <li className="relative after:h-[3px] after:bg-[hsl(136,65%,51%)] after:w-full after:absolute bottom-0 after:invisible h-full hover:after:visible">
                <a
                  href="#"
                  className="h-full w-full flex items-center justify-center"
                >
                  About
                </a>
              </li>
              <li className="relative after:h-[3px] after:bg-[hsl(136,65%,51%)] after:w-full after:absolute bottom-0 after:invisible h-full hover:after:visible">
                <a
                  href="#"
                  className="h-full w-full flex items-center justify-center"
                >
                  Contact
                </a>
              </li>
              <li className="relative after:h-[3px] after:bg-[hsl(136,65%,51%)] after:w-full after:absolute bottom-0 after:invisible h-full hover:after:visible">
                <a
                  href="#"
                  className="h-full w-full flex items-center justify-center"
                >
                  Blog
                </a>
              </li>
              <li className="relative after:h-[3px] after:bg-[hsl(136,65%,51%)] after:w-full after:absolute bottom-0 after:invisible h-full hover:after:visible">
                <a
                  href="#"
                  className="h-full w-full flex items-center justify-center"
                >
                  Careers
                </a>
              </li>
            </ul>
          </div>
          <div className="hidden md:flex items-center">
            <Button />
          </div>
          <div className="flex md:hidden relative z-20" onClick={() => setOpen(!open)}>
            {open ? <Close /> : <Hamburger />}
          </div>
        </div>
      </Wrapper>
    </div>
  );
};
