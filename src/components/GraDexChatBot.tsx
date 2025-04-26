import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import ReactMarkdown from 'react-markdown';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import 'katex/dist/katex.min.css';

type Message = {
  content: string;
  isUser: boolean;
};

export default function GraDexChatBot() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputMessage, setInputMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const chatContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputMessage.trim()) return;

    setIsLoading(true);
    const userMessage = { content: inputMessage, isUser: true };
    setMessages(prev => [...prev, userMessage]);
    setInputMessage('');

    try {
      const response = await fetch('/api/gradex', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: inputMessage })
      });

      if (!response.ok) throw new Error('Failed to get response');
      const { response: aiResponse } = await response.json();

      setMessages(prev => [...prev, {
        content: aiResponse,
        isUser: false
      }]);
    } catch (error) {
      setMessages(prev => [...prev, {
        content: 'Sorry, there was an error processing your request.',
        isUser: false
      }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <motion.div 
      // Adjusted height for better responsiveness on smaller screens
      className="flex flex-col h-[70vh] sm:h-[calc(100vh-16rem)] w-full bg-gray-200 dark:bg-gray-800 rounded-xl shadow-xl overflow-hidden"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }} // Slightly longer duration for smoother entry
    >
      <div className="flex items-center justify-between p-3 sm:p-4 border-b border-gray-200 dark:border-gray-700 bg-gradient-to-r from-blue-500 to-indigo-600">
        <h2 className="text-base sm:text-lg font-semibold text-white">Chat with GraDex</h2>
      </div>
      <div className="flex-1 overflow-y-auto p-3 sm:p-4 space-y-4 sm:space-y-6 h-full bg-white dark:bg-[#1f2937]" ref={chatContainerRef}>
        {messages.length === 0 ? (
          <div className="flex flex-col items-center justify-center h-full space-y-3 sm:space-y-4">
            <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-gradient-to-r from-blue-500 to-indigo-600 flex items-center justify-center text-white">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 sm:h-8 sm:w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
              </svg>
            </div>
            <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 text-center">Ask me anything about your courses!</p>
          </div>
        ) : (
          messages.map((message, index) => (
            <motion.div
              key={index}
              className={`flex ${message.isUser ? 'justify-end' : 'justify-start'} items-end space-x-2`}
              initial={{ opacity: 0, y: 15 }} // Slightly increased initial y offset
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, ease: "easeOut" }} // Smoother easing
            >
              {!message.isUser && (
                <motion.div 
                  className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-500 to-indigo-600 flex items-center justify-center text-white text-sm font-medium flex-shrink-0"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.1, duration: 0.2 }}
                >
                  AI
                </motion.div>
              )}
              <motion.div 
                className={`max-w-[85%] sm:max-w-[80%] rounded-2xl p-3 sm:p-4 ${message.isUser 
                  ? 'bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-br-none'
                  : 'bg-blue-500 text-white rounded-bl-none'}`}
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.2 }}
              >
                <div className="prose dark:prose-invert max-w-none break-words custom-markdown text-sm sm:text-base">
                  <ReactMarkdown
                    remarkPlugins={[remarkMath]}
                    rehypePlugins={[rehypeKatex]}
                    components={{
                      h1: ({node, ...props}) => <h1 className="mt-3 mb-1 sm:mt-4 sm:mb-2 text-lg sm:text-xl" {...props} />, 
                      h2: ({node, ...props}) => <h2 className="mt-3 mb-1 sm:mt-4 sm:mb-2 text-base sm:text-lg" {...props} />, 
                      h3: ({node, ...props}) => <h3 className="mt-3 mb-1 sm:mt-4 sm:mb-2 text-sm sm:text-base" {...props} />, 
                      p: ({node, ...props}) => <p className="mb-2 sm:mb-3" {...props} />, 
                      ul: ({node, ...props}) => <ul className="list-disc pl-4 sm:pl-6 mb-2 sm:mb-3 space-y-1 sm:space-y-2" {...props} />, 
                      ol: ({node, ...props}) => <ol className="list-decimal pl-4 sm:pl-6 mb-2 sm:mb-3 space-y-1 sm:space-y-2" {...props} />, 
                      li: ({node, ...props}) => <li className="mb-0.5 sm:mb-1" {...props} />, 
                      table: ({node, ...props}) => <table className="min-w-full border-collapse my-3 sm:my-4 text-xs sm:text-sm" {...props} />, 
                      thead: ({node, ...props}) => <thead className="bg-gray-100 dark:bg-gray-800" {...props} />, 
                      tbody: ({node, ...props}) => <tbody {...props} />, 
                      tr: ({node, ...props}) => <tr className="border-b border-gray-200 dark:border-gray-700" {...props} />, 
                      th: ({node, ...props}) => <th className="px-2 py-1 sm:px-4 sm:py-2 text-left font-semibold bg-gray-50 dark:bg-gray-700 text-gray-700 dark:text-gray-200" {...props} />, 
                      td: ({node, ...props}) => <td className="px-2 py-1 sm:px-4 sm:py-2 bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200" {...props} />, 
                      div: ({node, ...props}) => {
                        // Adjusted reference styling
                        if (props.className && props.className.includes('references')) {
                          return (
                            <div className="text-xs italic mt-3 sm:mt-4 pt-2 sm:pt-3 border-t border-gray-300 dark:border-gray-600">
                              <h3 className="italic text-xs mb-1 sm:mb-2 font-semibold">References:</h3>
                              <div className="italic text-xs" {...props} />
                            </div>
                          );
                        }
                        return <div {...props} />;
                      }
                    }}
                  >{message.content}</ReactMarkdown>
                </div>
              </motion.div>
            </motion.div>
          ))
        )}
        {isLoading && (
          <motion.div 
            className="flex justify-start items-end space-x-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            <div className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-500 to-indigo-600 flex items-center justify-center text-white text-sm font-medium flex-shrink-0">
              AI
            </div>
            <div className="max-w-[80%] rounded-2xl p-4 bg-gray-200 dark:bg-gray-700 rounded-bl-none">
              <div className="flex space-x-2">
                <motion.div className="w-2 h-2 rounded-full bg-blue-500" animate={{ y: [0, -4, 0] }} transition={{ duration: 0.6, repeat: Infinity, ease: "easeInOut" }}></motion.div>
                <motion.div className="w-2 h-2 rounded-full bg-blue-500" animate={{ y: [0, -4, 0] }} transition={{ duration: 0.6, delay: 0.1, repeat: Infinity, ease: "easeInOut" }}></motion.div>
                <motion.div className="w-2 h-2 rounded-full bg-blue-500" animate={{ y: [0, -4, 0] }} transition={{ duration: 0.6, delay: 0.2, repeat: Infinity, ease: "easeInOut" }}></motion.div>
              </div>
            </div>
          </motion.div>
        )}
      </div>
      <form onSubmit={handleSubmit} className="p-3 sm:p-4 border-t border-gray-200 dark:border-gray-700 bg-white dark:bg-[#1f2937]">
        <div className="flex items-center justify-center gap-3">
          <input
            type="text"
            value={inputMessage}
            onChange={(e) => setInputMessage(e.target.value)}
            placeholder="Type your message..."
            disabled={isLoading}
            className="flex-1 min-w-0 px-3 py-2 rounded-full border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 text-sm sm:text-base"
          />
          <button 
            type="submit" 
            disabled={isLoading}
            className="px-4 sm:px-6 py-2 bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-full hover:opacity-90 disabled:opacity-50 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200 font-medium flex items-center justify-center min-w-[70px] sm:min-w-[80px] text-sm sm:text-base"
          >
            {isLoading ? (
              <div className="flex space-x-1">
                <motion.div className="w-2 h-2 rounded-full bg-white" animate={{ y: [0, -4, 0] }} transition={{ duration: 0.6, repeat: Infinity, ease: "easeInOut" }}></motion.div>
                <motion.div className="w-2 h-2 rounded-full bg-white" animate={{ y: [0, -4, 0] }} transition={{ duration: 0.6, delay: 0.1, repeat: Infinity, ease: "easeInOut" }}></motion.div>
                <motion.div className="w-2 h-2 rounded-full bg-white" animate={{ y: [0, -4, 0] }} transition={{ duration: 0.6, delay: 0.2, repeat: Infinity, ease: "easeInOut" }}></motion.div>
              </div>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 sm:h-6 sm:w-6 transform rotate-90" viewBox="0 0 20 20" fill="currentColor">
                <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
              </svg>
            )}
          </button>
        </div>
      </form>
    </motion.div>
  );
}