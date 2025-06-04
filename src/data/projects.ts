export interface Project {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  github?: string;
  demo?: string;
}

export const projects: Project[] = [
  {
    title: "AI Study Assistant",
    description: "An AI-powered study platform that helps students learn efficiently through personalized content, memory techniques, emotional AI, and productivity boosters. Built using React, Node.js, and MySQL.",
    image: "https://images.pexels.com/photos/4974915/pexels-photo-4974915.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    technologies: ["React", "TypeScript", "Node.js", "Express.js", "MySQL", "AI/ML"],
    github: "https://github.com/ankit-tiwari-dev/ai-study-assistant",
    demo: "https://ai-study-assistant.example.com"
  },
  {
    title: "Smart Finance AI Tech",
    description: "An AI-driven personal finance management system for youth that helps track expenses, provides investment advice, and rewards good spending habits.",
    image: "https://images.pexels.com/photos/4386374/pexels-photo-4386374.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    technologies: ["React", "Node.js", "Express", "MongoDB", "Machine Learning"],
    github: "https://github.com/ankit-tiwari-dev/ai-finance-tech",
    demo: "https://smart-finance-tech.example.com"
  },
  {
    title: "AI Powered Health Assistant",
    description: "A complete healthcare system to manage appointments, prescriptions, medical records, doctor-patient profiles, real-time chat, health tracking, and AI-powered food and health analysis.",
    image: "https://images.pexels.com/photos/3957987/pexels-photo-3957987.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    technologies: ["React", "Node.js", "Express.js", "MySQL", "AI/ML"],
    github: "https://github.com/ankit-tiwari-dev/ai-health-assistant",
    demo: "https://health-assistant.example.com"
  }
];