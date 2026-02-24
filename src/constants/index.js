import project1 from "../assets/projects/StudyApp.png";
import project2 from "../assets/projects/ECommerce.png";
import project5 from "../assets/projects/RecipeApp.jpeg";
import project4 from "../assets/projects/ContentDetective.png";
import project3 from "../assets/projects/WeatherApp.png";
import project6 from "../assets/projects/quizApplication.png";
import project7 from "../assets/projects/auth_flow.png";

export const HERO_CONTENT = `Software development engineer with hands-on experience building scalable web products across ed-tech platforms. I specialize in React.js and Next.js, with strong focus on performance optimization, SEO-first development, and reusable component architecture. I have delivered end-to-end features such as booking flows, curriculum explorers, dashboard modules, and content automation tools. I enjoy owning product experiences, solving real user problems, and building reliable interfaces that are fast, accessible, and maintainable.`;

export const ABOUT_TEXT = `I am Jyoti Choudhary, a software development engineer with experience building production-ready web applications using React.js, Next.js, JavaScript, TypeScript, and Tailwind CSS. I focus on creating responsive, accessible interfaces and improving performance through techniques like lazy loading, caching, code splitting, and efficient rendering. I hold a Master of Computer Applications from Vellore Institute of Technology and enjoy collaborating across teams to deliver high-impact product features with clean, maintainable code.`;

export const EXPERIENCES = [
  {
    duration: "May 2025 - Present",
    role: "Software Development Engineer 1",
    company: "BrightChamps, Bangalore",
    description:
      "Single-handedly owned and maintained brightchamps.com for over a year, building server-side rendered pages in Next.js.",
    highlights: [
      "Built pages with caching and performance optimization for fast page loads.",
      "Improved website performance through lazy loading, caching strategies, and code splitting, significantly reducing load times and enhancing Core Web Vitals.",
      "Developed key product features end-to-end including booking flow, course filters, curriculum explorer, hackathon pages, and teacher listing, directly impacting user engagement.",
      "Built SEO-optimized pages and blog templates integrated with an internal CMS, enabling content teams to compose pages using reusable components without developer intervention.",
      "Developed worksheet pages and a curriculum-to-PDF generation feature, automating content delivery for students and educators.",
    ],
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Redux",
      "SCSS",
      "SEO",
      "CMS",
    ],
  },
  {
    duration: "August 2024 - May 2025",
    role: "Software Development Engineer Intern",
    company: "LightChamps, Bangalore",
    description:
      "Contributed to building a revamped student dashboard in React and Next.js, enabling students to join classes, explore curriculum, and track progress in an optimized interface.",
    highlights: [
      "Built a microfrontend-based Feed feature within the dashboard repository, implementing list virtualization for infinite scrolling to handle large data sets efficiently.",
      "Developed multiple dashboard modules including Rewards, Calendar, and Certificates pages, improving student engagement and platform usability.",
    ],
    technologies: [
      "React",
      "Next.js",
      "Microfrontend",
      "Virtualization",
      "JavaScript",
    ],
  },
  {
    duration: "October 2023 - February 2024",
    role: "Software Development Engineer Intern",
    company: "InCruiter, Bangalore",
    description:
      "Developed responsive, accessible web pages and reusable components using React.js, Next.js, JavaScript, and Tailwind CSS under the guidance of senior engineers.",
    highlights: [
      "Gained hands-on experience in the software development lifecycle (SDLC), including code reviews, QA testing, and iterative deployment workflows.",
      "Collaborated with senior developers to build optimized UI components, applying performance best practices such as memoization and efficient re-rendering.",
      "Used Chrome DevTools and Lighthouse to profile and debug frontend issues, improving page performance and accessibility scores.",
    ],
    technologies: [
      "React.js",
      "Next.js",
      "JavaScript",
      "Tailwind CSS",
      "Chrome DevTools",
      "Lighthouse",
    ],
  },
];

