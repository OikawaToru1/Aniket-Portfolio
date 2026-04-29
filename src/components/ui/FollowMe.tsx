import {  CiLinkedin, CiFacebook } from "react-icons/ci";
import { FaGithubAlt } from "react-icons/fa";
interface FollowMeProps{

    platform : string;
    link : string;
    icon : React.ReactNode;
}

const platforms: FollowMeProps[] = [
  {
    platform: "GitHub",
    link: "https://github.com/OikawaToru1",
    icon: <FaGithubAlt />,
  },
  {
    platform: "LinkedIn",
    link: "https://www.linkedin.com/in/aniket-adhikari01/",
    icon: <CiLinkedin />,
  },
  {
    platform: "Facebook",
    link: "https://www.facebook.com/oikawaAniket",
    icon: <CiFacebook />,
  },
];  

export function FollowMe(){
    return (
      <div className="grid grid-cols-2  gap-4  p-6 w-full justify-around">
        <div className="flex flex-col gap-1.5">
          <h2 className="font-mono text-sm  uppercase leading-tight text-gray-400">
            Find me on
          </h2>
          {platforms.map(({ platform, link, icon }) => (
            <a
              key={platform}
              href={link}
              className="text-gray-400 hover:text-white transition-colors text-2xl flex items-center gap-2 "
            >
              {icon}
              <p className="text-sm font-medium text-gray-400 mt-2">
                {platform}
              </p>
            </a>
          ))}
        </div>

        <div className="bg-gray-900/50 p-4 border border-gray-700 rounded-md">
            <h2 className="font-mono text-sm  leading-tight text-white/90 flex items-center gap-2">
                <span className="w-2 h-2 bg-green-400 rounded-full inline-block"/>
                Available for work
            </h2>
            <p className="text-gray-400 text-xs mt-2 leading-relaxed">
                Feel free to reach out for  any collaborations or projects. Currently open to new opportunities .
            </p>
        </div>
      </div>
    );
}