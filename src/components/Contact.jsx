import FadeInSection from "./FadeInSection";

function Contact() {
  return (
     <FadeInSection>
    <section
      id="contact"
      className="py-24 px-6 bg-gray-50 dark:bg-gray-800/40"
    >
      <div className="max-w-4xl mx-auto text-center">

        <h2 className="text-3xl font-bold mb-6
                       text-gray-900 dark:text-white">
          Get In Touch
        </h2>

        <p className="max-w-xl mx-auto mb-8
                      text-gray-600 dark:text-gray-400">
          I’m currently open to backend engineering opportunities.
          Feel free to reach out if you’d like to discuss a role,
          collaboration, or project.
        </p>

        <div className="flex flex-col sm:flex-row
                        justify-center items-center
                        gap-4">

          <a
            href="mailto:your.email@example.com"
            className="px-6 py-3 rounded-md
                       bg-[color:var(--color-tealPrimary)]
                       text-white
                       hover:opacity-90
                       transition"
          >
            Email
          </a>

          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
                    className="px-6 py-3 rounded-md
                       bg-[color:var(--color-tealPrimary)]
                       text-white
                       hover:opacity-90
                       transition"
          >
            GitHub
          </a>

          <a
            href="https://linkedin.com/in/yourusername"
            target="_blank"
            rel="noopener noreferrer"
                    className="px-6 py-3 rounded-md
                       bg-[color:var(--color-tealPrimary)]
                       text-white
                       hover:opacity-90
                       transition"
          >
            LinkedIn
          </a>

        </div>
      </div>
    </section>
    </FadeInSection>
  );
}

export default Contact;
