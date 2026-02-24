'use client'
import Btn from '../Reuse/Btn'
import Image from "next/image";
import { useState, useEffect } from "react";
const NAV_LINKS = [
  { label: "الرئيسية", href: "#" },
  { label: "من نحن", href: "#" },
  { label: "خدماتنا", href: "#" },
  { label: "أعمالنا", href: "#" },
  { label: "تواصل معنا", href: "#" },
];
export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      // Background and shadow trigger after 300px
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <>
      <nav
        dir="rtl"
        className={`fixed top-0 left-0 w-full z-40 transition-all duration-400 ease-[cubic-bezier(0.4,0,0.2,1)] ${
          isScrolled
            ? "bg-[rgba(11,11,20,0.85)] backdrop-blur-md shadow-[0_8px_30px_rgba(0,0,0,0.4)] border-b border-[rgba(255,255,255,0.05)] py-4"
            : "bg-transparent py-6"
        }`}
      >
        {/* Subtle animated purple glow behind navbar on scroll */}
        {isScrolled && (
          <div className="absolute inset-0 -z-10 bg-[rgba(124,58,237,0.05)] blur-2xl transition-opacity duration-500" />
        )}
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">

          {/* Logo and CTA Button */}
          <div className="hidden lg:flex items-center gap-6 mr-0">
            <div className=" cursor-pointer">
              <Image src="/logo-2.png" width={150} height={50} />
            </div>
          </div>
            {/* Desktop Navigation Links */}
            <div className="hidden lg:flex items-center gap-8">
            {NAV_LINKS.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className="relative group text-[#EAEAF0] font-medium text-base transition-all duration-300 hover:text-[#FFFFFF] hover:-translate-y-[2px] hover:drop-shadow-[0_0_8px_rgba(124,58,237,0.6)]"
              >
                {link.label}
                {/* Glowing animated line expanding from center */}
                <span className="absolute -bottom-2 left-1/2 w-0 h-[2px] -translate-x-1/2 bg-[linear-gradient(90deg,transparent,#7C3AED,transparent)] transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] group-hover:w-full" />
              </a>
            ))}
          </div>
          <div className="hidden lg:flex items-center gap-6 mr-0">
          <button
            className="cursor-pointer
            relative overflow-hidden group
            px-6 py-3 rounded-full
            text-sm font-semibold
            text-[#EAEAF0]
            transition-all duration-300
            "
            style={{
              background: "linear-gradient(90deg, #7C3AED, #2959DF, #241274)",
              backgroundSize: "200% 100%",
            }}>
          {/* Animated Gradient Layer */}
          <span
            className="
            absolute inset-0
            transition-all duration-500
            animate-gradient-move
            group-hover:animate-none
            "
            style={{
              background: "linear-gradient(90deg, #7C3AED, #2959DF, #241274)",
              backgroundSize: "200% 100%",
              animation: "gradientMove 3s linear infinite",
            }}
          ></span>

          {/* Content */}
          <span className="relative flex items-center gap-2 z-10">
            ابدأ مشروعك

            {/* Arrow */}
            <svg
              className="
              w-4 h-4
              transition-transform duration-300
              rotate-180
              group-hover:rotate-180
              "
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M13 5l7 7-7 7" />
            </svg>
          </span>

          {/* Glow Effect */}
          <span
            className="
            absolute inset-0 rounded-full
            opacity-0 group-hover:opacity-100
            transition-opacity duration-300
            "
            style={{
              boxShadow: "0 0 30px rgba(124,58,237,0.6)",
            }}></span>

          </button>
          </div>
          {/* Mobile Header Layout */}
          <div className="flex lg:hidden justify-between items-center w-full">
            {/* Animated Hamburger Icon */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="flex flex-col justify-center items-center w-8 h-8 space-y-[6px] relative z-50"
              aria-label="Toggle Menu"
            >
              <span
                className={`w-6 h-[2px] transition-all duration-300 block rounded-full ${
                  isMobileMenuOpen
                    ? "rotate-45 translate-y-[8px] bg-[#7C3AED] shadow-[0_0_10px_rgba(124,58,237,0.8)]"
                    : "bg-[#EAEAF0]"
                }`}
              />
              <span
                className={`w-6 h-[2px] bg-[#EAEAF0] transition-all duration-300 block rounded-full ${
                  isMobileMenuOpen ? "opacity-0" : "opacity-100"
                }`}
              />
              <span
                className={`w-6 h-[2px] transition-all duration-300 block rounded-full ${
                  isMobileMenuOpen
                    ? "-rotate-45 -translate-y-[8px] bg-[#7C3AED] shadow-[0_0_10px_rgba(124,58,237,0.8)]"
                    : "bg-[#EAEAF0]"
                }`}
              />
            </button>
            <div className=" relative z-50 cursor-pointer">
            <Image src="/logo-2.png" width={100} height={50} />
            </div>
          </div>
        </div>
      </nav>
      {/* Mobile Side Menu Overlay */}
      <div
        dir="rtl"
        className={`fixed inset-0 z-30 transition-all duration-400 ease-[cubic-bezier(0.4,0,0.2,1)] lg:hidden ${
          isMobileMenuOpen ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none"
        }`}
      >
        <div 
          className={`absolute top-0 right-0 w-full sm:w-80 h-full bg-[linear-gradient(180deg,#0B0B14,#141427)] shadow-[-8px_0_30px_rgba(0,0,0,0.5)] transition-transform duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] flex flex-col pt-24 px-6 pb-8 ${
            isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          {/* Staggered Navigation Items */}
          <div className="flex flex-col gap-4 flex-1 mt-8">
            {NAV_LINKS.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className={`text-[#EAEAF0] text-xl font-medium py-4 border-b border-[rgba(255,255,255,0.05)] transition-all duration-300 hover:text-[#7C3AED] hover:-translate-x-2 ${
                  isMobileMenuOpen 
                    ? "opacity-100 translate-x-0" 
                    : "opacity-0 translate-x-8"
                }`}
                style={{ transitionDelay: `${index * 50 + 100}ms` }}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
          </div>
          
          <button
            className="cursor-pointer w-fit mx-auto
            relative overflow-hidden group
            px-6 py-3 rounded-full
            text-sm font-semibold
            text-[#EAEAF0]
            transition-all duration-300
            "
            style={{
              background: "linear-gradient(90deg, #7C3AED, #2959DF, #241274)",
              backgroundSize: "200% 100%",
            }}>
          {/* Animated Gradient Layer */}
          <span
            className="
            absolute inset-0
            transition-all duration-500
            animate-gradient-move
            group-hover:animate-none
            "
            style={{
              background: "linear-gradient(90deg, #7C3AED, #2959DF, #241274)",
              backgroundSize: "200% 100%",
              animation: "gradientMove 3s linear infinite",
            }}
          ></span>

          {/* Content */}
          <span className="relative flex items-center gap-2 z-10">
            ابدأ مشروعك

            {/* Arrow */}
            <svg
              className="
              w-4 h-4
              transition-transform duration-300
              rotate-180
              group-hover:rotate-180
              "
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M13 5l7 7-7 7" />
            </svg>
          </span>

          {/* Glow Effect */}
          <span
            className="
            absolute inset-0 rounded-full
            opacity-0 group-hover:opacity-100
            transition-opacity duration-300
            "
            style={{
              boxShadow: "0 0 30px rgba(124,58,237,0.6)",
            }}></span>

          </button>
                </div>
            </div>
    </>
    );
}