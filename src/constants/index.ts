import { mobile, backend, creator, web } from "@/assets";
export * from "./experiences";
export * from "./technologies";
export * from "./projects";

export const navLinks = [
  {
    path: "#about",
    label: "About",
  },
  {
    path: "#works",
    label: "Experience",
  },
  {
    path: "#technologies",
    label: "Tech Stacks",
  },
  {
    path: "#project",
    label: "Projects",
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