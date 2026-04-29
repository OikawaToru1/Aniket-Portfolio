

const Hero = () => {
  return (
    <section id="hero" className="relative min-h-screen w-full bg-[#030712] flex items-center justify-center overflow-hidden">
      {/* --- LAYER 2: THE GLOW (Background Blobs) --- */}
      {/* Top Left Blob (Blue) */}
      <div
        className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] 
                      rounded-full bg-blue-600/20 blur-[120px] pointer-events-none"
      />

      {/* Bottom Right Blob (Purple/Indigo) */}
      <div
        className="absolute bottom-[0%] right-[-5%] w-[600px] h-[600px] 
                      rounded-full bg-indigo-500/10 blur-[100px] pointer-events-none"
      />

      {/* Subtle Center Glow (To make the name pop) */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
                      w-[300px] h-[300px] bg-sky-400/5 blur-[80px] pointer-events-none"
      />

      {/* --- LAYER 3: THE CONTENT --- */}
      <div className="relative z-10 text-center px-4">
        <span
          className="inline-block mb-4 px-3 py-1 text-xs font-medium tracking-wider 
                         text-sky-400 uppercase border border-sky-400/30 rounded-full bg-sky-400/5"
        >
          Available for new opportunities
        </span>

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
          precision.
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
    </section>
  );
};

export default Hero;
