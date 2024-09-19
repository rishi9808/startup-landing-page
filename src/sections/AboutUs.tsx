import { TextGenerateEffect } from "@/components/ui/text-generate"
const AboutUs = () => {
    const words = 
        "We are a team of passionate developers building customized websites for your agency, be it any business having a digital presence is an important aspect"
  return (
    <div className="py-20 mb-10">
      <h1 className=" p-2 pointer-events-none z-10 whitespace-pre-wrap bg-gradient-to-b from-[#ffd319] via-[#ff2975] to-[#8c1eff] bg-clip-text text-center text-5xl font-bold leading-none tracking-tighter text-transparent">
      About Us
      </h1>
      <div className="lg:flex lg:gap-x-56 lg:mt-20 ">
      <TextGenerateEffect duration={2} filter={false} words={words} className="text-center lg:text-start text-8xl mb-10 font-medium"  />
      <img src="https://s3.envato.com/files/449175434/646098351b460b77fcde2cba_withmeta.jpg" alt="image"  className="rounded-3xl"/>
      </div>
    </div>
  )
}

export default AboutUs
