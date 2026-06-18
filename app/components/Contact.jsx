"use client"
import React, { useState, useEffect, useRef } from 'react';
import { Send, MessageSquare, Mail, Phone, CheckCircle2, ArrowLeft } from 'lucide-react';
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
export default function ContactAndFooter() {
  const [formStatus, setFormStatus] = useState('idle'); // idle | submitting | success | error
  const contentAnim = useFadeIn(0);
  const formAnim = useFadeIn(200);
  const handleSubmit = (e) => {
    e.preventDefault();
    setFormStatus('submitting');
    
    // Using FormSubmit.co for simple email sending
    const form = e.target;
    const formData = new FormData(form);
    fetch("https://formsubmit.co/ajax/montysalih590@gmail.com", {
        method: "POST",
        headers: { 
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify(Object.fromEntries(formData))
    })
    .then(response => response.json())
    .then(data => {
        setFormStatus('success');
        form.reset();
        setTimeout(() => setFormStatus('idle'), 5000);
    })
    .catch(error => {
        console.error(error);
        setFormStatus('error');
        setTimeout(() => setFormStatus('idle'), 5000);
    });
  };
  const handleWhatsappClick = () => {
    window.open('https://wa.me/249111988544', '_blank');
  };
  return (
    <>
      <section 
        id="contact"
        dir="rtl"
        className="relative w-full py-32 overflow-hidden font-sans"
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
            .glass-form {
              background: rgba(255, 255, 255, 0.02);
              border: 1px solid rgba(255, 255, 255, 0.05);
              backdrop-filter: blur(16px);
              -webkit-backdrop-filter: blur(16px);
              transition: all 0.3s ease;
            }
            .glass-form:hover {
              border-color: rgba(124, 58, 237, 0.2);
            }
            .input-field {
              background: rgba(11, 11, 20, 0.5);
              border: 1px solid rgba(255, 255, 255, 0.08);
              color: #fff;
              transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
            }
            .input-field:focus {
              outline: none;
              border-color: #7C3AED;
              box-shadow: 0 0 20px rgba(124, 58, 237, 0.2);
              background: rgba(11, 11, 20, 0.8);
            }
            .input-field::placeholder {
              color: #6B7280;
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
            .btn-whatsapp {
              background: rgba(16, 185, 129, 0.1);
              border: 1px solid rgba(16, 185, 129, 0.3);
              color: #10B981;
              transition: all 0.3s ease;
            }
            .btn-whatsapp:hover {
              background: rgba(16, 185, 129, 0.2);
              box-shadow: 0 0 20px rgba(16, 185, 129, 0.3);
              transform: scale(1.02);
            }
            
            .trust-point {
              background: linear-gradient(90deg, rgba(124, 58, 237, 0.1), transparent);
            }
          `}
        </style>
        {/* Ambient Glows */}
        <div 
          className="absolute top-0 right-0 w-[600px] h-[600px] pointer-events-none rounded-full blur-[150px] opacity-30"
          style={{ background: 'rgba(124,58,237,0.25)' }}
        />
        <div 
          className="absolute bottom-0 left-0 w-[600px] h-[600px] pointer-events-none rounded-full blur-[150px] opacity-30"
          style={{ background: 'rgba(41,89,223,0.2)' }}
        />
        <div className="container mx-auto px-6 lg:px-10 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            
            {/* Right Side: Content */}
            <div ref={contentAnim.ref} className={`flex flex-col ${contentAnim.className}`}>
              {/* Badge */}
              <div 
                className="inline-flex w-fit items-center justify-center px-4 py-1.5 rounded-full backdrop-blur-sm mb-6"
                style={{
                  border: '1px solid rgba(255,255,255,0.08)',
                  background: 'rgba(255,255,255,0.03)'
                }}
              >
                <span className="w-2 h-2 rounded-full mr-2 ml-2 animate-pulse" style={{ backgroundColor: '#7C3AED' }} />
                <span className="text-sm font-semibold tracking-wider" style={{ color: '#EAEAF0' }}>تواصل معنا</span>
              </div>
              {/* Title */}
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-white">
              احصل على استشارة مجانية لمشروعك
              </h2>
              {/* Subtitle */}
              <p className="text-lg md:text-xl text-[#A1A1B3] leading-relaxed mb-10">
                دعنا نحول فكرتك إلى تجربة رقمية احترافية تعكس رؤيتك وتحقق أهدافك بنجاح وموثوقية.
              </p>
              {/* Trust Points */}
              <div className="flex flex-col gap-4 mb-12">
                {[
                  "استجابة خلال 24 ساعة",
                  "استشارة أولية مجانية",
                  "حلول مخصصة لاحتياجك"
                ].map((point, idx) => (
                  <div key={idx} className="trust-point flex items-center gap-3 p-3 rounded-xl border-r-2 border-[#7C3AED]">
                    <CheckCircle2 size={20} className="text-[#7C3AED]" />
                    <span className="text-white font-medium">{point}</span>
                  </div>
                ))}
              </div>
              {/* Contact Info */}
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-4 text-[#A1A1B3]">
                  <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center border border-white/10">
                    <Mail size={20} className="text-[#2959DF]" />
                  </div>
                  <span className="text-lg font-mono" dir="ltr">info@msm.technology</span>
                </div>
                <div className="flex items-center gap-4 text-[#A1A1B3]">
                  <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center border border-white/10">
                    <Phone size={20} className="text-[#2959DF]" />
                  </div>
                  <span className="text-lg font-mono" dir="ltr">+249111988544</span>
                </div>
              </div>
            </div>
            {/* Left Side: Form */}
            <div ref={formAnim.ref} className={`relative ${formAnim.className}`}>
              {/* Form Glow Underlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#7C3AED] to-[#2959DF] blur-[60px] opacity-10 rounded-[2rem]" />
              
              <div className="glass-form p-8 md:p-10 rounded-[2rem] relative z-10">
                <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                  {/* FormSubmit Configuration */}
                  <input type="hidden" name="_subject" value="رسالة جديدة من موقع MSM Tech!" />
                  <input type="hidden" name="_template" value="box" />
                  <input type="hidden" name="_captcha" value="false" />
                  {/* Name Input */}
                  <div className="flex flex-col gap-2">
                    <label htmlFor="name" className="text-sm font-medium text-[#EAEAF0] ml-1">الاسم</label>
                    <input 
                      type="text" 
                      name="name" 
                      id="name" 
                      required
                      placeholder="أدخل اسمك بالكامل"
                      className="input-field px-5 py-4 rounded-xl w-full"
                    />
                  </div>
                  {/* Email Input */}
                  <div className="flex flex-col gap-2">
                    <label htmlFor="email" className="text-sm font-medium text-[#EAEAF0] ml-1">البريد الإلكتروني</label>
                    <input 
                      type="email" 
                      name="email" 
                      id="email" 
                      required
                      placeholder="example@domain.com"
                      className="input-field px-5 py-4 rounded-xl w-full text-left"
                      dir="ltr"
                    />
                  </div>
                  {/* Message Input */}
                  <div className="flex flex-col gap-2">
                    <label htmlFor="message" className="text-sm font-medium text-[#EAEAF0] ml-1">وصف المشروع</label>
                    <textarea 
                      name="message" 
                      id="message" 
                      required
                      rows={4}
                      placeholder="حدثنا عن فكرتك أو مشروعك..."
                      className="input-field px-5 py-4 rounded-xl w-full resize-none"
                    />
                  </div>
                  {/* Status Messages */}
                  {formStatus === 'success' && (
                    <div className="p-4 bg-green-500/10 border border-green-500/20 text-green-400 rounded-xl text-center text-sm font-medium animate-in fade-in zoom-in duration-300">
                      تم استلام طلبك بنجاح! سنتواصل معك قريبًا.
                    </div>
                  )}
                  {formStatus === 'error' && (
                    <div className="p-4 bg-red-500/10 border border-red-500/20 text-red-400 rounded-xl text-center text-sm font-medium animate-in fade-in zoom-in duration-300">
                      حدث خطأ أثناء إرسال الرسالة، يرجى المحاولة مرة أخرى أو استخدام واتساب.
                    </div>
                  )}
                  {/* Submit Button */}
                  <button 
                    type="submit" 
                    disabled={formStatus === 'submitting'}
                    className="btn-gradient cursor-pointer w-full py-4 rounded-xl text-white font-bold text-base flex items-center justify-center gap-2 group mt-2"
                  >
                    {formStatus === 'submitting' ? (
                      <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    ) : (
                      <>
                        <span>احجز استشارة مجانية</span>
                        <Send size={18} className="transition-transform group-hover:-translate-x-1" />
                      </>
                    )}
                  </button>
                  {/* WhatsApp Secondary Button */}
                  <button 
                    type="button"
                    onClick={handleWhatsappClick}
                    className="btn-whatsapp cursor-pointer w-full py-4 rounded-xl font-bold text-base flex items-center justify-center gap-2"
                  >
                    <span>تواصل عبر واتساب</span>
                    <MessageSquare size={18} />
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* FOOTER SECTION */}
      <footer 
        dir="rtl" 
        className="w-full font-sans relative overflow-hidden"
        style={{ 
          backgroundColor: '#0B0B14',
          fontFamily: "'Tajawal', system-ui, sans-serif" 
        }}
      >
        <style>
          {`
            .footer-link {
              color: #A1A1B3;
              transition: all 0.3s ease;
              display: inline-block;
            }
            .footer-link:hover {
              color: #7C3AED;
              transform: translateX(-5px);
            }
          `}
        </style>
        
        {/* Top Gradient Border */}
        <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-[#7C3AED] to-transparent opacity-30" />
        {/* Ambient Footer Glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-[300px] pointer-events-none rounded-full blur-[150px] opacity-10 bg-[#2959DF]" />
        <div className="container mx-auto px-6 lg:px-10 pt-20 pb-10 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-8 mb-16">
            
            {/* Column 1: Brand Info */}
            <div className="flex flex-col gap-6 lg:pr-4">
              <h3 className="text-3xl font-black text-white tracking-wider uppercase" style={{ textShadow: '0 0 20px rgba(124,58,237,0.5)' }}>
                MSM <span className="text-[#7C3AED]">Tech</span>
              </h3>
              <p className="text-[#A1A1B3] leading-relaxed text-base">
                نصنع تجارب رقمية احترافية تعكس هوية عملك وتدعم نموك في السوق الرقمي المتسارع. هندسة برمجية متقدمة وتصميم استثنائي.
              </p>
            </div>
            {/* Column 2: Quick Links */}
            <div className="flex flex-col gap-6 lg:px-8">
              <h4 className="text-xl font-bold text-white mb-2">روابط سريعة</h4>
              <ul className="flex flex-col gap-4">
                <li><a href="#" className="footer-link">الرئيسية</a></li>
                <li><a href="#about" className="footer-link">من نحن</a></li>
                <li><a href="#service" className="footer-link">خدماتنا</a></li>
                <li><a href="#work" className="footer-link">أعمالنا</a></li>
                <li><a href="#contact" className="footer-link">تواصل معنا</a></li>
              </ul>
            </div>
            {/* Column 3: Contact Info */}
            <div className="flex flex-col gap-6">
              <h4 className="text-xl font-bold text-white mb-2">معلومات التواصل</h4>
              <div className="flex flex-col gap-4">
                <a href="mailto:info@msm.technology" className="flex items-center gap-3 text-[#A1A1B3] hover:text-white transition-colors">
                  <Mail size={18} className="text-[#7C3AED]" />
                  <span className="font-mono" dir="ltr">info@msm.technology</span>
                </a>
                <a href="tel:+249916246149" className="flex items-center gap-3 text-[#A1A1B3] hover:text-white transition-colors">
                  <Phone size={18} className="text-[#7C3AED]" />
                  <span className="font-mono" dir="ltr">+249111988544</span>
                </a>
              </div>
            </div>
          </div>
          {/* Bottom Bar */}
          <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-[#A1A1B3] text-sm">
            <p>© {new Date().getFullYear()} MSM Tech. جميع الحقوق محفوظة.</p>
            <div className="flex items-center gap-2">
              <span>صُنع بشغف لتقنية المستقبل</span>
            </div>
          </div>
        </div>
      </footer>
    </>

);
}