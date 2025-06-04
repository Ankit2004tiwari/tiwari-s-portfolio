export interface Experience {
  company: string;
  role: string;
  period: string;
  location: string;
  description: string;
  responsibilities: string[];
  technologies: string[];
}

export const experiences: Experience[] = [
  {
    company: "Smart Finance AI Tech (Project)",
    role: "Project Lead & Developer",
    period: "Jan 2024 - Apr 2024",
    location: "Bhagwan Mahavir University",
    description: "Led the development of an AI-driven finance management system to help users track expenses, receive financial insights, and get rewarded for good habits.",
    responsibilities: [
      "Designed and implemented user-friendly interfaces and backend APIs",
      "Built AI models for spending analysis and recommendations",
      "Integrated reward systems and financial scoring mechanisms",
      "Collaborated with teammates to achieve innovative financial features",
      "Won 1st place in the Design Thinking Competition"
    ],
    technologies: ["JavaScript", "Python", "MySQL", "AI/ML Concepts", "Figma"]
  },
  {
    company: "AI-Powered Health Assistant",
    role: "Full Stack Developer",
    period: "Mar 2024 - Present",
    location: "Bhagwan Mahavir College of Computer Application",
    description: "Developing a full-featured healthcare platform with AI-based health prediction, doctor-patient management, and real-time services.",
    responsibilities: [
      "Designed relational database schema with advanced features like audit logs, localization, and AI logs",
      "Implemented appointment system, user/doctor profile handling, and feedback mechanism",
      "Planning to integrate real-time chat, video calls, and AI food analysis features",
      "Focused on GDPR-ready data management and doctor license verification features",
      "Leading the entire system architecture and backend development"
    ],
    technologies: ["MySQL", "Node.js", "Express.js", "JavaScript", "Socket.IO", "React (Planned)", "AI Concepts"]
  },
  {
    company: "Hackathons & Competitions",
    role: "Team Participant & Winner",
    period: "2022 - 2024",
    location: "India",
    description: "Participated in and won several tech competitions by building innovative, problem-solving software solutions.",
    responsibilities: [
      "Won 1st place in Interlevel College Tech Competition (BMCA)",
      "Secured 2nd place in Innovate Hackathon 2024",
      "Achieved 3rd place in Mindstorm Interlevel Competition",
      "Led and coordinated team roles and contributions",
      "Presented ideas effectively to judges and audiences"
    ],
    technologies: ["HTML", "CSS", "JavaScript", "Python", "Figma", "Problem Solving"]
  }
];
