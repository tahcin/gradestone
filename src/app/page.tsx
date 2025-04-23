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
              Smart Study Companion for BBA DBE
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
  
                      <div className="text-lg font-bold text-white">Your Learning Co-Pilot</div>
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
        className="section-padding bg-white dark:bg-gray-800"
      >
        
        <div className="container-custom">
          <motion.div variants={slideUp} className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 md:mb-4">Why Choose Gradestone?</h2>
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
              className="card hover:bg-gray-50/90 dark:hover:bg-gray-700/90 hover:backdrop-blur-sm transition-all duration-200"
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
              className="card hover:bg-gray-50/90 dark:hover:bg-gray-700/90 hover:backdrop-blur-sm transition-all duration-200"
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
              className="card hover:bg-gray-50/90 dark:hover:bg-gray-700/90 hover:backdrop-blur-sm transition-all duration-200 sm:col-span-2 md:col-span-1 sm:max-w-md sm:mx-auto md:max-w-none"
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
              className="card overflow-hidden hover:bg-gray-50/90 dark:hover:bg-gray-700/90 hover:backdrop-blur-sm transition-all duration-200"
            >
              <div className="relative h-48 sm:h-40 bg-gradient-to-r from-purple-500 to-pink-600 dark:from-purple-600 dark:to-pink-700 mb-4 rounded-lg overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center bg-black/10">
                  <div className="flex flex-col sm:flex-row items-center sm:space-x-2 text-center sm:text-left">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                    </svg>
                    <div className="text-xl font-semibold text-white mt-2 sm:mt-0">PC</div>
                  </div>
                </div>
              </div>
              <h3 className="text-lg font-bold mb-3">Persuasive Communication</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-5 text-sm line-clamp-2">
                Develop effective persuasion techniques and communication skills for professional and academic settings.
              </p>
              <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-3 sm:gap-0">
                <span className="text-purple-600 dark:text-purple-400 font-semibold text-sm">8 Modules</span>
                <Link 
                  href="/courses/persuasive-communication" 
                  className="bg-purple-600 hover:bg-purple-700 text-white text-sm px-3 sm:px-4 py-1.5 sm:py-2 rounded-md font-medium transition-colors w-[120px] sm:w-auto text-center"
                >
                  View Course
                </Link>
              </div>
            </motion.div>

            {/* Course 2 - Indian Knowledge System */}
            <motion.div 
              variants={slideUp}
              className="card overflow-hidden hover:bg-gray-50/90 dark:hover:bg-gray-700/90 hover:backdrop-blur-sm transition-all duration-200"
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
                <span className="text-red-600 dark:text-red-400 font-semibold text-sm">7 Modules</span>
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
              className="card overflow-hidden hover:bg-gray-50/90 dark:hover:bg-gray-700/90 hover:backdrop-blur-sm transition-all duration-200"
            >
              <div className="relative h-48 sm:h-40 bg-gradient-to-r from-green-500 to-teal-600 dark:from-green-600 dark:to-teal-700 mb-4 rounded-lg overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center bg-black/10">
                  <div className="flex flex-col sm:flex-row items-center sm:space-x-2 text-center sm:text-left">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                    <div className="text-xl font-semibold text-white mt-2 sm:mt-0">PM</div>
                  </div>
                </div>
              </div>
              <h3 className="text-lg font-bold mb-3">Principles of Microeconomics</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-5 text-sm line-clamp-2">
                Understand fundamental microeconomic concepts, market structures, and decision-making processes.
              </p>
              <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-3 sm:gap-0">
                <span className="text-green-600 dark:text-green-400 font-semibold text-sm">9 Modules</span>
                <Link 
                  href="/courses/principles-of-microeconomics" 
                  className="bg-green-600 hover:bg-green-700 text-white text-sm px-3 sm:px-4 py-1.5 sm:py-2 rounded-md font-medium transition-colors w-[120px] sm:w-auto text-center"
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
          title="What Our Students Say"
          description="Join thousands of BBA DBE students who are already excelling in their courses with Gradestone"
          testimonials={[
            {
              author: {
                name: "Priya Sharma",
                handle: "@priya_bba",
                avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=face"
              },
              text: "Gradestone's study materials and AI assistance helped me ace my Persuasive Communication course. The mindmaps are incredibly helpful!"
            },
            {
              author: {
                name: "Rahul Patel",
                handle: "@rahul_dbe",
                avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
              },
              text: "The IKS course materials are comprehensive and well-structured. GraDex AI's explanations make complex concepts easy to understand."
            },
            {
              author: {
                name: "Ananya Singh",
                handle: "@ananya_s",
                avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=face"
              },
              text: "The interactive quizzes and personalized feedback have significantly improved my understanding of Microeconomics principles."
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