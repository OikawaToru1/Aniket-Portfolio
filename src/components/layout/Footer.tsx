import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { IoMail } from "react-icons/io5";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative w-full py-12 px-6 border-t border-white/5 bg-[#030712] overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[300px] h-[100px] bg-sky-500/10 blur-[80px] pointer-events-none" />

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        {/* Brand */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <h2 className="text-xl font-bold text-white tracking-tight">
            Aniket <span className="text-sky-400">Adhikari</span>
          </h2>
          <p className="mt-2 text-sm text-gray-500 max-w-[250px]">
            Final year Computer Engineering student building high-performance
            web experiences.
          </p>
        </div>

        {/* Social Links - Fixed Icons */}
        <div className="flex space-x-6">
          <a
            href="https://github.com/Aniket-Adhikari"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition-all p-2 bg-white/5 rounded-full border border-white/5 hover:border-white/20"
          >
            <FaGithub size={20} />
          </a>
          <a
            href="#"
            className="text-gray-400 hover:text-[#0A66C2] transition-all p-2 bg-white/5 rounded-full border border-white/5 hover:border-white/20"
          >
            <FaLinkedin size={20} />
          </a>
          <a
            href="#"
            className="text-gray-400 hover:text-[#1DA1F2] transition-all p-2 bg-white/5 rounded-full border border-white/5 hover:border-white/20"
          >
            <FaTwitter size={20} />
          </a>
          <a
            href="mailto:your-email@example.com"
            className="text-gray-400 hover:text-sky-400 transition-all p-2 bg-white/5 rounded-full border border-white/5 hover:border-white/20"
          >
            <IoMail size={20} />
          </a>
        </div>

        {/* Copyright */}
        <div className="text-center md:text-right">
          <p className="text-sm text-gray-500">
            &copy; {currentYear} All rights reserved.
          </p>
          <p className="text-[10px] uppercase tracking-widest text-gray-600 mt-1">
            2021-2025 Batch • Pokhara
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
