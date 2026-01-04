import { projects } from "@/data/projects";
import { Helmet } from "react-helmet-async";

export default function ProjectsPage() {
  return (
    <section className="grid gap-6">
      <Helmet>
        <title>Projets — Portfolio</title>
        <meta name="description" content="Projets académiques et personnels." />
      </Helmet>

      <h2 className="text-xl sm:text-2xl font-semibold fade-in">Projets</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        {projects.map((proj, index) => (
          <div
            key={proj.title}
            className="card fade-in zoom-hover"
            style={{ animationDelay: `${index * 0.1}s` }} // effet cascade
          >
            {proj.image && (
              <img
                src={proj.image}
                alt={proj.title}
                className="rounded-md mb-3 w-full h-48 object-cover transition-transform duration-300 hover:scale-105"
              />
            )}
            <h3 className="font-semibold text-base sm:text-lg">{proj.title}</h3>
            <p className="text-xs sm:text-sm text-muted-foreground mb-2">{proj.period}</p>
            <p className="text-xs sm:text-sm mb-2">{proj.summary}</p>
            <p className="text-xs sm:text-sm mb-2 text-muted-foreground line-clamp-3">{proj.description}</p>

            <div className="flex flex-wrap gap-2 text-xs mt-2">
              {proj.tags.map((t) => (
                <span
                  key={t}
                  className="border rounded px-2 py-0.5 text-muted-foreground dark:text-muted-foreground"
                >
                  {t}
                </span>
              ))}
            </div>

            {proj.repo && (
              <a
                href={proj.repo}
                target="_blank"
                rel="noopener noreferrer"
                className="underline text-primary mt-2 inline-block"
              >
                Lien GitHub
              </a>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
