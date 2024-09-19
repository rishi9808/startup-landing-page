import { BorderBeam } from "@/components/magicui/border-beam";
import wtspImg from "@/assets/whatsapp_3938058.png";
import digitalMarketingIcon from "@/assets/social-media.png";
import webDevIcon from "@/assets/web-development.png";
import seoIcon from "@/assets/search-engine-optimization.png";

const Services = () => {
  return (
    <div className="gap-y-20 py-20">
      <h1 className=" p-2 pointer-events-none z-10 whitespace-pre-wrap bg-gradient-to-b from-[#ffd319] via-[#ff2975] to-[#8c1eff] bg-clip-text text-center text-5xl font-bold leading-none tracking-tighter text-transparent">
        We provide..
      </h1>
      <div className="md:grid grid-cols-2 gap-20 mt-20">
        <div className="relative flex  w-full  items-center justify-center overflow-hidden rounded-lg border px-9 py-5 md:shadow-xl my-5">
            <img src={webDevIcon.src} alt="web" className="size-8 mr-4" />
          <span className="text-xl font-semibold">Web development</span>
          <BorderBeam size={80} duration={10} delay={9} />
        </div>

        <div className="relative flex  w-full  items-center justify-center overflow-hidden rounded-lg border px-9 py-5 md:shadow-xl my-5">
            <img src={seoIcon.src} alt="seo" className="size-8 mr-4" />
          <span className="text-xl font-semibold">SEO optimization</span>
          <BorderBeam size={80} duration={10} delay={9} />
        </div>

        <div className="relative flex  w-full  items-center justify-center overflow-hidden rounded-lg border px-9 py-5 md:shadow-xl my-5">
            <img src={digitalMarketingIcon.src} alt="digital" className="size-8 mr-4" />
          <span className="text-xl font-semibold">Digital marketing</span>
          <BorderBeam size={80} duration={10} delay={9} />
        </div>

        <div className="relative flex  w-full  items-center justify-center overflow-hidden rounded-lg border px-9 py-5 md:shadow-xl my-5 ">
          <img src={wtspImg.src} alt="wtsp" className="size-8 mr-4" />
          <span className="text-xl font-semibold">Whatsapp marketing</span>
          <BorderBeam size={80} duration={10} delay={9} />
        </div>
      </div>
    </div>
  );
};

export default Services;
