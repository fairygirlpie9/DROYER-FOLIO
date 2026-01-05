import React from 'react';

interface NeoCardProps {
  children: React.ReactNode;
  className?: string;
  color?: 'white' | 'pink-light' | 'pink-vibrant' | 'blue-light' | 'blue-vibrant';
  noShadow?: boolean;
}

const NeoCard: React.FC<NeoCardProps> = ({ 
  children, 
  className = '', 
  color = 'white',
  noShadow = false
}) => {
  
  const colors = {
    white: "bg-white",
    'pink-light': "bg-neo-pink-light",
    'pink-vibrant': "bg-neo-pink-vibrant",
    'blue-light': "bg-neo-blue-light",
    'blue-vibrant': "bg-neo-blue-vibrant"
  };

  const shadowClass = noShadow ? '' : 'shadow-neo';

  return (
    <div className={`border-2 border-neo-text p-6 rounded-lg ${colors[color]} ${shadowClass} ${className}`}>
      {children}
    </div>
  );
};

export default NeoCard;