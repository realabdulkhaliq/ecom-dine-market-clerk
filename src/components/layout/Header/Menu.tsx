"use client";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import Link from "next/link";

const Menu = () => {
  return (
    <NavigationMenu>
      <NavigationMenuList className="flex-col sm:flex-row gap-4 sm:gap-2 md:gap-2 lg:gap-10 font-sans font-normal text-lg">
        <NavigationMenuItem>
          <Link href={"/category/female"}>Female</Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href={"/category/male"}>Male</Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href={"/category/kids"}>Kids</Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href={"/products"}>All Products</Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};

export default Menu;
