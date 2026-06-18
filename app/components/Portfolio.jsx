// "use client"
// import React, { useEffect, useRef, useState } from 'react';
// import { ArrowLeft, ExternalLink, Github, Code2, Layers, Cpu } from 'lucide-react';
// function useFadeIn(delay = 0) {
//   const ref = useRef(null);
//   const [isVisible, setIsVisible] = useState(false);
//   useEffect(() => {
//     const currentRef = ref.current;
//     const observer = new IntersectionObserver(([entry]) => {
//       if (entry.isIntersecting) {
//         setTimeout(() => setIsVisible(true), delay);
//         observer.unobserve(currentRef);
//       }
//     }, { threshold: 0.1 });
//     if (currentRef) {
//       observer.observe(currentRef);
//     }
//     return () => {
//       if (currentRef) observer.unobserve(currentRef);
//     };
//   }, [delay]);
//   return { 
//     ref, 
//     className: `transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}` 
//   };
// }
// export default function Portfolio() {
//   const headerAnim = useFadeIn(0);
//   const projects = [
//     {
//       title: "المنصة الرقمية لعيادة عثمان دقنة لطب الأسنان",
//       category: "SaaS Platform",
//       description: "قمنا بتصميم وتطوير موقع احترافي يعكس هوية العيادة ويسهّل على المرضى الوصول إلى الخدمات وحجز المواعيد بكل سلاسة. ساعد المشروع في تحسين تجربة المستخدم وتعزيز الحضور الرقمي، مما ساهم في زيادة التفاعل وثقة العملاء بالخدمات المقدمة.",
//       image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",
//       metrics: [
//         { label: "زمن الاستجابة", value: "<50ms" },
//         { label: "معالجة البيانات", value: "2TB/day" }
//       ],
//       techStack: ["Next.js", "Python", "TensorFlow", "AWS"],
//       icon: <Cpu size={24} className="text-[#7C3AED]" />,
//       anim: useFadeIn(100),
//     },
//     {
//       title: "الموقع الرسمي لصالة يوم اللياقة – Fitness Day",
//       category: "FinTech Solution",
//       description: "طورنا موقعًا عصريًا يعكس روح النشاط والحيوية الخاصة بالعلامة،مع تصميم جذاب يبرز الخدمات والبرامج التدريبية بشكل واضح.ساهم الموقع في تحسين عرض الباقات وزيادة تفاعل المستخدمين،مما عزز من قدرة الصالة على جذب عملاء جدد.",
//       // image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop",
//       image: "/project2.png",
//       metrics: [
//         { label: "مستوى الأمان", value: "Bank-Grade" },
//         { label: "وقت التشغيل", value: "99.99%" }
//       ],
//       techStack: ["React", "Node.js", "PostgreSQL", "Docker"],
//       icon: <Layers size={24} className="text-[#2959DF]" />,
//       anim: useFadeIn(300),
//     },
//     {
//       title: "متجر UM Unlocker للخدمات الرقمية",
//       category: "E-Commerce Architecture",
//       description: "قمنا ببناء متجر إلكتروني متكامل لبيع وتفعيل خدمات السوفت وير للموبايل،مع تجربة مستخدم سهلة ونظام شراء واضح وسريع.",
//       image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=1974&auto=format&fit=crop",
//       metrics: [
//         { label: "زيادة التحويل", value: "+34%" },
//         { label: "المستخدمين", value: "1M+" }
//       ],
//       techStack: ["Vue.js", "GraphQL", "Redis", "K8s"],
//       icon: <Code2 size={24} className="text-[#7C3AED]" />,
//       anim: useFadeIn(500),
//     }
//   ];
//   return (
//     <section id='work'
//       dir="rtl"
//       className="relative w-full py-32 overflow-hidden font-sans"
//       style={{ 
//         backgroundColor: '#0B0B14',
//         fontFamily: "'Tajawal', system-ui, sans-serif" 
//       }}
//     >
//       <style>
//         {`
//           .project-card {
//             background: rgba(11, 11, 20, 0.6);
//             border: 1px solid rgba(255, 255, 255, 0.05);
//             transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
//           }
          
