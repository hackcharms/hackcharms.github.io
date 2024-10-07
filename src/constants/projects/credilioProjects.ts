import { CompanyType, CredilioProjectType, ProjectType } from "@/types";
import { technologies as technologiesConst } from '@/constants/technologies';
import { credilioPro, novio } from "@/assets";

function technologies(this: Record<string,unknown>) {
    return technologiesConst.filter(technology => {
        return technology?.projects?.some((project) => project === this.id)
    });
}
export const projects: ProjectType<CredilioProjectType, CompanyType>[] = [
    {
        id: 'credilio-d2c',
        name: 'Direct to Customer Portal',
        company: 'credilio',
        title: 'A platform designed to empower customers to apply for credit and personal loans independently.',
        description: [
            `A platform designed to empower customers to apply for credit and personal loans independently.`,
            `<ul class="list-disc list-inside">
            <b>Key Contributions:</b>
            <li><b>Project Restructuring</b>: Spearheaded a significant restructuring initiative, adopting composable components and industry-best practices. This resulted in a substantial 20% improvement in code maintainability and a more user-friendly interface.</li>
            <li><b>Performance Optimization</b>: Leveraged in-depth knowledge of lifecycle hooks, rendering techniques, asynchronous components, and optimization strategies to significantly enhance page load times.</li>
            <li><b>Customization Flexibility</b>: Structured the portal to accommodate diverse partner branding requirements. Partners can now easily customize colors, logos, fonts, and backgrounds to align with their specific corporate identity.</li>
            <li><b>Robust Validation</b>: Implemented validation libraries like Zod, Yup, and Vee-Validate to ensure data integrity and prevent errors.</li>
            <li><b>Code Quality and Efficiency</b>: Adhered to industry best practices by utilizing linting tools like ESLint and formatters like Prettier to maintain code quality and consistency.</li>
            <li><b>Advanced Build Configuration</b>: Employed advanced Vite bundling configurations to optimize the loading of client-side assets, including icons.</li>
        </ul>
        <p>Through these contributions, I helped create a scalable, efficient, and customizable platform that provides a seamless user experience for customers applying for credit and personal loans.</p>
        `],
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
        title: 'An Admin Portal is a centralized platform designed to provide administrators with comprehensive control and oversight over various aspects of a system or organization. It offers a user-friendly interface to manage settings, monitor performance, and access valuable analytics.',
        description: [
            'An Admin Portal is a centralized platform designed to provide administrators with comprehensive control and oversight over various aspects of a system or organization. It offers a user-friendly interface to manage settings, monitor performance, and access valuable analytics.',
            `<br/><ul class="list-disc list-inside">
                <b>Focused Area</b>
                <li><b>Role-based Access Control (RBAC)</b>: Implemented a robust RBAC system to ensure that users have only the necessary permissions to perform their job functions.</li>
                <li><b>Security and Access Control</b>: Implement robust security measures to protect sensitive data and prevent unauthorized access</li>
                <li><b>CSV Data Export</b>: Enabled the export of data in CSV format for easy analysis and integration with other systems.</li>
                <li><b>Centralized User Management</b>: Provided a centralized platform for creating, editing, and managing user accounts, including assigning roles, permissions, and access levels.</li>
            </ul>
            `
        ],
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
        title: 'The Advisor Portal is a sophisticated web application designed to equip financial advisors with the tools and resources necessary to effectively guide customers through the credit and personal loan application process. This innovative platform streamlines the entire journey, from initial consultation to loan approval, ensuring a seamless and efficient experience for both advisors and customers.',
        description: [
            'The Advisor Portal is a sophisticated web application designed to equip financial advisors with the tools and resources necessary to effectively guide customers through the credit and personal loan application process. This innovative platform streamlines the entire journey, from initial consultation to loan approval, ensuring a seamless and efficient experience for both advisors and customers.',
            'Fully Accessibility multiple reusable components, like file upload, text input handling with validation and sanitization.',
            'Lead, customer and earning report file generation and download.',
            'Web-based integration for landing pages and library pages which in-turn are used in native apps (Credilio Pro).',
            'Authentication and authorization using JWT and making it persistent and session based keeping best security practices'
        ],
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
        title: 'Plug-and-Play offers a seamless integration platform for partners seeking to incorporate our financial services into their applications. Partners can easily customize the theme to ensure a cohesive and branded experience',
        description: [
            'Plug-and-Play offers a seamless integration platform for partners seeking to incorporate our financial services into their applications. Partners can easily customize the theme to ensure a cohesive and branded experience',
            `<br/><ul class="list-disc list-inside">
                <li><b>Dynamic Theme Adaptation</b>: Seamlessly integrates with partner platforms by dynamically adjusting themes and styles to match their branding.</li>
                <li><b>Native Feature Support</b>: Offers a wide range of native features, including image sharing, text sharing, and clipboard functionality, for a native-like user experience.</li>
                <li><b>Webview Communication</b>: Enables seamless communication between the web application and native Android/iOS apps using WebView technology.</li>
                <li><b>Partner Integration</b>: Provided expert guidance and support to partners in integrating our web page into their applications.</li>
            </ul>
            `
        ],
        image: credilioPro,
        tags: [],
        demo: '',
        git: '',
        industry: 'finance',
    },

]
    .map(el => {
        Object.assign(el, { technologies })
        return el as unknown as ProjectType<CredilioProjectType, CompanyType>;
    })