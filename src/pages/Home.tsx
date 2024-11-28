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
      }, 1000); // Change title every 1 seconds
  
      return () => clearInterval(interval); // Cleanup on component unmount
    }, []);
  
    return (
    <div>
        {/* Hero Section */}
        <section
        className="hero bg-cover bg-center text-white py-36 flex items-center"
        style={{ backgroundImage: `url('../img/backgrd.jpg')`, height: '60vh' }}
        >
        <div className="container mx-auto flex items-center justify-between px-6">
            {/* Left side: your picture */}
            <div className="w-full md:w-1/2">
            <img
                src="../img/my-image.png" // Replace with your actual image path
                alt="Joshua Adenuga"
                className="w-full h-auto rounded-full shadow-lg"
            />
            </div>
            
            {/* Right side: Hero text and button */}
            <div className="w-full md:w-2/3 text-center md:text-left mt-8 md:mt-0 pr-12">
                <div className="ml-auto max-w-lg">
                    <h1 className="text-5xl font-extrabold mb-4 leading-tight">Joshua Adenuga</h1>
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
                    A versatile professional with over {yearsOfExperience} years of experience in both product and project management, driving digital initiatives and leading high-performing teams. Expert in managing product lifecycles, executing project sprints, and delivering high-quality, customer-focused solutions. Skilled at balancing strategic vision with operational execution, fostering collaboration among cross-functional teams and stakeholders. Adept at seamlessly adapting to various roles such as coding, research, and design, while identifying opportunities to deliver innovative and impactful results.
                </p>
                </div>

                {/* Certifications */}
                <div className="flex-shrink-0 text-right">
                <img src="../img/pmp-badge.webp" alt="PMP Badge" className="w-16 h-16 mb-4 ml-auto" />
                <img src="../img/enterprise-design-thinking-badge.png" alt="enterprise design thinking badge.png" className="w-16 h-16 ml-auto" />
                </div>
            </div>
        </section>

        {/* Achievements Section */}
        <section className="bg-gray-100">
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
          <h2 className="text-3xl font-semibold mb-8 text-white">Featured Projects</h2>
          <div className="grid md:grid-cols-3 gap-8 px-4">
            {projects.slice(0, 3).map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>

          {/* View More Button */}
          <div className="mt-8">
            <Link to="/projects">
              <button className="bg-teal-600 text-white px-6 py-3 rounded-lg text-xl font-semibold hover:bg-teal-700 transition duration-300">
                View More Projects
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
