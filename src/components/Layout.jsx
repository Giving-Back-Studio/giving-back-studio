import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '@/components/Logo';
import FlowerOfLife from '@/components/FlowerOfLife';
import { motion } from 'framer-motion';

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gbs-darkPurple via-gbs-purple to-gbs-blue text-white font-sans flex flex-col relative overflow-hidden">
      <FlowerOfLife className="absolute inset-0 opacity-10" />
      <header className="bg-white/10 backdrop-blur-md sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link to="/" className="flex items-center">
            <Logo className="w-12 h-12" />
            <span className="ml-2 text-xl font-semibold">GrowBeyond</span>
          </Link>
          <nav className="flex items-center space-x-6">
            <NavLink to="/">Directory</NavLink>
            <NavLink to="/inspiring-innovations">Newsletter</NavLink>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link to="/build" className="bg-gbs-lightPurple hover:bg-gbs-lavender hover:text-gbs-darkPurple text-white px-4 py-2 rounded-full transition-colors duration-300">
                Apply to Co-Create
              </Link>
            </motion.div>
          </nav>
        </div>
      </header>

      <main className="flex-grow container mx-auto px-4 py-12 relative z-10">
        {children}
      </main>

      <footer className="bg-white/10 backdrop-blur-md py-8 mt-12">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; {new Date().getFullYear()} GrowBeyond. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

const NavLink = ({ to, children }) => (
  <Link
    to={to}
    className="text-white hover:text-gbs-lavender transition-colors duration-300 relative group"
  >
    {children}
    <span className="absolute left-0 right-0 bottom-0 h-0.5 bg-gbs-lavender transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
  </Link>
);

export default Layout;