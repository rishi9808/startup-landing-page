import { projects } from "@/data";
import { FaLocationArrow } from "react-icons/fa";
import { PinContainer } from "@/components/ui/3d-pin";

const Projects = () => {
  return (
    <div className="container mt-40" id="projects">
      <h1 className=" p-2 pointer-events-none z-10 whitespace-pre-wrap bg-gradient-to-b from-[#ffd319] via-[#ff2975] to-[#8c1eff] bg-clip-text text-center text-3xl lg:text-5xl font-bold leading-none text-transparent">
        Projects
      </h1>
      <p className="font-medium text-balance  text-md lg:text-2xl text-center mt-2">
        A small selection of{" "}
        <span className="text-blue-300">recent projects</span>
      </p>
      <div
        className="lg:grid lg:grid-cols-2 flex flex-wrap items-center justify-center
        gap-x-24 gap-y-8 mt-6"
      >
        {projects.map(
          ({ id, title, des, img, link }): JSX.Element => {
            return (
              <div key={id} className="sm:h-[41rem] h-[30rem] lg:min-h-[32.5rem] flex items-center
              justify-center sm:w-[570px] w-[60vw] ">
                <PinContainer title={title} href={link} >
                    <div className="relative flex items-center justify-center sm:w-[570px] w-[80vw]
                    overflow-hidden h-[30vh]  sm:h-[40vh] mb-10">
                        <img src={img} alt={title} className="bottom-0 object-cover "/>
                    </div>
                    <h1 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1">
                        {title}
                    </h1>
                    <p className="lg:text-xl lg:font-normal font font-light
                    text-sm line-clamp-2">
                        {des}
                    </p>
                    <div className="flex items-center justify-between mt-7 mb-3">
                      <div className="flex justify-center items-center">
                        <p className="flex lg:text-xl md:text-xs text-sm text-purple-200">Check Live Site</p>
                        <FaLocationArrow className="ms-2"
                        color="#CBACF9" />
                      </div>
                    </div>
                </PinContainer>
              </div>
            );
          }
        )}
      </div>
    </div>
  );
};

export default Projects; 
