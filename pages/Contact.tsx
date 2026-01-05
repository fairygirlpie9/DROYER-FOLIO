import React, { useState } from 'react';
import NeoButton from '../components/NeoButton';
import { EMAIL } from '../constants';
import { Mail, Copy, Check, Send } from 'lucide-react';

const Contact: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleCopy = () => {
    navigator.clipboard.writeText(EMAIL);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const encode = (data: any) => {
    return Object.keys(data)
      .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
      .join("&");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('submitting');

    try {
      await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encode({ "form-name": "contact", ...formData })
      });
      setFormStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      console.error(error);
      setFormStatus('error');
    }
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

      {/* Netlify Form */}
      {formStatus === 'success' ? (
        <div className="bg-neo-pink-light border-2 border-neo-text p-12 rounded-xl text-center space-y-4 shadow-neo animate-in zoom-in-95">
          <div className="bg-white inline-block p-4 rounded-full border-2 border-neo-text shadow-neo-sm">
            <Check size={48} className="text-neo-text" />
          </div>
          <h2 className="text-3xl font-bold text-neo-text">Message Sent!</h2>
          <p className="font-medium text-lg">Thank you for reaching out. I'll get back to you shortly.</p>
          <button 
            onClick={() => setFormStatus('idle')}
            className="text-sm font-bold underline hover:text-white transition-colors mt-4"
          >
            Send another message
          </button>
        </div>
      ) : (
        <form 
          onSubmit={handleSubmit} 
          name="contact"
          data-netlify="true"
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          <input type="hidden" name="form-name" value="contact" />
          
          <div className="space-y-2">
            <label htmlFor="name" className="font-bold uppercase text-xs tracking-wider">Name</label>
            <input 
              required
              id="name"
              name="name"
              type="text" 
              value={formData.name}
              onChange={handleChange}
              className="w-full h-12 border-2 border-neo-text bg-white rounded-md px-4 font-bold focus:outline-none focus:shadow-neo-sm transition-all placeholder:font-normal placeholder:text-gray-400" 
              placeholder="Your Name"
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="email" className="font-bold uppercase text-xs tracking-wider">Email</label>
            <input 
              required
              id="email"
              name="email"
              type="email" 
              value={formData.email}
              onChange={handleChange}
              className="w-full h-12 border-2 border-neo-text bg-white rounded-md px-4 font-bold focus:outline-none focus:shadow-neo-sm transition-all placeholder:font-normal placeholder:text-gray-400" 
              placeholder="you@example.com"
            />
          </div>

          <div className="col-span-1 md:col-span-2 space-y-2">
            <label htmlFor="subject" className="font-bold uppercase text-xs tracking-wider">Subject</label>
            <input 
              required
              id="subject"
              name="subject"
              type="text" 
              value={formData.subject}
              onChange={handleChange}
              className="w-full h-12 border-2 border-neo-text bg-white rounded-md px-4 font-bold focus:outline-none focus:shadow-neo-sm transition-all placeholder:font-normal placeholder:text-gray-400" 
              placeholder="What's this about?"
            />
          </div>

          <div className="col-span-1 md:col-span-2 space-y-2">
            <label htmlFor="message" className="font-bold uppercase text-xs tracking-wider">Message</label>
            <textarea 
              required
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="w-full h-32 border-2 border-neo-text bg-white rounded-md p-4 font-bold focus:outline-none focus:shadow-neo-sm transition-all resize-none placeholder:font-normal placeholder:text-gray-400"
              placeholder="Tell me about your project..."
            ></textarea>
          </div>

          <div className="col-span-1 md:col-span-2 text-center">
            <NeoButton 
              type="submit" 
              variant="primary" 
              size="lg" 
              className="w-full md:w-auto min-w-[200px] flex justify-center items-center gap-2"
              disabled={formStatus === 'submitting'}
            >
              {formStatus === 'submitting' ? 'Sending...' : (
                <>Send Message <Send size={18} /></>
              )}
            </NeoButton>
            {formStatus === 'error' && (
              <p className="text-red-600 font-bold mt-4">Something went wrong. Please try email instead.</p>
            )}
          </div>
        </form>
      )}

    </div>
  );
};

export default Contact;