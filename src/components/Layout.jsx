import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '@/components/Logo';
import FlowerOfLife from '@/components/FlowerOfLife';

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gbs-darkPurple via-gbs-purple to-gbs-blue text-white font-sans flex flex-col">
      <FlowerOfLife />
      <header className="bg-white/10 backdrop-blur-md sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link to="/" className="flex items-center">
            <Logo className="w-12 h-12" />
            <span className="ml-2 text-xl font-semibold">GrowBeyond</span>
          </Link>
          <nav className="flex items-center space-x-6">
            <Link to="/" className="text-white hover:text-gbs-lightPurple transition-colors duration-300">
              Directory
            </Link>
            <Link to="/inspiring-innovations" className="text-white hover:text-gbs-lightPurple transition-colors duration-300">
              Newsletter
            </Link>
            <Link to="/build" className="bg-gbs-lightPurple hover:bg-gbs-lightPurple/90 text-white px-4 py-2 rounded-full transition-colors duration-300">
              Apply to Co-Create
            </Link>
          </nav>
        </div>
      </header>

      <main className="flex-grow container mx-auto px-4 py-8">
        {children}
      </main>

      <footer className="bg-white/10 backdrop-blur-md py-6">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; {new Date().getFullYear()} GrowBeyond. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Layout;