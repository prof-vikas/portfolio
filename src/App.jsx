import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Contact from "./components/Contact";



function App() {
  const [isDark, setIsDark] = useState(true);
const toggleTheme = () => setIsDark(prev => !prev);

  useEffect(() => {
    const root = document.documentElement;

    if (isDark) {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }

    console.log("Dark mode:", isDark, root.className);
  }, [isDark]);

return (
  <>
    <Navbar isDark={isDark} toggleTheme={toggleTheme} />


<main className="bg-white dark:bg-gray-900">
  <Hero />
  <Skills />
  <Experience />
  <Projects />
  <Contact />
</main>
  </>
);

}

export default App;
