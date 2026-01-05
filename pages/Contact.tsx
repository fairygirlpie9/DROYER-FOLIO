import React, { useState } from 'react';
import NeoCard from '../components/NeoCard';
import NeoButton from '../components/NeoButton';
import { EMAIL } from '../constants';
import { Mail, Copy, Check } from 'lucide-react';

const Contact: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(EMAIL);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="max-w-4xl mx-auto space-y-12 animate-in fade-in duration-500">
      
      <div className="text-center space-y-4">
        <h1 className="text-5xl md:text-7xl font-bold text-neo-text">Get In Touch</h1>
        <p className="text-xl font-medium text-gray-600">Available for freelance & collaborations.</p>
      </div>

      <div className="relative">
        <div className="absolute inset-0 bg-neo-text rounded-xl translate-x-2 translate-y-2"></div>
        <div className="relative bg-neo-blue-light border-2 border-neo-text p-8 md:p-12 text-center space-y-8 rounded-xl">
           <Mail size={56} className="mx-auto text-neo-text" strokeWidth={2} />
           
           <div className="space-y-2">
             <p className="text-lg font-bold uppercase tracking-wide opacity-80">Send an email to:</p>
             <div className="flex flex-col md:flex-row items-center justify-center gap-4">
                <a href={`mailto:${EMAIL}`} className="text-2xl md:text-4xl font-bold hover:text-white transition-colors break-all">
                  {EMAIL}
                </a>
                <button 
                  onClick={handleCopy}
                  className="bg-white border-2 border-neo-text p-2 rounded-md hover:bg-neo-text hover:text-white transition-colors"
                  title="Copy to clipboard"
                >
                  {copied ? <Check size={20} /> : <Copy size={20} />}
                </button>
             </div>
           </div>
        </div>
      </div>

      {/* Visual Form Decorator - Enabled */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-2">
          <label className="font-bold uppercase text-xs tracking-wider">Name</label>
          <input type="text" className="w-full h-12 border-2 border-neo-text bg-white rounded-md px-4 font-bold focus:outline-none focus:shadow-neo-sm transition-all" />
        </div>
        <div className="space-y-2">
          <label className="font-bold uppercase text-xs tracking-wider">Subject</label>
           <input type="text" className="w-full h-12 border-2 border-neo-text bg-white rounded-md px-4 font-bold focus:outline-none focus:shadow-neo-sm transition-all" />
        </div>
        <div className="col-span-1 md:col-span-2 space-y-2">
          <label className="font-bold uppercase text-xs tracking-wider">Message</label>
           <textarea className="w-full h-32 border-2 border-neo-text bg-white rounded-md p-4 font-bold focus:outline-none focus:shadow-neo-sm transition-all resize-none"></textarea>
        </div>
        <div className="col-span-1 md:col-span-2 text-center">
             <NeoButton variant="primary" size="lg" onClick={() => window.location.href = `mailto:${EMAIL}`}>
                Send Message
             </NeoButton>
        </div>
      </div>

    </div>
  );
};

export default Contact;