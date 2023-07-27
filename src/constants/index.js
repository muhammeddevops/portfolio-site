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
  meta,
  starbucks,
  oakwell,
  mremovals,
  northcoders,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  bootstrap,
  jest,
  mkbackend,
  siteConstruction,
  mkgames,
  portfolio,
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
    title: "Front-end Developer",
    icon: web,
  },
  {
    title: "Back-end Developer",
    icon: backend,
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
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Bootstrap CSS",
    icon: bootstrap,
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
    name: "Jest",
    icon: jest,
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
    title: "Trainee Software Engineer",
    company_name: "Northcoders",
    icon: northcoders,
    iconBg: "#FFFFFF",

    date: "Jan 2023 - Present",
    points: [
      "Developed valuable experience and knowledge in various programming languages, software development frameworks, and web development tools.",
      "Mastered skills in JavaScript, React, SQL, and Node.js, gaining expertise in modern web development technologies.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Worked on solo and group projects, gaining a deep understanding of the software development life cycle, including test-driven development, design, implementation, and testing",
      "Successfully presented solutions feedback and code implementations during stand up sessions, enhancing the team’s collective knowledge.",
    ],
  },
  {
    title: "Administration Manager",
    company_name: "Marriott Removals",
    icon: mremovals,
    iconBg: "#FFFFFF",
    date: "Aug 2021 - Aug 2022",
    points: [
      "Revamped removal evaluation procedures, which drove a significant boost in operational efficiency and improved customer satisfaction. By achieving streamlined workflows and eliminating bottlenecks, I was able to reduce service prices, providing clients with enhanced value and a seamless experience.",
      "Analysed performance metrics and response rates to identify key areas for improvement. I implemented training programs for new staff leading to an increase in productivity. ",
    ],
  },
  {
    title: "Hotel Manager",
    company_name: "Oakwell Hotel",
    icon: oakwell,
    iconBg: "#383E56",
    date: "Nov 2017 - May 2021",
    points: [
      "Ensured complete customer satisfaction through excellent service and efficient housekeeping management",
      "Achieved considerable growth in repeat customers via data-driven marketing and record-keeping.",
      "Reduced operational costs by making changes to breakfast routines and staffing",
      "As a hotel manager in a small family-run bed and breakfast, versatility was essential, and I embraced the many hats I wore.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I had the pleasure of being Muhammed's mentor during his time at Northcoders. Muhammed was a joy to have on the course. He actively participated in lectures and was very passionate on the sprints. He is a brilliant problem solver and has excellent teamwork and communication skills. I have no doubt he would be an asset in any software development role.",
    name: "Rayhaan Ugharadar",
    designation: "Mentor",
    company: "Northcoders",
    image:
      "https://media.licdn.com/dms/image/C4E03AQEgylloJ3YtVg/profile-displayphoto-shrink_100_100/0/1647021594515?e=1695254400&v=beta&t=beC2qfjm0d96eroB6ZPMT6HKle2lmR4N0pOJDvzsmo4",
  },
  {
    testimonial: `
      Muhammed and I trained together during our time at Northcoders and worked together on several small projects. It was always a pleasure to work with Muhammed, both because of his strong coding ability and his fantastic people skills. Working through tough problems with him was always a fun, informative experience and he is a naturally analytical, creative problem solver who clearly loves to learn and is driven to understand the tools he works with deeply and thoroughly. Muhammed is able to explain his thought processes in a clear and approachable way and fosters a really friendly, fun and collaborative environment during paired projects. He is full of creative ideas and is always open to trying the ideas of others, and was supportive of myself and other trainees even when we were working on different projects, providing valuable guidance and help for tough problems. I know that any organisation that he works for will be lucky to have him - he's a brilliant problem solver and a brilliant colleague.`,
    name: "Dave Smith",
    designation: "Junior Software Engineer",
    company: "Northcoders",
    image:
      "https://media.licdn.com/dms/image/D4D03AQGiUFxVUUMvfQ/profile-displayphoto-shrink_800_800/0/1675982611406?e=1695859200&v=beta&t=19hTyidGjZXVu9kuJToVjOS8X34FlZ_I_cY5kC4nNR0",
  },
  {
    testimonial:
      "I was Muhammed's mentor during his time on the Northcoders bootcamp in which he showed passion and determination to complete the course. He also contributed to the friendly and jovial vibes of the group of which he was a member. I am sure Muhammed will make an excellent software developer as well as an excellent team member.",
    name: "August Aldred",
    designation: "Software Engineer",
    company: "Northcoders",
    image:
      "https://media.licdn.com/dms/image/D4E03AQETR26_QmWCsA/profile-displayphoto-shrink_800_800/0/1670690498185?e=1695859200&v=beta&t=_82YviZJpjHUYyiF_p3YpH8soHHJd_xqEi9eBJfs98s",
  },
];

const projects = [
  {
    name: "MK Games Back-end Server",
    description:
      "A backend service to host MK Games, which provides data and information to the front end architecture. You can access the application programmatically by fetching, posting, updating, and deleting data through a client/user",
    tags: [
      {
        name: "express",
        color: "blue-text-gradient",
      },
      {
        name: "SQL",
        color: "green-text-gradient",
      },
      {
        name: "jest",
        color: "pink-text-gradient",
      },
      {
        name: "supertest",
        color: "pink-text-gradient",
      },
    ],
    image: mkbackend,
    source_code_link: "https://github.com/muhammeddevops/nc-games-project",
    live_link: "https://nc-games-uawn.onrender.com/api",
  },
  {
    name: "MK Games",
    description:
      "MK Games is a platform dedicated to content rating and discussions for social board games. The website features various game reviews, which are divided into categories. Users can  browse through reviews easily with the use of sorting, categorisation, and pagination. They can also contribute their opinions through curated ratings, upvoting or downvoting using the provided API. Furthermore, users have the ability to leave comments on existing reviews, which they can also delete. Additionally, users are welcome to post their own reviews, enriching the platform with diverse perspectives.",
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
        name: "bootstrap",
        color: "pink-text-gradient",
      },
    ],
    image: mkgames,
    source_code_link: "https://github.com/muhammeddevops/nc-games-fe",
    live_link: "https://mk-board-games.netlify.app/",
  },
  {
    name: "Portfolio Project",
    description: "My portfolio site",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "three.js",
        color: "green-text-gradient",
      },
      {
        name: "framer-motion",
        color: "pink-text-gradient",
      },
      {
        name: "tailwindcss",
        color: "blue-text-gradient",
      },
      {
        name: "emailjs",
        color: "green-text-gradient",
      },
    ],
    image: portfolio,
    source_code_link: "https://github.com/muhammeddevops/portfolio-site",
    live_link: "",
  },
  {
    name: "New projects coming soon",
    description: "Project description  ",
    tags: [
      {
        name: "next.js",
        color: "blue-text-gradient",
      },
    ],
    image: siteConstruction,
    source_code_link: "https://github.com/",
    live_link: "",
  },
];

export { services, technologies, experiences, testimonials, projects };
