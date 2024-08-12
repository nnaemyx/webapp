import Image, { StaticImageData } from 'next/image';

const NewsItem = ({ imageSrc, title, description }: { imageSrc: string | StaticImageData; title: string; description: string }) => {
  return (
    <div className=''>
      <Image src={imageSrc} alt="news image" className="rounded-[8px] w-[470px]" />
      <div>
        <div className="flex gap-[19.71px] lg:gap-[24px] items-center mt-[24px]">
          <p className="lg:py-2 lg:px-[10px] px-[8.213px] py-[4px] rounded-[16.426px] lg:rounded-[20px] text-[#C89D1C] text-[8.213px] lg:text-[10px] font-gtwalsheimpro tracking-[0.5px] leading-[129.5%] bg-[#FCF2D3] flex justify-center items-center">
            BUSINESS SPOTLIGHT
          </p>
          <p className="font-gtwalsheimpro tracking-[0.6px] leading-[129.5%] text-[#80B7FE] text-[9.855px] lg:text-[12px]">
            30 MINUTE READ
          </p>
        </div>
        <div className="flex flex-col md:max-w-[470px] mt-[10px] gap-[6.86px] lg:gap-[12px]">
          <h1 className="lg:text-[20px] text-[16px] font-aeonik font-semibold leading-[25.9px]">
            {title}
          </h1>
          <h2 className="font-aeonik lg:text-[16px] text-[14px] text-[#7C7C7C] lg:leading-[25.9px]">
            {description}
          </h2>
        </div>
      </div>
    </div>
  );
};
export default NewsItem