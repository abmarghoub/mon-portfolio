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
    title: "Stagiaire Développeuse web ",
    company: "Web Agency",
    period: "07/2023 — 09/2023",
    location: "Casablanca, Maroc",
    description: [
      "J’ai effectué un stage au sein d’une société où j’ai développé des interfaces web en HTML, CSS et JavaScript, tout en assurant un design responsive adapté à tous les écrans."
    ],
    tags: [ "HTML/CSS/JavaScript", "Responsive Design"],
  },
  {
  
    title: "Projet — Application de Gestion des rendez-vous d'un Cabinet Médical",
    company: "Université Cadi Ayyad",
    period: "11/2025 — 11/2025",
    location: "Marrakech, Maroc",
    description: [
      "Développement d’une application web pour la gestion des rendez-vous médicaux",
      "Gestion des patients, médecins et créneaux de rendez-vous",
      "Base de données MySQL pour le stockage et le suivi des consultations"
    ],
    tags: ["Java", "MySQL", "MVC"],

  }];