import React from 'react';
import SectionTitle from '../ui/SectionTitle';
import { certifications } from '../../data/certifications';
import { Award, ExternalLink, Calendar } from 'lucide-react';

const Certifications: React.FC = () => {
  return (
    <section id="certifications" className="bg-card">
      <div className="container">
        <SectionTitle>Certifications</SectionTitle>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certifications.map((certification, index) => (
            <div 
              key={index} 
              className="card hover:transform hover:-translate-y-2 transition-all duration-300"
            >
              <div className="flex items-center mb-4">
                <div className="p-3 bg-primary/10 rounded-full mr-4">
                  <Award size={24} className="text-primary" />
                </div>
                <h3 className="text-xl font-semibold">{certification.title}</h3>
              </div>
              
              <p className="text-primary font-medium mb-1">{certification.issuer}</p>
              <div className="flex items-center text-muted mb-4">
                <Calendar size={16} className="mr-2" />
                <span>{certification.date}</span>
              </div>
              
              <p className="text-muted mb-6">{certification.description}</p>
              
              {certification.credentialURL && (
                <a 
                  href={certification.credentialURL} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-primary hover:underline"
                >
                  <span className="mr-1">View Credential</span>
                  <ExternalLink size={16} />
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;