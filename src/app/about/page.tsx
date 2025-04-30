import Link from 'next/link';

// Enable static page generation with ISR
export const revalidate = 2592000; // 30 days in seconds

// Configure cache headers
export async function generateMetadata() {
  return {
    headers: [
      {
        key: 'Cache-Control',
        value: 'public, s-maxage=2592000, stale-while-revalidate=86400'
      }
    ]
  };
}
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
              One-stop solution for all your academic needs.
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
              <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6">Making Study Resources Smarter.</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm sm:text-base">
              At Gradestone, our mission is simple — to make study resources more accessible, engaging, and actually helpful. We’ve all been there: exams looming, zero preparation, and notes scattered across endless folders, often more confusing than clarifying. </p>
              <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm sm:text-base">
              That’s exactly where Gradestone steps in — your one-stop platform for notes, quizzes, and AI-driven support. We could go on about our curated resources, but the real game-changer is GraDex — our AI-powered study assistant, trained on all Gradestone content. Stuck on a concept? Need help planning your study schedule? Want a quick summary? Just ask GraDex and get instant, reliable answers. No more scrambling for help — with GraDex, you have a personal tutor by your side, 24/7.              </p>
              
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
            To transform the way you prepare, learn, and get good grades — by providing seamless access to organized resources, smart tools, and instant AI support when it’s needed the most.
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
              <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3">Clarity</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base">
              We eliminate the clutter. No more endless PDFs or confusing notes — just streamlined, well-structured resources designed for real learning.
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
              <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3">Support</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base">
              Learning doesn’t have to be a solo journey. With the Gradestone community and GraDex, you have a constant companion ready to guide, explain, and support you — anytime.</p>
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
              Pushing the boundaries by integrating AI into everyday learning. From personalized study paths to instant concept explanations, we make studying smarter, not harder.
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
        {/* Dotted background pattern */}
        <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] dark:bg-[radial-gradient(#374151_1px,transparent_1px)] [background-size:16px_16px] opacity-50"></div>
        
        <div className="container-custom px-4 sm:px-6 relative z-10">
          <motion.div 
            variants={slideUp}
            className="text-center mb-12 sm:mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-indigo-800 dark:text-indigo-600">Behind The Scene</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Meet the people hard at work that make Gradestone possible.
            </p>
          </motion.div>

          {/* GradeCore Section */}
          <motion.div variants={slideUp} className="mb-12">
            <h3 className="text-2xl font-bold mb-6 text-center">GradeCore</h3>
            <motion.div 
              variants={staggerContainer}
              className="grid grid-cols-2 sm:grid-cols-2 gap-6 lg:gap-8 max-w-3xl mx-auto"
            >
              {[
                { name: 'Tahcin Sarwar', role: 'Product Management', image: '/images/team/photo.png', link: 'https://www.linkedin.com/in/tahcinsarwar/' },
                { name: 'Priyanshi Sharma', role: 'Community Management', image: '/images/team/priyanshi2.png', link: 'https://www.linkedin.com/in/priyanshisharma20/'},
              ].map((member, index) => (
              <Link href={member.link} key={index} target="_blank">
              <motion.div 
                key={index}
                variants={slideUp}
                className="group relative bg-white dark:bg-gray-800 rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden"
              >
                {/* Profile image */}
                <div className="aspect-square w-full overflow-hidden">
                  <img 
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  
                </div>
                
                <div className="p-4">
                  <h3 className="font-semibold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {member.name}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                    {member.role}
                  </p>
                  
                  {/* Hover arrow */}
                  <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transform translate-x-2 group-hover:translate-x-0 transition-all duration-300">
                    <svg className="w-5 h-5 text-blue-600 dark:text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </div>
              </motion.div>
              </Link>
            ))}
          </motion.div>
          </motion.div>

          {/* GradeTeam Section */}
          <motion.div variants={slideUp} className="mt-8 ">
            <h3 className="text-2xl font-bold mb-6 text-center">GradeTeam</h3>
            <motion.div 
              variants={staggerContainer}
              className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-6 lg:gap-8 max-w-5xl mx-auto"
            >
              {[
                { name: 'Kusum Lata', role: 'Content Curation', image: '/images/team/kusum.png', link: 'https://www.linkedin.com/in/kusum-lata-5634a4329/' },
                { name: 'Saswat Sahoo', role: 'Content Curation', image: '/images/team/saswat.png', link: 'https://www.linkedin.com/in/saswatsahoo0/' },
                { name: 'Samarth Saran', role: 'Marketing', image: '/images/team/samarth.png', link: 'https://www.linkedin.com/in/samarth-saran-12b9ba275/' },
                { name: 'Samlan Ramung', role: 'Marketing', image: '/images/team/samlan.png', link: 'https://www.linkedin.com/in/samlan-ramung-57a03025b/' },
                { name: 'Mayuresh Shet', role: 'Graphic Design', image: '/images/team/mayuresh.png', link: 'https://www.linkedin.com/in/mayuresh-shet-440361244/' },
              ].map((member, index) => (
                <Link href={member.link} key={index} target="_blank">
                <motion.div 
                  key={index}
                  variants={slideUp}
                  className="group relative bg-white dark:bg-gray-800 rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden"
                >
                  {/* Profile image */}
                  <div className="aspect-square w-full overflow-hidden">
                    <img 
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    
                  </div>
                  
                  <div className="p-4">
                    <h3 className="font-semibold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      {member.name}
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                      {member.role}
                    </p>
                    
                    {/* Hover arrow */}
                    <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transform translate-x-2 group-hover:translate-x-0 transition-all duration-300">
                      <svg className="w-5 h-5 text-blue-600 dark:text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </div>
                  </div>
                </motion.div>
                </Link>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* Support Us Section */}
      <motion.section 
        initial="hidden"
        animate={ctaControls}
        variants={fadeIn}
        className="py-16 sm:py-24 bg-gray-50 dark:bg-gray-900"
      >
        <motion.div variants={slideUp} className="container-custom text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 md:mb-6 text-gray-900 dark:text-white">Support Gradestone</h2>
            <p className="text-sm sm:text-base md:text-lg mb-6 md:mb-8 text-gray-600 dark:text-gray-300">
              Gradestone is completely free. If you find it helpful, consider supporting us to keep the platform running and improving.
            </p>
            <div className="flex justify-center gap-4">
              <a 
                href="upi://pay?pa=tahcin49-1@oksbi&pn=Gradestone"
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