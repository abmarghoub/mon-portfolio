export type Certification = {
  title: string;
  issuer: string;
  issueDate: string;
  expiryDate?: string;
  skills?: string[];
  tags?: string[];
  image?: string;
  imageAlt?: string;
  status?: "valid" | "expired" | "revoked";
  credentialUrl?: string;
  highlights?: string[];
};

export const certifications: Certification[] = [
  {
    title: "Certification Professionnelle Hibernate & JPA",
    issuer: "MLIAEdu — Plateforme de Certification Professionnelle",
    issueDate: "2025-11",
    skills: [
      "Hibernate ORM",
      "Java Persistence API (JPA)",
      "Mapping Objet-Relationnel (ORM)",
      "Java EE",
      "Gestion de la persistance",
      "Repositories et EntityManager"
    ],
    tags: ["Hibernate", "JPA", "Java", "Backend"],
    image: "/certs/hib.webp",
    imageAlt: "Certificat MLIAEdu Hibernate & JPA",
    credentialUrl: "https://mliaedu.toubkalit.com/verify-certificate/28-4cddf507-3c78-4003-93b1-7958154795c6-684073"
  },

  {
    title: "Certification Professionnelle — Fondements et concepts avancés de la programmation Java",
    issuer: "MLIAEdu — Plateforme de Certification Professionnelle",
    issueDate: "2025-10",
    skills: [
      "Bases du langage Java",
      "Programmation orientée objet",
      "Héritage, polymorphisme, encapsulation",
      "Gestion des exceptions"
    ],
    tags: ["Java", "POO"],
    image: "/certs/java.webp",
    imageAlt: "Certificat Java",
    credentialUrl: "https://mliaedu.toubkalit.com/verify-certificate/6-4cddf507-3c78-4003-93b1-7958154795c6-893194"
  },

  {
    title: "Certification Professionnelle — Développement Front-End moderne avec React",
    issuer: "MLIAEdu — Plateforme de Certification Professionnelle",
    issueDate: "2025-09",
    skills: [
      "React.js",
      "Hooks avancés",
      "React Router",
      "Context API",
      "Optimisation des performances",
      "Composants UI modernes"
    ],
    tags: ["React", "Front-End", "JavaScript"],
    image: "/certs/react.webp",
    imageAlt: "Certificat React",
    credentialUrl: "https://mliaedu.toubkalit.com/verify-certificate/26-4cddf507-3c78-4003-93b1-7958154795c6-391534"
  }
];
