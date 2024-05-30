"use client";

import Link from "next/link";
import Menu from "./Menu";
import SideNav from "./SideNav";
import SearchNav from "../reusable/SearchNav";
import AccountNav from "../reusable/AccountNav";
import { PiBagLight } from "react-icons/pi";
import MenuSlide from "../reusable/MenuSlide";

export default function Header() {
  return (
    <div className="w-full mx-auto  top-full ">
      <div className=" hidden w-full md:flex items-center justify-between px-6 py-3 bg-[#41c2fc]">
        <div className=" flex items-center justify-center gap-2">
          <span className="text-sm text-white font-bold">
            40-80% Off Everything
          </span>
          <Link href="/" className=" text-sm text-white border-b">
            Exclusins & Details
          </Link>
          <Link href="/" className=" text-sm text-white font-bold border-b ">
            WOMEN
          </Link>
          <Link href="/" className=" text-sm text-white font-bold  border-b">
            MEN
          </Link>
        </div>
        <Link href="/" className=" text-sm text-white border-b ">
          Enable Accessibility
        </Link>
      </div>

      <div className="  w-full bg-white border-b ">
        <div className="flex items-center justify-between px-6  ">
          <div className=" hidden  md:flex items-center justify-center gap-2">
            <span className=" text-sm text-slate-900 w-[200px]  ">
              Free Shipping on Orders $75+
            </span>
            <Link
              href="/"
              className=" text-sm text-slate-600 hover:text-slate-900 border-b border-slate-600 hover:border-slate-900 "
            >
              Details
            </Link>
          </div>
          <div className=" md:hidden flex items-center justify-center gap-3">
            <MenuSlide />

            <SearchNav />
          </div>
          <Link href="/">
            <img src="/logo.png" alt="" width="150" />
          </Link>
          <div className="hidden md:block">
            <SideNav />
          </div>
          <div className=" md:hidden flex items-center justify-center gap-3 ">
            <AccountNav />
            <PiBagLight
              size="1.6rem"
              className="hover:border-b-2 border-black delay-100 duration-100 cursor-pointer"
            />
          </div>
        </div>
      </div>
      <div className="hidden md:block  py-6">
        <Menu />
      </div>
    </div>
  );
}
