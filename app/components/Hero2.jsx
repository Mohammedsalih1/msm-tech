import React, { useState, useEffect } from 'react';
import { Facebook, Instagram, Twitter, Linkedin, ArrowLeft, BarChart3, ShieldCheck } from 'lucide-react';
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
      className="relative w-full min-h-screen pt-20 md:pt-30 overflow-hidden flex items-center justify-center font-sans"
      style={{ 
        backgroundColor: '#0B0B14',
        fontFamily: "'Tajawal', system-ui, sans-serif" 
      }}
    >
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Tajawal:wght@400;500;700;800;900&display=swap');
          
          @keyframes float-slow {
            0% { transform: translateY(0px); }
            50% { transform: translateY(-10px); }
            100% { transform: translateY(0px); }
          }
          @keyframes float-fast {
            0% { transform: translateY(0px); }
            50% { transform: translateY(-15px); }
            100% { transform: translateY(0px); }
          }
          @keyframes pulse-glow {
            0% { opacity: 0.4; transform: scale(1); }
            50% { opacity: 0.6; transform: scale(1.05); }
            100% { opacity: 0.4; transform: scale(1); }
          }
          @keyframes gradient-x {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
          }
          
          .animate-float-slow { animation: float-slow 7s ease-in-out infinite; }
          .animate-float-fast { animation: float-fast 5s ease-in-out infinite; }
          .animate-pulse-glow { animation: pulse-glow 4s ease-in-out infinite; }
          .animate-gradient-x { animation: gradient-x 3s linear infinite; background-size: 200% 200%; }
          
          /* Subtle grid pattern */
          .bg-grid-pattern {
            background-image: 
              linear-gradient(to right, rgba(255,255,255,0.03) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(255,255,255,0.03) 1px, transparent 1px);
            background-size: 40px 40px;
          }
        `}
      </style>
      {/* Enhanced Background with Grid and Glows */}
      <div className="absolute inset-0 z-0 bg-grid-pattern opacity-30 pointer-events-none" />
      
      <div 
        className="absolute inset-0 z-0 pointer-events-none mix-blend-screen"
        style={{
          background: 'radial-gradient(circle at 80% 20%, rgba(124,58,237,0.15), transparent 50%), radial-gradient(circle at 20% 80%, rgba(41,89,223,0.15), transparent 50%)'
        }}
      />
      
      {/* Decorative ambient light */}
      <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] rounded-full animate-pulse-glow z-0 pointer-events-none filter blur-[120px]" style={{ background: 'rgba(124,58,237,0.08)' }} />
      <div className="absolute bottom-1/4 left-1/4 w-[600px] h-[600px] rounded-full animate-pulse-glow z-0 pointer-events-none filter blur-[150px]" style={{ background: 'rgba(41,89,223,0.08)', animationDelay: '2s' }} />
      {/* Fixed Side Social Icons (Desktop) */}
      <div className="hidden lg:flex flex-col absolute right-8 top-1/2 -translate-y-1/2 gap-6 z-40">
        <div className="w-[1px] h-12 bg-gradient-to-b from-transparent to-white/20 mx-auto mb-2" />
        {[Facebook, Instagram, Twitter, Linkedin].map((Icon, idx) => (
          <a 
            key={idx} 
            href="#" 
            className="transition-all duration-300 transform hover:scale-125 hover:-translate-x-1"
            style={{ color: 'rgba(255,255,255,0.4)' }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = idx % 2 === 0 ? '#7C3AED' : '#2959DF';
              e.currentTarget.style.filter = 'drop-shadow(0 0 8px rgba(124,58,237,0.5))';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = 'rgba(255,255,255,0.4)';
              e.currentTarget.style.filter = 'none';
            }}
          >
            <Icon strokeWidth={1.5} size={22} />
          </a>
        ))}
        <div className="w-[1px] h-12 bg-gradient-to-t from-transparent to-white/20 mx-auto mt-2" />
      </div>
      <div className="container mx-auto px-6 lg:px-16 relative z-10 py-12 lg:py-0 min-h-[80vh] flex items-center">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center w-full">
          
          {/* Text Content (Right Side - 7 cols) */}
          <div className="lg:col-span-7 flex flex-col items-start text-right space-y-8 lg:pr-10">
            
            {/* Premium Badge */}
            <div 
              className={`inline-flex items-center gap-2 px-4 py-2 rounded-full backdrop-blur-md transition-all duration-1000 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{
                border: '1px solid rgba(255,255,255,0.1)',
                background: 'linear-gradient(90deg, rgba(255,255,255,0.05), rgba(255,255,255,0.01))',
                boxShadow: '0 4px 20px rgba(0,0,0,0.2), inset 0 0 0 1px rgba(124,58,237,0.2)'
              }}
            >
              <div className="w-2 h-2 rounded-full bg-[#7C3AED] animate-pulse" />
              <span className="text-sm font-semibold tracking-wide" style={{ color: '#EAEAF0' }}>حلول برمجية للمؤسسات</span>
            </div>
            {/* Main Heading */}
            <h1 
              className={`w-full text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black leading-[1.1] transition-all duration-1000 delay-100 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{ color: '#ffffff', textShadow: '0 10px 30px rgba(0,0,0,0.5)' }}
            >
              <span className="block mb-2 sm:mb-4">دعنا نخبر العالم عنك</span>
              <span className="block mb-2 sm:mb-4 text-3xl sm:text-4xl lg:text-5xl xl:text-6xl text-[#A1A1B3] font-bold">
                بطريقة تليق بـ <span 
                className="inline-block transition-all duration-500 transform relative"
                style={{
                  opacity: wordVisible ? 1 : 0,
                  transform: `translateY(${wordVisible ? '0' : '15px'})`,
                  filter: wordVisible ? 'blur(0px)' : 'blur(4px)'
                }}
              >
                <span 
                  style={{
                    backgroundImage: 'linear-gradient(to left, #7C3AED, #2959DF, #4F46E5)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                    color: 'transparent',
                  }}
                >
                  {words[currentWordIndex]}
                </span>
                {/* Glow under word */}
                <span className="absolute -bottom-2 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#7C3AED] to-transparent opacity-50 blur-[2px]" />
              </span> </span>
            </h1>
            {/* Subheading */}
            <p 
              className={`text-lg sm:text-xl lg:text-[1.1rem] leading-[1.8] max-w-[600px] transition-all duration-1000 delay-200 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{ color: '#9CA3AF', fontWeight: '500' }}
            >
              في <strong className="text-white font-bold">MSM Tech</strong> لا نبني مجرد مواقع إلكترونية، بل نصنع تجارب رقمية متكاملة تعكس قوة هويتك وتعزز مكانتك في السوق. ندمج الابتكار مع الهندسة الدقيقة لنضعك في طليعة التطور الرقمي.
            </p>
            {/* CTA and Trust Elements Container */}
            <div className={`pt-2 w-full transition-all duration-1000 delay-300 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 mb-10">
                {/* Premium CTA Button */}
                <button
                  className="group relative overflow-hidden px-8 py-4 rounded-full text-base font-bold text-white transition-all duration-300 hover:scale-[1.02] shadow-[0_0_40px_rgba(124,58,237,0.3)] hover:shadow-[0_0_60px_rgba(41,89,223,0.5)] cursor-pointer"
                  style={{
                    background: "linear-gradient(90deg, #11111a, #0B0B14)",
                    border: "1px solid rgba(124,58,237,0.5)",
                  }}
                >
                  {/* Animated Gradient Background */}
                  <span
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-gradient-x"
                    style={{
                      background: "linear-gradient(90deg, #7C3AED, #2959DF, #7C3AED)",
                    }}
                  />
                  
                  {/* Button Content */}
                  <span className="relative z-10 flex items-center gap-3">
                    ابدأ مشروعك الآن
                    <ArrowLeft 
                      size={18} 
                      className="transition-transform duration-300 group-hover:-translate-x-1.5" 
                    />
                  </span>
                </button>
                <div className="flex items-center gap-3 text-sm font-medium text-[#A1A1B3]">
                  <div className="flex -space-x-2 space-x-reverse">
                    {[1, 2, 3, 4].map((i) => (
                      <div key={i} className="w-8 h-8 rounded-full border-2 border-[#0B0B14] bg-gradient-to-br from-gray-700 to-gray-900 flex items-center justify-center text-[10px] overflow-hidden">
                        <div className="w-full h-full bg-white/10 backdrop-blur-sm" />
                      </div>
                    ))}
                  </div>
                  <div className="flex flex-col">
                    <div className="flex text-[#F59E0B] text-xs mb-0.5">
                      ★★★★★
                    </div>
                    <span>موثوق من <span className="text-white font-bold">50+</span> عميل</span>
                  </div>
                </div>
              </div>
              {/* Trust Badges */}
              <div className="grid grid-cols-3 gap-4 pt-8 border-t border-white/5">
                {[
                  { value: '+20', label: 'مشروع مكتمل' },
                  { value: '98%', label: 'رضا العملاء' },
                  { value: '+3', label: 'سنوات خبرة' },
                ].map((stat, i) => (
                  <div key={i} className="flex flex-col">
                    <span className="text-2xl font-black" style={{ 
                      backgroundImage: 'linear-gradient(to left, #fff, #9CA3AF)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                    }}>{stat.value}</span>
                    <span className="text-xs text-[#9CA3AF] font-medium">{stat.label}</span>
                  </div>
                ))}
              </div>
              
            </div>
            {/* Mobile Social Icons */}
            <div className="lg:hidden flex gap-6 mt-8 w-full">
              {[Facebook, Instagram, Twitter, Linkedin].map((Icon, idx) => (
                <a 
                  key={idx} 
                  href="#" 
                  className="transition-all duration-300 transform hover:scale-110"
                  style={{ color: 'rgba(255,255,255,0.4)' }}
                  onMouseEnter={(e) => e.currentTarget.style.color = idx % 2 === 0 ? '#7C3AED' : '#2959DF'}
                  onMouseLeave={(e) => e.currentTarget.style.color = 'rgba(255,255,255,0.4)'}
                >
                  <Icon strokeWidth={1.5} size={20} />
                </a>
              ))}
            </div>
            
          </div>
          {/* Visual Composition (Left Side - 5 cols) */}
          <div 
            className={`lg:col-span-5 relative mt-16 lg:mt-0 transition-all duration-1000 delay-500 transform ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'}`}
          >
            <div className="relative w-full aspect-square max-w-[500px] mx-auto">
              
              {/* Central Glow */}
              <div className="absolute inset-0 bg-gradient-to-tr from-[#7C3AED] to-[#2959DF] rounded-full blur-[80px] opacity-20 animate-pulse-glow" />
              
              {/* Main Abstract Shape */}
              <div className="absolute inset-4 rounded-full border border-white/10 bg-white/[0.02] backdrop-blur-3xl overflow-hidden shadow-2xl animate-float-slow flex items-center justify-center">
                <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent" />
                
                {/* Simulated interface inside the circle */}
                <div className="w-[80%] h-[60%] flex flex-col gap-4 relative z-10 opacity-60">
                   <div className="w-1/2 h-2 bg-gradient-to-r from-[#7C3AED] to-transparent rounded-full" />
                   <div className="w-3/4 h-2 bg-white/10 rounded-full" />
                   <div className="w-full h-24 bg-gradient-to-br from-white/5 to-transparent rounded-xl border border-white/5 mt-4" />
                </div>
              </div>
              {/* Floating UI Card 1: Code Snippet */}
              <div className="absolute top-[10%] -right-[10%] w-[240px] rounded-xl p-4 animate-float-fast backdrop-blur-xl shadow-[0_20px_40px_rgba(0,0,0,0.4)]"
                style={{ 
                  background: 'rgba(20, 20, 30, 0.7)',
                  border: '1px solid rgba(255,255,255,0.08)',
                  animationDelay: '0.5s'
                }}>
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#EF4444]" />
                  <div className="w-2.5 h-2.5 rounded-full bg-[#F59E0B]" />
                  <div className="w-2.5 h-2.5 rounded-full bg-[#10B981]" />
                </div>
                <div className="font-mono text-[10px] text-[#A1A1B3] leading-relaxed" dir="ltr">
                  <span className="text-[#7C3AED]">const</span> <span className="text-[#2959DF]">buildFuture</span> = <span className="text-[#7C3AED]">async</span> () {'{'} <br/>
                  &nbsp;&nbsp;<span className="text-[#7C3AED]">await</span> MSM.deploy({'{'}<br/>
                  &nbsp;&nbsp;&nbsp;&nbsp;quality: <span className="text-[#10B981]">'premium'</span>,<br/>
                  &nbsp;&nbsp;&nbsp;&nbsp;performance: <span className="text-[#F59E0B]">100</span><br/>
                  &nbsp;&nbsp;{'}'});<br/>
                  {'}'}
                </div>
              </div>
              {/* Floating UI Card 2: Analytics */}
              <div className="absolute bottom-[20%] -left-[5%] w-[200px] rounded-xl p-4 animate-float-slow backdrop-blur-xl shadow-[0_20px_40px_rgba(0,0,0,0.4)] flex items-center gap-4"
                style={{ 
                  background: 'rgba(255,255,255,0.03)',
                  border: '1px solid rgba(255,255,255,0.08)',
                  animationDelay: '1.5s'
                }}>
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#2959DF] to-[#7C3AED] flex items-center justify-center shadow-lg">
                  <BarChart3 size={18} className="text-white" />
                </div>
                <div>
                  <div className="text-[#9CA3AF] text-xs font-medium mb-1">نمو الأداء</div>
                  <div className="text-white text-lg font-bold">+124%</div>
                </div>
              </div>
              {/* Floating UI Card 3: Security */}
              <div className="absolute -bottom-[5%] right-[15%] w-[180px] rounded-xl p-3 animate-float-fast backdrop-blur-xl shadow-[0_20px_40px_rgba(0,0,0,0.4)] flex items-center gap-3"
                style={{ 
                  background: 'rgba(11, 11, 20, 0.8)',
                  border: '1px solid rgba(16, 185, 129, 0.2)',
                  animationDelay: '2.5s'
                }}>
                <ShieldCheck size={20} className="text-[#10B981]" />
                <span className="text-white text-sm font-medium">أمان عالي المستوى</span>
              </div>
              
              {/* Abstract decorative rings */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] rounded-full border border-dashed border-white/5 animate-[spin_60s_linear_infinite] pointer-events-none" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140

%] h-[140%] rounded-full border border-white/5 animate-[spin_40s_linear_infinite_reverse] pointer-events-none" />

        </div>
      </div>
    </div>
  </div>
</section>

);
}