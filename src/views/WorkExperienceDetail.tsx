import { all } from "@/constants/projects";
import { useParams } from "react-router-dom";

export default function WorkExperienceDetail() {
  const { id } = useParams();
  const project = all.find(p => p.id === id)
  return <div>
    <h1>
    WorkExperienceDetail Page
    </h1>
    <pre>
      {JSON.stringify(project)}
    </pre>
  </div>;
}
