import React, { useState, useEffect, useRef } from 'react';
import '../styles/globals.css';
import ProjectCard from '../components/ProjectCard';
import SkillSection from '../components/SkillSection';
import Testimonial from '../components/Testimonial';
import { projects } from '../data/projects';
import { skills } from '../data/skills';
import { testimonials } from '../data/testimonials';
import { Link } from 'react-router-dom';

// Function to calculate years of experience
const calculateYearsOfExperience = () => {
    const startDate = new Date("2017-06-01");
    const currentDate = new Date();
    const yearsDifference = currentDate.getFullYear() - startDate.getFullYear();
    const monthsDifference = currentDate.getMonth() - startDate.getMonth();
  
    if (monthsDifference < 0) {
      return yearsDifference - 1; // If the current month is before June, subtract 1 year
    }
  
    return yearsDifference;
  };

const Home: React.FC = () => {
    const titles = [
      "Product Manager",
      "Certified Project Manager",
      "Strategic Problem Solver",
      "Tech Innovator",
      "Business Analyst",
      "Technical Product Manager",
      "Solutions Delivery Manager",
      "Project Management Professional"
    ];
    
    const [currentTitleIndex, setCurrentTitleIndex] = useState(0);
    const [yearsOfExperience, setYearsOfExperience] = useState(calculateYearsOfExperience());

  
    useEffect(() => {
      const interval = setInterval(() => {
        setCurrentTitleIndex((prevIndex) => (prevIndex + 1) % titles.length);
      }, 3000); // Change title every 1 seconds
  
      return () => clearInterval(interval); // Cleanup on component unmount
    }, []);
  
    return (
    <div>
        {/* Hero Section */}
        <section
            className="hero bg-cover bg-center text-white py-36 flex items-center"
            style={{ backgroundImage: `url('../img/backgrd.jpg')`, height: '60vh' }}
        >
            <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-6">
            
            {/* Left side: your picture */}
            <div className="w-full md:w-1/2 mb-8 md:mb-0">
                <img
                src="../img/my-image.png" // Replace with your actual image path
                alt="Joshua Adenuga"
                className="w-full h-auto rounded-full shadow-lg"
                />
            </div>
            
            {/* Right side: Hero text and button */}
            <div className="w-full md:w-2/3 text-center md:text-left pr-12">
                <div className="ml-auto max-w-lg">
                <h1 className="text-3xl md:text-5xl font-extrabold mb-4 leading-tight">
                    Joshua Adenuga
                </h1>
                <p className="text-lg mb-6">
                    <span className="animated-title text-blue-400 font-bold">
                    {titles[currentTitleIndex]}
                    </span>
                </p>
                {/* Link to Contact page */}
                <Link to="/contact">
                    <button className="bg-blue-600 text-white py-3 px-8 rounded-full text-lg font-semibold transition-all hover:bg-blue-700 hover:shadow-xl">
                    Get in Touch
                    </button>
                </Link>
                <button>
                      <a className="bg-blue-600 text-white py-3 px-8 rounded-full text-lg font-semibold transition-all hover:bg-blue-700 hover:shadow-xl inline-block mt-4 ml-4" href="https://www.linkedin.com/comm/mynetwork/discovery-see-all?usecase=PEOPLE_FOLLOWS&followMember=adesegun-joshua-adenuga" target="_blank">Follow on LinkedIn
                      </a>
                  </button>
                </div>
            </div>
            </div>
        </section>

        {/* Profile Summary & Certifications Section */}
        <section className="bg-gray-100 py-12">
            <div className="container mx-auto px-6 flex items-start">
                {/* Profile Summary */}
                <div className="flex-1 pr-8">
                <h2 className="text-3xl font-semibold mb-6 text-gray-900">
                    PRODUCT & PROJECT MANAGER | BUSINESS ANALYST | PMP-CERTIFIED
                </h2>
                <p className="text-gray-700 leading-relaxed text-justify">
                    A dynamic professional with over {yearsOfExperience} years of expertise in product and project management, known for driving digital innovation and leading successful teams. Passionate about delivering high-quality, customer-centric solutions by seamlessly blending strategic vision with hands-on execution. Skilled in managing product lifecycles, running agile sprints, and collaborating across diverse teams to turn ideas into impactful results. Whether coding, researching, or designing, my focus is always on creating innovative solutions that make a difference.
                </p>
                </div>

                {/* Certifications */}
                <div className="flex-shrink-0 text-right">
                <img src="../img/pmp-badge.webp" alt="PMP Badge" className="w-16 h-16 mb-4 ml-auto" />
                <img src="../img/enterprise-design-thinking-badge.png" alt="enterprise design thinking badge.png" className="w-16 h-16 ml-auto" />
                </div>
            </div>
        </section>

        {/* "Building for Humans" Section */}
        <section className="bg-gray-50 py-6">
          <div className="container mx-auto px-6 flex flex-col md:flex-row items-center space-y-8 md:space-y-0">
            {/* Left side: Text */}
            <div className="w-full md:w-1/2 pr-8 bg-gradient-to-r from-blue-50 via-indigo-50 to-blue-100 rounded-lg shadow-lg p-8">
              <h2 className="text-4xl font-extrabold mb-6 text-blue-900 leading-tight">
                Building for Humans
              </h2>
              <p className="text-gray-700 leading-relaxed text-justify mb-4">
                At the core of every product I manage and every project I undertake is a commitment to the people it serves. Whether it's crafting digital experiences or leading innovative teams, my focus remains on building with intention and humanity at the forefront.
              </p>
              <p className="text-gray-700 leading-relaxed text-justify mb-6">My Approach:</p>
              <ul className="list-none pl-6 text-gray-700 leading-relaxed space-y-4">
                <li className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="h-6 w-6 mr-3 text-indigo-600"><path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                  </svg>
                  Empathy and User-Centered Design
                </li>
                <li className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-3 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12l5 5L20 7"></path></svg>
                  Simplicity and Intuition
                </li>
                <li className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-3 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="m12.75 15 3-3m0 0-3-3m3 3h-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                </svg>
                  Inclusive and Accessible Design
                </li>
                <li className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-3 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M6.633 10.25c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 0 1 2.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 0 0 .322-1.672V2.75a.75.75 0 0 1 .75-.75 2.25 2.25 0 0 1 2.25 2.25c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282m0 0h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 0 1-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 0 0-1.423-.23H5.904m10.598-9.75H14.25M5.904 18.5c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 0 1-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 9.953 4.167 9.5 5 9.5h1.053c.472 0 .745.556.5.96a8.958 8.958 0 0 0-1.302 4.665c0 1.194.232 2.333.654 3.375Z" />
                  </svg>
                  Collaboration and Transparency
                </li>
                <li className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-3 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99" />
                  </svg>
                  Agile and Iterative Development
                </li>
                <li className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-3 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h14m-7-7v14"></path>
                  </svg>
                  Ethical and Responsible Product Management
                </li>
                <li className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-3 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 0 1-.825-.242m9.345-8.334a2.126 2.126 0 0 0-.476-.095 48.64 48.64 0 0 0-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0 0 11.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155" />
                  </svg>
                  Clear Communication
                </li>
                <li className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-3 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z" />
                  </svg>
                  User Empowerment
                </li>
                <li className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-3 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z" />
                  </svg>
                  Long-Term Value and Sustainability
                </li>
              </ul>
            </div>

            {/* Right side: Image */}
            <div className="w-full md:w-1/2">
              <img
                src="../img/building-for-humans.webp" // Replace with the image path of your choice
                alt="Building for Humans"
                className="w-full h-auto rounded-lg shadow-lg"
                // loading="lazy"
              />
            </div>
          </div>
        </section>


        {/* Achievements Section */}
        <section className="bg-gray-100 py-6">
            <div className="container mx-auto text-center px-4">
                <h2 className="text-3xl font-semibold mb-8 text-gray-900">Major Achievements</h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {/* Achievement 1 */}
                    <div className="bg-white p-6 shadow-lg rounded-lg hover:shadow-2xl transition-shadow duration-300">
                        <h3 className="text-xl font-semibold mb-4">SFTP Implementation for Payment Transactions</h3>
                        <p className="text-gray-600">
                        Deployed secure and efficient Host-to-Host and API integration for payment systems across 3 African countries for one of the top Nigerian Banks.
                        </p>
                    </div>
                    {/* Achievement 2 */}
                    <div className="bg-white p-6 shadow-lg rounded-lg hover:shadow-2xl transition-shadow duration-300">
                        <h3 className="text-xl font-semibold mb-4">Revolutionized Healthcare Industry with CivisHealth Solution</h3>
                        <p className="text-gray-600">
                            Successfully developed and deployed Civis Health Solution, transforming hospital operations and improving efficiency across medical institutions.
                        </p>
                    </div>
                    {/* Achievement 3 */}
                    <div className="bg-white p-6 shadow-lg rounded-lg hover:shadow-2xl transition-shadow duration-300">
                        <h3 className="text-xl font-semibold mb-4">Launched FirstBank Virtual Card for wallets and accounts</h3>
                        <p className="text-gray-600">
                            Spearheaded the product development and launch of Virtual Cards on FirstMobile and FirstMonie applications, enhancing customer convenience and digital payment capabilities.
                        </p>
                    </div>
                    {/* Achievement 4 */}
                    <div className="bg-white p-6 shadow-lg rounded-lg hover:shadow-2xl transition-shadow duration-300">
                        <h3 className="text-xl font-semibold mb-4">Grew Debit, Credit and Prepaid Card Base by 38%</h3>
                        <p className="text-gray-600">
                            Successfully managed over 11 million payment cards, growing the payment cardbase from 8 to 11 Million Cards.
                        </p>
                    </div>
                    {/* Achievement 5 */}
                    <div className="bg-white p-6 shadow-lg rounded-lg hover:shadow-2xl transition-shadow duration-300">
                        <h3 className="text-xl font-semibold mb-4">44% Reduction in Card Personalization Cost</h3>
                        <p className="text-gray-600">
                            Reduced card personalization cost by 44% with a new instant card issuance solution.
                        </p>
                    </div>
                    {/* Achievement 6 */}
                    <div className="bg-white p-6 shadow-lg rounded-lg hover:shadow-2xl transition-shadow duration-300">
                        <h3 className="text-xl font-semibold mb-4">Improved Authorization Success Rate</h3>
                        <p className="text-gray-600">
                            Improved credit/prepaid card authorization success rate by 20%.
                        </p>
                    </div>
                </div>
            </div>
        </section>


      {/* Featured Projects */}
      <section className="my-8 text-center">
        <div className="bg-gray-600 py-12 shadow-lg rounded-lg hover:shadow-2xl transition-shadow duration-300">
          <h2 className="text-3xl font-semibold mb-8 text-white">Featured Products and Projects</h2>
          <div className="grid md:grid-cols-3 gap-8 px-4">
            {projects.slice(0, 3).map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>

          {/* View More Button */}
          <div className="mt-8">
            <Link to="/projects">
              <button className="bg-teal-600 text-white px-6 py-3 rounded-lg text-xl font-semibold hover:bg-teal-700 transition duration-300">
                View More
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <SkillSection skills={skills} />

      {/* Testimonials Section */}
      <section className="mt-16 text-center">
        <h2 className="text-3xl font-semibold mb-6 text-gray-900">What People Are Saying</h2>
        <div className="flex overflow-x-auto px-4 space-x-6">
          {testimonials.map((testimonial) => (
            <Testimonial key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-6 mt-16">
        <div className="text-center">
          <p>
            Connect with me:{" "}
            <a href="mailto:adesegun.j.adenuga@gmail.com" className="text-blue-400">
              adesegun.j.adenuga@gmail.com
            </a>
          </p>
          <div className="flex justify-center space-x-6 mt-4">
            <a
              href="https://www.linkedin.com/in/adesegun-joshua-adenuga/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-200 transition-colors"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/AlwaysADJ"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-200 transition-colors"
            >
              GitHub
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};


export default Home;
