import Button from "@/components/core/button";
import { all } from "@/constants/projects";
import { changeCase } from "@/utils";
import { useParams } from "react-router-dom";

export default function ProjectsDetails() {
  const { id } = useParams();
  const project = all.find(p => p.id === id)
  return (project ?
    <div className="max-w-3xl">
      <div className="flex flex-col items-center">
        <img src={project.image} className="max-w-40 rounded md:max-w-80" />
        <h1 className="mt-4 text-xl font-bold md:text-3xl">
          {project.name}
        </h1>
       {project.company && <p className="text-xl">
          <svg className="mr-2 inline size-5" xmlns="http://www.w3.org/2000/svg" fill="currentColor" stroke="none" viewBox="0 0 24 24"><path d="M19 2H9c-1.103 0-2 .897-2 2v6H5c-1.103 0-2 .897-2 2v9a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V4c0-1.103-.897-2-2-2zM5 12h6v8H5v-8zm14 8h-6v-8c0-1.103-.897-2-2-2H9V4h10v16z"></path><path d="M11 6h2v2h-2zm4 0h2v2h-2zm0 4.031h2V12h-2zM15 14h2v2h-2zm-8 .001h2v2H7z"></path></svg>
          <span className="pr-2">
            {[changeCase(project.company, 'titlecase'), changeCase(project.industry, 'titlecase')].join(' - ')}
          </span>
        </p>}
        <p className="my-2 flex gap-2">
          {project.tags.map(tag =>
            <span key={tag.name || tag} className="rounded border px-2">{tag.name || tag}</span>
          )
          }
        </p>
        <p className="my-2 flex gap-2">
          {
          project.demo&&
          <Button variant="link" to={project.demo}>
            Demo
          </Button>
          }
          {
          project.git&&
          <Button variant="link" to={project.git}>
            Git Repo
          </Button>
          }
        </p>
      </div>
      <div>
        <p dangerouslySetInnerHTML={{ __html: Array.isArray(project.description) ? project.description?.join('<br>') : project.description }} />
      </div>
      <div className="mt-4">
        <h1 className="my-2 text-center text-2xl font-bold">Technologies</h1>
        <div className="flex flex-wrap items-center justify-center gap-8">

          {
            project.technologies().map(tech => <div className="flex items-center justify-center gap-2" key={tech.id}>
              <img src={tech.icon} alt="" className="size-10" />
              <span className="text-lg">
                {tech.name}
              </span>
            </div>)
          }
        </div>
      </div>
    </div>
    : <p> No Project found</p>);
}
