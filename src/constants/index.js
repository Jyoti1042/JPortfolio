import project1 from "../assets/projects/StudyApp.png";
import project2 from "../assets/projects/ECommerce.png";
 import project5 from "../assets/projects/RecipeApp.jpeg";
import project4 from "../assets/projects/ContentDetective.png";
import project3 from "../assets/projects/WeatherApp.png";
import project6 from "../assets/projects/quizApplication.png";
import project7 from "../assets/projects/auth_flow.png";

export const HERO_CONTENT = `I'm a passionate and dedicated MERN stack developer with a knack for creating seamless and 
responsive web applications.I am a Multitasker and always eager to learn new Technologies. My expertise lies in leveraging Reactjs, Node.js, Express.js, mongoDB and  to build efficient, scalable, and user-friendly solutions and wanted to work for an organization where I can enhance and utilize my skills and knowledge
 to grow along with the organization with full integrity and enthusiasm.`;

export const ABOUT_TEXT = `
I am Jyoti Choudhary, a 24-year-old, fully passionate and innovative person. In my master's program, I specialized in web development and completed many courses, including a comprehensive MERN Stack Web Development Bootcamp, reflecting my commitment to continuous learning.I am open to work opportunities in different locations around the world. On a personal level, my spirituality and positive outlook shine brightly. I have a deep love for outdoor wildlife and a strong desire to help the voiceless, reflecting my curiosity and
 admiration for the natural world. Aspiring to become a businesswoman,
  my unwavering dedication to continuous learning makes me a truly remarkable person, 
  both professionally and personally. `
export const EXPERIENCES = [
  {
    duration:"10 October 2023-28 Janurary 2024",
    role: "ReactJs Developer",
    company: "InCruiter(Banglore-Onsite)",
    description: `Contributed as a ReactJS intern at InCruiter Company, a leading interview service provider, supporting the development of core products.
    Identified and resolved IncBot and IncFeed-IncVid bugs, enhancing the stability and functionality of web applications 
Implemented responsive design principles to ensure seamless usability across various devices and screen sizes, improving overall accessibility and user engagement
`,
    technologies: ["React", "JavaScript","Redux" ,"TailwindCss",],
  },
 
];

export const PROJECTS = [
  {
    title: "StudyApp (FullStack ed-tech platform) ",
    image: project1,
    description:
   `Its aims to provide a seamless and interactive learning experience for students, making education more accessible and engaging
 an Instructor panel for instructors to showcase their expertise and connect with learners across the globe.

    Providing Email Verification,   Reset password and Change password facilities 
    Utilized Razorpay,a popular payment gateway solution,Implemented Nodemailer for seamless email communication 
    Integrated MongoDB atlas, Cloudinary,a cloud based media management platform. `,
        technologies: ["React", "TailwindCss", "Redux", "Node.js", "MongoDB", "ExpressJS"],
        projectLink:`https://studynotion-frontend.vercel.app/`
  },
  {
    title: "FullStack E-Commerce Website",
    image: project2,
    description:
    `Build this e-commerce website using React and Firebase having Admin and User Panels.
    Admin can add products and track orders and users details etc.
    Providing facilities with choose products and set prices by filtering,enabling dark and light modes.
    For payment Integration,utilized RazorPay, Cloud Firestore used for data storage which is a NoSQL database. `, 
        technologies: ["Html/Css3", "React", "Redux","Firebase", "FireStore"],
        projectLink:`https://complete-ecommerce-project.vercel.app/`
  },
  {
    title: "FoodyCafe (FullStack Recipe application) ",
    image: project5,
    description:
    `This websitebuilt with Mern Stack where Users can add and Saves their Recipes data,  offering flexibility and scalability.
    Provided google authentication and authorization for login and Signup. `, 
technologies: ["React", "TailwindCss", "Redux","MongoDB","Node.js","ExpressJs"],
 
  },
 
  {
    title: "Online Quiz Application",
    image: project6,
    description:
    `The Online Quiz Platform is a web-based application that allows users to create, take, and
analyze quizzes. The platform is built using React.js and integrates with the Open Trivia
Database API to fetch quiz questions. The application features include user input validation,
dynamic question display, a timer for each question, and result analysis with a pie chart. `, 
        technologies: ["React", "TailwindCss", "JavaScript","Material UI"],
        projectLink:`https://react-quiz-application-w65u-git-main-jyoti-choudharys-projects.vercel.app/`
  },
  {
    title: "Backend FullAuth System",
    image:project7,
    description:
    `This project is a backend authentication system. It
includes features for user registration, login, OTP (One-Time Password) generation and
verification, and password reset functionalities. The system uses JWT (JSON Web Tokens) for
authentication and bcrypt for password hashing. Nodemailer Module is used for sending emails. `, 
        technologies: ["Node.js", "Express.js", "MongoDB", "NodeMailer"],
        projectLink: `https://github.com/Jyoti1042/BackendAuthApplication`
  },
  {
    title: "Dev Detective (Robust Application for Content Detection) ",
    image: project4,
    description:
    `Used a GitHub API which fetch and show realtime details of any valid github user 
     Used JavaScript functionlities and css flex which made it fully responsive and enabled dark mode. `, 
        technologies: ["HTML/Css3", "Tailwind", "JavaScript","Github APIs"],
        projectLink:`https://jyoti1042.github.io/ContentDetectiveApp/`
  },
  
  {
    title: "Weather Application",
    image: project3,
    description:
    `Its aim to get instant access to crucial weather details including 
 - City name and country flag 🏙️🌐
 - Weather description 🌤️
 - Weather icon for current conditions ☔❄️
 - Temperature in Celsius 🌡️
 - Wind speed 💨
 - Humidity and cloudiness percentages. `, 
        technologies: ["HTML", "TailwindCss", "JavaScript","APIs"],
        projectLink:`https://jyoti1042.github.io/weatherapp/`
  },


];

export const CONTACT = {
  address: "Bhiwani,Haryana (India)",
  phoneNo: "+91 9817524677",
  email:"jchoudhary6767@gmail.com",
};
