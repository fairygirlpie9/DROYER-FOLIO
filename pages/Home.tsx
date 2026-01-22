import React from 'react';
import { Link } from 'react-router-dom';
import NeoCard from '../components/NeoCard';
import NeoButton from '../components/NeoButton';
import { ArrowRight, Layout, Mail, User } from 'lucide-react';

const Home: React.FC = () => {
  return (
    <div className="space-y-12 animate-in fade-in duration-500">
      
      {/* Hero Section */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 pb-12">
        
        {/* Left Text Block */}
        <div className="lg:col-span-7 flex flex-col justify-center space-y-6">
          <h1 className="text-5xl md:text-7xl font-bold leading-tight tracking-tight text-neo-text">
            Danielle <br/>
            <span className="text-neo-pink-vibrant">Royer</span>
          </h1>
          <div className="text-lg md:text-xl text-gray-700 leading-relaxed font-medium space-y-4">
            <p className="font-bold text-neo-text">
               Winner of the 2025 Toyota Racing Development Award for Best in Real Time Analytics.
            </p>
            <p>
              Creative Technologist.<br/>
              Working at the intersection of design, music, and AI.
            </p>
          </div>
          <div className="flex flex-wrap gap-4 pt-4">
            <Link to="/projects">
              <NeoButton size="lg" variant="primary">View Projects</NeoButton>
            </Link>
            <Link to="/contact">
              <NeoButton size="lg" variant="soft">Get in Touch</NeoButton>
            </Link>
          </div>
        </div>

        {/* Right Art Block - Softer Composition */}
        <div className="lg:col-span-5 min-h-[350px] lg:min-h-[500px] border-2 border-neo-text bg-white relative shadow-neo rounded-xl overflow-hidden">
           <div className="absolute top-0 right-0 w-3/4 h-3/4 bg-neo-blue-light rounded-bl-[100px] border-l-2 border-b-2 border-neo-text"></div>
           <div className="absolute bottom-0 left-0 w-2/3 h-1/2 bg-neo-pink-light rounded-tr-[80px] border-t-2 border-r-2 border-neo-text"></div>
           <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-neo-pink-vibrant border-2 border-neo-text rounded-full z-10"></div>
        </div>
      </section>

      {/* Navigation Cards */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Link to="/projects" className="group">
          <NeoCard className="h-full flex flex-col items-center justify-center text-center gap-4 group-hover:-translate-y-2 transition-transform duration-200" color="white">
            <div className="bg-neo-blue-vibrant text-white border-2 border-neo-text p-4 rounded-full">
              <Layout size={32} />
            </div>
            <h2 className="text-2xl font-bold">Projects</h2>
            <p className="font-medium text-gray-600">AI Apps, VR, & Design.</p>
            <ArrowRight className="opacity-0 group-hover:opacity-100 transition-opacity" />
          </NeoCard>
        </Link>
        
        <Link to="/about" className="group">
          <NeoCard className="h-full flex flex-col items-center justify-center text-center gap-4 group-hover:-translate-y-2 transition-transform duration-200" color="blue-light">
            <div className="bg-neo-pink-vibrant text-white border-2 border-neo-text p-4 rounded-full">
              <User size={32} />
            </div>
            <h2 className="text-2xl font-bold">About</h2>
            <p className="font-medium text-gray-700">Skills & Experience.</p>
            <ArrowRight className="opacity-0 group-hover:opacity-100 transition-opacity" />
          </NeoCard>
        </Link>

        <Link to="/contact" className="group">
          <NeoCard className="h-full flex flex-col items-center justify-center text-center gap-4 group-hover:-translate-y-2 transition-transform duration-200" color="pink-light">
            <div className="bg-white text-neo-text p-4 rounded-full border-2 border-neo-text">
              <Mail size={32} />
            </div>
            <h2 className="text-2xl font-bold">Contact</h2>
            <p className="font-medium text-gray-800">Let's collaborate.</p>
            <ArrowRight className="text-neo-text opacity-0 group-hover:opacity-100 transition-opacity" />
          </NeoCard>
        </Link>
      </section>
    </div>
  );
};

export default Home;