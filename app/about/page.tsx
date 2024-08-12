import { newsData } from "@/components/data/items";
import Image from "next/image";
import Marquee from "react-fast-marquee";
import NewsItem from "../dashboard/_components/NewItems";
import VideoPlayer from "../(primary)/_components/VideoPlayer";
import Aboutimage from "/public/assests/Aboutimage.png"
import Missionpics from "/public/assests/Missionpics.png";


function Page() {
  return (
    <div className="w-full mt-8">
    <div className="flex flex-col-reverse lg:flex-row   items-end ">
      <div className=" lg:mx-[4rem] px-4">
        <p className="text-[#898D9C] lg:text-[22px] text-[18px] font-aeonik">
          About Entrypal
        </p>
        <h1 className="text-[#0C2455] lg:text-[70px] text-[25px] lg:tracking-[-1.555px] tracking-[-0.8px] leading-[102.5%] font-semibold">
          We build to <span className="text-[#236DFF]">Reimagine</span> the
          Future of Event Creation and Experiences
        </h1>
      </div>
      <div className="w-[100%]">
        <Image src={Aboutimage} alt="about image" />
      </div>
    </div>
    <div className="lg:bg-[#EEF1FF] mt-[4rem] lg:h-[532px]">
      <div>
        <VideoPlayer />
      </div>
    </div>
    <div className="font-aeonik text-[10.454px] mt-[2rem] lg:mt-[14rem]">
      <Marquee>
        <p className="inline-block mr-8 tracking-[3.84px] leading-normal">
          TRUSTED BY 10,000+ ENTREPRENEURS AND BUSINESSES *
        </p>
        <p className="inline-block mr-8 tracking-[3.84px] leading-normal">
          TRUSTED BY 10,000+ ENTREPRENEURS AND BUSINESSES *
        </p>
        <p className="inline-block mr-8 tracking-[3.84px] leading-normal">
          TRUSTED BY 10,000+ ENTREPRENEURS AND BUSINESSES
        </p>
      </Marquee>
    </div>
    <div className="w-full mt-[5rem]">
      <div className="flex flex-col lg:flex-row w-full justify-between items-center">
        <div>
          <Image src={Missionpics} alt="Mission pics" />
        </div>
        <div className="font-aeonik lg:mr-[4rem] px-6 lg:w-[853px]">
          <p className="lg:text-[22px] text-[18px] text-[#898D9C]">
            Our Mission Is Simple
          </p>
          <h1 className="lg:text-[60px] text-[25px] leading-[102.5%] tracking-[-0.8px] lg:tracking-[-1.2px] font-semibold">
            Providing a growth engine for modern events creation and access in
            Africa
          </h1>
          <div className="lg:text-[20px]  text-[#646A7F]">
            <p className="mt-[1.5rem]">
              Entrypal is more than just a consumer tech startup; we are
              building digital revolution that to make event experiences
              seamless and hassle-free for African creators and their audience.{" "}
            </p>
            <p className="mt-[1.5rem]">
              We are on a mission to transform the event industry by redefining
              how event access and ticketing work. We believe that attending
              events and issuing tickets should be as effortless as a click, not
              a complex maze.{" "}
            </p>
            <p className="mt-[1.5rem]">
              We make it easy for creator, organizers, managers and event
              planners to create event tickets and accept secure payments from
              multiple local and global payment channels, as well as a digital
              event experience app for anyone to discover events and attend,
              virtual, globally, anytime.
            </p>
            <p className="mt-[1.5rem]">
              As content creators and lifestyle lovers ourselves, we’re inspired
              by a vision of millions of exceptional creators across Africa, and
              share in their interest to expand into new heights; and we believe
              through constant iteration of our products; we can help you reach
              your goals.
            </p>
          </div>
        </div>
      </div>
    </div>
    <div className="bg-[#0C2455] lg:h-[529px] h-[1038px] mt-[7rem] relative">
      <div className="text-light px-[4rem] md:px-0 mx-auto flex lg:gap-[218px] lg:flex-row flex-col md:absolute md:right-0 md:left-0 md:top-0 md:bottom-0  md:items-center md:justify-center font-aeonik">
        <div className="lg:w-[433px] mt-[3rem]">
          <h2 className="font-semibold text-[18px] lg:text-[37.652px]">
            Trusted by Event Creators. Loved by thier audience
          </h2>
        </div>
        <div className="overflow-hidden hidden lg:flex">
          <div className="overflow-y-auto overflow-hidden w-[441px] h-[235px]">
            <div className="flex flex-col leading-none">
              <h1 className="text-[200px]  leading-[102.5%] tracking-[-4px] font-bold">
                25+
              </h1>
              <p className="text-[30px] text-[#D3E2FF] leading-[110%] tracking-[-0.6px]  ">
                events per month
              </p>
            </div>
            <div className="flex flex-col leading-none">
              <h1 className="text-[200px]  leading-[102.5%] tracking-[-4px] font-bold">
                25+
              </h1>
              <p className="text-[30px] text-[#D3E2FF] leading-[110%] tracking-[-0.6px]  ">
                events per month
              </p>
            </div>
            <div className="flex flex-col leading-none">
              <h1 className="text-[200px] leading-[102.5%] tracking-[-4px] font-bold">
                25+
              </h1>
              <p className="text-[30px] text-[#D3E2FF] leading-[110%] tracking-[-0.6px]  ">
                events per month
              </p>
            </div>
          </div>
        </div>

        {/* mobile version */}

        <div className="mt-[3rem] lg:hidden block">
          <div className="space-y-[8rem]">
            <div className="flex flex-col leading-none">
              <h1 className=" text-[143px] leading-[102.5%] tracking-[-4px] font-bold">
                25+
              </h1>
              <p className="text-[30px] text-[#D3E2FF] leading-[110%] tracking-[-0.6px]  ">
                events per month
              </p>
            </div>
            <div className="flex flex-col leading-none">
              <h1 className=" text-[143px] leading-[102.5%] tracking-[-4px] font-bold">
                25+
              </h1>
              <p className="text-[30px] text-[#D3E2FF] leading-[110%] tracking-[-0.6px]  ">
                events per month
              </p>
            </div>
            <div className="flex flex-col leading-none">
              <h1 className=" text-[143px] leading-[102.5%] tracking-[-4px] font-bold">
                25+
              </h1>
              <p className="text-[30px] text-[#D3E2FF] leading-[110%] tracking-[-0.6px]  ">
                events per month
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="lg:px-[4rem] px-[2rem] mt-[8rem]">
      <div className="flex xl:flex-row flex-col justify-between">
        <div>
          <div className="flex flex-col ">
            <p className="text-[#898D9C] text-[22px] font-aeonik">Team</p>
            <h1 className="font-aeonik text-[25px] lg:text-[60px] font-semibold">Our Pals</h1>
          </div>
        </div>
        <div className="lg:w-[600px] text-[18px] font-aeonik">
          <p>
            We are a diverse and determined team of innovators, movers and
            shakers, passionate about enabling our users host the best events.
            In our free time, we enjoy things like chess, nigerian jollof, cars,
            traveling, and crypto.
          </p>
          <p className="mt-8">
            Life at Entrypal is fun, exciting, safe and of course, rewarding.
          </p>
        </div>
      </div>

      <div className="lg:mt-[12rem] mt-[6rem]  font-aeonik">
        <div className="flex xl:flex-row justify-center mx-auto flex-col gap-[30px]">
          <div className="bg-[#F7F7F8] xl:h-[588px] lg:w-[477px] mx-auto  flex flex-col -space-y-[4.2rem] border border-solid rounded-[12px]">
            <div className="lg:mt-8 mt-4 px-8">
              <h2 className="lg:text-[30px] text-[21.258px] font-semibold">Vincent Ogbu</h2>
              <p className="lg:text-[24px] text-[17.006px] text-[#0C2455]/60 tracking-[-0.48px] leading-[102.5%]">Product & Operations</p>
            </div>
          </div>
          <div className="bg-[#F7F7F8] xl:h-[588px] lg:w-[477px] mx-auto flex flex-col -space-y-[6rem] border border-solid rounded-[12px]">
            <div className="lg:mt-8 mt-4 px-8">
              <h2 className="lg:text-[30px] text-[21.258px] font-semibold">Chijioke Earnest</h2>
              <p className="lg:text-[24px] text-[17.006px] text-[#0C2455]/60 tracking-[-0.48px] leading-[102.5%]">Design</p>
            </div>
          </div>
          <div className="bg-[#F7F7F8] xl:h-[588px] lg:w-[477px] mx-auto flex flex-col -space-y-[6rem] border border-solid rounded-[12px]">
            <div className="lg:mt-8 mt-4 px-8">
              <h2 className="lg:text-[30px] text-[21.258px] font-semibold">Maryann Abonyi</h2>
              <p className="lg:text-[24px] text-[17.006px] text-[#0C2455]/60 tracking-[-0.48px] leading-[102.5%]">Marketing and Finance</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div>
    </div>
    <div>
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
  </div>
  )
}

export default Page