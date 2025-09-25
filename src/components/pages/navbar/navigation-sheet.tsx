import { Button } from "@/components/pages/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/pages/ui/sheet";
import { Menu } from "lucide-react";
import { NavMenu } from "./nav-menu";

export const NavigationSheet = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline" size="icon">
          <Menu />
        </Button>
      </SheetTrigger>
      <SheetContent className="flex flex-col gap-10 p-2">
        <NavMenu style="lg:hidden gap-4 flex-col flex w-fit items-start" />
      </SheetContent>
    </Sheet>
  );
};
