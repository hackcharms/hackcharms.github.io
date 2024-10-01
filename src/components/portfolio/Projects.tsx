import { all as projects } from "@/constants/projects";
import Button from "../core/button";

export default function Projects() {
  return (
    <div className="relative">
      <h1 className="px-4 text-4xl font-bold">Projects</h1>
      <h2 className="my-2 pl-4 text-lg">
        Apart from working for Companies a Have worked on these projects
      </h2>
      <ProjectCard />
    </div>
  );
}

const startPoint = (Math.random() * (projects.length - 4) | 0);
function ProjectCard() {
  return (
    <>
      {projects.slice(startPoint, startPoint + 4).map((project, index) => (
        <div
          key={index}
          className={`mt-10 flex flex-wrap py-10 ${index % 2 == 0 ? "flex-row-reverse" : ""
            }`}
        >
          <div className="w-full self-center md:w-1/2">
            <div className="flex flex-col items-center justify-center">
              <img
                src={project.image}
                alt={`${project.name} image`}
                className="size-52"
              />

              <a
                href={project.demo || project.git}
                className="text-2xl font-semibold text-secondary underline"
                target="_blank"
              >
                {project.name}
              </a>
              <p className="text-balance text-center text-lg">
                A lightweight and fully customizable toast notification package
                that seamlessly blends into your design.
              </p>
            </div>
          </div>
          <div className="w-full self-center md:w-1/2">
            <p dangerouslySetInnerHTML={{ __html: Array.isArray(project.description) ? project.description?.join('<br>') : project.description }} />
            <div className="my-4 text-center">
              {project.tags.map((tag) => (
                <span
                  key={tag.name}
                  className="mx-1 rounded-lg border border-light/40 px-2 py-1"
                >
                  {tag.name}
                </span>
              ))}
            </div>
          </div>
        </div>
      ))}
      <p className="text-center">
        not limited to it, I have a broad portfolio of projects. <Button variant="link" to='/projects'>see all</Button>
      </p>
    </>
  );
}
