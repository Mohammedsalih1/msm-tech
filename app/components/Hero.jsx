'use client'
import React, { useState, useEffect } from 'react';
import { Facebook, Instagram, Twitter, Linkedin } from 'lucide-react';

const words = ["طموحك", "رؤيتك", "علامتك", "نجاحك"];

export default function Hero() {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [wordVisible, setWordVisible] = useState(true);

  useEffect(() => {
    setIsVisible(true);
    
    const interval = setInterval(() => {
      setWordVisible(false);
      setTimeout(() => {
        setCurrentWordIndex((prev) => (prev + 1) % words.length);
        setWordVisible(true);
      }, 500);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section 
      dir="rtl"
      className="relative w-full min-h-screen pt-4 md:pt-30 overflow-hidden flex items-center justify-center"
      style={{ 
        backgroundColor: '#0B0B14',
        // fontFamily: "'Tajawal', system-ui, sans-serif" 
      }}
    >
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Tajawal:wght@400;500;700&display=swap');
          
          @keyframes float {
            0% { transform: translateY(0px); }
            50% { transform: translateY(-6px); }
            100% { transform: translateY(0px); }
          }
          .floating-card {
            animation: float 6s ease-in-out infinite;
          }
        `}
      </style>

      {/* Background Gradients */}
      <div 
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          background: 'radial-gradient(circle at 70% 40%, rgba(124,58,237,0.25), transparent 60%)'
        }}
      />
      <div 
        className="absolute top-0 right-0 w-64 h-64 z-0 pointer-events-none rounded-full"
        style={{
          boxShadow: '0 0 200px rgba(124,58,237,0.15)'
        }}
      />

      {/* Social Icons (Vertical, fixed far side) */}
      <div className="hidden lg:flex flex-col absolute left-8 top-1/2 -translate-y-1/2 gap-6 z-20">
        {[Facebook, Instagram, Twitter, Linkedin].map((Icon, idx) => (
          <a 
            key={idx} 
            href="#" 
            className="transition-all duration-300 transform hover:scale-110"
            style={{ color: 'rgba(255,255,255,0.5)' }}
            onMouseEnter={(e) => e.currentTarget.style.color = '#7C3AED'}
            onMouseLeave={(e) => e.currentTarget.style.color = 'rgba(255,255,255,0.5)'}
          >
            <Icon strokeWidth={1.5} size={24} />
          </a>
        ))}
      </div>

      <div className="container mx-auto px-6 lg:px-10 relative z-10 py-20 lg:py-0">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Right Side: Text Content */}
          <div className="flex flex-col items-start lg:items-start text-center lg:text-right space-y-8" >
            
            {/* Badge */}
            <div 
              className={`inline-block px-4 py-1.5 rounded-full backdrop-blur-sm transition-all duration-1000 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
              style={{
                border: '1px solid rgba(255,255,255,0.08)',
                background: 'rgba(255,255,255,0.03)',
                color: '#A1A1B3'
              }}
            >
              <span className="text-sm font-medium">حلول برمجية احترافية</span>
            </div>

            {/* Main Heading */}
            <h1 
              className={`w-full text-start text-2xl md:text-5xl lg:text-4xl font-bold leading-tight transition-all duration-1000 delay-100 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
              style={{ color: '#EAEAF0' }}
            >
              <span className="block mb-4">دعنا نخبر العالم عنك</span>
              <span className="block mb-4">
                بطريقة تليق بـ <span 
                className="inline-block transition-all duration-500 transform"
                style={{
                  backgroundImage: 'linear-gradient(90deg, #7C3AED, #2959DF, #241274)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  color: 'transparent',
                  opacity: wordVisible ? 1 : 0,
                  transform: `translateY(${wordVisible ? '0' : '10px'})`
                }}
              >
                {words[currentWordIndex]}
              </span> </span>
            </h1>

            {/* Subheading */}
            <p 
              className={`text-base sm:text-lg md:text-[16px] text-right leading-relaxed max-w-[600px] transition-all duration-1000 delay-200 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
              style={{ color: '#A1A1B3' }}
            >
              في MSM Tech لا نبني مجرد مواقع إلكترونية،
              بل نصنع تجارب رقمية تعكس هويتك، تعزز مكانتك،
              وتضعك في المكان الذي تستحقه في عالم التكنولوجيا.
              نصمم، نطوّر، ونبتكر حلولاً برمجية احترافية
              تُظهر علامتك التجارية بأقوى صورة ممكنة.
            </p>

            {/* CTA Button */}
            <div 
              className={`pt-4 transition-all duration-1000 delay-300 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
            >
              {/* <button 
                className="px-10 py-4 rounded-full font-bold text-white transition-all duration-500 ease-out transform hover:scale-105"
                style={{
                  background: 'linear-gradient(90deg, #7C3AED, #2959DF, #241274, #7C3AED)',
                  backgroundSize: '300% 100%',
                  backgroundPosition: '0 0'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundPosition = '100% 0';
                  e.currentTarget.style.boxShadow = '0 0 30px rgba(124,58,237,0.6)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundPosition = '0 0';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                تواصل معنا
              </button> */}
            <button
            className="cursor-pointer w-fit mx-auto
            relative overflow-hidden group
            px-6 py-3 rounded-full
            text-sm font-semibold
            text-[#EAEAF0]
            transition-all duration-300
            "
            style={{
              background: "linear-gradient(90deg, #7C3AED, #2959DF, #241274)",
              backgroundSize: "200% 100%",
            }}>
          {/* Animated Gradient Layer */}
          <span
            className="
            absolute inset-0
            transition-all duration-500
            animate-gradient-move
            group-hover:animate-none
            "
            style={{
              background: "linear-gradient(90deg, #7C3AED, #2959DF, #241274)",
              backgroundSize: "200% 100%",
              animation: "gradientMove 3s linear infinite",
            }}
          ></span>

          {/* Content */}
          <span className="relative flex items-center gap-2 z-10">
            تواصل معنا

            {/* Arrow */}
            <svg
              className="
              w-4 h-4
              transition-transform duration-300
              rotate-180
              group-hover:rotate-180
              "
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M13 5l7 7-7 7" />
            </svg>
          </span>

          {/* Glow Effect */}
          <span
            className="
            absolute inset-0 rounded-full
            opacity-0 group-hover:opacity-100
            transition-opacity duration-300
            "
            style={{
              boxShadow: "0 0 30px rgba(124,58,237,0.6)",
            }}></span>

            </button>
            {/* Mobile Social Icons */}
            <div className="md:hidden flex justify-center gap-6 mt-12 pb-8 relative z-10 w-full">
              {[Facebook, Instagram, Twitter, Linkedin].map((Icon, idx) => (
                <a 
                  key={idx} 
                  href="#" 
                  className="transition-all duration-300 transform hover:scale-110"
                  style={{ color: 'rgba(255,255,255,0.5)' }}
                  onMouseEnter={(e) => e.currentTarget.style.color = '#7C3AED'}
                  onMouseLeave={(e) => e.currentTarget.style.color = 'rgba(255,255,255,0.5)'}
                >
                  <Icon strokeWidth={1.5} size={24} />
                </a>
              ))}
            </div>
            </div>
            
          </div>

          {/* Left Side: Visual / Floating Glass Card */}
          <div 
            className={`flex justify-center lg:justify-end transition-all duration-1000 delay-500 transform ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}
          >
            <div 
              className="floating-card w-full max-w-sm rounded-[2rem] p-8 backdrop-blur-md relative overflow-hidden"
              style={{
                background: 'rgba(255,255,255,0.05)',
                border: '1px solid rgba(255,255,255,0.08)',
                boxShadow: '0 20px 40px rgba(0,0,0,0.4)'
              }}
            >
              {/* Card top gradient line */}
              <div 
                className="absolute top-0 left-0 w-full h-1"
                style={{ backgroundImage: 'linear-gradient(90deg, #7C3AED, #2959DF, #241274)' }}
              />
              
              <h3 className="text-xl font-bold mb-2" style={{ color: '#EAEAF0' }}>مشروع رقمي احترافي</h3>
              <p className="text-sm mb-10" style={{ color: '#A1A1B3' }}>نحول أفكارك إلى واقع ملموس</p>
              
              <div className="space-y-6">
                <div className="flex items-center gap-5">
                  <div className="flex-shrink-0 w-14 h-14 rounded-full flex items-center justify-center" style={{ background: 'rgba(124,58,237,0.1)' }}>
                    <span className="font-bold text-xl" style={{ color: '#7C3AED' }}>120+</span>
                  </div>
                  <div>
                    <h4 className="font-medium text-lg" style={{ color: '#EAEAF0' }}>مشاريع</h4>
                    <p className="text-sm mt-0.5" style={{ color: '#A1A1B3' }}>مكتملة بنجاح</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-5">
                  <div className="flex-shrink-0 w-14 h-14 rounded-full flex items-center justify-center" style={{ background: 'rgba(41,89,223,0.1)' }}>
                    <span className="font-bold text-xl" style={{ color: '#2959DF' }}>50+</span>
                  </div>
                  <div>
                    <h4 className="font-medium text-lg" style={{ color: '#EAEAF0' }}>عملاء</h4>
                    <p className="text-sm mt-0.5" style={{ color: '#A1A1B3' }}>شركاء نجاح</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-5">
                  <div className="flex-shrink-0 w-14 h-14 rounded-full flex items-center justify-center" style={{ background: 'rgba(36,18,116,0.3)' }}>
                    <span className="font-bold text-xl" style={{ color: '#7C3AED' }}>5+</span>
                  </div>
                  <div>
                    <h4 className="font-medium text-lg" style={{ color: '#EAEAF0' }}>سنوات خبرة</h4>
                    <p className="text-sm mt-0.5" style={{ color: '#A1A1B3' }}>في السوق الرقمي</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}