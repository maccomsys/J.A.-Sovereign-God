import React from 'react';

interface BrandLogoProps {
  lightMode?: boolean;
  className?: string;
}

export const BrandLogo: React.FC<BrandLogoProps> = ({ lightMode = false, className = '' }) => {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {/* Industrial Machine Gear / Shield Icon */}
      <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-lg bg-[#FF662C] flex items-center justify-center shrink-0 shadow-md text-white font-black">
        <svg
          className="w-6 h-6 fill-current"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Construction machinery bulldozer/excavator stylized outline */}
          <path d="M19 13h-1.5l-2.2-4.4A2 2 0 0013.5 7H10V5a1 1 0 00-1-1H4a1 1 0 00-1 1v12a2 2 0 002 2h14a2 2 0 002-2v-3a1 1 0 00-1-1zm-9-4h3.5l1.5 3H10V9zm-5 8v-2h14v2H5zm14-4H5v-6h3v3a1 1 0 001 1h6.2l1.8-3.6V13z" />
          <circle cx="7" cy="17" r="1.5" />
          <circle cx="12" cy="17" r="1.5" />
          <circle cx="17" cy="17" r="1.5" />
        </svg>
      </div>

      <div className="flex flex-col text-left">
        <span
          className={`font-black text-base sm:text-lg tracking-tight leading-tight ${
            lightMode ? 'text-white' : 'text-[#303030]'
          }`}
        >
          J.A. SOVEREIGN GOD <span className="text-[#FF662C]">LTD</span>
        </span>
        <span
          className={`text-[10px] sm:text-xs font-semibold tracking-wider uppercase ${
            lightMode ? 'text-neutral-400' : 'text-neutral-500'
          }`}
        >
          Heavy Machinery Rental &amp; Training • Tema, Ghana
        </span>
      </div>
    </div>
  );
};
