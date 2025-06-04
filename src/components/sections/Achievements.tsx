import React from 'react';
import SectionTitle from '../ui/SectionTitle';
import { achievements } from '../../data/achievements';
import { Award, Calendar } from 'lucide-react';

const Achievements: React.FC = () => {
  return (
    <section id="achievements">
      <div className="container">
        <SectionTitle>Achievements</SectionTitle>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {achievements.map((achievement, index) => (
            <div 
              key={index} 
              className="card hover:border-primary hover:border transition-all duration-300"
            >
              <div className="flex items-start mb-4">
                <div className="mr-4">
                  <div className="p-3 bg-primary/10 rounded-full">
                    <Award size={24} className="text-primary" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold">{achievement.title}</h3>
                  <div className="flex items-center text-muted mt-1">
                    <Calendar size={16} className="mr-2" />
                    <span>{achievement.date}</span>
                  </div>
                </div>
              </div>
              
              <p className="text-muted mb-4">{achievement.description}</p>
              
              <div className="border-t border-gray-700 pt-4 mt-auto">
                <p className="text-primary font-medium">{achievement.organization}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;