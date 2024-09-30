import { TextGenerateEffect } from "@/components/ui/text-generate";
const AboutUs = () => {
  const words =
    "We are a team of passionate developers building customized websites for your agency, be it any business having a digital presence is an important aspect";
  return (
    <div className="my-10 container">
      <h1 className=" p-2 pointer-events-none z-10 whitespace-pre-wrap bg-gradient-to-b from-[#ffd319] via-[#ff2975] to-[#8c1eff] bg-clip-text text-center text-2xl font-semibold leading-none  text-transparent">
        The last digital agency you'll ever need
      </h1>
      <div className="  lg:mt-10 lg:mx-32">
        <TextGenerateEffect
          duration={2}
          filter={false}
          words={words}
          className="text-center lg:text-start text-2xl mb-10 font-normal text-muted-foreground"
        />
        </div>
        <div className="mt-16 md:flex items-center justify-center gap-20 font-semibold">
          <p>Unique Technologies and Modern Approach</p>
          <p className="my-4 lg:mt-0 ">Customer Satisfaction is our top priority</p>
          <p>We provide the best services in the market</p>
        </div>
    </div>
  );
};

export default AboutUs;
