import { ContactForm } from "../components/ui/ContactForm";
import { ContactInfo } from "../components/ui/ContactInfo";
import { FollowMe } from "../components/ui/FollowMe";



export function Contact(){
    return (
      <div
        id="contact"
        className="max-w-7xl mx-auto flex flex-col items-center gap-12 py-24 px-6 "
      >
        <div className="w-1/2 text-center flex flex-col items-center justify-center gap-4 leading-relaxed text-wrap">
          <h2 className="font-mono text-2xl font-bold ">
            Interested in working together?
          </h2>
          <p className="font-mono text-[0.9rem] md:text-sm  text-gray-400  ">
            I'm currently looking for new opportunities or interesting side
            projects. Whether you have a question or just want to say hi, I'll
            try my best to get back to you!
          </p>
        </div>

        <div className=" grid grid-cols-1 md:grid-cols-2 gap-12 w-full  ">
          <ContactForm />
          <div className=" flex flex-col  gap-12 w-full ">
            <ContactInfo
              email="aniketadhikari2@gmail.com"
              phone="9806604447"
              location="Pokhara, Nepal"
            />
            <FollowMe />
          </div>
        </div>
      </div>
    );


}