import { experiences } from "@/data/experience";
import { Helmet } from "react-helmet-async";

function fmt(date?: string) {
  if (!date) return "Présent";
  if (!date.includes("-")) return date;
  const [y, m] = date.split("-");
  return `${m}/${y}`;
}

export default function ExperiencePage() {
  return (
    <section className="grid gap-6">
      <Helmet>
        <title>Parcours — Portfolio</title>
        <meta
          name="description"
          content="Expériences professionnelles, stages et projets académiques."
        />
      </Helmet>

      <h2 className="text-xl sm:text-2xl font-semibold fade-in">Parcours</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
        {experiences.map((exp, index) => (
          <div
            key={exp.title + exp.start}
            className="card fade-in zoom-hover"
            style={{ animationDelay: `${index * 0.1}s` }} // effet cascade
          >
            <h3 className="font-semibold text-lg">
              {exp.title}
              <span className="block text-sm text-muted-foreground">
                @ {exp.company}
              </span>
            </h3>

            <p className="text-sm text-muted-foreground mb-2">
              {fmt(exp.start)} — {fmt(exp.end)}
              {exp.location ? ` • ${exp.location}` : ""}
            </p>

            {exp.description && (
              <ul className="list-disc ms-5 text-sm mb-2">
                {exp.description.map((d) => (
                  <li key={d}>{d}</li>
                ))}
              </ul>
            )}

            {exp.tasks && (
              <ul className="list-disc ms-5 mt-2 text-sm">
                {exp.tasks.map((t) => (
                  <li key={t}>{t}</li>
                ))}
              </ul>
            )}

            {exp.skills && (
              <div className="mt-3 flex flex-wrap gap-2 text-xs">
                {exp.skills.map((s) => (
                  <span
                    key={s}
                    className="border rounded px-2 py-0.5 text-muted-foreground dark:text-muted-foreground"
                  >
                    {s}
                  </span>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
