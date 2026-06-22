"use client"
import React, { useState, useEffect, useRef } from 'react';
import { ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
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
export default function WhyNeedWebsite() {
  const headerAnim = useFadeIn(0);
  const [openIndex, setOpenIndex] = useState(0);
  const cards = [
    {
      title: "ثقة أكبر لدى العملاء",
      content: "الموقع الإلكتروني يعكس مدى جدية و احترافية مشروعك، يبني جسر الثقة بينك و بين عملائك "
    },
    {
      title: "عرض خدماتك بشكل احترافي",
      content: "هو الواجهة الرئيسية التي تعكس صوره مشروعك و جوده ما تقدمه من خدمات"
    },
    {
      title: "بناء علامة تجارية قوية",
      content: "امتلاك موقع إلكتروني يمنح مشروعك هوية رقمية مستقلة تعزز حضورك وتجعلك أكثر تميزاً عن منافسيك."
    }
    // {
    //   title: "الظهور في نتائج البحث",
    //   content: "عندما يبحث العملاء عن خدماتك أو منتجاتك عبر Google، يساعد الموقع الإلكتروني في ظهور مشروعك أمام المهتمين بخدماتك."
    // },
    // {
    //   title: "متاح لعملائك على مدار الساعة",
    //   content: "يبقى موقعك متاحاً للعملاء في أي وقت ومن أي مكان، مما يضمن استمرار وصول العملاء إلى خدماتك."
    // },
    // {
    //   title: "زيادة فرص المبيعات",
    //   content: "يساعد الموقع الإلكتروني في تحويل الزوار إلى عملاء من خلال عرض حلولك بطريقة مقنعة وسهلة."
    // },
  ];
  return (
    <section 
      dir="rtl"
      className="relative w-full py-32 overflow-hidden font-sans"
      style={{ 
        backgroundColor: '#0B0B14',
        fontFamily: "'Tajawal', system-ui, sans-serif" 
      }}
    >
    {/* <div 
      className="absolute inset-0 z-0 pointer-events-none"
      style={{
        background: 'linear-gradient(135deg, rgba(124,58,237,0.22) 0%, rgba(124,58,237,0.07) 100%)'
      }}
    /> */}
      
      <style>
        {`
          .accordion-card {
            background: rgba(255, 255, 255, 0.03);
            border: 1px solid rgba(255, 255, 255, 0.08);
            backdrop-filter: blur(16px);
            -webkit-backdrop-filter: blur(16px);
            transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          }
          .accordion-card:hover {
             border-color: rgba(124, 58, 237, 0.4);
             transform: translateY(-3px);
             box-shadow: 0 10px 30px -10px rgba(124, 58, 237, 0.15);
          }
          .accordion-card.active {
             border-color: rgba(124, 58, 237, 0.6);
             background: rgba(124, 58, 237, 0.05);
          }
        `}
      </style>
      {/* Ambient Radial Glows */}
      <div 
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          background: `
            radial-gradient(circle at 30% 20%, rgba(124,58,237,0.12), transparent 60%),
            radial-gradient(circle at 80% 80%, rgba(41,89,223,0.10), transparent 60%)
          `
        }}
      />
      
      <div className="container mx-auto px-6 lg:px-10 relative z-10 max-w-5xl">
        
        {/* Header Section */}
        <div ref={headerAnim.ref} className={`flex flex-col items-center text-center mb-20 ${headerAnim.className}`}>
           {/* Badge */}
           <div 
              className="inline-flex w-fit items-center justify-center px-4 py-1.5 rounded-full backdrop-blur-sm mb-6"
              style={{
                border: '1px solid rgba(255,255,255,0.08)',
                background: 'rgba(255,255,255,0.03)'
              }}
            >
              <span className="w-2 h-2 rounded-full mr-2 ml-2 animate-pulse" style={{ backgroundColor: '#2959DF' }} />
              <span className="text-sm font-semibold tracking-wider" style={{ color: '#EAEAF0' }}>الحضور الرقمي</span>
            </div>
          <h2 
            className="text-3xl md:text-5xl lg:text-6xl font-bold mb-8 leading-tight"
            style={{
              background: 'linear-gradient(90deg, #7C3AED, #2959DF)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}
          >
            لماذا أصبح الموقع الإلكتروني ضرورة لكل مشروع ناجح؟
          </h2>
          
          <p className="text-lg md:text-xl text-[#A1A1B3] max-w-3xl leading-relaxed">
            اليوم يبحث العملاء عنك عبر الإنترنت قبل أي شيء آخر. امتلاك موقع إلكتروني احترافي لا يمنحك مجرد حضور رقمي، بل يساعدك على بناء الثقة، جذب العملاء، وزيادة فرص النمو بشكل مستمر.
          </p>
        </div>
        {/* Accordion Cards List */}
        <div className="flex flex-col gap-4">
          {cards.map((card, idx) => {
            const isActive = openIndex === idx;
            return (
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                key={idx} 
                className={`accordion-card rounded-2xl overflow-hidden cursor-pointer ${isActive ? 'active' : ''}`}
                onClick={() => setOpenIndex(isActive ? -1 : idx)}
              >
                {/* Card Header */}
                <div className="flex items-center justify-between p-6 md:p-8">
                   <h3 className="text-[18px] md:text-xl font-bold text-white pr-4 border-r-4 border-transparent transition-all" style={{ borderRightColor: isActive ? '#7C3AED' : 'transparent' }}>
                      {card.title}
                   </h3>
                   <div 
                      className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300"
                      style={{ 
                          background: isActive ? 'rgba(124, 58, 237, 0.2)' : 'rgba(255, 255, 255, 0.05)',
                          color: isActive ? '#7C3AED' : '#A1A1B3'
                      }}
                   >
                     <ChevronDown 
                        size={20} 
                        className={`transition-transform duration-300 ${isActive ? 'rotate-180' : 'rotate-0'}`} 
                     />
                   </div>
                </div>
                {/* Card Content (Animated) */}
                <AnimatePresence initial={false}>
                  {isActive && (
                    <motion.div
                      initial="collapsed"
                      animate="open"
                      exit="collapsed"
                      variants={{
                        open: { opacity: 1, height: "auto", marginBottom: 24 },
                        collapsed: { opacity: 0, height: 0, marginBottom: 0 }
                      }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <div className="px-6 md:px-8 pb-4">
                        <p className="text-[#A1A1B3] text-lg leading-relaxed md:pr-4">
                           {card.content}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>

)
})}
</div>

  </div>
</section>

);
}