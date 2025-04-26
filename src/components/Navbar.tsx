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
                    <a href="http://linkedin.com/company/gradestone-in/" target="_blank" className="text-gray-400 hover:text-primary dark:hover:text-primary">
                      <span className="sr-only">LinkedIn</span>
                      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 32 32" aria-hidden="true">
                        <path d="M28.778 1.004h-25.56c-0.008 0-0.017 0-0.027 0-1.199 0-2.172 0.964-2.186 2.159v25.672c0.014 1.196 0.987 2.161 2.186 2.161 0.010 0 0.019 0 0.029 0h25.555c0.008 0 0.018 0 0.028 0 1.2 0 2.175-0.963 2.194-2.159v-25.67c-0.019-1.197-0.994-2.161-2.195-2.161-0.010 0-0.019 0-0.029 0zM9.9 26.562h-4.454v-14.311h4.454zM7.674 10.293c-1.425 0-2.579-1.155-2.579-2.579s1.155-2.579 2.579-2.579c1.424 0 2.579 1.154 2.579 2.578 0 1.423-1.154 2.577-2.577 2.577zM26.556 26.562h-4.441v-6.959c0-1.66-0.034-3.795-2.314-3.795-2.316 0-2.669 1.806-2.669 3.673v7.082h-4.441v-14.311h4.266v1.951h0.058c0.828-1.395 2.326-2.315 4.039-2.315 4.5 0 5.332 2.962 5.332 6.817v7.855z" />
                      </svg>

                    </a>
                    <a href="https://chat.whatsapp.com/DpUJ2d7WEs11WmWQNU5PAu" target="_blank" className="text-gray-400 hover:text-primary dark:hover:text-primary">
                      <span className="sr-only">WhatsApp</span>
                      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M3.50002 12C3.50002 7.30558 7.3056 3.5 12 3.5C16.6944 3.5 20.5 7.30558 20.5 12C20.5 16.6944 16.6944 20.5 12 20.5C10.3278 20.5 8.77127 20.0182 7.45798 19.1861C7.21357 19.0313 6.91408 18.9899 6.63684 19.0726L3.75769 19.9319L4.84173 17.3953C4.96986 17.0955 4.94379 16.7521 4.77187 16.4751C3.9657 15.176 3.50002 13.6439 3.50002 12ZM12 1.5C6.20103 1.5 1.50002 6.20101 1.50002 12C1.50002 13.8381 1.97316 15.5683 2.80465 17.0727L1.08047 21.107C0.928048 21.4637 0.99561 21.8763 1.25382 22.1657C1.51203 22.4552 1.91432 22.5692 2.28599 22.4582L6.78541 21.1155C8.32245 21.9965 10.1037 22.5 12 22.5C17.799 22.5 22.5 17.799 22.5 12C22.5 6.20101 17.799 1.5 12 1.5ZM14.2925 14.1824L12.9783 15.1081C12.3628 14.7575 11.6823 14.2681 10.9997 13.5855C10.2901 12.8759 9.76402 12.1433 9.37612 11.4713L10.2113 10.7624C10.5697 10.4582 10.6678 9.94533 10.447 9.53028L9.38284 7.53028C9.23954 7.26097 8.98116 7.0718 8.68115 7.01654C8.38113 6.96129 8.07231 7.046 7.84247 7.24659L7.52696 7.52195C6.76823 8.18414 6.3195 9.2723 6.69141 10.3741C7.07698 11.5163 7.89983 13.314 9.58552 14.9997C11.3991 16.8133 13.2413 17.5275 14.3186 17.8049C15.1866 18.0283 16.008 17.7288 16.5868 17.2572L17.1783 16.7752C17.4313 16.5691 17.5678 16.2524 17.544 15.9269C17.5201 15.6014 17.3389 15.308 17.0585 15.1409L15.3802 14.1409C15.0412 13.939 14.6152 13.9552 14.2925 14.1824Z"
                          />
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