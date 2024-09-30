import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '@/components/Logo';
import { navItems } from '@/nav-items';
import { Button } from "@/components/ui/button";

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gbs-purple to-gbs-blue text-white flex flex-col font-sans">
      <header className="container mx-auto px-4 py-6 md:py-8">
        <div className="flex flex-col sm:flex-row justify-between items-center">
          <Link to="/" className="mb-4 sm:mb-0">
            <Logo />
          </Link>
          <nav className="flex flex-wrap justify-center sm:space-x-6">
            {navItems.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className="text-white hover:text-gray-300 transition-colors px-3 py-2 text-lg"
              >
                {item.title}
              </Link>
            ))}
          </nav>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8 md:py-12 flex-grow">
        {children}
      </main>

      <footer className="container mx-auto px-4 py-6 md:py-8 flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6">
        <Link to="/directory">
          <Button className="w-full sm:w-auto bg-white text-gbs-purple hover:bg-white/90 text-lg px-6 py-3">
            Explore Directory
          </Button>
        </Link>
        <Link to="/build">
          <Button className="w-full sm:w-auto bg-gbs-purple hover:bg-gbs-purple/90 text-lg px-6 py-3">
            Apply to Co-Create
          </Button>
        </Link>
      </footer>
    </div>
  );
};

export default Layout;