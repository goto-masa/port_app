import React from 'react';
import { Mail, MessageSquare, Calendar, ArrowRight, Sparkles } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="relative py-32 bg-gradient-to-br from-slate-800 via-gray-900 to-slate-900 overflow-hidden">
      {/* Fluid background shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <div 
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-br from-blue-500/8 to-indigo-500/6 fluid-shape-1"
          data-parallax="0.8"
        ></div>
        <div 
          className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-br from-purple-500/6 to-pink-500/4 fluid-shape-2"
          data-parallax="1.2"
        ></div>
        <div 
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-br from-teal-500/5 to-cyan-500/3 fluid-shape-3"
          data-parallax="1.0"
        ></div>
        
        {/* Floating particles */}
        <div 
          className="absolute top-20 left-20 w-2 h-2 bg-blue-400/40 rounded-full animate-float"
          data-parallax="1.5"
        ></div>
        <div 
          className="absolute top-40 right-32 w-3 h-3 bg-purple-400/30 rounded-full animate-float-delayed"
          data-parallax="1.8"
        ></div>
        <div 
          className="absolute bottom-32 left-1/3 w-2 h-2 bg-teal-400/35 rounded-full animate-float-slow"
          data-parallax="2.0"
        ></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div 
          className="text-center mb-20"
          data-parallax="0.15"
        >
          <div className="flex justify-center items-center space-x-2 mb-6">
            <Sparkles className="w-6 h-6 text-white animate-spin-slow" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 animate-fade-in-up">
            プロジェクトを始めませんか？
          </h2>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto animate-fade-in-up delay-200">
            <span className="text-gray-300">コスト効率の高いデジタルソリューションについて、</span>
            <span className="text-blue-200">お気軽にご相談ください</span>
          </p>
        </div>
        
        <div 
          className="max-w-2xl mx-auto mb-16"
          data-parallax="0.2"
        >
          <div className="group bg-gradient-to-br from-slate-800 via-gray-900 to-slate-900 rounded-3xl p-12 text-center transition-all duration-300 transform hover:-translate-y-2 animate-scroll-fade-in border-0">
            <div className="w-20 h-20 bg-gradient-to-br from-gray-700 to-gray-800 dark:from-gray-200 dark:to-gray-300 rounded-3xl flex items-center justify-center mx-auto mb-8 transition-transform duration-200">
              <Mail className="w-10 h-10 text-white" />
            </div>
            <h3 className="text-2xl font-semibold text-white dark:text-white mb-4">メール相談</h3>
            <p className="text-blue-100 mb-8 leading-relaxed text-lg">
              プロジェクトの詳細をお聞かせください。<br />
              期間・予算・技術要件を含む具体的な提案書を作成いたします。
            </p>
            <div className="space-y-4 mb-8">
              {[
                '初回相談は無料',
                '具体的な提案書を作成',
                '透明性のある料金設定',
                '予算に応じた柔軟な対応'
              ].map((item, index) => (
                <div 
                  key={index}
                  className="flex items-center justify-center space-x-3"
                >
                  <div className="w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full"></div>
                  <span className="text-blue-100 font-medium">{item}</span>
                </div>
              ))}
            </div>
            <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 px-8 rounded-xl font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-center mx-auto space-x-2 shadow-lg hover:shadow-xl transform hover:scale-105">
              <Mail className="w-5 h-5" />
              <span>メール相談を始める</span>
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
        
        <div 
          className="neumorphism-card rounded-3xl p-10 max-w-5xl mx-auto animate-fade-in-up delay-600 border-0"
          data-parallax="0.3"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6 animate-scroll-fade-in">プロジェクト相談</h3>
              <p className="text-gray-600 mb-8 leading-relaxed">
                プロジェクトの詳細をお聞かせください。
                期間・予算・技術要件を含む具体的な提案書を作成いたします。
              </p>
              
              <div className="space-y-4">
                {[
                  '初回相談は無料',
                  '具体的な提案書を作成',
                  '透明性のある料金設定',
                  '予算に応じた柔軟な対応'
                ].map((item, index) => (
                  <div 
                    key={index}
                    className="flex items-center space-x-3 animate-scroll-fade-in"
                    style={{ animationDelay: `${700 + index * 100}ms` }}
                  >
                    <div className="w-2 h-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full"></div>
                    <span className="text-gray-700 font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="animate-scroll-fade-in">
                <label className="block text-sm font-medium text-gray-700 mb-3">
                  お名前
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 hover:border-gray-300"
                  placeholder="お名前を入力してください"
                />
              </div>
              
              <div className="animate-scroll-fade-in">
                <label className="block text-sm font-medium text-gray-700 mb-3">
                  メールアドレス
                </label>
                <input
                  type="email"
                  className="w-full px-4 py-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 hover:border-gray-300"
                  placeholder="your@email.com"
                />
              </div>
              
              <div className="animate-scroll-fade-in">
                <label className="block text-sm font-medium text-gray-700 mb-3">
                  プロジェクト概要
                </label>
                <textarea
                  rows={4}
                  className="w-full px-4 py-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 hover:border-gray-300 resize-none"
                  placeholder="プロジェクトの概要や要件をお聞かせください..."
                />
              </div>
              
              <button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 px-6 rounded-xl font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl transform hover:scale-105 animate-scroll-fade-in micro-glow">
                <span>相談内容を送信</span>
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}