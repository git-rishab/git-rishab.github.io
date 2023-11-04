import {
    mobile,
    backend,
    creator,
    web,
    mui,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    vue,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    next,
    nuxt,
    prisma,
    mongoose,
    gitHub,
    express,
    figma,
    docker,
    meta,
    starbucks,
    masai,
    blowhorn,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
    mail,
    mobilePhone,
    gitBlack,
    linkedin,
    call,
    email,
    filmstudio,
    filmstudio1,
    filmstudio2,
    filmstudio3,
    filmstudio4,
    filmstudiomob1,
    filmstudiomob2,
    filmstudiomob3,
    filmstudiomob4,
    airbnb,
    airbnb1,
    airbnb2,
    airbnb3,
    airbnb4,
    airbnb5,
    airbnb6,
    airbnb7,
    airbnbmob1,
    airbnbmob2,
    airbnbmob3,
    airbnbmob4,
    airbnbmob5,
    whatsapp,
    whatsapp1,
    whatsapp2,
    whatsapp3,
    whatsapp4,
    whatsapp5,
    whatsappmob1,
    whatsappmob2,
    whatsApp,
    webDesign,
    frontend,
    backendTech,
    webOpt,
    defination,
    planning,
    development,
    delivery,
    developmentProcess,
    flask,
    python,
    mysql,
    wlc,
    parenting1,
    parenting2,
    parenting3,
    talkies1,
    talkies2,
    talkies3,
    talkies4,
    driveaway1,
    driveaway2,
    driveaway3,
    driveaway4,
    driveaway5,
    driveaway6
} from "../assets";

export const navLinks = [
    // {
    //     id: "",
    //     title: "Home",
    // },
    {
        id: "about",
        title: "About",
    },
    {
        id: "skills",
        title: "Skills",
    },
    {
        id: "work",
        title: "Work",
    },
    {
        id: "projects",
        title: "Projects",
    },
    // {
    //     id: "feedback",
    //     title: "Testimonials",
    // },
    {
        id: "contact",
        title: "Contact",
    },
];

const services = [
    // {
    //     title: "Web Developer",
    //     icon: web,
    // },
    // {
    //     title: "React Native Developer",
    //     icon: mobile,
    // },
    // {
    //     title: "Backend Developer",
    //     icon: backend,
    // },
    // {
    //     title: "Content Creator",
    //     icon: creator,
    // },
    {
        title: "Web Design",
        content: "Creating visually appealing and user-friendly websites that adapt to different screen sizes and devices.",
        img: webDesign,
    },
    {
        title: "Front-End Dev",
        content: "Implementing the client-side functionality of a website using HTML, CSS, and JavaScript.",
        img: frontend,
    },
    {
        title: "Back-End Dev",
        content: "Building the server-side components and functionality of a website using  Node.js.",
        img: backendTech,
    },
    {
        title: "Web Optimization",
        content: "Improving website performance by optimizing page load times, and minimizing resource usage.",
        img: webOpt,
    }
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
        name: "TypeScript",
        icon: typescript,
    },
    {
        name: "React JS",
        icon: reactjs,
    },
    {
        name: "Tailwind CSS",
        icon: tailwind,
    },
    {
        name: "mui",
        icon: mui,
    },
    {
        name: "Redux Toolkit",
        icon: redux,
    },
    {
        name: "Node JS",
        icon: nodejs,
    },
    {
        name: "Express",
        icon: express,
    },
    {
        name: "MongoDB",
        icon: mongodb,
    },
    {
        name: "MySQL",
        icon: mysql,
    },
    {
        name: "Python",
        icon: python,
    },
    {
        name: "Flask",
        icon: flask,
    },
    {
        name: "git",
        icon: git,
    },
];

