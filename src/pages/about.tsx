import React, { useState } from 'react';
import { Link } from 'react-router-dom';

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

const About: React.FC = () => {

  const [yearsOfExperience, setYearsOfExperience] = useState(calculateYearsOfExperience());

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8 text-center text-primary">About Me</h1>

      <div className="bg-white shadow-xl rounded-lg p-8 space-y-8">
        {/* Professional Summary Section */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-primary">Professional Summary</h2>
          <p className="text-gray-700 leading-relaxed">
          A versatile professional with over {yearsOfExperience} years of experience in both product and project management, driving digital initiatives and leading high-performing teams. Expert in managing product lifecycles, executing project sprints, and delivering high-quality, customer-focused solutions. Skilled at balancing strategic vision with operational execution, fostering collaboration among cross-functional teams and stakeholders. Adept at seamlessly adapting to various roles such as coding, research, and design, while identifying opportunities to deliver innovative and impactful results.
          </p>
        </section>

        {/* Key Highlights Section
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-primary">Key Highlights</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Successfully deployed the UBA Host-to-host solution across 3 African countries, with expansion to a fourth in progress.</li>
            <li>Revolutionized healthcare management by implementing Civis Health Solution, a centralized EMR/HMIS platform, improving operational efficiency for medical institutions.</li>
            <li>Developed and launched FirstBank Virtual Cards on FirstMobile and FirstMonie App, expanding digital payment options for customers.</li>
            <li>Increased Mastercard market share at FirstBank from 25% to 45% in just one year through strategic initiatives.</li>
            <li>Introduced Nigeria's first Visa Multi-Currency Card, enabling global access for customers.</li>
            <li>Achieved a 346% growth in Staff Credit Card variant within 6 months by implementing targeted product strategies.</li>
            <li>Optimized cost and operational efficiency by cutting card personalization costs by 44% through an instant card issuance solution.</li>
            <li>Played a key role in increasing credit/prepaid card authorization success rate, improving customer experience across channels.</li>
          </ul>
        </section> */}


        {/* Organizations Section */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-primary">Organizations I've Worked With</h2>
          <div className="space-y-4">
            <div>
              <h3 className="font-bold text-lg">FPG Technologies & Solutions, Flexip Group</h3>
              <p className="text-gray-600">Product Lead | December 2021 - Present</p>
              <ul className="list-disc list-inside text-gray-700">
                <li>Oversee the conceptualization, development, and implementation of fintech and non-fintech products.</li>
                <li>Lead cross-functional teams, including Product Managers, UI Developers, Software Developers, and QA associates.</li>
                <li>Define product roadmaps, work closely with engineering and stakeholders for successful releases and maintenance.</li>
                <li>Implement continuous process improvement and risk management strategies.</li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-lg">The Concept Group</h3>
              <p className="text-gray-600">Product Manager | June 2021 - December 2021</p>
              <ul className="list-disc list-inside text-gray-700">
                <li>Conducted market analysis and developed actionable strategies based on market insights.</li>
                <li>Initiated the development of digital quick-loan and RFS credit card products.</li>
                <li>Optimized costs through strategic negotiations.</li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-lg">FirstBank of Nigeria</h3>
              <p className="text-gray-600">Product Manager | June 2017 - June 2021</p>
              <ul className="list-disc list-inside text-gray-700">
                <li>Managed payment card and agent banking business under the purview of the Group Executive of Ebusiness & Retail Products.</li>
                <li>Led strategies for debit, credit, and prepaid card adoption, increasing market share significantly.</li>
                <li>Successfully deployed FirstBank Virtual Cards on mobile apps, expanding digital payment options.</li>
                <li>Managed over 11 million payment cards, contributing to significant growth in the bank's card base.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* CV Download Section */}
        <section className="mb-8">
          <p className="text-gray-700">
            For more details on my professional journey -  
            <Link to="/contact" 
              className="text-blue-500 hover:text-blue-700 underline"> 
              contact me.
            </Link>
          </p>
        </section>

        {/* Education Section */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-primary">Education</h2>
          <div>
            <h3 className="font-bold text-lg">Master of Business Administration</h3>
            <p className="text-gray-600">University of East London | June 2024</p>
          </div>
          <div>
            <h3 className="font-bold text-lg">B. Agric Tech</h3>
            <p className="text-gray-600">Federal University of Technology Akure | October 2015</p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
