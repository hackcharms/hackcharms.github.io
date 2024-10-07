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
    title:
      "Revolutionize your Vue.js 3 development with vue3-toaster, a lightweight and fully customizable toast notification package that seamlessly blends into your design, requiring zero third-party dependencies for a cleaner bundle size and offering effortless customization to match your exact design requirements.",
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
    title: 'Similar to Stack Overflow, it provides a platform for individuals to ask questions, receive expert answers, and contribute to ongoing discussions',
    description: [
      "Similar to Stack Overflow, it provides a platform for individuals to ask questions, receive expert answers, and contribute to ongoing discussions",
      `
      <br/>
      <ul class="list-disc list-inside">
        <b>Key Features</b>:
        <li><b>Question Posting</b>: Users can easily post questions related to a wide range of topics, from programming and technology to hobbies and interests.</li>
        <li><b>Detailed Question Descriptions</b>: Provide comprehensive descriptions of your questions, including relevant context, error messages, or code snippets.</li>
        <li><b>Answering and Upvoting</b>: Users can answer questions, provide helpful insights, and upvote the best responses.</li>
        <li><b>Best Answer Selection</b>: The question asker can select the most helpful answer as the "best answer," recognizing the valuable contribution.</li>
      </ul>
      `
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
    title: `2048 is a popular puzzle game where the objective is to slide numbered tiles on a grid to combine them and create a tile with the number 2048.`,
    description: [
      `2048 is a popular puzzle game where the objective is to slide numbered tiles on a grid to combine them and create a tile with the number 2048.`,
      `The game is simple to learn but challenging to master, making it a captivating pastime for players of all ages.`,
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
