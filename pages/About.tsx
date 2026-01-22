import React from 'react';
import NeoButton from '../components/NeoButton';
import { Link } from 'react-router-dom';

const About: React.FC = () => {
  return (
    <div className="max-w-5xl mx-auto space-y-12 animate-in fade-in duration-500">
      
      {/* Header Profile Section */}
      <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-start">
        {/* Profile Image - Illustrated Style */}
        <div className="w-full md:w-1/3 shrink-0 relative pt-4 pl-4">
             {/* Pink background offset */}
             <div className="absolute inset-0 bg-neo-pink-light border-2 border-neo-text rounded-lg translate-x-2 translate-y-2"></div>
             {/* Main Image Container */}
             <div className="relative z-10 bg-white border-2 border-neo-text rounded-lg overflow-hidden aspect-square shadow-neo-sm flex items-center justify-center">
                 {/* Custom Inline SVG Illustration - Guaranteed to load */}
                 <svg viewBox="0 0 500 500" className="w-full h-full bg-[#fae1d0]" xmlns="http://www.w3.org/2000/svg" aria-label="Danielle Royer Portrait">
                    {/* Hair Back */}
                    <path d="M120 150 V450 H380 V150 C380 50 120 50 120 150 Z" fill="#1A1A2E" />
                    
                    {/* Face */}
                    <path d="M160 180 V340 Q250 420 340 340 V180 H160 Z" fill="#c6866b" stroke="#1A1A2E" strokeWidth="8" strokeLinejoin="round" />
                    
                    {/* Bangs / Hair Front */}
                    <path d="M120 150 Q250 250 380 150 L380 100 Q250 40 120 100 Z" fill="#1A1A2E" />

                    {/* Glasses */}
                    <g stroke="#1A1A2E" strokeWidth="8" fill="rgba(255,255,255,0.2)">
                        <circle cx="210" cy="270" r="35" />
                        <circle cx="290" cy="270" r="35" />
                        <line x1="245" y1="270" x2="255" y2="270" />
                    </g>
                    
                    {/* Eyes */}
                    <circle cx="210" cy="270" r="6" fill="#1A1A2E" />
                    <circle cx="290" cy="270" r="6" fill="#1A1A2E" />

                    {/* Smile */}
                    <path d="M220 350 Q250 370 280 350" fill="none" stroke="#1A1A2E" strokeWidth="8" strokeLinecap="round" />
                 </svg>
             </div>
        </div>
        
        {/* Profile Text */}
        <div className="w-full md:w-2/3 space-y-6 pt-2">
          <h1 className="text-5xl md:text-7xl font-bold text-neo-text tracking-tight">
            Danielle Royer
          </h1>
          <div>
             <span className="bg-neo-pink-light border-2 border-neo-text text-neo-text font-bold px-4 py-2 rounded-md shadow-[3px_3px_0px_0px_rgba(26,26,46,1)] inline-block text-lg">
               Creative Technologist
             </span>
          </div>
          <div className="text-xl font-medium text-gray-800 space-y-4 leading-relaxed max-w-2xl">
            <p>
              I am a <strong className="font-bold">Creative Technologist</strong> working in the intersection of design, music and AI.
            </p>
            <p>
              My background spans <strong className="font-bold">3D Design, VR/AR, and Studio Management</strong>. I also conduct research into <strong className="font-bold">public engagement and audience interaction</strong>, leveraging these diverse skills to build innovative AI driven applications and experiences.
            </p>
          </div>
        </div>
      </div>

      {/* Work Experience Section */}
      <div className="space-y-8 pt-8">
        <h3 className="text-4xl font-bold border-b-2 border-neo-text pb-4 text-neo-text">Work Experience</h3>
        
        <div className="grid grid-cols-1 gap-8">
          {/* Card 1 */}
          <div className="bg-white border-2 border-neo-text rounded-lg p-8 shadow-[5px_5px_0px_0px_rgba(26,26,46,1)] hover:-translate-y-1 transition-transform">
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-4">
                <div className="space-y-1">
                  <h4 className="text-2xl font-bold text-neo-text">Creative Technologist</h4>
                  <div className="text-neo-blue-vibrant font-bold text-lg">Freelance / Independent</div>
                </div>
                <span className="bg-neo-text text-white text-sm font-bold px-4 py-2 rounded self-start shrink-0">Current</span>
              </div>
              <ul className="list-disc pl-5 text-gray-700 font-medium space-y-2 text-lg">
                <li>Building AI driven apps and dashboards for B2B and B2C markets.</li>
                <li>Exploring the intersection of generative AI, music composition, and visual design.</li>
              </ul>
          </div>

          {/* Card 2 */}
          <div className="bg-white border-2 border-neo-text rounded-lg p-8 shadow-[5px_5px_0px_0px_rgba(26,26,46,1)] hover:-translate-y-1 transition-transform">
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-4">
                 <div className="space-y-1">
                  <h4 className="text-2xl font-bold text-neo-text">Studio Manager (Sculpture, Photo, Computational Arts)</h4>
                  <div className="text-neo-blue-vibrant font-bold text-lg">University of the Arts London (UAL)</div>
                </div>
                <span className="bg-neo-text text-white text-sm font-bold px-4 py-2 rounded self-start shrink-0">July 2021 to April 2025</span>
              </div>
              <ul className="list-disc pl-5 text-gray-700 font-medium space-y-2 text-lg">
                <li>Managed budgets for 6 courses across 3 departments.</li>
                <li>Collaborated with cross functional teams to improve teaching/learning standards.</li>
                <li>Taught creative software tools including Adobe InDesign, Blender, and Adobe Aero.</li>
              </ul>
          </div>

          {/* Card 3 */}
          <div className="bg-white border-2 border-neo-text rounded-lg p-8 shadow-[5px_5px_0px_0px_rgba(26,26,46,1)] hover:-translate-y-1 transition-transform">
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-4">
                 <div className="space-y-1">
                  <h4 className="text-2xl font-bold text-neo-text">Decolonising the Arts Education Fellow</h4>
                  <div className="text-neo-blue-vibrant font-bold text-lg">University of the Arts London (UAL)</div>
                </div>
                <span className="bg-gray-200 text-neo-text border border-neo-text text-sm font-bold px-4 py-2 rounded self-start shrink-0">Sep 2023 to Sep 2024</span>
              </div>
              <ul className="list-disc pl-5 text-gray-700 font-medium space-y-2 text-lg">
                <li>Led curricular and pedagogic innovation within Design, Teaching and Learning.</li>
                <li>Used qualitative and quantitative research methodologies to drive social inclusion.</li>
              </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;