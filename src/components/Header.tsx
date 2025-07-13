import React from 'react';
import { Menu, X, Code, Sun, Moon } from 'lucide-react';

interface HeaderProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

export default function Header({ darkMode, toggleDarkMode }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 dark:bg-gray-900/90 backdrop-blur-md border-b border-gray-200 dark:border-gray-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-teal-500 rounded-lg flex items-center justify-center micro-rotate">
              <Code className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold text-gray-900 dark:text-white">DevConsult</span>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a href="#services" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 transition-colors micro-hover">サービス</a>
            <a href="#skills" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 transition-colors micro-hover">スキル</a>
            <a href="#about" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 transition-colors micro-hover">About</a>
            <a href="#contact" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 transition-colors micro-hover">お問い合わせ</a>
          </nav>

          <div className="flex items-center space-x-4">
            {/* Dark mode toggle */}
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-lg text-gray-700 dark:text-gray-300 hover:text-blue-600 transition-colors micro-scale"
              aria-label="Toggle dark mode"
            >
              {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-md text-gray-700 dark:text-gray-300 hover:text-blue-600 transition-colors micro-scale"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200 dark:border-gray-700">
            <nav className="flex flex-col space-y-4">
              <a href="#services" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 transition-colors">サービス</a>
              <a href="#skills" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 transition-colors">スキル</a>
              <a href="#about" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 transition-colors">About</a>
              <a href="#contact" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 transition-colors">お問い合わせ</a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}