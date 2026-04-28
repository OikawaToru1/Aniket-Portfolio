// import { useState } from "react";

// function Navbar() {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   const options = [
//     { name: "About", link: "/about" },
//     { name: "Skills", link: "/skills" },
//     { name: "Projects", link: "/projects" },
//     { name: "Contact", link: "/contact" },
//   ];

//   const NavItems = ({mobile} : {mobile:Boolean})=>{
//     return (
//     <>
//       {
//         options.map(option=>(
//         <li 
//           className={`px-4 py-2 font-semibold  hover:text-blue-600 transition-colors ${mobile ? "text-lg border-b border-blue-200" : ""}`}
//           key={option.name}><a href={option.link}>{option.name}</a></li>)
//       )
//   }
//     </>)
//   }



//   return (
//     <nav className="relative flex justify-between items-center w-full lg:px-16 md:px-8 px-4 py-4 shadow-sm bg-linear-to-r from-[#780206] to-[#061161] text-white">
//       <h1 className="text-2xl font-bold font-mono cursor-pointer">
//         <a href="/">Aniket Adhikari</a>
//       </h1>

//       {/* Simplified breakpoints: block on mobile, hidden on medium screens and up */}
//       <button
//         className="md:hidden text-2xl z-50 hover:text-gray-500 focus:outline-none cursor-pointer"
//         onClick={() => setIsMenuOpen(!isMenuOpen)}
//         aria-label="Toggle menu"
//       >
//         {isMenuOpen ? "✕" : "☰"}
//       </button>

//       {/* Desktop Menu */}
//       <div className="hidden md:block">
//         <ul className="flex space-x-4">
//           <NavItems mobile={false} />
//         </ul>
//       </div>

//       {/* Mobile Menu */}

//       <div
//         className={`md:hidden fixed inset-y-0 right-0 transform ${isMenuOpen ? "translate-x-0" : "translate-x-full"} transition-transform duration-500 ease-in-out w-3/4 bg-blue-50 shadow-xl z-40`}
//       >
//         <ul className="flex flex-col space-y-4 pt-20 px-6">
//           <NavItems mobile={true} />
//         </ul>
//       </div>
//     </nav>
//   );
// }

// export default Navbar;

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
        <a href="/">
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
              Get in Touch
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