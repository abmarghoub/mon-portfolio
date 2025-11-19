export type Project = {
  title: string;
  period?: string;
  tags: string[];
  summary: string;
  link?: string;
  repo?: string;
  image?: string;
};

export const projects: Project[] = [
  
    {
    title: "GestAbs",
    period: "2024",
    tags: ["Django","Python","OpenCV"],
    summary: "Une application de gestion d'absence par reconnaissance faciale .",
    repo: "https://github.com/abmarghoub",
  },
  {
    title: "Site immobilier",
    period: "2024",
  tags: ["PHP","Html","CSS","JavaScript","MySQL"],
    summary: "Une application web de gestion immobilière avec fonctionnalités complètes.",
    repo: "https://github.com/abmarghoub",
  },
  {
    title: "Gestion de Cabinet Médical",
    period: "2025",
  tags: ["Java","Hibernate","CSS","MySQL"],
    summary: "Une application web de gestion immobilière avec fonctionnalités complètes.",
    repo: "https://github.com/abmarghoub/mini-projet",
  }
];
