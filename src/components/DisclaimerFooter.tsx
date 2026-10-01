import React from 'react';
import { ShieldAlert } from 'lucide-react';
import uncleHongAvatar from '../assets/images/uncle_hong_identity_avatar_1790832236925.jpg';

export const DisclaimerFooter: React.FC = () => {
  return (
    <footer className="mt-16 border-t border-slate-800/80 bg-slate-950 py-12 text-slate-400 text-xs">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-6">
        
        {/* LINE Contact Official Box */}
        <div className="p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-emerald-950/30 via-slate-900 to-slate-900 border border-emerald-500/30 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3.5">
            <img
              src={uncleHongAvatar}
              alt="น้าหงส์"
              referrerPolicy="no-referrer"
              className="w-12 h-12 rounded-2xl object-cover border-2 border-[#06C755] shrink-0 shadow-lg shadow-[#06C755]/20 ring-1 ring-slate-800"
            />
            <div>
              <div className="flex items-center gap-2">
                <span className="font-bold text-white text-sm sm:text-base">ช่องทางติดต่อทางการ: LINE น้าหงส์</span>
                <span className="text-[11px] font-mono px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 font-bold">
                  @nn25
                </span>
              </div>
              <p className="text-slate-400 text-[11px] sm:text-xs mt-0.5">
                ติดต่อสอบถามข้อมูล แลกเปลี่ยนทรรศนะฟุตบอล หรือขอรับแนวทางทีเด็ดสดรายวันกับน้าหงส์โดยตรง
              </p>
            </div>
          </div>

          <a
            href="https://lin.ee/OLW4xO3"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-[#06C755] hover:bg-[#05b34c] text-white text-xs font-bold shadow-md shadow-[#06C755]/30 transition-all active:scale-95 whitespace-nowrap"
          >
            <span>เพิ่มเพื่อน LINE ID: @nn25</span>
            <span className="text-sm">→</span>
          </a>
        </div>

        {/* Ethical Sports Disclaimer */}
        <div className="p-4 sm:p-5 rounded-2xl bg-slate-900/80 border border-slate-800 text-slate-300 flex items-start gap-3.5">
          <ShieldAlert className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
          <div className="space-y-1">
            <span className="font-semibold text-white block">
              ข้อควรทราบและคำเตือนเชิงจริยธรรม (Sports Analysis Disclaimer):
            </span>
            <p className="text-slate-400 leading-relaxed text-[11px] sm:text-xs">
              ข้อมูล ทัศนะ และการวิเคราะห์ทั้งหมดในเว็บไซต์นี้ จัดทำขึ้นเพื่อเป็นแนวทางทางสถิติ ข้อมูลเชิงลึกด้านแท็กติกฟุตบอล และความบันเทิงสำหรับแฟนกีฬาเท่านั้น ไม่มีการสนับสนุนหรือชักชวนให้เล่นการพนันที่ผิดกฎหมายในทุกรูปแบบ ผู้ติดตามควรใช้วิจารณญาณและความรอบคอบในการรับชมข้อมูล
            </p>
          </div>
        </div>

        {/* Footer Navigation & Copyright */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-slate-900">
          <div className="flex items-center gap-2">
            <span className="text-base">⚽</span>
            <span className="font-bold text-white tracking-tight">แนวทางน้าหงส์</span>
            <span className="text-slate-600">·</span>
            <span>ประจำวันที่ 1 ตุลาคม 2569</span>
          </div>

          <div className="flex items-center gap-6 text-slate-400 text-[11px]">
            <a href="#top" className="hover:text-amber-400 transition-colors">
              กลับขึ้นด้านบน
            </a>
            <a href="#nations-league-fixtures" className="hover:text-amber-400 transition-colors">
              โปรแกรมเนชั่นส์ลีก
            </a>
            <a href="#three-picks" className="hover:text-amber-400 transition-colors">
              3 ตัวเน้น
            </a>
            <a href="#group-reviews" className="hover:text-amber-400 transition-colors">
              รีวิวผลงานกลุ่ม
            </a>
            <a href="#slip-calculator" className="hover:text-amber-400 transition-colors">
              จำลองชุดสเต็ป
            </a>
            <a 
              href="https://lin.ee/OLW4xO3" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-[#06C755] hover:text-emerald-400 font-bold transition-colors flex items-center gap-1"
            >
              <span>LINE: @nn25</span>
            </a>
          </div>

          <div className="text-slate-500 text-[11px]">
            ลิขสิทธิ์ © 2569 แนวทางน้าหงส์. สงวนลิขสิทธิ์ทุกประการ.
          </div>
        </div>

      </div>
    </footer>
  );
};
