import Button from "@/components/core/button";
import { all } from "@/constants/projects";

export default function Projects() {
  return <div className="grid grid-cols-2">
    {all.map((project) => <div key={project.id}>
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
