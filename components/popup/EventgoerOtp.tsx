import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogFooter } from "@/components/ui/dialog";
import PopMessageIcon from "../icons/PopMessageIcon";

interface DialogDemoProps {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
}

export function DialogDemo({ isOpen, onOpenChange }: DialogDemoProps) {
  const router = useRouter();

  const handleClick = () => {
    onOpenChange(false); // Close the dialog
    router.push("/dashboard");
  };

  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[425px]">
        <div className="flex flex-col gap-[53px] items-center mx-auto text-center justify-center">
          <div>
            <PopMessageIcon />
          </div>
          <div className="space-y-[10px]">
            <h4 className="text-[20px] font-medium">Account Approved</h4>
            <p className="text-[#919BA7] font-medium">
              Let’s get right into checking out great events!
            </p>
          </div>
        </div>
        <DialogFooter className="mx-auto text-center mt-[42px]">
          <Button
            onClick={handleClick}
            type="submit"
            className="bg-[#1671D9] mx-auto text-white w-full max-w-[188px]"
          >
            Continue
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
