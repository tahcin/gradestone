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
            <div className="flex justify-center gap-4">
              <a 
                href="upi://pay?pa=tahcin49-1@oksbi&pn=Gradestone "
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 bg-indigo-600 text-white hover:bg-indigo-700 px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-semibold transition-colors shadow-lg text-sm sm:text-base w-auto whitespace-nowrap"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                </svg>
                <span>Support via UPI</span>
              </a>
              <a
                href="https://www.buymeacoffee.com/gradestone"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 bg-[#FFDD00] text-gray-900 hover:bg-[#E5C700] px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-semibold transition-colors shadow-lg text-sm sm:text-base w-auto whitespace-nowrap"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.216 6.415l-.132-.666c-.119-.598-.388-1.163-1.001-1.379-.197-.069-.42-.098-.57-.241-.152-.143-.196-.366-.231-.572-.065-.378-.125-.756-.192-1.133-.057-.325-.102-.69-.25-.987-.195-.4-.597-.634-.996-.788a5.723 5.723 0 00-.626-.194c-1-.263-2.05-.36-3.077-.416a25.834 25.834 0 00-3.7.062c-.915.083-1.88.184-2.75.5-.318.116-.646.256-.888.501-.297.302-.393.77-.177 1.146.154.267.415.456.692.58.36.162.737.284 1.123.366 1.075.238 2.189.331 3.287.37 1.218.05 2.437.01 3.65-.118.299-.033.598-.073.896-.119.352-.054.578-.513.474-.834-.124-.383-.457-.531-.834-.473-.466.074-.96.108-1.382.146-1.177.08-2.358.082-3.536.006a22.228 22.228 0 01-1.157-.107c-.086-.01-.18-.025-.258-.036-.243-.036-.484-.08-.724-.13-.111-.027-.111-.185 0-.212h.005c.277-.06.557-.108.838-.147h.002c.131-.009.263-.032.394-.048a25.076 25.076 0 013.426-.12c.674.019 1.347.067 2.017.144l.228.031c.267.04.533.088.798.145.392.085.895.113 1.07.542.055.137.08.288.111.431l.319 1.484a.237.237 0 01-.199.284h-.003c-.037.006-.075.01-.112.015a36.704 36.704 0 01-4.743.295 37.059 37.059 0 01-4.699-.304c-.14-.017-.293-.042-.417-.06-.326-.048-.649-.108-.973-.161-.393-.065-.768-.032-1.123.161-.29.16-.527.404-.675.701-.154.316-.199.66-.267 1-.069.34-.176.707-.135 1.056.087.753.613 1.365 1.37 1.502a39.69 39.69 0 0011.343.376.483.483 0 01.535.53l-.071.697-1.018 9.907c-.041.41-.047.832-.125 1.237-.122.637-.553 1.028-1.182 1.171-.577.131-1.165.2-1.756.205-.656.004-1.31-.025-1.966-.022-.699.004-1.556-.06-2.095-.58-.475-.458-.54-1.174-.605-1.793l-.731-7.013-.322-3.094c-.037-.351-.286-.695-.678-.678-.336.015-.718.3-.678.679l.228 2.185.949 9.112c.147 1.344 1.174 2.068 2.446 2.272.742.12 1.503.144 2.257.156.966.016 1.942.053 2.892-.122 1.408-.258 2.465-1.198 2.616-2.657.34-3.332.683-6.663 1.024-9.995l.215-2.087a.484.484 0 01.39-.426c.402-.078.787-.212 1.074-.518.455-.488.546-1.124.385-1.766zm-1.478.772c-.145.137-.363.201-.578.233-2.416.359-4.866.54-7.308.46-1.748-.06-3.477-.254-5.207-.498-.17-.024-.353-.055-.47-.18-.22-.236-.111-.71-.054-.995.052-.26.152-.609.463-.646.484-.057 1.046.148 1.526.22.577.088 1.156.159 1.737.212 2.48.226 5.002.19 7.472-.14.45-.06.899-.13 1.345-.21.399-.072.84-.206 1.08.206.166.281.188.657.162.974a.544.544 0 01-.169.364zm-6.159 3.9c-.862.37-1.84.788-3.109.788a5.884 5.884 0 01-1.569-.217l.877 9.004c.065.78.717 1.38 1.5 1.38 0 0 1.243.065 1.658.065.447 0 1.786-.065 1.786-.065.783 0 1.434-.6 1.499-1.38l.94-9.95a3.996 3.996 0 00-1.322-.238c-.826 0-1.491.284-2.26.613z"/>
                </svg>
                <span>Buy me a coffee</span>
              </a>
            </div>
          </div>
        </motion.div>
      </motion.section>
    </div>
  );
}