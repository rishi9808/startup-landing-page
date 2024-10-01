import { TextGenerateEffect } from "@/components/ui/text-generate";
import { AiOutlineCalendar } from "react-icons/ai";
import { TfiRulerPencil } from "react-icons/tfi";
import { BiUser } from "react-icons/bi";
const AboutUs = () => {
  const words =
    "We are a team of passionate developers building customized websites for your agency, be it any business having a digital presence is an important aspect";
  return (
    <div className="mb-10 mt-32 container" id="about">
      <h1 className=" p-2 pointer-events-none z-10 whitespace-pre-wrap bg-gradient-to-b from-[#ffd319] via-[#ff2975] to-[#8c1eff] bg-clip-text text-center text-2xl lg:text-5xl font-semibold leading-none  text-transparent">
        The last digital agency you&apos;ll ever need
      </h1>
      <div className="  lg:mt-10 lg:mx-32">
        <TextGenerateEffect
          duration={2}
          filter={false}
          words={words}
          className="text-center lg:text-start text-2xl mb-10 font-normal text-muted-foreground"
        />
      </div>
      <div className="mt-16 space-y-3 md:flex  items-center justify-center gap-20 font-semibold">
        <div className="flex gap-x-5 md:flex-col">
          <AiOutlineCalendar size={35} className=" text-green-800 mb-2" />
          <p>Unique Technologies and Modern Approach</p>
        </div>
        <div className="flex gap-x-5 md:flex-col">
          <TfiRulerPencil size={35}  className=" text-green-800 mb-2" />
          <p className="my-4 lg:my-0 ">
            Customer Satisfaction is our top priority
          </p>
        </div>
        <div className="flex gap-x-5 md:flex-col">
          <BiUser size={35}  className=" text-green-800 mb-2" /><p>We provide the best services in the market</p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
