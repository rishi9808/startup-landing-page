import Button from "@/components/Button";
import startsBg from "@/assets/stars.png"
import GridPattern from "@/components/magicui/grid-pattern";
import { cn } from "@/lib/utils";
import Particles from "@/components/magicui/particles";
export const Hero = () => {
  return (
    <section className="h-[492px] flex items-center" style={{
      backgroundImage: `url(${startsBg.src})`
    }}>
      <div className="container relative">
      <Particles
        className="absolute inset-0"
        quantity={100}
        ease={80}
        refresh
      />
      {/* <GridPattern
        width={90}
        height={90}
        x={-1}
        y={-1}
        strokeDasharray={"4 2"}
        className={cn(
          "[mask-image:radial-gradient(300px_circle_at_center,white)] h-[250px]",
        )}
      /> */}
        <h1 className="text-6xl md:text-8xl font-semibold tracking-tighter
        bg-white text-transparent bg-clip-text text-center
        bg-[radial-gradient(100%_100%_at_top_left,white,white,rgb(7,32,138,.7))]">AstraBiz</h1>
        <p className="text-lg text-white/70 mt-5 text-center">Your company in digital marketplace, with your own website meets whatsapp marketing and seo tools</p>
       
        <div className="flex justify-center mt-5">
        <Button>Contact Us</Button>
        </div>
      </div>
    </section>
  );
};
