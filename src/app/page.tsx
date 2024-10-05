import AboutUs from "@/sections/AboutUs";
import { Footer } from "@/sections/Footer";
import { Header } from "@/sections/Header";
import { Hero } from "@/sections/Hero";
import Projects from "@/sections/Projects";
import Services from "@/sections/Services";
import { Testimonials } from "@/sections/Testimonials";
export default function Home() {
  return (
    <main
      className=" overflow-hidden"
    >
      <Hero />
      <AboutUs />
      <Services />
      <Projects />
      {/* <Testimonials /> */}
      <Footer />
    </main>
  );
}
