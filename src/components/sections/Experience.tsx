import React, { useState } from 'react';
import SectionTitle from '../ui/SectionTitle';
import { experiences } from '../../data/experiences';
import { Calendar, MapPin } from 'lucide-react';

const Experience: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section id="experience" className="bg-card">
      <div className="container">
        <SectionTitle>Experience</SectionTitle>
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-3">
            <div className="flex lg:flex-col overflow-x-auto lg:overflow-visible scrollbar-hide">
              {experiences.map((exp, index) => (
                <button
                  key={index}
                  onClick={() => setActiveTab(index)}
                  className={`whitespace-nowrap px-4 py-3 text-left transition-all duration-300
                    ${activeTab === index 
                      ? 'bg-primary text-white rounded-l-lg lg:rounded-l-none lg:rounded-r-lg' 
                      : 'hover:bg-primary/10 text-muted'}`}
                >
                  {exp.company}
                </button>
              ))}
            </div>
          </div>
          
          <div className="lg:col-span-9">
            <div className="card">
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-6">
                <div>
                  <h3 className="text-2xl font-semibold">{experiences[activeTab].role}</h3>
                  <h4 className="text-lg text-primary">{experiences[activeTab].company}</h4>
                </div>
                <div className="flex flex-col md:items-end mt-2 md:mt-0">
                  <div className="flex items-center text-muted">
                    <Calendar size={16} className="mr-2" />
                    <span>{experiences[activeTab].period}</span>
                  </div>
                  <div className="flex items-center text-muted mt-1">
                    <MapPin size={16} className="mr-2" />
                    <span>{experiences[activeTab].location}</span>
                  </div>
                </div>
              </div>
              
              <p className="mb-6 text-muted">{experiences[activeTab].description}</p>
              
              <ul className="space-y-3">
                {experiences[activeTab].responsibilities.map((item, i) => (
                  <li key={i} className="flex">
                    <span className="text-primary mr-2">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              
              <div className="flex flex-wrap gap-2 mt-6">
                {experiences[activeTab].technologies.map((tech, i) => (
                  <span 
                    key={i} 
                    className="px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;