import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom'; // Use react-router-dom for navigation

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50); // Adjust scroll threshold as needed
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1, duration: 0.5 }}
      className={`fixed top-0 left-0 w-full p-8 transition-colors ${
        scrolled ? 'bg-opacity-80 bg-gray-900 text-white' : 'bg-transparent'
      }`}
    >
      <ul className="flex space-x-6 text-sm">
        <li>
          <Link to="/work" className="hover:opacity-60 transition-opacity">
            Work
          </Link>
        </li>
        <li>
          <Link to="/about" className="hover:opacity-60 transition-opacity">
            About
          </Link>
        </li>
        <li>
          <Link to="/contact" className="hover:opacity-60 transition-opacity">
            Contact
          </Link>
        </li>
      </ul>
    </motion.nav>
  );
}
