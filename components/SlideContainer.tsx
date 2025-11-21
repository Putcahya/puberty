
import React from 'react';

interface SlideContainerProps {
  children: React.ReactNode;
}

const SlideContainer: React.FC<SlideContainerProps> = ({ children }) => {
  return (
    <div className="bg-brand-bg/70 backdrop-blur-sm rounded-2xl shadow-lg p-6 md:p-8 w-full h-full animate-fade-in-up">
      {children}
    </div>
  );
};

export default SlideContainer;
