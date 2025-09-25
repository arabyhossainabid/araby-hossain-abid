"use client";
import { NavMenu } from "./nav-menu";
import { NavigationSheet } from "./navigation-sheet";

const Navbar = () => {
  return (
    <nav className="fixed bottom-0 left-0 w-full p-4 z-50 ">
      <div className="container flex flex-col lg:flex-row items-center justify-center mx-auto gap-4">
        {/* Desktop Floating Dock */}
        <div className="hidden lg:flex flex-col items-center gap-4">
          <NavMenu style="gap-12" />
        </div>

        {/* Mobile Sheet / Hamburger */}
        <div className="lg:hidden">
          <NavigationSheet />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
