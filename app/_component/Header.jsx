import { Button } from "@/components/ui/button";
import { LayoutGrid, Search, ShoppingBag } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

function Header() {
  return (
    <div className="h-[80px] p-5  justify-between shadow-lg flex items-center">
      <div className="flex items-center gap-8">
        <Image src={"/logo.png"} alt="logo" width={170} height={50} />
        <Link
          href={"#"}
          className="flex gap-2 items-center cursor-pointer border px-10 py-2 rounded-2xl bg-slate-300"
        >
          <LayoutGrid className="h-5 w-5" />
          Category
        </Link>
        <div className="flex justify-center border rounded-2xl px-10 py-2 gap-2">
          <Search />
          {/* <input type="text" placeholder="Search" className="outline-none" /> */}
          <span className="pr-5">Search</span>
        </div>
      </div>
      <div className="flex items-center gap-5">
        <Link
          href={"/checkout"}
          className="flex border text-md px-10 py-2 rounded-2xl"
        >
          <ShoppingBag />
          Checkout
        </Link>
        <Link
          href={"/login"}
          className="border px-8 py-2 rounded-lg font-bold *:**:"
        >
          Login
        </Link>
      </div>
    </div>
  );
}

export default Header;
