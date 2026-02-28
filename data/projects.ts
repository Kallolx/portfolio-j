export interface Project {
  id: number;
  title: string;
  image: string;
  year: number;
  client: string;
  projectType: string;
  overview: string;
  approach: string;
  solution: string;
  result: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "Scaling Orrisé: A Technical SEO Case Study in Luxury Retail",
    image: "/img/1.png",
    year: 2025,
    client: "Orrisé Paris",
    projectType: "Technical SEO",
    overview:
      "Orrisé Paris needed to scale its organic reach beyond its local market. I implemented a global technical SEO strategy focusing on international targeting, site performance, and high-intent keyword optimization.",
    approach:
      "I began with a comprehensive technical audit, identifying crawlability issues and site speed bottlenecks. Using data-driven analysis, I re-architected the site structure to improve search engine accessibility.",
    solution:
      "A complete technical overhaul including server-side rendering optimizations, structured data implementation, and a prioritized keyword strategy focused on luxury fragrance acquisition.",
    result:
      "150% increase in organic revenue within 6 months. Top 3 rankings for primary luxury fragrance keywords. Exceptional Core Web Vitals across all product pages.",
  },
  {
    id: 2,
    title: "Delivo: Engineering a High-Performance Web Architecture",
    image: "/img/2.png",
    year: 2025,
    client: "Delivo",
    projectType: "Web App Development",
    overview:
      "Delivo's platform was struggling with slow load times and inconsistent performance. I rebuilt the core architecture to ensure seamless service delivery and a superior user experience at scale.",
    approach:
      "I analyzed the legacy codebase to identify performance leaks and redundant API calls. The focus was on moving to a more modular, high-performance architecture that could handle rapid user scaling.",
    solution:
      "A complete rebuild using Next.js and Node.js. Optimized the entire data fetching layer and implemented advanced caching strategies to ensure sub-second page loads globally.",
    result:
      "Lighthouse performance scores reached a consistent 98/100. User retention increased by 22% and server costs were reduced by 30% due to architecture efficiencies.",
  },
  {
    id: 3,
    title: "Designing for Growth: SEO-First Platform for Studio Halcyon",
    image: "/img/3.png",
    year: 2024,
    client: "Studio Halcyon",
    projectType: "SEO & Web App Dev",
    overview:
      "A boutique real estate firm needed a digital presence that actually converted. I designed and developed a search-optimized platform that ranks for competitive local real estate terms.",
    approach:
      "I integrated technical SEO into the core architecture of the web application. From site map generation to dynamic metadata, every technical decision was data-driven for search visibility.",
    solution:
      "A high-conversion, Gatsby-driven platform with an integrated headless CMS. Automated SEO workflows and performance-first development ensured a fast, reliable, and visible digital home.",
    result:
      "Ranked #1 for 12 primary service keywords within 4 months. Three inbound high-value client enquiries within the first two weeks of launch.",
  },
];
