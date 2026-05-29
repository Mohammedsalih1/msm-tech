'use client'
import React, { useState, useEffect } from 'react';
import { Facebook, Instagram, Twitter, Linkedin } from 'lucide-react';
import Image from 'next/image';
import PrimaryBtn from '../ui/PrimaryBtn';

const words = ["طموحك", "رؤيتك", "علامتك", "نجاحك"];
const SocialLinks = [
  {
    icon: Facebook,
    url: "https://www.facebook.com/share/1AmdB5rh8k/"
  },
  {
    icon: Instagram,
    url: "https://www.instagram.com/msmtechnology/"
  },
  {
    icon: Twitter,
    url: "https://x.com/msm_technology"
  }
]

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
    <section id='services'
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
          @keyframes gradient-shift {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
          }
          
          .btn-gradient {
            background: linear-gradient(90deg, #7C3AED, #2959DF, #241274, #7C3AED);
            background-size: 300% 100%;
            animation: gradient-shift 4s linear infinite;
            transition: all 0.3s ease;
          }
          
          .btn-gradient:hover {
            box-shadow: 0 0 30px rgba(124, 58, 237, 0.5);
            transform: scale(1.02);
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
        {SocialLinks.map((link, idx) => (
          <a target='_blank'
            key={idx} 
            href={link.url} 
            className="transition-all duration-300 transform hover:scale-110"
            style={{ color: 'rgba(255,255,255,0.5)' }}
            onMouseEnter={(e) => e.currentTarget.style.color = '#7C3AED'}
            onMouseLeave={(e) => e.currentTarget.style.color = 'rgba(255,255,255,0.5)'}
          >
            <link.icon strokeWidth={1.5} size={24} />
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
              className={`text-base sm:text-lg md:text-[16px] text-right leading-relaxed max-w-150 transition-all duration-1000 delay-200 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
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
              <PrimaryBtn label="تواصل معنا" to="#contact"/>
              
            {/* Mobile Social Icons */}
            <div className="md:hidden flex justify-center gap-6 mt-12 pb-8 relative z-10 w-full">
            {SocialLinks.map((link, idx) => (
              <a target='_blank'
                key={idx} 
                href={link.url} 
                className="transition-all duration-300 transform hover:scale-110"
                style={{ color: 'rgba(255,255,255,0.5)' }}
                onMouseEnter={(e) => e.currentTarget.style.color = '#7C3AED'}
                onMouseLeave={(e) => e.currentTarget.style.color = 'rgba(255,255,255,0.5)'}
              >
                <link.icon strokeWidth={1.5} size={24} />
              </a>
            ))}
            </div>
            </div>
            
          </div>

          {/* Left Side: Visual / Floating Glass Card */}
          <div 
            className={`justify-center lg:justify-end transition-all duration-1000 delay-500 transform ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}
          >
            <Image width={1024} height={1024} className='rounded-3xl' src="/heroImg.jpeg" />
          </div>
        </div>
      </div>
    </section>
  );
}