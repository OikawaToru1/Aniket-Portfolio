import { useState } from "react";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const options = [
    { name: "About", link: "/about" },
    { name: "Skills", link: "/skills" },
    { name: "Projects", link: "/projects" },
    { name: "Contact", link: "/contact" },
  ];

  const NavItems = ({mobile} : {mobile:Boolean})=>{
    return (
    <>
      {
        options.map(option=>(
        <li 
          className={`px-4 py-2 hover:text-blue-600 transition-colors ${mobile ? "text-lg border-b border-blue-200" : ""}`}
          key={option.name}><a href={option.link}>{option.name}</a></li>)
      )
  }
    </>)
  }



  return (
    <nav className="relative flex justify-between items-center w-full lg:px-16 md:px-8 px-4 py-4 shadow-sm">
      <h1 className="text-2xl font-bold">Aniket</h1>

      {/* Simplified breakpoints: block on mobile, hidden on medium screens and up */}
      <button
        className="md:hidden text-2xl z-50 hover:text-gray-500 focus:outline-none cursor-pointer"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        aria-label="Toggle menu"
      >
        {isMenuOpen ? "✕" : "☰"}
      </button>

      {/* Desktop Menu */}
      <div className="hidden md:block">
        <ul className="flex space-x-4">
          <NavItems mobile={false} />
        </ul>
      </div>

      {/* Mobile Menu */}

      <div
        className={`md:hidden fixed inset-y-0 right-0 transform ${isMenuOpen ? "translate-x-0" : "translate-x-full"} transition-transform duration-300 ease-in-out w-3/4 bg-blue-50 shadow-xl z-40`}
      >
        <ul className="flex flex-col space-y-4 pt-20 px-6">
          <NavItems mobile={true} />
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
