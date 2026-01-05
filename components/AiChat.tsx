import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send } from 'lucide-react';
import { sendMessageToGemini } from '../services/geminiService';
import { ChatMessage } from '../types';
import NeoCard from './NeoCard';

const AiChat: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'model', text: 'SYSTEM ONLINE. I am Danielle\'s portfolio assistant. Ask me anything.', timestamp: new Date() }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]);

  const handleSend = async (e?: React.FormEvent) => {
    e?.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMsg: ChatMessage = { role: 'user', text: input, timestamp: new Date() };
    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setIsLoading(true);

    try {
      const responseText = await sendMessageToGemini(userMsg.text);
      const botMsg: ChatMessage = { role: 'model', text: responseText, timestamp: new Date() };
      setMessages(prev => [...prev, botMsg]);
    } catch (error) {
      setMessages(prev => [...prev, { role: 'model', text: 'ERROR: Connection failed.', timestamp: new Date() }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 font-sans">
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="bg-mondrian-blue text-white p-4 border-4 border-black shadow-neo hover:bg-blue-700 transition-transform hover:-translate-y-1 active:translate-y-1 active:shadow-none flex items-center gap-2"
        >
          <MessageSquare size={24} strokeWidth={3} />
          <span className="font-bold uppercase hidden sm:inline">Ask AI</span>
        </button>
      )}

      {isOpen && (
        <div className="w-[90vw] sm:w-96 max-h-[600px] flex flex-col animate-in fade-in slide-in-from-bottom-4 duration-300">
           <div className="bg-black text-white p-3 border-4 border-black flex justify-between items-center select-none">
              <span className="font-bold uppercase tracking-wider">System Terminal</span>
              <button onClick={() => setIsOpen(false)} className="hover:text-mondrian-red">
                <X size={24} strokeWidth={3} />
              </button>
           </div>
           
           <div className="bg-white border-x-4 border-black h-80 overflow-y-auto p-4 flex flex-col gap-4">
              {messages.map((msg, idx) => (
                <div 
                  key={idx} 
                  className={`max-w-[85%] p-3 text-sm font-medium border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] ${
                    msg.role === 'user' 
                      ? 'self-end bg-mondrian-yellow' 
                      : 'self-start bg-mondrian-white'
                  }`}
                >
                  {msg.text}
                </div>
              ))}
              {isLoading && (
                <div className="self-start p-3 bg-mondrian-white border-2 border-black text-xs uppercase animate-pulse">
                  Processing...
                </div>
              )}
              <div ref={messagesEndRef} />
           </div>

           <form onSubmit={handleSend} className="bg-white border-4 border-t-0 border-black p-3 flex gap-2">
             <input 
                type="text" 
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="TYPE COMMAND..."
                className="flex-1 bg-gray-100 border-2 border-black p-2 font-bold focus:outline-none focus:bg-white focus:border-mondrian-blue"
             />
             <button 
                type="submit" 
                disabled={isLoading}
                className="bg-mondrian-red text-white p-2 border-2 border-black hover:bg-red-700 disabled:opacity-50"
             >
               <Send size={20} />
             </button>
           </form>
        </div>
      )}
    </div>
  );
};

export default AiChat;