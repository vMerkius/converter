import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "../ui/button";

const Help = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline">?</Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>How it works</SheetTitle>
          <SheetDescription>
            Convert your files from one format to another
          </SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
};

export default Help;
