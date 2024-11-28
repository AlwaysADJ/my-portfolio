import React from 'react';
import { Skill } from '../data/skills';

interface SkillSectionProps {
  skills: Skill[];
}

const SkillSection: React.FC<SkillSectionProps> = ({ skills }) => {
  return (
    <section className="bg-white py-12">
      <div className="container mx-auto">
        <h2 className="text-3xl font-semibold mb-8 text-center">
          Professional Skills
        </h2>
        <div className="grid md:grid-cols-4 gap-8">
          {skills.map((skillCategory) => (
            <div key={skillCategory.category} className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4 text-center">
                {skillCategory.category}
              </h3>
              <ul className="space-y-2">
                {skillCategory.items.map((skill) => (
                  <li 
                    key={skill} 
                    className="text-center bg-blue-100 text-blue-800 py-1 rounded"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillSection;