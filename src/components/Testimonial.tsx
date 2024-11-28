import React from 'react';
import { Testimonial as TestimonialType } from '../data/testimonials';

interface TestimonialProps {
  testimonial: TestimonialType;
}

const Testimonial: React.FC<TestimonialProps> = ({ testimonial }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
      {/* Testimonial Quote */}
      <p className="italic mb-4 text-gray-800 leading-relaxed">"{testimonial.quote}"</p>

      {/* Testimonial Author and Role */}
      <div>
        <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
        <p className="text-gray-600 text-sm">
          {testimonial.role} at {testimonial.company}
        </p>
      </div>
    </div>
  );
};

export default Testimonial;
