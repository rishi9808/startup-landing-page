import { BorderBeam } from "@/components/magicui/border-beam";
import wtspImg from "@/assets/whatsapp_3938058.png";
import digitalMarketingIcon from "@/assets/social-media.png";
import webDevIcon from "@/assets/web-development.png";
import seoIcon from "@/assets/search-engine-optimization.png";
import { TextGenerateEffect } from "@/components/ui/text-generate";

const words =
  "Our team of experts specialize in web development, SEO optimization, digital marketing, and whatsapp marketing.";

const Services = () => {
  return (
    <div className="container mt-40">
      <h1 className=" p-2 pointer-events-none z-10 whitespace-pre-wrap bg-gradient-to-b from-[#ffd319] via-[#ff2975] to-[#8c1eff] bg-clip-text text-center text-2xl lg:text-5xl font-bold leading-none text-transparent">
        Our Expertise
      </h1>
      <div className="  lg:mt-10 lg:mx-32">
        <TextGenerateEffect
          duration={2}
          filter={false}
          words={words}
          className="text-center lg:text-start text-2xl mb-10 font-normal text-muted-foreground"
        />
      </div>
      <div className="md:grid grid-cols-3 gap-20 mt-20">
        <div className="relative flex flex-col  w-full  items-center justify-center overflow-hidden rounded-lg  px-9 py-5 md:shadow-xl my-5">
          <img
            src="./images/e1.jpg"
            className="rounded-tl-3xl rounded-br-3xl mb-3 h-40 object-cover"
          />
          <div className="flex">
            <img src={webDevIcon.src} alt="web" className="size-8 mr-4" />
            <span className="text-xl font-semibold">Web development</span>
            {/* <BorderBeam size={80} duration={10} delay={9} /> */}
          </div>
        </div>
      

        <div className="relative flex flex-col  w-full  items-center justify-center overflow-hidden rounded-lg  px-9 py-5 md:shadow-xl my-5">
          <img
            src="./images/e2.jpg"
            className="rounded-tl-3xl rounded-br-3xl mb-3  h-40 object-cover"
          />
          <div className="flex">
            <img src={seoIcon.src} alt="seo" className="size-8 mr-4" />
            <span className="text-xl font-semibold">SEO optimization</span>
            {/* <BorderBeam size={80} duration={10} delay={9} /> */}
          </div>
        </div>

        <div className="relative flex flex-col  w-full  items-center justify-center overflow-hidden rounded-lg  px-9 py-5 md:shadow-xl my-5">
          <img
            src="./images/e3.jpg"
            className="rounded-tl-3xl rounded-br-3xl mb-3 h-40 object-cover"
          />
          <div className="flex">
            <img
              src={digitalMarketingIcon.src}
              alt="digital"
              className="size-8 mr-4"
            />
            <span className="text-xl font-semibold">Digital marketing</span>
            {/* <BorderBeam size={80} duration={10} delay={9} /> */}
          </div>
        </div>

      </div>
      </div>
  );
};

export default Services;
