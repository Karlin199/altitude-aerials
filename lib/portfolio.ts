export type PortfolioItem = {
  id: string;

  title: string;

  category: string;

  location: string;

  description: string;

  image: string;

  video?: string;

  featured?: boolean;

  year: number;
};

export const portfolio: PortfolioItem[] = [
  {
    id: "coming-soon-real-estate",

    title: "Your Project Could Be Here",

    category: "Real Estate",

    location: "Central Alberta",

    description:
      "Professional aerial photography for residential and commercial real estate.",

    image: "",

    featured: true,

    year: 2026,
  },

  {
    id: "coming-soon-farm",

    title: "Farm Showcase",

    category: "Agriculture",

    location: "Central Alberta",

    description:
      "Highlighting Alberta agriculture from a unique perspective.",

    image: "",

    year: 2026,
  },

  {
    id: "coming-soon-commercial",

    title: "Commercial Property",

    category: "Commercial",

    location: "Central Alberta",

    description:
      "Helping businesses stand out with professional aerial imagery.",

    image: "",

    year: 2026,
  },

  {
    id: "coming-soon-construction",

    title: "Construction Progress",

    category: "Construction",

    location: "Central Alberta",

    description:
      "Documenting projects from start to finish with aerial updates.",

    image: "",

    year: 2026,
  },

  {
    id: "coming-soon-tourism",

    title: "Tourism",

    category: "Tourism",

    location: "Central Alberta",

    description:
      "Showcasing Alberta's landscapes and attractions.",

    image: "",

    year: 2026,
  },

  {
    id: "coming-soon-events",

    title: "Events",

    category: "Events",

    location: "Central Alberta",

    description:
      "Capturing memorable events from above.",

    image: "",

    year: 2026,
  },
];