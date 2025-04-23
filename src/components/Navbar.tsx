'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useTheme } from './ThemeProvider';
import { motion, AnimatePresence } from 'framer-motion';
import { fadeIn, slideInLeft, buttonHover } from '../utils/animations';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const pathname = usePathname();

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (isMenuOpen && !target.closest('nav')) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [isMenuOpen]);

  // Handle body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      // Prevent scrolling on the body when menu is open
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);

  // Get solid background colors based on theme
  const solidBgColor = theme === 'dark' ? 'bg-gray-800' : 'bg-white';
  // Get transparent background colors based on theme for navbar when scrolled
  const transparentBgColor = theme === 'dark' ? 'bg-gray-800/90' : 'bg-white/90';

  // Function to determine if a link is active
  const isActive = (path: string) => {
    if (path === '/' && pathname === '/') return true;
    if (path !== '/' && pathname.startsWith(path)) return true;
    return false;
  };

  // Active and inactive link styles
  const activeLinkClass = "font-medium text-primary dark:text-primary py-2 px-3 relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-full after:bg-primary after:transition-all after:duration-300 after:ease-in-out";
  const inactiveLinkClass = "font-medium hover:text-primary dark:text-gray-200 dark:hover:text-primary py-2 px-3 relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 hover:after:w-full after:bg-primary after:transition-all after:duration-300 after:ease-in-out";

  // Active and inactive mobile link styles
  const activeMobileLinkClass = "block py-4 px-5 text-lg font-medium text-primary dark:text-primary bg-gray-50 dark:bg-gray-700 rounded-lg";
  const inactiveMobileLinkClass = "block py-4 px-5 text-lg font-medium hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg dark:text-gray-200 dark:hover:text-white";

  return (
    <>
    <motion.nav
        id="main-navbar" // Added ID here
        initial="visible"
      animate="visible"
      variants={fadeIn}
        className={`fixed top-0 left-0 right-0 z-50 ${
          scrolled ? `${transparentBgColor} backdrop-blur-sm shadow-md` : solidBgColor
      }`}
      style={{ borderBottom: 'none' }}
    >
      <div className="container-custom py-2 sm:py-3 px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-[48px] sm:h-auto">
          <motion.div
              initial={{ opacity: 1, x: 0 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link href="/" className="flex items-center z-10 py-2">
              <img
                src={theme === 'dark' ? '/images/Logo/gradestonenight.png' : '/images/Logo/Gradestoneday.png'}
                alt="Gradestone Logo"
                className="h-6 sm:h-8 w-auto"
              />
            </Link>
          </motion.div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6">
            <motion.div 
              variants={slideInLeft}
                initial="visible"
              animate="visible"
              custom={0}
              className="flex items-center space-x-6"
            >
                <Link 
                  href="/" 
                  className={isActive('/') ? activeLinkClass : inactiveLinkClass}
                >
                Home
              </Link>
                <Link 
                  href="/courses" 
                  className={isActive('/courses') ? activeLinkClass : inactiveLinkClass}
                >
                Courses
              </Link>
                <Link 
                  href="/gradex" 
                  className={isActive('/gradex') ? activeLinkClass : inactiveLinkClass}
                >
                GraDex
              </Link>
                <Link 
                  href="/about" 
                  className={isActive('/about') ? activeLinkClass : inactiveLinkClass}
                >
                About Us
              </Link>

              {/* Theme Toggle */}
              <motion.button
                whileHover={buttonHover}
                onClick={toggleTheme}
                  className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none"
                aria-label="Toggle dark mode"
              >
                {theme === 'dark' ? (
                  <motion.svg 
                      initial={{ rotate: 0, opacity: 1 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    transition={{ duration: 0.3 }}
                    xmlns="http://www.w3.org/2000/svg" 
                    className="h-5 w-5 text-yellow-300" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={2} 
                      d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" 
                    />
                  </motion.svg>
                ) : (
                  <motion.svg 
                      initial={{ rotate: 0, opacity: 1 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    transition={{ duration: 0.3 }}
                    xmlns="http://www.w3.org/2000/svg" 
                    className="h-5 w-5 text-gray-700 dark:text-gray-200" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={2} 
                      d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" 
                    />
                  </motion.svg>
                )}
              </motion.button>
            </motion.div>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center md:hidden">
            <motion.button
              whileHover={buttonHover}
              onClick={toggleTheme}
                className="p-3 mr-1 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none"
              aria-label="Toggle dark mode"
            >
              {theme === 'dark' ? (
                <motion.svg 
                    initial={{ rotate: 0, opacity: 1 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  transition={{ duration: 0.3 }}
                  xmlns="http://www.w3.org/2000/svg" 
                  className="h-5 w-5 text-yellow-300" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" 
                  />
                </motion.svg>
              ) : (
                <motion.svg 
                    initial={{ rotate: 0, opacity: 1 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  transition={{ duration: 0.3 }}
                  xmlns="http://www.w3.org/2000/svg" 
                  className="h-5 w-5 text-gray-700 dark:text-gray-200" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" 
                  />
                </motion.svg>
              )}
            </motion.button>
            
            <motion.button
              whileHover={buttonHover}
              className="p-3 focus:outline-none"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
              aria-expanded={isMenuOpen}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 dark:text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </motion.button>
          </div>
        </div>
        </div>
      </motion.nav>

      {/* Mobile Menu - Kept separate from navbar to prevent inheriting transparency */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div 
              initial={{ x: '100%', opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: '100%', opacity: 0 }}
              transition={{ type: 'tween', duration: 0.3 }}
            className={`md:hidden fixed inset-0 z-40 ${solidBgColor}`}
              style={{ top: '60px' }}
            >
              <div className="flex flex-col h-full pt-4 px-2">
                <motion.div
                initial="visible"
                  animate="visible"
                  variants={{
                    hidden: { opacity: 0 },
                    visible: {
                      opacity: 1,
                      transition: {
                        staggerChildren: 0.1
                      }
                    }
                  }}
                  className="space-y-1"
                >
                  <motion.div variants={slideInLeft}>
                    <Link
                      href="/"
                    className={isActive('/') ? activeMobileLinkClass : inactiveMobileLinkClass}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Home
                    </Link>
                  </motion.div>
                  <motion.div variants={slideInLeft}>
                    <Link
                      href="/courses"
                    className={isActive('/courses') ? activeMobileLinkClass : inactiveMobileLinkClass}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Courses
                    </Link>
                  </motion.div>
                  <motion.div variants={slideInLeft}>
                    <Link
                      href="/gradex"
                    className={isActive('/gradex') ? activeMobileLinkClass : inactiveMobileLinkClass}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      GraDex
                    </Link>
                  </motion.div>
                  <motion.div variants={slideInLeft}>
                    <Link
                      href="/about"
                    className={isActive('/about') ? activeMobileLinkClass : inactiveMobileLinkClass}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      About Us
                    </Link>
                  </motion.div>
                </motion.div>
                
                {/* Mobile footer menu */}
                <div className="mt-auto border-t border-gray-200 dark:border-gray-700 py-4 px-4">
                  <div className="text-sm text-gray-500 dark:text-gray-400 mb-4">
                    &copy; {new Date().getFullYear()} Gradestone
                  </div>
                  
                  <div className="flex space-x-5">
                    <a href="#" className="text-gray-400 hover:text-primary dark:hover:text-primary">
                      <span className="sr-only">Facebook</span>
                      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                      </svg>
                    </a>
                    <a href="#" className="text-gray-400 hover:text-primary dark:hover:text-primary">
                      <span className="sr-only">Twitter</span>
                      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                      </svg>
                    </a>
                    <a href="#" className="text-gray-400 hover:text-primary dark:hover:text-primary">
                      <span className="sr-only">Instagram</span>
                      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
    </>
  );
};

export default Navbar;