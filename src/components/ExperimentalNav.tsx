import React, { useEffect, useState } from 'react';

export default function ExperimentalNav() {
  const [activeSection, setActiveSection] = useState('hero');

  const sections = [
    { id: 'hero', label: 'ホーム' },
    { id: 'services', label: 'サービス' },
    { id: 'skills', label: 'スキル' },
    { id: 'about', label: 'About' },
    { id: 'contact', label: 'お問い合わせ' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100;
      
      // Check if we're at the top of the page
      if (window.scrollY < 50) {
        setActiveSection('hero');
        return;
      }
      
      for (const section of sections) {
        const element = document.getElementById(section.id);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section.id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="experimental-nav">
      <div className="flex flex-col space-y-4">
        {sections.map((section) => (
          <div
            key={section.id}
            className={`nav-dot ${activeSection === section.id ? 'active' : ''}`}
            onClick={() => scrollToSection(section.id)}
          >
            <span className="nav-label">{section.label}</span>
          </div>
        ))}
      </div>
    </nav>
  );
}