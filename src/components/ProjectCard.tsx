// src/components/ProjectCard.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import { Project } from '../data/projects';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  // Determine the path based on project type (product or project)
  const detailPath = project.type === 'product' ? `/product/${project.id}` : `/project/${project.id}`;

  return (
    <Link to={detailPath} className="bg-white rounded-lg shadow-md overflow-hidden block relative group">
      {/* Image Section */}
      {project.imageUrl && (
        <img
          src={project.imageUrl}
          alt={project.title}
          className="w-full h-48 object-cover"
        />
      )}

      {/* Content Section */}
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2 text-center">{project.title}</h3>
        <p className="text-gray-600 mb-4 text-center">{project.description}</p> {/* Centralized description */}
        <div className="mb-4 text-center">
          <strong>Impact:</strong> {project.impact}
        </div>

        {/* Skills Section */}
        <div className="flex flex-wrap gap-2 justify-center">
          {project.skills?.map((skill) => (
            <span
              key={skill}
              className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-sm"
            >
              {skill}
            </span>
          ))}
        </div>

        {/* Role/Position (Optional) */}
        {project.role && (
          <div className="mt-4 text-center text-gray-700">
            <strong>Role:</strong> {project.role}
          </div>
        )}
      </div>

      {/* Hover "Click to View Details" Text */}
      <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <span className="text-lg font-semibold">Click to View Details</span>
      </div>
    </Link>
  );
};

export default ProjectCard;
