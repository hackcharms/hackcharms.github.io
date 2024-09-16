import { createBrowserRouter } from "react-router-dom";
import DefaultLayout from "@/layouts/default";
import Index from "@/views/Index";
import About from "@/views/About";
import WorkExperience from "@/views/WorkExperience";
import Projects from "@/views/Projects";
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
        path: "/projects",
        Component: Projects,
      },
    ],
  },
]);
