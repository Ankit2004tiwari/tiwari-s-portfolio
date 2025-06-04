import React from 'react';
import {
  Code2,
  Database,
  Globe,
  LayoutGrid,
  Cpu,
  ServerCog,
  PenTool,
  BrainCircuit,
  GitBranch,
  Terminal,
  Layers,
  Workflow
} from 'lucide-react';

export interface Skill {
  name: string;
  category: string;
  proficiency: number;
  icon: React.ReactNode;
}

export const skillsData: Skill[] = [
  // Programming Languages
  {
    name: "JavaScript",
    category: "languages",
    proficiency: 90,
    icon: <Code2 size={40} className="text-primary" />
  },
  {
    name: "TypeScript",
    category: "languages",
    proficiency: 85,
    icon: <Code2 size={40} className="text-primary" />
  },
  {
    name: "Python",
    category: "languages",
    proficiency: 80,
    icon: <Code2 size={40} className="text-primary" />
  },
  {
    name: "Java",
    category: "languages",
    proficiency: 75,
    icon: <Code2 size={40} className="text-primary" />
  },
  {
    name: "C++",
    category: "languages",
    proficiency: 85,
    icon: <Code2 size={40} className="text-primary" />
  },
  {
    name: "C",
    category: "languages",
    proficiency: 90,
    icon: <Code2 size={40} className="text-primary" />
  },
  
  // Frontend
  {
    name: "HTML5",
    category: "frontend",
    proficiency: 95,
    icon: <Globe size={40} className="text-primary" />
  },
  {
    name: "CSS3",
    category: "frontend",
    proficiency: 90,
    icon: <PenTool size={40} className="text-primary" />
  },
  {
    name: "React.js",
    category: "frontend",
    proficiency: 85,
    icon: <LayoutGrid size={40} className="text-primary" />
  },
  {
    name: "Tailwind CSS",
    category: "frontend",
    proficiency: 90,
    icon: <PenTool size={40} className="text-primary" />
  },
  {
    name: "Redux",
    category: "frontend",
    proficiency: 75,
    icon: <Workflow size={40} className="text-primary" />
  },
  
  // Backend
  {
    name: "Node.js",
    category: "backend",
    proficiency: 80,
    icon: <ServerCog size={40} className="text-primary" />
  },
  {
    name: "Express.js",
    category: "backend",
    proficiency: 75,
    icon: <ServerCog size={40} className="text-primary" />
  },
  {
    name: "MongoDB",
    category: "backend",
    proficiency: 70,
    icon: <Database size={40} className="text-primary" />
  },
  {
    name: "SQL",
    category: "backend",
    proficiency: 75,
    icon: <Database size={40} className="text-primary" />
  },
  
  // Tools & Others
  {
    name: "Git",
    category: "tools",
    proficiency: 85,
    icon: <GitBranch size={40} className="text-primary" />
  },
  {
    name: "Docker",
    category: "tools",
    proficiency: 65,
    icon: <Layers size={40} className="text-primary" />
  },
  {
    name: "Linux",
    category: "tools",
    proficiency: 70,
    icon: <Terminal size={40} className="text-primary" />
  },
  
  // AI/ML
  {
    name: "TensorFlow",
    category: "AI/ML",
    proficiency: 60,
    icon: <BrainCircuit size={40} className="text-primary" />
  },
  {
    name: "Machine Learning",
    category: "AI/ML",
    proficiency: 65,
    icon: <Cpu size={40} className="text-primary" />
  }
];