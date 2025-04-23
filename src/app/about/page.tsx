'use client';

import Link from 'next/link';
import { motion, useAnimationControls } from 'framer-motion';
import { fadeIn, slideUp, staggerContainer } from '../../utils/animations';
import { useEffect, useState } from 'react';
import ParticleBackground from '@/components/ParticleBackground';

export default function AboutPage() {
  // Animation controls for each section
  const heroControls = useAnimationControls();
  const storyControls = useAnimationControls();
  const missionControls = useAnimationControls();
  const teamControls = useAnimationControls();
  const ctaControls = useAnimationControls();
  
  // Add mounted state to ensure animations only start after mount
  const [isMounted, setIsMounted] = useState(false);

  // Set mounted state after component mounts
  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Separate useEffect for animations that depends on mounted state
  useEffect(() => {
    if (!isMounted) return;
    
    const sequence = async () => {
      try {
        await heroControls.start('visible');
        await storyControls.start('visible');
        await missionControls.start('visible');
        await teamControls.start('visible');
        await ctaControls.start('visible');
      } catch (error) {
        console.error("Animation error:", error);
      }
    };
    
    sequence();
  }, [isMounted, heroControls, storyControls, missionControls, teamControls, ctaControls]);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <motion.section 
        initial="hidden"
        animate={heroControls}
        variants={fadeIn}
        className="relative bg-gradient-to-br from-indigo-700 via-purple-700 to-indigo-800 text-white dark:from-indigo-900 dark:via-purple-900 dark:to-indigo-950 py-16 sm:py-24 overflow-hidden"
      >
        <ParticleBackground className="opacity-50" />
        <div className="container-custom px-4 sm:px-6 relative z-10">
          <motion.div 
            variants={slideUp}
            className="max-w-3xl mx-auto text-center"
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 drop-shadow-lg">About Gradestone</h1>
            <p className="text-lg sm:text-xl mb-6 sm:mb-8 drop-shadow">
              Transforming education through technology and innovation
            </p>
          </motion.div>
        </div>
      </motion.section>

      {/* Our Story */}
      <motion.section 
        initial="hidden"
        animate={storyControls}
        variants={fadeIn}
        className="py-16 sm:py-24 bg-white dark:bg-gray-800"
      >
        
        <div className="container-custom px-4 sm:px-6">
          <motion.div 
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center"
          >
            <motion.div variants={slideUp}>
              <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6">Our Story</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm sm:text-base">
                Gradestone was founded in 2020 with a simple mission: to make high-quality education accessible to everyone, everywhere. What started as a small project has grown into a comprehensive learning platform serving thousands of students worldwide.
              </p>
              <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm sm:text-base">
                Our founder, a former educator, recognized the limitations of traditional educational methods and envisioned a platform that would break down barriers to learning. With this vision in mind, Gradestone was born.
              </p>
              <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base">
                Today, we continue to innovate and expand our offerings, working closely with industry experts to create courses that are not only informative but also engaging and practical.
              </p>
            </motion.div>
            <motion.div 
              variants={slideUp}
              className="bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-gray-800 dark:to-purple-900/20 h-60 sm:h-80 rounded-lg flex items-center justify-center mt-4 md:mt-0 relative overflow-hidden shadow-xl"
            >
              <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-1/4 left-1/4 w-20 h-20 rounded-full bg-indigo-300/30 dark:bg-indigo-600/20 backdrop-blur-sm"></div>
                <div className="absolute bottom-1/4 right-1/4 w-24 h-24 rounded-full bg-purple-300/30 dark:bg-purple-600/20 backdrop-blur-sm"></div>
                <div className="absolute top-1/2 right-1/3 w-16 h-16 rounded-lg bg-blue-300/30 dark:bg-blue-600/20 backdrop-blur-sm rotate-12"></div>
              </div>
              <div className="relative z-10 text-center">
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  className="h-16 w-16 text-indigo-600/80 dark:text-indigo-400/80 mx-auto mb-2" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={1.5} 
                    d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" 
                  />
                </svg>
                <div className="text-lg font-semibold text-indigo-700 dark:text-indigo-300">Our Journey</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* Our Mission */}
      <motion.section 
        initial="hidden"
        animate={missionControls}
        variants={fadeIn}
        className="py-16 sm:py-24 bg-gradient-to-r from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900"
      >
        <div className="container-custom px-4 sm:px-6">
          <motion.div 
            variants={slideUp}
            className="max-w-3xl mx-auto text-center mb-10 sm:mb-16"
          >
            <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6">Our Mission</h2>
            <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300">
              To empower individuals through accessible, high-quality education that prepares them for success in a rapidly changing world.
            </p>
          </motion.div>

          <motion.div 
            variants={staggerContainer}
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8"
          >
            {/* Value 1 */}
            <motion.div variants={slideUp} className="card text-center p-6 bg-gradient-to-br from-white to-indigo-50 dark:from-gray-800 dark:to-indigo-900/30 hover:shadow-lg transition-all duration-300">
              <div className="rounded-full bg-primary/10 dark:bg-primary/20 p-4 sm:p-6 w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center mx-auto mb-4 sm:mb-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 sm:h-10 sm:w-10 text-primary"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zM8 7a1 1 0 00-1 1v4a1 1 0 001 1h4a1 1 0 001-1V8a1 1 0 00-1-1H8z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3">Accessibility</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base">
                We believe education should be accessible to everyone, regardless of their background or circumstances.
              </p>
            </motion.div>

            {/* Value 2 */}
            <motion.div variants={slideUp} className="card text-center p-6 bg-gradient-to-br from-white to-cyan-50 dark:from-gray-800 dark:to-cyan-900/30 hover:shadow-lg transition-all duration-300">
              <div className="rounded-full bg-secondary/10 dark:bg-secondary/20 p-4 sm:p-6 w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center mx-auto mb-4 sm:mb-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 sm:h-10 sm:w-10 text-secondary"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
                </svg>
              </div>
              <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3">Community</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base">
                Learning is a social experience. We foster a supportive community where students can connect and grow together.
              </p>
            </motion.div>

            {/* Value 3 */}
            <motion.div variants={slideUp} className="card text-center p-6 bg-gradient-to-br from-white to-purple-50 dark:from-gray-800 dark:to-purple-900/30 hover:shadow-lg transition-all duration-300 sm:col-span-2 md:col-span-1 mx-auto sm:max-w-md md:max-w-none">
              <div className="rounded-full bg-purple-600/10 dark:bg-purple-600/20 p-4 sm:p-6 w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center mx-auto mb-4 sm:mb-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 sm:h-10 sm:w-10 text-purple-600"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3">Innovation</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base">
                We continuously innovate to provide the best learning experience, leveraging technology to enhance education.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* Our Team */}
      <motion.section 
        initial="hidden"
        animate={teamControls}
        variants={fadeIn}
        className="py-16 sm:py-24 bg-white dark:bg-gray-800 relative overflow-hidden"
      >
        {/* Background decorative elements */}
        <div className="absolute top-0 left-0 w-64 h-64 bg-indigo-100 dark:bg-indigo-900/20 rounded-full -translate-x-1/2 -translate-y-1/2 opacity-70"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-purple-100 dark:bg-purple-900/20 rounded-full translate-x-1/3 translate-y-1/3 opacity-70"></div>
        
        <div className="container-custom px-4 sm:px-6 relative z-10">
          <motion.div 
            variants={slideUp}
            className="text-center mb-10 sm:mb-16"
          >
            <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6">Meet Our Team</h2>
            <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Our dedicated team of educators, technologists, and visionaries working together to transform education.
            </p>
          </motion.div>

          <motion.div 
            variants={staggerContainer}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8"
          >
            {/* Team Member 1 */}
            <motion.div variants={slideUp} className="card text-center p-6 bg-gradient-to-br from-white to-indigo-50 dark:from-gray-800 dark:to-indigo-900/20 hover:shadow-lg transition-all duration-300">
              <div className="w-24 h-24 sm:w-32 sm:h-32 bg-gradient-to-br from-indigo-400 to-purple-500 dark:from-indigo-600 dark:to-purple-700 rounded-full mx-auto mb-4 sm:mb-6 flex items-center justify-center shadow-lg">
                <span className="text-xl sm:text-2xl font-bold text-white">JD</span>
              </div>
              <h3 className="text-lg sm:text-xl font-bold mb-1">John Doe</h3>
              <p className="text-primary font-medium mb-2 sm:mb-3 text-sm sm:text-base">Founder & CEO</p>
              <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm sm:text-base">
                Former educator with a passion for making learning accessible to everyone.
              </p>
            </motion.div>

            {/* Team Member 2 */}
            <motion.div variants={slideUp} className="card text-center p-6 bg-gradient-to-br from-white to-cyan-50 dark:from-gray-800 dark:to-cyan-900/20 hover:shadow-lg transition-all duration-300">
              <div className="w-24 h-24 sm:w-32 sm:h-32 bg-gradient-to-br from-cyan-400 to-blue-500 dark:from-cyan-600 dark:to-blue-700 rounded-full mx-auto mb-4 sm:mb-6 flex items-center justify-center shadow-lg">
                <span className="text-xl sm:text-2xl font-bold text-white">JS</span>
              </div>
              <h3 className="text-lg sm:text-xl font-bold mb-1">Jane Smith</h3>
              <p className="text-primary font-medium mb-2 sm:mb-3 text-sm sm:text-base">Chief Learning Officer</p>
              <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm sm:text-base">
                Expert in instructional design with 15+ years experience in education.
              </p>
            </motion.div>

            {/* Team Member 3 */}
            <motion.div variants={slideUp} className="card text-center p-6 bg-gradient-to-br from-white to-blue-50 dark:from-gray-800 dark:to-blue-900/20 hover:shadow-lg transition-all duration-300">
              <div className="w-24 h-24 sm:w-32 sm:h-32 bg-gradient-to-br from-blue-400 to-indigo-500 dark:from-blue-600 dark:to-indigo-700 rounded-full mx-auto mb-4 sm:mb-6 flex items-center justify-center shadow-lg">
                <span className="text-xl sm:text-2xl font-bold text-white">RJ</span>
              </div>
              <h3 className="text-lg sm:text-xl font-bold mb-1">Robert Johnson</h3>
              <p className="text-primary font-medium mb-2 sm:mb-3 text-sm sm:text-base">CTO</p>
              <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm sm:text-base">
                Tech visionary focused on creating intuitive and powerful learning platforms.
              </p>
            </motion.div>

            {/* Team Member 4 */}
            <motion.div variants={slideUp} className="card text-center p-6 bg-gradient-to-br from-white to-purple-50 dark:from-gray-800 dark:to-purple-900/20 hover:shadow-lg transition-all duration-300">
              <div className="w-24 h-24 sm:w-32 sm:h-32 bg-gradient-to-br from-purple-400 to-pink-500 dark:from-purple-600 dark:to-pink-700 rounded-full mx-auto mb-4 sm:mb-6 flex items-center justify-center shadow-lg">
                <span className="text-xl sm:text-2xl font-bold text-white">MP</span>
              </div>
              <h3 className="text-lg sm:text-xl font-bold mb-1">Maria Perez</h3>
              <p className="text-primary font-medium mb-2 sm:mb-3 text-sm sm:text-base">Head of Content</p>
              <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm sm:text-base">
                Oversees course development and ensures the highest quality educational content.
              </p>
            </motion.div>
          </motion.div>
        </div>
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