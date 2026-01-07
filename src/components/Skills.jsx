import FadeInSection from "./FadeInSection";

function Skills() {
  return (
     <FadeInSection>
    <section
      id="skills"
      className="py-24 px-6"
    >
      <div className="max-w-4xl mx-auto">

        {/* Section Title */}
        <h2 className="text-3xl font-bold mb-12
                       text-gray-900 dark:text-white">
          Skills
        </h2>

        <div className="grid md:grid-cols-3 gap-8">

          {/* Backend */}
          <div>
            <h3 className="text-xl font-semibold mb-4
                           text-[color:var(--color-tealPrimary)]">
              Backend
            </h3>
            <ul className="space-y-2 text-gray-600 dark:text-gray-400">
              <li>Java</li>
              <li>Spring Boot</li>
              <li>REST APIs</li>
              <li>JWT & Security</li>
              <li>PostgreSQL / MySQL</li>
            </ul>
          </div>

          {/* Android */}
          <div>
            <h3 className="text-xl font-semibold mb-4
                           text-[color:var(--color-tealPrimary)]">
              Android
            </h3>
            <ul className="space-y-2 text-gray-600 dark:text-gray-400">
              <li>Java</li>
              <li>MVVM Architecture</li>
              <li>Retrofit</li>
              <li>Room Database</li>
              <li>WorkManager</li>
            </ul>
          </div>

          {/* Frontend */}
          <div>
            <h3 className="text-xl font-semibold mb-4
                           text-[color:var(--color-tealPrimary)]">
              Frontend
            </h3>
            <ul className="space-y-2 text-gray-600 dark:text-gray-400">
              <li>React</li>
              <li>JavaScript (ES6+)</li>
              <li>HTML5 & CSS3</li>
              <li>Tailwind CSS</li>
              <li>Responsive Design</li>
            </ul>
          </div>

        </div>
      </div>
    </section>
    </FadeInSection>
  );
}

export default Skills;
