import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '@/components/Logo';

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gbs-purple to-gbs-blue text-white font-sans flex flex-col">
      <header className="bg-gbs-purple">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link to="/" className="flex items-center">
            <Logo className="w-10 h-10 mr-2" />
            <span className="text-xl font-semibold">GIVING BACK STUDIO</span>
          </Link>
          <nav className="flex items-center space-x-6">
            <Link to="/directory" className="text-white hover:text-white/80 transition-colors">
              Directory
            </Link>
            <Link to="/newsletter" className="text-white hover:text-white/80 transition-colors">
              Newsletter
            </Link>
            <Link to="/apply" className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md transition-colors">
              Apply to co-create
            </Link>
          </nav>
        </div>
      </header>

      <main className="flex-grow">
        {children}
      </main>
    </div>
  );
};

export default Layout;