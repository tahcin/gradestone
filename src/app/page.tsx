'use client';

import Link from 'next/link';
import { motion, useAnimationControls } from 'framer-motion';
import { fadeIn, slideUp, staggerContainer } from '../utils/animations';
import { useEffect, useRef } from 'react';
import ParticleBackground from '@/components/ParticleBackground';
import { TestimonialsSection } from '@/components/ui/testimonials-section';


export default function Home() {
  // Animation controls for each section
  const heroControls = useAnimationControls();
  const featuresControls = useAnimationControls();
  const coursesControls = useAnimationControls();
  const testimonialsControls = useAnimationControls();
  const ctaControls = useAnimationControls();
  const isMounted = useRef(false);

  // Trigger animations on mount instead of scroll
  useEffect(() => {
    isMounted.current = true;
    
    const sequence = async () => {
      if (!isMounted.current) return;
      
      try {
        await heroControls.start('visible');
        if (!isMounted.current) return;
        
        await featuresControls.start('visible');
        if (!isMounted.current) return;
        
        await coursesControls.start('visible');
        if (!isMounted.current) return;
        
        await testimonialsControls.start('visible');
        if (!isMounted.current) return;
        
        await ctaControls.start('visible');
      } catch (error) {
        console.error('Animation error:', error);
      }
    };
    
    // Add a small delay to ensure component is fully mounted
    const timer = setTimeout(() => {
      sequence();
    }, 100);
    
    return () => {
      isMounted.current = false;
      clearTimeout(timer);
    };
  }, [heroControls, featuresControls, coursesControls, testimonialsControls, ctaControls]);

  return (
    <div>
      {/* Hero Section */}
      <motion.section 
        initial="hidden"
        animate={heroControls}
        variants={fadeIn}
        className="relative bg-gradient-to-br from-indigo-700 via-purple-700 to-indigo-800 text-white dark:from-indigo-900 dark:via-purple-900 dark:to-indigo-950 section-padding pt-12 sm:pt-16 overflow-hidden h-[calc(100vh-48px)] sm:h-auto min-h-[500px] sm:min-h-0 flex sm:block items-center"
      >
        <ParticleBackground className="opacity-50" />
        <div className="container-custom relative z-10">
          <motion.div 
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 lg:gap-12 items-center"
          >
            <motion.div variants={slideUp} className="text-left text-shadow pl-2 md:pl-0">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4 md:mb-6 leading-tight drop-shadow-lg">
              Your Smart Study Companion
              </h1>
              <p className="text-base md:text-lg mb-6 md:mb-8 max-w-xl mx-0 text-gray-100 dark:text-gray-200 drop-shadow">
              Gradestone offers curated notes, quizzes, and mindmaps for the BBA DBE curriculum — Powered by GraDex AI to personalize and simplify your learning experience.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-start">
                <Link 
                  href="/courses" 
                  className="btn bg-white text-indigo-700 hover:bg-gray-100 dark:bg-white dark:hover:bg-gray-100 font-semibold shadow-lg px-4 sm:px-6 py-2 sm:py-3 text-sm sm:text-base w-auto whitespace-nowrap max-w-[200px] mx-0"
                >
                  Explore Courses
                </Link>
              </div>
            </motion.div>
            <motion.div variants={slideUp} className="flex justify-center mt-8 md:mt-0">
              <div className="relative w-full h-[200px] sm:h-[250px] md:h-[300px] max-w-md mx-auto rounded-xl overflow-hidden shadow-2xl">
                {/* Illustration with gradients and shapes instead of placeholder text */}
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/30 to-purple-500/30 backdrop-blur-sm">
                  <div className="absolute top-1/4 left-1/4 w-20 h-20 rounded-full bg-yellow-400/30 backdrop-blur-sm"></div>
                  <div className="absolute bottom-1/4 right-1/4 w-24 h-24 rounded-full bg-indigo-400/30 backdrop-blur-sm"></div>
                  <div className="absolute top-1/2 right-1/3 w-16 h-16 rounded-lg bg-purple-400/30 backdrop-blur-sm rotate-12"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 48 48"  // Adjusted viewBox based on coordinates (~0-44 range)
                        fill="currentColor" // Inherits color from text-white/80
                        stroke="currentColor" // Added stroke as many elements look like outlines/lines
                        stroke-width="2.2" // A common default stroke width, adjust if needed
                        className="h-16 w-16 text-white/80 mx-auto mb-2" // Your specified classes
                      >
                        <g fill="none"> {/* Wrap in a group with fill=none if paths/lines should primarily use stroke */}
                          <path d="M17.30639,11.25243a5.29412,5.29412,0,1,0-10.58824,0,5.23707,5.23707,0,0,0,.584,2.37007A5.27955,5.27955,0,0,0,8.8358,23.95831"></path>
                          <path d="M3.58191,21.56266a7.00047,7.00047,0,1,0,11.32225,6.78321V28"></path>
                          <path d="M8.43086,42.32855A6.21606,6.21606,0,0,1,5.108,36.82494a6.14985,6.14985,0,0,1,.68573-2.78316"></path>
                          <path d="M19,16a5,5,0,0,1-5,5"></path>
                            <g> {/* This inner group might have had specific styles, keeping it for structure */}
                              <polyline points="19 16.01 30.5 16.01 32.521 13.99"></polyline>
                              <polyline points="25.5 20.01 31.5 20.01 33.521 17.99 39 17.99"></polyline>
                              <polyline points="24.917 31.99 30.5 31.99 32.521 34.01"></polyline>
                              <polyline points="24.917 27.99 31.5 27.99 33.521 30.01 39 30.01"></polyline>
                              <path d="M39,38.01018H31.52094l-1.52061-2.02061-4.95867.00011v6.05209a5,5,0,0,1-10,0"></path>
                            </g>
                          <path d="M17.04167,4.13392a4.05277,4.05277,0,0,1,8,.91833V12.01l4.45868.00013L31.521,9.98956H39"></path>
                          <line x1="36" x2="25.04167" y1="24" y2="24"></line>
                          {/* Circles might need fill="currentColor" if they should be solid */}
                          <circle fill="currentColor" cx="11" cy="20" r="1"></circle>
                          <circle fill="currentColor" cx="11.79167" cy="43.5" r="1"></circle>
                          <circle cx="41.47922" cy="10" r="2"></circle>
                          <circle cx="41.47922" cy="18" r="2"></circle>
                          <circle cx="41.47922" cy="30" r="2"></circle>
                          <circle cx="41.47922" cy="38" r="2"></circle>
                        </g> {/* Closing the fill="none" group */}
                      </svg>
  
                      <div className="text-lg font-bold text-white">The Learning Co-Pilot</div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* Features Section */}
      
      <motion.section 
        initial="hidden"
        animate={featuresControls}
        variants={fadeIn}
        className="py-10 sm:py-12 bg-white dark:bg-gray-800"
      >
        
        <div className="container-custom">
          <motion.div variants={slideUp} className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 md:mb-4">Why Gradestone?</h2>
            <p className="text-sm md:text-base text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Designed to boost your grades with AI features and High Quality resources.
            </p>
          </motion.div>

          <motion.div 
            variants={staggerContainer}
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 md:gap-6"
          >
            {/* Feature 1 */}
            <motion.div 
              variants={slideUp}
              className="card hover:backdrop-blur transition-all duration-200"
            >
              <div className="rounded-full bg-indigo-100 dark:bg-indigo-900/40 p-3 sm:p-4 w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-indigo-600 dark:text-indigo-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                  />
                </svg>
              </div>
              <h3 className="text-base sm:text-lg md:text-xl font-bold mb-2">All-in-One Resource Hub</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
              Access structured notes, interactive quizzes, and mindmaps tailored for your courses.
              </p>
            </motion.div>

            {/* Feature 2 */}
            <motion.div 
              variants={slideUp}
              className="card  hover:backdrop-blur transition-all duration-200"
            >
              <div className="rounded-full bg-cyan-100 dark:bg-cyan-900/40 p-3 sm:p-4 w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-cyan-600 dark:text-cyan-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                  />
                </svg>
              </div>
              <h3 className="text-base sm:text-lg md:text-xl font-bold mb-2">AI-Powered Study Assistant</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
              Get real-time help, personalized guidance, and smart search powered by our in-house AI - GradDex - trained on all Gradestone content.
              </p>
            </motion.div>

            {/* Feature 3 */}
            <motion.div 
              variants={slideUp}
              className="card  hover:backdrop-blur transition-all duration-200 sm:col-span-2 md:col-span-1 sm:max-w-md sm:mx-auto md:max-w-none"
            >
              <div className="rounded-full bg-purple-100 dark:bg-purple-900/40 p-3 sm:p-4 w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-purple-600 dark:text-purple-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"
                  />
                </svg>
              </div>
              <h3 className="text-base sm:text-lg md:text-xl font-bold mb-2">Community Support</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
              Learn alongside a supportive community of peers, mentors, and tools designed to help you excel.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* Popular Courses Section */}
      
     

      

       {/* Course Section */}
       <motion.section
        initial="hidden"
        animate={coursesControls}
        variants={fadeIn}
        className="section-padding bg-gray-50 dark:bg-gray-900"
      >
        <div className="container-custom">
          <motion.div variants={slideUp} className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 md:mb-4">Get Started</h2>
            <p className="text-sm md:text-base text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Start strong with courses that we think you would need help with.
            </p>
          </motion.div>

          <motion.div 
            variants={staggerContainer}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6"
          >
            {/* Course 1 - Persuasive Communication */}
            <motion.div 
              variants={slideUp} 
              className="card overflow-hidden hover:backdrop-blur-sm transition-all duration-200"
            >
              <div className="relative h-48 sm:h-40 bg-gradient-to-r from-lime-500 to-teal-600 dark:from-lime-600 dark:to-teal-700 mb-4 rounded-lg overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center bg-black/10">
                  <div className="flex flex-col sm:flex-row items-center sm:space-x-2 text-center sm:text-left">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 3a9 9 0 1 0 9 9h-9V3z" />
                      <path transform="translate(2, -2)" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 0 0-9-9v9h9z" />
                    </svg>
                    <div className="text-xl font-semibold text-white mt-2 sm:mt-0">BSE</div>
                  </div>
                </div>
              </div>
              <h3 className="text-lg font-bold mb-3">Business Statistics for Entrepreneurs</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-5 text-sm line-clamp-2">
              Embark on an exciting journey into the world of Statistics—a powerful tool that drives decision-making across countless fields.
              </p>
              <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-3 sm:gap-0">
                <span className="text-lime-600 dark:text-lime-400 font-semibold text-sm">8 Modules</span>
                <Link 
                  href="/courses/bse" 
                  className="bg-lime-600 hover:bg-lime-700 text-white text-sm px-3 sm:px-4 py-1.5 sm:py-2 rounded-md font-medium transition-colors w-[120px] sm:w-auto text-center"
                >
                  View Course
                </Link>
              </div>
            </motion.div>

            {/* Course 2 - Indian Knowledge System */}
            <motion.div 
              variants={slideUp}
              className="card overflow-hidden hover:backdrop-blur-sm transition-all duration-200"
            >
              <div className="relative h-48 sm:h-40 bg-gradient-to-r from-red-500 to-orange-500 dark:from-red-600 dark:to-orange-600 mb-4 rounded-lg overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center bg-black/10">
                  <div className="flex flex-col sm:flex-row items-center sm:space-x-2 text-center sm:text-left">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                    <div className="text-xl font-semibold text-white mt-2 sm:mt-0">IKS</div>
                  </div>
                </div>
              </div>
              <h3 className="text-lg font-bold mb-3">Indian Knowledge System</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-5 text-sm line-clamp-2">
                Explore the rich heritage of Indian knowledge traditions, philosophies, and their modern applications.
              </p>
              <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-3 sm:gap-0">
                <span className="text-red-600 dark:text-red-400 font-semibold text-sm">8 Modules</span>
                <Link 
                  href="/courses/indian-knowledge-system" 
                  className="bg-red-600 hover:bg-red-700 text-white text-sm px-3 sm:px-4 py-1.5 sm:py-2 rounded-md font-medium transition-colors w-[120px] sm:w-auto text-center"
                >
                  View Course
                </Link>
              </div>
            </motion.div>

            {/* Course 3 - Principles of Microeconomics */}
            <motion.div 
              variants={slideUp}
              className="card overflow-hidden hover:backdrop-blur-sm transition-all duration-200"
            >
              <div className="relative h-48 sm:h-40 bg-gradient-to-r from-gray-500 to-blue-600 dark:from-gray-600 dark:to-blue-700 mb-4 rounded-lg overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center bg-black/10">
                  <div className="flex flex-col sm:flex-row items-center sm:space-x-2 text-center sm:text-left">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="#FFFFFF" viewBox="0 0 496 496">
                    <g>
                      <g>
                        <g>
                          <path d="M352,208v-8H184V32h-8C78.952,32,0,110.952,0,208c0,79.104,52.352,147.624,128,169.008V496h368V232H350.104 
                          C351.232,223.944,352,215.896,352,208z M128,360.368C61.584,339.568,16,278.376,16,208c0-85.536,67.48-155.624,152-159.808V216 
                          h167.792c-0.28,5.296-0.928,10.64-1.744,16H128V360.368z M264,304c-4.416,0-8-3.584-8-8c0-4.416,3.584-8,8-8h16 
                          c4.416,0,8,3.584,8,8c0,4.416-3.584,8-8,8H264z M280,336c4.416,0,8,3.584,8,8c0,4.416-3.584,8-8,8h-16c-4.416,0-8-3.584-8-8 
                          c0-4.416,3.584-8,8-8H280z M184,352c-4.416,0-8-3.584-8-8c0-4.416,3.584-8,8-8h16c4.416,0,8,3.584,8,8c0,4.416-3.584,8-8,8H184z 
                          M200,384c4.416,0,8,3.584,8,8c0,4.416-3.584,8-8,8h-16c-4.416,0-8-3.584-8-8c0-4.416,3.584-8,8-8H200z M184,480h-40V248h40v72 
                          c-13.232,0-24,10.768-24,24s10.768,24,24,24c-13.232,0-24,10.768-24,24s10.768,24,24,24c-13.232,0-24,10.768-24,24 
                          s10.768,24,24,24V480z M176,440c0-4.416,3.584-8,8-8h16c4.416,0,8,3.584,8,8c0,4.416-3.584,8-8,8h-16 
                          C179.584,448,176,444.416,176,440z M264,480h-64v-16c13.232,0,24-10.768,24-24s-10.768-24-24-24c13.232,0,24-10.768,24-24 
                          s-10.768-24-24-24c13.232,0,24-10.768,24-24s-10.768-24-24-24v-72h64v24c-13.232,0-24,10.768-24,24s10.768,24,24,24 
                          c-13.232,0-24,10.768-24,24s10.768,24,24,24c-13.232,0-24,10.768-24,24s10.768,24,24,24V480z M256,392c0-4.416,3.584-8,8-8h16 
                          c4.416,0,8,3.584,8,8c0,4.416-3.584,8-8,8h-16C259.584,400,256,396.416,256,392z M344,480h-64v-64c13.232,0,24-10.768,24-24 
                          s-10.768-24-24-24c13.232,0,24-10.768,24-24s-10.768-24-24-24c13.232,0,24-10.768,24-24s-10.768-24-24-24v-24h64v24 
                          c-13.232,0-24,10.768-24,24s10.768,24,24,24v48c-13.232,0-24,10.768-24,24s10.768,24,24,24c-13.232,0-24,10.768-24,24 
                          s10.768,24,24,24V480z M360,384c4.416,0,8,3.584,8,8c0,4.416-3.584,8-8,8h-16c-4.416,0-8-3.584-8-8c0-4.416,3.584-8,8-8H360z 
                          M336,440c0-4.416,3.584-8,8-8h16c4.416,0,8,3.584,8,8c0,4.416-3.584,8-8,8h-16C339.584,448,336,444.416,336,440z M440,432 
                          c4.416,0,8,3.584,8,8c0,4.416-3.584,8-8,8h-16c-4.416,0-8-3.584-8-8c0-4.416,3.584-8,8-8H440z M424,352c-4.416,0-8-3.584-8-8 
                          c0-4.416,3.584-8,8-8h16c4.416,0,8,3.584,8,8c0,4.416-3.584,8-8,8H424z M440,248h40v232h-40v-16c13.232,0,24-10.768,24-24 
                          s-10.768-24-24-24v-48c13.232,0,24-10.768,24-24s-10.768-24-24-24c13.232,0,24-10.768,24-24s-10.768-24-24-24V248z M448,296 
                          c0,4.416-3.584,8-8,8h-16c-4.416,0-8-3.584-8-8c0-4.416,3.584-8,8-8h16C444.416,288,448,291.584,448,296z M360,248h64v24 
                          c-13.232,0-24,10.768-24,24s10.768,24,24,24c-13.232,0-24,10.768-24,24s10.768,24,24,24v48c-13.232,0-24,10.768-24,24 
                          s10.768,24,24,24v16h-64v-16c13.232,0,24-10.768,24-24s-10.768-24-24-24c13.232,0,24-10.768,24-24s-10.768-24-24-24v-48 
                          c13.232,0,24-10.768,24-24s-10.768-24-24-24V248z M360,288c4.416,0,8,3.584,8,8c0,4.416-3.584,8-8,8h-16c-4.416,0-8-3.584-8-8 
                          c0-4.416,3.584-8,8-8H360z"></path>
                          <path d="M356.688,0L317.96,38.728C287.808,14.528,249.576,0,208,0h-8v184h184v-8c0-49.712-20.752-94.648-54.008-126.68 
                          L363.312,16H496V0H356.688z M367.808,168H216V16.192c34.072,1.688,65.28,14.192,90.504,33.984l-48.16,48.16l11.312,11.312 
                          l48.976-48.976C347.2,88.088,365.72,125.888,367.808,168z"></path>
                          <rect x="480" y="32" width="16" height="16"></rect>
                          <rect x="376" y="32" width="88" height="16"></rect>
                        </g>
                      </g>
                    </g>
                    </svg>
                    <div className="text-xl font-semibold text-white mt-2 sm:mt-0">ASB</div>
                  </div>
                </div>
              </div>
              <h3 className="text-lg font-bold mb-3">Advanced Statistics for Business</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-5 text-sm line-clamp-2">
              Introduction to advanced statistical techniques that are vital for decision-making in management and entrepreneurship.
              </p>
              <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-3 sm:gap-0">
                <span className="text-gray-600 dark:text-gray-400 font-semibold text-sm">4 Modules</span>
                <Link 
                  href="/courses/asb" 
                  className="bg-gray-600 hover:bg-gray-700 text-white text-sm px-3 sm:px-4 py-1.5 sm:py-2 rounded-md font-medium transition-colors w-[120px] sm:w-auto text-center"
                >
                  View Course
                </Link>
              </div>
            </motion.div>
          </motion.div>

          <motion.div variants={slideUp} className="text-center mt-6 sm:mt-8 md:mt-10">
            <Link 
              href="/courses" 
              className="inline-flex items-center space-x-2 bg-indigo-600 hover:bg-indigo-700 text-white px-4 sm:px-5 py-2 sm:py-2.5 rounded-lg font-medium transition-colors shadow-md text-sm sm:text-base w-auto max-w-[200px] mx-auto"
            >
              <span>View All Courses</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
          </motion.div>
        </div>
      </motion.section>

      {/* Testimonials Section */}
      <motion.section 
        initial="hidden"
        animate={testimonialsControls}
        variants={fadeIn}
        className="bg-gray-50 dark:bg-gray-900"
      >
        <TestimonialsSection 
          title="Early Reviews"
          description="Have a look at what these early reviews say about Gradestone."
          testimonials={[
            {
              author: {
                name: "Sachin Mittal",
                handle: "BBA DBE Learner",
                avatar: "/images/Testimonials/sachin.jpg"
              },
              text: "This is fantastic! The layout makes finding notes a breeze! GraDex is super accurate as well. Huge thanks to you all, this has already become my go-to study hack."
            },
            {
              author: {
                name: "Yana Sundli",
                handle: "Learning Pod Leader",
                avatar: "/images/Testimonials/yana.jpg"
              },
              text: "Most of us were struggling with tough Statistics topics, but their notes and practice tests are making everything so much simpler.🤩 Plus, the clean design, fast loading and easy navigation is making the whole experience even better!"
            },
            {
              author: {
                name: "Falak Daga",
                handle: "Zonal Representative",
                avatar: "/images/Testimonials/falak.jpg"
              },
              text: "The notes are well-organized and straight to the point, and the tests after each module really help me check my understanding. It’s going to be of huge help, especially during exam time! GREAT WORK INDEED ✨"
            },
            
            
          ]}
        />
      </motion.section>

      {/* CTA Section */}
      <motion.section 
        initial="hidden"
        animate={ctaControls}
        variants={fadeIn}
        className="relative bg-gradient-to-br from-indigo-600 via-purple-600 to-indigo-700 text-white dark:from-indigo-800 dark:via-purple-800 dark:to-indigo-900 py-16 sm:py-24 overflow-hidden"
      >
        <ParticleBackground className="opacity-50" />
        <motion.div variants={slideUp} className="container-custom text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 md:mb-6">Join the Gradestone Community!</h2>
            <p className="text-sm sm:text-base md:text-lg mb-6 md:mb-8 text-gray-100">
            Whether you're stuck on a concept or just looking for motivation, the Gradestone community is here for you.
            </p>
            <Link 
              href="https://chat.whatsapp.com/DpUJ2d7WEs11WmWQNU5PAu"
              className="inline-flex items-center space-x-2 bg-white text-indigo-700 hover:bg-gray-100 px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-semibold transition-colors shadow-lg text-sm sm:text-base w-auto whitespace-nowrap max-w-[200px] mx-auto"
              target="_blank"
            >
              <span>Join Now!</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
          </div>
        </motion.div>
      </motion.section>
    </div>
  );
}