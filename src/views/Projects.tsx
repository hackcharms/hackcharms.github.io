import Button from "@/components/core/button";
import { TechnologyType } from "@/constants";
import { all } from "@/constants/projects";

export default function Projects() {
  return <div className="grid grid-cols-2 gap-6">
    {all.map((project) => <div key={project.id} className="text-center">
      <img src={project.image} alt={project.name} className="mx-auto mb-4 max-h-60 max-w-full rounded-lg" />
      <Button variant="link" className="text-xl" to={`/projects/${project.id}`}>{project.name}</Button>
      <p className="my-4" dangerouslySetInnerHTML={{__html:project.title}}>
      </p>
      <div className="flex flex-wrap justify-center">
        {project?.technologies().map(tech =><TechnologyLink key={tech.id} tech={tech} />
        )}
      </div>
    </div>)}
  </div>;
}

function TechnologyLink({ tech }: { tech: TechnologyType }) {
    return (
        <div className="m-1 flex items-center justify-center gap-1 p-2">
            <img src={tech.icon} alt="" className="size-4" />
            <span>
                {tech.name}
            </span>
        </div>

    )
}
