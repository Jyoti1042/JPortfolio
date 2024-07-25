import project1 from "../assets/projects/StudyApp.png";
import project2 from "../assets/projects/ECommerce.png";
 import project5 from "../assets/projects/RecipeApp.jpeg";
import project4 from "../assets/projects/ContentDetective.png";
import project3 from "../assets/projects/WeatherApp.png";

export const HERO_CONTENT = `I'm a passionate and dedicated MERN stack developer with a knack for creating seamless and 
responsive web applications.I am a Multitasker and always eager to learn new Technologies. My expertise lies in leveraging Reactjs, Node.js, Express.js, mongoDB and  to build efficient, scalable, and user-friendly solutions and wanted to work for an organization where I can enhance and utilize my skills and knowledge
 to grow along with the organization with full integrity and enthusiasm.`;

export const ABOUT_TEXT = `
I am Jyoti Choudhary, a 24-years-old, fully passionate,Innovative and goal-oriented person.In my masters I selected Web development as my specialization 
and completed many courses as one is comprehensive (MERN Stack Web Development Bootcamp), where I gained proficiency in HTML, tailwindCSS, JavaScript, React.js, Node.js, and database management,
 reflecting my commitment to continuous learning.
  On a personal level, my spirituality and positive outlook shine brightly. 
  I have a deep love for outdoor wildlife and helping attitude for voicelesses,
   reflecting my curiosity and admiration for the natural world.
    Aspiring to become a Business Women, my unwavering dedication to continuous learning,
     combined with my multifaceted interests, makes me a truly remarkable person, both professionally and personally.`
export const EXPERIENCES = [
  {
    duration:"10 October 2023-28 Janurary 2024",
    role: "ReactJs Developer",
    company: "InCruiter(Banglore-Onsite)",
    description: `Contributed as a ReactJS intern at InCruiter Company, a leading interview service provider, supporting the development of core products.
    Identified and resolved IncBot and IncFeed-IncVid bugs, enhancing the stability and functionality of web applications 
Implemented responsive design principles to ensure seamless usability across various devices and screen sizes, improving overall accessibility and user engagement
`,
    technologies: ["React", "JavaScript","Redux" ,"tailwind",],
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
    Integrated MongoDB atlas, Cloudinary,a cloud based media management platform`,
        technologies: ["HTML", "tailwindCss", "React", "Redux", "Node.js", "MongoDB", "ExpressJS"],
        projectLink:`https://studynotion-frontend.vercel.app/`
  },
  {
    title: "FullStack E-Commerce Website",
    image: project2,
    description:
    `Build this e-commerce website using React and Firebase having Admin and User Panels.
    Admin can add products and track orders and users details etc.
    Providing facilities with choose products and set prices by filtering,enabling dark and light modes.
    For payment Integration,utilized RazorPay, Cloud Firestore used for data storage which is a NoSQL database`, 
        technologies: ["HTML","CSS", "React", "Redux","Firebase", "FireStore"],
        projectLink:`https://complete-ecommerce-project.vercel.app/`
  },
  {
    title: "FoodyCafe (FullStack recipe application) ",
    image: project5,
    description:
    `This websitebuilt with Mern Stack where Users can add and Saves their Recipes data,  offering flexibility and scalability.
    Provided google authentication and authorization for login and Signup`, 
        technologies: ["HTML", "tailwindCss", "React", "Redux","MongoDB","Node.js","ExpressJs"],
  },
  {
    title: "Dev Detective (Robust Application for Content Detection) ",
    image: project4,
    description:
    `Used a GitHub API which fetch and show realtime details of any valid github user 
     Used JavaScript functionlities and css flex which made it fully responsive and enabled dark mode`, 
        technologies: ["HTML", "tailwindCss", "javaScript","API"],
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
 - Humidity and cloudiness percentages`, 
        technologies: ["HTML", "tailwindCss", "javaScript","API"],
        projectLink:`https://jyoti1042.github.io/weatherapp/`
  },
  

];

export const CONTACT = {
  address: "Premnagar , Bhiwani (Haryana)",
  phoneNo: "+91 9817524677",
  email:"jchoudhary6767@gmail.com",
};
