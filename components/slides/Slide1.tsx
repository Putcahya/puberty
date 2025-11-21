
import React from 'react';
import SlideContainer from '../SlideContainer';
import { slide1Content } from '../../constants/content';

const Slide1: React.FC = () => {
  return (
    <SlideContainer>
      <div className="flex flex-col lg:flex-row items-center gap-8 h-full mt-10">
        <div className="lg:w-1/2 w-full flex-shrink-0">
          <div className="rounded-xl shadow-2xl bg-brand-dark">
            <video
              src="/video/videoPuberty.mp4"
              controls 
              className="w-full h-auto"
              controlsList="nodownload"
            >
              Browser Anda tidak mendukung video HTML5
            </video>
          </div>
        </div>
        <div className="lg:w-1/2 w-full">
          <h2 className="text-2xl md:text-3xl font-bold text-brand-primary mb-4">{slide1Content.title}</h2>
        </div>
      </div>
    </SlideContainer>
  );
};

export default Slide1;
