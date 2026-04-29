import { FaGithubAlt } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";

export interface ProjectCardProps{
    name : string;
    description : string;
    link : string;
    image : string;
    technologies : string[];
    liveUrl? : string;
}

export function ProjectCard({name, description, link, image, technologies, liveUrl} : ProjectCardProps){
    return(
        <div className=" group flex flex-col gap-4 bg-gray-900/50 border border-gray-800 p-4 rounded-2xl hover:border-gray-600 transition-all duration-300 hover: cursor-pointer select-none">

            <div className="relative aspect-video overflow-hidden">
                <img src={image} alt={name} className="object-cover  group-hover:scale-105 transition-transform duration-500" />
            </div>

            <div className="pb-2 flex  flex-col  ">
               <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-bold font-mono tracking-tight ">{name}</h3>

                    <div className="flex text-gray-400 gap-3">
                        <a className="hover:cursor-pointer hover:text-white transition-colors " href={link}><FaGithubAlt size={24}/></a>
                        {liveUrl && <a className="hover:cursor-pointer hover:text-white transition-colors" href={liveUrl}><FiExternalLink size={24}/></a>}
                    </div>
               </div>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed mb-2 line-clamp-3">
                {description}
            </p>

            <div className="mt-auto flex flex-wrap gap-2">
                {
                    technologies.map(tech=>(<div key={tech} className=" border border-gray-700 bg-gray-900 rounded-md px-2 py-1 text-center text-[12px] font-medium text-gray-300 hover:ring hover:ring-blue-500 transition-all duration-300">{tech}</div>))
                }
            </div>
         
        </div>
    );
}