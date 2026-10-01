import React from 'react';

export const LineFloatingButton: React.FC = () => {
  return (
    <aside aria-label="LINE Contact" className="fixed bottom-6 left-6 z-40">
      <a
        href="https://lin.ee/OLW4xO3"
        target="_blank"
        rel="noopener noreferrer"
        title="แอดไลน์ไอดี @nn25 เพื่อรับแนวทางฟุตบอลสด"
        className="flex items-center gap-2 px-3.5 py-2.5 rounded-full bg-[#06C755] hover:bg-[#05b34c] text-white shadow-xl shadow-[#06C755]/30 border-2 border-white/20 transition-all hover:scale-105 active:scale-95 group"
      >
        <div className="w-6 h-6 rounded-full bg-white text-[#06C755] flex items-center justify-center font-bold text-xs shrink-0 shadow-sm">
          💬
        </div>
        <div className="flex flex-col text-left pr-1">
          <span className="text-[10px] text-emerald-100 font-medium leading-tight">ติดต่อ / ขอทีเด็ด</span>
          <span className="text-xs font-black tracking-wide leading-tight">LINE @nn25</span>
        </div>
      </a>
    </aside>
  );
};
