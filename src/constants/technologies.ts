import {
  javascript,
  typescript,
  // html,
  // css,
  reactjs,
  redux,
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
} from "@/assets";
import {  AllProjectsType, TechnologiesType } from "@/types";
export const technologies:{id:TechnologiesType,name:string,icon:string,projects?:AllProjectsType[]}[] = [
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
    projects:['credilio-advisor','novio-admin','credilio-d2c','vue3-toaster','qr-menu','credilio-pnp','novio-admin','vokabul8']

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
    icon: pinia,
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
    icon: vuetify,
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
    projects:[]
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
    projects:['como','mdware','npr-logistics','veight-coin','vokabul8']
  },
  {
    id:'mysql',
    name: "MySql",
    icon: mysql,
    projects:['como','mdware','npr-logistics','veight-coin','vokabul8']
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
