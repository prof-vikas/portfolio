import { useState } from "react";
import ThemeToggle from "./ThemeToggle";


function Navbar({ isDark, toggleTheme }) {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <header className="fixed top-0 w-full z-50
                       bg-white/70 dark:bg-gray-900/70
                       backdrop-blur
                       border-b border-gray-200 dark:border-gray-800">
            <nav className="max-w-6xl mx-auto px-6 h-16
                      flex items-center justify-between">

                {/* Logo / Name */}
                <span className="font-semibold text-lg
                         text-gray-900 dark:text-white">
                    Vikas Mourya
                </span>

                {/* Navigation Links */}
                <div className="flex items-center">

                    {/* Navigation Links */}
                    <div className="hidden md:flex space-x-6
                  text-sm font-medium
                  text-gray-700 dark:text-gray-300">
                        <a href="#home" className="hover:text-[color:var(--color-tealPrimary)] transition">
                            About
                        </a>
                        <a href="#skills" className="hover:text-[color:var(--color-tealPrimary)] transition">
                            Skills
                        </a>
                        <a href="#experience" className="hover:text-[color:var(--color-tealPrimary)] transition">
                            Experience
                        </a>
                        <a href="#projects" className="hover:text-[color:var(--color-tealPrimary)] transition">
                            Projects
                        </a>
                        <a href="#contact" className="hover:text-[color:var(--color-tealPrimary)] transition">
                            Contact
                        </a>
                        <a
                            href="/resume.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-[color:var(--color-tealPrimary)] transition"
                        >
                            Resume
                        </a>

                    </div>

                    {/* Theme Toggle */}
                    <ThemeToggle isDark={isDark} toggleTheme={toggleTheme} />
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden ml-4 text-2xl
             text-gray-700 dark:text-gray-300"
                    onClick={() => setIsOpen(!isOpen)}
                    aria-label="Toggle menu"
                >
                    {isOpen ? "✕" : "☰"}
                </button>


            </nav>

            {/* Mobile Menu */}
{isOpen && (
  <div className="md:hidden
                  bg-white dark:bg-gray-900
                  border-t border-gray-200 dark:border-gray-800">

    <div className="flex flex-col px-6 py-4 space-y-4
                    text-gray-700 dark:text-gray-300">

      <a href="#about" onClick={() => setIsOpen(false)}>About</a>
      <a href="#skills" onClick={() => setIsOpen(false)}>Skills</a>
      <a href="#experience" onClick={() => setIsOpen(false)}>Experience</a>
      <a href="#projects" onClick={() => setIsOpen(false)}>Projects</a>
      <a href="#contact" onClick={() => setIsOpen(false)}>Contact</a>
      <a
        href="/resume.pdf"
        target="_blank"
        rel="noopener noreferrer"
        onClick={() => setIsOpen(false)}
      >
        Resume
      </a>

    </div>
  </div>
)}

        </header>
    );
}

export default Navbar;
