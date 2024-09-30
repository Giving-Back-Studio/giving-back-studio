import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '@/components/Logo';
import { navItems } from '@/nav-items';

const DirectoryLayout = ({ title, children }) => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gbs-purple to-gbs-blue text-white flex flex-col font-sans">
      <header className="container mx-auto px-4 py-6 flex justify-between items-center">
        <Logo />
        <nav className="space-x-4">
          {navItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="text-white hover:text-gray-300 transition-colors"
            >
              {item.title}
            </Link>
          ))}
        </nav>
      </header>

      <main className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-light mb-8">{title}</h1>
        {children}
      </main>
    </div>
  );
};

export default DirectoryLayout;