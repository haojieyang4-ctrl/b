import React, { useState } from 'react';
import { DayArchive } from '../data/picksData';
import { ShieldCheck, Flame, ChevronDown, Sparkles } from 'lucide-react';

interface HeroOverviewProps {
  archive: DayArchive;
  onScrollToPick: (pickId: string) => void;
}

export const HeroOverview: React.FC<HeroOverviewProps> = ({ archive, onScrollToPick }) => {
  const [imageError, setImageError] = useState(false);

  return (
    <section id="top" className="relative pt-6 pb-10">
      {/* Decorative subtle ambient backdrop glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Uncle Hong Persona & Daily Brief (7 cols) */}
        <div className="lg:col-span-7 space-y-6">
          {/* Date & Trust Kicker */}
          <div className="flex flex-wrap items-center gap-3 text-xs text-slate-400">
            <span className="font-semibold text-amber-400 tracking-wide uppercase">
              {archive.dateStr}
            </span>
            <span>·</span>
            <span>คัดสรรโดย น้าหงส์ ทีเด็ดเซียนบอลตัวจริง</span>
            <span>·</span>
            <span className="text-emerald-400 flex items-center gap-1 font-medium">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              อัปเดตล่าสุดสมบูรณ์
            </span>
          </div>

          {/* Primary Editorial Headline */}
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight [text-wrap:balance]">
            แนวทางประจำวันที่ <span className="text-amber-400">1 ตุลาคม 2569</span>
          </h1>

          {/* Uncle Hong's Exact Words */}
          <div className="p-4 sm:p-5 rounded-2xl bg-slate-900 border border-slate-800 relative">
            <div className="flex items-start gap-4">
              {/* Uncle Hong Avatar */}
              <div className="relative shrink-0">
                {!imageError ? (
                  <img
                    src="/src/assets/images/hong_analyst_portrait_1790821718292.jpg"
                    alt="น้าหงส์ นักวิเคราะห์บอล"
                    referrerPolicy="no-referrer"
                    onError={() => setImageError(true)}
                    className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl object-cover border-2 border-amber-400/40 shadow-lg"
                  />
                ) : (
                  <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-amber-500/20 border-2 border-amber-400/40 flex items-center justify-center text-2xl">
                    🧔‍♂️
                  </div>
                )}
                <span className="absolute -bottom-1 -right-1 px-1.5 py-0.5 rounded text-[10px] font-bold bg-amber-400 text-slate-950 shadow">
                  น้าหงส์
                </span>
              </div>

              <div className="space-y-2 flex-1">
                <div className="flex items-center gap-2">
                  <h2 className="text-lg font-bold text-white">
                    สารจากน้าหงส์ ถึงคอบอลทุกท่าน
                  </h2>
                </div>
                <p className="text-sm sm:text-base text-slate-200 leading-relaxed font-normal">
                  &ldquo;<span className="text-amber-300 font-semibold">วันนี้น้าหงส์ ไปสามตัว ได้แก่ นอร์เวย์ เยอรมนี อาเซอร์ไบจาน นะครับ</span>&rdquo;
                </p>
                <p className="text-xs text-slate-400 leading-relaxed">
                  {archive.titleNote}
                </p>

                <div className="pt-2 flex flex-wrap items-center gap-2">
                  <a
                    href="https://lin.ee/OLW4xO3"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-[#06C755] hover:bg-[#05b34c] text-white text-xs font-bold shadow-md shadow-[#06C755]/20 transition-all active:scale-95"
                  >
                    <span>💬</span>
                    <span>ขอรับแนวทางสด & พูดคุยทาง LINE: @nn25</span>
                    <span className="text-xs font-mono">→</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* 3 Quick Jump Cards */}
          <div className="space-y-2">
            <span className="text-xs text-slate-400 font-medium block">
              สรุป 3 ตัวเน้นคืนนี้ (คลิกเพื่อกระโดดดูบทวิเคราะห์เจาะลึก):
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {archive.threePicks.map((pick, index) => (
                <button
                  key={pick.id}
                  onClick={() => onScrollToPick(pick.id)}
                  className="p-3.5 rounded-xl bg-slate-900/90 border border-slate-800 hover:border-amber-400/50 hover:bg-slate-850 transition-all text-left group flex flex-col justify-between"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-amber-400 font-bold">ตัวที่ {index + 1}</span>
                    <span className="text-xs font-mono font-semibold text-slate-400">
                      {pick.kickoffTimeShort}
                    </span>
                  </div>
                  <div className="my-2 flex items-center gap-2">
                    <span className="text-2xl">{pick.flag}</span>
                    <div>
                      <span className="text-base font-bold text-white group-hover:text-amber-300 transition-colors block">
                        {pick.country}
                      </span>
                      <span className="text-[11px] text-slate-400 block">
                        vs {pick.opponent}
                      </span>
                    </div>
                  </div>
                  <div className="pt-2 border-t border-slate-800 text-[11px] font-mono text-amber-400 flex items-center justify-between">
                    <span>{pick.handicap}</span>
                    <span className="text-slate-500 group-hover:text-amber-400 transition-colors">
                      ดูข้อมูล →
                    </span>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column: Key Deciding Factors Summary Card (5 cols) */}
        <div className="lg:col-span-5 space-y-4">
          {/* Key Deciding Factors Summary Card */}
          <div className="p-5 rounded-2xl bg-gradient-to-br from-amber-500/10 via-slate-900 to-slate-900 border border-slate-800 space-y-3.5">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Flame className="w-4 h-4 text-amber-400" />
                <span className="text-xs font-bold text-amber-400 uppercase tracking-wider">
                  สรุปเหตุผลชี้ขาด 3 คู่เน้นคืนนี้
                </span>
              </div>
              <span className="text-[11px] font-mono text-emerald-400 font-medium">
                ระดับ 5 ดาว
              </span>
            </div>

            <div className="space-y-2.5 text-xs">
              <div className="p-2.5 rounded-xl bg-slate-950/80 border border-slate-800/80 hover:border-slate-700 transition-colors">
                <div className="flex items-center justify-between font-bold text-white mb-1">
                  <span className="flex items-center gap-1.5">
                    <span>🇳🇴</span>
                    <span>นอร์เวย์ (เยือน เวลส์)</span>
                  </span>
                  <span className="text-[11px] font-mono text-amber-400">ต่อ 0.5/1</span>
                </div>
                <p className="text-slate-300 font-light leading-relaxed">
                  ฮาแลนด์ x โอเดการ์ด กำลังร้อนแรง เวลส์เกมรับยวบ ฟันธงต่อนอร์เวย์ เฮชัวร์!
                </p>
              </div>

              <div className="p-2.5 rounded-xl bg-slate-950/80 border border-slate-800/80 hover:border-slate-700 transition-colors">
                <div className="flex items-center justify-between font-bold text-white mb-1">
                  <span className="flex items-center gap-1.5">
                    <span>🇩🇪</span>
                    <span>เยอรมนี (รับ เซอร์เบีย)</span>
                  </span>
                  <span className="text-[11px] font-mono text-amber-400">ต่อ 1.5</span>
                </div>
                <p className="text-slate-300 font-light leading-relaxed">
                  อินทรีเหล็กในบ้านดุดัน มูเซียล่า & เวียร์ตซ์ จัดจ้าน ฟันธงต่อเยอรมัน ขยันยิง!
                </p>
              </div>

              <div className="p-2.5 rounded-xl bg-slate-950/80 border border-slate-800/80 hover:border-slate-700 transition-colors">
                <div className="flex items-center justify-between font-bold text-white mb-1">
                  <span className="flex items-center gap-1.5">
                    <span>🇦🇿</span>
                    <span>อาเซอร์ไบจาน (รับ ลิกเตนสไตน์)</span>
                  </span>
                  <span className="text-[11px] font-mono text-amber-400">ต่อ 2.0</span>
                </div>
                <p className="text-slate-300 font-light leading-relaxed">
                  ลิกเตนสไตน์นอกบ้านแจกแต้มรัวๆ อาเซอร์ไบจานพับสนามยิง สราญอุราแน่นอน!
                </p>
              </div>
            </div>

            <div className="pt-2 border-t border-slate-800 flex items-center justify-between gap-2 text-xs">
              <a
                href="#three-picks"
                className="text-amber-400 hover:text-amber-300 font-medium hover:underline text-center w-full py-1"
              >
                เลื่อนลงดูบทวิเคราะห์เจาะลึกเต็มรูปแบบ ↓
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
