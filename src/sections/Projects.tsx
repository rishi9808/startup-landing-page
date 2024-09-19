import { projects } from "@/data";
import { FaLocationArrow } from "react-icons/fa";
import { PinContainer } from "@/components/ui/3d-pin";

const Projects = () => {
  return (
    <div className="py-20">
      <h1 className=" p-2 pointer-events-none z-10 whitespace-pre-wrap bg-gradient-to-b from-[#ffd319] via-[#ff2975] to-[#8c1eff] bg-clip-text text-center text-5xl font-bold leading-none tracking-tighter text-transparent">
        Projects
      </h1>
      <p className="font-medium text-balance text-2xl text-center mt-2">
        A small selection of{" "}
        <span className="text-blue-300">recent projects</span>
      </p>
      <div
        className="lg:grid lg:grid-cols-2 flex flex-wrap items-center justify-center
        p-10 gap-x-24 gap-y-8 mt-6"
      >
        {projects.map(
          ({ id, title, des, img, iconLists, link }): JSX.Element => {
            return (
              <div key={id} className="sm:h-[41rem] h-[32rem] lg:min-h-[32.5rem] flex items-center
              justify-center sm:w-[570px] w-[80vw] ">
                <PinContainer title={title} href={link}>
                    <div className="relative flex items-center justify-center sm:w-[570px] w-[80vw]
                    overflow-hidden h-[30vh] sm:h-[40vh] mb-10">
                        <div className="relative w-full h-full overflow-hidden lg:rounded-3xl
                        bg-[#13162d] ">
                            <img src="../assets/product-image.png" alt="" />
                        </div>
                        <img src="https://www.techfunnel.com/wp-content/uploads/2021/10/web-application.png" alt={title} className="z-10 absolute bottom-0"/>
                    </div>
                    <h1 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1">
                        {title}
                    </h1>
                    <p className="lg:text-xl lg:font-normal font font-light
                    text-sm line-clamp-2">
                        {des}
                    </p>
                    <div className="flex items-center justify-between mt-7 mb-3">
                      <div className="flex items-center">
                        {iconLists.map((icon, index) => (
                          <div key={index} className="border border-white/[0.2]
                          rounded-full bg-black lg:w-10 lg:h-10 size-8
                          flex justify-center items-center"
                          style={{
                            transform:`translateX(-${5*index*2})`}}>
                            <img src={icon} alt="ic" className="p-2" />
                          </div>

                        ))}
                      </div>
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
