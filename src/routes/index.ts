import { createBrowserRouter } from "react-router-dom";
import DefaultLayout from "@/layouts/default";
import Index from "@/views/Index";
export default createBrowserRouter([
  {
    path: "/",
    Component: DefaultLayout,
    children: [
      {
        path: "",
        Component: Index,
      },
    ],
  },
]);