//           .project-card:hover {
//             border-color: rgba(124, 58, 237, 0.3);
//             box-shadow: 0 20px 40px -10px rgba(0, 0, 0, 0.5), 0 0 20px -5px rgba(124, 58, 237, 0.15);
//             transform: translateY(-8px);
//           }
//           .project-image-wrapper {
//             overflow: hidden;
//             position: relative;
//           }
//           .project-image-wrapper::after {
//             content: '';
//             position: absolute;
//             inset: 0;
//             background: linear-gradient(180deg, transparent 0%, rgba(11, 11, 20, 0.9) 100%);
//             z-index: 10;
//           }
//           .project-image {
//             transition: transform 0.8s cubic-bezier(0.4, 0, 0.2, 1);
//             filter: grayscale(20%);
//           }
//           .project-card:hover .project-image {
//             transform: scale(1.05);
//             filter: grayscale(0%);
//           }
//           .tech-pill {
//             background: rgba(255, 255, 255, 0.03);
//             border: 1px solid rgba(255, 255, 255, 0.05);
//             transition: all 0.3s ease;
//           }
//           .project-card:hover .tech-pill {
//             background: rgba(124, 58, 237, 0.1);
//             border-color: rgba(124, 58, 237, 0.2);
//             color: #fff;
//           }
//           .action-btn {
//             background: rgba(255, 255, 255, 0.05);
//             transition: all 0.3s ease;
//           }
//           .action-btn:hover {
//             background: #EAEAF0;
//             color: #0B0B14;
//             transform: scale(1.05);
//           }
//           .metric-divider {
//             width: 1px;
//             background: linear-gradient(180deg, transparent, rgba(255,255,255,0.1), transparent);
//           }
//         `}
//       </style>
//       {/* Engineering Blueprint Background Pattern */}
//       <div 
//         className="absolute inset-0 z-0 pointer-events-none opacity-20"
//         style={{
//           backgroundImage: `
//             linear-gradient(to right, rgba(124, 58, 237, 0.1) 1px, transparent 1px),
//             linear-gradient(to bottom, rgba(41, 89, 223, 0.1) 1px, transparent 1px)
//           `,
//           backgroundSize: '100px 100px'
//         }}
//       />
//       <div 
//         className="absolute inset-0 z-0 pointer-events-none opacity-10"
//         style={{
//           backgroundImage: `
//             linear-gradient(to right, rgba(255, 255, 255, 0.1) 1px, transparent 1px),
//             linear-gradient(to bottom, rgba(255, 255, 255, 0.1) 1px, transparent 1px)
//           `,
//           backgroundSize: '20px 20px'
//         }}
//       />
//       {/* Tech Glows */}
//       <div className="absolute top-1/3 right-0 w-[800px] h-[800px] pointer-events-none rounded-full blur-[200px] opacity-20 bg-[#7C3AED]" />
//       <div className="absolute bottom-0 left-0 w-[600px] h-[600px] pointer-events-none rounded-full blur-[150px] opacity-20 bg-[#2959DF]" />
//       <div className="container mx-auto px-6 lg:px-10 relative z-10">
        
//         {/* Header Section */}
//         <div ref={headerAnim.ref} className={`flex flex-col md:flex-row justify-between items-end mb-24 gap-8 border-b border-white/10 pb-12 ${headerAnim.className}`}>
//           <div className="max-w-2xl">
//             <div className="flex items-center gap-3 mb-6">
//               <div className="h-[1px] w-12 bg-gradient-to-r from-transparent to-[#7C3AED]" />
//               <span className="text-sm font-mono tracking-widest text-[#7C3AED] uppercase" dir="ltr">اعمالنا</span>
//             </div>
//             <h2 className="text-4xl lg:text-5xl font-bold leading-tight text-white mb-6">
//             نتائج حقيقية… وتجارب رقمية تصنع الفرق<br/>
//               {/* <span className="text-[#A1A1B3]">تصميم واجهات استثنائي.</span> */}
//             </h2>
//             <p className="text-lg text-[#9CA3AF] max-w-xl leading-relaxed">
//             عملاؤنا لا يحصلون على مواقع فقط،
//             بل يحصلون على حلول رقمية ترفع من قيمة علامتهم،
//             تحسّن التفاعل، وتفتح لهم أبوابًا جديدة للنمو.
//             هنا نستعرض نماذج من أعمال أحدثت فرقًا حقيقيًا على أرض الواقع.
//               {/* نستعرض هنا مجموعة من المشاريع التقنية المعقدة التي قمنا بهندستها وتطويرها للشركات الرائدة، محولين التحديات الصعبة إلى حلول رقمية أنيقة ومستقرة. */}
//             </p>
//           </div>
          
