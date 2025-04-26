'use client';

import { motion, useAnimationControls } from 'framer-motion';
import { fadeIn, slideUp, staggerContainer } from '../../utils/animations';
import { useState, useEffect } from 'react';
import Link from 'next/link';

interface FAQItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
}

const FAQItem = ({ question, answer, isOpen, onToggle }: FAQItemProps) => {
  return (
    <div className="border-b border-gray-700">
      <button
        onClick={onToggle}
        className="w-full py-6 text-left flex justify-between items-center focus:outline-none"
      >
        <span className="text-lg font-medium">{question}</span>
        <motion.span
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className="ml-6"
        >
          <svg
            className="w-6 h-6 text-gray-400"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </motion.span>
      </button>
      <motion.div
        initial={false}
        animate={{
          height: isOpen ? 'auto' : 0,
          opacity: isOpen ? 1 : 0,
          marginBottom: isOpen ? '1.5rem' : 0
        }}
        transition={{ duration: 0.3 }}
        className="overflow-hidden"
      >
        <p className="pb-6 text-gray-400">{answer}</p>
      </motion.div>
    </div>
  );
};

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [isMounted, setIsMounted] = useState(false);
  const heroControls = useAnimationControls();
  const faqControls = useAnimationControls();
  const ctaControls = useAnimationControls();

  const faqItems = [
    {
      question: 'What is shadcnblocks?',
      answer: 'Shadcnblocks is a collection of beautifully designed, accessible, and customizable UI components built with Tailwind CSS and inspired by the ShadCN design system. It provides ready-to-use blocks that help developers create modern web interfaces quickly and efficiently.'
    },
    {
      question: 'How do I install shadcnblocks?',
      answer: 'You can install shadcnblocks using npm or yarn. Simply run "npm install shadcnblocks" or "yarn add shadcnblocks" in your project directory. Then, import the components you need and start using them in your application.'
    },
    {
      question: 'Is shadcnblocks free to use?',
      answer: 'Yes, shadcnblocks is completely free and open-source. You can use it in both personal and commercial projects without any licensing fees. We believe in making high-quality UI components accessible to everyone.'
    },
    {
      question: 'Can I customize the blocks?',
      answer: 'Absolutely! All components are built with customization in mind. You can modify colors, spacing, typography, and other properties using Tailwind CSS classes. The components also accept custom props for additional flexibility.'
    },
    {
      question: 'Do you offer support?',
      answer: 'Yes, we provide support through our community channels. You can ask questions on our GitHub discussions, join our Discord server, or reach out to our support team directly. Were committed to helping you succeed with shadcnblocks.'
    }
  ];

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (!isMounted) return;
    
    const sequence = async () => {
      try {
        await heroControls.start('visible');
        await faqControls.start('visible');
        await ctaControls.start('visible');
      } catch (error) {
        console.error("Animation error:", error);
      }
    };
    
    sequence();
  }, [isMounted, heroControls, faqControls, ctaControls]);

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Hero Section */}
      <motion.section
        initial="hidden"
        animate={heroControls}
        variants={fadeIn}
        className="py-16 sm:py-24"
      >
        <div className="container-custom px-4 sm:px-6">
          <motion.div variants={slideUp} className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
              Frequently asked questions
            </h1>
            <p className="text-lg text-gray-400">
              Everything you need to know about Gradestone. Can't find the answer you're looking for? Feel free to contact support.
            </p>
          </motion.div>
        </div>
      </motion.section>

      {/* FAQ Section */}
      <motion.section
        initial="hidden"
        animate={faqControls}
        variants={fadeIn}
        className="py-12 sm:py-16"
      >
        <div className="container-custom px-4 sm:px-6">
          <motion.div
            variants={staggerContainer}
            className="max-w-3xl mx-auto divide-y divide-gray-700"
          >
            {faqItems.map((item, index) => (
              <motion.div key={index} variants={slideUp}>
                <FAQItem
                  question={item.question}
                  answer={item.answer}
                  isOpen={openIndex === index}
                  onToggle={() => handleToggle(index)}
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.section
        initial="hidden"
        animate={ctaControls}
        variants={fadeIn}
        className="py-16 sm:py-24"
      >
        <div className="container-custom px-4 sm:px-6">
          <motion.div
            variants={slideUp}
            className="max-w-3xl mx-auto bg-gray-800 rounded-2xl p-8 sm:p-12"
          >
            <div className="flex flex-col items-center text-center">
              <div className="flex -space-x-4 mb-6">
                <div className="w-12 h-12 rounded-full bg-indigo-500 flex items-center justify-center text-white text-lg font-semibold border-2 border-gray-800">A</div>
                <div className="w-12 h-12 rounded-full bg-purple-500 flex items-center justify-center text-white text-lg font-semibold border-2 border-gray-800">B</div>
                <div className="w-12 h-12 rounded-full bg-pink-500 flex items-center justify-center text-white text-lg font-semibold border-2 border-gray-800">C</div>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold mb-4">Still have questions?</h2>
              <p className="text-gray-400 mb-8 max-w-md">
                Can't find the answer you're looking for? Our support team is here to help with any technical questions or concerns.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-gray-900 bg-white hover:bg-gray-100 transition-colors duration-200"
              >
                Contact Support
              </Link>
            </div>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
}