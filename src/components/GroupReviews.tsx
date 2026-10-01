import React, { useState } from 'react';
import uncleHongAvatar from '../assets/images/uncle_hong_identity_avatar_1790832236925.jpg';
import { 
  Flame, 
  Users, 
  CheckCircle2, 
  Trophy, 
  MessageSquare, 
  Star, 
  ArrowRight, 
  TrendingUp, 
  Sparkles, 
  ShieldCheck,
  Calendar,
  Layers
} from 'lucide-react';

interface PerformanceItem {
  id: string;
  date: string;
  badge: string;
  highlightText: string;
  punditName: string;
  profitLabel: string;
  chatQuote: string;
  matches: {
    team: string;
    score: string;
    handicap: string;
    status: 'win' | 'half-win' | 'lose';
  }[];
}

const PERFORMANCE_DATA: PerformanceItem[] = [
  {
    id: 'perf-29-sep-1',
    date: '29 ก.ย. 69',
    badge: 'ตัวเน้นกินเต็ม',
    punditName: 'ป. โน้ต เซียนบอล',
    highlightText: 'สิงโตจัดเต็ม 2-0 บอลชุด 3 เข้าเป้า สมาชิกรวมกำไรชื่นมื่น!',
    profitLabel: 'บวกกำไรรวม +40,100',
    chatQuote: 'สิงโตคำราม มาตามนัดครับ จบเกม พอดีคำ 0-2 หวานเจี๊ยบ 🥳 ยินดีกับท่านที่ตามด้วยนะครับ วันนี้ลุยต่อ!',
    matches: [
      { team: 'อังกฤษ', score: '2 - 0', handicap: '-1.5', status: 'win' },
      { team: 'สเปน', score: '4 - 1', handicap: '-1.75', status: 'win' },
      { team: 'สโลวีเนีย', score: '2 - 0', handicap: '-0.75', status: 'win' },
    ]
  },
  {
    id: 'perf-29-sep-2',
    date: '29 ก.ย. 69',
    badge: 'ตัวเน้น 2 วันติด',
    punditName: 'เสือใหญ่ เซียนโน้ต',
    highlightText: 'กระทิงดุจัด 4-1 ตัวเน้นฟันกำไรยับ 2 วันติด ถอนเงินรัวๆ',
    profitLabel: 'ตัวเน้น 2 วัน +301,110',
    chatQuote: 'กระทิงดุจริงครับ เกมนี้ชนะขาด 4-1 น้องบ่าวชาวชาวยะลากดไป 2 เม็ด! ขอถอนกำไรไปใช้ก่อนครับ เหลือทุนไว้ลุยต่อ 🤝',
    matches: [
      { team: 'สเปน', score: '4 - 1', handicap: '-1.75', status: 'win' },
      { team: 'อังกฤษ', score: '2 - 0', handicap: '-1.5', status: 'win' },
      { team: 'สโลวีเนีย', score: '2 - 0', handicap: 'สูง 2.0', status: 'win' },
    ]
  },
  {
    id: 'perf-29-sep-3',
    date: '29 ก.ย. 69',
    badge: 'สเต็ป 3 แตกยับ',
    punditName: 'น้าแมว คืนนี้',
    highlightText: 'แตกกกก สเต็ป 3 แตก ตัวเน้นกินเต็มคำ สวิตเซอร์แลนด์ + สโลวีเนีย + กาบอง',
    profitLabel: 'สเต็ป 3 แตก รับทรัพย์เต็มๆ',
    chatQuote: 'เช้านี้บวกกำไรจากสเต็ป 3 แตก 1 ชุด และตัวเน้นรับทรัพย์กันเต็มๆ พี่ท่านไหนตามแนวทาง ถอดกำไรได้เลยแล้วลุยกันต่อ 🔥',
    matches: [
      { team: 'สวิตเซอร์แลนด์', score: '3 - 0', handicap: '-0.5', status: 'win' },
      { team: 'สโลวีเนีย', score: '2 - 0', handicap: '-0.75', status: 'win' },
      { team: 'กาบอง', score: '2 - 0', handicap: '-0.75', status: 'win' },
    ]
  },
  {
    id: 'perf-28-sep-1',
    date: '28 ก.ย. 69',
    badge: 'เต็งอิตาลี แตกหนัก',
    punditName: 'แดนเหนือ VIP',
    highlightText: 'เต็งอิตาลี ไม่ผิดหวัง ชุด 3 แตกหนัก กำไร+ทุน 109,450 หวานเจี๊ยบ',
    profitLabel: 'สรุปกำไร+ทุน +109,450',
    chatQuote: 'สรุปผลงานเมื่อคืนนี้แตก อิตาลีไม่ทำให้ผิดหวัง และชุด 3 แตก หวานเจี๊ยบ กำไร+ทุน 109,450 ยินดีกับทุกท่านที่ตามด้วยครับ 🎉',
    matches: [
      { team: 'อิตาลี', score: '4 - 1', handicap: '-0', status: 'win' },
      { team: 'สวีเดน', score: '3 - 1', handicap: 'สูง 2.75', status: 'win' },
      { team: 'บอสเนีย', score: '2 - 3', handicap: '+0.5', status: 'win' },
    ]
  },
  {
    id: 'perf-28-sep-2',
    date: '28 ก.ย. 69',
    badge: 'เต็งคองโก กินเต็ม',
    punditName: 'จารย์ไผ่ วิเคราะห์บอล',
    highlightText: 'เต็ง DR คองโก จบกินเต็ม ชุด 3 แตกสนั่น ยินดีกับสมาชิกทุกท่าน',
    profitLabel: 'รับทรัพย์กันไปครับเช้านี้',
    chatQuote: 'ตัวเน้นคองโก-กินชาซา 1-2 เต็มข้อครับ และชุดโครงการแตกทั้ง 2 ชุด ถอนทุนพร้อมกำไรครับผม 🎊',
    matches: [
      { team: 'DR คองโก', score: '2 - 1', handicap: '-0.5', status: 'win' },
      { team: 'ฝรั่งเศส', score: '1 - 0', handicap: '-0.5', status: 'win' },
      { team: 'สวีเดน', score: '3 - 1', handicap: 'สูง 2.75', status: 'win' },
    ]
  },
  {
    id: 'perf-27-sep-1',
    date: '27 ก.ย. 69',
    badge: 'สเต็ปแตก กำไรแน่น',
    punditName: 'มาวิน VIP',
    highlightText: 'ออสเตรีย 3-1 เดนมาร์ก 2-0 สเต็ปแตก สมาชิกรับทรัพย์กำไร +75,016',
    profitLabel: 'กำไรสุทธิ +75,016',
    chatQuote: 'สรุปผลหลังบอลจบ สเต็ปแตกกกก! ออสเตรียเปิดบ้านคว้า 3 คะแนนตามคาด แถมชุด 3 แตกสวยๆ อีก 1 ชุด ถอนกำไรไปใช้กันได้เลยครับ 🍻',
    matches: [
      { team: 'ออสเตรีย', score: '3 - 1', handicap: '-0.75', status: 'win' },
      { team: 'เดนมาร์ก', score: '2 - 0', handicap: '-1.0', status: 'win' },
      { team: 'เนเธอร์แลนด์', score: '2 - 1', handicap: '-1.0', status: 'win' },
    ]
  }
];

