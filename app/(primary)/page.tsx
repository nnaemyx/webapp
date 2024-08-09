import Link from "next/link";
import SwiperCarousel from "./_components/SwiperCarousel";
import MobileSwiper from "./_components/MobileSwiper";

export default function Home() {
  return (
    <>
      <div className="w-full mt-[121px] relative h-[600px]">
        <div className="md:text-center  text-left px-8 md:px-0">
          <div className="font-aeonik 2xl:px-[23.5rem] md:px-[6rem] xl:px-[13rem]">
            <h1 className="font-semibold text-[34px] md:text-[44px] lg:text-[74px] md:leading-[49.685px] leading-[39.685px] lg:leading-[79.685px]">
              Create Delightful Event Experiences with Entrypal
            </h1>
            <p className="text-[#898D9C] mt-2 text-[16px] lg:text-[22px]">
              Entrypal is a suite of Event Ticketing and attendance tools, a
              simple, secure way to create, sell tickets and discover amazing
              events. Get started below.
            </p>
          </div>
          <div className="md:mt-16 mt-8 font-aeonik flex flex-col md:flex-row w-full mx-auto gap-4 justify-center">
            <Link
              href="/authentication"
              className="bg-[#EBEEF3] rounded-[8px] md:w-[168.5px] p-[10px] text-center "
            >
              <button>Discover Events</button>
            </Link>
            <Link
              href="/authentication/add-creator"
              className="bg-[#072D6B] p-[10px] rounded-[8px] md:w-[168.5px] text-light text-center"
            >
              <button>Create Events</button>
            </Link>
          </div>
        </div>
      </div>
      <div className="flex flex-col">
        <div className=" z-10 absolute -mt-[11rem] px-2 right-0 left-0">
          <div className="2xl:w-[1457px] xl:w-[1257px] w-auto z-0 hover:shadow-md mx-auto flex justify-center flex-col  rounded-[8px] h-[364px] text-center bg-light">
            <div className="px-[56.46px]">
              <p className="font-gtwalsheimpro text-[#565F70] text-[10.7555px] leading-normal font-normal md:text-[12px] tracking-[3px] ">
                DISCOVER EVENTS
              </p>
              <h1 className="font-aeonik font-semibold text-[25px] lg:text-[37.642px] md:text-[42px]">
                Where do you wanna go to today?
              </h1>
            </div>

            <div className="flex justify-center gap-2 mt-12">
              <div>
                <div className="relative w-[214px] md:w-[600px] md:px-[42px] py-[8px] border-[#B6CEFF] border border-solid rounded-[45px]">
                  <span className="absolute left-2 md:left-8">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      width="24"
                      height="24"
                      fill="currentColor"
                    >
                      <path d="M18.031 16.6168L22.3137 20.8995L20.8995 22.3137L16.6168 18.031C15.0769 19.263 13.124 20 11 20C6.032 20 2 15.968 2 11C2 6.032 6.032 2 11 2C15.968 2 20 6.032 20 11C20 13.124 19.263 15.0769 18.031 16.6168ZM16.0247 15.8748C17.2475 14.6146 18 12.8956 18 11C18 7.1325 14.8675 4 11 4C7.1325 4 4 7.1325 4 11C4 14.8675 7.1325 18 11 18C12.8956 18 14.6146 17.2475 15.8748 16.0247L16.0247 15.8748Z"></path>
                    </svg>
                  </span>
                  <input
                    type="text"
                    placeholder="Discover Events"
                    className="focus:outline-none md:placeholder:text-[18px] placeholder:text-[16px] placeholder:text-black w-[124px] md:w-[450px]"
                  />
                </div>
              </div>
              <div className="md:py-[5px] py-[4.481px] px-[17.925px] md:px-[24px] flex items-center md:gap-[7px] bg-[#EFF4FF] border-[#B6CEFF] border border-solid rounded-[45px]">
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="16"
                    height="16"
                    fill="currentColor"
                  >
                    <path d="M5 2H19C19.5523 2 20 2.44772 20 3V22.1433C20 22.4194 19.7761 22.6434 19.5 22.6434C19.4061 22.6434 19.314 22.6168 19.2344 22.5669L12 18.0313L4.76559 22.5669C4.53163 22.7136 4.22306 22.6429 4.07637 22.4089C4.02647 22.3293 4 22.2373 4 22.1433V3C4 2.44772 4.44772 2 5 2ZM18 4H6V19.4324L12 15.6707L18 19.4324V4Z"></path>
                  </svg>
                </span>
                <h2 className="font-aeonik text-[14px] hidden lg:flex">
                  Saved Events
                </h2>
              </div>
              <div className="md:py-[5px] md:px-[20px] py-[4.481px] px-[17.925px] flex items-center md:gap-[7px] bg-[#072D6B] text-white border-[#B6CEFF] border border-solid rounded-[45px]">
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="16"
                    height="16"
                    fill="currentColor"
                  >
                    <path d="M10 18H14V16H10V18ZM3 6V8H21V6H3ZM6 13H18V11H6V13Z"></path>
                  </svg>
                </span>
                <h2 className="font-aeonik hidden lg:flex text-[14px]">
                  Filter Events
                </h2>
              </div>
            </div>

            <div className="flex md:gap-[8px]   w-auto md:mt-12 mt-8 2xl:w-[1384px] xl:w-[1238px] md:py-[10px] py-[8.692px] px-[10.755px] text-[10px] justify-center items-center md:px-[20px] mx-auto border border-solid border-[#F3F3F4] rounded-[12px] 2xl:text-[15px]">
              <div className="md:px-[16px] px-[12.34px] py-[8.066px] md:py-[9px] rounded-[5px] bg-[#F5FAFF]">
                <p className="text-[#437EF7] font-inter">Trending</p>
              </div>
              <div className="md:px-[16px] px-[12.34px] py-[8.066px] md:py-[9px] rounded-[5px]">
                <p className=" font-inter">All</p>
              </div>
              <div className="md:px-[16px] px-[12.34px] py-[8.066px] md:py-[9px] rounded-[5px]">
                <p className=" font-inter">For you</p>
              </div>
              <div className="md:px-[16px] px-[12.34px] py-[8.066px] md:py-[9px] rounded-[5px]">
                <p className=" font-inter">Today</p>
              </div>
              <div className="md:px-[16px] hidden lg:flex px-[14.34px] py-[8.066px] md:py-[9px] rounded-[5px]">
                <p className=" font-inter">This weekend</p>
              </div>
              <div className="md:px-[16px] px-[14.34px] hidden lg:flex py-[8.066px] md:py-[9px] rounded-[5px]">
                <p className=" font-inter">In my area</p>
              </div>
              <div className="md:px-[16px] px-[14.34px] py-[8.066px] md:py-[9px] rounded-[5px]">
                <p className=" font-inter">Parties</p>
              </div>
              <div className="md:px-[16px] px-[14.34px] hidden lg:flex py-[8.066px] md:py-[9px] rounded-[5px]">
                <p className=" font-inter">Virtual</p>
              </div>
              <div className="md:px-[16px] px-[14.34px] hidden lg:flex py-[8.066px] md:py-[9px] rounded-[5px]">
                <p className=" font-inter">Food</p>
              </div>
              <div className="md:px-[16px] px-[14.34px] hidden lg:flex py-[8.066px] md:py-[9px] rounded-[5px]">
                <p className=" font-inter">Owambe</p>
              </div>
              <div className="md:px-[16px] px-[14.34px] hidden lg:flex py-[8.066px] md:py-[9px] rounded-[5px]">
                <p className=" font-inter">Weddings</p>
              </div>
              <div className="md:px-[16px] px-[14.34px] lg:hidden flex py-[8.066px] md:py-[9px] rounded-[5px]">
                <p className=" font-inter">View all</p>
              </div>
              <div className="md:px-[16px] px-[14.34px] hidden lg:flex py-[8.066px] md:py-[9px] rounded-[5px]">
                <p className=" font-inter">Picnics</p>
              </div>
              <div className="md:px-[16px] px-[14.34px] hidden lg:flex py-[8.066px] md:py-[9px] rounded-[5px]">
                <p className=" font-inter">Religious Event</p>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full">
          <SwiperCarousel />
          <MobileSwiper />
        </div>
      </div>
    </>
  );
}
