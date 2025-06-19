import React from 'react';

const Card = ({ children, title, className = '' }) => {
  return (
    <div className={`bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 ${className}`}>
      {title && <h3 className="text-lg font-semibold mb-4 dark:text-white">{title}</h3>}
      {children}
    </div>
  );
};

export default Card;