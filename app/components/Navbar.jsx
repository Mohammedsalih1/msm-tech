'use client'
import Btn from '../Reuse/Btn'
import React, { useState, useEffect } from "react";
import { Globe } from "lucide-react";
import Image from "next/image";
/**
 * MSN TECH Navbar
 * Production-ready React component
 * 
 * Features:
 * - RTL Layout (dir="rtl")
 * - Scroll-aware background transition (#0F0F14 on scroll)
 * - Mobile responsive with custom animated hamburger
 * - Center-out animated underlines on hover
 * - Premium SaaS aesthetic with backdrop blurs
 */
const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  // Handle scroll detection for background transition
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  // Prevent background scroll when mobile menu is active
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isMobileMenuOpen]);
  const navLinks = [
    { name: "الرئيسية", href: "#" },
    { name: "من نحن", href: "#" },
    { name: "خدماتنا", href: "#" },
    { name: "أعمالنا", href: "#" },
    { name: "تواصل معنا", href: "#" },
  ];
  return (
    <>
      <nav
        dir="rtl"
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out ${
          isScrolled
            ? "bg-[#0F0F14]/90 backdrop-blur-md h-16 shadow-[0_8px_30px_rgba(0,0,0,0.4)]"
            : "bg-transparent h-20"
        }`}
      >
        <div className="container mx-auto px-4 h-full flex items-center justify-between">
          
          {/* Logo Section */}
          <div className="flex items-center gap-2 z-50">
            <Image src="/logo.png" width={150} height={150}/>
            {/* <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#6B3FA0] to-[#8E5CC2] flex items-center justify-center shadow-[0_0_20px_rgba(107,63,160,0.5)]">
              <span className="text-white font-bold text-xl">M</span>
            </div> */}
            {/* <div className="flex flex-col">
              <span className="text-[#EDEDED] font-bold text-lg leading-none tracking-wide">
                MSN TECH
              </span>
              <span className="text-[#B5B5B5] text-[10px] uppercase tracking-[0.2em]">
                Software
              </span>
            </div> */}
          </div>
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className="relative group py-2"
              >
                <span className="text-[#B5B5B5] text-lg font-medium transition-colors duration-300 group-hover:text-[#EDEDED]">
                  {link.name}
                </span>
                {/* Creative Animated Underline (Expands from center) */}
                <span className="absolute bottom-0 left-1/2 w-0 h-[2px] bg-gradient-to-r from-[#6B3FA0] to-[#8E5CC2] transition-all duration-300 ease-out group-hover:w-full group-hover:left-0 opacity-0 group-hover:opacity-100 shadow-[0_0_10px_rgba(107,63,160,0.8)] rounded-full"></span>
              </a>
            ))}
{/* <div
  className="absolute bottom-0 left-0 h-[1px] w-full
  bg-[linear-gradient(to_right,rgba(41,89,223,0),rgba(41,89,223,0.8),rgba(41,89,223,0))]
  shadow-[0_0_12px_rgba(41,89,223,0.35)]"
  aria-hidden="true"
/> */}

          </div>
          {/* Desktop Actions */}
          <Btn className="hidden" label="ابدا مشروعك"/>
          {/* Mobile Animated Hamburger */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden relative z-50 w-10 h-10 flex items-center justify-center text-[#EDEDED] focus:outline-none"
            aria-label="Toggle Menu"
          >
            <div className="relative w-6 h-5">
              <span
                className={`absolute left-0 top-0 w-full h-[2px] bg-[#EDEDED] rounded-full transform transition-all duration-300 ${
                  isMobileMenuOpen ? "rotate-45 translate-y-2.5 bg-[#8E5CC2]" : ""
                }`}
              />
              <span
                className={`absolute left-0 top-1/2 -translate-y-1/2 w-full h-[2px] bg-[#EDEDED] rounded-full transition-all duration-300 ${
                  isMobileMenuOpen ? "opacity-0 translate-x-4" : "opacity-100"
                }`}
              />
              <span
                className={`absolute left-0 bottom-0 w-full h-[2px] bg-[#EDEDED] rounded-full transform transition-all duration-300 ${
                  isMobileMenuOpen ? "-rotate-45 -translate-y-2.5 bg-[#8E5CC2]" : ""
                }`}
              />
            </div>
          </button>
        </div>
      </nav>
      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 bg-[#0F0F14]/95 backdrop-blur-xl z-40 md:hidden transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] ${
          isMobileMenuOpen
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : "opacity-0 -translate-y-4 pointer-events-none"
        }`}
      >
        <div className="flex flex-col items-center justify-center h-full space-y-8 p-4">
          {navLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              className={`text-2xl font-bold text-[#EDEDED] transition-all duration-500 transform ${
                isMobileMenuOpen
                  ? "translate-y-0 opacity-100"
                  : "translate-y-8 opacity-0"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
          
          <div 
              className={`w-full max-w-xs pt-8 transition-all duration-500 transform ${
              isMobileMenuOpen
                ? "translate-y-0 opacity-100"
                : "translate-y-8 opacity-0"
            }`}
            style={{ transitionDelay: "600ms" }}
          >
          <Btn className="hidden md:block" label="ابدا مشروعك"/>
        
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;


// import React, { useState, useEffect } from "react";
// import { Globe } from "lucide-react";

// /**
//  * MSN TECH Navbar
//  * Production-ready React component
//  * 
//  * Features:
//  * - RTL Layout (dir="rtl")
//  * - Scroll-aware background transition (#0F0F14 on scroll)
//  * - Mobile responsive with custom animated hamburger
//  * - Center-out animated underlines on hover
//  * - Premium SaaS aesthetic with backdrop blurs
//  */

// const Navbar = () => {
//   const [isScrolled, setIsScrolled] = useState(false);
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

//   // Handle scroll detection for background transition
//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 20);
//     };
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   // Prevent background scroll when mobile menu is active
//   useEffect(() => {
//     if (isMobileMenuOpen) {
//       document.body.style.overflow = "hidden";
//     } else {
//       document.body.style.overflow = "unset";
//     }
//   }, [isMobileMenuOpen]);

//   const navLinks = [
//     { name: "الرئيسية", href: "#" },
//     { name: "خدماتنا", href: "#" },
//     { name: "أعمالنا", href: "#" },
//     { name: "من نحن", href: "#" },
//     { name: "تواصل معنا", href: "#" },
//   ];

//   return (
//     <>
//       <nav
//         dir="rtl"
//         className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out ${
//           isScrolled
//             ? "bg-[#0F0F14]/90 backdrop-blur-md h-16 shadow-[0_8px_30px_rgba(0,0,0,0.4)]"
//             : "bg-transparent h-20"
//         }`}
//       >
//         <div className="container mx-auto px-4 h-full flex items-center justify-between">
          
//           {/* Logo Section */}
//           <div className="flex items-center gap-2 z-50">
//             <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#6B3FA0] to-[#8E5CC2] flex items-center justify-center shadow-[0_0_20px_rgba(107,63,160,0.5)]">
//               <span className="text-white font-bold text-xl">M</span>
//             </div>
//             <div className="flex flex-col">
//               <span className="text-[#EDEDED] font-bold text-lg leading-none tracking-wide">
//                 MSN TECH
//               </span>
//               <span className="text-[#B5B5B5] text-[10px] uppercase tracking-[0.2em]">
//                 Software
//               </span>
//             </div>
//           </div>

//           {/* Desktop Navigation */}
//           <div className="hidden md:flex items-center gap-8">
//             {navLinks.map((link, index) => (
//               <a
//                 key={index}
//                 href={link.href}
//                 className="relative group py-2"
//               >
//                 <span className="text-[#B5B5B5] text-sm font-medium transition-colors duration-300 group-hover:text-[#EDEDED]">
//                   {link.name}
//                 </span>
//                 {/* Creative Animated Underline (Expands from center) */}
//                 <span className="absolute bottom-0 left-1/2 w-0 h-[2px] bg-gradient-to-r from-[#6B3FA0] to-[#8E5CC2] transition-all duration-300 ease-out group-hover:w-full group-hover:left-0 opacity-0 group-hover:opacity-100 shadow-[0_0_10px_rgba(107,63,160,0.8)] rounded-full"></span>
//               </a>
//             ))}
//           </div>

//           {/* Desktop Actions */}
//           <div className="hidden md:flex items-center gap-6">
//             <button className="text-[#B5B5B5] hover:text-[#EDEDED] transition-colors">
//               <Globe className="w-5 h-5" />
//             </button>
            
//             <button className="relative px-6 py-2.5 rounded-full bg-gradient-to-r from-[#6B3FA0] to-[#8E5CC2] text-white text-sm font-bold shadow-[0_10px_30px_rgba(107,63,160,0.3)] transition-all duration-300 hover:scale-105 hover:shadow-[0_15px_40px_rgba(107,63,160,0.5)] active:scale-95 group overflow-hidden">
//               <span className="relative z-10">اطلب استشارة</span>
//               {/* Soft Glow Hover Effect */}
//               <div className="absolute inset-0 bg-white/20 translate-y-full blur-md transition-transform duration-300 group-hover:translate-y-0" />
//             </button>
//           </div>

//           {/* Mobile Animated Hamburger */}
//           <button
//             onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
//             className="md:hidden relative z-50 w-10 h-10 flex items-center justify-center text-[#EDEDED] focus:outline-none"
//             aria-label="Toggle Menu"
//           >
//             <div className="relative w-6 h-5">
//               <span
//                 className={`absolute left-0 top-0 w-full h-[2px] bg-[#EDEDED] rounded-full transform transition-all duration-300 ${
//                   isMobileMenuOpen ? "rotate-45 translate-y-2.5 bg-[#8E5CC2]" : ""
//                 }`}
//               />
//               <span
//                 className={`absolute left-0 top-1/2 -translate-y-1/2 w-full h-[2px] bg-[#EDEDED] rounded-full transition-all duration-300 ${
//                   isMobileMenuOpen ? "opacity-0 translate-x-4" : "opacity-100"
//                 }`}
//               />
//               <span
//                 className={`absolute left-0 bottom-0 w-full h-[2px] bg-[#EDEDED] rounded-full transform transition-all duration-300 ${
//                   isMobileMenuOpen ? "-rotate-45 -translate-y-2.5 bg-[#8E5CC2]" : ""
//                 }`}
//               />
//             </div>
//           </button>
//         </div>
//       </nav>

//       {/* Mobile Menu Overlay */}
//       <div
//         className={`fixed inset-0 bg-[#0F0F14]/95 backdrop-blur-xl z-40 md:hidden transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] ${
//           isMobileMenuOpen
//             ? "opacity-100 translate-y-0 pointer-events-auto"
//             : "opacity-0 -translate-y-4 pointer-events-none"
//         }`}
//       >
//         <div className="flex flex-col items-center justify-center h-full space-y-8 p-4">
//           {navLinks.map((link, index) => (
//             <a
//               key={index}
//               href={link.href}
//               className={`text-2xl font-bold text-[#EDEDED] transition-all duration-500 transform ${
//                 isMobileMenuOpen
//                   ? "translate-y-0 opacity-100"
//                   : "translate-y-8 opacity-0"
//               }`}
//               style={{ transitionDelay: `${index * 100}ms` }}
//               onClick={() => setIsMobileMenuOpen(false)}
//             >
//               {link.name}
//             </a>
//           ))}
          
//           <div 
//              className={`w-full max-w-xs pt-8 transition-all duration-500 transform ${
//               isMobileMenuOpen
//                 ? "translate-y-0 opacity-100"
//                 : "translate-y-8 opacity-0"
//             }`}
//             style={{ transitionDelay: "600ms" }}
//           >
//             <button className="w-full py-4 rounded-xl bg-gradient-to-r from-[#6B3FA0] to-[#8E5CC2] text-white font-bold text-lg shadow-[0_10px_30px_rgba(107,63,160,0.4)] hover:shadow-[0_20px_40px_rgba(107,63,160,0.6)] transition-all active:scale-95">
// اطلب استشارة
// </button>
// </div>
// </div>
// </div>
// </>
// );
// };

// export default Navbar;