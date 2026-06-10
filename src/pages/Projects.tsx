import {ProjectCard} from "../components/ui/ProjectCard";
import type {ProjectCardProps} from "../components/ui/ProjectCard";
import studyhive from "../assets/studyhive.jpeg"
import fuzzychat from "../assets/fuzzychat.png";
import eventora from "../assets/eventora.png";
import buddy from '../assets/buddybanner.png'


const projects: ProjectCardProps[] = [
  {
    name: "Buddy",
    description:
      "Buddy is a full-stack AI application that lets users upload documents, ask questions, and auto-generate quizzes from their content. ",
    link: "https://github.com/OikawaToru1/Buddy",
    image: buddy,
    liveUrl: "https://buddy-oikawa.vercel.app/",
    technologies: [
      "React",
      "Typescript",
      "Node.js",
      "Express",
      "MongoDB",
      "Pinecone",
      "Cloudinary",
      "JWT",
    ],
  },
  {
    name: "StudyHive",
    description:
      "A collaborative study platform that connects students worldwide, fostering peer-to-peer learning and academic success.",
    link: "https://github.com/OikawaToru1/StudyHive",
    image: studyhive,
    liveUrl: "https://study-hive-inky.vercel.app/",
    technologies: [
      "React",
      "Node.js",
      "Express",
      "PostgreSQL",
      "Prisma",
      "Socket.IO",
      "WebRTC",
    ],
  },
  {
    name: "FuzzyChat",
    description:
      "A simple chat website based on socket.io and React. Supports real-time messaging, typing indicators, and user presence.",
    link: "https://github.com/OikawaToru1/fuzzy-chat",
    image: fuzzychat,
    technologies: [
      "React",
      "Node.js",
      "Express",
      "Socket.IO",
      "PostgreSQL",
      "Prisma",
    ],
  },
  {
    name: "Eventora",
    description:
      "An event management platform that allows users to create, manage, and attend events seamlessly. It offers features like event creation, ticketing, and attendee management.",
    link: "https://github.com/OikawaToru1/Eventora/tree/main/eventora",
    image: eventora,
    technologies: ["React", "Tailwind CSS", "Appwrite", "JavaScript"],
  },
];





export function Projects(){
    return(
        <div id="projects" className="py-24 px-6 max-w-7xl mx-auto">
            <h1 className="text-3xl font-bold text-center mb-8">My Projects</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map(project=>(<ProjectCard 
                name={project.name}
                description={project.description}
                link={project.link}
                image={project.image}
                technologies={ project.technologies}
                liveUrl={project.liveUrl}
                />))}
            </div>
        </div>
    );
}