export const GroupReviews: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState<'ALL' | '29 ก.ย.' | '28 ก.ย.' | '27 ก.ย.'>('ALL');

  const filteredPerformances = PERFORMANCE_DATA.filter((item) => {
    if (selectedDate === 'ALL') return true;
    return item.date.includes(selectedDate);
  });

  return (
    <div className="space-y-8">
      {/* SECTION HEADER & SALES BANNER */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-amber-950/40 via-slate-900 to-emerald-950/30 border border-amber-500/30 p-6 sm:p-8 lg:p-10 shadow-2xl">
        {/* Decorative background blurs */}
        <div className="absolute top-0 right-0 -mt-12 -mr-12 w-80 h-80 rounded-full bg-amber-500/10 blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 -mb-12 -ml-12 w-80 h-80 rounded-full bg-emerald-500/10 blur-3xl pointer-events-none" />

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left: Persuasive Copywriting from User Request */}
          <div className="lg:col-span-7 space-y-5">
            <div className="flex items-center gap-3">
              <img
                src={uncleHongAvatar}
                alt="น้าหงส์"
                referrerPolicy="no-referrer"
                className="w-12 h-12 rounded-2xl object-cover border-2 border-amber-400/70 shadow-lg shadow-amber-950/40"
              />
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-400/20 text-amber-300 border border-amber-400/30 text-xs font-bold tracking-wide">
                <Flame className="w-4 h-4 fill-amber-400 text-amber-400" />
                <span>คอบอลตัวจริง ห้ามพลาด! เข้ากลุ่มน้าหงส์คืนนี้</span>
              </div>
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight leading-snug">
              คืนนี้ใครกำลังหาข้อมูลบอลก่อนแข่ง <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-amber-300 to-emerald-400">
                เข้ากลุ่มน้าหงส์ไว้เลยครับ! ⚽️🔥
              </span>
            </h2>

            {/* Bullet Points from user prompt */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs sm:text-sm text-slate-200">
              <div className="flex items-center gap-2.5 bg-slate-950/60 p-2.5 rounded-xl border border-slate-800">
                <span className="text-base">📌</span>
                <span className="font-medium">ข่าวฟุตบอลอัปเดตก่อนเกม</span>
              </div>
              <div className="flex items-center gap-2.5 bg-slate-950/60 p-2.5 rounded-xl border border-slate-800">
                <span className="text-base">📌</span>
                <span className="font-medium">วิเคราะห์ความพร้อมของทีม</span>
              </div>
              <div className="flex items-center gap-2.5 bg-slate-950/60 p-2.5 rounded-xl border border-slate-800">
                <span className="text-base">📌</span>
                <span className="font-medium">สถิติและฟอร์มล่าสุด</span>
              </div>
              <div className="flex items-center gap-2.5 bg-slate-950/60 p-2.5 rounded-xl border border-slate-800">
                <span className="text-base">📌</span>
                <span className="font-medium">มุมมองก่อนแข่งแบบเข้าใจง่าย</span>
              </div>
              <div className="sm:col-span-2 flex items-center gap-2.5 bg-slate-950/60 p-2.5 rounded-xl border border-slate-800">
                <span className="text-base">📌</span>
                <span className="font-medium">พูดคุยแลกเปลี่ยนกับสมาชิกในกลุ่มแบบเป็นกันเอง</span>
              </div>
            </div>

            {/* Motivational pitch */}
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-light">
              <strong className="text-white font-semibold">ไม่ต้องไล่หาข้อมูลหลายที่ให้เสียเวลา</strong> รวมเรื่องฟุตบอลที่น่าสนใจไว้ให้ติดตามในกลุ่มเดียว 👊🔥 อยากตามข่าว อยากดูบทวิเคราะห์ อยากคุยเรื่องบอลกับเพื่อนๆ <span className="text-amber-300 font-semibold">ทักน้าหงส์ แล้วเข้ากลุ่มได้เลยครับ!</span>
            </p>

            {/* Action buttons */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <a
                href="https://lin.ee/OLW4xO3"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-2xl bg-[#06C755] hover:bg-[#05b34c] text-white font-extrabold text-sm shadow-xl shadow-[#06C755]/30 transition-all hover:scale-102 active:scale-95 text-center"
              >
                <span className="font-black text-base">💬</span>
                <span>เข้ากลุ่มวันนี้ ทัก LINE: @nn25</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <div className="text-[11px] text-slate-400 text-center sm:text-left flex items-center justify-center sm:justify-start gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>เข้ากลุ่มฟรี ไม่มีค่าใช้จ่ายแอบแฝง</span>
              </div>
            </div>
          </div>

          {/* Right: Social Proof & Member Stats (from real LINE chat screenshot) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="p-5 rounded-2xl bg-slate-950/90 border border-slate-800 space-y-4 shadow-xl">
              <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-[#06C755] text-white flex items-center justify-center text-sm font-black">
                    LINE
                  </div>
                  <div>
                    <span className="text-xs font-bold text-white block">กลุ่ม VIP วิเคราะห์บอล</span>
                    <span className="text-[10px] text-emerald-400 font-mono">ห้องแชทคึกคัก 24 ชม.</span>
                  </div>
                </div>
                <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 font-bold border border-emerald-500/30">
                  ห้องหลัก 40+ กลุ่ม
                </span>
              </div>

              {/* Verified Room Samples */}
              <div className="space-y-2 text-xs">
                <div className="flex items-center justify-between p-2.5 rounded-xl bg-slate-900 border border-slate-800/80">
                  <div className="flex items-center gap-2">
                    <span className="text-base">⚽</span>
                    <div>
                      <span className="text-slate-200 font-bold block">TD.วิเคราะห์บอล VIP 1 - 44</span>
                      <span className="text-[10px] text-slate-400">สมาชิกเฉลี่ย 350 - 490 คน/กลุ่ม</span>
                    </div>
                  </div>
                  <span className="text-xs font-bold text-emerald-400 font-mono">10,000+ สมาชิก</span>
                </div>

                <div className="flex items-center justify-between p-2.5 rounded-xl bg-slate-900 border border-slate-800/80">
                  <div className="flex items-center gap-2">
                    <span className="text-base">🎯</span>
                    <div>
                      <span className="text-slate-200 font-bold block">สถิติตัวเน้นเข้าเป้า</span>
                      <span className="text-[10px] text-slate-400">สรุปผลงานตามจริงทุกเช้า</span>
                    </div>
                  </div>
                  <span className="text-xs font-bold text-amber-400 font-mono">เข้า 5 วันติด</span>
                </div>

                <div className="flex items-center justify-between p-2.5 rounded-xl bg-slate-900 border border-slate-800/80">
                  <div className="flex items-center gap-2">
                    <span className="text-base">💬</span>
                    <div>
                      <span className="text-slate-200 font-bold block">กลุ่มพูดคุยแลกเปลี่ยน</span>
                      <span className="text-[10px] text-slate-400">สังคมคอบอลคุณภาพ</span>
                    </div>
                  </div>
                  <span className="text-xs font-bold text-blue-400 font-mono">เป็นกันเอง</span>
                </div>
              </div>

              {/* Bottom Quote inside box */}
              <div className="pt-2 border-t border-slate-800/80 text-center">
                <p className="text-[11px] text-amber-300 font-medium">
                  &ldquo;กลุ่มนี้พาบวกทุกวัน บอลเต็งเข้า บอลชุดแตก&rdquo;
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* SECTION 2: REAL GROUP PERFORMANCE TRACK RECORD */}
      <div className="space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 border-b border-slate-800 pb-4">
          <div>
            <div className="flex items-center gap-2 text-xs text-amber-400 font-semibold uppercase tracking-wider">
              <Trophy className="w-4 h-4 text-amber-400" />
              <span>สรุปผลงานกลุ่มย้อนหลังตามความจริง</span>
            </div>
            <h3 className="text-2xl font-black text-white tracking-tight mt-1">
              ผลงานในกลุ่ม VIP วันที่ผ่านมา (27 - 29 ก.ย. 69)
            </h3>
          </div>

          {/* Date Filter Pills */}
          <div className="flex items-center gap-1.5 bg-slate-950 p-1 rounded-xl border border-slate-800 text-xs self-start sm:self-auto">
            <button
              onClick={() => setSelectedDate('ALL')}
              className={`px-3 py-1.5 rounded-lg font-medium transition-all ${
                selectedDate === 'ALL'
                  ? 'bg-amber-400 text-slate-950 font-bold shadow-sm'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              ทั้งหมด
            </button>
            <button
              onClick={() => setSelectedDate('29 ก.ย.')}
              className={`px-3 py-1.5 rounded-lg font-medium transition-all ${
                selectedDate === '29 ก.ย.'
                  ? 'bg-amber-400 text-slate-950 font-bold shadow-sm'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              29 ก.ย. 69
            </button>
            <button
              onClick={() => setSelectedDate('28 ก.ย.')}
              className={`px-3 py-1.5 rounded-lg font-medium transition-all ${
                selectedDate === '28 ก.ย.'
                  ? 'bg-amber-400 text-slate-950 font-bold shadow-sm'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              28 ก.ย. 69
            </button>
            <button
              onClick={() => setSelectedDate('27 ก.ย.')}
              className={`px-3 py-1.5 rounded-lg font-medium transition-all ${
                selectedDate === '27 ก.ย.'
                  ? 'bg-amber-400 text-slate-950 font-bold shadow-sm'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              27 ก.ย. 69
            </button>
          </div>
        </div>

        {/* Performance Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredPerformances.map((perf) => (
            <div
              key={perf.id}
              className="rounded-2xl border border-slate-800 bg-slate-900/95 p-5 flex flex-col justify-between hover:border-amber-400/50 transition-all shadow-lg hover:shadow-amber-500/5 group"
            >
              <div className="space-y-3.5">
                {/* Header row */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-mono font-bold px-2 py-0.5 rounded bg-slate-800 text-slate-300 border border-slate-700">
                      {perf.date}
                    </span>
                    <span className="text-[11px] font-semibold text-emerald-400">
                      {perf.punditName}
                    </span>
                  </div>
                  <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                    {perf.badge}
                  </span>
                </div>

                {/* Highlight headline */}
                <h4 className="text-sm font-bold text-white group-hover:text-amber-300 transition-colors leading-snug">
                  {perf.highlightText}
                </h4>

                {/* Matches Results Pills */}
                <div className="space-y-1.5 bg-slate-950 p-2.5 rounded-xl border border-slate-800/80">
                  {perf.matches.map((m, mIdx) => (
                    <div key={mIdx} className="flex items-center justify-between text-xs">
                      <div className="flex items-center gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                        <span className="font-semibold text-slate-200">{m.team}</span>
                        <span className="text-[10px] font-mono text-slate-500">({m.handicap})</span>
                      </div>
                      <span className="font-mono font-bold text-amber-400 text-xs">
                        {m.score}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Real Chat Quote snippet */}
                <div className="p-3 rounded-xl bg-slate-950/60 border border-slate-800/60 text-xs text-slate-300 italic relative">
                  <p className="text-[11px] leading-relaxed">
                    &ldquo;{perf.chatQuote}&rdquo;
                  </p>
                </div>
              </div>

              {/* Profit Bottom Strip */}
              <div className="pt-3 mt-3 border-t border-slate-800/80 flex items-center justify-between text-xs">
                <span className="text-emerald-400 font-bold font-mono">
                  {perf.profitLabel}
                </span>
                <a
                  href="https://lin.ee/OLW4xO3"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-amber-400 hover:text-amber-300 text-[11px] font-semibold flex items-center gap-1 group-hover:translate-x-0.5 transition-transform"
                >
                  <span>เข้ากลุ่มดูสด</span>
                  <span>→</span>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Banner to prompt user into LINE */}
        <div className="p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-slate-900 via-amber-950/20 to-slate-900 border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex items-center gap-3">
            <span className="text-2xl sm:text-3xl">🔥</span>
            <div>
              <span className="font-bold text-white text-sm block">
                อยากได้แนวทางสดแบบนี้ทุกวันก่อนเตะ?
              </span>
              <span className="text-xs text-slate-400">
                เข้ากลุ่มน้าหงส์วันนี้ แลกเปลี่ยนทัศนะกับเพื่อนๆ สมาชิกฟรี ทัก LINE: @nn25
              </span>
            </div>
          </div>

          <a
            href="https://lin.ee/OLW4xO3"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-[#06C755] hover:bg-[#05b34c] text-white font-bold text-xs shadow-md shadow-[#06C755]/20 transition-all active:scale-95 whitespace-nowrap"
          >
            <span>ทักน้าหงส์ แล้วเข้ากลุ่มได้เลย</span>
            <span>→</span>
          </a>
        </div>
      </div>
    </div>
  );
};
