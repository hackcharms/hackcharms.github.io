import { technologies } from "@/constants";
import { useParams } from "react-router-dom";

export default function TechnologiesDetails() {
  const { id } = useParams();
    const technology=technologies.find(tech=>tech.id===id);
  return <div>
    <h1>
      TechnologiesDetails Page
    </h1>
    <pre>
      {JSON.stringify(technology)}
    </pre>
  </div>;
}
