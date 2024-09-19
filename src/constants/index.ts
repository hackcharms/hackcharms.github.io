import { mobile, backend, creator, web } from "@/assets";
export * from "./experiences";
export * from "./technologies";

export const navLinks = [
  {
    path: "/works",
    label: "Work Experience",
  },
  {
    path: "/technologies",
    label: "Tech Stacks",
  },
  {
    path: "/projects",
    label: "Projects",
  },
  {
    path: "/about",
    label: "About",
  },
  {
  path: "#social-links",
    label: "Contacts",
  },
];

export const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Front-end Developer",
    icon: backend,
  },
  {
    title: "Vuejs Developer",
    icon: mobile,
  },
  {
    title: "Full stack developer",
    icon: creator,
  },
];