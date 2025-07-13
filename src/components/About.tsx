import React from 'react';
import { Award, Briefcase, GraduationCap, Heart } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="relative py-32 bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50 overflow-hidden">
      {/* Fluid background shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <div 
          className="absolute top-20 right-10 w-88 h-88 bg-gradient-to-br from-blue-400/4 to-purple-400/4 fluid-shape-1"
          data-parallax="0.8"
        ></div>
        <div 
          className="absolute bottom-20 left-10 w-72 h-72 bg-gradient-to-br from-teal-400/3 to-green-400/3 fluid-shape-2"
          data-parallax="1.2"
        ></div>
        <div 
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-gradient-to-br from-purple-400/4 to-pink-400/4 fluid-shape-3"
          data-parallax="1.0"
        ></div>
        <div 
          className="absolute top-1/4 left-1/4 w-40 h-40 bg-gradient-to-br from-indigo-400/5 to-cyan-400/5 fluid-shape-4"
          data-parallax="1.4"
        ></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div 
            className="animate-scroll-fade-in"
            data-parallax="0.15"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
              About Me
            </h2>
            <div className="space-y-8">
              <p className="text-lg text-gray-600 leading-relaxed">
                スタートアップや中小企業の成長を支援する、Web開発・マーケティングの専門家です。
                技術とビジネスの両面からアプローチし、開発から運用・成果創出まで一貫してサポートします。
              </p>
              
              <p className="text-lg text-gray-600 leading-relaxed">
                マーケティング、人材業界での実務経験により、
                実践的なプロダクト開発を理解しています。特にフロントエンド改修のスピードには自信があります。
              </p>
              
              <p className="text-lg text-gray-600 leading-relaxed">
                「効率性・品質・成果」を重視したアプローチで、投資対効果の高いデジタルソリューションを構築。
                測定可能な成果を通じて、持続的なビジネス成長を実現します。
              </p>
            </div>
          </div>
          
          <div 
            className="space-y-8 animate-scroll-fade-in"
            data-parallax="0.2"
          >
            <div 
              className="group neumorphism-card rounded-2xl p-8 transition-all duration-500 transform hover:-translate-y-2 border-0 micro-hover micro-glow"
              data-parallax="0.25"
            >
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300 neumorphism-button micro-rotate">
                  <Briefcase className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">現場での経験</h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                2年以上の実務経験を通じて、Webアプリケーション開発とマーケティング戦略の両分野で専門性を培いました。
                現場で培った実践的なノウハウを活かし、WEB制作やWEB開発のニーズに応えます。
              </p>
            </div>
            
            <div 
              className="group neumorphism-card rounded-2xl p-8 transition-all duration-500 transform hover:-translate-y-2 delay-100 border-0 micro-hover micro-glow"
              data-parallax="0.3"
            >
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-teal-500 to-green-500 rounded-2xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300 neumorphism-button micro-rotate">
                  <Award className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 group-hover:text-teal-600 transition-colors">得意なこと</h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                LaravelとVue.jsによるフルスタック開発、Filamentを活用した管理システム構築、
                そしてスピード感を持ったフロントエンドのWEB制作分野が得意です。
              </p>
            </div>
            
            <div 
              className="group neumorphism-card rounded-2xl p-8 transition-all duration-500 transform hover:-translate-y-2 delay-200 border-0 micro-hover micro-glow"
              data-parallax="0.35"
            >
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300 neumorphism-button micro-rotate">
                  <Heart className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 group-hover:text-purple-600 transition-colors">大切にしてること</h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                技術的な優秀性だけでなく、ユーザビリティとビジネス価値を重視した開発を心がけています。
                作ったものが実際に使われ、成果を生み出すことを最も大切にしています。
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}