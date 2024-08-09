"use client";

import StylizedMessageIcon from "@/components/icons/StylizedMessageIcon";
import Signupimage from "/public/assests/signup image.png";
import Image from "next/image";

import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import { REGEXP_ONLY_DIGITS_AND_CHARS } from "input-otp";

function Page() {
  return (
    <div className="px-4 py-4 font-inter">
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
              We've sent you a 4 digit code to hello@dbranddr. Please paste code
              or click the link to confirm your address.
            </p>
            <InputOTP maxLength={6} pattern={REGEXP_ONLY_DIGITS_AND_CHARS}>
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
            <button className="px-[16px] py-[8px] bg-[#D0D5DD] font-semibold text-white rounded-[8px] max-w-[177px] w-full mt-[29.68px] text-[14px]">
              Resend in 3:03
            </button>
            <div className="text-[#98A2B3] mt-[61px] text-[12px] font-medium">
              <p>Can't see the email? Please check the spam folder.</p>
              <p> Wrong email? <span className="text-[#475367] underline">Please re-enter your address.</span></p>
            </div>
          </div>
        </div>
        <div className="hidden xl:flex">
          <Image src={Signupimage} alt="signup image" />
        </div>
      </div>
    </div>
  );
}

export default Page;
