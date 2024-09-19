import { createBrowserRouter } from "react-router-dom";
import DefaultLayout from "@/layouts/default";
import Index from "@/views/Index";
import About from "@/views/About";
// import WorkExperience from "@/views/WorkExperience";
import Projects from "@/views/Projects";
// import WorkExperienceDetail from "@/views/WorkExperienceDetail";
import ProjectsDetails from "@/views/ProjectsDetails";
import Technologies from "@/views/Technologies";
import TechnologiesDetails from "@/views/TechnologiesDetails";
export default createBrowserRouter([
  {
    path: "/",
    Component: DefaultLayout,
    children: [
      {
        path: "",
        Component: Index,
      },
      {
        path: "/about",
        Component: About,
      },
      // {
      //   path: "/works",
      //   Component: WorkExperience,
      // },
      // {
      //   path: "/works/:id",
      //   Component: WorkExperienceDetail,
      // },
      {
        path: "/projects",
        Component: Projects,
      },
      {
        path: "/projects/:id",
        Component: ProjectsDetails,
      },
      {
        path: "/technologies",
        Component: Technologies,
      },
      {
        path: "/technologies/:id",
        Component: TechnologiesDetails,
      },
    ],
  },
]);