const experiences = [
    {
        title: "Internship",
        company_name: "Masai",
        icon: masai,
        iconBg: "#E6DEDD",
        date: "October 2022 - July 2023",
        company_link: "https://masaischool.com",
        points: [
            "Created multiple clones of different web application.",
            "Built authentication and integrated it with the front-end.",
            "Laid out the database schema and build the REST API for the same.",
        ],
    },
    {
        title: "Software Developer",
        company_name: "WLC Technology",
        icon: wlc,
        iconBg: "#E6DEDD",
        date: "September 2023 - Present",
        company_link: "https://wlc.technology",
        points: [
            "Developing and maintaining web applications using React.js, Node.js and other related technologies.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
        ],
    },
];

const testimonials = [
    {
        testimonial:
            "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
        name: "Sara Lee",
        designation: "CFO",
        company: "Acme Co",
        image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
        testimonial:
            "I've never met a web developer who truly cares about their clients' success like Rick does.",
        name: "Chris Brown",
        designation: "COO",
        company: "DEF Corp",
        image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
        testimonial:
            "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
        name: "Lisa Wang",
        designation: "CTO",
        company: "456 Enterprises",
        image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
];

const projects = [
    {
        name: "Talkies",
        short: "A Screen Sharing Application",
        bg: "bg-[#5F9FFE]",
        description:
            "Talkies is a real-time communication platform that facilitates user connections through chat rooms, screen share rooms, and video call rooms.",
        // "Web-based platform that allows users to see, search, and get updates regarding the new and latest movies along with trailer cover pic and lot more info.",
        showcasePage: "/talkies",
        tags: [
            {
                name: "Socket.io",
                color: "blue-text-gradient",
            },
            {
                name: "Node.js",
                color: "green-text-gradient",
            },
            // {
            //     name: "tailwind",
            //     color: "pink-text-gradient",
            // },
        ],
        image: talkies1,
        source_code_link: "https://github.com/git-rishab/Real-time-Screen-Sharing-Application",
        live_project_link: "https://talkies-lets-connect.netlify.app/",
        showCase: {
            name: "Talkies",
            short: "A Screen Sharing Application",
            source_code_link: "https://github.com/git-rishab/Real-time-Screen-Sharing-Application",
            live_project_link: "https://talkies-lets-connect.netlify.app/",
            content: [
                "Developed Talkies, a web-based screen sharing application that offers seamless connectivity for screen sharing, camera sharing, and text messaging. It was built using a versatile tech stack, including HTML, CSS, JavaScript, Node.js, MongoDB, Socket.io, and WebRTC for real-time communication.",
                "During the development process, I encountered initial challenges with the implementation of WebRTC. To overcome these challenges, I extensively referred to official documentation and watched instructional videos on YouTube. Through persistent effort and learning, I gained a solid grasp of WebRTC and successfully integrated it into the platform.",
                "One of the prominent features of Talkies is its integration with WebRTC, which provides users with access to a diverse connectivity.",
                "I take great pride in Talkies, a user-friendly communication platform that enhances the screen sharing experience and fosters effective real-time interaction."
            ],
            problemStatement: "Remote working and meetings have become a common practice in today's digital age. However, one of the significant challenges people encounter during remote interactions is the uncertainty about the quality, effectiveness, and productivity of these virtual sessions. Oftentimes, individuals find themselves in unproductive or unsatisfactory meetings, resulting in a sense of wasted time and missed opportunities.",
            images: {
                homepage: talkies1,
                tech: [html, css, javascript, , nodejs, mongodb],
                developmentProcess,
                problemStatement: talkies1,
                myProcess: [defination, planning, development, delivery],
                figma: [talkies1, filmstudio1],
                product: [talkies1, talkies2, talkies3, talkies4],
            },
            learnings: [
                "During the development process, I gained extensive knowledge of how to implement external APIs with API keys, enabling seamless integration of data and services from external sources.",
                "My frontend skills underwent significant improvement as I focused on writing efficient and optimized code, enhancing overall performance, and leveraging component reusability.",
                "I also learned the importance of maintaining a well-organized file and folder structure in the project",
                "Throughout the project, I honed my proficiency in Socket.io and successfully implemented various features while adhering to industry-standard best practices. This hands-on experience allowed me to deliver a user-friendly and robust application, showcasing the power and capabilities of Socket.io in building modern web applications.",
            ],
            challenges: [
                "During the development of this project, I faced several challenges that required thoughtful consideration and problem-solving. One of the main hurdles was selecting the appropriate tools and technologies for the project. I engaged in brainstorming sessions and carefully evaluated various options before making informed decisions.",
                "Working with Socket.io and WebRTC was a novel experience for me, and I encountered some difficulties while implementing their features. However, I dedicated time to learning and resolving these issues to ensure smooth integration and functionality.",
                "Additionally, the project had time constraints, which added pressure to deliver results within a specific timeframe. Despite this challenge, I managed my time effectively and prioritized tasks to meet the project's goals successfully.",
                "Throughout the process, I remained resilient and proactive in overcoming these obstacles, resulting in the delivery of a high-quality product. This experience has enriched my skills and problem-solving abilities, empowering me to tackle future projects with greater confidence."
            ],
        }
    },
    {
        name: "Drive Away",
        short: "A Car Rent Application",
        bg: "bg-[#56B0B9]",
        description:
            "This Application allows users to rent cars according to their needs and also enables car owners to list their cars for rent. With features like 2FA authentication, Google OAuth login, and payment integration, it provides a secure and convenient experience.",
        // "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
        showcasePage: "/driveaway",
        tags: [
            {
                name: "react",
                color: "blue-text-gradient",
            },
            {
                name: "Node.js",
                color: "green-text-gradient",
            },
        ],
        image: driveaway1,
        source_code_link: "https://github.com/git-rishab/car-rental-application",
        live_project_link: "https://drive-away.netlify.app/",
        showCase: {
            name: "Drive Away",
            short: "A Car Rent Application",
            source_code_link: "https://github.com/git-rishab/car-rental-application",
            live_project_link: "https://drive-away.netlify.app/",
            content: [
                "I developed a web-based Airbnb clone inspired by the popular platform. Users can explore and book various accommodations like houses and villas, offering a personalized booking experience.",
                "The project used a robust tech stack, including Next.js for server-side rendering and routing, TypeScript for code robustness, Prisma for simplified database management, MongoDB for scalability, Tailwind CSS for custom UI components, and Cloudinary for efficient image storage.",
                "Although TypeScript presented some initial challenges, I gained a solid understanding and successfully completed the project. To enhance security, I integrated GitHub and Google authentication for signup and login.",
                "The application's main features include accommodation exploration and bookings. Property owners can list their properties for rent, expanding the options available to users. The project delivers a seamless and user-friendly experience, and I'll continue to improve it based on user feedback.",
            ],
            problemStatement: "People encounter challenges when seeking reliable, user-friendly platforms to rent accommodations. Property owners also face difficulties when listing and managing their properties for rent. This project addresses these issues, aiming to provide a seamless solution for both renters and property owners.",
            images: {
                homepage: driveaway1,
                tech: [reactjs, redux, express, nodejs, mongodb],
                developmentProcess,
                problemStatement: driveaway2,
                myProcess: [defination, planning, development, delivery],
                figma: [driveaway1, driveaway2],
                product: [driveaway1, driveaway2, driveaway3, driveaway4, driveaway5, driveaway6],
            },
            learnings: [
                "Gained extensive knowledge of full authentication and authorization implementation, including the use of industry-standard security protocols.",
                "Sharpened my backend skills, specifically in optimizing database queries, improving performance, and handling server-side logic.",
                "Learned how to properly handle files, including file upload, storage, and retrieval, ensuring that the app's data is organized and easily accessible while keeping it secure.",
                "Acquired proficiency in NextJS and implemented various features utilizing industry-standard best practices.",
            ],
            challenges: [
                "As i developed this project, I encountered various obstacles. One my biggest challenges was choosing the right tools and technologies for the project.",
                "I conducted brainstorming and carefully weighed my options before making a decision. Furthermore, using ReactJS was a new experience for me, and I encountered difficulties while implementing its features. Finally, I had to work under time constraints, which added pressure to the project.",
                "However, I worked effectively to overcome these obstacles and ultimately delivered a high-quality product.",
            ],
        }
    },
    {
        name: "Parenting Assist",
        short: "A Parenting Chat Application",
        bg: "bg-[#1F1D2B]",
        description:
            "AI-driven Parenting Assist chat app offers insightful guidance to enhance child-rearing. Elevate your parenting journey with intelligent responses and support.",
        // "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
        showcasePage: "/parentingassist",
        tags: [
            {
                name: "Angular",
                color: "blue-text-gradient",
            },
            {
                name: "mongodb",
                color: "green-text-gradient",
            },
        ],
        image: parenting1,
        source_code_link: "https://github.com/git-rishab/parenting-assist",
        live_project_link: "https://parent-guide.vercel.app/",
        showCase: {
            name: "Parenting Assist",
            short: "A Parenting Chat Application",
            source_code_link: "https://github.com/git-rishab/parenting-assist",
            live_project_link: "https://parent-guide.vercel.app/",
            content: [
                "Created a web-based parenting chat application that harnesses the power of AI to provide valuable insights and support to parents in understanding and assisting their children with emotional challenges.",
                "Developed using Angular for frontend development and MongoDB for robust data management. Fine-tuned the AI algorithms for improved results.",
                "Overcame initial challenges in the AI implementation and dedicated efforts to ensure the application delivers experienced and reliable outcomes.",
                "Key features include real-time chat, emotional status indicators, and expert guidance for parents.",
                "This project enhanced my proficiency in frontend technologies and provided hands-on experience in AI integration, making it a valuable tool for parents seeking support and understanding."
            ],
            problemStatement: "Many parents struggle to effectively assist their children with emotional challenges. There is a need for a user-friendly chat application that leverages AI to provide parents with experienced insights and support. The challenge is to create a platform that empowers parents to connect with and nurture their children's emotional well-being in a meaningful way.",
            images: {
                homepage: parenting1,
                tech: [javascript, express, mongodb],
                developmentProcess,
                problemStatement: whatsapp,
                myProcess: [defination, planning, development, delivery],
                figma: [parenting1, parenting2],
                product: [parenting1, parenting2, parenting3],
            },
            learnings: [
                "Gained extensive knowledge of google firebase authentication and authorization implementation, including the use of industry-standard security protocols.",
                "Sharpened my backend skills, specifically in optimizing database queries, improving performance, and handling server-side logic.",
                "Learned how to properly handle files, including file upload, storage, and retrieval, ensuring that the app's data is organized and easily accessible while keeping it secure.",
                "Learned the use of socket.io, zegocloud, cloudinary and lot more other plugins in this project",
                "Acquired proficiency in NextJS and implemented various features utilizing industry-standard best practices.",
            ],
            challenges: [
                "During the development of this project, I encountered several obstacles, with one of the biggest challenges being selecting the most suitable tools and technologies for the task at hand. To overcome this challenge, I conducted thorough brainstorming sessions and carefully evaluated various options before making informed decisions.",
                "However, I approached these challenges with determination and a strong will to learn. I extensively researched documentation and watched tutorial videos on YouTube to gain a solid understanding and expertise. This proactive approach allowed me to overcome these obstacles effectively and deliver a high-quality product.",
                "The project's successful completion not only showcases my ability to tackle complex technical challenges but also highlights my dedication to continuous learning and improvement as a developer."
            ],
        }
    },
];

const contactInfo = [
    {
        name: "Git",
        content: "github.com/git-abhijeet",
        icon: gitBlack,
    },
    {
        name: "LinkedIn",
        content: "www.linkedin.com/in/abhijeet-kumar-0238301bb/",
        icon: linkedin,
    },
    {
        name: "Email",
        content: "abhijeet.kr.chaurasiya@gmail.com",
        icon: mail,
    },
    {
        name: "Phone",
        content: "+91 9835-882-844",
        icon: call,
    }
]

export { services, technologies, experiences, testimonials, projects, contactInfo };