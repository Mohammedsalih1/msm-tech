"use client"
import React, { useEffect, useRef, useState } from 'react';
import { MonitorSmartphone, PenTool, LayoutDashboard, Rocket, ArrowLeft, Server } from 'lucide-react';
function useFadeIn(delay = 0) {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    const currentRef = ref.current;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setTimeout(() => setIsVisible(true), delay);
        observer.unobserve(currentRef);
      }
    }, { threshold: 0.1 });
    if (currentRef) {
      observer.observe(currentRef);
    }
    return () => {
      if (currentRef) observer.unobserve(currentRef);
    };
  }, [delay]);
  return { 
    ref, 
    className: `transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}` 
  };
}
export default function Services() {

  const headerAnim = useFadeIn(0);
  const cards = [
    {
      title: "تطوير مواقع احترافية",
      description: "نصمم ونبني مواقع سريعة، متجاوبة، ومصممة لتحقيق أفضل تجربة للمستخدم تليق بعلامتك التجارية.",
      icon: MonitorSmartphone,
      anim: useFadeIn(150),
      gradient: "from-[#7C3AED] to-[#2959DF]"
    },
    {
      title: "تصميم واجهات وتجربة المستخدم",
      description: "نحول الأفكار المعقدة إلى تجارب رقمية بديهية وجذابة تزيد من تفاعل المستخدم وارتباطه بمنتجك.",
      icon: PenTool,
      anim: useFadeIn(300),
      gradient: "from-[#2959DF] to-[#7C3AED]"
    },
    {
      title: "أنظمة مخصصة",
      description: "نبني أنظمة ولوحات تحكم مخصصة بالكامل قابلة للتوسع تساعدك على إدارة أعمالك الرقمية بكفاءة عالية.",
      icon: LayoutDashboard,
      anim: useFadeIn(450),
      gradient: "from-[#7C3AED] to-[#241274]"
    },
    {
      title: "تحسين الأداء",
      description: "نرفع سرعة وأداء موقعك ونحسن بنيته التحتية لتحقيق أفضل نتائج ممكنة في محركات البحث وتجربة الاستخدام.",
      icon: Rocket,
      anim: useFadeIn(600),
      gradient: "from-[#241274] to-[#2959DF]"
    },
    {
      title: "استضافة وإدارة المواقع",
      description: "نوفر حلول استضافة متكاملة مع إدارة تقنية كاملة تضمن سرعة، أمان، واستقرار موقعك على مدار الساعة.",
      icon: Server,
      anim: useFadeIn(750),
      gradient: "from-[#241274] to-[#2959DF]"
    }
  ];
  return (
    <section id='service'
      dir="rtl" className="relative w-full py-32 overflow-hidden font-sans"
      style={{ 
        backgroundColor: '#0B0B14',
        fontFamily: "'Tajawal', system-ui, sans-serif" 
      }} 
    >
      <style>
        {`
          .glass-card {
            background: rgba(255, 255, 255, 0.02);
            border: 1px solid rgba(255, 255, 255, 0.05);
            backdrop-filter: blur(12px);
            -webkit-backdrop-filter: blur(12px);
          }
          .glass-card:hover {
            background: rgba(255, 255, 255, 0.04);
            border: 1px solid rgba(124, 58, 237, 0.3);
            box-shadow: 0 20px 40px -10px rgba(124, 58, 237, 0.15);
          }
          .icon-wrapper {
            position: relative;
          }
          .icon-wrapper::after {
            content: '';
            position: absolute;
            inset: 0;
            border-radius: 50%;
            background: inherit;
            filter: blur(15px);
            opacity: 0.5;
            z-index: -1;
            transition: all 0.3s ease;
          }
          .glass-card:hover .icon-wrapper::after {
            opacity: 0.8;
            filter: blur(20px);
            transform: scale(1.2);
          }
        `}
      </style>

      <div 
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          background: 'radial-gradient(circle at 70% 40%, rgba(124,58,237,0.25), transparent 60%)'
        }}
      />

      {/* <div 
      className="absolute inset-0 z-0 pointer-events-none"
      style={{
        background: 'linear-gradient(135deg, rgba(124,58,237,0.22) 0%, rgba(124,58,237,0.07) 100%)'
      }}
    /> */}
      {/* <div 
        className="absolute top-0 right-0 w-64 h-64 z-0 pointer-events-none rounded-full"
        style={{
          boxShadow: '0 0 200px rgba(124,58,237,0.15)'
        }}
      /> */}

      {/* Ambient Background Elements */}
      <div 
        className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[1000px] h-[500px] pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at top, rgba(124,58,237,0.15) 0%, transparent 70%)'
        }}
      />
      <div 
        className="absolute bottom-0 right-0 w-[600px] h-[600px] pointer-events-none rounded-full blur-[120px]"
        style={{
          background: 'rgba(41,89,223,0.08)'
        }}
      />
      <div className="container mx-auto px-6 lg:px-10 relative z-10">
        
        {/* Header Section */}
        <div ref={headerAnim.ref} className={`max-w-3xl mx-auto text-center mb-20 ${headerAnim.className}`}>
          {/* Badge */}
          <div 
            className="inline-flex items-center justify-center px-4 py-1.5 rounded-full backdrop-blur-sm mb-8"
            style={{
              border: '1px solid rgba(255,255,255,0.08)',
              background: 'rgba(255,255,255,0.03)'
            }}
          >
            <span className="w-2 h-2 rounded-full mr-2 ml-2 animate-pulse" style={{ backgroundColor: '#2959DF' }} />
            <span className="text-sm font-semibold tracking-wider" style={{ color: '#EAEAF0' }}>خدماتنا</span>
          </div>
          {/* Title */}
          <h2 
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
            style={{ color: '#ffffff' }}
          >
            نقدم لك حلول رقمية تصنع <br className="hidden sm:block"/>
            <span 
              className="inline-block mt-2"
              style={{
                backgroundImage: 'linear-gradient(to left, #7C3AED, #2959DF)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              الفارق الحقيقي
            </span>
          </h2>
          {/* Subtitle */}
          <p 
            className="text-lg md:text-xl leading-relaxed max-w-2xl mx-auto"
            style={{ color: '#A1A1B3' }}
          >
            نصمم ونطور منتجات رقمية متكاملة تساعدك على النمو وتمنحك حضورًا قويًا وموثوقًا في العالم الرقمي.
          </p>
        </div>
        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {cards.map((card, idx) => (
            <div 
              key={idx}
              ref={card.anim.ref}
              className={`glass-card group relative p-8 rounded-3xl transition-all duration-500 hover:-translate-y-2 hover:scale-[1.02] flex flex-col h-full ${card.anim.className}`}
            >
              {/* Subtle top border glow */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-[1px] opacity-0 group-hover:opacity-100 transition-opacity duration-500" 
                style={{ background: 'linear-gradient(90deg, transparent, #7C3AED, transparent)' }} 
              />
              {/* Icon */}
              <div className={`icon-wrapper w-14 h-14 rounded-2xl mb-8 flex items-center justify-center bg-gradient-to-br ${card.gradient}`}>
                <card.icon className="text-white w-6 h-6" />
              </div>
              {/* Content */}
              <h3 className="text-2xl font-bold mb-4 text-white group-hover:bg-clip-text transition-all duration-300"

              >
                {card.title}
              </h3>
              
              <p className="text-[#A1A1B3] leading-relaxed mb-8 flex-grow">
                {card.description}
              </p>
              {/* CTA Link */}
              <div className="mt-auto flex cursor-pointer items-center gap-2 text-sm font-bold opacity-70 group-hover:opacity-100 transition-opacity"
                style={{ color: '#7C3AED' }}
              >
                <span>اكتشف المزيد</span>
                <ArrowLeft size={16} className="transition-transform duration

-300 group-hover:-translate-x-2" />
</div>
</div>
))}
        </div>
  </div>
</section>

);
}