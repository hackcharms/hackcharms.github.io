import { createBrowserRouter } from "react-router-dom";
import DefaultLayout from "@/layouts/default";
import Index from "@/views/Index";
import About from "@/views/About";
import Projects from "@/views/Projects";
import ProjectsDetails from "@/views/ProjectsDetails";
import Technologies from "@/views/Technologies";
import TechnologiesDetails from "@/views/TechnologiesDetails";
import WorkExperience from "@/views/WorkExperience";
import WorkExperienceDetail from "@/views/WorkExperienceDetail";
import SVGShapeGenerator from "@/views/SVGShapeGenerator";
import Test from "@/views/test";
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
      {
        path: "/works",
        Component: WorkExperience,
      },
      {
        path: "/works/:id",
        Component: WorkExperienceDetail,
      },
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
      {
        path: "/svg-shapes",
        Component: SVGShapeGenerator,
      },
      {
        path:'test',
        Component: Test
      }
    ],
  },
]);
