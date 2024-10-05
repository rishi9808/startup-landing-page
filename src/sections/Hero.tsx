"use client";
import Button from "@/components/Button";

// handle contact us button redirect to whatsapp
const handleContactUs = () => {
  window.open("https://wa.me/917025761022", "_blank");
};

export const Hero = () => {
  return (
    <section className=" flex items-center w-full" id="hero">
      <div className="bg-[url('/images/art-top-cropp.jpg')] bg-cover py-10 w-full h-[35rem] overflow-hidden">
        <div className="container relative ">
          <h3 className="text-5xl font-bold text-center p-10 drop-shadow-xl">
            AstraBiz
          </h3>
          <h1
            className="text-5xl md:text-8xl font-semibold tracking-tighter
        bg-white text-transparent bg-clip-text text-center
        bg-[radial-gradient(100%_100%_at_top_left,white,white,rgb(7,32,138,.7))]"
          >
            WE BUILD DIGITAL EXPERIENCES
          </h1>
          <div className="flex flex-col items-center justify-center mt-8 md:mt-10">
            <Button
            onClick={handleContactUs}
            >Contact Us</Button>

            <div className="md:flex mt-3 gap-x-20  lg:mt-10 text-center font-bold text-lg ">
              <p >Websites</p>
              <p>Branding</p>
              <p>Digital Marketing</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
