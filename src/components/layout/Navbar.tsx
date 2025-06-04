import React, { useState, useEffect } from 'react';
import { Menu, X, Download } from 'lucide-react';
import ThemeToggle from './ThemeToggle';
import { useTheme } from '../../context/ThemeContext';
import resume from '../../assets/Ankittiwari_Resume.pdf';
import Symbol from '../../assets/Portfolio_Icon.png';

interface NavbarProps {
  isScrolled: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ isScrolled }) => {
  const [isOpen, setIsOpen] = useState(false);
  const { theme } = useTheme();
  const [activeSection, setActiveSection] = useState('home');

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'experience', label: 'Experience' },
    { id: 'projects', label: 'Projects' },
    { id: 'achievements', label: 'Achievements' },
    { id: 'certifications', label: 'Certifications' },
    { id: 'contact', label: 'Contact' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section');
      const scrollPosition = window.scrollY + 300;

      sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id') || '';

        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          setActiveSection(sectionId);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-background/90 backdrop-blur-md shadow-md py-3' : 'py-5'}`}>
      <div className="container mx-auto px-4 flex items-center justify-between">
        <img src={Symbol} alt="Symbol" height={50} width={50}/>
        <a href="#home" className="mr-32 text-2xl font-bold text-primary">
          Ankit<span className="text-foreground"> Tiwari</span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-6">
          {navLinks.map(link => (
            <a
              key={link.id}
              href={`#${link.id}`}
              onClick={() => {
                setActiveSection(link.id);
                closeMenu();
              }}
              className={`relative font-medium transition-colors duration-200 ${
                activeSection === link.id
                  ? 'text-primary'
                  : 'text-muted hover:text-primary'
              }`}
            >
              {link.label}
              {activeSection === link.id && (
                <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-primary rounded-full transition-all duration-300"></span>
              )}
            </a>
          ))}
        </nav>

        <div className="hidden md:flex items-center space-x-4">
          <a 
            href={resume}
            download
            className="inline-flex items-center px-4 py-2 text-sm font-medium border rounded-md transition hover:bg-primary hover:text-white border-primary text-primary dark:text-white dark:hover:bg-white dark:hover:text-black"
          >
            <Download size={18} className="mr-2" />
            Resume
          </a>
          <ThemeToggle />
        </div>

        {/* Mobile */}
        <div className="md:hidden flex items-center space-x-3">
          <ThemeToggle />
          <button onClick={toggleMenu} className="text-foreground" aria-label="Toggle menu">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <div className={`md:hidden fixed inset-0 z-40 bg-background transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="flex flex-col h-full pt-20 px-6">
          {navLinks.map(link => (
            <a
              key={link.id}
              href={`#${link.id}`}
              onClick={() => {
                setActiveSection(link.id);
                closeMenu();
              }}
              className="py-4 text-lg font-medium border-b border-primary/20 text-muted hover:text-primary transition"
            >
              {link.label}
            </a>
          ))}
          <a 
            href={resume}
            download
            onClick={closeMenu}
            className="mt-6 inline-flex items-center justify-center px-4 py-2 border border-primary rounded-md text-primary hover:bg-primary hover:text-white transition"
          >
            <Download size={18} className="mr-2" />
            Download Resume
          </a>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
