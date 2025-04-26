'use client';

import { motion, useAnimationControls } from 'framer-motion';
import { fadeIn, slideUp, staggerContainer } from '../../utils/animations';
import { useEffect, useState } from 'react';
import ParticleBackground from '@/components/ParticleBackground';

export default function ContactPage() {
  // Animation controls for each section
  const heroControls = useAnimationControls();
  const contactOptionsControls = useAnimationControls();
  const formControls = useAnimationControls();
  const ctaControls = useAnimationControls();
  
  // Add mounted state to ensure animations only start after mount
  const [isMounted, setIsMounted] = useState(false);

  // Form state
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
  });

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
        await contactOptionsControls.start('visible');
        await formControls.start('visible');
        await ctaControls.start('visible');
      } catch (error) {
        console.error("Animation error:", error);
      }
    };
    
    sequence();
  }, [isMounted, heroControls, contactOptionsControls, formControls, ctaControls]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };



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
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 drop-shadow-lg">Get in touch</h1>
            <p className="text-lg sm:text-xl mb-6 sm:mb-8 drop-shadow">
              If you have any questions or would like to provide feedback, feel free to reach out. We're here to help.
            </p>
          </motion.div>
        </div>
      </motion.section>

      

      {/* Message Form */}
      <motion.section
        initial="hidden"
        animate={formControls}
        variants={fadeIn}
        className="py-10 sm:py-16 bg-gray-50 dark:bg-gray-900"
      >
        <div className="container-custom px-4 sm:px-6">
          <motion.div
            variants={slideUp}
            className="max-w-3xl mx-auto"
          >
            

            <form
              action="https://formsubmit.co/contact@gradestone.in"
              method="POST"
              className="space-y-8 bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg"
            >
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_honey" style={{ display: 'none' }} />
              <input type="hidden" name="_next" value="https://www.gradestone.in/thank-you" />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <label htmlFor="firstName" className="block text-base font-medium text-gray-700 dark:text-gray-300 mb-2">
                    First name
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    id="firstName"
                    required
                    className="block w-full rounded-lg border-gray-300 dark:border-gray-600 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 dark:bg-gray-800 dark:text-white text-base px-4 py-3 transition-colors duration-200 outline outline-1 outline-gray-300 focus:outline-2 focus:outline-indigo-500"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    placeholder="John"
                  />
                </div>

                <div>
                  <label htmlFor="lastName" className="block text-base font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Last name
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    id="lastName"
                    required
                    className="block w-full rounded-lg border-gray-300 dark:border-gray-600 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 dark:bg-gray-800 dark:text-white text-base px-4 py-3 transition-colors duration-200 outline outline-1 outline-gray-300 focus:outline-2 focus:outline-indigo-500"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    placeholder="Doe"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-base font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  required
                  className="block w-full rounded-lg border-gray-300 dark:border-gray-600 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 dark:bg-gray-800 dark:text-white text-base px-4 py-3 transition-colors duration-200 outline outline-1 outline-gray-300 focus:outline-2 focus:outline-indigo-500"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="john.doe@example.com"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-base font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Phone number
                </label>
                <input
                  type="tel"
                  name="phone"
                  id="phone"
                  required
                  className="block w-full rounded-lg border-gray-300 dark:border-gray-600 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 dark:bg-gray-800 dark:text-white text-base px-4 py-3 transition-colors duration-200 outline outline-1 outline-gray-300 focus:outline-2 focus:outline-indigo-500"
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="+91 01234 56789"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-base font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  id="message"
                  rows={6}
                  required
                  className="block w-full rounded-lg border-gray-300 dark:border-gray-600 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 dark:bg-gray-800 dark:text-white text-base px-4 py-3 transition-colors duration-200 outline outline-1 outline-gray-300 focus:outline-2 focus:outline-indigo-500"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Your message here..."
                />
              </div>

              <div>
                <button
                  type="submit"
                  className="w-full flex justify-center py-4 px-6 border border-transparent rounded-lg shadow-lg text-base font-semibold text-white bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-all duration-300 transform hover:scale-[1.02]"
                >
                  Send message
                </button>
              </div>
            </form>
            <div className="text-center py-2">
              <p className="text-gray-600 dark:text-gray-300">We'll get back to you within 24 hours.</p>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Support Us Section */}
      <motion.section 
        initial="hidden"
        animate={ctaControls}
        variants={fadeIn}
        className="py-16 sm:py-24 bg-gray-50 dark:bg-gray-800"
      >
        <motion.div variants={slideUp} className="container-custom text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 md:mb-6 text-gray-900 dark:text-white">Support Gradestone</h2>
            <p className="text-sm sm:text-base md:text-lg mb-6 md:mb-8 text-gray-600 dark:text-gray-300">
              Gradestone is offered completely free. If you find it helpful, consider supporting us to keep the platform running and improving.
            </p>
            <a 
              href="https://gpay.app.goo.gl/pay-QR8QQXVXWM"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 bg-indigo-600 text-white hover:bg-indigo-700 px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-semibold transition-colors shadow-lg text-sm sm:text-base w-auto whitespace-nowrap max-w-[200px] mx-auto"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
              </svg>
              <span>Support Us</span>
            </a>
          </div>
        </motion.div>
      </motion.section>
    </div>
  );
}