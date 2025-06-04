import React from 'react';
import SectionTitle from '../ui/SectionTitle';
import { Code, Cpu, Brain, BookOpen } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="bg-card">
      <div className="container">
        <SectionTitle>About Me</SectionTitle>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-lg mb-6">
              I am a driven and curious BCA student with strong skills in C, C++, Java, Python, JavaScript, 
              and frontend technologies like HTML, CSS, and React.js. My interests include software engineering, 
              AI/ML, and data structures & algorithms.
            </p>
            <p className="text-lg mb-6">
              I enjoy building impactful projects, participating in hackathons, and continuously learning 
              about emerging technologies. My goal is to develop solutions that solve real-world problems 
              and make a positive impact on society.
            </p>
            <p className="text-lg">
              When I'm not coding, I'm either exploring new technologies, contributing to open source projects,
              or participating in coding competitions to sharpen my problem-solving skills.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="card hover:border-primary hover:border">
              <Code size={36} className="text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">Software Development</h3>
              <p className="text-muted">
                Passionate about creating clean, efficient, and scalable software solutions.
              </p>
            </div>
            
            <div className="card hover:border-primary hover:border">
              <Cpu size={36} className="text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">AI & Machine Learning</h3>
              <p className="text-muted">
                Exploring the fascinating world of artificial intelligence and machine learning.
              </p>
            </div>
            
            <div className="card hover:border-primary hover:border">
              <Brain size={36} className="text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">Problem Solving</h3>
              <p className="text-muted">
                Enjoy tackling complex problems with algorithmic and creative approaches.
              </p>
            </div>
            
            <div className="card hover:border-primary hover:border">
              <BookOpen size={36} className="text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">Continuous Learning</h3>
              <p className="text-muted">
                Always eager to learn new technologies and improve my skills.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;