//           <button className="flex items-center gap-3 px-8 py-4 rounded-full border border-white/10 hover:border-[#7C3AED]/50 bg-white/5 hover:bg-white/10 transition-all duration-300 text-white group">
//             <span className="font-semibold text-sm">عرض كل المشاريع</span>
//             <ArrowLeft size={16} className="transition-transform group-hover:-translate-x-2" />
//           </button>
//         </div>
//         {/* Projects List (Stacked Layout for more Pro feel) */}
//         <div className="flex flex-col gap-12 lg:gap-24">
//           {projects.map((project, idx) => (
//             <div 
//               key={idx}
//               ref={project.anim.ref}
//               className={`flex flex-col ${idx % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-5 lg:gap-3 items-center project-card rounded-3xl p-4 lg:p-8 ${project.anim.className}`}
//             >
              
//               {/* Image Side (Left or Right based on index) */}
//               {/*  
//               <div className="w-full lg:w-1/2 relative rounded-2xl 
//               project-image-wrapper aspect-[4/3] lg:aspect-auto lg:h-[500px]">
//                 <div 
//                   className="project-image absolute inset-0 bg-cover bg-no-repeat bg-center"
//                   style={{ backgroundImage: `url(${project.image})`, }}
//                 />
//                 <div className="absolute top-6 left-6 z-20 bg-black/50 backdrop-blur-md border border-white/10 p-3 rounded-2xl flex items-center justify-center">
//                   {project.icon}
//                 </div>
//               </div>
//                */}
//                <div>
//                 <img src={project.image} className='rounded-4xl' alt="" />
//                </div>
//               {/* Content Side */}
//               <div className="w-full lg:w-1/2 flex flex-col justify-center px-4 pb-4 lg:px-8 lg:pb-0">
                
//                 {/* <span className="text-xs font-mono tracking-widest text-[#2959DF] uppercase mb-4 block" dir="ltr">
//                   {project.category}
//                 </span> */}
                
//                 <h3 className="text-3xl lg:text-4xl font-bold mb-6 text-white leading-tight">
//                   {project.title}
//                 </h3>
                
//                 <p className="text-[#A1A1B3] text-lg leading-relaxed mb-10">
//                   {project.description}
//                 </p>
//                 {/* Key Metrics */}
//                 {/* <div className="flex items-center gap-8 mb-10 p-6 rounded-2xl bg-white/[0.02] border border-white/5">
//                   <div className="flex flex-col gap-1">
//                     <span className="text-[#7C3AED] font-mono text-2xl font-bold" dir="ltr">{project.metrics[0].value}</span>
//                     <span className="text-xs text-[#9CA3AF] font-medium">{project.metrics[0].label}</span>
//                   </div>
//                   <div className="metric-divider h-12" />
//                   <div className="flex flex-col gap-1">
//                     <span className="text-[#2959DF] font-mono text-2xl font-bold" dir="ltr">{project.metrics[1].value}</span>
//                     <span className="text-xs text-[#9CA3AF] font-medium">{project.metrics[1].label}</span>
//                   </div>
//                 </div> */}
//                 {/* Footer: Tech Stack & Actions */}
//                 <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 pt-8 border-t border-white/5">
                  
