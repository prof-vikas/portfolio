import FadeInSection from "./FadeInSection";

function Projects() {
  return (
     <FadeInSection>
    <section
      id="projects"
      className="py-24 px-6"
    >
      <div className="max-w-5xl mx-auto">

        {/* Section Title */}
        <h2 className="text-3xl font-bold mb-12
                       text-gray-900 dark:text-white">
          Projects
        </h2>

        <div className="space-y-12">

          {/* Project 1 */}
          <div className="border rounded-lg p-6
                          border-gray-200 dark:border-gray-700
                          bg-white dark:bg-gray-900">

            <h3 className="text-xl font-semibold
                           text-gray-900 dark:text-white">
              Aadhaar Verification Backend System
            </h3>

            <p className="mt-2 text-gray-600 dark:text-gray-400">
              Secure backend service to handle Aadhaar OTP generation,
              verification workflows, and third-party government API
              integration with proper logging and failure handling.
            </p>

            <p className="mt-4 text-sm text-gray-500">
              <span className="font-medium">Tech:</span> Java, Spring Boot, REST APIs, JWT, PostgreSQL
            </p>

            <div className="mt-4 flex space-x-4 text-sm">
              <a
                href="#"
                className="text-[color:var(--color-tealPrimary)] hover:underline"
              >
                GitHub
              </a>
              <a
                href="#"
                className="text-[color:var(--color-tealPrimary)] hover:underline"
              >
                Documentation
              </a>
            </div>
          </div>

          {/* Project 2 */}
          <div className="border rounded-lg p-6
                          border-gray-200 dark:border-gray-700
                          bg-white dark:bg-gray-900">

            <h3 className="text-xl font-semibold
                           text-gray-900 dark:text-white">
              Android Location Tracking System
            </h3>

            <p className="mt-2 text-gray-600 dark:text-gray-400">
              Android application for background location tracking,
              offline storage, retry-based syncing, and backend
              integration for real-time monitoring.
            </p>

            <p className="mt-4 text-sm text-gray-500">
              <span className="font-medium">Tech:</span> Android (Java), MVVM, Room, WorkManager, Retrofit
            </p>

            <div className="mt-4 flex space-x-4 text-sm">
              <a
                href="#"
                className="text-[color:var(--color-tealPrimary)] hover:underline"
              >
                GitHub
              </a>
            </div>
          </div>

          {/* Project 3 */}
          <div className="border rounded-lg p-6
                          border-gray-200 dark:border-gray-700
                          bg-white dark:bg-gray-900">

            <h3 className="text-xl font-semibold
                           text-gray-900 dark:text-white">
              Portfolio Website (React)
            </h3>

            <p className="mt-2 text-gray-600 dark:text-gray-400">
              Modern, responsive developer portfolio built with React,
              Tailwind CSS, and dark/light theming to showcase
              experience and projects.
            </p>

            <p className="mt-4 text-sm text-gray-500">
              <span className="font-medium">Tech:</span> React, Tailwind CSS, Vite
            </p>

            <div className="mt-4 flex space-x-4 text-sm">
              <a
                href="#"
                className="text-[color:var(--color-tealPrimary)] hover:underline"
              >
                GitHub
              </a>
              <a
                href="#"
                className="text-[color:var(--color-tealPrimary)] hover:underline"
              >
                Live Demo
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
    </FadeInSection>
  );
}

export default Projects;