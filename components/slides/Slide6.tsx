import React from 'react';
import SlideContainer from '../SlideContainer';
import { selfCareContent } from '../../constants/content';

const iconMap: { [key: string]: React.ReactNode } = {
    shower: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.5a3.5 3.5 0 11-7 0" />,
    face: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10zm0 0c-3 0-5.5-2-5.5-5.5" />,
    deodorant: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 21V8a2 2 0 114 0v13M5 8h14" />,
    tshirt: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 4h6l2 5-3 3-2-2-2 2-3-3 2-5zM9 4L7 9m8-5l2 5" />,
    toothbrush: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 21h18M3 10h18v4H3zM10 10V3h4v7" />,
    water: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 2.69l5.66 5.66a8 8 0 11-11.32 0L12 2.69z" />,
};

const CareCard: React.FC<{ title: string; text: string; icon: string }> = ({ title, text, icon }) => (
    <div className="bg-brand-bg/70 p-6 rounded-lg shadow-lg hover:shadow-xl hover:-translate-y-1 transform transition-all duration-300">
        <div className="flex items-center mb-3">
            <div className="p-3 bg-brand-secondary/20 rounded-full mr-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-brand-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    {iconMap[icon] || iconMap.shower}
                </svg>
            </div>
            <h3 className="text-lg font-bold text-brand-primary">{title}</h3>
        </div>
        <p className="text-brand-text text-sm leading-relaxed">{text}</p>
    </div>
);

const Slide6: React.FC = () => {
  return (
    <SlideContainer>
        <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-brand-primary">{selfCareContent.title}</h2>
            <p className="text-lg text-gray-600 mt-2 max-w-3xl mx-auto">{selfCareContent.intro}</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {selfCareContent.cards.map((card, index) => (
                <CareCard key={index} title={card.title} text={card.text} icon={card.icon} />
            ))}
        </div>
    </SlideContainer>
  );
};

export default Slide6;
