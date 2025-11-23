export type Experience = {
  title: string;
  company: string;
  period: string;
  location?: string;
  description: string[];
  tags: string[];

  // ✅ Ajouts pour correspondre à ce que Experience.tsx utilise
  start?: string;   // ex: "2024-03"
  end?: string;     // ex: "2024-07"
  tasks?: string[]; // utilisé dans exp.tasks
  skills?: string[]; // utilisé dans exp.skills
};

export const experiences: Experience[] = [
  {
    title: "Stagiaire Développeuse web",
    company: "Web Agency",
    period: "07/2023 — 09/2023",
    start: "2023-07",
    end: "2023-09",
    location: "Casablanca, Maroc",
    description: [
      "J’ai effectué un stage au sein d’une société où j’ai développé des interfaces web en HTML, CSS et JavaScript, tout en assurant un design responsive adapté à tous les écrans."
    ],
    tags: ["HTML/CSS/JavaScript", "Responsive Design"],
    skills: ["HTML", "CSS", "JavaScript", "Responsive Design"],
  },
  {
    title: "Projet — GestAbs : Gestion d’Absence par Reconnaissance Faciale",
    company: "Université Cadi Ayyad",
    period: "2024",
    start: "2024-02",
    end: "2024-06",
    location: "Marrakech, Maroc",
    description: [
      "Développement d’une application web pour la gestion des absences des étudiants par reconnaissance faciale.",
      "Intégration de la reconnaissance faciale avec Python et OpenCV.",
      "Backend et gestion des utilisateurs avec Django.",
      "Frontend interactif avec HTML, CSS et JavaScript."
    ],
    tags: ["Django", "Python", "OpenCV", "HTML", "CSS", "JavaScript"],
    skills: ["Django", "Python", "OpenCV", "HTML", "CSS", "JavaScript"],
  },
  {
    title: "Projet — Site Immobilier",
    company: "Université Cadi Ayyad",
    period: "2024",
    start: "2024-03",
    end: "2024-05",
    location: "Marrakech, Maroc",
    description: [
      "Développement d’un site web de gestion immobilière.",
      "Création, modification et suppression de biens immobiliers.",
      "Gestion des utilisateurs et recherche avancée.",
      "Backend en PHP et base de données MySQL, frontend avec HTML, CSS et JavaScript."
    ],
    tags: ["PHP", "HTML", "CSS", "JavaScript", "MySQL"],
    skills: ["PHP", "HTML", "CSS", "JavaScript", "MySQL"],
  },
  {
    title: "Projet — Gestion de Cabinet Médical",
    company: "Université Cadi Ayyad",
    period: "2025",
    start: "2025-11",
    end: "2025-11",
    location: "Marrakech, Maroc",
    description: [
      "Développement d’une application web pour la gestion d’un cabinet médical.",
      "Gestion des patients, rendez-vous, médecins et dossiers médicaux.",
      "Backend en Java avec Spring Boot, gestion base de données avec Hibernate et MySQL.",
      "Interface rendue avec Thymeleaf et design CSS."
    ],
    tags: ["Java", "Spring Boot", "Hibernate", "Thymeleaf", "CSS", "MySQL"],
    skills: ["Java", "Spring Boot", "Hibernate", "Thymeleaf", "CSS", "MySQL"],
  },
  {
    title: "Projet — Application Android Pizza",
    company: "Université Cadi Ayyad",
    period: "2025",
    start: "2025-11",
    end: "2025-11",
    location: "Marrakech, Maroc",
    description: [
      "Application Android développée en Java avec Android Studio.",
      "Affiche une liste de pizzas avec nom, prix, durée de préparation et image.",
      "Navigation entre écrans avec passage de données entre activités.",
      "Utilisation de ListView et Adapter personnalisé pour l’affichage des données.",
      "Intégration d’un Splash Screen animé et design de l’interface utilisateur."
    ],
    tags: ["Java", "Android Studio"],
    skills: ["Java", "Android Studio"],
  }
];
