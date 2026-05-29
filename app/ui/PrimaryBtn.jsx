import React from 'react'

const PrimaryBtn = ({label, to, size, blank}) => {
  return (
    <>
        <style>
          {`
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
          `}
        </style>  
    <button
        className={`cursor-pointer btn-gradient ${size}
        relative overflow-hidden group
        px-6 py-3 rounded-full
        text-sm font-semibold
        text-[#EAEAF0]
        transition-all duration-300`
        }>

        {/* Content */}
        <a href={to} target={blank} className="relative flex items-center gap-2 z-10">
        {label}

        {/* Arrow */}
        <svg
            className="
            w-4 h-4
            transition-transform duration-300
            rotate-180
            group-hover:translate-x-1
            "
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
        >
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M13 5l7 7-7 7" />
        </svg>
        </a>
    </button>
    </>
  )
}

export default PrimaryBtn
