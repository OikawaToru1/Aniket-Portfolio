import { CiMail, CiPhone, CiLocationOn } from "react-icons/ci";
interface ContactInfoProps{
    email : string;
    phone : string;
    location : string;
}

export function ContactInfo({email, phone, location} : ContactInfoProps){
    return(
        <div className="flex flex-col gap-4 bg-gray-900/50 border border-gray-800 p-8 rounded-md w-full ">
                <h2 className="font-mono tracking-tight uppercase text-xl text-gray-100  "> 
                    Contact Information
                </h2>
            <div className="flex items-center gap-3">
                <CiMail size={20} className="text-gray-400" aria-hidden="true" />
                <span className="text-gray-300">{email}</span>
            </div>
            <div className="flex items-center gap-3">
                <CiPhone size={20} className="text-gray-400" aria-hidden="true" />
                <span className="text-gray-300">{phone}</span>
            </div>
            <div className="flex items-center gap-3">
                <CiLocationOn size={20} className="text-gray-400" aria-hidden="true" />
                <span className="text-gray-300">{location}</span>
            </div>
        </div>
    );
}