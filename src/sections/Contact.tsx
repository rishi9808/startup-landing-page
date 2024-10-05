import { TfiEmail } from "react-icons/tfi";

export const Contact = () => {
    return <section className="py-20">
       <h1 className=" p-2 pointer-events-none z-10 whitespace-pre-wrap bg-gradient-to-b from-[#ffd319] via-[#ff2975] to-[#8c1eff] bg-clip-text text-center text-5xl font-bold leading-none tracking-tighter text-transparent">
    Get in touch
        </h1>

        <p className="font-medium text-balance text-sm md:text-xl text-center mt-2 text-gray-50/80">
          We are here to help you
        </p>

        // create a contact form
        <div className="container mt-20">
          <form className="flex flex-col gap-4 max-w-lg mx-auto">
            <input
              type="text"
              placeholder="Name"
              className="p-4 rounded-lg border border-gray-200 focus:outline-none focus:border-gray-300"
            />
            <input
              type="email"
              placeholder="Email"
              className="p-4 rounded-lg border border-gray-200 focus:outline-none focus:border-gray-300"
            />
            <textarea
              placeholder="Message"
              className="p-4 rounded-lg border border-gray-200 focus:outline-none focus:border-gray-300"
            ></textarea>
            <button
              type="submit"
              className="p-4 rounded-lg border border-gray-200 bg-gradient-to-r from-[#ff2975] to-[#8c1eff] text-white font-semibold"
            >
              Send Message
            </button>
          </form>

            <div className="flex items-center justify-center mt-10">
                <div className="flex items-center gap-4">
                <TfiEmail className="size-6" />
                <p className="text-lg font-medium text-gray-50/80">


                    <a href="mailto:rishikeshkaroth@gmail.com">

                    </a>

                </p>
                </div>
            </div>
        </div>
    </section>;
}





