'use client';

import React, { useState, useRef, useEffect } from 'react';
import { motion, useAnimationControls } from 'framer-motion';
import { fadeIn, slideUp, staggerContainer } from '../../utils/animations';
import GraDexChatBot from '@/components/GraDexChatBot';
import ParticleBackground from '@/components/ParticleBackground';


export default function GraDexPage() {
  // Animation controls for each section
  const heroControls = useAnimationControls();
  const chatSectionControls = useAnimationControls();
  
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
        await chatSectionControls.start('visible');
      } catch (error) {
        console.error("Animation error:", error);
      }
    };
    
    sequence();
  }, [isMounted, heroControls, chatSectionControls]);

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
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 drop-shadow-lg">GraDex Assistant</h1>
            <p className="text-lg sm:text-xl mb-6 sm:mb-8 drop-shadow">
              Your intelligent learning companion with access to all Gradestone content
            </p>
          </motion.div>
        </div>
      </motion.section>

      {/* Chat Section */}
      <motion.section 
        initial="hidden"
        animate={chatSectionControls}
        variants={fadeIn}
        className="py-12 sm:py-16 bg-white dark:bg-gray-800"
      >
        <div className="container-custom px-4 sm:px-6">
          <motion.div 
            variants={staggerContainer}
            className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-start"
          >
            <motion.div variants={slideUp} className="lg:col-span-2">
              <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6">How GraDex Can Help You</h2>
              <div className="space-y-6">
                <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg shadow-sm">
                  <h3 className="text-lg font-semibold mb-2 text-indigo-600 dark:text-indigo-400">Course Content Assistance</h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base">
                    Ask questions about any course material and get detailed answers with references to specific modules and sections.
                  </p>
                </div>
                
                <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg shadow-sm">
                  <h3 className="text-lg font-semibold mb-2 text-indigo-600 dark:text-indigo-400">Learning Support</h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base">
                    Get explanations, summaries, and additional context for complex topics from your courses.
                  </p>
                </div>
                
                <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg shadow-sm">
                  <h3 className="text-lg font-semibold mb-2 text-indigo-600 dark:text-indigo-400">Source References</h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base">
                    Every answer includes references to where the information was found, making it easy to explore topics further.
                  </p>
                </div>
              </div>
            </motion.div>
            
            <motion.div variants={slideUp} className="lg:col-span-3">
              <GraDexChatBot />
            </motion.div>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
}