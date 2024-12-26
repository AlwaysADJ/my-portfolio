import React from 'react';
import Navbar from './Navbar';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-900 font-sans">
      {/* Navbar Section */}
      <header className="bg-indigo-600 sticky top-0 z-10 shadow-md">
        <Navbar />
      </header>

      {/* Main Content Section */}
      <main className="w-full mx-auto px-6 md:px-12 py-8 lg:py-8">
        {children}
      </main>

      {/* Footer Section */}
      <footer className="bg-gray-900 text-white py-6 text-center text-sm">
        <p className="text-lg font-semibold">© {new Date().getFullYear()} Joshua Adenuga's Portfolio</p>
        <p>Crafted with ❤️ and Passion</p>
      </footer>
    </div>
  );
};

export default Layout;
