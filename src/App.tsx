import React, { useEffect } from 'react';
import Header from './components/Header';
import ExperimentalNav from './components/ExperimentalNav';
import CursorTrail from './components/CursorTrail';
import Hero from './components/Hero';
import Services from './components/Services';
import Skills from './components/Skills';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [darkMode, setDarkMode] = React.useState(false);

  useEffect(() => {
    // Dark mode initialization
    const savedDarkMode = localStorage.getItem('darkMode') === 'true';
    setDarkMode(savedDarkMode);
    if (savedDarkMode) {
      document.documentElement.classList.add('dark');
    }

    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, observerOptions);

    // Observe all elements with scroll animation class
    const animatedElements = document.querySelectorAll('.animate-scroll-fade-in');
    animatedElements.forEach(el => observer.observe(el));

    // Parallax effect
    const handleScroll = () => {
      const scrolled = window.pageYOffset;
      const parallaxElements = document.querySelectorAll('[data-parallax]');
      
      parallaxElements.forEach(element => {
        const speed = parseFloat(element.getAttribute('data-parallax'));
        const rect = element.getBoundingClientRect();
        const elementTop = rect.top + scrolled;
        const elementHeight = rect.height;
        const windowHeight = window.innerHeight;
        
        // 要素が画面内にある時のみパララックス効果を適用
        if (scrolled + windowHeight > elementTop && scrolled < elementTop + elementHeight) {
          const yPos = -(scrolled - elementTop) * speed * 0.1;
          element.style.transform = `translate3d(0, ${yPos}px, 0)`;
        }
      });
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleDarkMode = () => {
    const newDarkMode = !darkMode;
    setDarkMode(newDarkMode);
    localStorage.setItem('darkMode', newDarkMode.toString());
    if (newDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <ExperimentalNav />
      <CursorTrail />
      <Hero />
      <Services />
      <Skills />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;