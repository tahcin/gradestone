'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { fadeIn, slideUp, staggerContainer } from '../utils/animations';
import { useTheme } from './ThemeProvider';

const Footer = () => {
  const { theme } = useTheme();
  return (
    <motion.footer 
      id="page-footer" // Add an ID here
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={fadeIn}
      className="bg-dark dark:bg-gray-900 text-white"
    >
      <div className="container-custom py-8 sm:py-10 lg:py-12">
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8"
        >
          <motion.div variants={slideUp} className="col-span-2 sm:col-span-2 lg:col-span-1">
            <div className="mb-3 sm:mb-4">
              <img
                src={theme === 'dark' ? '/images/Logo/gradestonenight.png' : '/images/Logo/Gradestonenight.png'}
                alt="Gradestone Logo"
                className="h-6 sm:h-8 w-auto"
              />
            </div>
            <p className="text-gray-300 text-sm sm:text-base mb-6 sm:mb-0">
              Learn smart. Boost your grades!
            </p>
          </motion.div>
          <motion.div variants={slideUp}>
            <h4 className="text-lg font-semibold mb-3 sm:mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <motion.li whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
                <Link href="/" className="text-gray-300 hover:text-white transition-colors inline-block py-1.5">
                  Home
                </Link>
              </motion.li>
              <motion.li whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
                <Link href="/courses" className="text-gray-300 hover:text-white transition-colors inline-block py-1.5">
                  Courses
                </Link>
              </motion.li>
              <motion.li whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
                <Link href="/about" className="text-gray-300 hover:text-white transition-colors inline-block py-1.5">
                  About Us
                </Link>
              </motion.li>
            </ul>
          </motion.div>
          <motion.div variants={slideUp}>
            <h4 className="text-lg font-semibold mb-3 sm:mb-4">Support</h4>
            <ul className="space-y-2">
              <motion.li whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
                <Link href="/faq" className="text-gray-300 hover:text-white transition-colors inline-block py-1.5">
                  FAQ
                </Link>
              </motion.li>
              <motion.li whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
                <Link href="/contact" className="text-gray-300 hover:text-white transition-colors inline-block py-1.5">
                  Contact Us
                </Link>
              </motion.li>
              {/*<motion.li whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
                <Link href="/privacy" className="text-gray-300 hover:text-white transition-colors inline-block py-1.5">
                  Privacy Policy
                </Link>
              </motion.li>*/}
            </ul>
          </motion.div>
          <motion.div variants={slideUp} className="col-span-2 sm:col-span-2 lg:col-span-1">
            <h4 className="text-lg font-semibold mb-3 sm:mb-4">Connect With Us</h4>
            <div className="flex space-x-4">
              <motion.a 
                whileHover={{ y: -5, scale: 1.1 }}
                transition={{ duration: 0.2 }}
                href="http://linkedin.com/company/gradestone-in/" 
                target="_blank"
                className="text-gray-300 hover:text-white p-2.5 rounded-full hover:bg-gray-800 transition-colors flex items-center justify-center" 
                aria-label="LinkedIn"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 32 32"
                >
                  <path d="M28.778 1.004h-25.56c-0.008 0-0.017 0-0.027 0-1.199 0-2.172 0.964-2.186 2.159v25.672c0.014 1.196 0.987 2.161 2.186 2.161 0.010 0 0.019 0 0.029 0h25.555c0.008 0 0.018 0 0.028 0 1.2 0 2.175-0.963 2.194-2.159v-25.67c-0.019-1.197-0.994-2.161-2.195-2.161-0.010 0-0.019 0-0.029 0zM9.9 26.562h-4.454v-14.311h4.454zM7.674 10.293c-1.425 0-2.579-1.155-2.579-2.579s1.155-2.579 2.579-2.579c1.424 0 2.579 1.154 2.579 2.578 0 1.423-1.154 2.577-2.577 2.577zM26.556 26.562h-4.441v-6.959c0-1.66-0.034-3.795-2.314-3.795-2.316 0-2.669 1.806-2.669 3.673v7.082h-4.441v-14.311h4.266v1.951h0.058c0.828-1.395 2.326-2.315 4.039-2.315 4.5 0 5.332 2.962 5.332 6.817v7.855z" />
                </svg>

              </motion.a>
              <motion.a 
                whileHover={{ y: -5, scale: 1.1 }}
                transition={{ duration: 0.2 }}
                href="https://chat.whatsapp.com/DpUJ2d7WEs11WmWQNU5PAu" 
                target="_blank"
                className="text-gray-300 hover:text-white p-2.5 rounded-full hover:bg-gray-800 transition-colors flex items-center justify-center"
                aria-label="WhatsApp"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M3.50002 12C3.50002 7.30558 7.3056 3.5 12 3.5C16.6944 3.5 20.5 7.30558 20.5 12C20.5 16.6944 16.6944 20.5 12 20.5C10.3278 20.5 8.77127 20.0182 7.45798 19.1861C7.21357 19.0313 6.91408 18.9899 6.63684 19.0726L3.75769 19.9319L4.84173 17.3953C4.96986 17.0955 4.94379 16.7521 4.77187 16.4751C3.9657 15.176 3.50002 13.6439 3.50002 12ZM12 1.5C6.20103 1.5 1.50002 6.20101 1.50002 12C1.50002 13.8381 1.97316 15.5683 2.80465 17.0727L1.08047 21.107C0.928048 21.4637 0.99561 21.8763 1.25382 22.1657C1.51203 22.4552 1.91432 22.5692 2.28599 22.4582L6.78541 21.1155C8.32245 21.9965 10.1037 22.5 12 22.5C17.799 22.5 22.5 17.799 22.5 12C22.5 6.20101 17.799 1.5 12 1.5ZM14.2925 14.1824L12.9783 15.1081C12.3628 14.7575 11.6823 14.2681 10.9997 13.5855C10.2901 12.8759 9.76402 12.1433 9.37612 11.4713L10.2113 10.7624C10.5697 10.4582 10.6678 9.94533 10.447 9.53028L9.38284 7.53028C9.23954 7.26097 8.98116 7.0718 8.68115 7.01654C8.38113 6.96129 8.07231 7.046 7.84247 7.24659L7.52696 7.52195C6.76823 8.18414 6.3195 9.2723 6.69141 10.3741C7.07698 11.5163 7.89983 13.314 9.58552 14.9997C11.3991 16.8133 13.2413 17.5275 14.3186 17.8049C15.1866 18.0283 16.008 17.7288 16.5868 17.2572L17.1783 16.7752C17.4313 16.5691 17.5678 16.2524 17.544 15.9269C17.5201 15.6014 17.3389 15.308 17.0585 15.1409L15.3802 14.1409C15.0412 13.939 14.6152 13.9552 14.2925 14.1824Z"
                />
                </svg>

              </motion.a>
              {/*<motion.a 
                whileHover={{ y: -5, scale: 1.1 }}
                transition={{ duration: 0.2 }}
                href="#" 
                className="text-gray-300 hover:text-white p-2.5 rounded-full hover:bg-gray-800 transition-colors flex items-center justify-center"
                aria-label="Instagram"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </motion.a>*/}
            </div>
          </motion.div>
        </motion.div>
        
        <motion.div 
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="border-t border-gray-700 mt-8 pt-6 flex flex-col sm:flex-row justify-between items-center"
        >
          <p className="text-gray-400 text-sm text-center sm:text-left mb-4 sm:mb-0">
            &copy; {new Date().getFullYear()} Gradestone. All rights reserved.
          </p>
          {/*<div className="flex space-x-4 text-sm text-gray-400">
            <Link href="/terms" className="hover:text-white transition-colors">Terms</Link>
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy</Link>
            <Link href="/cookies" className="hover:text-white transition-colors">Cookies</Link>
          </div>*/}
        </motion.div>
      </div>
    </motion.footer>
  );
};

export default Footer;