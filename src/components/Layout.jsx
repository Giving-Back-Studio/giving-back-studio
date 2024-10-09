import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '@/components/Logo';

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gbs-purple to-gbs-blue text-white font-sans flex flex-col">
      <header className="bg-transparent">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link to="/" className="flex items-center">
            <Logo className="w-10 h-10" />
          </Link>
          <nav className="flex items-center space-x-6">
            <Link to="/" className="text-white hover:text-white/80 transition-colors">
              Directory
            </Link>
            <Link to="/inspiring-innovations" className="text-white hover:text-white/80 transition-colors">
              Newsletter
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