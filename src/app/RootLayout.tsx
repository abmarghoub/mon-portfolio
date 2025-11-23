import { NavLink, Outlet } from "react-router-dom";
import ThemeToggle from "@/components/ThemeToggle";
import { useEffect, useState } from "react";

export default function RootLayout() {
  // Gestion de l'animation du contenu à l'affichage
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setAnimate(true);
    return () => setAnimate(false);
  }, []);

  return (
    <div className="min-h-dvh bg-[#f5f0e6] text-neutral-900 dark:bg-zinc-900 dark:text-zinc-50">
      
      {/* HEADER FIXE */}
      <header className="sticky top-0 z-50 border-b border-black/10 dark:border-zinc-800 backdrop-blur bg-[#f5f0e6]/80 dark:bg-zinc-900/80">
        <nav className="mx-auto max-w-6xl flex items-center justify-between p-4">
          <NavLink to="/" className="font-bold text-lg">
            MonPortfolio
          </NavLink>

          <div className="flex items-center gap-4 text-sm">
            {[
              ["Projets", "/projects"],
              ["Parcours", "/experience"],
              ["Formations", "/education"],
              ["Certifications", "/certifications"],
              ["Contact", "/contact"]
            ].map(([label, path]) => (
              <NavLink
                key={path}
                to={path}
                className={({ isActive }) =>
                  `px-2 py-1 rounded transition-colors ${
                    isActive
                      ? "font-semibold underline text-primary dark:text-accent"
                      : "text-neutral-700 dark:text-neutral-300 hover:text-primary dark:hover:text-accent"
                  }`
                }
              >
                {label}
              </NavLink>
            ))}

            {/* Bouton Dark / Light */}
            <ThemeToggle />
          </div>
        </nav>
      </header>

      {/* CONTENU PRINCIPAL */}
      <main
        className={`mx-auto max-w-6xl p-6 pt-24 transition-opacity duration-700 ease-out ${
          animate ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"
        }`}
      >
        <Outlet />
      </main>

      {/* FOOTER */}
      <footer className="border-t border-black/10 dark:border-zinc-800 py-6 text-center text-sm text-neutral-500 dark:text-zinc-400">
        © {new Date().getFullYear()} • MARGHOUB Abla
      </footer>
    </div>
  );
}
