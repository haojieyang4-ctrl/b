import React, { useState } from 'react';
import { NATIONS_LEAGUE_TABLE_ROWS, NationsLeagueTableRow } from '../data/fixturesData';
import { 
  Trophy, 
  Tv, 
  ExternalLink, 
  Flame, 
  ArrowUp, 
  ArrowDown, 
  HelpCircle,
  Sparkles,
  CheckCircle2
} from 'lucide-react';

interface NationsLeagueFixturesProps {
  onScrollToPick?: (pickId: string) => void;
}

export const NationsLeagueFixtures: React.FC<NationsLeagueFixturesProps> = ({ onScrollToPick }) => {
  const [selectedMatchId, setSelectedMatchId] = useState<string | null>(null);

  const getPickId = (rowId: string) => {
    if (rowId === 'nl-wal-nor') return 'norway';
    if (rowId === 'nl-ger-srb') return 'germany';
    if (rowId === 'nl-aze-lie') return 'azerbaijan';
    return null;
  };

  return (
    <div className="rounded-2xl overflow-hidden border border-amber-900/40 shadow-2xl bg-slate-900/90">
      
      {/* Top Main Tournament Banner (matching image header) */}
      <div className="bg-gradient-to-r from-[#943f1f] via-[#b85328] to-[#943f1f] px-4 py-3 sm:px-6 flex items-center justify-between border-b border-amber-600/30">
        <div className="flex items-center gap-3">
          {/* Tournament logo badge */}
          <div className="w-8 h-8 rounded-lg bg-black/30 border border-white/20 flex items-center justify-center text-white shrink-0 shadow-inner">
            <span className="text-base">🏆</span>
          </div>
          <div>
            <h2 className="text-base sm:text-lg font-black text-white tracking-wide flex items-center gap-2">
              <span>ยูฟ่า เนชั่นส์ ลีก (UEFA Nations League 2026-27)</span>
            </h2>
            <p className="text-[11px] text-amber-100/90 font-light">
              ตารางโปรแกรมถ่ายทอดสด ราคาบอล และทรรศนะฟันธงทีเด็ดบอลคืนนี้ (1 ต.ค. 2569)
            </p>
          </div>
        </div>

        <div className="hidden sm:flex items-center gap-2 text-xs font-mono text-white/90 bg-black/25 px-3 py-1 rounded-full border border-white/10">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span>อัปเดตราคาบอลล่าสุด</span>
        </div>
      </div>

      {/* Responsive Table Container */}
      <div className="overflow-x-auto">
        <table className="w-full text-left text-xs border-collapse min-w-[760px]">
          {/* Column Header Row (Peach / Orange header from image) */}
          <thead>
            <tr className="bg-[#f2864b] text-slate-950 font-bold text-center border-b border-[#d86a2f]">
              <th className="py-2.5 px-3 w-16">เวลา</th>
              <th className="py-2.5 px-2 w-10">ธง</th>
              <th className="py-2.5 px-2 w-10">สด</th>
              <th className="py-2.5 px-4 text-center w-48">เจ้าบ้าน</th>
              <th className="py-2.5 px-3 text-center w-36">ราคาบอล</th>
              <th className="py-2.5 px-4 text-center w-48">ทีมเยือน</th>
              <th className="py-2.5 px-3 text-center w-20">ครึ่งแรก</th>
              <th className="py-2.5 px-3 text-center w-20">ผลบอล</th>
              <th className="py-2.5 px-4 text-center">ทรรศนะฟุตบอลวันนี้/ ทีเด็ดบอลคืนนี้</th>
            </tr>
          </thead>

          {/* Table Body */}
          <tbody className="divide-y divide-slate-800/80 text-slate-200">
            {NATIONS_LEAGUE_TABLE_ROWS.map((row, idx) => {
              const isEven = idx % 2 === 0;
              const pickId = getPickId(row.id);
              const isSelected = selectedMatchId === row.id;

              return (
                <tr
                  key={row.id}
                  onClick={() => setSelectedMatchId(row.id)}
                  className={`transition-colors cursor-pointer ${
                    isSelected
                      ? 'bg-amber-500/15'
                      : isEven
                      ? 'bg-[#181e29]/95 hover:bg-[#20293a]'
                      : 'bg-[#111622]/95 hover:bg-[#1c2433]'
                  }`}
                >
                  {/* เวลา (Kickoff Time) */}
                  <td className="py-3 px-3 text-center font-mono font-bold text-slate-300 whitespace-nowrap">
                    {row.time}
                  </td>

                  {/* ธง (Tournament Logo) */}
                  <td className="py-3 px-2 text-center whitespace-nowrap">
                    <div className="w-5 h-5 mx-auto rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center text-[10px]" title="UEFA Nations League">
                      🌐
                    </div>
                  </td>

                  {/* สด (Live TV icon) */}
                  <td className="py-3 px-2 text-center whitespace-nowrap">
                    <div className="w-5 h-5 mx-auto rounded bg-red-600/30 border border-red-500/50 flex items-center justify-center text-red-400" title="ถ่ายทอดสด">
                      <Tv className="w-3 h-3" />
                    </div>
                  </td>

                  {/* เจ้าบ้าน (Home Team) */}
                  <td className="py-3 px-4 text-center">
                    <div className="flex items-center justify-center gap-1.5 font-medium">
                      <span className="text-slate-400 font-mono text-[11px]">
                        [{row.homeTeam.rank}]
                      </span>
                      <span
                        className={`text-sm ${
                          row.homeTeam.isRecommended
                            ? 'text-red-500 font-bold underline decoration-red-500 decoration-1 underline-offset-2'
                            : 'text-slate-200'
                        }`}
                      >
                        {row.homeTeam.name}
                      </span>
                    </div>
                  </td>

                  {/* ราคาบอล (Odds/Handicap with arrows) */}
                  <td className="py-3 px-3 text-center">
                    <div className="flex flex-col items-center justify-center text-xs font-mono">
                      {row.handicapValues.map((val, hIdx) => {
                        const isPrimary = hIdx === 0;
                        return (
                          <div
                            key={hIdx}
                            className={`flex items-center gap-1 leading-tight ${
                              isPrimary ? 'font-bold text-slate-100' : 'text-slate-400 text-[11px]'
                            }`}
                          >
                            {!isPrimary && row.priceTrend === 'up' && (
                              <span className="text-emerald-400 text-[10px]">▲</span>
                            )}
                            {!isPrimary && row.priceTrend === 'down' && (
                              <span className="text-rose-500 text-[10px]">▼</span>
                            )}
                            <span>{val}</span>
                          </div>
                        );
                      })}
                    </div>
                  </td>

                  {/* ทีมเยือน (Away Team) */}
                  <td className="py-3 px-4 text-center">
                    <div className="flex items-center justify-center gap-1.5 font-medium">
                      <span
                        className={`text-sm ${
                          row.awayTeam.isRecommended
                            ? 'text-red-500 font-bold underline decoration-red-500 decoration-1 underline-offset-2'
                            : 'text-slate-200'
                        }`}
                      >
                        {row.awayTeam.name}
                      </span>
                      <span className="text-slate-400 font-mono text-[11px]">
                        [{row.awayTeam.rank}]
                      </span>
                    </div>
                  </td>

                  {/* ครึ่งแรก (First half score) */}
                  <td className="py-3 px-3 text-center font-mono text-slate-500">
                    {row.halfScore}
                  </td>

                  {/* ผลบอล (Full-time score) */}
                  <td className="py-3 px-3 text-center font-mono font-bold text-red-500 tracking-wider">
                    {row.fullScore}
                  </td>

                  {/* ทรรศนะฟุตบอลวันนี้/ ทีเด็ดบอลคืนนี้ */}
                  <td className="py-3 px-4 text-center whitespace-nowrap">
                    <div className="flex items-center justify-center gap-2">
                      <span className="font-semibold text-blue-400 hover:text-blue-300 transition-colors">
                        {row.verdict}
                      </span>

                      {pickId && onScrollToPick && (
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            onScrollToPick(pickId);
                          }}
                          className="px-2 py-0.5 rounded bg-amber-400/20 hover:bg-amber-400 text-amber-300 hover:text-slate-950 font-bold text-[10px] transition-all shrink-0 border border-amber-400/30"
                          title="ดูบทวิเคราะห์น้าหงส์"
                        >
                          ⭐ 3 ตัวเน้น
                        </button>
                      )}
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {/* Legend & Summary Info Bar */}
      <div className="p-3.5 bg-slate-950/90 border-t border-slate-800 text-xs text-slate-400 flex flex-col sm:flex-row items-center justify-between gap-3">
        <div className="flex flex-wrap items-center gap-4 text-[11px]">
          <span className="flex items-center gap-1.5">
            <span className="text-red-500 font-bold underline">สีแดงขีดเส้นใต้</span>
            <span>= ทีมที่น้าหงส์แนะนำ / ราคาต่อรอง</span>
          </span>
          <span className="flex items-center gap-1">
            <span className="text-emerald-400 font-bold">▲</span>
            <span>= ราคาน้ำไหลต่อ</span>
          </span>
          <span className="flex items-center gap-1">
            <span className="text-rose-500 font-bold">▼</span>
            <span>= ราคาน้ำไหลรอง</span>
          </span>
        </div>

        <div className="text-[11px] text-slate-400 flex items-center gap-1.5">
          <span>ไฮไลท์ 3 คู่เน้นคืนนี้:</span>
          <strong className="text-amber-400">นอร์เวย์, เยอรมนี, อาเซอร์ไบจาน</strong>
        </div>
      </div>

    </div>
  );
};
