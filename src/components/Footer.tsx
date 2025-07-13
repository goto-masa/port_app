import React from 'react';
import { Code, Mail, MessageSquare, Calendar } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
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
              <li><a href="#" className="hover:text-white transition-colors">Web開発</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Laravel開発</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Vue.jsアプリ</a></li>
              <li><a href="#" className="hover:text-white transition-colors">マーケティング</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">技術スタック</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">PHP & Laravel</a></li>
              <li><a href="#" className="hover:text-white transition-colors">JavaScript & Vue</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Filament</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Livewire</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 DevConsult. All rights reserved. 実務経験と専門知識で構築されています。</p>
        </div>
      </div>
    </footer>
  );
}