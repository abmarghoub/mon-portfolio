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
  highlights?: string[]; // ✅ ajout pour corriger l'erreur TS
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
    imageAlt: "Certificat MLIAEdu Hibernate & JPA"
  },

  {
    title: "Certification Professionnelle fondement et concepts avancés de la programmation JAVA",
    issuer: "MLIAEdu — Plateforme de Certification Professionnelle",
    issueDate: "2025-10",
    skills: [
      "Maîtrise des bases du langage Java",
      "Programmation orientée objet (classes, héritage, polymorphisme, encapsulation)",
      "Gestion des exceptions",
    ],
    tags: ["Java", "POO"],
    image: "/certs/java.webp",
    imageAlt: "Certificat Java",
  },

];
