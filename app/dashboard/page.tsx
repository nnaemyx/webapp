"use client"

import Image from "next/image";
import Background from "/public/assests/Background Image.png";
import SearchIcon from "@/components/icons/SearchIcon";
import SaveEventsIcon from "@/components/icons/SaveEventsIcon";
import FilterIcon from "@/components/icons/FilterIcon";
import Block from "/public/assests/image 2.png";
import EventCard from "./_components/EventCard";
import {
  categories,
  category,
  eventTemplate,
  partiesTemplate,
  slug,
  slugs,
} from "@/components/data/items";
import { useEffect } from "react";
import useAuthStore from "@/store/formStore";
import { toast } from "@/components/ui/use-toast";
import { useRouter } from "next/navigation";

function Page() {
  const { isLoggedIn, initialize } = useAuthStore();
  const router = useRouter();

  useEffect(() => {
    initialize();
  }, [initialize]);
  useEffect(() => {
    if (!isLoggedIn) {
      toast({
        description: "User created successfully, check your mail for OTP.",
      });
      router.push("/authentication/login");
    } else {
      router.push("/dashboard")
    }
  }, [isLoggedIn]);
  return (
    <div className="mt-[99px]">
      <div className="relative">
        <div className="relative">
          <Image src={Background} alt="idea4" />
        </div>
        <div className="lg:top-[20rem] top-[10rem] left-0 right-0 absolute bottom-1">
          <div className="px-[11px]  xl:px-[86px] right-0 left-0">
            <div className="2xl:max-w-[1457px] xl:max-w-[1257px] w-auto hover:shadow-md flex justify-center flex-col rounded-[8px]  py-[64.53px] text-center bg-light">
              <div className="px-[56.46px]">
                <h1 className="font-aeonik font-semibold text-[25px] lg:text-[37.642px] md:text-[42px]">
                  Where do you wanna go to today?
                </h1>
              </div>

              <div className="flex justify-center gap-2 mt-12">
                <div>
                  <div className="relative w-[214px] md:w-[600px] md:px-[42px] py-[8px] border-[#B6CEFF] border border-solid rounded-[45px]">
                    <span className="absolute left-2 md:left-8">
                      <SearchIcon />
                    </span>
                    <input
                      type="text"
                      placeholder="Discover Events"
                      className="focus:outline-none md:placeholder:text-[18px] placeholder:text-[16px] placeholder:text-black w-[124px] md:w-[450px]"
                    />
                  </div>
                </div>
                <div className="md:py-[5px] py-[4.481px] px-[17.925px] md:px-[24px] flex items-center md:gap-[7px] bg-[#EFF4FF] border-[#B6CEFF] border border-solid rounded-[45px]">
                  <SaveEventsIcon />
                  <h2 className="font-aeonik text-[14px] hidden lg:flex">
                    Saved Events
                  </h2>
                </div>
                <div className="md:py-[5px] md:px-[20px] py-[4.481px] px-[17.925px] flex items-center md:gap-[7px] bg-[#072D6B] text-white border-[#B6CEFF] border border-solid rounded-[45px]">
                  <span>
                    <FilterIcon />
                  </span>
                  <h2 className="font-aeonik hidden lg:flex text-[14px]">
                    Filter Events
                  </h2>
                </div>
              </div>

              <div className="flex md:gap-[8px] w-full md:mt-12 mt-8 2xl:max-w-[1384px] xl:max-w-[1238px] md:py-[10px] py-[8.692px] text-[10px] font-medium justify-center items-center mx-auto border border-solid border-[#F3F3F4] rounded-[12px] 2xl:text-[15px]">
                {category.map((category, index) => (
                  <div
                    key={index}
                    className={`md:px-[16px] px-[14.34px] py-[8.066px] md:py-[9px] rounded-[5px] ${
                      category.bgColor
                    } ${category.textColor} ${
                      category.hidden &&
                      (category.lgOnly ? "hidden lg:flex" : "hidden")
                    } ${category.lgHidden ? "lg:hidden flex" : ""}`}
                  >
                    <p className="font-inter">{category.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-[20rem] hidden xl:block mx-[4rem]">
        <div>
          <div className="flex justify-between">
            <h1 className="text-[28px] font-gtwalsheimpro">
              Check out trending categories
            </h1>
            <p className="text-[18px] underline font-gtwalsheimpro">
              Browse all Categories
            </p>
          </div>
          <div className="mt-8 grid grid-cols-5 gap-[29px]">
            {categories.map((category, index) => (
              <div className="" key={index}>
                <div
                  className="w-[275px] h-[155px] p-[25px] bg-[#F7F7FA] border border-solid border-[#E6E8EC]"
                  key={category}
                >
                  <div className="flex flex-col mx-auto items-center justify-center">
                    <Image src={Block} alt="block" />
                    <p className="text-[22px] mt-2 font-gtwalsheimpro">
                      {category}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="lg:mx-[4rem] mx-[1rem] mt-[28rem] lg:mt-[8rem]">
        <div className="flex justify-between">
          <h1 className="lg:text-[28px] text-[25px] font-gtwalsheimpro">
            Popular Events
          </h1>
          <p className="lg:text-[18px] underline font-gtwalsheimpro">
            View all
          </p>
        </div>
        <div className="flex lg:flex-row flex-col gap-[20px] mt-[49px]">
          {slugs.map((slug, index) => (
            <EventCard key={index} {...eventTemplate} slug={slug} />
          ))}
        </div>
      </div>
      <div className="lg:mx-[4rem] mx-[1rem] mt-[28rem] lg:mt-[8rem]">
        <div className="flex justify-between">
          <h1 className="lg:text-[28px] text-[25px] font-gtwalsheimpro">
            Parties and Concerts
          </h1>
          <p className="lg:text-[18px] underline font-gtwalsheimpro">
            View all
          </p>
        </div>
        <div className="flex lg:flex-row flex-col gap-[20px] mt-[49px]">
          {slug.map((slug, index) => (
            <EventCard key={index} {...partiesTemplate} slug={slug} />
          ))}
        </div>
      </div>
    </div>
  );
}
export default Page;
