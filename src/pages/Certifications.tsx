import { certifications } from "@/data/certifications";
import type { Certification } from "@/data/certifications";
import { useMemo, useState } from "react";
import { Helmet } from "react-helmet-async";
import CertificationCard from "@/components/CertificationCard";

export default function CertificationsPage() {
  const [q, setQ] = useState("");
  const [selected, setSelected] = useState<Certification | null>(null);

  const list = useMemo(
    () =>
      certifications
        .filter((c) =>
          [c.title, c.issuer, ...(c.tags ?? []), ...(c.skills ?? [])]
            .join(" ")
            .toLowerCase()
            .includes(q.toLowerCase())
        )
        .sort((a, b) => b.issueDate.localeCompare(a.issueDate)),
    [q]
  );

  return (
    <>
      <section className="grid gap-6">
        <Helmet>
          <title>Certifications — Portfolio</title>
          <meta
            name="description"
            content="Certifications professionnelles obtenues : Java, Hibernate, React."
          />
        </Helmet>

        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <h2 className="text-xl sm:text-2xl font-semibold fade-in">Certifications</h2>
          <input
            placeholder="Filtrer (ex: React, Java, Hibernate)"
            value={q}
            onChange={(e) => setQ(e.target.value)}
            className="border rounded-xl px-3 py-2 w-full sm:w-72 dark:bg-card dark:text-foreground text-sm sm:text-base"
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {list.map((c, index) => (
            <div
              key={c.title + c.issueDate}
              className="card fade-in zoom-hover"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CertificationCard c={c} onView={setSelected} />
            </div>
          ))}
        </div>
      </section>

      {/* POPUP */}
      {selected && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 fade-in"
          onClick={() => setSelected(null)}
        >
          <div
            className="bg-card dark:bg-background text-foreground dark:text-foreground rounded-2xl p-4 sm:p-6 max-w-3xl w-[95%] sm:w-[90%] max-h-[90vh] overflow-auto flex flex-col gap-4"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-center gap-2">
              <h3 className="font-semibold text-base sm:text-lg">{selected.title}</h3>
              <button
                type="button"
                className="text-xs sm:text-sm underline flex-shrink-0"
                onClick={() => setSelected(null)}
              >
                Fermer
              </button>
            </div>

            {/* IMAGE AGRANDIE */}
            {selected.image && (
              <img
                src={selected.image}
                alt={selected.imageAlt ?? selected.title}
                className="mx-auto max-h-[65vh] object-contain rounded-lg shadow"
              />
            )}

            {/* BOUTON POUR VÉRIFIER */}
            {selected.credentialUrl && (
              <a
                href={selected.credentialUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-3 bg-primary text-white text-center rounded-xl text-sm font-medium hover:opacity-90 mt-4"
              >
                Vérifier la certification
              </a>
            )}
          </div>
        </div>
      )}
    </>
  );
}
