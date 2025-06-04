import React, { useState } from 'react';
import SectionTitle from '../ui/SectionTitle';
import { skillsData } from '../../data/skills';

const Skills: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredSkills = activeCategory === 'all' 
    ? skillsData 
    : skillsData.filter(skill => skill.category === activeCategory);

  const categories = ['all', ...new Set(skillsData.map(skill => skill.category))];

  return (
    <section id="skills">
      <div className="container">
        <SectionTitle>My Skills</SectionTitle>
        
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 capitalize
                ${activeCategory === category 
                  ? 'bg-primary text-white' 
                  : 'bg-card hover:bg-primary/10'}`}
            >
              {category}
            </button>
          ))}
        </div>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {filteredSkills.map((skill, index) => (
            <div 
              key={index} 
              className="card flex flex-col items-center text-center hover:border hover:border-primary group"
            >
              <div className="w-16 h-16 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                {skill.icon}
              </div>
              <h3 className="text-lg font-medium mb-1">{skill.name}</h3>
              <div className="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-full mt-2 overflow-hidden">
                <div 
                  className="h-full bg-primary rounded-full" 
                  style={{ width: `${skill.proficiency}%` }}
                ></div>
              </div>
              <span className="text-sm text-muted mt-1">{skill.proficiency}%</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;