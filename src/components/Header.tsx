import React from 'react';
import { Share2, Bookmark, Check } from 'lucide-react';
import uncleHongAvatar from '../assets/images/uncle_hong_identity_avatar_1790832236925.jpg';

interface HeaderProps {
  onShare: () => void;
  saved: boolean;
  onToggleSave: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onShare, saved, onToggleSave }) => {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-slate-800/80 bg-slate-950/85 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Zone 1: Brand wordmark with Uncle Hong avatar */}
        <a 
          href="#top" 
          className="text-lg font-bold tracking-tight text-white hover:text-amber-400 transition-colors flex items-center gap-2.5"
        >
          <img
            src={uncleHongAvatar}
            alt="น้าหงส์"
            referrerPolicy="no-referrer"
            className="w-9 h-9 rounded-xl object-cover border border-amber-400/60 shadow-md ring-1 ring-slate-800"
          />
          <div className="flex flex-col">
            <span className="leading-tight font-extrabold">แนวทางน้าหงส์</span>
            <span className="text-[10px] text-amber-400 font-semibold tracking-wider uppercase leading-none">
              วิเคราะห์บอลตัวจริง
            </span>
          </div>
        </a>

        {/* Zone 2: 4-6 clean text navigation links */}
        <nav className="hidden md:flex items-center gap-5 text-sm font-medium text-slate-300">
          <a href="#nations-league-fixtures" className="hover:text-amber-400 transition-colors">
            โปรแกรมเนชั่นส์ลีก
          </a>
          <a href="#three-picks" className="hover:text-amber-400 transition-colors">
            3 ตัวเน้นคืนนี้
          </a>
          <a href="#api-stats-section" className="hover:text-amber-400 transition-colors flex items-center gap-1 text-emerald-400 font-semibold">
            <span>📊</span>
            <span>กราฟสถิติ API</span>
          </a>
          <a href="#group-reviews" className="hover:text-amber-400 transition-colors text-amber-300 font-semibold flex items-center gap-1">
            <span>🔥</span>
            <span>รีวิวผลงานกลุ่ม</span>
          </a>
          <a href="#slip-calculator" className="hover:text-amber-400 transition-colors">
            จำลองชุดสเต็ป
          </a>
          <a href="#community-poll" className="hover:text-amber-400 transition-colors">
            โพลแฟนบอล
          </a>
        </nav>

        {/* Zone 3: Primary Actions */}
        <div className="flex items-center gap-2 sm:gap-2.5">
          {/* LINE Contact */}
          <a
            href="https://lin.ee/OLW4xO3"
            target="_blank"
            rel="noopener noreferrer"
            title="ติดต่อทางไลน์ไอดี @nn25"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-bold text-white bg-[#06C755] hover:bg-[#05b34c] rounded-lg shadow-sm shadow-[#06C755]/25 transition-all active:scale-95 whitespace-nowrap"
          >
            <span className="font-mono text-xs font-black">LINE</span>
            <span>@nn25</span>
          </a>

          {/* Bookmark */}
          <button
            onClick={onToggleSave}
            title={saved ? "บันทึกแนวทางแล้ว" : "บันทึกแนวทาง"}
            className={`hidden sm:flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-lg border transition-colors ${
              saved 
                ? 'bg-amber-500/20 text-amber-300 border-amber-500/40' 
                : 'bg-slate-900 text-slate-300 border-slate-700 hover:text-white hover:bg-slate-800'
            }`}
          >
            {saved ? <Check className="w-3.5 h-3.5 text-amber-400" /> : <Bookmark className="w-3.5 h-3.5" />}
            <span className="hidden md:inline">{saved ? 'บันทึกแล้ว' : 'บันทึก'}</span>
          </button>

          {/* Share */}
          <button
            onClick={onShare}
            className="flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold text-slate-950 bg-amber-400 rounded-lg hover:bg-amber-300 transition-colors shadow-sm shadow-amber-500/20 whitespace-nowrap"
          >
            <Share2 className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">แชร์แนวทาง</span>
          </button>
        </div>
      </div>
    </header>
  );
};
