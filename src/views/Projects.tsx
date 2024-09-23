import Button from "@/components/core/button";
import { all } from "@/constants/projects";

export default function Projects() {
  return <div className="grid grid-cols-2 gap-6">
    {all.map((project) => <div key={project.id} className="text-center">
      <img src={project.image} alt={project.name} className="mx-auto w-96"/>
      <Button variant="link" className="text-xl" to={`/projects/${project.id}`}>{project.name}</Button>
      <p>
        {project.description}
      </p>
      <div className="flex flex-wrap">
        {project?.technologies().map(tech =>
          <Button variant="link" to={`/technologies/${tech.id}`} key={tech.id} className="m-1">
            {tech.name}
          </Button>
        )}
      </div>
    </div>)}
  </div>;
}
