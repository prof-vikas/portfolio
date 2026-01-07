import FadeInSection from "./FadeInSection";

function Experience() {
  return (
     <FadeInSection>
    <section
      id="experience"
      className="py-24 px-6 bg-gray-50 dark:bg-gray-800/40"
    >
      <div className="max-w-4xl mx-auto">

        {/* Section Title */}
        <h2 className="text-3xl font-bold mb-12
                       text-gray-900 dark:text-white">
          Experience
        </h2>

        {/* Job */}
        <div className="space-y-4">

          <h3 className="text-xl font-semibold
                         text-gray-900 dark:text-white">
            Backend Engineer · Suraj Informatics Pvt. Ltd.
          </h3>

          <p className="text-sm text-gray-500">
            2021 — Present
          </p>

          <ul className="list-disc pl-5 space-y-2
                         text-gray-600 dark:text-gray-400">
            <li>
              Designed and maintained secure backend services using
              Java and Spring Boot for enterprise and government systems.
            </li>
            <li>
              Integrated Aadhaar, DigiLocker, ULIP, and Sarathi APIs
              with authentication, logging, and error-handling mechanisms.
            </li>
            <li>
              Built scalable REST APIs and supported Android applications
              with reliable backend integrations.
            </li>
            <li>
              Worked closely with Android and frontend teams to ensure
              end-to-end feature delivery.
            </li>
          </ul>

        </div>
      </div>
    </section>
    </FadeInSection>
  );
}

export default Experience;
