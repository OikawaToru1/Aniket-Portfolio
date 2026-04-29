import { InfiniteScroller } from "../components/ui/Scroller";
import { SkillCard, type SkillCardProps, } from "../components/ui/SkillCard";

interface projectcardProps {
  title: string;
  description: string;
  link: string;
  technologies: string[];
}
export type { projectcardProps };

import { BsJavascript, BsTypescript } from "react-icons/bs";
import { FaReact, FaPython, FaFigma, FaGitAlt } from "react-icons/fa";
import { FaDartLang, FaGithub } from "react-icons/fa6";
import { SiRedux, SiFlutter, SiExpress, SiAppwrite } from "react-icons/si";
import { BiLogoPostgresql, BiLogoMongodb } from "react-icons/bi";
import { DiNodejs } from "react-icons/di";

const Languages: SkillCardProps = {
  name: "Languages",
  color: "#378ADD",
  skills: [
    { name: "JavaScript", icon: <BsJavascript size={20} /> },
    { name: "TypeScript", icon: <BsTypescript size={20} /> },
    { name: "Python", icon: <FaPython size={20} /> },
    { name: "Dart", icon: <FaDartLang size={20} /> },
  ],
  count: 4,
};


const FrameworksandLibraries: SkillCardProps = {
  name: "Frameworks & Libraries",
  color: "#61dafb",
  skills: [
    { name: "React", icon: <FaReact size={20} /> },
    { name: "Redux", icon: <SiRedux size={20} /> },
    { name: "Flutter", icon: <SiFlutter size={20} /> },
    { name: "Express", icon: <SiExpress size={20} /> },
  ],
  count: 4,
};

const RuntimeandTools: SkillCardProps = {
  name: "Runtime & Tools",
  color: "#378ADD",
  skills: [
    { icon: <DiNodejs size={60} /> },
    { name: "Git", icon: <FaGitAlt size={20} /> },
    { name: "GitHub", icon: <FaGithub size={20} /> },
    { name: "Figma", icon: <FaFigma size={20} /> },
    { name: "Appwrite", icon: <SiAppwrite size={20} /> },
  ],
  count: 5,
};

const Databases: SkillCardProps = {
  name: "Databases",
  color: "#4db33d",
  skills: [
    { name: "MongoDB", icon: <BiLogoMongodb size={20} /> },
    { name: "PostgreSQL", icon: <BiLogoPostgresql size={20} /> },
  ],
  count: 2,
};

const totalSkills: SkillCardProps[] = [
  Languages,
  FrameworksandLibraries,
  RuntimeandTools,
  Databases,
];

export const skillCards = [
  Languages,
  FrameworksandLibraries,
  RuntimeandTools,
  Databases,
];


export default function Skills() {
  return (
    <div
      id="skills"
      className=" bg-[#030712]  text-white flex flex-col py-24 px-6 max-w-10/12 mx-auto"
    >
      <h1 className="text-3xl font-bold text-center text-sky-500 mb-8">My Skills</h1>
      <div className="w-full    grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 space-y-4 md:space-y-0 md:gap-4 justify-items-center      ">
        {totalSkills.map((skill) => (
          <SkillCard
            name={skill.name}
            color={skill.color}
            count={skill.count}
            skills={skill.skills}
          />
        ))}
      </div>
      <div className="my-12">
        <InfiniteScroller />
      </div>
    </div>
  );
}