export const PROJECTS = [
  {
    title: "StudyApp (FullStack ed-tech platform) ",
    image: project1,
    description: `Its aims to provide a seamless and interactive learning experience for students, making education more accessible and engaging
 an Instructor panel for instructors to showcase their expertise and connect with learners across the globe.

    Providing Email Verification, Reset password and Change password facilities 
    Utilized Razorpay,a popular payment gateway solution,Implemented Nodemailer for seamless email communication 
    Integrated MongoDB atlas, Cloudinary,a cloud based media management platform. `,
    technologies: [
      "React",
      "TailwindCss",
      "Redux",
      "Node.js",
      "MongoDB",
      "ExpressJS",
    ],
    projectLink: `https://studynotion-frontend.vercel.app/`,
  },
  {
    title: "FullStack E-Commerce Website",
    image: project2,
    description: `Build this e-commerce website using React and Firebase having Admin and User Panels.
    Admin can add products and track orders and users details etc.
    Providing facilities with choose products and set prices by filtering,enabling dark and light modes.
    For payment Integration,utilized RazorPay, Cloud Firestore used for data storage which is a NoSQL database. `,
    technologies: ["Html/Css3", "React", "Redux", "Firebase", "FireStore"],
    projectLink: `https://complete-ecommerce-project.vercel.app/`,
  },
  {
    title: "FoodyCafe (FullStack Recipe application) ",
    image: project5,
    description: `This websitebuilt with Mern Stack where Users can add and Saves their Recipes data,  offering flexibility and scalability.
    Provided google authentication and authorization for login and Signup. `,
    technologies: [
      "React",
      "TailwindCss",
      "Redux",
      "MongoDB",
      "Node.js",
      "ExpressJs",
    ],
  },

  {
    title: "Online Quiz Application",
    image: project6,
    description: `The Online Quiz Platform is a web-based application that allows users to create, take, and
analyze quizzes. The platform is built using React.js and integrates with the Open Trivia
Database API to fetch quiz questions. The application features include user input validation,
dynamic question display, a timer for each question, and result analysis with a pie chart. `,
    technologies: ["React", "TailwindCss", "JavaScript", "Material UI"],
    projectLink: `https://react-quiz-application-w65u-git-main-jyoti-choudharys-projects.vercel.app/`,
  },
  {
    title: "Backend FullAuth System",
    image: project7,
    description: `This project is a backend authentication system. It
includes features for user registration, login, OTP (One-Time Password) generation and
verification, and password reset functionalities. The system uses JWT (JSON Web Tokens) for
authentication and bcrypt for password hashing. Nodemailer Module is used for sending emails. `,
    technologies: ["Node.js", "Express.js", "MongoDB", "NodeMailer"],
    projectLink: `https://github.com/Jyoti1042/BackendAuthApplication`,
  },
  {
    title: "Dev Detective (Robust Application for Content Detection) ",
    image: project4,
    description: `Used a GitHub API which fetch and show realtime details of any valid github user 
     Used JavaScript functionlities and css flex which made it fully responsive and enabled dark mode. `,
    technologies: ["HTML/Css3", "Tailwind", "JavaScript", "Github APIs"],
    projectLink: `https://jyoti1042.github.io/ContentDetectiveApp/`,
  },

  {
    title: "Weather Application",
    image: project3,
    description: `Its aim to get instant access to crucial weather details including 
 - City name and country flag 🏙️🌐
 - Weather description 🌤️
 - Weather icon for current conditions ☔❄️
 - Temperature in Celsius 🌡️
 - Wind speed 💨
 - Humidity and cloudiness percentages. `,
    technologies: ["HTML", "TailwindCss", "JavaScript", "APIs"],
    projectLink: `https://jyoti1042.github.io/weatherapp/`,
  },
];

export const CONTACT = {
  address: "Bangalore,Karnataka (India)",
  phoneNo: "+91 9817524677",
  email: "jchoudhary6767@gmail.com",
};
