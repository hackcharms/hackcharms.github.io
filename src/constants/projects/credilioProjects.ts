import { CompanyType, CredilioProjectType, ProjectType } from "@/types";
import { technologies as technologiesConst } from '@/constants/technologies';
import {  credilioPro, novio } from "@/assets";

function technologies() {
    return technologiesConst.filter(technology => {
        return technology?.projects?.some((project) => project === this.id)
    });
}
export const projects: ProjectType<CredilioProjectType, CompanyType>[] = [
    {
        id: 'credilio-d2c',
        name: 'Direct to Customer Portal',
        company: 'credilio',
        description: '',
        image: novio,
        tags: [],
        demo: '',
        git: '',
        industry: 'finance',
    },
    {
        id: 'credilio-admin',
        name: 'Admin Portal',
        company: 'credilio',
        description: '',
        image: credilioPro,
        tags: [],
        demo: '',
        git: '',
        industry: 'finance',
    },
    {
        id: 'credilio-advisor',
        name: 'Advisor Portal',
        company: 'credilio',
        description: '',
        image: credilioPro,
        tags: [],
        demo: '',
        git: '',
        industry: 'finance',
    },
    {
        id: 'credilio-pnp',
        name: 'Plug and Play',
        company: 'credilio',
        description: '',
        image: credilioPro,
        tags: [],
        demo: '',
        git: '',
        industry: 'finance',
    },
    
]
.map(el => {
    Object.assign(el, { technologies })
    return el as ProjectType<CredilioProjectType, CompanyType>;
})