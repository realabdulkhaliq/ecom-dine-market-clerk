"use client";
import Image from "next/image";
import Link from "next/link";
import logo from "public/logo.webp";
import Menu from "./Menu";
import Cart from "@/components/shared/Cart/Cart";
import { MenuIcon, X } from "lucide-react";
import { useState } from "react";

const MobileNav = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header>
      <nav className="flex justify-between m-3">
        <div>
          <Link href={"/"}>
            <Image src={logo} alt="Logo" width={150} />
          </Link>
        </div>
        <button onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? (
            <div className="flex-col gap-y-4">
              <button onClick={() => setIsOpen(!isOpen)}>
                <X />
              </button>
              <Cart />
              <Menu />
            </div>
          ) : (
            <MenuIcon />
          )}
        </button>
      </nav>
    </header>
  );
};

export default MobileNav;
