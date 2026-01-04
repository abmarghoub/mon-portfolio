import { profile } from "@/data/profile";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { useState } from "react";
import profilePhoto from "@/assets/profile.jpg";

export default function Home() {
  const [isImageModalOpen, setIsImageModalOpen] = useState(false);

  return (
    <section className="grid gap-6 md:grid-cols-2 items-center">
      <Helmet>
        <title>{profile.name} — Portfolio</title>
        <meta
          name="description"
          content="Portfolio professionnel : IA, SIG, DevSecOps, Android, projets et certifications."
        />
      </Helmet>

      {/* Colonne gauche : texte */}
      <div className="fade-in">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold">{profile.name}</h1>
        <p className="mt-2 text-lg sm:text-xl">{profile.role}</p>
        <div className="mt-3 flex flex-wrap gap-2">
          <span className="rounded-full border px-3 py-1 text-sm fade-in">{profile.location}</span>
          <span className="rounded-full border px-3 py-1 text-sm fade-in break-all">{profile.email}</span>
          <span className="rounded-full border px-3 py-1 text-sm fade-in">Master TE (2025)</span>
        </div>
        <p className="mt-4 text-sm sm:text-base text-muted-foreground">{profile.about}</p>

       {/* Liens vers projets et contact comme spans arrondis */}
<div className="mt-6 flex flex-wrap gap-2">
  <Link
    to="/projects"
    className="rounded-full border px-4 py-2 text-sm font-medium text-primary hover:bg-primary/20 transition-all duration-300 cursor-pointer fade-in zoom-hover"
  >
    Voir les projets
  </Link>

  <Link
    to="/contact"
    className="rounded-full border px-4 py-2 text-sm font-medium text-primary hover:bg-primary/20 transition-all duration-300 cursor-pointer fade-in zoom-hover"
  >
    Contact
  </Link>

  {profile.socials.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border px-4 py-2 text-sm font-medium text-primary hover:bg-primary/20 transition-all duration-300 cursor-pointer fade-in zoom-hover"
              >
                {social.label}
              </a>
            ))}
</div>


        <div className="mt-6 flex flex-wrap gap-2 text-sm">

        </div>
      </div>

      {/* Colonne droite : photo */}
      <div className="flex justify-center md:justify-end fade-in zoom-hover mt-4 md:mt-0">
        <img
          src={profilePhoto}
          alt={profile.name}
          onClick={() => setIsImageModalOpen(true)}
          className="w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 rounded-2xl object-cover border shadow-sm cursor-pointer transition-transform hover:scale-105"
        />
      </div>

      {/* Compétences */}
      <div className="mt-6 md:col-span-2">
        <h2 className="text-lg sm:text-xl font-bold mb-4 fade-in">Compétences</h2>
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-3 sm:gap-4">
          {profile.skills.map((skill, index) => (
            <div
              key={skill.name}
              className="flex flex-col items-center fade-in zoom-hover"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <img src={skill.img} alt={skill.name} className="w-10 h-10 sm:w-12 sm:h-12" />
              <span className="mt-1.5 sm:mt-2 text-xs sm:text-sm text-center leading-tight">{skill.name}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Modal pour agrandir l'image */}
      {isImageModalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm fade-in"
          onClick={() => setIsImageModalOpen(false)}
        >
          <div className="relative max-w-4xl w-[95%] sm:w-[90%] max-h-[90vh] flex items-center justify-center">
            <button
              onClick={() => setIsImageModalOpen(false)}
              className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors z-10 bg-black/50 rounded-full p-2"
              aria-label="Fermer"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <img
              src={profilePhoto}
              alt={profile.name}
              className="max-w-full max-h-[90vh] rounded-2xl object-contain shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        </div>
      )}
    </section>
  );
}
