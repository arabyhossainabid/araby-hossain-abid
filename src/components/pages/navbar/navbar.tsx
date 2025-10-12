"use client";
import { NavMenu } from "./nav-menu";

const Navbar = () => {
  return (
    <nav className="fixed bottom-0 left-0 w-full p-4 z-50">
      <div className="container flex flex-col lg:flex-row items-center justify-center mx-auto gap-4">
        {/* Floating Dock visible on all devices */}
        <div className="flex flex-col items-center gap-4 scale-90 sm:scale-90 md:scale-100 lg:scale-100">
          <NavMenu style="gap-12" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
