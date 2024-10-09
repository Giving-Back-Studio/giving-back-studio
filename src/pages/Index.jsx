import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Input } from "@/components/ui/input";
import { Search } from 'lucide-react';
import { determineSearchCategory } from '@/utils/searchUtils';
import { motion } from 'framer-motion';

const Index = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    const category = determineSearchCategory(searchTerm);
    navigate(`/directory?category=${category}&search=${encodeURIComponent(searchTerm)}`);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-80px)] p-4 text-white space-y-12">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-5xl md:text-6xl font-light mb-8 text-center leading-tight"
      >
        Grow your social enterprise.
      </motion.h1>
      
      <motion.form
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        onSubmit={handleSearch}
        className="w-full max-w-2xl"
      >
        <div className="relative">
          <Input
            type="text"
            placeholder="Search for opportunities..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-12 pr-4 py-3 bg-white/10 border-white/30 text-white placeholder-white/70 rounded-full text-lg focus:ring-2 focus:ring-gbs-lavender focus:border-transparent transition-all duration-300"
          />
          <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white/70" size={24} />
        </div>
      </motion.form>
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-4xl"
      >
        <CategoryCard to="/directory?category=investors" title="Find Aligned Investors" description="Connect with investors focused on regenerative finance." />
        <CategoryCard to="/directory?category=permaculture" title="Find Permaculture Farms" description="Locate farms dedicated to sustainable practices." />
        <CategoryCard to="/directory?category=grants" title="Find Public Good Grants" description="Discover opportunities to do good and do well with grants." />
      </motion.div>
    </div>
  );
};

const CategoryCard = ({ to, title, description }) => (
  <Link to={to} className="group">
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="h-full p-6 bg-white/10 rounded-lg transition-all duration-300 hover:bg-white/20 hover:shadow-lg"
    >
      <h3 className="text-xl font-semibold mb-2 text-gbs-lavender group-hover:text-white transition-colors duration-300">{title}</h3>
      <p className="text-sm text-white/80">{description}</p>
    </motion.div>
  </Link>
);

export default Index;