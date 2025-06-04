export interface Achievement {
  title: string;
  organization: string;
  date: string;
  description: string;
}

export const achievements: Achievement[] = [
  {
    title: "1st Place - Design Thinking Competition",
    organization: "Bhagwan Mahavir University",
    date: "November 2024",
    description:
      "Won first place in a design thinking competition for creating an innovative solution to improve campus sustainability through technology integration.",
  },
  {
    title: "2nd Place - Innovate Hackathon",
    organization: "Bhagwan Mahavir College of Computer Application",
    date: "March 2025",
    description:
      "Secured second place at the Innovate Hackathon by developing a mobile application that helps connect local volunteer opportunities with students.",
  },
  {
    title: "3rd Place - Mindstorm Competition",
    organization:
      "D.C Patel College of Computer Application & J.N.M Patel Science College",
    date: "January 2025",
    description:
      "Earned third place in the Mindstorm Competition by solving complex algorithmic challenges and data structure problems in a time-constrained environment.",
  },
  {
    title: "Dean's List Scholar",
    organization: "BCA Department",
    date: "2024-2025",
    description:
      "Honored as a Dean’s List Scholar for consistently maintaining a high GPA and academic excellence, reflecting strong dedication, discipline, and outstanding performance throughout the 2024–2025 academic year in the Bachelor of Computer Applications program.",
  },
  {
    title: "Open Source Contributor",
    organization: "GitHub",
    date: "October 2022",
    description:
      "Contributed to open-source projects by fixing bugs, enhancing features, and improving documentation. Earned GitHub’s Pull Shark and Quickdraw badges for timely, quality pull requests across personal and public repositories, showcasing consistency and collaboration in the developer community",
  },
];
