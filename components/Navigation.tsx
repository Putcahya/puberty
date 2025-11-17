import React from 'react';
import { Page } from '../types';

interface NavbarProps {
  currentPage: Page;
  onPageChange: (page: Page) => void;
}

const pages: { id: Page; title: string }[] = [
  { id: 'home', title: 'Home' },
  { id: 'physical', title: 'Perubahan Fisik' },
  { id: 'hormones', title: 'Hormon' },
  { id: 'quiz', title: 'Kuis' },
  { id: 'dialogue', title: 'Diskusi' },
];

const Navbar: React.FC<NavbarProps> = ({ currentPage, onPageChange }) => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <header className="bg-brand-bg/70 shadow-md w-full z-20 sticky top-0">
      <div className="max-w-5xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
             <h1 className="text-lg md:text-xl font-bold text-brand-primary cursor-pointer" onClick={() => onPageChange('home')}>
              E-Modul Interaktif: Pubertas
            </h1>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-1 lg:space-x-4">
            {pages.map((page) => (
              <button
                key={page.id}
                onClick={() => onPageChange(page.id)}
                className={`px-3 py-2 rounded-md text-sm font-semibold transition-colors duration-200 ${
                  currentPage === page.id
                    ? 'bg-brand-primary text-white shadow'
                    : 'text-brand-text hover:bg-gray-100'
                }`}
              >
                {page.title}
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-md text-gray-600 hover:text-brand-primary hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-brand-primary"
              aria-expanded={isMenuOpen}
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? (
                <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden animate-fade-in" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {pages.map((page) => (
              <button
                key={page.id}
                onClick={() => {
                  onPageChange(page.id);
                  setIsMenuOpen(false);
                }}
                className={`block w-full text-left px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 ${
                  currentPage === page.id
                    ? 'bg-brand-primary text-white'
                    : 'text-brand-text hover:bg-gray-100'
                }`}
              >
                {page.title}
              </button>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;