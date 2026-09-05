import icons from "../subComponents/icons";

const findIconsData = (techStackArray) => {
  const filteredIconsData = icons
    .filter((icon) => techStackArray.includes(icon.name))
    .map((icon) => ({
      ...icon,
      options: {
        ...icon.options,
        size: parseInt(icon.options.size) / 2 + "px",
      },
    }));

  return filteredIconsData;
};

export const Work = [
  {
    name: "Franchise Archive",
    info: "The Franchise Archive is a fan-made project created to organize major cinematic universes and franchises into easy-to-follow viewing orders.",
    techStack: findIconsData([
      "React",
      "Next.js",
      "Tailwind",
      "Axios",
      "Typescript",
    ]),
    githubUrl: "https://github.com/shubhanggupta2000/franchise-archive",
    hostlink: "https://shubhanggupta2000.github.io/franchise-archive/",
    imagePath:
      "https://res.cloudinary.com/ddwqxi6zp/image/upload/v1788279471/franchiseArchive.png",
  },
  {
    name: "FazeBlog",
    info: "My personal collection of blogs written related to the Tech Industry which I try to keep ever green.",
    techStack: findIconsData([
      "React",
      "Next.js",
      "Tailwind",
      "Axios",
      "Typescript",
    ]),
    githubUrl: "https://github.com/shubhanggupta2000/fazeblog",
    hostlink: "https://fazeblog.vercel.app/",
    imagePath:
      "https://res.cloudinary.com/ddwqxi6zp/image/upload/v1749313922/fazeblog.png",
  },
  {
    name: "StoreIt",
    info: "A storage management and file sharing platform that lets users effortlessly upload, organize, and share files. Built with Next.js and Appwrite Node SDK, utilizing advanced features for seamless file management.",
    techStack: findIconsData([
      "React",
      "Next.js",
      "Appwrite",
      "Tailwind",
      "Shadcn",
      "Typescript",
    ]),
    githubUrl: "https://github.com/shubhanggupta2000/storeIt",
    hostlink: "https://store-it-jet.vercel.app/",
    imagePath:
      "https://res.cloudinary.com/ddwqxi6zp/image/upload/v1734704122/storeit.png",
  },
  {
    name: "Zentry Gaming",
    info: "A compact clone of Zentry's Metagaming platform, designed to streamline community engagement, competitive gaming, and personalized gaming experiences for players worldwide.",
    techStack: findIconsData(["ViteJS", "React", "Tailwind"]),
    githubUrl: "https://github.com/shubhanggupta2000/zentry",
    hostlink: "https://zentry-nine.vercel.app/",
    imagePath:
      "https://res.cloudinary.com/ddwqxi6zp/image/upload/v1734635613/zentry.png",
  },
  {
    name: "Proshop",
    info: "An Ecommerce platform for people to buy and sell digital products 24*7. Fully featured shopping cart, product review, user profile and admin portal facility.",
    techStack: findIconsData([
      "Mongodb",
      "Express",
      "React",
      "Node.js",
      "Bootstrap",
    ]),
    githubUrl: "https://github.com/shubhanggupta2000/proshop_ecommerce",
    hostlink: "https://proshop-faze.vercel.app/",
    imagePath:
      "https://res.cloudinary.com/ddwqxi6zp/image/upload/v1735451188/proshop.png",
  },
  {
    name: "ReState",
    info: "A full-stack Real Estate application made with React Native, featuring Google authentication, dynamic property listings, and user profiles.",
    techStack: findIconsData(["Appwrite", "Tailwind", "Typescript"]),
    githubUrl: "https://github.com/shubhanggupta2000/restate_mobileapp",
    // hostlink: "Unhosted",
    imagePath:
      "https://res.cloudinary.com/ddwqxi6zp/image/upload/v1735452120/ReState.png",
  },
  {
    name: "Netflix Clone",
    info: "A Netflix clone built with React and Firebase, featuring a responsive design and real-time updates.",
    techStack: findIconsData([
      "React",
      "Redux",
      "Firebase",
    ]),
    githubUrl: "https://github.com/shubhanggupta2000/netflix-clone",
    hostlink: "https://netflix-clone-fazevennom.vercel.app/",
    imagePath:
      "https://res.cloudinary.com/ddwqxi6zp/image/upload/v1788279477/netflixClone.png",
  },
  {
    name: "E-Bharat",
    info: "An Indian e-commerce platform promoting locally made products. Built with ReactJS, Vite & Firebase. It offers user accounts with order tracking and an admin dashboard for product management.",
    techStack: findIconsData([
      "React",
      "Redux",
      "Firebase",
      "Tailwind",
      "ViteJS",
    ]),
    githubUrl: "https://github.com/shubhanggupta2000/firebase-ecommerce",
    hostlink: "https://firebase-ecommerce-fazevennom.vercel.app/",
    imagePath:
      "https://res.cloudinary.com/ddwqxi6zp/image/upload/v1735625694/Ebharat.png",
  },
  {
    name: "Quiz App",
    info: "An amazing quiz application build with React & Semantic-UI that lets you play fully customized quiz in your browser.",
    techStack: findIconsData(["React", "Netlify"]),
    githubUrl: "https://github.com/shubhanggupta2000/quiz-app",
    hostlink: "https://fazevennom-quiz-app.vercel.app/",
    imagePath:
      "https://res.cloudinary.com/ddwqxi6zp/image/upload/v1696625028/zbpum6fxvo0avriews2v.png",
  },
  {
    name: "Faze Films",
    info: "A simple web-app that provides ratings, description of a wide range of television content.",
    techStack: findIconsData(["React", "Sass", "React Router", "Vercel"]),
    githubUrl: "https://github.com/shubhanggupta2000/movies-info",
    hostlink: "https://faze-movies-info.vercel.app/",
    imagePath:
      "https://res.cloudinary.com/ddwqxi6zp/image/upload/v1734635387/fazefilms.png",
  },
  {
    name: "YouTube 2.0",
    info: "A simple video streaming YouTube clone build with youtube API and MUI-5.",
    techStack: findIconsData(["React", "Material UI", "Axios", "Netlify"]),
    githubUrl: "https://github.com/shubhanggupta2000/youtube-clone",
    hostlink: "https://fazevennom-youtubeclone.netlify.app/",
    imagePath:
      "https://res.cloudinary.com/ddwqxi6zp/image/upload/v1696625031/cfrp0hr81dunqm47v04s.png",
  },
  {
    name: "Closet",
    info: "An Ecommerce website with Sass and mobile first approach.",
    techStack: findIconsData([
      "React",
      "Material UI",
      "Axios",
      "Netlify",
      "Sass",
    ]),
    githubUrl: "https://github.com/shubhanggupta2000/Closet",
    hostlink: "https://fazevennom-closet-ecommerce.netlify.app/",
    imagePath:
      "https://res.cloudinary.com/ddwqxi6zp/image/upload/v1696625026/oujhtdvtmfk2lg1wtm76.png",
  },
  {
    name: "Shopify Gadgets",
    info: "A Sound gadget shop with stripe payment integration & confetti effects.",
    techStack: findIconsData([
      "Next.js",
      "Sanity",
      "EsLint",
      "Stripe",
      "Babel",
    ]),
    githubUrl: "https://github.com/shubhanggupta2000/ecommerce",
    hostlink: "https://fazevennom-shoppify.vercel.app/",
    imagePath:
      "https://res.cloudinary.com/ddwqxi6zp/image/upload/v1696625028/guwuk0lekuflvhd8eto6.png",
  },
  {
    name: "Golds Gym",
    info: "Fitness app with the functionality to choose exercise categories and specific muscle groups along with motion cards GIF.",
    techStack: findIconsData([
      "React",
      "Material UI",
      "React Router",
      "Netlify",
    ]),
    githubUrl: "https://github.com/shubhanggupta2000/Golds-gym",
    hostlink: "https://fazevennom-gym.netlify.app/",
    imagePath:
      "https://res.cloudinary.com/ddwqxi6zp/image/upload/v1696625026/mu79mdpswechuzevxxhl.png",
  },
  {
    name: "Todo App",
    info: "A simple yet good looking todo list web-app.",
    techStack: findIconsData([
      "React",
      "Redux",
      "Framer Motion",
      "React Router",
    ]),
    githubUrl: "https://github.com/shubhanggupta2000/todo",
    hostlink: "https://fazevennom-todo.vercel.app/",
    imagePath:
      "https://res.cloudinary.com/ddwqxi6zp/image/upload/v1696625028/gnutpx6mau9ztupwkzya.png",
  },
  {
    name: "Evolux",
    info: "A car rental website with smooth scrolling, captivating animations, and a delightful user interface.",
    techStack: findIconsData(["HTML", "CSS", "Javascript", "Vercel"]),
    githubUrl: "https://github.com/shubhanggupta2000/evolux-car-website",
    hostlink: "https://evolux-car-website.vercel.app/",
    imagePath:
      "https://res.cloudinary.com/ddwqxi6zp/image/upload/v1696625026/pdz8kwh5tqqpvpsvwker.png",
  },
  {
    name: "SushiMan",
    info: "A captivating Sushi ordering landing page featuring custom animations, a stylish navigation bar, and a unique hero section",
    techStack: findIconsData(["ViteJS", "Canva", "Javascript"]),
    githubUrl: "https://github.com/shubhanggupta2000/sushiman",
    hostlink: "https://sushiman-app.vercel.app/",
    imagePath:
      "https://res.cloudinary.com/ddwqxi6zp/image/upload/v1696625027/ck2gj2hqtt3bsfe4okbs.png",
  },
  {
    name: "Gericht Restaurant",
    info: "A modern UI/UX restaurant landing page build with fundamental CSS properties with master flex & grid.",
    techStack: findIconsData(["React", "Javascript", "HTML", "CSS", "Axios"]),
    githubUrl: "https://github.com/shubhanggupta2000/Restaurant_UI",
    hostlink: "https://fazevennom-gericht.netlify.app/",
    imagePath:
      "https://res.cloudinary.com/ddwqxi6zp/image/upload/v1734635267/gericht.png",
  },
  {
    name: "Shoppy Dashboard",
    info: "An admin panel with Dashboard, calender with reminders and many more features.",
    techStack: findIconsData(["React", "Tailwind", "Netlify"]),
    githubUrl: "https://github.com/shubhanggupta2000/syncfusion-dashboard",
    hostlink: "https://fazevennom-syncfusion-dashboard.netlify.app/",
    imagePath:
      "https://res.cloudinary.com/ddwqxi6zp/image/upload/v1696625025/tz8kyqkssinfusokd7iv.png",
  },
];
