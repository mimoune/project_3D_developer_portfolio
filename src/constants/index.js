import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  ccg,
  sobrus,
  sofrecom,
  intelcom,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "UI Integrator",
    icon: creator,
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
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
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
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Fullstack js Developer",
    company_name: "Sobrus",
    icon: sobrus,
    iconBg: "#383E56",
    date: "Juil 2018 - Oct 2022",
    points: [
      "Developing and maintaining web applications using React.js, Nestjs and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "React Native Developer",
    company_name: "Sofrecom",
    icon: sofrecom,
    iconBg: "#E6DEDD",
    date: "Jan 2017 - Feb 2018",
    points: [
      "Developing cross-platform mobile applications using React Native framework.",
      "Translating UI/UX designs and wireframes into high-quality code and ensuring the technical feasibility of the same.",
      "Collaborating with the product, design, and development teams to define app features and functionality.",
      "Implementing state management using Redux or similar libraries to manage complex app states.",
      "Developing custom native modules for React Native applications to access native platform features.",
      "Staying up-to-date with the latest trends and advancements in React Native and mobile application development.",
    ],
  },
  {
    title: "Web Developer",
    company_name: "Intelcom",
    icon: intelcom,
    iconBg: "#383E56",
    date: "Jan 2022 - Jan 2023",
    points: [
      "Developing dynamic and responsive web applications using a range of web technologies such as HTML, CSS, and JavaScript.",
      "Collaborating with designers, product owners, and other developers to translate wireframes, mockups, and business requirements into high-quality code.",
      "Writing maintainable, scalable, and efficient code using modern programming techniques and best practices.",
      "Testing and debugging web applications to ensure they meet high-quality standards.",
    ],
  },
  {
    title: "Full stack Developer",
    company_name: "CCG",
    icon: ccg,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - Present",
    points: [
      "Developing dynamic and responsive web applications using a range of web technologies such as HTML, CSS, and JavaScript",
      "Staying up-to-date with the latest trends and advancements in web development and emerging technologies.",
      "Ensuring the security and data privacy of web applications and user data.",
      "Deploying web applications to cloud platforms such as AWS or Azure, or hosting them on traditional web servers such as Apache or Nginx.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "The attention to detail that Mimoune puts into their work is unmatched.",
    name: "Nissrine MAHIR",
    designation: "PM",
    company: "Sobrus",
    image: "https://media.licdn.com/dms/image/C5603AQF_MLuXg7kbcQ/profile-displayphoto-shrink_100_100/0/1623798625922?e=1684368000&v=beta&t=OQwjLG5ss7RdL56X-Yhb7_yEf50L8DFm5cfqY1iSuOc",
  },
  {
    testimonial:
      "If you want a developer who truly cares about the success of your project, look no further than Mimoune.",
    name: "Ridouane Tansouft",
    designation: "Developer",
    company: "Sobrus",
    image: "https://media.licdn.com/dms/image/C4D03AQFBnbz7ouqdCA/profile-displayphoto-shrink_400_400/0/1540217894075?e=1684368000&v=beta&t=aTDWYVfj4FhiunySHBJ_DEyKhK6hgacYJD2-OQhFLbA",
  },
  {
    testimonial:
      "I was blown away by the level of expertise and professionalism that Mimoune brought to our project.",
    name: "Miloudi Belafkih",
    designation: "developer",
    company: "Sofrecom",
    image: "https://media.licdn.com/dms/image/C5603AQGJ8IKRvYKklA/profile-displayphoto-shrink_100_100/0/1574176106002?e=1684368000&v=beta&t=ZaRwDkbLKSpxxg4xYMXssBUSvdd33b78eSqc8rL6a9I",
  },
];

const projects = [
  {
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
