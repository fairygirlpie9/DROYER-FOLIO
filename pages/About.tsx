import React from 'react';
import NeoCard from '../components/NeoCard';
import NeoButton from '../components/NeoButton';
import { Link } from 'react-router-dom';

const About: React.FC = () => {
  return (
    <div className="max-w-5xl mx-auto space-y-12 animate-in fade-in duration-500">
      
      <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
        <div className="md:col-span-4 relative">
          <div className="aspect-square bg-neo-blue-light border-2 border-neo-text shadow-neo relative z-10 overflow-hidden rounded-lg">
             <img src="https://picsum.photos/600/600?grayscale" alt="Danielle Royer" className="w-full h-full object-cover mix-blend-overlay opacity-90" />
          </div>
          <div className="absolute top-4 left-4 w-full h-full border-2 border-neo-text bg-neo-pink-light -z-0 rounded-lg"></div>
        </div>
        
        <div className="md:col-span-8 space-y-6">
          <h1 className="text-5xl md:text-6xl font-bold text-neo-text">
            Danielle Royer
          </h1>
          <h2 className="text-xl font-bold bg-neo-pink-light border border-neo-text inline-block px-3 py-1 rounded-md shadow-neo-sm">
            Creative Technologist
          </h2>
          <div className="text-lg font-medium space-y-4 text-gray-700">
            <p>
              I am a <strong>Creative Technologist</strong> working in the intersection of design, music and AI.
            </p>
            <p>
              My background spans <strong>3D Design, VR/AR, and Studio Management</strong>, and I currently leverage these diverse skills to build innovative AI-driven applications and experiences.
            </p>
          </div>
        </div>
      </div>

      <div className="space-y-8">
        <h3 className="text-3xl font-bold border-b-2 border-neo-text pb-2 text-neo-text">Work Experience</h3>
        
        <div className="grid grid-cols-1 gap-6">
          <NeoCard color="white" className="space-y-4">
            <div>
              <div className="flex justify-between items-start flex-wrap gap-2">
                <strong className="text-xl block">Creative Technologist</strong>
                <span className="bg-neo-text text-white px-2 py-0.5 rounded text-sm font-bold">Current</span>
              </div>
              <span className="text-neo-blue-vibrant font-bold">Freelance / Independent</span>
            </div>
            <ul className="list-disc pl-5 text-gray-700 space-y-1">
              <li>Building AI-driven apps and dashboards for B2B and B2C markets.</li>
              <li>Exploring the intersection of generative AI, music composition, and visual design.</li>
            </ul>
          </NeoCard>

          <NeoCard color="white" className="space-y-4">
            <div>
              <div className="flex justify-between items-start flex-wrap gap-2">
                <strong className="text-xl block">Studio Manager (Sculpture, Photo, Computational Arts)</strong>
                <span className="bg-neo-text text-white px-2 py-0.5 rounded text-sm font-bold">July 2021 - April 2025</span>
              </div>
              <span className="text-neo-blue-vibrant font-bold">University of the Arts London (UAL)</span>
            </div>
            <ul className="list-disc pl-5 text-gray-700 space-y-1">
              <li>Managed budgets for 6 courses across 3 departments.</li>
              <li>Collaborated with cross-functional teams to improve teaching/learning standards.</li>
              <li>Taught creative software tools including Adobe InDesign, Blender, and Adobe Aero.</li>
            </ul>
          </NeoCard>

          <NeoCard color="white" className="space-y-4">
            <div>
              <div className="flex justify-between items-start flex-wrap gap-2">
                <strong className="text-xl block">Decolonising the Arts Education Fellow</strong>
                <span className="bg-gray-200 text-black border border-neo-text px-2 py-0.5 rounded text-sm font-bold">Sep 2023 - Sep 2024</span>
              </div>
              <span className="text-neo-blue-vibrant font-bold">University of the Arts London (UAL)</span>
            </div>
            <ul className="list-disc pl-5 text-gray-700 space-y-1">
              <li>Led curricular and pedagogic innovation within Design, Teaching and Learning.</li>
              <li>Used qualitative and quantitative research methodologies to drive social inclusion.</li>
            </ul>
          </NeoCard>

          <NeoCard color="white" className="space-y-4">
            <div>
              <div className="flex justify-between items-start flex-wrap gap-2">
                <strong className="text-xl block">Metaverse Creation Lab</strong>
                <span className="bg-gray-200 text-black border border-neo-text px-2 py-0.5 rounded text-sm font-bold">Mar 2022 - May 2022</span>
              </div>
              <span className="text-neo-blue-vibrant font-bold">WIIT Funded by Meta</span>
            </div>
            <ul className="list-disc pl-5 text-gray-700 space-y-1">
              <li>Designed custom avatars for virtual reality using Unity, Blender, and Substance Painter.</li>
            </ul>
          </NeoCard>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <NeoCard color="blue-light" className="space-y-4">
          <h3 className="text-2xl font-bold border-b-2 border-neo-text pb-2">Skills</h3>
          <div className="space-y-3">
             <div>
              <strong className="block text-sm uppercase tracking-wider text-gray-600">AI & GenAI</strong>
              <p className="font-medium">Gemini, Nano Banana, Claude, Antigravity, Kiro, Adobe Firefly, Suno</p>
            </div>
            <div>
              <strong className="block text-sm uppercase tracking-wider text-gray-600">3D Design</strong>
              <p className="font-medium">Unity, Unreal, Blender, Cinema 4D, Substance Designer/Painter</p>
            </div>
            <div>
              <strong className="block text-sm uppercase tracking-wider text-gray-600">Video</strong>
              <p className="font-medium">Premiere Pro, Final Cut Pro, CapCut</p>
            </div>
            <div>
              <strong className="block text-sm uppercase tracking-wider text-gray-600">2D & UX/UI</strong>
              <p className="font-medium">Photoshop, Illustrator, InDesign, Figma, Sketch, Procreate</p>
            </div>
          </div>
        </NeoCard>

        <NeoCard color="pink-light" className="space-y-4">
          <h3 className="text-2xl font-bold border-b-2 border-neo-text pb-2">Education</h3>
          <ul className="space-y-4">
            <li>
              <strong className="block text-lg">Short Course in World Building in Unreal</strong>
              <span className="text-gray-600">Wimbledon College of Art (Dec 2024)</span>
            </li>
            <li>
              <strong className="block text-lg">Short Course in UX Design</strong>
              <span className="text-gray-600">Chelsea College of Art (Oct 2018)</span>
            </li>
            <li>
              <strong className="block text-lg">BA (Hons) Illustration & Animation</strong>
              <span className="text-gray-600">Kingston University (2010 - 2013)</span>
            </li>
            <li>
              <strong className="block text-lg">Art & Design Foundation Diploma</strong>
              <span className="text-gray-600">Chelsea College of Art (2009 - 2010)</span>
            </li>
          </ul>
        </NeoCard>
      </div>

      <div className="text-center pt-8">
         <Link to="/contact">
            <NeoButton size="lg" variant="primary" className="text-xl">
              Get in Touch
            </NeoButton>
         </Link>
      </div>
    </div>
  );
};

export default About;