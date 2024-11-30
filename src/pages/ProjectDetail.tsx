import React, { useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { projects } from '../data/projects';
import { Project } from '../data/projects';

const ProjectDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const projectId = parseInt(id || '0');

  // Filter the projects array to only include items with type "project"
  const projectList = projects.filter((p) => p.type === 'project');

  // Find the current project by ID
  const project: Project | undefined = projectList.find((p) => p.id === projectId);

  // Redirect to "projects" or a "not found" page if the project is not of type "project"
  useEffect(() => {
    if (!project) {
      navigate('/projects'); // Redirect to the list of projects
    }
  }, [project, navigate]);

  // Get the index of the current project
  const currentIndex = projectList.findIndex((p) => p.id === projectId);
  const previousProject = projectList[currentIndex - 1];
  const nextProject = projectList[currentIndex + 1];

  // Scroll to top when the component is loaded or when navigating between projects
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [projectId]);

  if (!project) return null; // Prevent rendering if the project is not found

  return (
    <div className="container mx-auto px-6 py-8 bg-gradient-to-r from-indigo-100 via-purple-50 to-indigo-200">
      {/* Project Title and Information */}
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">{project.title}</h1>
        <h2 className="text-xl font-semibold text-gray-600 mb-4">{project.role}</h2>
        <p className="text-lg text-gray-700">{project.description}</p>
      </div>

      {/* Overview Section */}
      <div className="mb-8 p-6 border rounded-lg shadow-lg bg-white">
        <h3 className="text-2xl font-semibold text-gray-800 mb-4">Overview</h3>
        <p className="text-gray-700">{project.overview}</p>
      </div>

      {/* Skills Used */}
      <div className="mb-8">
        <h3 className="text-2xl font-semibold text-gray-800 mb-4">Skills Used:</h3>
        <div className="flex flex-wrap gap-2">
          {project.skills?.map((skill) => (
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
        <div
          key={index}
          className="mb-8 p-6 border rounded-lg shadow-lg bg-white"
        >
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
          {project.assets && project.assets.flowcharts && project.assets.flowcharts.length > 0 && (
            <div className="space-y-4">
              <h4 className="text-xl font-semibold text-gray-800">Flowcharts</h4>
              {project.assets.flowcharts.map((flowchart, index) => (
                <div key={index}>
                  <img
                    className="w-full rounded-lg shadow-lg"
                    src={flowchart.imageUrl}
                    alt={flowchart.description || 'Flowchart'}
                  />
                </div>
              ))}
            </div>
          )}

          {/* Mindmaps */}
          {project.assets && project.assets.mindmaps && project.assets.mindmaps.length > 0 && (
            <div className="space-y-4">
              <h4 className="text-xl font-semibold text-gray-800">Mindmaps</h4>
              {project.assets.mindmaps.map((mindmap, index) => (
                <div key={index}>
                  <img
                    className="w-full rounded-lg shadow-lg"
                    src={mindmap.imageUrl}
                    alt={mindmap.description || 'Mindmap'}
                  />
                </div>
              ))}
            </div>
          )}

          {/* Other Assets (e.g., Scrum Board, etc.) */}
          {project.assets && project.assets.other && project.assets.other.length > 0 && (
            <div className="space-y-4">
              <h4 className="text-xl font-semibold text-gray-800">Other Assets</h4>
              {project.assets.other.map((asset, index) => (
                <div key={index}>
                  <img
                    className="w-full rounded-lg shadow-lg"
                    src={asset.imageUrl}
                    alt={asset.description || 'Asset'}
                  />
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Navigation Buttons */}
      <div className="flex justify-between mt-12">
        <Link
          to="/projects"
          className="text-blue-600 hover:text-blue-800 text-lg font-semibold"
        >
          Back to Projects List
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
