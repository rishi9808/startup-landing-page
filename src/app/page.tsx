import { Header } from "@/sections/Header";
import { Hero } from "@/sections/Hero";
import Projects from "@/sections/Projects";
export default function Home() {
  return (
    <main className="flex justify-center items-center
    flex-col overflow-hidden">
    <Header />
    <Hero />
    <Projects />
    </main >
  )
}