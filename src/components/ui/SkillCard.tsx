export interface skillProps{
    name? : string;
    icon : any;
    size? : number;
}

export interface SkillCardProps {
    name : string;
    color : string;
    skills : skillProps[];
    count : number;
}



export function SkillCard({name, color, skills, count} : SkillCardProps){
    return (
      <div className=" p-2 border border-white/5 rounded-xl w-full   ">
        <div className="flex justify-between  mb-1">
          <h2 className="flex items-center gap-2 text-lg font-medium text-white/95 ">
            <span className="w-2 h-2 rounded-full shrink-0 inline-block " style={{background: color}} /> {name} 
          </h2>
        
            <p className="text-xs text-gray-50">
               <span>{count}</span>
            </p>
        </div>

        <div className=" flex flex-wrap gap-2 p-2">
            {skills.map((skill)=>(
                <div
                 key={skill.name}
                 className="h-8 px-3 py-2  rounded-lg border flex justify-start items-center gap-2 border-gray-700 ">
                    <span>{skill.icon}</span>
                    <p className="text-xs my-1 text-gray-500">{skill.name}</p>
                </div>))}
        </div>
      </div>
    );
}