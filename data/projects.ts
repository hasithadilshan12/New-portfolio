import { Project } from "@/types/project";

export const projects: Project[] = [
  {
  id: 1,
  title: "UniNav",
  slug: "uninav",
  category: "Mobile Application",
  status: "Completed",
  description:
    "A mobile application developed to help university students access important campus information and services more easily.",

  image: "/images/projects/uninav.png",
  galleryType: "mobile",

  technologies: [
    "Java",
    "Android Studio",
    "Firebase",
  ],

  role: "Mobile Application Developer",

  projectType: "University Project",

  overview:
    "UniNav is a mobile application designed to provide university students with easier access to useful campus-related information through a single mobile platform.",

  features: [
    "User-friendly mobile interface",
    "Access to university-related information",
    "Firebase integration",
    "Mobile navigation between application features",
  ],

  challenges: [
    "Structuring the mobile application clearly",
    "Connecting application features with Firebase",
    "Creating an interface that is simple for students to use",
  ],

  learned: [
    "Building Android applications using Java",
    "Working with Firebase services",
    "Designing mobile user interfaces",
    "Organizing a complete mobile application project",
  ],

  githubUrl:
    "https://github.com/hasithadilshan12/UNINAV.git",

  featured: true,
},
  {
  id: 2,
  title: "CampusMatrix",
  slug: "campusmatrix",
  category: "Full-Stack Web Application",
  status: "In Development",

  description:
    "A team-based university platform currently in development, designed with a modern web interface and planned full-stack functionality.",

  image: "/images/projects/campusmatrix.png",
  galleryType: "web",

  technologies: [
    "React",
    "Vite",
    "Tailwind CSS",
    "Node.js",
    "Express.js",
    "MongoDB",
  ],

  role: "Frontend Development",

  projectType: "Team Project",

  overview:
    "CampusMatrix is an ongoing team project focused on building a modern web-based platform for a university environment. The frontend is being developed with React and Tailwind CSS, with backend technologies planned as the project continues.",

  features: [
    "Modern responsive user interface",
    "Component-based frontend architecture",
    "University-focused web platform",
    "Planned full-stack integration",
  ],

  challenges: [
    "Designing a consistent interface across different parts of the application",
    "Organizing reusable React components",
    "Coordinating development within a team project",
    "Preparing the frontend for future backend integration",
  ],

  learned: [
    "Building interfaces using React",
    "Styling responsive applications with Tailwind CSS",
    "Working within a team development workflow",
    "Planning frontend and backend integration",
  ],

  githubUrl:
    "https://github.com/CampusMatrix-Org/CampusMatrix-project.git",

  featured: true,
},
  {
  id: 3,
  title: "Votex",
  slug: "votex",
  category: "Web & Mobile Application",
  status: "In Development",

  description:
    "A team-based digital voting platform being developed across web and mobile interfaces to provide a modern and accessible voting experience.",

  image: "/images/projects/votex.png",
  galleryType: "web",

  technologies: [
    "React",
    "React Native",
    "Java",
    "MySQL",
    "Figma",
  ],

  role: "UI/UX Design & Development",

  projectType: "Team Project",

  overview:
    "Votex is an ongoing team project focused on developing a digital voting system with both web and mobile experiences. The project combines interface design, frontend development, backend technologies, and database integration as part of a complete software solution.",

  features: [
    "Web and mobile application interfaces",
    "Digital voting user experience",
    "Responsive and user-friendly interface design",
    "Planned backend and database integration",
  ],

  challenges: [
    "Designing a simple voting experience that users can easily understand",
    "Maintaining consistency between web and mobile interfaces",
    "Planning how different parts of the system will work together",
    "Collaborating with team members across different areas of development",
  ],

  learned: [
    "Designing application interfaces using Figma",
    "Planning applications for both web and mobile platforms",
    "Working collaboratively on a larger software project",
    "Understanding how frontend, backend, and database technologies connect",
  ],

  githubUrl:
    "https://github.com/Voteapp-Project/Vote-App.git",

  featured: true,
},
  {
  id: 4,
  title: "Mood Meal",
  slug: "mood-meal",
  category: "UI/UX Design",
  status: "Completed",

  description:
    "A mobile application UI/UX concept designed in Figma to create an engaging and easy-to-use food discovery experience based on the user's mood.",

  image: "/images/projects/mood-meal.png",
  galleryType: "mobile",

  technologies: [
    "Figma",
    "UI/UX Design",
    "Prototyping",
  ],

  role: "UI/UX Designer",

  projectType: "Design Project",

  overview:
    "Mood Meal is a mobile application design concept created in Figma. The project focuses on designing a simple and visually engaging experience that helps users explore meal options based on their mood.",

  features: [
    "Mobile-first user interface design",
    "Mood-based food discovery concept",
    "Consistent visual design across application screens",
    "Interactive prototype created in Figma",
  ],

  challenges: [
    "Creating a simple way for users to select their mood",
    "Designing an interface that feels visually engaging without becoming confusing",
    "Maintaining consistency across different mobile screens",
    "Organizing the user flow from mood selection to meal discovery",
  ],

  learned: [
    "Creating mobile interface designs in Figma",
    "Building interactive application prototypes",
    "Planning user flows before development",
    "Applying consistency to colors, spacing, and interface components",
  ],
  figmaUrl: "https://www.figma.com/proto/fqmPjzwSQmbLjMxd6cRCwA/UX-design-Group-project?page-id=0%3A1&node-id=14-8&viewport=1440%2C717%2C0.4&t=lnvvraRy4RLMrw9O-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=14%3A8",

  featured: true,
},
];