export type Project = {
  title: string;
  period?: string;
  tags: string[];
  summary: string;
  description?: string;
  link?: string;
  repo?: string;
  image?: string;
};

export const projects: Project[] = [
  {
    title: "Student Attention",
    period: "2026",
    tags: ["Machine Learning", "OpenCV", "MediaPipe", "Streamlit"],
    summary: "Une application d'analyse en temps réel du comportement des étudiants pour mesurer leur niveau d'attention.",
    description: "Student Attention est une application qui analyse en temps réel le comportement des étudiants pour mesurer leur niveau d'attention. L'application utilise des techniques de machine learning et de vision par ordinateur pour détecter et analyser les signaux comportementaux des étudiants pendant les cours. Elle peut identifier les indicateurs d'attention comme la direction du regard, les mouvements de la tête, et les postures. L'interface utilisateur est développée avec Streamlit, offrant une visualisation en temps réel des données d'attention et des statistiques pour les enseignants.",
    repo: "https://github.com/abmarghoub",
  },
  {
    title: "StarGallery",
    period: "2025",
    tags: ["Java", "Gradle", "Android Studio"],
    summary: "Une application Android pour évaluer les légendes du Real Madrid.",
    description: "StarGallery est une application Android dédiée aux légendes du Real Madrid. L'application permet aux utilisateurs de découvrir et d'évaluer les plus grandes icônes qui ont marqué l'histoire du club madrilène. Les utilisateurs peuvent consulter les profils des légendes, puis leur attribuer des notes et des évaluations. L'application offre une interface intuitive et moderne pour célébrer l'héritage des stars du Real Madrid et permettre aux fans d'exprimer leur appréciation pour ces joueurs emblématiques.",
    repo: "https://github.com/abmarghoub/StarGallery",
  },
  {
    title: "Application Android Pizza",
    period: "2025",
    tags: ["Java", "Android Studio"],
    summary: "Une application Android qui affiche une liste de pizzas avec détails et images.",
    description: "Cette application Android permet d'afficher une liste de pizzas avec leur nom, prix, durée de préparation et image. L'utilisateur peut accéder à un détail complet de chaque pizza, naviguer facilement entre les écrans grâce à un passage de données entre activités, et bénéficie d'un Splash Screen animé au lancement de l'application. Le projet met en œuvre un modèle de données orienté objet et un Adapter personnalisé pour gérer efficacement l'affichage dans une ListView.",
    repo: "https://github.com/abmarghoub/LAB-5-Pizza",
  },
  {
    title: "Gestion de Cabinet Médical",
    period: "2025",
    tags: ["Java", "Hibernate", "CSS", "MySQL", "Spring Boot"],
    summary: "Une application web de gestion d'un cabinet médical.",
    description: "Ce projet consiste à gérer les patients, les rendez-vous, les médecins et les dossiers médicaux. L'application utilise Java avec Spring Boot pour le backend, Hibernate pour la gestion des bases de données relationnelles, MySQL pour le stockage et CSS pour le design de l'interface utilisateur.",
    repo: "https://github.com/abmarghoub/mini-projet",
  },
  {
    title: "GestAbs",
    period: "2024",
    tags: ["Django", "Python", "OpenCV", "HTML", "CSS", "JavaScript"],
    summary: "Une application de gestion d'absence par reconnaissance faciale.",
    description: "GestAbs est une application web permettant de suivre les absences des étudiants grâce à la reconnaissance faciale. Elle permet de marquer les présences automatiquement, gérer les utilisateurs et leurs notes. L'application combine Django pour le backend, Python pour les scripts de reconnaissance faciale et HTML/CSS/JS pour l'interface web.",
    repo: "https://github.com/abmarghoub",
  },
  {
    title: "Site immobilier",
    period: "2024",
    tags: ["PHP", "HTML", "CSS", "JavaScript", "MySQL"],
    summary: "Une application web de gestion immobilière avec fonctionnalités complètes.",
    description: "Ce site web permet de gérer des biens immobiliers avec ajout, modification et suppression de propriétés, gestion des utilisateurs, recherche et reservation pour les biens immobiliers . L'application utilise PHP pour le backend, MySQL pour la base de données, et HTML/CSS/JavaScript pour le frontend.",
    repo: "https://github.com/abmarghoub",
  }
];
