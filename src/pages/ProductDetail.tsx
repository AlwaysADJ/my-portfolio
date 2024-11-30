import React, { useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { projects } from '../data/projects';
import { Project } from '../data/projects';

const ProductDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const productId = parseInt(id || '0');

  // Filter the products array to only include items with type "product"
  const productList = projects.filter((p) => p.type === "product");

  // Find the current product by ID
  const product: Project | undefined = productList.find((p) => p.id === productId);

  // Redirect to "products" or a "not found" page if the product is not found
  useEffect(() => {
    if (!product) {
      navigate("/products"); // Redirect to the list of products
    }
  }, [product, navigate]);

  // Get the index of the current product
  const currentIndex = productList.findIndex((p) => p.id === productId);
  const previousProduct = productList[currentIndex - 1];
  const nextProduct = productList[currentIndex + 1];

  // Scroll to top when the component is loaded or when navigating between products
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [productId]);

  if (!product) return null; // Prevent rendering if the product is not found

  return (
    <div className="container mx-auto px-6 py-12 bg-gradient-to-r from-indigo-100 via-purple-50 to-indigo-200">
      {/* Product Title and Information */}
      <div className="text-center mb-12">
        <h1 className="text-5xl font-extrabold text-gray-800">{product.title}</h1>
        <h2 className="text-2xl font-semibold text-gray-600 mt-2">{product.role}</h2>
        <p className="text-lg text-gray-700 mt-4 max-w-3xl mx-auto">{product.description}</p>
      </div>

      {/* Overview Section */}
      <div className="bg-white p-8 rounded-xl shadow-2xl mb-12">
        <h3 className="text-4xl font-semibold text-gray-800 mb-6">Overview</h3>
        <p className="text-lg text-gray-700 mb-6">{product.overview}</p>

        {/* Handle display of overview images */}
        {product.overviewImages?.length === 1 ? (
          <img className="w-full rounded-xl shadow-lg transform transition-all duration-300 hover:scale-105" src={product.overviewImages[0]} alt="Product Overview" />
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-6">
            {product.overviewImages?.map((image, index) => (
              <img
                key={index}
                className="w-full h-auto rounded-xl shadow-lg transform transition-all duration-300 hover:scale-105"
                src={image}
                alt={`Product Overview ${index + 1}`}
              />
            ))}
          </div>
        )}
      </div>

      {/* Key Highlights */}
      <div className="bg-white p-8 rounded-xl shadow-2xl mb-12">
        <h3 className="text-4xl font-semibold text-gray-800 mb-6">Key Highlights</h3>
        <ul className="list-disc list-inside text-lg text-gray-700 space-y-4">
          {product.highlights?.map((highlights, index) => (
            <li key={index}>{highlights}</li>
          ))}
        </ul>
      </div>

    {/* Associated Projects */}
    <div className="bg-white p-8 rounded-xl shadow-2xl mb-12">
    <h3 className="text-4xl font-semibold text-gray-800 mb-6">Associated Projects</h3>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {product.associatedProjects?.map((project, index) => (
        <div
            key={index}
            className="bg-white p-8 rounded-xl shadow-lg transition-all transform hover:scale-105 hover:shadow-2xl"
        >
            <h4 className="text-2xl font-semibold text-gray-800 mb-4">{project.title}</h4>
            <p className="text-gray-700 mb-4">{project.description}</p>
            <p className="text-gray-700 mb-4">{project.impact}</p>
            <img className="mt-4 rounded-xl shadow-lg transition-all duration-300 hover:scale-105" src={project.imageUrl} alt={project.title} />
        </div>
        ))}
    </div>
    </div>
    {/* Project Assets */}
    <div className="mb-8">
        <h3 className="text-2xl font-semibold text-gray-800 mb-4">Project Assets</h3>
        <div className="space-y-6">
          {/* Flowcharts */}
          {product.assets && product.assets.flowcharts && product.assets.flowcharts.length > 0 && (
            <div className="space-y-4">
              <h4 className="text-xl font-semibold text-gray-800">Flowcharts</h4>
              {product.assets.flowcharts.map((flowchart, index) => (
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
          {product.assets && product.assets.mindmaps && product.assets.mindmaps.length > 0 && (
            <div className="space-y-4">
              <h4 className="text-xl font-semibold text-gray-800">Mindmap</h4>
              {product.assets.mindmaps.map((mindmap, index) => (
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
          {product.assets && product.assets.other && product.assets.other.length > 0 && (
            <div className="space-y-4">
              <h4 className="text-xl font-semibold text-gray-800">Presentations</h4>
              {product.assets.other.map((asset, index) => (
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

      {/* Additional Sections */}
        {product.additionalSections?.map((section, index) => (
        <div key={index} className="bg-white p-8 rounded-xl shadow-2xl mb-12">
            <h4 className="text-3xl font-semibold text-gray-800 mb-6">{section.title}</h4>
            <p className="text-lg text-gray-700 mb-4">{section.content}</p>
            {section.images && section.images.length > 0 && (
            <div className="flex flex-wrap -mx-2 mt-6">
                {section.images.map((image, idx) => (
                <div key={idx} className="px-2 w-full sm:w-1/2 md:w-1/3 lg:w-1/4">
                    <div className="aspect-w-1 aspect-h-1">
                    <img
                        src={image}
                        alt={`${section.title} image ${idx + 1}`}
                        className="object-cover w-full h-full rounded-lg shadow-lg transition-all duration-300 hover:scale-105"
                    />
                    </div>
                </div>
                ))}
            </div>
            )}
        </div>
        ))}

      {/* Navigation Buttons */}
      <div className="flex justify-between items-center mt-12">
        <Link
          to="/projects"
          className="text-blue-600 hover:text-blue-800 text-lg font-semibold transition-all duration-300"
        >
          Back to Products
        </Link>
        <div className="flex gap-8">
          {previousProduct && (
            <Link
              to={`/product/${previousProduct.id}`}
              className="text-blue-600 hover:text-blue-800 text-lg font-semibold transition-all duration-300"
            >
              Previous
            </Link>
          )}
          {nextProduct && (
            <Link
              to={`/product/${nextProduct.id}`}
              className="text-blue-600 hover:text-blue-800 text-lg font-semibold transition-all duration-300"
            >
              Next
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
