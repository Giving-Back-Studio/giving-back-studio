import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '@/components/Logo';
import { navItems } from '@/nav-items';
import { Button } from "@/components/ui/button";

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gbs-purple to-gbs-blue text-white flex flex-col font-sans">
      <header className="container mx-auto px-4 py-6 flex justify-between items-center">
        <Link to="/">
          <Logo />
        </Link>
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

      <main className="container mx-auto px-4 py-16 flex-grow">
        {children}
      </main>

      <footer className="container mx-auto px-4 py-6 flex justify-center space-x-4">
        <Link to="/directory">
          <Button className="bg-white text-gbs-purple hover:bg-white/90">
            Explore Directory
          </Button>
        </Link>
        <Link to="/build">
          <Button className="bg-gbs-purple hover:bg-gbs-purple/90">
            Apply to Co-Create
          </Button>
        </Link>
      </footer>
    </div>
  );
};

export default Layout;