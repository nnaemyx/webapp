"use client"

import { useState, useEffect } from "react";
import StylizedMessageIcon from "@/components/icons/StylizedMessageIcon";
import Signupimage from "/public/assests/signup image.png";
import Image from "next/image";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import { REGEXP_ONLY_DIGITS_AND_CHARS } from "input-otp";
import { DialogDemo } from "@/components/popup/EventgoerOtp";
import { useToast } from "@/components/ui/use-toast";
import useAuthStore from "@/store/formStore";

function Page() {
  const [otp, setOtp] = useState("");
  const [countdown, setCountdown] = useState(0);
  const [isCounting, setIsCounting] = useState(false);
  const [showDialog, setShowDialog] = useState(false);

  const { toast } = useToast();
  const isVerified = useAuthStore((state: any) => state.isVerified);
  const verifyOtp = useAuthStore((state: any) => state.verifyOtp);
  const error = useAuthStore((state: any) => state.error);

  useEffect(() => {
    const endTime = localStorage.getItem("otpEndTime");
    if (endTime) {
      const remainingTime = Math.floor((Number(endTime) - Date.now()) / 1000);
      if (remainingTime > 0) {
        setCountdown(remainingTime);
        setIsCounting(true);
      }
    }
  }, []);

  useEffect(() => {
    if (isCounting && countdown > 0) {
      const timer = setInterval(() => setCountdown(countdown - 1), 1000);
      return () => clearInterval(timer);
    } else if (countdown === 0) {
      setIsCounting(false); // Stop the countdown
    }
  }, [countdown, isCounting]);

  useEffect(() => {
    if (otp.length === 4) {
      handleVerifyOtp(otp);
    }
  }, [otp]);

  useEffect(() => {
    if (error) {
      toast({
        variant: "destructive",
        description: `${error}`,
      });
    }
  }, [error]);

  const handleResend = () => {
    const endTime = Date.now() + 183 * 1000; // 3:03 minutes from now
    localStorage.setItem("otpEndTime", endTime.toString());
    setCountdown(183); // Reset countdown to 3:03 minutes
    setIsCounting(true); // Restart the countdown
  };

  const handleVerifyOtp = async (otp: string) => {
    const isVerified = await verifyOtp(otp);
    if (isVerified) {
      toast({
        description: "User verified successfully",
      });
      setShowDialog(true); 
    }
  };

  useEffect(() => {
    if (isVerified) {
      toast({
        description: "User verified successfully",
      });
      setShowDialog(true); 
    }
  }, [isVerified]);

  return (
    <div className="relative px-4 py-4 font-inter">
      <div className="md:flex justify-center mx-auto">
        <div className="lg:flex-1 lg:px-[10rem]">
          <div>
            <StylizedMessageIcon className="-ml-8" />
          </div>

          <div className="mt-[70px]">
            <h5 className="font-semibold text-[#012657] text-[24px]">
              Verification sent
            </h5>
            <p className="text-[#645D5D] text-[14px] font-normal mt-[8px]">
              We've sent you a 4 digit code. Please paste the code or click the
              link to confirm your address.
            </p>
            <InputOTP
              maxLength={4}
              pattern={REGEXP_ONLY_DIGITS_AND_CHARS}
              value={otp}
              onChange={(otp: any) => setOtp(otp)}
            >
              <InputOTPGroup className=" mt-[39px] space-x-[13.27px]">
                <InputOTPSlot
                  index={0}
                  className="border-[0.411px] border-[#004BA9] border-solid w-[56.11px] h-[64.32px] text-[42.421px] font-medium"
                />
                <InputOTPSlot
                  index={1}
                  className="border-l border-solid border-[0.411px] border-[#004BA9] w-[56.11px] h-[64.32px] text-[42.421px] font-medium"
                />
                <InputOTPSlot
                  index={2}
                  className="border-l border-solid border-[0.411px] border-[#004BA9] w-[56.11px] h-[64.32px] text-[42.421px] font-medium"
                />
                <InputOTPSlot
                  index={3}
                  className="border-l border-solid border-[0.411px] border-[#004BA9] w-[56.11px] h-[64.32px] text-[42.421px] font-medium"
                />
              </InputOTPGroup>
            </InputOTP>
            <button
              disabled={isCounting && countdown > 0}
              onClick={handleResend}
              className={`px-[16px] py-[8px] ${
                countdown === 0 ? "bg-[#1671D9]" : "bg-[#D0D5DD]"
              } font-semibold text-white rounded-[8px] max-w-[177px] w-full mt-[29.68px] text-[14px]`}
            >
              {isCounting && countdown > 0
                ? `Resend in ${Math.floor(countdown / 60)}:${countdown % 60}`
                : "Resend"}
            </button>
            <div className="text-[#98A2B3] mt-[61px] text-[12px] font-medium">
              <p>Can't see the email? Please check the spam folder.</p>
              <p>
                {" "}
                Wrong email?{" "}
                <span className="text-[#475367] underline">
                  Please re-enter your address.
                </span>
              </p>
            </div>
          </div>
        </div>
        <div className="hidden xl:flex">
          <Image src={Signupimage} alt="signup image" />
        </div>
      </div>

      {showDialog && (
        <DialogDemo isOpen={showDialog} onOpenChange={setShowDialog} />
      )}
    </div>
  );
}

export default Page;