import React from "react";

import Link from "next/link";
import SwiperCarousel from "./_components/SwiperCarousel";
import MobileSwiper from "./_components/MobileSwiper";
import FilterIcon from "@/components/icons/FilterIcon";
import Image from "next/image";
import Idea1 from "/public/assests/Ideas 1.png";
import Idea2 from "/public/assests/Ideas 2.png";
import Idea3 from "/public/assests/Ideas 3.png";
import Idea4 from "/public/assests/Ideas 4.png";
import Section2 from "/public/assests/vid.png";
import Section3 from "/public/assests/Frame 238476-1.png";
import Section4 from "/public/assests/Frame 238476.png";
import Section5 from "/public/assests/Frame 238497.png";
import Background from "/public/assests/Background Image.png";
import SaveEventsIcon from "@/components/icons/SaveEventsIcon";
import Block from "/public/assests/image 2.png";
import {
  categories,
  category,
  eventTemplate,
  newsData,
  partiesTemplate,
  slug,
  slugs,
} from "@/components/data/items";
import EventCard from "../dashboard/_components/EventCard";
import SearchIcon from "@/components/icons/SearchIcon";
import NewsItem from "../dashboard/_components/NewItems";

export default function Home() {
  return (
    <>
      <div className="w-full mt-[121px] relative">
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
              href="/authentication/signup"
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
        <div className="px-[11px]  xl:px-[86px] right-0 left-0">
          <div className="2xl:max-w-[1457px] xl:max-w-[1257px] w-auto hover:shadow-md flex justify-center flex-col rounded-[8px]  py-[64.53px]  text-center bg-light">
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
                <span>
                  <SaveEventsIcon />
                </span>
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
        <div className="w-full">
          <SwiperCarousel />
          <MobileSwiper />
        </div>
      </div>
     
      <div className="py-12">
        <div className="relative">
          <div className="relative ">
            <Image src={Background} alt="idea4" />
          </div>
        </div>
        <div className="my-12 hidden xl:block mx-[4rem]">
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
                    className="max-w-[275px] h-[155px] p-[25px] bg-[#F7F7FA] border border-solid border-[#E6E8EC]"
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
        <div className="lg:mx-[4rem] mx-[1rem] mt-[89px] lg:mt-[100px]">
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
      <div className="bg-[#001941] text-center mt-[9px]">
        <div className="lg:w-[644px] lg:mx-auto mx-[2rem] space-[12px] flex  flex-col items-center justify-center">
          <h1 className="font-inter font-medium text-[26px] lg:text-[42px] mt-[4rem]  lg:w-[560px] text-light lg:leading-[50px] lg:tracking-[-1px]">
            Entrypal is Event ticketing built for everyone
          </h1>
          <p className="text-[#C6DDF7] leading-[140%] font-inter text-[12px] lg:text-[17px] font-medium">
            Empower your event attendees to onboard, discover and buy your
            tickets; Set up their profiles or Directory, follow up your events
            without hassle.
          </p>
        </div>
        <div className="rounded-[29px] mt-[42px] hidden lg:mx-auto mx-[2rem] lg:w-[441px] lg:flex gap-[24px] justify-center h-[42px] bg-[#031F4C]">
          <button className="text-light bg-[#031F4C] rounded-[29px] py-[5px] px-[20px]">
            For Event Creators
          </button>
          <button className="text-[#7695C6]">For Event Attendees</button>
        </div>
        <div className="w-full flex flex-col px-6 gap-[20px] justify-center items-center mt-[42px]">
          <div className="flex lg:flex-row flex-col gap-[20px]">
            <Image
              src={Idea1}
              alt="idea1"
              className="lg:w-full lg:max-w-[822px] lg:h-[416px]"
            />
            <Image
              src={Idea2}
              alt="idea2"
              className="lg:w-[446px] lg:h-[416px]"
            />
          </div>
          <div className="flex  lg:flex-row flex-col gap-[20px]">
            <Image
              src={Idea4}
              alt="idea4"
              className="lg:w-[446px] lg:h-[416px]"
            />
            <Image
              src={Idea3}
              alt="idea3"
              className="lg:w-full lg:max-w-[822px] lg:h-[416px]"
            />
          </div>
        </div>
        <div className="lg:bg-pattern lg:h-[1027.219px] lg:w-[1214px] mt-10 lg:-mt-[840px] mx-auto  "></div>
        <div className="lg:px-[4rem] mx-[2rem] text-light flex  lg:flex-row flex-col gap-6 lg:gap-[266px]">
          <h1 className="lg:text-[42px] text-[25px] font-inter text-left">
            Ticketing should be global, we make that reach possible
          </h1>
          <div className="flex flex-col gap-[25px] items-start ">
            <p className="font-aeonik text-left">
              We are a diverse and determined team of innovators, movers and
              shakers, passionate about enabling our users host the best events.
            </p>
            <button className="bg-secondary p-[10px] font-aeonik w-[168px] rounded-[8px] text-light text-[16px]">
              About us
            </button>
          </div>
        </div>
        <div className="mx-auto lg:flex flex-col hidden items-center justify-center px-[4rem] mt-[45px]">
          <Image src={Section2} alt="idea4" className="mb-24" />
        </div>
        <div className="mx-auto flex flex-col lg:hidden items-center justify-center px-[2rem]">
          <Image src={Section4} alt="idea4" className="mb-24" />
          <Image src={Section5} alt="idea4" className="mb-24" />
          <Image src={Section3} alt="idea4" className="mb-24" />
        </div>
      </div>
      <div className="mt-[6rem] lg:px-[4rem] px-[2rem]">
        <div className="flex flex-col gap-6 lg:gap-[84px]">
          <div>
            <p className="text-[22px] hidden lg:flex text-[#B6CEFF] font-aeonik">
              News
            </p>
            <h1 className="lg:text-[50px] text-[24px] font-semibold leading-[102.5%] tracking-[-1px]">
              Entrypal in the News
            </h1>
          </div>
          <div className="flex lg:flex-row flex-col justify-center lg:justify-start gap-[41px]">
            {newsData.map((news, index) => (
              <NewsItem
                key={index}
                imageSrc={news.imageSrc}
                title={news.title}
                description={news.description}
              />
            ))}
          </div>
        </div>
        <div className="mt-[88px]">
          <p className="font-aeonik text-[18px] lg:text-[24px] leading-[129.5%] tracking-[-0.48px]">
            For media inquiries, please reach out{" "}
            <span className="text-[#4885FF] underline">here</span>
          </p>
        </div>
      </div>
    </>
  );
}
