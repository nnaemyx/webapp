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
              Enter new password
            </h5>
            <p className="mt-[8px] text-[14px] text-[#645D5D] font-medium">
              Provide a new password for your entrypal account
            </p>
            <form>
              <div className="my-[41px]">
                <div>
                  <label className="text-[#101928] text-[14px] font-medium">
                    Password
                  </label>
                  <input
                    type="password"
                    className="w-full focus:outline-none border border-solid border-[#D0D5DD] h-[36px] mt-2 rounded-[6px] font-medium px-[12px] py-[8px]"
                  />
                </div>
                <div className="mt-4">
                  <label className="text-[#101928] text-[14px] font-medium">
                    Confirm Password
                  </label>
                  <input
                    type="password"
                    className="w-full focus:outline-none border border-solid border-[#D0D5DD] h-[36px] mt-2 rounded-[6px] font-medium px-[12px] py-[8px]"
                  />
                </div>
              </div>
              <div >
                <button className="bg-[#1671D9] px-[16px] py-[8px] rounded-[8px] text-white text-[14px] font-semibold w-full">
                  Reset password
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
