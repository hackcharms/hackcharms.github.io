import { credilio, tcw } from "@/assets";
import { projects as credilioProjects } from "./projects/credilioProjects";
import { projects as TCWProjects } from "./projects/theCodeworkProjects";
import { ProjectType } from "@/types";
import { technologies, TechnologyType } from "./technologies";
export type ExperienceType<P> = {
  title: string;
  company_name: string;
  introduction?: string|string[];
  icon: string;
  iconBg: string;
  date: string;
  link: string;
  points: string[];
  projects: P[];
  projectData: ProjectType<string,unknown>[];
  technologies?:TechnologyType[]
}
export const experiences:ExperienceType<unknown>[] = [
  {
    title: "Software Engineer (Frontend)",
    company_name: "Credilio Financial Technologies",
    icon: credilio,
    link:'https://www.credilio.in/',
    introduction:[
      'Credilio, a Mumbai-based fintech company, is a leading distributor of personal loans and credit lines from top financial institutions. Our esteemed partners include HDFC Bank, Standard Chartered Bank, IDFC First Bank, Yes Bank, and more.',
      'Credilio offers a co-branded credit card with State Bank of Mauritius (SBM) and a consumer-focused app called Novio.'
    ],
    iconBg: "#c491ef",
    date: "Dec 2022 - Present",
    points: [
      "Refactored and modularized the project structure using composable components and other approaches to improve accessibility and maintainability.",
      "Optimized page load times by leveraging a deep understanding of lifecycle hooks, rendering, asynchronous components, virtual scrolling, debouncing, throttles, etc.",
      "Implemented the access based on roles and policy to restrict unauthorized access.",
      "Dynamic theme support to adopt and blend with partner platforms and multiple native supports like image, text sharing, clipboard, etc.",
      "Assisted the partners integration of our web page in their application and led a group of 3-4 developers.",
    ],
    projects: credilioProjects.map(p => p.id),
    projectData: credilioProjects,
    technologies:technologies.filter((techonolgy)=>{
      return techonolgy.projects?.some(project=>{
        return credilioProjects.map(p => p.id).includes(project);
      })
    })
  },
  {
    title: "Full stack Developer",
    company_name: "TheCodeWork",
    introduction:['TheCodeWork is an agile team of developers from India who tries to add value to your business or startup venture, in any phase starting from ideation to post-production.',
      'TheCodeWork and its entire team of developers majorly focus on Brainstorming Sessions and Analysis to the core in order to provide you with the top-notch quality product design and services.'],
    icon: tcw,
    link:'https://thecodework.com/',
    iconBg: "#c491ef",
    date: "May 2021 - Nov 2022",
    points: [
      "Developing and maintaining web applications using Larvel, Vuejs and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
    projects: TCWProjects.map(p => p.id),
    projectData: TCWProjects,
    technologies:technologies.filter((techonolgy)=>{
      return techonolgy.projects?.some(project=>{
        return TCWProjects.map(p => p.id).includes(project);
      })
    })
  },
];
