export interface BlogSection {
  heading: string;
  text: string;
}

export interface BlogPost {
  id: string;
  title: string;
  image: string;
  category: string;
  date: string;
  introDescription: string;
  sectionsPart1: BlogSection[];
  author: {
    image: string;
    name: string;
    role: string;
    quote: string;
  };
  secondImage: string;
  sectionsPart2: BlogSection[];
}

export const blogPosts: BlogPost[] = [
  {
    id: "b1",
    title: "Design Beyond Aesthetics: How Strategy Shapes Meaningful Brands",
    image: "/img/b1.png",
    category: "Branding",
    date: "Oct 7, 2025",
    introDescription:
      "Good design can catch your eye, but great design makes you stop, think, and remember. It's easy to focus on the surface—the colors, the typography, the layout—but brands that truly last are built on something deeper: strategy. For me, design isn't just about creating what looks appealing; it's about shaping meaning through intention.",
    sectionsPart1: [
      {
        heading: "DEFINING PURPOSE BEFORE PIXELS",
        text: "Every brand begins with purpose, not visuals. I start by asking: What does this brand stand for? Who does it serve? What difference does it want to make? Strategy is about clarity, and clarity guides design. Without it, visuals may look polished but lack the depth to truly resonate.",
      },
      {
        heading: "TURNING RESEARCH INTO ROADMAPS",
        text: "Strategy gives design direction. By studying the market, mapping user behavior, and identifying opportunities, I turn raw insights into roadmaps. These roadmaps act as a compass, ensuring every design decision—whether bold or subtle—aligns with the brand's bigger picture.",
      },
    ],
    author: {
      image: "/img/author.jpg", // Update with your actual author image path
      name: "Jamil Ifat",
      role: "Design Head @ Jamil Creatives",
      quote:
        "A design's true strength isn't in how it starts, but in the connections it continues to create.",
    },
    secondImage: "/img/b2.png",
    sectionsPart2: [
      {
        heading: "BRIDGING EMOTION AND FUNCTION",
        text: "A successful brand identity masterfully balances emotion with function. If strategy is the foundation, logic builds the framework, and emotion transforms it into an experience. The goal is to craft a system where aesthetics naturally flow from utility, ensuring the brand speaks directly to the user's practical needs and desires.",
      },
      {
        heading: "BUILDING FOR LONGEVITY",
        text: "Trends are fleeting, but a well-designed brand system scales over time. I focus on developing flexible, responsive design frameworks that grow with the business. A lasting brand identity should be capable of adapting to new platforms while maintaining its core recognizable essence.",
      },
      {
        heading: "FINAL THOUGHTS",
        text: "Strategy is the difference between a pretty picture and a powerful brand. When every decision serves a clear purpose, design stops being a decorative afterthought and becomes a measurable asset. Great design doesn't just communicate—it connects and convinces.",
      },
    ],
  },
  {
    id: "b2",
    title: "From Concept to Connection: Crafting Designs That Endure",
    image: "/img/b2.png",
    category: "Strategy",
    date: "June 05, 2025",
    introDescription:
      "A concept is just an idea until it becomes an experience. Crafting designs that endure requires a ruthless commitment to clarity over cleverness. It means peeling back the layers of complexity to reveal the core essence of a brand, and then building an interactive digital ecosystem that honestly reflects that truth.",
    sectionsPart1: [
      {
        heading: "THE ART OF REDUCTION",
        text: "Minimalism isn't about taking things away; it's about making room for what matters. When we remove distractions, we allow the core message to breathe. This approach focuses the user's attention, reducing cognitive load and transforming interactions into intuitive, almost invisible workflows.",
      },
    ],
    author: {
      image: "/img/author.jpg",
      name: "Jamil Ifat",
      role: "Design Head @ Jamil Creatives",
      quote: "Simplicity is the ultimate form of sophisticated communication.",
    },
    secondImage: "/img/b3.png",
    sectionsPart2: [
      {
        heading: "CREATING DIGITAL RITUALS",
        text: "We interact with thousands of digital interfaces daily, but very few become rituals. A ritual is an action repeated because it provides deep satisfaction or value. Designing a ritual means perfecting micro-interactions, optimizing speed, and injecting delight into the most mundane tasks.",
      },
    ],
  },
  {
    id: "b3",
    title:
      "The Silent Narrative: Why Minimalism is the Ultimate Sophistication",
    image: "/img/b3.png",
    category: "Philosophy",
    date: "July 20, 2025",
    introDescription:
      "Silence in design is just as powerful as the noise. Strategic use of white space, restrained typography, and intentional pacing create a silent narrative that guides the user. This approach to digital products elevates the user experience by prioritizing understanding over sheer visual stimulation.",
    sectionsPart1: [
      {
        heading: "PACE AND RHYTHM IN LAYOUTS",
        text: "Just like music, a good layout has a rhythm. Generous padding slows the user down, allowing them to absorb complex information. Tight spacing accelerates the visual journey, perfect for scanning lists or actionable items. Mastering this rhythm is key to controlling the user's cognitive flow.",
      },
    ],
    author: {
      image: "/img/author.jpg",
      name: "Jamil Ifat",
      role: "Design Head @ Jamil Creatives",
      quote:
        "Design is not what you see, but what you feel when you navigate the invisible spaces.",
    },
    secondImage: "/img/b1.png",
    sectionsPart2: [
      {
        heading: "TYPOGRAPHY AS A VOICE",
        text: "When you rely on minimalism, your typefaces have to pull double duty. The x-height, tracking, and leading of a font dictate the tone of the conversation. A geometric sans-serif whispers modern efficiency, while a high-contrast serif speaks with authoritative heritage.",
      },
    ],
  },
  {
    id: "b4",
    title: "Digital Rituals: Creating Memorable User Journeys",
    image: "/img/b4.png",
    category: "UX Design",
    date: "August 15, 2025",
    introDescription:
      "A user journey maps the path, but digital rituals define the experience along the way. Transforming standard workflows into memorable, rewarding processes requires deep empathy for the user's emotional state, anticipating friction points before they become frustrations.",
    sectionsPart1: [
      {
        heading: "ANTICIPATORY DESIGN",
        text: "The best interfaces feel like they read your mind. Anticipatory design uses context, behavior history, and smart defaults to reduce the number of decisions a user has to make. It's the difference between asking a user 'What do you want to do?' and presenting them with 'Here is what you likely need right now.'",
      },
    ],
    author: {
      image: "/img/author.jpg",
      name: "Jamil Ifat",
      role: "Design Head @ Jamil Creatives",
      quote:
        "The interface should be an invisible bridge between intention and action.",
    },
    secondImage: "/img/b3.png",
    sectionsPart2: [
      {
        heading: "THE ENDOWMENT EFFECT IN UX",
        text: "Users value things more highly when they feel a sense of ownership. We can design for this by allowing personalization, progressive disclosure, and rewarding interaction loops. When a user invests time customizing or exploring an interface, it transforms from a tool into their personal workspace.",
      },
    ],
  },
];
