
import React, { useState, useEffect } from 'react';
import SlideContainer from '../SlideContainer';
import { Gender, Hotspot } from '../../types';
import { maleHotspots, femaleHotspots } from '../../constants/content';
import { MaleFigure } from '../figures/MaleFigure';
import {FemaleFigure} from '../figures/FemaleFigure';

const Slide2: React.FC = () => {
  const [gender, setGender] = useState<Gender>('male');
  const [activeHotspot, setActiveHotspot] = useState<Hotspot | null>(maleHotspots[0]);
  const [showImage, setShowImage] = useState(false);

  const handleHotspotClick = (hotspot: Hotspot) => {
    setActiveHotspot(hotspot);
  };

  useEffect(() => {
    // If the active hotspot has an image, trigger the scale-in animation
    if (activeHotspot?.image) {
      setShowImage(false);
      const t = setTimeout(() => setShowImage(true), 30);
      return () => clearTimeout(t);
    }
    setShowImage(false);
  }, [activeHotspot]);

  const currentHotspots = gender === 'male' ? maleHotspots : femaleHotspots;
  const accentColor = gender === 'male' ? 'bg-brand-primary' : 'bg-brand-secondary';
  const focusRingColor = gender === 'male' ? 'focus:ring-orange-400' : 'focus:ring-green-400';
  const buttonActiveClass = gender === 'female' ? 'bg-brand-secondary text-white shadow' : 'text-gray-600';

  return (
    <SlideContainer>
      <div className="flex flex-col h-full">
        <h2 className="text-center text-2xl font-bold text-brand-primary mb-2">Perubahan Fisik Saat Pubertas</h2>
        <p className="text-center text-brand-text mb-4">Klik titik pada gambar untuk mengetahui penjelasan singkat.</p>
        <div className="flex justify-center mb-6">
          <div className="flex p-1 bg-gray-200 rounded-full">
            <button
              onClick={() => { setGender('male'); setActiveHotspot(maleHotspots[0]); }}
              className={`px-6 py-2 rounded-full text-sm font-semibold transition-colors ${gender === 'male' ? 'bg-brand-primary text-white shadow' : 'text-gray-600'}`}
            >
              Laki-Laki
            </button>
            <button
              onClick={() => { setGender('female'); setActiveHotspot(femaleHotspots[0]); }}
              className={`px-6 py-2 rounded-full text-sm font-semibold transition-colors ${gender === 'female' ? buttonActiveClass : 'text-gray-600'}`}
            >
              Perempuan
            </button>
          </div>
        </div>
        <div className="flex-grow grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
          <div className="md:col-span-1 flex justify-center items-center">
            <div className="relative w-56 h-96">
              <div key={gender} className="absolute inset-0 animate-fade-in">
                {gender === 'male' 
                    ? <MaleFigure highlightedPart={activeHotspot?.id} /> 
                    : <FemaleFigure highlightedPart={activeHotspot?.id} />}
              </div>
              {/* hotspot image that appears from the button when provided */}
              {activeHotspot?.image && (
                <img
                  src={activeHotspot.image}
                  alt={activeHotspot.title}
                  className={`absolute pointer-events-none transform -translate-x-1/2 -translate-y-1/2 transition-all duration-500 z-40 ${showImage ? 'scale-100 opacity-100' : 'scale-0 opacity-0'}`}
                  style={{ top: activeHotspot.top, left: activeHotspot.left, width: 120 }}
                />
              )}
              {currentHotspots.map(hotspot => (
                <button
                  key={hotspot.id}
                  className={`absolute w-6 h-6 rounded-full ${accentColor} transform -translate-x-1/2 -translate-y-1/2 animate-pulse-strong flex items-center justify-center ring-2 ring-white/50 transition-transform hover:scale-125 focus:outline-none focus:ring-4 ${focusRingColor}`}
                  style={{ top: hotspot.top, left: hotspot.left }}
                  onClick={() => handleHotspotClick(hotspot)}
                  aria-label={`Info tentang ${hotspot.title}`}
                >
                  <span className="text-white font-bold text-sm">?</span>
                </button>
              ))}
            </div>
          </div>
          <div className="md:col-span-2">
            {activeHotspot ? (
              <div className="bg-brand-bg/70 p-6 rounded-xl shadow-lg border border-gray-200 animate-fade-in">
                <h3 className={`text-xl font-bold mb-3 ${gender === 'male' ? 'text-brand-primary' : 'text-brand-secondary'}`}>
                  {activeHotspot.title}
                </h3>
                <p className="text-brand-text leading-relaxed">{activeHotspot.explanation}</p>
              </div>
            ) : (
                 <div className="bg-brand-bg/70 p-6 rounded-xl shadow-lg border border-gray-200 text-center">
                    <p className="text-gray-500">Pilih salah satu titik di gambar untuk melihat penjelasannya.</p>
                 </div>
            )}
          </div>
        </div>
      </div>
    </SlideContainer>
  );
};

export default Slide2;