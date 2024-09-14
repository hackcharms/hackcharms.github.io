import { createBrowserRouter } from "react-router-dom";
import DefaultLayout from "@/layouts/default";
import Index from "@/views/Index";
import About from "@/views/About";
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
        path: "/projects",
        Component: Projects,
      },
    ],
  },
]);
