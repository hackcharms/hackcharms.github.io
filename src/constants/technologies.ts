import {
  javascript,
  typescript,
  // html,
  // css,
  reactjs,
  redux,
  vite,
  tailwind,
  nodejs,
  mongodb,
  git,
  docker,
  threejs,
  vuejs,
  nuxtjs,
  pinia,
  vuetify,
  laravel,
  mysql,
  websocket,
  vuex,
  bootstrap,
  nuxtui,
} from "@/assets";
import {  AllProjectsType, TechnologiesType } from "@/types";
export type TechnologyType={id:TechnologiesType,name:string,icon:string,projects?:AllProjectsType[]};
export const technologies:TechnologyType[] = [
  {
    id:'javascript',
    name: "JavaScript",
    icon: javascript,
    projects:['all']
  },
  {
    id:'typescript',
    name: "TypeScript",
    icon: typescript,
    projects:['credilio-advisor','novio-admin','credilio-d2c','credilio-pnp','2048','vue3-toaster']
  },
  {
    id:'vue',
    name: "Vue JS",
    icon: vuejs,
    projects:['credilio-advisor','novio-admin','credilio-d2c','vue3-toaster','qr-menu','credilio-pnp','vokabul8','ask-me']

  },
  {
    id:'nuxt',
    name: "Nuxt JS",
    icon: nuxtjs,
    projects:['credilio-admin','credilio-advisor','credilio-d2c','credilio-pnp','novio-admin']
  },
  {
    id:'pinia',
    name: "Pinia",
    icon: pinia,
    projects:['credilio-admin','credilio-advisor','credilio-d2c','credilio-pnp','novio-admin']
  },
  {
    id:'vuex',
    name: "Vuex",
    icon: vuex,
    projects:['credilio-admin','credilio-advisor','como','qr-menu']
  },
  {
    id:'vuetify',
    name: "Vuetify",
    icon: vuetify,
    projects:['credilio-admin','credilio-advisor','credilio-pnp']
  },
  {
    id:'nuxt-ui',
    name: "NuxtUi",
    icon: nuxtui,
    projects:['credilio-admin','credilio-advisor','credilio-pnp']
  },
  {
    id:'react',
    name: "React JS",
    icon: reactjs,
    //will be adding later
    projects:[]
  },
  {
    id:'redux',
    name: "Redux Toolkit",
    icon: redux,
    projects:[]
  },
  {
    id:'tailwind',
    name: "Tailwind CSS",
    icon: tailwind,
    projects:['como','credilio-d2c','novio-admin','qr-menu','veight-coin','vokabul8']
  },
  {
    id:'vite',
    name: "Vite",
    icon: vite,
    projects:['2048','credilio-d2c','novio-admin','credilio-advisor','vue3-toaster']
  },
  // {
  //   id:'html',
  //   name: "HTML 5",
  //   icon: html,
  // },
  // {
  //   id:'css',
  //   name: "CSS 3",
  //   icon: css,
  // },
  {
    id:'nodejs',
    name: "Node JS",
    icon: nodejs,
    projects:[]
  },
  {
    id:'laravel',
    name: "Laravel",
    icon: laravel,
    projects:['como','mdware','npr-logistics','veight-coin','vokabul8','ask-me']
  },
  {
    id:'websocket',
    name: "WebSocket",
    icon: websocket,
    projects:['vokabul8']
  },
  {
    id:'mysql',
    name: "MySql",
    icon: mysql,
    projects:['como','mdware','npr-logistics','veight-coin','vokabul8','ask-me']
  },
  {
    id:'mongodb',
    name: "MongoDB",
    icon: mongodb,
    projects:[]
  },
  {
    id:'threejs',
    name: "Three JS",
    icon: threejs,
    projects:[]
  },
  {
    id:'bootstrap',
    name: "bootstrap CSS",
    icon: bootstrap,
    projects:['ask-me']
  },
  {
    id:'git',
    name: "git",
    icon: git,
    projects:['all']
  },
  {
    id:'docker',
    name: "docker",
    icon: docker,
    //feedback project
    projects:[]
  },
]
// .map(el=>{
//   el.getProjects=getProjects;
//   return el;
// })
;
