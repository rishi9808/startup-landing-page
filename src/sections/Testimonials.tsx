import avatar1 from "@/assets/avatar-1.png";
import avatar2 from "@/assets/avatar-2.png";
import avatar3 from "@/assets/avatar-3.png";
import avatar4 from "@/assets/avatar-4.png";
import Marquee from "@/components/magicui/marquee";


const testimonials = [
  {
    text: "“This product has completely transformed how I manage my projects and deadlines”",
    name: "Sophia Perez",
    title: "Director @ Quantum",
    avatarImg: avatar1,
  },
  {
    text: "“These AI tools have completely revolutionized our SEO entire strategy overnight”",
    name: "Jamie Lee",
    title: "Founder @ Pulse",
    avatarImg: avatar2,
  },
  {
    text: "“The user interface is so intuitive and easy to use, it has saved us countless hours”",
    name: "Alisa Hester",
    title: "Product @ Innovate",
    avatarImg: avatar3,
  },
  {
    text: "“Our team's productivity has increased significantly since we started using this tool”",
    name: "Alec Whitten",
    title: "CTO @ Tech Solutions",
    avatarImg: avatar4,
  },
];

export const Testimonials = () => {
  return <section className="py-20">
     <h1 className=" p-2 pointer-events-none z-10 whitespace-pre-wrap bg-gradient-to-b from-[#ffd319] via-[#ff2975] to-[#8c1eff] bg-clip-text text-center text-5xl font-bold leading-none tracking-tighter text-transparent">
     Testimonials
      </h1>

      <p className="font-medium text-balance text-sm md:text-xl text-center mt-2 text-gray-50/80">
        What our customers are saying
      </p>

      <div className="flex flex-col items-center justify-center gap-y-10 mt-20 overflow-hidden ">
        <Marquee pauseOnHover className="[--duration:20s]">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center gap-y-3 rounded-lg border border-blue-400 md:shadow-xl  py-8 md:px-4"
            >
              <p className="text-center max-w-[400px]">{testimonial.text}</p>
              <div className="flex items-center gap-x-3">
                <img
                  src={testimonial.avatarImg.src}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full"
                />
                <div>
                  <h3 className="font-semibold">{testimonial.name}</h3>
                  <p className="text-gray-500">{testimonial.title}</p>
                </div>
              </div>
            </div>
          ))}
        </Marquee>
      </div>
  </section>;
};
