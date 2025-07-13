import React from 'react';
import { Code2, Palette, Server, TrendingUp } from 'lucide-react';

export default function Skills() {
  const skillCategories = [
    {
      icon: Code2,
      title: 'フロントエンド',
      color: 'from-blue-600 to-purple-600',
      skills: ['JavaScript', 'Vue.js', 'React', 'HTML & CSS', 'Tailwind CSS', 'スマホ対応']
    },
    {
      icon: Server,
      title: 'バックエンド',
      color: 'from-green-600 to-teal-600',
      skills: ['PHP', 'Laravel', 'Livewire', 'MySQL', 'API作成', 'DB設計']
    },
    {
      icon: Palette,
      title: '管理画面ツール',
      color: 'from-orange-600 to-red-600',
      skills: ['Filament', '管理画面', 'ダッシュボード', 'ユーザー管理', 'フォーム作成', 'データ表示']
    },
    {
      icon: TrendingUp,
      title: 'マーケティング',
      color: 'from-pink-600 to-purple-600',
      skills: ['Web広告', 'SEO', 'アクセス解析', '広告運用', '売上改善', '成長施策']
    }
  ];

  return (
    <section id="skills" className="relative py-32 bg-gradient-to-br from-gray-100 via-gray-50 to-blue-50 overflow-hidden">
      {/* Fluid background shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <div 
          className="absolute top-1/4 left-1/4 w-80 h-80 bg-gradient-to-br from-blue-400/3 to-purple-400/3 fluid-shape-1"
          data-parallax="0.8"
        ></div>
        <div 
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-br from-teal-400/2 to-green-400/2 fluid-shape-2"
          data-parallax="1.2"
        ></div>
        <div 
          className="absolute top-1/3 right-1/5 w-52 h-52 bg-gradient-to-br from-purple-400/4 to-pink-400/4 fluid-shape-3"
          data-parallax="1.0"
        ></div>
        <div 
          className="absolute bottom-1/3 left-1/5 w-44 h-44 bg-gradient-to-br from-indigo-400/5 to-cyan-400/5 fluid-shape-4"
          data-parallax="1.4"
        ></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 animate-scroll-fade-in"
            data-parallax="0.1"
          >
            技術スタック
          </h2>
          <p 
            className="text-xl text-gray-600 max-w-2xl mx-auto animate-scroll-fade-in"
            data-parallax="0.15"
          >
            実務で培った技術スタックで、実用性の高いソリューションを構築
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {skillCategories.map((category, index) => (
            <div 
              key={index} 
              className="group neumorphism-card rounded-2xl p-8 transition-all duration-500 transform hover:-translate-y-2 animate-scroll-fade-in border-0 micro-hover micro-glow"
              data-parallax={0.2 + (index * 0.1)}
            >
              <div className="flex items-center mb-8">
                <div className={`w-14 h-14 bg-gradient-to-br ${category.color} rounded-2xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300 neumorphism-button micro-bounce`}>
                  <category.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                  {category.title}
                </h3>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                {category.skills.map((skill, skillIndex) => (
                  <div 
                    key={skillIndex} 
                    className="neumorphism-inset px-4 py-3 rounded-xl text-sm text-gray-700 hover:text-blue-700 transition-all duration-300 cursor-default transform hover:scale-105 border-0 micro-scale"
                    style={{ transitionDelay: `${skillIndex * 50}ms` }}
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        
        <div 
          className="neumorphism-card rounded-3xl p-10 animate-fade-in-up delay-600 border-0"
          data-parallax="0.3"
        >
          <div className="text-center mb-10">
            <h3 className="text-2xl font-bold text-gray-900 mb-3 animate-scroll-fade-in">実績サマリー</h3>
            <p className="text-gray-600 animate-scroll-fade-in">これまでの実務経験と成果（詳細はホバーで表示）</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center group animate-scroll-fade-in relative cursor-pointer">
              <div className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-3 group-hover:scale-110 transition-transform duration-300 micro-bounce">2+</div>
              <div className="text-gray-600 font-medium">年の実務経験</div>
              
              {/* Modal */}
              <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none group-hover:pointer-events-auto z-10">
                <div className="bg-white rounded-lg shadow-xl p-6 w-80 border border-gray-200">
                  <h4 className="font-semibold text-gray-900 mb-3">実務経験の詳細</h4>
                  <ul className="text-sm text-gray-600 space-y-2">
                    <li>• Webアプリケーション開発チームでの勤務</li>
                    <li>• マーケティング部署での施策実行</li>
                    <li>• Laravel・Vue.jsを使った実案件開発</li>
                    <li>• ECサイト・SaaS・フィンテック業界での経験</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="text-center group animate-scroll-fade-in relative cursor-pointer">
              <div className="text-4xl font-bold bg-gradient-to-r from-teal-500 to-green-500 bg-clip-text text-transparent mb-3 group-hover:scale-110 transition-transform duration-300 micro-bounce">15+</div>
              <div className="text-gray-600 font-medium">完了プロジェクト</div>
              
              {/* Modal */}
              <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none group-hover:pointer-events-auto z-10">
                <div className="bg-white rounded-lg shadow-xl p-6 w-80 border border-gray-200">
                  <h4 className="font-semibold text-gray-900 mb-3">プロジェクト実績</h4>
                  <ul className="text-sm text-gray-600 space-y-2">
                    <li>• ECサイト構築・リニューアル（5件）</li>
                    <li>• 管理画面システム開発（4件）</li>
                    <li>• マーケティングLP制作（3件）</li>
                    <li>• API開発・システム連携（3件）</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="text-center group animate-scroll-fade-in relative cursor-pointer">
              <div className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-3 group-hover:scale-110 transition-transform duration-300 micro-bounce">8+</div>
              <div className="text-gray-600 font-medium">習得技術</div>
              
              {/* Modal */}
              <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none group-hover:pointer-events-auto z-10">
                <div className="bg-white rounded-lg shadow-xl p-6 w-80 border border-gray-200">
                  <h4 className="font-semibold text-gray-900 mb-3">技術スタック</h4>
                  <ul className="text-sm text-gray-600 space-y-2">
                    <li>• PHP・Laravel（フレームワーク）</li>
                    <li>• JavaScript・Vue.js（フロントエンド）</li>
                    <li>• Filament・Livewire（管理画面）</li>
                    <li>• MySQL・API設計（バックエンド）</li>
                    <li>• Google Analytics・広告運用（マーケティング）</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}