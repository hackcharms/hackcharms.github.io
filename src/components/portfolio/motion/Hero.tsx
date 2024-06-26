import { motion } from "framer-motion";
import ComputerCanvas from "./canvas/Computer";

function Hero() {
  return (
    <div className="relative mx-auto h-screen w-full">
      <div className="absolute inset-0 top-10 max-w-7xl px-7">
        <div className="item-start flex">
          <div className="flex flex-col items-center justify-center">
            <div className="size-5 rounded-full border-[0.25rem] border-motion-primary" />
            <div className="h-64 w-1 bg-gradient-to-b from-motion-primary via-transparent to-motion-primary" />
            <div className="size-5 rounded-full border-[0.25rem] border-motion-primary" />
          </div>
          <div className="px-4">
            <h1 className="text-[5rem] text-motion-secondary-300">
              Hi, Im <span className="text-motion-primary">Ansari Zubair</span>
            </h1>
            <p className="text-balance text-xl">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
              quas laboriosam cupiditate corrupti.
            </p>
          </div>
        </div>
      </div>
      <ComputerCanvas />
      <div className="bottom-30 xs:bottom-10 absolute z-10 flex w-full items-center justify-center">
        <a href="#about">
          <div className="flex h-16 w-8 justify-center rounded-full border-2 border-motion-primary p-1 ">
            <motion.div
              animate={{
                y: [0, 60, -30],
              }}
              transition={{
                repeat: Infinity,
                repeatType: "loop",
                duration: 1.5,
              }}
              className="size-3 rounded-full bg-motion-secondary-500 transition-transform "
            />
          </div>
        </a>
      </div>
    </div>
  );
}

export default Hero;
