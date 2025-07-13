import React from 'react';
import { Code, Mail, MessageSquare, Calendar } from 'lucide-react';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-teal-500 rounded-lg flex items-center justify-center">
                <Code className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold">DevConsult</span>
            </div>
            <p className="text-gray-400 mb-4 max-w-md">
              コスト効率を重視した、Web開発・マーケティングサービス
            </p>
            <div className="flex space-x-4">
              <Mail className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer transition-colors" />
              <MessageSquare className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer transition-colors" />
              <Calendar className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer transition-colors" />
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">サービス</h4>
            <ul className="space-y-2 text-gray-400">
              <li><p className=" transition-colors">Web開発</p></li>
              <li><p className=" transition-colors">Laravel開発</p></li>
              <li><p className=" transition-colors">Vue.jsアプリ</p></li>
              <li><p className=" transition-colors">マーケティング</p></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">技術スタック</h4>
            <ul className="space-y-2 text-gray-400">
              <li><p className=" transition-colors">PHP & Laravel</p></li>
              <li><p className=" transition-colors">JavaScript & Vue</p></li>
              <li><p className=" transition-colors">Filament</p></li>
              <li><p className=" transition-colors">Livewire</p></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2025 DevConsult. All rights reserved. </p>
        </div>
      </div>
    </footer>
  );
}
