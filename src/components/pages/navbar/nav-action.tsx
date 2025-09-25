"use client";

import { useTheme } from "next-themes";
import { Button } from "../ui/button";

const NavAction = ({ style }: { style?: string }) => {
  const { theme, setTheme } = useTheme();

  return (
    <div>
      <Button
        className="
          p-6
          text-lg font-normal
          rounded-full
          bg-[#deff00]
          text-black
          transition-all duration-300
          active:scale-95
          shadow-[0_0_0px_0_#deff00]
          hover:shadow-[0_0_15px_0px_#deff00]

        "
      >
        Contact now
      </Button>
    </div>
  );
};

export default NavAction;
