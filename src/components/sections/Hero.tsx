import React from 'react';
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';
import Image from '../../assets/Image.png';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 pb-16">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <p className="text-primary font-medium mb-2">Hi there! I'm</p>
            <h1 className="font-bold mb-4">
              Ankit <span className="text-primary">Tiwari</span>
            </h1>
            <h2 className="text-xl md:text-2xl font-medium mb-6 text-muted">
              BCA Student, Aspiring Software Engineer
            </h2>
            <p className="text-lg mb-8 max-w-2xl">
              Passionate about building intelligent software and solving real-world problems with code.
              I'm dedicated to creating impactful solutions through software engineering and artificial intelligence.
            </p>
            
            <div className="flex flex-wrap gap-4 mb-8">
              <a href="#projects" className="btn btn-primary">
                View My Work
              </a>
              <a href="#contact" className="btn btn-secondary">
                Get In Touch
              </a>
            </div>
            
            <div className="flex items-center space-x-6">
              <a 
                href="https://github.com/ankit-tiwari-dev" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted hover:text-primary transition-colors duration-300"
                aria-label="GitHub"
              >
                <Github size={24} />
              </a>
              <a 
                href="https://www.linkedin.com/in/ankit-tiwari-at-23/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted hover:text-primary transition-colors duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin size={24} />
              </a>
              <a 
                href="mailto:ankit827691@gmail.com" 
                className="text-muted hover:text-primary transition-colors duration-300"
                aria-label="Email"
              >
                <Mail size={24} />
              </a>
            </div>
          </div>
          
          <div className="order-1 lg:order-2 flex justify-center">
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-primary/30 shadow-xl">
              <img 
                src={Image} 
                alt="Ankit Tiwari" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-primary/10"></div>
            </div>
          </div>
        </div>
      </div>
      
      <a 
        href="#about" 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center text-muted hover:text-primary transition-colors duration-300"
      >
        <span className="mb-2 text-sm">Scroll Down</span>
        <ArrowDown size={20} className="animate-bounce" />
      </a>
    </section>
  );
};

export default Hero;