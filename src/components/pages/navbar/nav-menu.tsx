"use client";

import { FloatingDockDemo } from "@/components/ui/floating-dock-demo";

export const NavMenu = ({ style }: { style?: string }) => {
  return (
    <div className={style}>
      <FloatingDockDemo />
    </div>
  );
};
