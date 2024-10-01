import Button from "@/components/core/button";
import { technologies, TechnologyType } from "@/constants";
import { changeCase } from "@/utils";

export default function Technologies() {
  return <div className="grid grid-cols-2 gap-4">
    {technologies.map((tech) => <TechnologiesCard key={tech.id} tech={tech} />)}
  </div>;
}

function TechnologiesCard({ tech }: {tech:TechnologyType}) {
  return <div key={tech.id} className="rounded-lg border border-transparent p-4 transition-all duration-500 hover:-translate-y-1 hover:scale-105 hover:border-gray-50/20">
    <div className="flex items-center justify-center gap-2 text-center">
      <img src={tech.icon} className="size-16" alt={tech.name} />
      <h1 className="text-xl" >{tech.name}</h1>
    </div>
    <div className="flex flex-wrap justify-center">
      {tech.projects?.map(project =>
        <Button variant="link" to={project==='all'?'':`/projects/${project}`} key={project} className="m-1">
          {changeCase(project,'titlecase')}
        </Button>
      )}
    </div>
  </div>
}
