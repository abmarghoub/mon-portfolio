import { profile } from "@/data/profile";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import profilePhoto from "@/assets/profile.jpg";

export default function Home() {
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
        <h1 className="text-4xl md:text-5xl font-bold">{profile.name}</h1>
        <p className="mt-2 text-xl">{profile.role}</p>
        <span className="rounded-full border px-3 py-1 fade-in">{profile.location}</span>
        <span className="rounded-full border px-3 py-1 fade-in">{profile.email}</span>
        <span className="rounded-full border px-3 py-1 fade-in">Master TE (2025)</span>
        <p className="mt-4 text-muted-foreground">{profile.about}</p>

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
      <div className="flex justify-center md:justify-end fade-in zoom-hover">
        <img
          src={profilePhoto}
          alt={profile.name}
          className="w-70 h-70 md:w-70 md:h-70 rounded-2xl object-cover border shadow-sm"
        />
      </div>

      {/* Compétences */}
      <div className="mt-6 md:col-span-2">
        <h2 className="text-xl font-bold mb-2 fade-in">Compétences</h2>
        <div className="grid grid-cols-5 gap-4">
          {profile.skills.map((skill, index) => (
            <div
              key={skill.name}
              className="flex flex-col items-center fade-in zoom-hover"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <img src={skill.img} alt={skill.name} className="w-12 h-12" />
              <span className="mt-2 text-sm text-center">{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
