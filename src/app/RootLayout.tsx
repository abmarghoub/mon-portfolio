import { NavLink, Outlet } from "react-router-dom";
import ThemeToggle from "@/components/ThemeToggle";
import { useEffect, useState } from "react";

export default function RootLayout() {
  // Gestion de l'animation du contenu à l'affichage
  const [animate, setAnimate] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    setAnimate(true);
    return () => setAnimate(false);
  }, []);

  const navItems = [
    ["Projets", "/projects"],
    ["Parcours", "/experience"],
    ["Formations", "/education"],
    ["Certifications", "/certifications"],
    ["Contact", "/contact"]
  ];

  return (
    <div className="min-h-dvh bg-[#f5f0e6] text-neutral-900 dark:bg-zinc-900 dark:text-zinc-50">
      
      {/* HEADER FIXE */}
      <header className="sticky top-0 z-50 border-b border-black/10 dark:border-zinc-800 backdrop-blur bg-[#f5f0e6]/80 dark:bg-zinc-900/80">
        <nav className="mx-auto max-w-6xl flex items-center justify-between p-4">
          <NavLink to="/" className="font-bold text-lg">
            AblaPortfolio
          </NavLink>

          {/* Menu Desktop */}
          <div className="hidden md:flex items-center gap-4 text-sm">
            {navItems.map(([label, path]) => (
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
            <ThemeToggle />
          </div>

          {/* Menu Mobile - Hamburger */}
          <div className="md:hidden flex items-center gap-2">
            <ThemeToggle />
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-md hover:bg-black/10 dark:hover:bg-white/10"
              aria-label="Toggle menu"
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
                {mobileMenuOpen ? (
                  <path d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </nav>

        {/* Menu Mobile - Dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-black/10 dark:border-zinc-800 bg-[#f5f0e6] dark:bg-zinc-900">
            <div className="mx-auto max-w-6xl px-4 py-2 space-y-1">
              {navItems.map(([label, path]) => (
                <NavLink
                  key={path}
                  to={path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={({ isActive }) =>
                    `block px-4 py-2 rounded transition-colors ${
                      isActive
                        ? "font-semibold bg-primary/20 text-primary dark:text-accent"
                        : "text-neutral-700 dark:text-neutral-300 hover:bg-black/10 dark:hover:bg-white/10"
                    }`
                  }
                >
                  {label}
                </NavLink>
              ))}
            </div>
          </div>
        )}
      </header>

      {/* CONTENU PRINCIPAL */}
      <main
        className={`mx-auto max-w-6xl p-4 sm:p-6 pt-20 sm:pt-24 transition-opacity duration-700 ease-out ${
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
