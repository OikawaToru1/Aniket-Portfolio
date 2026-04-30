import Resume from '../assets/AniketAdhikari_Resume copy.pdf'
import { RxFileText } from "react-icons/rx";
import { HiOutlineAcademicCap, HiOutlineCodeBracket } from "react-icons/hi2";

const About = () => {
  return (
    // We keep the background identical to the Hero section so it "blends"
    <section id="about" className="py-24 px-6 w-full mx-auto bg-[#030712]">
      {/* Container grid to keep content aligned with other sections */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center max-w-7xl mx-auto">
        {/* Left Side: Brief Bio */}
        <div className="md:col-span-5">
          <div className="flex items-center gap-2 text-sky-500 mb-4">
            <HiOutlineCodeBracket size={18} />
            <span className="uppercase tracking-[0.2em] text-[10px] font-bold">
              About
            </span>
          </div>
          <h2 className="text-3xl font-semibold text-white mb-6">
            Aniket Adhikari
          </h2>
          <p className="text-gray-400 text-sm leading-relaxed">
            Computer Engineering student passionate about crafting reliable
            software and optimizing user experiences. I like solving problems
            where system design meets performance. Actively looking for
            opportunities to learn, build, and contribute as a Software
            Developer.
          </p>
          <p className="text-gray-400 text-sm mt-4 leading-relaxed">
            Currently seeking an internship to apply my skills in
            <span className="text-gray-200"> Software Engineering </span>
            and <span className="text-gray-200">Research</span>.
          </p>

          <button className='mt-8 text-lg font-medium text-white flex items-center gap-2 bg-gray-900/50 border border-gray-800 px-4 py-2 rounded-lg hover:bg-gray-700/90 transition-colors ease-in-out duration-500 cursor-pointer '
            onClick={() => window.open(Resume, "_blank")}
          >
            View my resume 
            <a href={Resume} target="_blank" className="text-sky-400 hover:underline ml-1">
              <RxFileText size={24} className="inline-block hover:text-sky-600 transition-colors duration-300" />
            </a>
          </button>
        </div>

        {/* Right Side: Education/Path */}
        <div className="md:col-span-7 md:pl-12 border-l border-white/5">
          <div className="flex items-center gap-2 text-gray-500 mb-8">
            <HiOutlineAcademicCap size={18} />
            <span className="uppercase tracking-[0.2em] text-[10px] font-bold">
              Education
            </span>
          </div>

          <div className="space-y-10">
            <div className="group relative">
              <span className="text-[10px] font-mono text-sky-500/80">
                2021 — 2025
              </span>
              <h3 className="text-lg font-medium text-white group-hover:text-sky-400 transition-colors">
                B.E. Computer Engineering
              </h3>
              <p className="text-sm text-gray-500 mt-1">Pokhara University</p>
            </div>

            <div className="group relative">
              <span className="text-[10px] font-mono text-gray-500">
                Key Focus
              </span>
              <h3 className="text-lg font-medium text-white group-hover:text-sky-400 transition-colors">
                Full-Stack Development & System Design
              </h3>
              <p className="text-sm text-gray-500 mt-1">
                Building scalable web applications with focus on performance and
                architecture
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
