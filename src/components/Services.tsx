import React from 'react';
import { Globe, Smartphone, Database, BarChart3, Users, Zap } from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: Globe,
      title: 'Webアプリケーション開発',
      description: 'Laravel、Vue.jsを使って、あなたのビジネスにピッタリのWebアプリを作ります。後から機能追加もしやすい設計で。',
      features: ['Laravel開発', 'Vue.jsフロントエンド', 'API統合', 'データベース設計'],
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Smartphone,
      title: 'スマホ対応デザイン',
      description: 'スマホでもPCでもキレイに見えるデザイン。お客さんが使いやすくて、売上につながるサイトを作ります。',
      features: ['スマホ最適化', '使いやすいデザイン', 'おしゃれなUI', '誰でも使える'],
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      icon: Database,
      title: 'バックエンド開発',
      description: 'PHP、Laravel、Livewireでサーバー側をしっかり構築。セキュリティも速度も、後のメンテナンスも考えて作ります。',
      features: ['PHP開発', 'Laravel', 'Livewire', 'データベース'],
      gradient: 'from-green-500 to-teal-500'
    },
    {
      icon: BarChart3,
      title: 'マーケティングサポート',
      description: '数字で効果が見えるマーケティング。何が効いてるか分からない広告費の無駄遣いはもうやめましょう。',
      features: ['効果測定', '広告運用', 'SEO対策', '売上アップ施策'],
      gradient: 'from-orange-500 to-red-500'
    },
    {
      icon: Users,
      title: '管理画面開発',
      description: 'Filamentで使いやすい管理画面を作ります。データの管理や分析が楽になって、業務効率がグッと上がります。',
      features: ['管理画面', 'ダッシュボード', 'ユーザー管理', 'データ分析'],
      gradient: 'from-indigo-500 to-purple-500'
    },
    {
      icon: Zap,
      title: 'サイト高速化',
      description: '遅いサイトはお客さんが逃げちゃいます。サイトを速くして、ユーザーにも検索エンジンにも好かれるサイトに。',
      features: ['表示速度改善', 'コード見直し', '技術チェック', '継続監視'],
      gradient: 'from-yellow-500 to-orange-500'
    }
  ];

  return (
    <section id="services" className="relative py-32 bg-gradient-to-br from-gray-50 to-gray-100 overflow-hidden">
      {/* Fluid background shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <div 
          className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-br from-blue-400/5 to-purple-400/5 fluid-shape-1"
          data-parallax="0.8"
        ></div>
        <div 
          className="absolute top-40 right-20 w-56 h-56 bg-gradient-to-br from-teal-400/4 to-green-400/4 fluid-shape-2"
          data-parallax="1.2"
        ></div>
        <div 
          className="absolute bottom-40 left-1/4 w-64 h-64 bg-gradient-to-br from-purple-400/4 to-pink-400/4 fluid-shape-3"
          data-parallax="0.6"
        ></div>
        <div 
          className="absolute bottom-20 right-1/3 w-48 h-48 bg-gradient-to-br from-indigo-400/6 to-cyan-400/6 fluid-shape-4"
          data-parallax="1.5"
        ></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 animate-scroll-fade-in"
            data-parallax="0.1"
          >
            提供サービス
          </h2>
          <p 
            className="text-xl text-gray-600 max-w-2xl mx-auto animate-scroll-fade-in"
            data-parallax="0.15"
          >
            コスト効率を重視した、成果にコミットするWebソリューション
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="group neumorphism-card rounded-2xl p-8 transition-all duration-500 transform hover:-translate-y-3 animate-scroll-fade-in border-0 micro-hover micro-glow"
              data-parallax={0.2 + (index * 0.1)}
            >
              <div className={`w-16 h-16 bg-gradient-to-br ${service.gradient} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 neumorphism-button micro-rotate`}>
                <service.icon className="w-8 h-8 text-white" />
              </div>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                {service.title}
              </h3>
              
              <p className="text-gray-600 mb-6 leading-relaxed">
                {service.description}
              </p>
              
              <div className="space-y-3">
                {service.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center space-x-3 group-hover:translate-x-1 transition-transform duration-300" style={{ transitionDelay: `${featureIndex * 50}ms` }}>
                    <div className={`w-2 h-2 bg-gradient-to-r ${service.gradient} rounded-full`}></div>
                    <span className="text-sm text-gray-600 group-hover:text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}