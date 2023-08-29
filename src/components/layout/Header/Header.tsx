import Image from "next/image";
import logo from "public/logo.webp";
import { Search } from "lucide-react";
import Link from "next/link";
import MaxWidthWrapper from "@/components/shared/Wrapper/MaxWidthWrapper";
import Menu from "@/components/layout/Header/Menu";
import Cart from "@/components/shared/Cart/Cart";
import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";

const Header = () => {
  return (
    <header>
      <MaxWidthWrapper>
        <nav className="flex items-center justify-between my-8">
          <div>
            <Link href={"/"}>
              <Image src={logo} alt="Logo" width={150} />
            </Link>
          </div>
          <div className="">
            <Menu />
          </div>
          <div className="flex items-center gap-2 px-2 bg-white rounded-md border-slate-200 border">
            <Search size={14} />
            <input type="search" placeholder="What you looking for"></input>
          </div>
          <SignedOut>
            <SignInButton mode="modal">
              <button className="bg-black text-white px-2 py-1">Sign In</button>
            </SignInButton>
          </SignedOut>
          <Cart />
          <SignedIn>
            <UserButton afterSignOutUrl="/" />
          </SignedIn>
        </nav>
      </MaxWidthWrapper>
    </header>
  );
};

export default Header;
