import { CompanyType, ProjectType, TheCodeWorkProjectType } from "@/types";
import { technologies as technologiesConst } from '@/constants/technologies';
import { como, npr, qrMenu, vokabul8, } from "@/assets";

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
        title: `The project involved integrating a data-driven customer engagement and loyalty solution (Como) with Lightspeed's F&B and retail platforms. The goal was to enable Lightspeed customers to use Como's loyalty features alongside existing options.`,
        description: [
            `The project involved integrating a data-driven customer engagement and loyalty solution (Como) with Lightspeed's F&B and retail platforms. The goal was to enable Lightspeed customers to use Como's loyalty features alongside existing options.`,
            `<ul class="list-disc list-inside">
            Key features included:
            <li><b>Synchronization</b>: Integrating sales data from Lightspeed to Como.
            </li>
            <li><b>Web Interface</b>: Providing a web interface on the POS to identify Como customers and offer discounts or point redemption.</li>
            <li><b>Technical Implementation</b>: Using Laravel for the backend and a standalone VueJS SPA for the web interface.</li>
            </ul>`
        ],
        image: como,
        tags: [],
        demo: '',
        git: '',
        industry: 'Loyalty Management',
    },
    // {
    //     id: 'mdware',
    //     name: 'MD Ware',
    //     company: 'thecodework',
    //     description: '',
    //     image: mdware,
    //     tags: [],
    //     demo: '',
    //     git: '',
    //     industry: 'finance',
    // },
    {
        id: 'npr-logistics',
        name: 'NPR Logistics',
        company: 'thecodework',
        title: 'NPR Logistics is an ERP Solution targets to facilitates logistics pickup & drop across the country through its network of Transporters, Vehicle Owners and Drivers.',
        description: [
            'NPR Logistics is an ERP Solution targets to facilitates logistics pickup & drop across the country through its network of Transporters, Vehicle Owners and Drivers.',
            'NPR then creates a logistics pickup & drop order for a transporter and through its network of Vehicle owners & drivers in order to fulfil the order.',
            '',
            `<ul class="list-disc list-inside">
            The main focus was on this application to have-
            <li>
                User Management
            </li><li>
            RBAC – Role Based Access Control
            </li>
            <li>
            Ability to add new User and assign roles & permissions
            </li>
            <li>
            Sub-admin and Admin based Dashboard to give clear overview
            </li><li>
            Order Creation
            </li><li>
            Pro-forma, Invoice, and Delivery Challan Generation</li>`
        ],
        image: npr,
        tags: [],
        demo: 'https://nprlog.in/',
        git: '',
        industry: 'logistics',
    },
    {
        id: 'qr-menu',
        name: 'QR Menu',
        company: 'thecodework',
        title: '<b>QR Menu</b>, a Belgian product developed by <b>MDWare</b>, offers innovative digital menu solutions for restaurants and cafes.',
        description: ['<b>QR Menu</b>, a Belgian product developed by <b>MDWare</b>, offers innovative digital menu solutions for restaurants and cafes. Customers can easily browse and order food using their own smartphones or on-site kiosks.',
            `<ul class="list-disc list-inside">
            Key Features:
            <li><b>Multilingual support</b>: English, Dutch, German, and French.</li>
            <li><b> POS integration</b>: Seamlessly integrates with popular systems like Lightspeed, iKentoo, and Gastrofix.</li>
            <li><b> Mobile ordering</b>: Convenient for customers to order directly from their devices.</li>
            <li><b> Kiosk compatibility</b>: Offers a user-friendly kiosk experience for in-restaurant ordering.</li>
            
</ul>`

        ],

        image: qrMenu,
        tags: [],
        demo: 'https://en.qr-menu.app/',
        git: '',
        industry: 'restaurant',
    },
    {
        id: 'vokabul8',
        name: 'Vokabul8',
        company: 'thecodework',
        title: `Vokabul8 is a vocabulary-based betting platform. Users can play four different games, including "What's the Word?", "Golden Number", "Letters of Fortune", and "The Ultimate Challenge".`,
        description: [
            `Vokabul8 is a vocabulary-based betting platform that uses VeightCoin as its virtual currency. Users can play four different games, including "What's the Word?", "Golden Number", "Letters of Fortune", and "The Ultimate Challenge".`,
            '',
            `<ul>
                <li>
                    <b>What's the Word?</b> : Guess missing letters in a word.
                </li>
                <li>
                    <b>Golden Number</b>: Guess the number of characters in remaining games.
                </li>
                <li>
                    <b>Letters of Fortune</b>: Guess if a letter is in a remaining game.
                </li>
                <li>
                    <b> The Ultimate Challenge</b>: Create or join private rooms for competitive gameplay.
                </li>
            </ul>`,
            `<b>Social features</b>: Includes a feed and chat for user interaction.`

        ],
        image: vokabul8,
        tags: [],
        demo: '',
        git: '',
        industry: 'gaming',
    },
    // {
    //     id: 'veight-pay',
    //     name: 'Veight Pay',
    //     company: 'thecodework',
    //     description: '',
    //     image: veightPay,
    //     tags: [],
    //     demo: '',
    //     git: '',
    //     industry: 'finance',
    // },
]
    .map(el => {
        Object.assign(el, { technologies })
        return el as ProjectType<TheCodeWorkProjectType, CompanyType>;
    });
