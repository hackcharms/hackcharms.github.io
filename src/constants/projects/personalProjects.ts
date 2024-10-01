import { askMe, vue3Toaster } from "@/assets";
import { PersonalProjectType, ProjectType } from "@/types";
import { technologies as technologiesConst } from '@/constants/technologies';
function technologies() {
  return technologiesConst.filter(technology => {
      return technology?.projects?.some((project) => project === this.id)
  });
}
export const projects: ProjectType<PersonalProjectType>[] = [
  {
    id: 'vue3-toaster',
    name: "Vue3 Toaster",
    description:
      "Revolutionize your Vue.js 3 development with vue3-toaster, a lightweight and fully customizable toast notification package that seamlessly blends into your design, requiring zero third-party dependencies for a cleaner bundle size and offering effortless customization to match your exact design requirements. Easily integrate toast notifications into your Vue.js components and tailor their look and feel to match your exact requirements. Easy-to-use composables and plugins for effortless integration.",
    tags: [
      {
        name: "vue3",
        color: "blue-text-gradient",
      },
      {
        name: "typescript",
        color: "green-text-gradient",
      },
      {
        name: "notification",
        color: "pink-text-gradient",
      },
    ],
    image: vue3Toaster,
    demo: 'https://hackcharms.xyz/vue3-toaster',
    git: "https://github.com/hackcharms/vue3-toaster",
  },
  {
    id: 'ask-me',
    name: "Ask Me",
    description: [
      "Stack Overflow like Application where you can raise Questions, Update it and mark the best answer and reply on other's Questions as well",
    ],
    tags: [
      {
        name: "Laravel",
        color: "blue-text-gradient",
      },
      {
        name: "MySQL",
        color: "green-text-gradient",
      },
      {
        name: "PHP",
        color: "pink-text-gradient",
      },
      {
        name: "bootstrap",
        color: "pink-text-gradient",
      },
    ],
    image: askMe,
    git: "https://github.com/hackcharms/askme",
  }, {
    id: '2048',
    name: "2048",
    description: [
      "status pending",
    ],
    tags: [
      {
        name: "Typescript",
        color: "blue-text-gradient",
      },
      {
        name: "Vite",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: "https://github.com/hackcharms/2048/raw/main/public/image.png?raw=true",
    git: "https://github.com/hackcharms/askme",
  },
]
.map(el => {
  Object.assign(el, { technologies })
  return el as ProjectType<PersonalProjectType>;
});
