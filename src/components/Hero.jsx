import FadeInSection from "./FadeInSection";

function Hero() {
  return (
     <FadeInSection>
    <section
      id="home"
      className="min-h-screen flex items-center
                 px-6"
    >
      <div className="max-w-4xl mx-auto space-y-6">

        {/* Small intro */}
        <p className="text-sm tracking-widest uppercase
                      text-[color:var(--color-tealPrimary)]">
          Hi, my name is
        </p>

        {/* Name */}
        <h1 className="text-4xl md:text-6xl font-bold
                       text-gray-900 dark:text-white">
          Vikas Mourya
        </h1>

        {/* Role */}
        <h2 className="text-3xl md:text-5xl font-bold
                       text-gray-700 dark:text-gray-400">
          Backend Engineer
        </h2>

        {/* Description */}
        <p className="max-w-2xl text-gray-600 dark:text-gray-400 text-lg">
          Backend Engineer with 3.5+ years of experience building
          secure APIs, enterprise applications, and Android-based
          solutions. Currently expanding into modern frontend with React.
        </p>

        {/* CTA Buttons */}
        <div className="flex space-x-4 pt-4">

          <a
            href="#projects"
            className="px-6 py-3 border rounded-md
                       border-[color:var(--color-tealPrimary)]
                       text-[color:var(--color-tealPrimary)]
                       hover:bg-[color:var(--color-tealPrimary)]
                       hover:text-white
                       transition"
          >
            View Projects
          </a>

          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-md
                       bg-gray-900 text-white
                       dark:bg-white dark:text-gray-900
                       hover:opacity-80
                       transition"
          >
            Download Resume
          </a>

        </div>
      </div>
    </section>
    </FadeInSection>
  );
}

export default Hero;
