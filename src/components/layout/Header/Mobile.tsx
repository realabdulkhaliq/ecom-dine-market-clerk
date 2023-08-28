"use client";
import Image from "next/image";
import Link from "next/link";
import logo from "public/logo.webp";
import Menu from "./Menu";
import Cart from "@/components/shared/Cart/Cart";
import { MenuIcon, X } from "lucide-react";
import { useState } from "react";
import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";

const MobileNav = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header>
      <nav className="flex justify-between mt-5 mx-3">
        <div className="text-red-600">Welcome to Dine Market</div>
        <div>
          <SignedOut>
            <SignInButton mode="modal">
              <button className="bg-black text-white px-2 py-1">Sign In</button>
            </SignInButton>
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn>
        </div>
      </nav>
      <nav className="flex justify-between mobile">
        <div>
          <Link href={"/"}>
            <Image src={logo} alt="Logo" width={150} />
          </Link>
        </div>
        <button onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? (
            <div className="flex-col">
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
