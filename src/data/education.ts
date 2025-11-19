export type Education = {
  id: string;
  title: string;      // Intitulé (Master, Licence, Bac…)
  school: string;     // Nom de l’établissement
  start: string;      // "YYYY-MM" ou juste "YYYY"
  end?: string;       // "YYYY-MM" ou "YYYY" ou undefined (= Présent)
  location: string;   // Ville, pays
  details: string[];  // Puces de description
};

export const education: Education[] = [
  {
    id: "master-ens",
    title: "Master Technologies emergentes",
    school: "ENS – Université Cadi Ayyad",
    start: "2023-09",
    location: "Marrakech, Maroc",
    details: [
      "Deep Learning","Developpement et design web","Governance des SI", "Reseaux et securite", "RA/RV"
    ]
  },
  {
    id: "licence-ens",
    title: "Licence Informatique",
    school: "ENS – Université Cadi Ayyad",
    start: "2021-09",
    end: "2024-07",
    location: "Marrakech, Maroc",
    details: [
      "Reseau","Developpement web","Structure de donnees","Algorithmique","Base de donnees", "Systeme d'exploitation", "Programmation en C"
      ,"Mention Bien"
    ]
  },
  {
    id: "fst-gegm",
    title: "Tronc commun -Génie Electrique et Génie Mécanique",
    school: "Université Sultan Moulay Slimane - FST",
    start: "2020-10",
    end: "2021-07",
    location: "Béni Mellal, Maroc",
    details: [
       "Programmation en C", "Analyse", "Algebre", "Gestion", "Mécanique du point", "Thermodynamique", "Circuits électriques"
    ]
  },
  {
    id: "bac-smb",
    title: "Baccalauréat — Sciences Mathématiques B (option français)",
    school: "Lycée Qualifiant Ibno Mandour",
    start: "2019-09",
    end: "2020-07",
    location: "Casablanca, Maroc",
    details: [
      "Mention : Bien.",
      "Mathematique", "Physique", "Sciences d'ingeniere"
    ]
  }
];
