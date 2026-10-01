import React from 'react';
import uncleHongAvatar from '../assets/images/uncle_hong_identity_avatar_1790832236925.jpg';

export const LineFloatingButton: React.FC = () => {
  return (
    <aside aria-label="LINE Contact" className="fixed bottom-6 left-6 z-40">
      <a
        href="https://lin.ee/OLW4xO3"
        target="_blank"
        rel="noopener noreferrer"
        title="แอดไลน์ไอดี @nn25 เพื่อรับแนวทางฟุตบอลสดกับน้าหงส์"
        className="flex items-center gap-2.5 pl-1.5 pr-4 py-1.5 rounded-full bg-[#06C755] hover:bg-[#05b34c] text-white shadow-2xl shadow-[#06C755]/40 border-2 border-white/30 transition-all hover:scale-105 active:scale-95 group backdrop-blur-sm"
      >
        <div className="relative">
          <img
            src={uncleHongAvatar}
            alt="น้าหงส์"
            referrerPolicy="no-referrer"
            className="w-10 h-10 rounded-full object-cover border-2 border-white shadow-md ring-1 ring-[#06C755]"
          />
          <span className="absolute -bottom-0.5 -right-0.5 w-3.5 h-3.5 bg-emerald-400 border-2 border-white rounded-full animate-ping" />
          <span className="absolute -bottom-0.5 -right-0.5 w-3.5 h-3.5 bg-emerald-400 border-2 border-white rounded-full" />
        </div>
        <div className="flex flex-col text-left">
          <span className="text-[10px] text-emerald-100 font-medium leading-tight flex items-center gap-1">
            <span>น้าหงส์ออนไลน์</span>
            <span className="w-1.5 h-1.5 rounded-full bg-white" />
          </span>
          <span className="text-xs font-black tracking-wide leading-tight text-white">
            LINE: @nn25
          </span>
        </div>
      </a>
    </aside>
  );
};
