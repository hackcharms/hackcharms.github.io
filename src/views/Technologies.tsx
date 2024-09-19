import Button from "@/components/core/button";
import { technologies } from "@/constants";

export default function Technologies() {
  return <div className="grid grid-cols-2">
  {technologies.map((tech) => <div key={tech.id}>
    <Button variant="link" className="text-xl" to={`/technologies/${tech.id}`}>{tech.name}</Button>
    <p>
      {tech.icon}
    </p>
    <div className="flex flex-wrap">
      {tech.projects?.map(project =>
        <Button variant="link" to={`/projects/${project}`} key={project} className="m-1">
          {project}
        </Button>
      )}
    </div>
  </div>)}
</div>;
}
