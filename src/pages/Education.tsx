import { education } from "@/data/education";
import { Helmet } from "react-helmet-async";

function fmt(date?: string) {
  if (!date) return "Présent";
  if (!date.includes("-")) return date;
  const [y, m] = date.split("-");
  return `${m}/${y}`;
}

export default function EducationPage() {
  return (
    <section className="grid gap-6">
      <Helmet>
        <title>Formations — Portfolio</title>
        <meta
          name="description"
          content="Parcours scolaire : bac sciences, FST MIPC, licence et master en informatique à l’ENS Cadi Ayyad."
        />
      </Helmet>

      <h2 className="text-xl sm:text-2xl font-semibold fade-in">Formations</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
        {education.map((e, index) => (
          <div
            key={e.id}
            className="card fade-in zoom-hover"
            style={{ animationDelay: `${index * 0.1}s` }} // effet cascade
          >
            <h3 className="font-semibold text-lg">
              {e.title}
              <span className="block text-sm text-muted-foreground dark:text-muted-foreground">
                @ {e.school}
              </span>
            </h3>

            <p className="text-sm text-muted-foreground dark:text-muted-foreground mb-2">
              {fmt(e.start)} — {fmt(e.end)} • {e.location}
            </p>

            {e.details.length > 0 && (
              <ul className="mt-2 ms-5 list-disc text-sm">
                {e.details.map((d) => (
                  <li key={d}>{d}</li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
