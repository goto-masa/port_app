import React from 'react';
import { ArrowRight, Sparkles, Code, TrendingUp } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative pt-24 pb-32 bg-gradient-to-br from-gray-100 via-gray-50 to-blue-50 overflow-hidden">
      {/* Fluid background shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <div 
          className="absolute -top-80 -right-80 w-[800px] h-[800px] bg-gradient-to-br from-blue-400/15 to-purple-400/15 fluid-shape-1"
          data-parallax="0.8"
        ></div>
        <div 
          className="absolute -bottom-70 -left-70 w-[700px] h-[700px] bg-gradient-to-br from-teal-400/12 to-blue-400/12 fluid-shape-2"
          data-parallax="1.2"
        ></div>
        <div 
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-gradient-to-br from-purple-400/10 to-pink-400/10 fluid-shape-3"
          data-parallax="0.6"
        ></div>
        <div 
          className="absolute top-20 right-20 w-[600px] h-[600px] bg-gradient-to-br from-indigo-400/18 to-cyan-400/18 fluid-shape-4"
          data-parallax="1.5"
        ></div>
        <div 
          className="absolute top-1/4 left-10 w-[200px] h-[200px] bg-gradient-to-br from-green-400/12 to-teal-400/14 fluid-shape-1"
          data-parallax="1.8"
        ></div>
        <div 
          className="absolute bottom-1/3 right-1/4 w-[750px] h-[750px] bg-gradient-to-br from-orange-400/10 to-red-400/12 fluid-shape-2"
          data-parallax="0.4"
        ></div>
        <div 
          className="absolute top-3/4 left-1/3 w-[150px] h-[150px] bg-gradient-to-br from-violet-400/14 to-purple-400/12 fluid-shape-3"
          data-parallax="2.2"
        ></div>
        <div 
          className="absolute top-10 left-1/2 w-[550px] h-[550px] bg-gradient-to-br from-pink-400/13 to-rose-400/11 fluid-shape-4"
          data-parallax="1.0"
        ></div>
        <div 
          className="absolute bottom-10 right-10 w-[100px] h-[100px] bg-gradient-to-br from-emerald-400/16 to-teal-400/18 fluid-shape-1"
          data-parallax="2.5"
        ></div>
        <div 
          className="absolute top-1/3 right-1/3 w-[650px] h-[650px] bg-gradient-to-br from-amber-400/9 to-orange-400/11 fluid-shape-2"
          data-parallax="0.9"
        ></div>
        
        {/* Additional floating particles */}
        <div 
          className="absolute top-32 left-32 w-3 h-3 bg-blue-500/20 rounded-full animate-float"
          data-parallax="2.5"
        ></div>
        <div 
          className="absolute top-64 right-48 w-2 h-2 bg-purple-500/25 rounded-full animate-float-delayed"
          data-parallax="1.7"
        ></div>
        <div 
          className="absolute bottom-48 left-48 w-4 h-4 bg-teal-500/15 rounded-full animate-float-slow"
          data-parallax="3.0"
        ></div>
        <div 
          className="absolute bottom-64 right-64 w-2 h-2 bg-indigo-500/30 rounded-full animate-float"
          data-parallax="2.8"
        ></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div 
            className="flex justify-center items-center space-x-2 mb-6 animate-fade-in-up micro-glow"
            data-parallax="0.2"
          >
            <Sparkles className="w-6 h-6 text-blue-600 animate-spin-slow" />
            <span className="text-blue-600 font-semibold neumorphism-button px-6 py-3 rounded-full border-0 hover:text-blue-700 transition-colors duration-300">
              Professional Web Development & Marketing
            </span>
          </div>
          
          <h1 
            className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 animate-fade-in-up delay-200"
            data-parallax="0.1"
          >
            ビジネスの成長を
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-teal-500 animate-gradient-x">
              {' '}加速させませんか？
            </span>
          </h1>
          
          <p 
            className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed animate-fade-in-up delay-400"
            data-parallax="0.15"
          >
            スタートアップや中小企業の皆さん、限られた予算で最大の成果を求めていませんか？
            Laravel・Vue.jsによる効率的な開発と、データドリブンなマーケティングで確実な成長をサポートします。
          </p>
          
          <div 
            className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up delay-600"
            data-parallax="0.2"
          >
            <button className="group neumorphism-button text-blue-600 px-8 py-4 rounded-xl font-semibold transition-all duration-300 flex items-center space-x-2 transform hover:scale-105 border-0 micro-bounce">
              <span>相談してみる</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            
            <button className="group neumorphism-button text-gray-700 px-8 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 border-0 micro-hover">
              どんな感じか見る
            </button>
          </div>
          
          <div 
            className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 animate-fade-in-up delay-800"
            data-parallax="0.25"
          >
            <div className="group neumorphism-card p-8 rounded-2xl transition-all duration-500 transform hover:-translate-y-2 border-0 micro-glow">
              <Code className="w-12 h-12 text-blue-600 mb-4 mx-auto group-hover:scale-110 transition-transform duration-300" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Web Development</h3>
              <p className="text-gray-600">最新技術でWebサイト・アプリ作ります</p>
            </div>
            
            <div className="group neumorphism-card p-8 rounded-2xl transition-all duration-500 transform hover:-translate-y-2 delay-100 border-0 micro-glow">
              <TrendingUp className="w-12 h-12 text-teal-500 mb-4 mx-auto group-hover:scale-110 transition-transform duration-300" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Marketing Strategy</h3>
              <p className="text-gray-600">数字で見える形で売上アップのお手伝い</p>
            </div>
            
            <div className="group neumorphism-card p-8 rounded-2xl transition-all duration-500 transform hover:-translate-y-2 delay-200 border-0 micro-glow">
              <Sparkles className="w-12 h-12 text-purple-500 mb-4 mx-auto group-hover:scale-110 transition-transform duration-300" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Business Growth</h3>
              <p className="text-gray-600">ビジネス成長のトータルサポート</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}