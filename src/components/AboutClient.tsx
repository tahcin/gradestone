'use client';

import Link from 'next/link';
import { motion, useAnimationControls } from 'framer-motion';
import { fadeIn, slideUp, staggerContainer } from '../utils/animations';
import { useEffect, useState } from 'react';
import ParticleBackground from '@/components/ParticleBackground';

export default function AboutClient() {
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
        className="relative h-screen flex items-center justify-center text-center px-4"
        initial="hidden"
        animate={heroControls}
        variants={staggerContainer}
      >
        <ParticleBackground />
        <div className="z-10">
          <motion.h1 
            className="text-5xl md:text-6xl font-bold mb-6"
            variants={fadeIn}
          >
            About Gradestone
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto"
            variants={fadeIn}
          >
            Empowering students with innovative learning solutions
          </motion.p>
        </div>
      </motion.section>

      {/* Our Story Section */}
      <motion.section
        className="py-20 px-4"
        initial="hidden"
        animate={storyControls}
        variants={staggerContainer}
      >
        <div className="max-w-6xl mx-auto">
          <motion.h2 
            className="text-4xl font-bold mb-12 text-center"
            variants={slideUp}
          >
            Our Story
          </motion.h2>
          <motion.div 
            className="grid md:grid-cols-2 gap-12"
            variants={fadeIn}
          >
            <div>
              <h3 className="text-2xl font-semibold mb-4">The Beginning</h3>
              <p className="text-lg mb-6">
                Founded by a team of educators and technologists, Gradestone was born from a simple observation: traditional education needed to evolve.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-4">The Vision</h3>
              <p className="text-lg mb-6">
                We envisioned a platform that would make quality education accessible to everyone, anywhere in the world.
              </p>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Our Mission Section */}
      <motion.section
        className="py-20 px-4 bg-gray-50"
        initial="hidden"
        animate={missionControls}
        variants={staggerContainer}
      >
        <div className="max-w-6xl mx-auto">
          <motion.h2 
            className="text-4xl font-bold mb-12 text-center"
            variants={slideUp}
          >
            Our Mission
          </motion.h2>
          <motion.div 
            className="text-center max-w-4xl mx-auto"
            variants={fadeIn}
          >
            <p className="text-xl mb-8">
              To revolutionize education through technology, making it more engaging, accessible, and effective for learners worldwide.
            </p>
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-3">Innovation</h3>
                <p>Pushing boundaries in educational technology</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3">Accessibility</h3>
                <p>Making quality education available to all</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3">Excellence</h3>
                <p>Maintaining the highest standards in education</p>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Our Team Section */}
      <motion.section
        className="py-20 px-4"
        initial="hidden"
        animate={teamControls}
        variants={staggerContainer}
      >
        <div className="max-w-6xl mx-auto">
          <motion.h2 
            className="text-4xl font-bold mb-12 text-center"
            variants={slideUp}
          >
            Our Team
          </motion.h2>
          <motion.div 
            className="grid md:grid-cols-3 gap-8"
            variants={fadeIn}
          >
            {/* Team Member Cards */}
            <div className="text-center">
              <div className="w-32 h-32 rounded-full bg-gray-200 mx-auto mb-4"></div>
              <h3 className="text-xl font-semibold">John Doe</h3>
              <p className="text-gray-600">Founder & CEO</p>
            </div>
            <div className="text-center">
              <div className="w-32 h-32 rounded-full bg-gray-200 mx-auto mb-4"></div>
              <h3 className="text-xl font-semibold">Jane Smith</h3>
              <p className="text-gray-600">Head of Education</p>
            </div>
            <div className="text-center">
              <div className="w-32 h-32 rounded-full bg-gray-200 mx-auto mb-4"></div>
              <h3 className="text-xl font-semibold">Mike Johnson</h3>
              <p className="text-gray-600">Tech Lead</p>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.section
        className="py-20 px-4 bg-gray-50"
        initial="hidden"
        animate={ctaControls}
        variants={staggerContainer}
      >
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2 
            className="text-4xl font-bold mb-8"
            variants={slideUp}
          >
            Join Our Journey
          </motion.h2>
          <motion.p 
            className="text-xl mb-12"
            variants={fadeIn}
          >
            Be part of the educational revolution. Start learning with Gradestone today.
          </motion.p>
          <motion.div variants={fadeIn}>
            <Link 
              href="/courses" 
              className="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              Explore Courses
            </Link>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
}