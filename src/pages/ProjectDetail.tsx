import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { projects } from '../data/projects';
import { Project } from '../data/projects';

const ProjectDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const projectId = parseInt(id || '0');
  const project: Project = projects.find((project) => project.id === projectId) || projects[0];

  // Get the index of the current project
  const currentIndex = projects.findIndex((p) => p.id === projectId);
  const previousProject = projects[currentIndex - 1];
  const nextProject = projects[currentIndex + 1];

  // Scroll to top when the component is loaded or when navigating between projects
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [projectId]);

  return (
    <div className="container mx-auto px-6 py-8">
      {/* Project Title and Information */}
      <div className="mb-8">
        <h1 className="text-4xl font-semibold text-gray-800 mb-4">{project.title}</h1>
        <h2 className="text-xl font-medium text-gray-600 mb-4">{project.role}</h2>
        <p className="text-lg text-gray-700">{project.description}</p>
      </div>

      {/* Overview Section */}
      <div className="mb-8 p-6 border rounded-lg shadow-md bg-white">
        <h3 className="text-2xl font-semibold text-gray-800 mb-4">Project Overview</h3>
        <p className="text-gray-700">{project.overview}</p>
      </div>

      {/* Skills Used */}
      <div className="mb-8">
        <h3 className="text-2xl font-semibold text-gray-800 mb-4">Skills Used:</h3>
        <div className="flex flex-wrap gap-2">
          {project.skills.map((skill) => (
            <span
              key={skill}
              className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>

      {/* Impact Section */}
      <div className="mb-8">
        <h3 className="text-2xl font-semibold text-gray-800 mb-4">Impact:</h3>
        <p className="text-gray-700">{project.impact}</p>
      </div>

      {/* Dynamic Additional Sections (e.g., Solution Architecture) */}
      {project.additionalSections?.map((section, index) => (
        <div key={index} className="mb-8 p-6 border rounded-lg shadow-md bg-white">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">{section.title}</h3>
          <p className="text-gray-700">{section.content}</p>
          {section.images && section.images.length > 0 && (
            <div className="section-images">
              {section.images.map((image, idx) => (
                <img
                  key={idx}
                  src={image}
                  alt={`${section.title} image ${idx + 1}`}
                  className="w-full rounded-lg shadow-lg my-4"
                />
              ))}
            </div>
          )}
        </div>
      ))}

      {/* Project Assets */}
      <div className="mb-8">
        <h3 className="text-2xl font-semibold text-gray-800 mb-4">Project Assets</h3>
        <div className="space-y-6">
          {/* Flowcharts */}
          <div className="space-y-4">
            <h4 className="text-xl font-semibold text-gray-800">Flowcharts</h4>
            {project.assets?.flowcharts?.map((flowchart, index) => (
              <div key={index}>
                <img
                  className="w-full rounded-lg shadow-lg"
                  src={flowchart.imageUrl}
                  alt={flowchart.assetType}
                />
                {flowchart.description && (
                  <p className="mt-2 text-gray-700">{flowchart.description}</p>
                )}
              </div>
            ))}
          </div>

          {/* Mindmaps */}
          <div className="space-y-4">
            <h4 className="text-xl font-semibold text-gray-800">Mindmaps</h4>
            {project.assets?.mindmaps?.map((mindmap, index) => (
              <div key={index}>
                <img
                  className="w-full rounded-lg shadow-lg"
                  src={mindmap.imageUrl}
                  alt={mindmap.assetType}
                />
                {mindmap.description && (
                  <p className="mt-2 text-gray-700">{mindmap.description}</p>
                )}
              </div>
            ))}
          </div>

          {/* Other Assets (e.g., Scrum Board, etc.) */}
          <div className="space-y-4">
            <h4 className="text-xl font-semibold text-gray-800">Other Assets</h4>
            {project.assets?.other?.map((asset, index) => (
              <div key={index}>
                <img
                  className="w-full rounded-lg shadow-lg"
                  src={asset.imageUrl}
                  alt={asset.assetType}
                />
                {asset.description && (
                  <p className="mt-2 text-gray-700">{asset.description}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Navigation Buttons */}
      <div className="flex justify-between mt-12">
        <Link
          to="/projects"
          className="text-blue-600 hover:text-blue-800 text-lg font-semibold"
        >
          Back to List of Projects
        </Link>
        <div className="flex gap-6">
          {previousProject && (
            <Link
              to={`/project/${previousProject.id}`}
              className="text-blue-600 hover:text-blue-800 text-lg font-semibold"
            >
              Previous
            </Link>
          )}
          {nextProject && (
            <Link
              to={`/project/${nextProject.id}`}
              className="text-blue-600 hover:text-blue-800 text-lg font-semibold"
            >
              Next
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
