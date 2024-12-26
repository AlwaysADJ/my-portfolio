import React from 'react';
import { useForm, ValidationError } from '@formspree/react';

const Contact: React.FC = () => {
  const [state, handleSubmit] = useForm("mvggzdja");

  if (state.succeeded) {
    return (
      <div className="max-w-md mx-auto text-center">
        <h1 className="text-4xl font-bold mb-8">Thank You!</h1>
        <p className="text-gray-700">
          Your message has been sent successfully. I will get back to you soon!
        </p>
      </div>
    );
  }

  return (
    <div className="max-w-md mx-auto">
      <h1 className="text-4xl font-bold mb-8 text-center">Contact Me</h1>
      
      <form 
        onSubmit={handleSubmit} 
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
      >
        <div className="mb-4">
          <label 
            className="block text-gray-700 text-sm font-bold mb-2" 
            htmlFor="name"
          >
            Name
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="name"
            type="text"
            name="name"
            placeholder="Your Name"
            required
          />
          <ValidationError 
            prefix="Name" 
            field="name" 
            errors={state.errors}
          />
        </div>
        
        <div className="mb-4">
          <label 
            className="block text-gray-700 text-sm font-bold mb-2" 
            htmlFor="email"
          >
            Email
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            type="email"
            name="email"
            placeholder="Your Email"
            required
          />
          <ValidationError 
            prefix="Email" 
            field="email" 
            errors={state.errors}
          />
        </div>
        
        <div className="mb-6">
          <label 
            className="block text-gray-700 text-sm font-bold mb-2" 
            htmlFor="message"
          >
            Message
          </label>
          <textarea
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-32"
            id="message"
            name="message"
            placeholder="Your Message"
            required
          />
          <ValidationError 
            prefix="Message" 
            field="message" 
            errors={state.errors}
          />
        </div>
        
        <div className="flex items-center justify-center">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
            disabled={state.submitting}
          >
            Send Message
          </button>
        </div>
      </form>

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
  );
};

export default Contact;
