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
             <div className="relative z-10 bg-white border-2 border-neo-text rounded-lg overflow-hidden aspect-square shadow-neo-sm">
                 <img 
                    src="https://api.dicebear.com/9.x/micah/svg?seed=Danielle&hair=fanny&mouth=smile&baseColor=f9c9b6&earrings=hoop&glasses=round" 
                    alt="Danielle Royer Illustration" 
                    className="w-full h-full object-cover" 
                 />
             </div>
        </div>
        
        {/* Profile Text */}
        <div className="w-full md:w-2/3 space-y-6 pt-2">
          <h1 className="text-5xl md:text-6xl font-bold text-neo-text tracking-tight">
            Danielle Royer
          </h1>
          <div>
             <span className="bg-neo-pink-light border-2 border-neo-text text-neo-text font-bold px-3 py-1.5 rounded-md shadow-[3px_3px_0px_0px_rgba(26,26,46,1)] inline-block">
               Creative Technologist
             </span>
          </div>
          <div className="text-lg font-medium text-gray-800 space-y-4 leading-relaxed">
            <p>
              I am a <strong>Creative Technologist</strong> working in the intersection of design, music and AI.
            </p>
            <p>
              My background spans <strong>3D Design, VR/AR, and Studio Management</strong>, and I currently leverage these diverse skills to build innovative AI-driven applications and experiences.
            </p>
          </div>
        </div>
      </div>

      {/* Work Experience Section */}
      <div className="space-y-8 pt-8">
        <h3 className="text-3xl font-bold border-b-2 border-neo-text pb-4 text-neo-text">Work Experience</h3>
        
        <div className="grid grid-cols-1 gap-6">
          {/* Card 1 */}
          <div className="bg-white border-2 border-neo-text rounded-lg p-6 shadow-[5px_5px_0px_0px_rgba(26,26,46,1)] hover:-translate-y-1 transition-transform">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
                <h4 className="text-xl font-bold text-neo-text">Creative Technologist</h4>
                <span className="bg-neo-text text-white text-xs font-bold px-3 py-1.5 rounded self-start sm:self-auto">Current</span>
              </div>
              <div className="text-neo-blue-vibrant font-bold mb-4">Freelance / Independent</div>
              <ul className="list-disc pl-5 text-gray-700 font-medium space-y-1.5">
                <li>Building AI-driven apps and dashboards for B2B and B2C markets.</li>
                <li>Exploring the intersection of generative AI, music composition, and visual design.</li>
              </ul>
          </div>

          {/* Card 2 */}
          <div className="bg-white border-2 border-neo-text rounded-lg p-6 shadow-[5px_5px_0px_0px_rgba(26,26,46,1)] hover:-translate-y-1 transition-transform">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
                <h4 className="text-xl font-bold text-neo-text">Studio Manager (Sculpture, Photo, Computational Arts)</h4>
                <span className="bg-neo-text text-white text-xs font-bold px-3 py-1.5 rounded self-start sm:self-auto">July 2021 - April 2025</span>
              </div>
              <div className="text-neo-blue-vibrant font-bold mb-4">University of the Arts London (UAL)</div>
              <ul className="list-disc pl-5 text-gray-700 font-medium space-y-1.5">
                <li>Managed budgets for 6 courses across 3 departments.</li>
                <li>Collaborated with cross-functional teams to improve teaching/learning standards.</li>
                <li>Taught creative software tools including Adobe InDesign, Blender, and Adobe Aero.</li>
              </ul>
          </div>

          {/* Card 3 */}
          <div className="bg-white border-2 border-neo-text rounded-lg p-6 shadow-[5px_5px_0px_0px_rgba(26,26,46,1)] hover:-translate-y-1 transition-transform">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
                <h4 className="text-xl font-bold text-neo-text">Decolonising the Arts Education Fellow</h4>
                <span className="bg-gray-200 text-neo-text border border-neo-text text-xs font-bold px-3 py-1.5 rounded self-start sm:self-auto">Sep 2023 - Sep 2024</span>
              </div>
              <div className="text-neo-blue-vibrant font-bold mb-4">University of the Arts London (UAL)</div>
              <ul className="list-disc pl-5 text-gray-700 font-medium space-y-1.5">
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