//                   {/* Tech Stack */}
//                   {/* <div className="flex flex-wrap gap-2" dir="ltr">
//                     {project.techStack.map((tech, tIdx) => (
//                       <span key={tIdx} className="tech-pill px-4 py-1.5 rounded-full text-xs font-mono text-[#A1A1B3]">
//                         {tech}
//                       </span>
//                     ))}
//                   </div> */}
//                   {/* Actions */}
//                   <div className="flex items-center gap-3">
//                     {/* <button className="action-btn w-12 h-12 rounded-full flex items-center justify-center text-white">
//                       <Github size={20} />
//                     </button> */}
//                     <a 
//                       href="#"
//                       target="_blank"
//                       className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300"
//                       style={{
//                         background: 'linear-gradient(90deg, #7C3AED, #2959DF)',
//                         color: '#fff'
//                       }}
//                     >
//                       عرض المشروع
//                       <span>←</span>
//                     </a>
//                     {/* <button className="action-btn w-12 h-12 rounded-full flex items-center justify-center text-white">
//                       <ExternalLink size={20} />
//                     </button> */}
//                   </div>
//                 </div>
//               </div>
//             </div>

// ))}
// </div>

//   </div>
// </section>

// );
// }

"use client"
import React, { useEffect, useRef, useState } from 'react';
import { ArrowLeft, ExternalLink, Github, Code2, Layers, Cpu } from 'lucide-react';
import PrimaryBtn from '../ui/PrimaryBtn';
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
export default function Portfolio() {
  const headerAnim = useFadeIn(0);
  const projects = [
    {
      title: "المنصة الرقمية لعيادة عثمان دقنة لطب الأسنان",
      category: "SaaS Platform",
      description: "قمنا بتصميم وتطوير موقع احترافي يعكس هوية العيادة ويسهّل على المرضى الوصول إلى الخدمات وحجز المواعيد بكل سلاسة. ساعد المشروع في تحسين تجربة المستخدم وتعزيز الحضور الرقمي، مما ساهم في زيادة التفاعل وثقة العملاء بالخدمات المقدمة.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",
      image: "/project1.png",
      url: "https://oddc-two.vercel.app/",
      icon: <Cpu size={24} className="text-[#7C3AED]" />,
      anim: useFadeIn(100),
    },
    {
      title: "الموقع الرسمي لصالة يوم اللياقة – Fitness Day",
      category: "FinTech Solution",
      description: "طورنا موقعًا عصريًا يعكس روح النشاط والحيوية الخاصة بالعلامة،مع تصميم جذاب يبرز الخدمات والبرامج التدريبية بشكل واضح.ساهم الموقع في تحسين عرض الباقات وزيادة تفاعل المستخدمين،مما عزز من قدرة الصالة على جذب عملاء جدد.",
      image: "/project2.png",
      url: "https://fitness-day.vercel.app/",
      icon: <Layers size={24} className="text-[#2959DF]" />,
      anim: useFadeIn(300),
    },
    {
      title: "سِجِل",
      category: "E-Commerce Architecture",
      description: "سِجِل هو تطبيق مخصص لأصحاب المحلات والبقالات لتسجيل وتنظيم عمليات التحويل البنكي بسهولة، مع البحث السريع والإحصائيات اليومية ودعم العمل بدون إنترنت من خلال تقنية PWA.",
      image: "/project3.jpg",
      url: "https://sijil-app-api-server-xfnt.vercel.app/",
      anim: useFadeIn(500),
    }
  ];
  return (
    <section id='work'
      dir="rtl"
      className="relative w-full py-32 overflow-hidden font-sans"
      style={{ 
        backgroundColor: '#0B0B14',
        fontFamily: "'Tajawal', system-ui, sans-serif" 
      }}
    >
      <style>
        {`
          .project-card {
            background: rgba(11, 11, 20, 0.6);
            border: 1px solid rgba(255, 255, 255, 0.05);
            transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
            height: 100%;
          }
          
          .project-card:hover {
            border-color: rgba(124, 58, 237, 0.3);
            box-shadow: 0 20px 40px -10px rgba(0, 0, 0, 0.5), 0 0 20px -5px rgba(124, 58, 237, 0.15);
            transform: translateY(-8px);
          }
          .project-image {
            transition: transform 0.8s cubic-bezier(0.4, 0, 0.2, 1);
            width: 100%;
            height: 100%;
            object-fit: cover;
            border-radius: 1.5rem;
          }
          .project-card:hover .project-image {
            transform: scale(1.05);
          }
          .image-container {
             overflow: hidden;
             border-radius: 1.5rem;
             width: 100%;
             aspect-ratio: 16/10;
          }
          @media (min-width: 1024px) {
              .image-container {
                  aspect-ratio: auto;
              }
          }
          .action-btn {
            background: rgba(255, 255, 255, 0.05);
            transition: all 0.3s ease;
          }
          .action-btn:hover {
            background: #EAEAF0;
            color: #0B0B14;
            transform: scale(1.05);
          }
        `}
      </style>
      {/* Engineering Blueprint Background Pattern */}
      <div 
        className="absolute inset-0 z-0 pointer-events-none opacity-20"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(124, 58, 237, 0.1) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(41, 89, 223, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '100px 100px'
        }}
      />
      <div 
        className="absolute inset-0 z-0 pointer-events-none opacity-10"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(255, 255, 255, 0.1) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255, 255, 255, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '20px 20px'
        }}
      />
      {/* Tech Glows */}
      <div className="absolute top-1/3 right-0 w-[800px] h-[800px] pointer-events-none rounded-full blur-[200px] opacity-20 bg-[#7C3AED]" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] pointer-events-none rounded-full blur-[150px] opacity-20 bg-[#2959DF]" />
      <div className="container mx-auto px-6 lg:px-10 relative z-10">
        
        {/* Header Section */}
        <div ref={headerAnim.ref} className={`flex flex-col md:flex-row justify-between items-end mb-24 gap-8 border-b border-white/10 pb-12 ${headerAnim.className}`}>
          <div className="max-w-2xl">
            <div 
                className="inline-flex w-fit items-center justify-center px-4 py-1.5 rounded-full backdrop-blur-sm mb-6"
                style={{
                  border: '1px solid rgba(255,255,255,0.08)',
                  background: 'rgba(255,255,255,0.03)'
                }}
              >
                <span className="w-2 h-2 rounded-full mr-2 ml-2 animate-pulse" style={{ backgroundColor: '#2959DF' }} />
                <span className="text-sm font-semibold tracking-wider text-[#EAEAF0]">اعمالنا</span>
              </div>
            {/* <div className="flex items-center gap-3 mb-6"> */}
              {/* <div className="h-[1px] w-12 bg-gradient-to-r from-transparent to-[#7C3AED]" /> */}
              {/* <span className="text-sm font-mono tracking-widest text-[#7C3AED] uppercase" dir="ltr">اعمالنا</span> */}
            {/* </div> */}
            <h2 className="text-4xl lg:text-5xl font-bold leading-tight text-white mb-6">
            نتائج حقيقية… وتجارب رقمية تصنع الفرق<br/>
            </h2>
            <p className="text-lg text-[#9CA3AF] max-w-xl leading-relaxed">
            عملاؤنا لا يحصلون على مواقع فقط،
            بل يحصلون على حلول رقمية ترفع من قيمة علامتهم،
            تحسّن التفاعل، وتفتح لهم أبوابًا جديدة للنمو.
            هنا نستعرض نماذج من أعمال أحدثت فرقًا حقيقيًا على أرض الواقع.
            </p>
          </div>
          

        </div>
        {/* Projects Grid (Responsive Layout) */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-10">
          {projects.map((project, idx) => (
            <div 
              key={idx}
              ref={project.anim.ref}
              className={`flex flex-col justify-center items-center project-card rounded-[2rem] p-6 lg:p-8 ${project.anim.className}`}>
              {/* Top: Image Section */}
              <div className="w-full mb-8 relative image-container flex-grow-0">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="project-image"
                  />

              </div>
              {/* Bottom: Content Section */}
              <div className="flex flex-col flex-grow">
                <h3 className="text-2xl lg:text-3xl font-bold mb-4 text-white leading-snug lg:leading-tight min-h-[60px] lg:min-h-[80px]">
                  {project.title}
                </h3>
                
                <p className="text-[#A1A1B3] text-base leading-relaxed mb-8 flex-grow">
                  {project.description}
                </p>
                {/* Footer Actions */}
                <div className="flex items-center justify-between pt-6 border-t border-white/5 mt-auto">
                  
                  <div className="flex items-center gap-2">
                    <PrimaryBtn label="عرض المشروع" to={project.url} blank="_blank" />
                  </div>
                </div>
              </div>
              
            </div>
          ))}
        </div>
      </div>
    </section>
);
}



