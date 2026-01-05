import React from 'react';
import { Link } from 'react-router-dom';
import NeoCard from '../components/NeoCard';
import NeoButton from '../components/NeoButton';
import { PROJECTS } from '../constants';
import { ArrowUpRight } from 'lucide-react';

const Projects: React.FC = () => {
  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      <div className="border-b-2 border-neo-text pb-6">
        <h1 className="text-5xl font-bold mb-4 text-neo-text">Selected Works</h1>
        <p className="text-lg font-medium text-gray-600 max-w-2xl">
          A collection of digital experiments, client work, and architectural concepts. 
          Less noise, more signal.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {PROJECTS.map((project, index) => (
          <NeoCard key={project.id} className="flex flex-col h-full group transition-all hover:-translate-y-1 hover:shadow-neo-lg bg-white" noShadow>
            <div className="relative border-2 border-neo-text mb-6 overflow-hidden aspect-video bg-gray-100 rounded-md">
              <img 
                src={project.imageUrl} 
                alt={project.title} 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute top-2 right-2 bg-neo-pink-light border-2 border-neo-text p-1 px-3 font-bold text-xs uppercase tracking-wide rounded-full shadow-neo-sm">
                {project.category}
              </div>
            </div>

            <div className="flex-1 flex flex-col">
              <h3 className="text-2xl font-bold mb-2 group-hover:text-neo-blue-vibrant transition-colors">
                {project.title}
              </h3>
              <p className="text-base text-gray-600 font-medium mb-6 flex-1">
                {project.shortDescription || project.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-6">
                {project.technologies.map(tech => (
                  <span key={tech} className="bg-neo-blue-light text-neo-text border border-neo-text text-xs font-semibold px-2 py-1 rounded-md">
                    {tech}
                  </span>
                ))}
              </div>

              <Link to={`/projects/${project.id}`}>
                <NeoButton className="w-full flex items-center justify-center gap-2 group-hover:bg-neo-text group-hover:text-white transition-colors" variant="secondary">
                  View Details <ArrowUpRight size={18} />
                </NeoButton>
              </Link>
            </div>
          </NeoCard>
        ))}
      </div>
    </div>
  );
};

export default Projects;