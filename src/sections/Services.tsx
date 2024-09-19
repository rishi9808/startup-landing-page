import { BorderBeam } from "@/components/magicui/border-beam";

const Services = () => {
  return (
    <div className="gap-y-20 py-20">
      <h1 className=" p-2 pointer-events-none z-10 whitespace-pre-wrap bg-gradient-to-b from-[#ffd319] via-[#ff2975] to-[#8c1eff] bg-clip-text text-center text-5xl font-bold leading-none tracking-tighter text-transparent">
        We provide..
      </h1>
      <div className="md:grid grid-cols-2 gap-20 mt-20">
        <div className="relative flex  w-full flex-col items-center justify-center overflow-hidden rounded-lg border px-9 py-5 md:shadow-xl my-5">
          <span className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-blue-200 bg-clip-text text-center text-2xl font-semibold leading-none text-transparent    ">
            Web development
          </span>
          <BorderBeam size={100} duration={12} delay={9} />
        </div>

        <div className="relative flex  w-full flex-col items-center justify-center overflow-hidden rounded-lg border px-9 py-5 md:shadow-xl my-5">
          <span className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-blue-200 bg-clip-text text-center text-2xl font-semibold leading-none text-transparent    ">
            Digital Marketing
          </span>
          <BorderBeam size={100} duration={12} delay={9} />
        </div>

        <div className="relative flex  w-full flex-col items-center justify-center overflow-hidden rounded-lg border px-9 py-5 md:shadow-xl my-5">
          <span className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-blue-200 bg-clip-text text-center text-2xl font-semibold leading-none text-transparent    ">
            SEO Optimization
          </span>
          <BorderBeam size={100} duration={12} delay={9} />
        </div>

        <div className="relative flex  w-full flex-col items-center justify-center overflow-hidden rounded-lg border px-9 py-5 md:shadow-xl my-5">
          <span className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-blue-200 bg-clip-text text-center text-2xl font-semibold leading-none text-transparent    ">
            Whatsapp Marketing
          </span>
          <BorderBeam size={100} duration={12} delay={9} />
        </div>

      </div>
    </div>
  );
};

export default Services;
