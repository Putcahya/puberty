import React, { useState } from 'react';
import Slide1 from './components/slides/Slide1';
import Slide2 from './components/slides/Slide2';
import Slide3 from './components/slides/Slide3';
import Slide4 from './components/slides/Slide4';
import Slide5 from './components/slides/Slide5';
import Slide6 from './components/slides/Slide6';
import Navbar from './components/Navigation';
import { Page } from './types';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<Page>('home');

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Slide1 />;
      case 'physical':
        return <Slide2 />;
      case 'hormones':
        return <Slide3 />;
      case 'quiz':
        return <Slide4 />;
      case 'dialogue':
        return <Slide5 />;
      case 'care':
        return <Slide6 />;
      default:
        return <Slide1 />;
    }
  };

  return (
    <div className="flex flex-col h-screen bg-brand-light text-brand-text">
      <Navbar currentPage={currentPage} onPageChange={setCurrentPage} />
      <main className="flex-grow flex flex-col items-center justify-center p-4 md:p-8 overflow-y-auto">
        <div className="w-full max-w-5xl h-full">
            {renderPage()}
        </div>
      </main>
    </div>
  );
};

export default App;