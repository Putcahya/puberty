
import React from 'react';
import SlideContainer from '../SlideContainer';
import { slide1Content } from '../../constants/content';

const Slide1: React.FC = () => {
  return (
    <SlideContainer>
      <div className="flex flex-col lg:flex-row items-center gap-8 h-full">
        <div className="lg:w-1/2 w-full flex-shrink-0">
          <div className="aspect-w-16 aspect-h-9 bg-brand-dark rounded-xl shadow-2xl flex items-center justify-center">
            <div className="text-center text-white p-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 mx-auto mb-4" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
              </svg>
              <h3 className="text-xl font-bold">Animasi Dasar Pubertas</h3>
              <p className="text-sm opacity-80">(Video Placeholder)</p>
            </div>
          </div>
        </div>
        <div className="lg:w-1/2 w-full">
          <h2 className="text-2xl md:text-3xl font-bold text-brand-primary mb-4">{slide1Content.title}</h2>
          <p className="text-md md:text-lg text-brand-text leading-relaxed justify">
            {slide1Content.text}
          </p>
        </div>
      </div>
    </SlideContainer>
  );
};

export default Slide1;
