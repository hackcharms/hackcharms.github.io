import { TechnologyType } from "@/constants";

export type PersonalProjectType = 'vue3-toaster' | 'ask-me' | '2048';
// export type WorkExperienceType='';
export type CompanyType = 'thecodework' | 'credilio';
export type CredilioProjectType = 'credilio-advisor' | 'credilio-pnp' | 'credilio-admin' | 'novio-admin' | 'credilio-d2c';
// Loyalty Service Integration
export type TheCodeWorkProjectType = 'mdware' | 'qr-menu' | 'npr-logistics' | 'vokabul8' | 'veight-coin' | 'como';
export type AllProjectsType = TheCodeWorkProjectType | CredilioProjectType | PersonalProjectType | 'all'
export type TechnologiesType = 'javascript' | 'typescript' | 'php' | 'nodejs' | 'websocket' | 'mysql' | 'vue' | 'react' | 'nuxt' | 'pinia' | 'vuex' | 'laravel' |
  'vuetify' | 'nuxt-ui' | 'redux' | 'tailwind' | 'html' | 'css' | 'mongodb' | 'threejs' | 'git' | 'docker'|'pusher'|'websocket'|'vite';
  
export type IndustryType = 'gaming' | 'e-commerce' | 'finance'
export type ProjectType<ID, Company = string> = {
  id: ID,
  name: string,
  title:string,
  description: string | string[],
  tags: Record<string, unknown>[],
  industry?: IndustryType,
  image: string,
  company?: Company,
  demo?: string,
  git?: string,
  technologies: () => TechnologyType[]
}