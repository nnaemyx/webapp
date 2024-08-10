import Image from "next/image";
import Signupimage from "/public/assests/signup image.png";
import Stylizedlogo from "/public/assests/stylized logo.png";

function Page() {
  return (
    <div className="px-4 py-4 font-inter">
      <div className="md:flex justify-center mx-auto">
        <div className="hidden xl:flex">
          <Image src={Signupimage} alt="signup image" />
        </div>
        <div className="lg:flex-1 lg:px-[10rem]">
          <div>
            <Image src={Stylizedlogo} alt="logo" className="-ml-8" />
          </div>

          <div className="my-[71px]">
            <h5 className="text-[#012657] font-semibold text-[24px]">
              Let’s fix your password
            </h5>
            <p className="mt-[8px] text-[14px] text-[#645D5D] font-medium">
              Enter the email address associated with your account. If you have
              an account, we’ll send a reset link to your email.
            </p>
            <form>
              <div className="my-[41px]">
                <label className="text-[#101928] text-[14px] font-medium">
                  Email Address
                </label>
                <input
                  type="email"
                  className="w-full focus:outline-none border border-solid border-[#D0D5DD] h-[36px] mt-2 rounded-[6px] font-medium px-[12px] py-[8px]"
                />
              </div>
              <div className="flex gap-[15px]">
                <button className="bg-[#667185] px-[16px] py-[8px] rounded-[8px] text-white text-[14px] font-semibold">
                  back to login
                </button>
                <button className="bg-[#1671D9] px-[16px] py-[8px] rounded-[8px] text-white text-[14px] font-semibold flex-1">
                  Send reset link
                </button>
              </div>
            </form>
          </div>
          <p className="text-[12px] font-medium text-[#98A2B3]">
            By continuing past this page, you acknowledge that you have read,
            and agree to our{" "}
            <span className="text-[#344054] underline">Terms of Service</span>{" "}
            and our{" "}
            <span className="text-[#344054] underline">Privacy Policy.</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Page;
