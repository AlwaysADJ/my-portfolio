import React, { useEffect } from 'react';
import ProjectCard from '../components/ProjectCard';
import { projects } from '../data/projects';

const Projects: React.FC = () => {
  useEffect(() => {
    // Scroll to the top of the page when the component is mounted
    window.scrollTo(0, 0);
  }, []); // Empty dependency array ensures this runs only once after the component mounts

  return (
    <div className="bg-gradient-to-r from-blue-500 to-teal-400 py-12">
      {/* Hero Section */}
      <div className="text-center text-white mb-16">
        <h1 className="text-5xl font-bold mb-4 tracking-wide drop-shadow-lg">My Product and Project Management Journey</h1>
        <p className="text-lg md:text-xl max-w-3xl mx-auto">
          Explore the products and projects I've managed and led, with a focus on product innovation, technology integration, and impactful solutions.
        </p>
      </div>

      {/* Projects Grid */}
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
