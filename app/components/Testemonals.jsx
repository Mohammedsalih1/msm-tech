"use client"
import React, { useState, useEffect, useRef } from 'react';
import { Star, Quote, ArrowLeft, Building2 } from 'lucide-react';
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
export default function TrustAndTestimonials() {
  const header1Anim = useFadeIn(0);
  const logosAnim = useFadeIn(200);
  const header2Anim = useFadeIn(400);
  const ctaAnim = useFadeIn(600);
  const testimonials = [
    {
      company: "د. محمد",
      service: "عيادة عثمان دقنة",
      text: "سعيد جداً بالتعامل مع فريق MSM Tech. شغل احترافي ماشاء الله تبارك الله، وكانت النتيجة النهائية أفضل مما توقعنا. مشكورين على الالتزام وجودة العمل",
      anim: useFadeIn(400),
    },
    {
      company: "محمد علي",
      service: "شريك مؤسس Fitness Day",
      text: " التصميم كان احترافي ويعرض خدمات الصالة بصورة مميزة وواضحة، والأفكار التي اقترحها الفريق أضافت قيمة حقيقية للمشروع. نتمنى لكم المزيد من النجاح والتوفيق.",
      anim: useFadeIn(600)
    },
    {
      company: "عُلا الشيخ",
      service: "العُلا للاعلان والتصميم",
      text: "مبسوطة جداً من النتيجة، والشغل كان أكثر من رائع. الاحترافية والتعامل الراقي خلوني مرتاحة طوال فترة المشروع، والنتيجة النهائية فاقت توقعاتي. شكراً لفريق MSM Tech، وربنا يوفقكم ويبارك في مجهودكم.",
      anim: useFadeIn(800)
    }
  ];
  // const partners = [
  //   { name: "LOGO_1", id: 1 },
  //   { name: "LOGO_2", id: 2 },
  //   { name: "LOGO_3", id: 3 },
  // ];
  return (
    <section 
      dir="rtl"
      className="relative w-full py-3 overflow-hidden font-sans"
      style={{ 
        backgroundColor: '#0B0B14',
        fontFamily: "'Tajawal', system-ui, sans-serif" 
      }}
    >
      <div 
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          background: 'radial-gradient(circle at 70% 40%, rgba(124,58,237,0.25), transparent 60%)'
        }}
      />
      <style>
        {`
          .glass-card {
            background: rgba(255, 255, 255, 0.03);
            border: 1px solid rgba(255, 255, 255, 0.08);
            backdrop-filter: blur(16px);
            -webkit-backdrop-filter: blur(16px);
            transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          }
          .logo-card:hover {
            border-color: rgba(124, 58, 237, 0.4);
            background: rgba(124, 58, 237, 0.05);
            transform: translateY(-5px);
            box-shadow: 0 10px 30px -10px rgba(124, 58, 237, 0.15);
          }
          .logo-card .logo-content {
             filter: grayscale(100%);
             opacity: 0.6;
             transition: all 0.4s ease;
          }
          .logo-card:hover .logo-content {
             filter: grayscale(0%);
             opacity: 1;
             color: #7C3AED;
          }
          .testimonial-card:hover {
            border-color: rgba(41, 89, 223, 0.4);
            transform: translateY(-8px);
            box-shadow: 0 15px 40px -10px rgba(41, 89, 223, 0.15);
          }
          @keyframes gradient-x {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
          }
          
          .btn-gradient {
            background: linear-gradient(90deg, #7C3AED, #2959DF, #241274, #7C3AED);
            background-size: 300% 100%;
            transition: all 0.3s ease;
          }
          
          .btn-gradient:hover {
            animation: gradient-x 3s linear infinite;
            box-shadow: 0 0 30px rgba(124, 58, 237, 0.4);
            transform: scale(1.02);
          }
          .gradient-text {
             background: linear-gradient(90deg, #7C3AED, #2959DF);
             -webkit-background-clip: text;
             -webkit-text-fill-color: transparent;
          }
          
          .cta-card {
             background: linear-gradient(135deg, rgba(255,255,255,0.03) 0%, rgba(124,58,237,0.05) 100%);
             border: 1px solid rgba(255,255,255,0.1);
             box-shadow: 0 0 40px -10px rgba(124,58,237,0.2);
          }
        `}
      </style>
      {/* Ambient Radial Glows */}
      <div 
        className="absolute top-0 right-0 w-[600px] h-[600px] pointer-events-none rounded-full blur-[150px] opacity-20"
        style={{ background: 'rgba(41,89,223,0.3)' }}
      />
      <div 
        className="absolute bottom-0 left-0 w-[800px] h-[800px] pointer-events-none rounded-full blur-[200px] opacity-20"
        style={{ background: 'rgba(124,58,237,0.2)' }}
      />
      <div className="container mx-auto px-6 lg:px-10 relative z-10">
        
        {/* --- PART 1: TRUSTED BY --- */}
        <div className="mb-32">
          {/* Header */}
          {/* <div ref={header1Anim.ref} className={`flex flex-col items-center text-center mb-16 ${header1Anim.className}`}>
             <div 
                className="inline-flex w-fit items-center justify-center px-4 py-1.5 rounded-full backdrop-blur-sm mb-6"
                style={{
                  border: '1px solid rgba(255,255,255,0.08)',
                  background: 'rgba(255,255,255,0.03)'
                }}
              >
                <span className="w-2 h-2 rounded-full mr-2 ml-2 animate-pulse" style={{ backgroundColor: '#7C3AED' }} />
                <span className="text-sm font-semibold tracking-wider text-[#EAEAF0]">شركاء النجاح</span>
              </div>
            <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight text-white">
               الجهات التي وثقت بنا
            </h2>
            
            <p className="text-lg text-[#A1A1B3] max-w-2xl leading-relaxed">
               نفخر ببناء شراكات طويلة الأمد مع عملائنا من خلال تقديم حلول رقمية احترافية تساهم في نمو أعمالهم وتعزيز حضورهم الرقمي.
            </p>
          </div> */}
          {/* Logos Grid */}
          {/* <div ref={logosAnim.ref} className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto ${logosAnim.className}`}>
             {partners.map(partner => (
                <div key={partner.id} className="glass-card logo-card rounded-2xl h-32 flex items-center justify-center">
                   <h3 className="logo-content text-2xl font-black tracking-widest text-[#EAEAF0]">
                      {partner.name}
                   </h3>
                </div>
             ))}
          </div> */}
        </div>
        {/* --- PART 2: TESTIMONIALS --- */}
        <div className="mb-32">
           {/* Header */}
          <div ref={header2Anim.ref} className={`flex flex-col items-center text-center mb-16 ${header2Anim.className}`}>
             <div 
                className="inline-flex w-fit items-center justify-center px-4 py-1.5 rounded-full backdrop-blur-sm mb-6"
                style={{
                  border: '1px solid rgba(255,255,255,0.08)',
                  background: 'rgba(255,255,255,0.03)'
                }}
              >
                <span className="w-2 h-2 rounded-full mr-2 ml-2 animate-pulse" style={{ backgroundColor: '#2959DF' }} />
                <span className="text-sm font-semibold tracking-wider text-[#EAEAF0]">آراء العملاء</span>
              </div>
            <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight text-white">
               ماذا يقول عملاؤنا؟
            </h2>
            
            <p className="text-lg text-[#A1A1B3] max-w-2xl leading-relaxed">
               ثقة عملائنا هي أكبر إنجازاتنا، ونجاح مشاريعهم هو المعيار الحقيقي الذي نقيس به جودة أعمالنا.
            </p>
          </div>
          {/* Testimonials Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
             {testimonials.map((testimonial, idx) => (
               <div key={idx} ref={testimonial.anim.ref} className={`glass-card testimonial-card rounded-3xl p-8 flex flex-col h-full ${testimonial.anim.className}`}>
                 
                 {/* Top Row: Logo Placeholder & Stars */}
                 <div className="flex items-center justify-between mb-8 pb-6 border-b border-white/5">
                    <div className="flex items-center gap-3">
                       <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center">
                          <Building2 size={20} className="text-[#A1A1B3]" />
                       </div>
                       <div className="flex flex-col">
                          <span className="font-bold text-white text-lg">{testimonial.company}</span>
                          <span className="text-xs text-[#7C3AED] font-medium">{testimonial.service}</span>
                       </div>
                    </div>
                    <div className="flex gap-1">
                       {[...Array(5)].map((_, i) => (
                         <Star key={i} size={16} fill="#7C3AED" className="text-[#7C3AED]" />
                       ))}
                    </div>
                 </div>
                 {/* Middle: Quote Icon & Text */}
                 <div className="flex-grow flex flex-col relative">
                    <Quote size={40} className="absolute -top-4 -right-2 opacity-10 rotate-180" style={{ color: '#2959DF' }} />
                    <p className="text-[#A1A1B3] text-lg leading-relaxed z-10 relative mt-2">
                       "{testimonial.text}"
                    </p>
                 </div>
               </div>
             ))}
          </div>
        </div>
        {/* --- SECTION CTA --- */}
        {/* <div ref={ctaAnim.ref} className={`cta-card rounded-[2.5rem] p-10 md:p-16 text-center max-w-4xl mx-auto relative overflow-hidden ${ctaAnim.className}`}>
           <div className="absolute inset-0 bg-gradient-to-r from-[#7C3AED]/10 to-[#2959DF]/10 opacity-50 blur-3xl pointer-events-none" />
           
           <div className="relative z-10 flex flex-col items-center">
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
                 هل أنت مستعد لتكون <br className="hidden md:block"/>
                 <span className="gradient-text">قصة النجاح القادمة؟</span>
              </h2>
              <p className="text-[#A1A1B3] text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
                 دعنا نساعدك في بناء حضور رقمي احترافي يعكس قيمة مشروعك ويمنح علامتك التجارية المكانة التي تستحقها.
              </p>
              
              <button className="btn-gradient px-10 py-5 rounded-full text-white font-bold text-lg flex items-center justify-center gap-3 group">
                 <span>احجز استشارة مجانية</span>
                 <ArrowLeft size={20} className="transition-transform group-hover:-translate-x-2" />
              </button>
           </div>
        </div> */}
      </div>
    </section>
  );
}