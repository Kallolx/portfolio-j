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
    title: "Crafting Orrisé: An Immersive Study in Fragrance Identity",
    image: "https://images.unsplash.com/photo-1523293182086-7651a899d37f?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    year: 2025,
    client: "Orrisé Paris",
    projectType: "Branding",
    overview:
      "Orrisé Paris needed a visual identity that felt as refined as its scents. We built a brand language rooted in restraint and elegance — where every detail whispers luxury rather than shouting it.",
    approach:
      "We immersed ourselves in the world of niche perfumery, studying how the finest houses communicate heritage and artisanship. The goal was a system that felt timeless on first contact, effortless in application.",
    solution:
      "A serif-led identity paired with a pale, earthy palette and tactile print finishes. Packaging became a ritual object — each unboxing a deliberate, sensory experience that mirrors the fragrance itself.",
    result:
      "Launch sell-out in the first weekend. Press coverage in Wallpaper* and Monocle. The brand became a reference point in the indie fragrance space within its debut quarter.",
  },
  {
    id: 2,
    title: "Delivo: Creating a Visual Language for Seamless Dining Experiences",
    image: "https://images.unsplash.com/photo-1561203326-d65d921b5939?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    year: 2025,
    client: "Delivo",
    projectType: "UI Design",
    overview:
      "Delivo was scaling fast but its identity was stuck in the early startup era — oversaturated, generic, forgettable. They needed a brand that could grow with them and command trust at every touchpoint.",
    approach:
      "We began by auditing every visual and verbal touchpoint against their top competitors. The insight was clear: confidence and clarity were underutilised advantages in a crowded space full of noise and neon.",
    solution:
      "A bold, geometric mark with a motion-first identity system. Deep navy and warm cream replaced overused oranges, with a typographic voice that spoke directly and without filler — reflecting speed and precision.",
    result:
      "App store rating improved by 0.8 points post-rebrand. B2B pitch conversion up 34%. The new identity landed Delivo a featured slot in TechCrunch's European startup spotlight.",
  },
  {
    id: 3,
    title: "Designing Clarity: Branding for a Real Estate Management System",
    image: "https://images.unsplash.com/photo-1771520719118-9a6fc6e04574?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    year: 2024,
    client: "Studio Halcyon",
    projectType: "Web Design",
    overview:
      "A duo of architects leaving a major firm to launch their own studio needed more than a logo — they needed a story, a posture, and a digital home that could earn trust before the first meeting.",
    approach:
      "Strategy-first. We ran a two-day workshop to unearth their values, target client profiles, and the emotional territory they wanted to own. From there, every creative decision was anchored to that foundation.",
    solution:
      "A restrained identity inspired by architectural drafting — precise marks, generous white space, and a website structured like a well-planned building. Clean, confident, and unhurried in its delivery.",
    result:
      "Three inbound client enquiries within the first two weeks of launch. Shortlisted for the 2024 Dezeen Awards emerging studio category. Fully booked for Q1 of their first trading year.",
  },
];
