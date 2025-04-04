'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '../utils/animations';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    
    setStatus('loading');
    
    // Simulate API call
    try {
      // Replace with actual API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      setStatus('success');
      setEmail('');
      setTimeout(() => setStatus('idle'), 3000);
    } catch (error) {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 3000);
    }
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={fadeIn}
      className="bg-gray-900 text-white py-8 px-6 rounded-lg"
    >
      <h3 className="text-xl font-semibold mb-3">Subscribe to our newsletter</h3>
      
      {status === 'success' ? (
        <div className="text-green-400 py-2">
          Thanks for subscribing! Check your email soon.
        </div>
      ) : status === 'error' ? (
        <div className="text-red-400 py-2">
          Something went wrong. Please try again.
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2 sm:gap-0">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Your email"
            className="bg-gray-800 text-white flex-grow px-4 py-3 rounded-lg sm:rounded-r-none focus:outline-none focus:ring-2 focus:ring-indigo-500"
            aria-label="Email address"
            required
          />
          <button
            type="submit"
            disabled={status === 'loading'}
            className={`
              ${status === 'loading' ? 'bg-indigo-500' : 'bg-indigo-600 hover:bg-indigo-700'}
              text-white px-6 py-3 rounded-lg sm:rounded-l-none font-medium transition-colors duration-200 whitespace-nowrap
            `}
          >
            {status === 'loading' ? 'Subscribing...' : 'Subscribe'}
          </button>
        </form>
      )}
      
      <p className="text-xs text-gray-400 mt-2">
        We'll never share your email. Unsubscribe anytime.
      </p>
    </motion.div>
  );
};

export default Newsletter; 