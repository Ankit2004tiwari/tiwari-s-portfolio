export interface Certification {
  title: string;
  issuer: string;
  date: string;
  description: string;
  credentialURL?: string;
}

export const certifications: Certification[] = [
  {
    title: "Java Programming",
    issuer: "HackerRank",
    date: "November 2024",
    description: "Certification demonstrating proficiency in Java programming language, covering topics such as data structures, algorithms, and object-oriented programming.",
    credentialURL: "https://www.hackerrank.com/certificates/f8a50fdbf418"
  },
  {
    title: "Build Real World AI Applications with Gemini and Imagen Skill Badge",
    issuer: "Google Cloud",
    date: "May 2025",
    description: "This badge recognizes expertise in building AI applications using Google's Gemini and Imagen technologies. It demonstrates proficiency in integrating cutting-edge AI models for real-world use cases, including generative AI and image processing solutions.",
    credentialURL: "https://www.cloudskillsboost.google/public_profiles/84a2de7d-80aa-45ef-885b-e3bc61fbfc83/badges/15444917?utm_medium=social&utm_source=linkedin&utm_campaign=ql-social-share"
  },
  {
    title: "Prompt Design in Vertex AI",
    issuer: "Google Cloud",
    date: "May 2025",
    description: "This certification validates knowledge of crafting effective AI prompts within Vertex AI. It showcases skills in designing precise, structured, and optimized prompts to enhance AI model responses, benefiting applications in NLP and generative AI tasks.",
    credentialURL: "https://www.cloudskillsboost.google/public_profiles/84a2de7d-80aa-45ef-885b-e3bc61fbfc83/badges/15371646?utm_medium=social&utm_source=linkedin&utm_campaign=ql-social-share"
  },
  {
    title: "Python Programming",
    issuer: "Infosys Springboard",
    date: "May 2023",
    description: "Comprehensive certification covering Python programming fundamentals, data manipulation, analysis, and visualization for data science applications.",
    credentialURL: "https://infyspringboard.onwingspan.com/web/en/cert/example"
  },
  {
    title: "Data Structures & Algorithms",
    issuer: "GeeksForGeeks",
    date: "May 2025",
    description: "Certification demonstrating problem-solving abilities using various data structures and algorithms, focusing on efficiency and optimization.",
    credentialURL: "https://www.geeksforgeeks.org/certificate/25b05a101ce37ce5729b8730c37fabd2?utm_source=socials&utm_medium=cc_link"
  },
  {
    title: "JavaScript Programming",
    issuer: "HackerRank",
    date: "November 2024",
    description: "Certification validating fundamental JavaScript programming skills, including ES6 features, asynchronous programming, and DOM manipulation.",
    credentialURL: "https://www.hackerrank.com/certificates/fffbc268a7c3"
  }
];