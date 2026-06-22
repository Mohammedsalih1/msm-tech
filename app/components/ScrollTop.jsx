"use client"
import { useEffect, useState } from 'react';
import { ArrowUp } from 'lucide-react';

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      // 1. حساب المسافة الممررة والارتفاع الكلي المتبقي للموقع
      const scrollTop = window.scrollY;
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;

      // 2. إظهار السهم فقط بعد النزول لمسافة 300 بكسل لحماية جمالية الواجهة الأولى
      if (scrollTop > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }

      // 3. حساب نسبة التقدم بدقة (من 0 إلى 100)
      if (totalHeight > 0) {
        const scrollPercent = (scrollTop / totalHeight) * 100;
        setProgress(scrollPercent);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // دالة الصعود لأعلى الموقع بنعومة (Smooth Scroll)
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  // الحسابات الرياضية للدائرة السحرية
  const radius = 20; // نصف قطر الدائرة
  const circumference = 2 * Math.PI * radius; // محيط الدائرة بالكامل ويساوي تقريباً 125.6
  const strokeDashoffset = circumference - (progress / 100) * circumference;

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-8 cursor-pointer right-8 z-50 flex items-center justify-center w-12 h-12 rounded-full bg-[#0b071e]/80 border border-white/10 text-white shadow-lg backdrop-blur-md transition-all duration-500 transform
        ${isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-6 scale-75 pointer-events-none'}
        hover:scale-110 hover:border-[#7C3AED]/50 active:scale-95 group`}
      aria-label="Back to top"
    >
      {/* الدائرة التي تحسب التقدم */}
      <svg className="absolute top-0 left-0 w-full h-full -rotate-90" viewBox="0 0 48 48">
        {/* الدائرة الخلفية الرمادية الباهتة (المسار الخفي) */}
        <circle
          cx="24"
          cy="24"
          r={radius}
          className="stroke-white/[0.05]"
          strokeWidth="2.5"
          fill="transparent"
        />
        {/* الدائرة الملونة المتحركة (البنفسجية المضيئة المربوطة بالـ Scroll) */}
        <circle
          cx="24"
          cy="24"
          r={radius}
          className="stroke-[#7C3AED] transition-all duration-100"
          strokeWidth="2.5"
          fill="transparent"
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          strokeLinecap="round"
        />
      </svg>

      {/* السهم المتواجد في المنتصف - مع تأثير أنيميشن خفيف عند الـ Hover */}
      <ArrowUp size={20} className="relative z-10 transition-transform duration-300 group-hover:-translate-y-1 text-[#7C3AED]" />
    </button>
  );
}