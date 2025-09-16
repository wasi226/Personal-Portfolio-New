import image1 from '@/assets/pp.png'
import image2 from '@/assets/VA.jpg'
import image3 from '@/assets/Dribble.png'
import image4 from '@/assets/Task.png'
import image5 from '@/assets/VHG.png'
import image6 from '@/assets/SAAM.png'


export const Projects = [
  {
    id: 1,
    title: "AI VirtualAssistant",
    featured: true,
    description:
      "This full-stack project demonstrates a powerful AI Virtual Assistant built with MongoDB, Express, React, and Node.js. It can interact with users using voice commands via the Web Speech API, process information intelligently with Gemini AI, securely manage user data with JWT and bcrypt authentication, and showcase custom images using Cloudinary and Multer. The assistant is fully customizable with your preferred name, branding, and voice, making it a versatile and personal AI solution.",
    tags: ["React", "Node.js", "MongoDB", "Gemini AI", "+1"],
    category: "AI",
    demoLink: "#", // Replace with actual live demo link
    githubLink: "#", // Replace with GitHub link
    image_url: image2,

  },
  {
    id: 2,
    title: "Task Management App",
    featured: true,
    description:
      "A collaborative task management application with real-time updates, team collaboration features, and advanced project tracking capabilities.",
    tags: ["React.js", "Tailwind css", "LocalStorage"],
    category: "web",
    demoLink: "#",
    githubLink: "#",
    image_url: image4,

  },
  {
    id: 3,
    title: "Personal-portfolio",
    featured: false,
    description:
      "A modern, responsive personal portfolio website designed specifically for students and aspiring developers. This premium dark-themed portfolio showcases your skills, projects, certifications, and workshops with stunning animations and 3D effects.",
    tags: ["React.js", "Tailwind css", "Framer-motion"],
    category: "web",
    demoLink: "#",
    githubLink: "#",
    image_url: image1,

  },
  {
    id: 4,
    title: "Virtual Herbal Garden",
    featured: false,
    description:
      "A web-based project promoting AYUSH herbal knowledge, allowing users to explore and learn about various medicinal plants. Users can view plant details, track growth, and interact with an engaging interface designed to enhance awareness of traditional herbal remedies and sustainable gardening practices.",
    tags: ["React.js", "Node.js", "Express.js","MongoDB"],
    category: "web",
    demoLink: "#",
    githubLink: "#",
    image_url: image5,

  },
  {
    id: 5,
    title: "Dribbble Vision: A Web Design Tribute",
    featured: true,
    description:
      "A detailed replication of the Dribbble website featuring accurately structured pages, refined visual elements, and a clean, modern layout that closely mirrors the original design. Every section—from the homepage to user profiles and shot previews—has been carefully recreated with a strong emphasis on visual hierarchy, spacing, typography, and layout precision, resulting in a seamless and professional user interface that reflects the core design principles of the original platform.",
    tags: ["HTML", "CSS", "JavaScript", "GSAP"],
    category: "web",
    demoLink: "#",
    githubLink: "#",
    image_url: image3,

  },
  {
    id: 6,
    title: "Smart Attendance & Academic Management",
    featured: false,
    description:
      "A full-stack system that automates attendance using AI-based face recognition, provides dashboards for students, teachers, and parents, supports correction requests, notifications, and access to study materials. Advanced features include timetable detection, QR backup mode, and gamified attendance tracking.",
    tags: ["React", "MongoDB", "Express.js", "Node.js","+1"],
    category: "web",
    demoLink: "#",
    githubLink: "#",
    image_url: image6,

  }
];
