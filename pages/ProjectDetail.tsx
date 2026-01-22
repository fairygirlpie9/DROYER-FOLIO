import React, { useState } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { PROJECTS } from '../constants';
import NeoButton from '../components/NeoButton';
import { ArrowLeft, ExternalLink, Github, X, ZoomIn, Trophy } from 'lucide-react';

const ProjectDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const project = PROJECTS.find(p => p.id === id);

  if (!project) {
    return <Navigate to="/projects" replace />;
  }

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <Link to="/projects" className="inline-flex items-center gap-2 font-bold hover:text-neo-pink-vibrant transition-colors">
        <ArrowLeft size={20} /> Back to Projects
      </Link>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="space-y-6">
          {project.videoUrl ? (
             <div className="border-2 border-neo-text shadow-neo rounded-lg overflow-hidden aspect-video bg-black">
                <iframe 
                  src={project.videoUrl} 
                  className="w-full h-full" 
                  frameBorder="0" 
                  allow="autoplay; fullscreen; picture-in-picture" 
                  allowFullScreen
                  title={project.title}
                ></iframe>
             </div>
          ) : (
            <div 
              className="border-2 border-neo-text shadow-neo rounded-lg overflow-hidden cursor-zoom-in relative group"
              onClick={() => setSelectedImage(project.imageUrl)}
            >
               <img src={project.imageUrl} alt={project.title} className="w-full h-auto object-cover" />
               <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
                  <ZoomIn className="text-white drop-shadow-md" size={32} />
               </div>
            </div>
          )}
          
          {/* Show image as a secondary visual if video exists */}
          {project.videoUrl && (
            <div 
              className="border-2 border-neo-text shadow-neo rounded-lg overflow-hidden opacity-80 hover:opacity-100 transition-opacity cursor-zoom-in relative group"
              onClick={() => setSelectedImage(project.imageUrl)}
            >
               <img src={project.imageUrl} alt={project.title} className="w-full h-auto object-cover grayscale hover:grayscale-0 transition-all duration-500" />
               <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
                  <ZoomIn className="text-white drop-shadow-md" size={32} />
               </div>
            </div>
          )}
        </div>

        <div className="flex flex-col space-y-8">
          <div>
            <span className="bg-neo-blue-light px-3 py-1 text-sm font-bold border border-neo-text rounded-full inline-block mb-3 shadow-neo-sm">
              {project.category}
            </span>
            <h1 className="text-4xl md:text-6xl font-bold leading-none mb-6">
              {project.title}
            </h1>

            {project.award && (
              <div className="bg-neo-pink-light border-2 border-neo-text p-4 rounded-md shadow-[4px_4px_0px_0px_rgba(26,26,46,1)] mb-6 transform -rotate-1 hover:rotate-0 transition-transform">
                <p className="font-bold text-lg leading-tight flex items-start gap-3">
                  <Trophy className="shrink-0 text-neo-text" size={24} strokeWidth={2.5} />
                  <span>{project.award}</span>
                </p>
              </div>
            )}

            <div className="text-lg font-medium text-gray-700 leading-relaxed border-l-4 border-neo-pink-light pl-6 py-1 space-y-4">
              {project.description.split('\n\n').map((paragraph, idx) => (
                <p key={idx}>{paragraph}</p>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-bold border-b-2 border-neo-text inline-block pb-1">Tech Stack</h3>
            <div className="flex flex-wrap gap-3">
              {project.technologies.map(tech => (
                <div key={tech} className="bg-white border-2 border-neo-text px-4 py-2 font-semibold rounded-md shadow-[2px_2px_0px_0px_rgba(26,26,46,1)]">
                  {tech}
                </div>
              ))}
            </div>
          </div>

          <div className="pt-8 mt-auto flex flex-col sm:flex-row gap-4">
            {project.link && (
              <a href={project.link} target="_blank" rel="noopener noreferrer" className="flex-1">
                <NeoButton size="lg" className="w-full flex items-center justify-center gap-2" variant="primary">
                  Live Demo <ExternalLink size={20} />
                </NeoButton>
              </a>
            )}
            
            {project.sourceUrl && (
              <a href={project.sourceUrl} target="_blank" rel="noopener noreferrer" className="flex-1">
                <NeoButton size="lg" variant="dark" className="w-full flex items-center justify-center gap-2">
                  Source Code <Github size={20} />
                </NeoButton>
              </a>
            )}
          </div>
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 animate-in fade-in duration-200"
          onClick={() => setSelectedImage(null)}
        >
          <button 
            className="absolute top-6 right-6 text-white hover:text-neo-pink-vibrant transition-colors z-50 bg-black/50 rounded-full p-2"
            onClick={() => setSelectedImage(null)}
          >
            <X size={32} />
          </button>
          <img 
            src={selectedImage} 
            alt="Full screen view" 
            className="max-w-full max-h-[90vh] object-contain rounded-md border-2 border-white shadow-neo animate-in zoom-in-95 duration-300"
            onClick={(e) => e.stopPropagation()} 
          />
        </div>
      )}
    </div>
  );
};

export default ProjectDetail;