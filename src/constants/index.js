import {
    javascript,
    html,
    css,
    tailwind,
    nodejs,
    mongodb,
    workflow,
    jobsearch,
    prettypetals,
    express,
    mysql,
    aws
} from "../assets";

export const navLinks = [
    {
        id: "home",
        title: "Home",
        class:"nav-link home"
    },
    {
        id: "about",
        title: "About",
        class:"nav-link about"
    },
    {
        id: "skills",
        title:"Skills",
        class:"nav-link skills"
    },
    {
        id: "project",
        title: "Project",
        class:"nav-link projects"
    },
    {
        id: "contact",
        title: "Contact",
        class:"nav-link contact"
    },

];

const technologies = [
    {
        name: "HTML 5",
        icon: html,
    },
    {
        name: "CSS 3",
        icon: css,
    },
    {
        name: "JavaScript",
        icon: javascript,
    },
    {
        name: "MySQL",
        icon: mysql,
    },
    {
        name: "AWS",
        icon: aws,
    },
    {
        name: "Express JS",
        icon: express,
    },
    {
        name: "Tailwind CSS",
        icon: tailwind,
    },
    {
        name: "Node JS",
        icon: nodejs,
    },
    {
        name: "MongoDB",
        icon: mongodb,
    },
];


const projects = [
    {
        name: "myhours (clone)",
        description:
            "A project management website that provides progress-tracking-related solutions to HRs and the Team Leads to handle multiple projects with ease.",
        tags: [
            {
                name: "HTML",
                color: "html",
            },
            {
                name: "CSS",
                color: "blue-text-gradient",
            },
            {
                name: "JavaScript",
                color: "javascript",
            },
            {
                name:"MongoDB",
                color:"green-text-gradient"
            },
            {
                name:"Express JS",
                color:"pink-text-gradient"
            }
        ],
        image: workflow,
        source_code_link: "https://github.com/git-rishab/attractive-flower-9726",
        deployed_link:"https://work-flow01.netlify.app/"
    },
    {
        name: "1800flowers (clone)",
        description:
            "An e-commerce website that deals in different varieties of flowers for special occasions.",
        tags: [
            {
                name: "HTML",
                color: "html",
            },
            {
                name: "css",
                color: "blue-text-gradient",
            },
            {
                name: "JavaScript",
                color: "javascript",
            },
            {
                name:"JSON Server",
                color:"green-text-gradient"
            }
        ],
        image: prettypetals,
        source_code_link: "https://github.com/git-rishab/judicious-rice-4024",
        deployed_link:"https://theprettypetals.netlify.app/"
    },
    {
        name: "Naukri (clone)",
        description:
            "Clone of naukri.com, It is a website where job recruiters can come and post for job opportunities and the people who needs job can apply for the same",
        tags: [
            {
                name: "HTML",
                color: "html",
            },
            {
                name: "CSS",
                color: "blue-text-gradient",
            },
            {
                name: "JavaScript",
                color: "javascript",
            },
        ],
        image: jobsearch,
        source_code_link: "https://github.com/git-rishab/indigo-oven-1251",
        deployed_link:"https://joyful-malasada-2d0d65.netlify.app/"
    },
    {
        name: "Naukri (clone)",
        description:
            "Clone of naukri.com, It is a website where job recruiters can come and post for job opportunities and the people who needs job can apply for the same",
        tags: [
            {
                name: "HTML",
                color: "html",
            },
            {
                name: "CSS",
                color: "blue-text-gradient",
            },
            {
                name: "JavaScript",
                color: "javascript",
            },
        ],
        image: jobsearch,
        source_code_link: "https://github.com/git-rishab/indigo-oven-1251",
        deployed_link:"https://joyful-malasada-2d0d65.netlify.app/"
    },
];

export { technologies, projects };