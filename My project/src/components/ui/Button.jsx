import React from 'react';

const Button = ({ 
  children, 
  variant = 'primary', 
  onClick, 
  className = '',
  ...props 
}) => {
  const baseStyles = "px-4 py-2 rounded font-medium transition-colors duration-200";
  
  const variants = {
    primary: "bg-blue-500 text-white hover:bg-blue-600",
    secondary: "bg-gray-500 text-white hover:bg-gray-600", 
    danger: "bg-red-500 text-white hover:bg-red-600"
  };

  return (
    
    <button 
      className={`${baseStyles} ${variants[variant]} ${className}`}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
    
  );
};

export default Button;