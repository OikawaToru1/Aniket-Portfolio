import { useState } from "react";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const options = [
    { name: "About", link: "#about" },
    { name: "Skills", link: "#skills" },
    { name: "Projects", link: "#projects" },
  ];

  const NavItems = ({ mobile }: { mobile: boolean }) => {
    return (
      <>
        {options.map((option) => (
          <li
            className={`font-medium transition-all duration-300 hover:text-sky-400 
              ${mobile 
                ? "text-2xl py-4 border-b border-white/10 w-full" 
                : "text-sm px-4 py-2 text-gray-300 hover:scale-105"
              }`}
            key={option.name}
          >
            <a href={option.link} onClick={() => setIsMenuOpen(false)}>
              {option.name}
            </a>
          </li>
        ))}
      </>
    );
  };

  return (
    // Fixed position with backdrop-blur makes it feel modern
    <nav className="fixed top-0 left-0 w-full z-[100] flex justify-between items-center lg:px-16 md:px-8 px-6 py-5 
                    bg-[#030712]/60 backdrop-blur-md border-b border-white/5 text-white">
      
      <h1 className="text-xl font-bold tracking-tight cursor-pointer hover:opacity-80 transition-opacity">
        <a href="#hero" className="flex items-center gap-1">
         <span className="font-mono text-sky-400">{"</>"}</span> Aniket 
        </a>
      </h1>

      {/* Desktop Menu */}
      <div className="hidden md:block">
        <ul className="flex items-center space-x-2">
          <NavItems mobile={false} />
          <li>
            <a 
              href="#contact" 
              className="ml-4 px-5 py-2 text-sm font-medium bg-white/5 border border-white/10 rounded-full hover:bg-white/10 transition-all"
            >
             Contact me
            </a>
          </li>
        </ul>
      </div>

      {/* Mobile Menu Toggle */}
      <button
        className="md:hidden text-2xl z-[110] focus:outline-none"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        aria-label="Toggle menu"
      >
        {isMenuOpen ? "✕" : "☰"}
      </button>

      {/* Mobile Menu Overlay */}
      <div
        className={`md:hidden fixed  inset-x-0 transform ${
          isMenuOpen ? "translate-y-40" : "translate-y-[-100%]"
        } transition-transform duration-500 ease-in-out z-[105] flex flex-col justify-center items-center bg-white/30 backdrop-blur-md text-white`}
      >
        <ul className="flex flex-col items-center w-full px-10 text-center">
          <NavItems mobile={true} />
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;