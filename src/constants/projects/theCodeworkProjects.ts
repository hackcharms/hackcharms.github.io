import { CompanyType, ProjectType, TheCodeWorkProjectType } from "@/types";
import { technologies as technologiesConst } from '@/constants/technologies';

function technologies() {
    return technologiesConst.filter(technology => {
        return technology?.projects?.some((project) => project === this.id)
    });
}

export const projects: ProjectType<TheCodeWorkProjectType, CompanyType>[] = [
    {
    id: 'como',
    name: 'Como',
    company: 'thecodework',
    description: '',
    image: '',
    tags: [],
    demo: '',
    git: '',
    industry: 'finance',
},
    {
    id: 'mdware',
    name: 'MD Ware',
    company: 'thecodework',
    description: '',
    image: '',
    tags: [],
    demo: '',
    git: '',
    industry: 'finance',
},
    {
    id: 'npr-logistics',
    name: 'NPR Logistics',
    company: 'thecodework',
    description: '',
    image: '',
    tags: [],
    demo: '',
    git: '',
    industry: 'finance',
},
    {
    id: 'qr-menu',
    name: 'QR Menu',
    company: 'thecodework',
    description: '',
    image: '',
    tags: [],
    demo: '',
    git: '',
    industry: 'finance',
},
    {
    id: 'vokabul8',
    name: 'Vokabul8',
    company: 'thecodework',
    description: '',
    image: '',
    tags: [],
    demo: '',
    git: '',
    industry: 'finance',
},
    {
    id: 'veight-coin',
    name: 'Veight Coin',
    company: 'thecodework',
    description: '',
    image: '',
    tags: [],
    demo: '',
    git: '',
    industry: 'finance',
},
]
.map(el => {
    Object.assign(el, { technologies })
    return el as ProjectType<TheCodeWorkProjectType, CompanyType>;
  });
  