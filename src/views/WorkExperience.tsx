import Button from "@/components/core/button";
import LinkCard from "@/components/LinkCard";
import { technologies, TechnologyType } from "@/constants";
import { projects as credilioProjects } from "@/constants/projects/credilioProjects";
import { projects as TCWProjects } from "@/constants/projects/theCodeworkProjects";
import { useMemo } from "react";
import { credilio, tcw } from "@/assets";
//  We have src/constants/experiences.ts file for experience data, we can use it later
export default function WorkExperience() {
  const credilioTechnologies = useMemo(() => {
    return technologies.filter(tech => tech.projects?.some(project => {
      return credilioProjects.map(p => p.id).includes(project);
    }));
  }, [])
  const TCWTechnologies = useMemo(() => {
    return technologies.filter(tech => tech.projects?.some(project => {
      return TCWProjects.map(p => p.id).includes(project);
    }));
  }, [])
  return <div className="grid grid-cols-1 gap-4">
    <div className="my-20 flex items-center justify-center">
      <img
        src={tcw}
        alt="Zubair profile pic"
        className="transition-all duration-500 hover:drop-shadow-light"
      />
      <div>
        <h1>
          Work Experience
        </h1>
        <p>
          I have worked for TheCodeWork and credilio, following is deep explanation about these companies.
        </p>
      </div>
    </div>
    <ExperienceCard technologies={credilioTechnologies} className="mt-10" />
    <ExperienceCard technologies={TCWTechnologies} reverse className="mt-10" />
  </div>;
}


function ExperienceCard({ technologies, reverse, className }: { technologies: TechnologyType[], reverse?: boolean, className?: string }) {
  return <>
    <div className={`flex ${reverse ? 'flex-row-reverse' : ''} ${className}`}>
      <div className="w-2/5 text-center">
        <img
          src={credilio}
          alt="Credilio Financial Limited Logo"
          className="z-0 mx-auto size-52"
        />
        <Button
          variant="link"
          to="http://credilio.in"
          className="text-2xl font-semibold text-secondary underline"
          target="_blank"
        >
          Credilio Financial Limited
        </Button>
        <p className="text-sm">
          <time dateTime="2022-12-5 00:00">Dec 2022</time>
          <span className="px-2">-</span>
          <time dateTime={Date.toString()}>Present</time>
        </p>
      </div>

      <p className="w-3/5">
        Credilio Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus consequatur quibusdam quia doloribus iure harum quis, deleniti doloremque numquam iusto dolor obcaecati labore placeat distinctio ut optio deserunt, maxime laborum debitis nam. Pariatur, impedit repudiandae amet rerum fugiat, minus eos asperiores quas corporis et harum perspiciatis? Eum omnis repellendus provident similique facere in voluptate neque. Numquam saepe repellat suscipit quaerat ipsum asperiores sint, blanditiis, sit odit distinctio velit quidem, impedit necessitatibus inventore quos voluptatem fugiat ex. Temporibus porro modi et delectus sit amet fugit esse, voluptatibus magni molestias minus dolor dolorum explicabo. Nesciunt quae maxime facilis, laudantium voluptate consectetur voluptates.
      </p>
    </div>
    <div className="text-center">
      <h1 className="text-xl">
        Projects
      </h1>
      <div className="flex flex-wrap justify-center gap-2">
        {credilioProjects.map(project => <LinkCard name={project.name} icon={project.image} to={`/projects/${project.id}`} key={project.id} />)}
      </div>
    </div>
    <div className=" text-center">
      <h1 className="text-xl">
        Technologies
      </h1>
      <div className="flex flex-wrap justify-center gap-2">
        {technologies.map(tech => <LinkCard {...tech} to={`/technologies/${tech.id}`} key={tech.id} />)}
      </div>
    </div>
  </>
}