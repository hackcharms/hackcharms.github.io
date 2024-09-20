import Button from "@/components/core/button";
import LinkCard from "@/components/LinkCard";
import { technologies } from "@/constants";
import { projects as credilioProjects } from "@/constants/projects/credilioProjects";
import { projects as TCWProjects } from "@/constants/projects/theCodeworkProjects";
import { useMemo } from "react";
//  We have src/constants/experiences.ts file for experience data, we can use it later
export default function WorkExperience() {
  const credilioTechnologies = useMemo(()=>{
    return technologies.filter(tech=>tech.projects?.some(project=>{
      return credilioProjects.map(p=>p.id).includes(project);
    }));
  },[])
  const TCWTechnologies = useMemo(()=>{
    return technologies.filter(tech=>tech.projects?.some(project=>{
      return TCWProjects.map(p=>p.id).includes(project);
    }));
  },[])
  return <div>
    <div className="flex items-center justify-center">
      <img
        src="/Zubair.png"
        alt="Zubair profile pic"
        className="size-40 rounded-full transition-all duration-500 group-hover:drop-shadow-light"
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
    {/* Company Cards */}
    <div className="flex">
      <div className="">
        <img
          src="/Zubair.png"
          alt="Zubair profile pic"
          className="mx-auto size-36 rounded-full transition-all duration-500 group-hover:drop-shadow-light"
        />
        <h2>
          <Button variant="link" to="#" className="text-xl">
            Credilio Financial Technologies
          </Button>
        </h2>
      </div>
      <div className="">
        <div>
          <p>

            Credilio Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus consequatur quibusdam quia doloribus iure harum quis, deleniti doloremque numquam iusto dolor obcaecati labore placeat distinctio ut optio deserunt, maxime laborum debitis nam. Pariatur, impedit repudiandae amet rerum fugiat, minus eos asperiores quas corporis et harum perspiciatis? Eum omnis repellendus provident similique facere in voluptate neque. Numquam saepe repellat suscipit quaerat ipsum asperiores sint, blanditiis, sit odit distinctio velit quidem, impedit necessitatibus inventore quos voluptatem fugiat ex. Temporibus porro modi et delectus sit amet fugit esse, voluptatibus magni molestias minus dolor dolorum explicabo. Nesciunt quae maxime facilis, laudantium voluptate consectetur voluptates.
          </p>
        </div>
        <div className="">
          <h1 className="text-xl">
            Projects
          </h1>
          <div className="flex flex-wrap gap-2">
            {credilioProjects.map(project=><LinkCard name={project.name} icon={project.image} to={`/projects/${project.id}`} key={project.id}/>)}
          </div>
        </div>
        <div className="">
          <h1 className="text-xl">
            technologies
          </h1>
          <div className="flex flex-wrap gap-2">
            {credilioTechnologies.map(tech=><LinkCard {...tech} to={`/technologies/${tech.id}`} key={tech.id}/>)}
          </div>
        </div>
      </div>
    </div>
    <div className="flex">
      <div className="">
        <img
          src="/Zubair.png"
          alt="Zubair profile pic"
          className="mx-auto size-36 rounded-full transition-all duration-500 group-hover:drop-shadow-light"
        />
        <h2>
          <Button variant="link" to="#" className="text-xl">
            TheCodeWork
          </Button>
        </h2>
      </div>
      <div className="">
        <div>
          <p>

            Credilio Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus consequatur quibusdam quia doloribus iure harum quis, deleniti doloremque numquam iusto dolor obcaecati labore placeat distinctio ut optio deserunt, maxime laborum debitis nam. Pariatur, impedit repudiandae amet rerum fugiat, minus eos asperiores quas corporis et harum perspiciatis? Eum omnis repellendus provident similique facere in voluptate neque. Numquam saepe repellat suscipit quaerat ipsum asperiores sint, blanditiis, sit odit distinctio velit quidem, impedit necessitatibus inventore quos voluptatem fugiat ex. Temporibus porro modi et delectus sit amet fugit esse, voluptatibus magni molestias minus dolor dolorum explicabo. Nesciunt quae maxime facilis, laudantium voluptate consectetur voluptates.
          </p>
        </div>
        <div className="">
          <h1 className="text-xl">
            Projects
          </h1>
          <div className="flex flex-wrap gap-2">
            {TCWProjects.map(project=><LinkCard name={project.name} icon={project.image} to={`/projects/${project.id}`} key={project.id}/>)}
          </div>
        </div>
        <div className="">
          <h1 className="text-xl">
            technologies
          </h1>
          <div className="flex flex-wrap gap-2">
            {TCWTechnologies.map(tech=><LinkCard {...tech} to={`/technologies/${tech.id}`} key={tech.id}/>)}
          </div>
        </div>
      </div>
    </div>
  </div>;
}


