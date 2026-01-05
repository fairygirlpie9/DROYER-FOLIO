import React from 'react';

interface NeoButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'accent' | 'dark' | 'soft';
  size?: 'sm' | 'md' | 'lg';
}

const NeoButton: React.FC<NeoButtonProps> = ({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  className = '', 
  ...props 
}) => {
  
  const baseStyles = "font-bold border-2 border-neo-text transition-all active:translate-x-[2px] active:translate-y-[2px] active:shadow-none tracking-wide rounded-md";
  
  const variants = {
    primary: "bg-neo-pink-vibrant text-white shadow-neo hover:bg-pink-600",
    secondary: "bg-neo-blue-vibrant text-white shadow-neo hover:bg-blue-600",
    accent: "bg-neo-pink-light text-neo-text shadow-neo hover:bg-pink-200",
    soft: "bg-neo-blue-light text-neo-text shadow-neo hover:bg-blue-200",
    dark: "bg-neo-text text-white shadow-neo hover:bg-gray-800",
  };

  const sizes = {
    sm: "px-4 py-2 text-sm shadow-neo-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-xl shadow-neo-lg",
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default NeoButton;