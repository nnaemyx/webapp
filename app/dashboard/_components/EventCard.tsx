"use client"

import Image, { StaticImageData } from 'next/image';
import { useRouter } from 'next/navigation'; // useRouter from next/navigation for App Router
import SaveEvents from './SaveEvents';
import PromotedIcon from '@/components/icons/PromotedIcon';
import TimeIcon from '@/components/icons/TimeIcon';
import FreeIcon from '@/components/icons/FreeIcon';

interface EventCardProps {
  imageSrc: string| StaticImageData;
  eventInfo: string;
  isPromoted: boolean;
  time: string;
  price: string;
  date: number;
  month: string;
  title: string;
  slug: string; // use slug instead of link
}

const EventCard: React.FC<EventCardProps> = ({
  imageSrc,
  eventInfo,
  isPromoted,
  time,
  price,
  date,
  month,
  title,
  slug,
}) => {
  const router = useRouter();

  const handleNavigation = () => {
    router.push(`/ticket/${slug}`);
  };

  return (
    <div
      className="border border-solid border-[#E2E6EC] rounded-[8px] cursor-pointer"
      onClick={handleNavigation}
    >
      <div className="flex flex-col gap-[19px]">
        <div className="relative">
          <Image src={imageSrc} alt="popular tickets" />
          <SaveEvents />
        </div>
        <div className="px-[20px]">
          <p className="text-[12px] font-aeonik">{eventInfo}</p>
          <div className="flex gap-[6px]">
            {isPromoted && (
              <button className="flex items-center gap-[6px] mt-2 px-[10px] py-[6px] rounded-[4px] bg-[#EBEBEB]">
                <span>
                  <PromotedIcon/>
                </span>
                <p className="font-inter lg:text-[14px] text-[10px]">Promoted</p>
              </button>
            )}
            <button className="flex items-center gap-[6px] mt-2 px-[10px] py-[6px] rounded-[4px] bg-[#EBEBEB]">
              <span>
                <TimeIcon/>
              </span>
              <p className="font-inter lg:text-[14px] text-[10px]">{time}</p>
            </button>
            <button className="flex items-center text-light gap-[6px] mt-2 px-[10px] py-[6px] rounded-[4px] bg-[#1E9E1C]">
              <span>
                <FreeIcon/>
              </span>
              <p className="font-inter lg:text-[14px] text-[10px]">{price}</p>
            </button>
          </div>
        </div>
        <hr className="w-full" />
        <div className="flex items-center px-[20px] gap-[14px]">
          <div className="py-[6px] px-[10px] rounded-[2px] flex flex-col items-center bg-[#EAEBEF]">
            <p className="text-[#236DFF] text-[14px] font-bold">{month}</p>
            <p className="text-[28px] font-bold">{date}</p>
          </div>
          <div>
            <h1 className="font-inter text-[18px]">{title}</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
