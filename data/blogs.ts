export interface BlogPost {
  id: string;
  title: string;
  image: string;
  category?: string;
  date?: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: "b1",
    title: "Design Beyond Aesthetics: How Strategy Shapes Meaningful Brands",
    image:
      "https://images.unsplash.com/photo-1771345207864-2f0016374a0a?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "Branding",
    date: "May 12, 2025",
  },
  {
    id: "b2",
    title: "From Concept to Connection: Crafting Designs That Endure",
    image:
      "https://images.unsplash.com/photo-1771518667360-ed8fb9aaebda?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "Strategy",
    date: "June 05, 2025",
  },
  {
    id: "b3",
    title:
      "The Silent Narrative: Why Minimalism is the Ultimate Sophistication",
    image:
      "https://images.unsplash.com/photo-1421789665209-c9b2a435e3dc?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "Philosophy",
    date: "July 20, 2025",
  },
  {
    id: "b4",
    title: "Digital Rituals: Creating Memorable User Journeys",
    image:
      "https://images.unsplash.com/photo-1470240731273-7821a6eeb6bd?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "UX Design",
    date: "August 15, 2025",
  },
];
