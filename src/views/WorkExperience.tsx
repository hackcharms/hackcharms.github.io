import Button from "@/components/core/button";
import LinkCard from "@/components/LinkCard";
import { experiences, ExperienceType } from "@/constants";
export default function WorkExperience() {
  return <div className="grid grid-cols-1 gap-4">
    <div className="my-20 flex items-center justify-center gap-4">
      <svg className="size-24 text-secondary-200" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
        <path d="M1 11a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1zm5-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1zm5-5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1z"></path>
      </svg>
      <div>
        <h1 className="text-3xl font-bold">
          Career Journey
        </h1>
        <p className="text-lg">
          A personal narrative of my professional growth, from early beginnings to current achievements.
        </p>
      </div>
    </div>
    {
      experiences.map((experience, index) =>
        <ExperienceCard experience={experience} className="mt-10" key={experience.company_name} reverse={index % 2 == 0} />
      )
    }
  </div>;
}


function ExperienceCard({ experience, reverse, className }: { experience: ExperienceType<unknown>, reverse?: boolean, className?: string }) {
  return <>
    <div className={`flex ${reverse ? 'flex-row-reverse' : ''} ${className}`}>
      <div className="w-2/5 text-center">
        <img
          src={experience.icon}
          alt={`${experience.company_name} Logo`}
          className="z-0 mx-auto h-auto w-52 min-w-52"
        />
        <Button
          variant="link"
          to={experience.link}
          className="text-2xl font-semibold text-secondary underline"
          target="_blank"
        >
          {experience.company_name}
        </Button>
        <p className="text-sm">
          <time dateTime={experience.date}>{experience.date}</time>
        </p>
      </div>
      {
        experience.introduction &&
        <div className="flex w-3/5 items-center justify-center">
          <p className="" dangerouslySetInnerHTML={{
            __html: Array.isArray(experience.introduction) ?
              experience.introduction?.join('<br><br>') :
              experience.introduction
          }}>

          </p>
        </div>
      }
    </div>
    <div className="my-4 text-center">
      <h1 className="my-2 text-xl">
        Projects
      </h1>
      <div className="flex flex-wrap justify-center gap-2">
        {experience.projectData.map(project => <LinkCard name={project.name} icon={project.image} to={`/projects/${project.id}`} key={project.id} />)}
      </div>
    </div>
    <div className=" text-center">
      <h1 className="text-xl">
        Technologies
      </h1>
      <div className="flex flex-wrap justify-center gap-2">
        {experience.technologies?.map(tech => <LinkCard icon={tech.icon} name={tech.name} to={`/technologies/${tech.id}`} key={tech.id} />)}
      </div>
    </div>
  </>
}