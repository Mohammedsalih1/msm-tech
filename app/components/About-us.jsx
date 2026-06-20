'use client'
import Image from 'next/image';
import React, { useEffect, useRef, useState } from 'react';
// Custom hook to trigger animation on scroll
function useFadeIn() {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    const currentRef = ref.current;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        observer.unobserve(currentRef);
      }
    }, { threshold: 0.1 });
    if (currentRef) {
      observer.observe(currentRef);
    }
    return () => {
      if (currentRef) observer.unobserve(currentRef);
    };
  }, []);
  return { 
    ref, 
    className: `transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}` 
  };
}
export default function AboutUs() {
  const titleAnim = useFadeIn();
  const descAnim = useFadeIn();
  const visionAnim = useFadeIn();
  const statsAnim = useFadeIn();
  const mockupAnim = useFadeIn();
  const stats = [
    { value: '+3', label: 'سنين خبرة' },
    { value: '20+', label: 'مشروع مكتمل' },
    { value: '5+', label: 'عميل موثوق' },
    { value: '98%', label: 'نسبة رضا' },
  ];
  return (
    <section id='about'
      className="relative w-full overflow-hidden"
      style={{
        backgroundColor: '#0B0B14',
        // boxShadow: 'inset 0 0 150px rgba(0,0,0,0.6)'
      }}
      
    >
      <div 
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          background: 'radial-gradient(circle at 70% 40%, rgba(124,58,237,0.25), transparent 60%)'
        }}
      />
      <style>{`
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-15px); }
          100% { transform: translateY(0px); }
        }
      `}</style>
      
      {/* Background radial gradient overlay */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(circle at 30% 70%, rgba(124,58,237,0.15), transparent 60%)'
        }}
      />
      {/* Huge background text */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[12vw] font-black whitespace-nowrap pointer-events-none select-none z-0 tracking-widest uppercase" 
        style={{ opacity: 0.03, color: '#ffffff' }}
      >
        MSM TECH
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-[120px]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          {/* Right Column (Mockup) */}
          {/* Left Column (Text side, Arabic RTL) */}
          <div dir="rtl" className=" flex flex-col items-start font-sans" style={{ fontFamily: "'Tajawal', sans-serif" }}>
            
            <div ref={titleAnim.ref} className={`relative inline-block mb-6 ${titleAnim.className}`}>
              {/* Glow behind title */}
              <div 
                className="absolute inset-0 blur-3xl opacity-30" 
                style={{ background: 'linear-gradient(to left, #7C3AED, #2959DF)' }} 
              />
              <h2 
                className="relative text-4xl lg:text-5xl font-bold tracking-normal leading-tight" 
                style={{
                  backgroundImage: 'linear-gradient(to left, #7C3AED, #2959DF)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  color: 'transparent'
                }}
              >
                ساعد مشروعك على الوصول إلى المزيد من العملاء بحضور رقمي احترافي
                {/* شريكك الاستراتيجي في التحول الرقمي */}
              </h2>
            </div>
            <div ref={descAnim.ref} className={`flex flex-col gap-4 ${descAnim.className}`}>
              <p 
                className="text-lg lg:text-xl leading-relaxed max-w-[600px] text-right" 
                style={{ color: '#9CA3AF' }}
              >
                MSM Tech شركة متخصصة في تقديم حلول برمجية متكاملة مصممة بعناية لتواكب تطور السوق الرقمي المتسارع.
              </p>
              <p 
                className="text-lg lg:text-xl leading-relaxed max-w-[600px] text-right" 
                style={{ color: '#9CA3AF' }}
              >
                نعتمد على منهجيات هندسية دقيقة، وندمج بين الإبداع التقني والانضباط التنفيذي، لنمنح عملاءنا حضورًا رقميًا احترافيًا يعكس قوة علاماتهم التجارية ويعزز نموهم.
              </p>
            </div>
            <p 
              ref={visionAnim.ref}
              className={`text-2xl font-semibold mt-10 mb-12 text-white text-right ${visionAnim.className}`}
            >
              نصنع لك قيمة رقمية مستدامة تبني الثقة، وتحقق النمو.
            </p>
            {/* Stats Grid */}
            <div 
              ref={statsAnim.ref}
              className={`grid grid-cols-2 gap-4 w-full max-w-[500px] ${statsAnim.className}`}
            >
              {stats.map((stat, idx) => (
                <div 
                  key={idx} 
                  className="p-6 rounded-2xl transition-transform duration-300 hover:scale-[1.03] flex flex-col items-center justify-center text-center group" 
                  style={{
                    background: 'rgba(255,255,255,0.03)',
                    border: '1px solid rgba(255,255,255,0.05)',
                    backdropFilter: 'blur(12px)'
                  }}
                >
                  <h3 
                    className="text-4xl lg:text-5xl font-bold mb-2 transition-opacity" 
                    style={{
                      backgroundImage: 'linear-gradient(to left, #7C3AED, #2959DF)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                    }}
                  >
                    {stat.value}
                  </h3>
                  <p className="text-sm lg:text-base font-medium" style={{ color: '#9CA3AF' }}>{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
          <div>
            <Image src="/aboutus-image.jpeg" width="540" height="540" />
          </div>
        </div>
      </div>
    </section>
  );
}