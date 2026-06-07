import { FaAngleDoubleDown } from "react-icons/fa";

const Hero = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen w-full bg-[#030712] flex items-center justify-center overflow-hidden"
    >
      {/* --- LAYER 2: THE GLOW (Background Blobs) --- */}
      {/* Top Left Blob (Blue) */}
      <div
        className="hidden md:block absolute top-[-10%] left-[-10%] w-125 h-125
                      rounded-full bg-blue-600/20 blur-[120px] pointer-events-none"
      />

      {/* Bottom Right Blob (Purple/Indigo) */}
      <div
        className="hidden md:block absolute bottom-[0%] right-[-5%] w-150 h-150 
                      rounded-full bg-indigo-500/10 blur-[100px] pointer-events-none"
      />

      {/* Subtle Center Glow (To make the name pop) */}
      <div
        className="hidden md:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
                      w-75 h-75 bg-sky-400/5 blur-[80px] pointer-events-none"
      />

      {/* --- LAYER 3: THE CONTENT --- */}
      <div className="relative z-10 text-center px-4">

        <h1 className="text-6xl md:text-8xl font-bold text-white tracking-tight mb-6">
          Aniket{" "}
          <span className="text-transparent bg-clip-text bg-linear-to-r from-sky-400 to-indigo-400">
            Adhikari
          </span>
        </h1>

        <p className="max-w-2xl mx-auto text-gray-400 text-lg md:text-xl leading-relaxed mb-10">
          Full-stack developer crafting high-performance, accessible web
          experiences with <span className="text-white font-medium">React</span>
          ,<span className="text-white font-medium"> TypeScript</span>, and
          <span className="text-white font-medium"> Node.js</span>. 
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            className="px-8 py-4 bg-sky-500 text-white font-semibold rounded-xl 
                             hover:bg-sky-400 transition-all shadow-[0_0_20px_rgba(56,189,248,0.3)]"
          >
            <a href="#projects" className="text-white">
              See Projects
            </a>
          </button>
          <button
            className="px-8 py-4 bg-white/5 text-white font-semibold rounded-xl 
                             border border-white/10 hover:bg-white/10 transition-all backdrop-blur-md"
          >
            <a href="#contact" className="text-white">
              Contact Me
            </a>
          </button>
        </div>
      </div>
      <div>
        {/* --- LAYER 4: THE OVERLAY (Subtle Noise) --- */}
        <div
          className="absolute inset-0  bg-noise-pattern opacity-5 pointer-events-none"
          aria-hidden="true"
        />
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2  flex flex-col items-center gap-2">
        <span className=" inline-block text-gray-400 ">Scroll Down</span>
        <FaAngleDoubleDown className="text-gray-400 text-2xl animate-bounce  animation-delay-1000" />
      </div>
    </section>
  );
};

export default Hero;
