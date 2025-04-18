import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import ReactMarkdown from 'react-markdown';

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
      className="flex flex-col h-[calc(100vh-8rem)] sm:h-[calc(100vh-16rem)] w-full bg-white dark:bg-[#1f2937] rounded-xl shadow-xl overflow-hidden"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
    >
      <div className="flex items-center justify-between p-3 sm:p-4 border-b border-gray-200 dark:border-gray-700 bg-gradient-to-r from-blue-500 to-indigo-600">
        <h2 className="text-base sm:text-lg font-semibold text-white">Chat with GraDex</h2>
      </div>
      <div className="flex-1 overflow-y-auto p-3 sm:p-4 space-y-4 sm:space-y-6 h-full bg-white dark:bg-[#1f2937]" ref={chatContainerRef}>
        {messages.length === 0 ? (
          <div className="flex flex-col items-center justify-center h-full space-y-4">
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
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              layout
            >
              {!message.isUser && (
                <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-gradient-to-r from-blue-500 to-indigo-600 flex items-center justify-center text-white text-xs sm:text-sm font-medium">
                  AI
                </div>
              )}
              <div 
                className={`max-w-[85%] rounded-2xl p-3 sm:p-4 ${message.isUser 
                  ? 'bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-br-none' 
                  : 'bg-blue-500 text-white rounded-bl-none'}`}
              >
                <div className="prose dark:prose-invert max-w-none break-words custom-markdown">
                  <ReactMarkdown
                    components={{
                      h1: ({node, ...props}) => <h1 className="mt-4 mb-2" {...props} />, 
                      h2: ({node, ...props}) => <h2 className="mt-4 mb-2" {...props} />, 
                      h3: ({node, ...props}) => <h3 className="mt-4 mb-2" {...props} />, 
                      p: ({node, ...props}) => <p className="mb-3" {...props} />, 
                      ul: ({node, ...props}) => <ul className="list-disc pl-6 mb-3 space-y-2" {...props} />, 
                      ol: ({node, ...props}) => <ol className="list-decimal pl-6 mb-3 space-y-2" {...props} />, 
                      li: ({node, ...props}) => <li className="mb-1" {...props} />, 
                      table: ({node, ...props}) => <table className="min-w-full border-collapse my-4" {...props} />, 
                      thead: ({node, ...props}) => <thead className="bg-gray-100 dark:bg-gray-800" {...props} />, 
                      tbody: ({node, ...props}) => <tbody {...props} />, 
                      tr: ({node, ...props}) => <tr className="border-b border-gray-200 dark:border-gray-700" {...props} />, 
                      th: ({node, ...props}) => <th className="px-4 py-2 text-left font-semibold bg-gray-50 dark:bg-gray-700 text-gray-700 dark:text-gray-200" {...props} />, 
                      td: ({node, ...props}) => <td className="px-4 py-2 bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200" {...props} />, 
                      div: ({node, ...props}) => {
                        if (props.className && props.className.includes('references')) {
                          return (
                            <div className="text-xs italic mt-4">
                              <h3 className="italic text-xs mb-2">References:</h3>
                              <div className="italic text-xs" {...props} />
                            </div>
                          );
                        }
                        return <div {...props} />;
                      }
                    }}
                  >{message.content}</ReactMarkdown>
                </div>
              </div>
            </motion.div>
          ))
        )}
        {isLoading && (
          <div className="flex justify-start items-end space-x-2">
            <div className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-500 to-indigo-600 flex items-center justify-center text-white text-sm font-medium">
              AI
            </div>
            <div className="max-w-[80%] rounded-2xl p-4 bg-gray-200 dark:bg-gray-700 rounded-bl-none">
              <div className="flex space-x-2">
                <div className="w-2 h-2 rounded-full bg-blue-500 animate-bounce"></div>
                <div className="w-2 h-2 rounded-full bg-blue-500 animate-bounce delay-150"></div>
                <div className="w-2 h-2 rounded-full bg-blue-500 animate-bounce delay-300"></div>
              </div>
            </div>
          </div>
        )}
      </div>
      <form onSubmit={handleSubmit} className="p-3 sm:p-4 border-t border-gray-200 dark:border-gray-700 bg-white dark:bg-[#1f2937]">
        <div className="flex gap-2 items-center">
          <input
            type="text"
            value={inputMessage}
            onChange={(e) => setInputMessage(e.target.value)}
            placeholder="Type your message..."
            disabled={isLoading}
            className="flex-1 px-4 py-2 rounded-full border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white placeholder-gray-400 dark:placeholder-gray-500"
          />
          <button 
            type="submit" 
            disabled={isLoading}
            className="px-6 py-2 bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-full hover:opacity-90 disabled:opacity-50 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200 font-medium flex items-center justify-center min-w-[80px]"
          >
            {isLoading ? 'Sending...' : 'Send'}
          </button>
        </div>
      </form>
    </motion.div>
  );
}