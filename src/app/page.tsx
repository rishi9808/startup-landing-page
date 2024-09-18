import { Header } from "@/sections/Header";
import { Hero } from "@/sections/Hero";
import Projects from "@/sections/Projects";
export default function Home() {
  return (
    <main
      className="flex justify-center items-center
    flex-col overflow-hidden sm:px-10 px-5"
    >
      <Header />
      <Hero />
      <Projects />
    </main>
  );
}
