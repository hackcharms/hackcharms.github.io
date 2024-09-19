import { technologies } from "@/constants";
import Circle from "./Circle";
import Button from "../core/button";

export default function Technologies() {
  return (
    <>
      <h1 className="text-4xl font-bold">
        Technologies
      </h1>
      <h2 className="mb-8 text-2xl">
        These are the Technologies I am expert on.
      </h2>
      <div className="flex flex-wrap justify-center gap-4 ">
        {technologies.map(({ name, icon }) => (
          <div
            key={name}
            className="group/tech relative flex size-40 flex-col flex-wrap items-center justify-center px-4 text-center"
          >
            <Circle
              className=" absolute rotate-[55deg] text-secondary/50 drop-shadow-secondary transition-all duration-500 group-hover/tech:rotate-[40deg]"
              radius={80}
              gap={10}
              strokeWidth={1}
            />
            <Circle
              radius={80 - 8}
              strokeWidth={1}
              gap={10}
              className="absolute rotate-[40deg] text-secondary/60 transition-all duration-500 group-hover/tech:rotate-[55deg]"
            />
            <div className="absolute flex flex-col items-center  justify-center">
              <img
                src={icon}
                alt={name}
                className="size-20 group-hover/tech:drop-shadow-secondary"
              />
              <h2>{name}</h2>
            </div>
          </div>
        ))}
      </div>
        <p className="mt-4 text-center text-lg">
          not limited to it, I have worked on many more technologies
        <Button variant="link" to='/technologies'>
          see all
        </Button>
        </p>
    </>
  );
}
