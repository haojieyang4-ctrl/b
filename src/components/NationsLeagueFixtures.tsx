import React, { useState } from 'react';
import { 
  NATIONS_LEAGUE_TABLE_ROWS, 
  LIVE_ASIAN_BOOKMAKER_MATCHES, 
  AsianBookmakerMatch 
} from '../data/fixturesData';
import { 
  Trophy, 
  Activity, 
  Flame, 
  ArrowUp, 
  ArrowDown, 
  Sparkles, 
  CheckCircle2, 
  Layers, 
  Clock, 
  ExternalLink 
} from 'lucide-react';

interface NationsLeagueFixturesProps {
  onScrollToPick?: (pickId: string) => void;
}

export const NationsLeagueFixtures: React.FC<NationsLeagueFixturesProps> = ({ onScrollToPick }) => {
  const [activeTab, setActiveTab] = useState<'asian-board' | 'editorial-table'>('asian-board');
  const [selectedMatchId, setSelectedMatchId] = useState<string | null>(null);

  const getPickId = (rowId: string) => {
    if (rowId === 'nl-wal-nor' || rowId === 'abm-wal-nor') return 'norway';
    if (rowId === 'nl-ger-srb' || rowId === 'abm-ger-srb') return 'germany';
    if (rowId === 'nl-aze-lie') return 'azerbaijan';
    return null;
  };

  return (
    <div className="rounded-2xl overflow-hidden border border-amber-900/50 shadow-2xl bg-slate-900/90">
      
      {/* Top Main Tournament Banner */}
      <div className="bg-gradient-to-r from-[#943f1f] via-[#b85328] to-[#943f1f] px-4 py-3 sm:px-6 flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-amber-600/30">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl bg-black/30 border border-white/20 flex items-center justify-center text-white shrink-0 shadow-inner">
            <span className="text-lg">🏆</span>
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h2 className="text-base sm:text-lg font-black text-white tracking-wide">
                ยูฟ่า เนชั่นส์ ลีก เอ (UEFA Nations League 2026-27)
              </h2>
              <span className="px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 text-[10px] font-bold font-mono">
                สด 01:45
              </span>
            </div>
            <p className="text-[11px] text-amber-100/90 font-light">
              กระดานราคาฟุตบอลเอเชียนแฮนดิแคปสด (Asian Handicap Live Board) & สรุปทรรศนะน้าหงส์
            </p>
          </div>
        </div>

        {/* View Switcher Tabs */}
        <div className="flex items-center gap-1.5 p-1 rounded-xl bg-black/40 border border-white/10 self-start sm:self-auto text-xs">
          <button
            onClick={() => setActiveTab('asian-board')}
            className={`px-3 py-1.5 rounded-lg font-bold transition-all flex items-center gap-1.5 ${
              activeTab === 'asian-board'
                ? 'bg-amber-400 text-slate-950 shadow-md'
                : 'text-amber-100 hover:text-white'
            }`}
          >
            <Activity className="w-3.5 h-3.5" />
            <span>กระดานราคาบอลสด (Live Odds)</span>
          </button>
          <button
            onClick={() => setActiveTab('editorial-table')}
            className={`px-3 py-1.5 rounded-lg font-bold transition-all flex items-center gap-1.5 ${
              activeTab === 'editorial-table'
                ? 'bg-amber-400 text-slate-950 shadow-md'
                : 'text-amber-100 hover:text-white'
            }`}
          >
            <Layers className="w-3.5 h-3.5" />
            <span>ตารางสรุปทีเด็ดน้าหงส์</span>
          </button>
        </div>
      </div>

      {/* VIEW 1: Authentic Asian Bookmaker Live Odds Board (Matching user uploaded screenshot) */}
      {activeTab === 'asian-board' && (
        <div className="overflow-x-auto bg-[#eef0f3] text-slate-900">
          
          {/* League Section Bar matching screenshot */}
          <div className="bg-[#8b734b] text-white px-4 py-1.5 font-bold text-xs flex items-center justify-between shadow-sm">
            <div className="flex items-center gap-2">
              <span>ยูฟ่า เนชั่นส์ ลีก เอ</span>
              <span className="text-[10px] font-normal opacity-90">(UEFA Nations League A)</span>
            </div>
            <div className="flex items-center gap-2 text-[11px]">
              <span className="px-1.5 py-0.5 rounded bg-amber-400 text-slate-950 text-[10px] font-black">
                สด LIVE
              </span>
              <span>⭐</span>
            </div>
          </div>

          <table className="w-full text-xs border-collapse min-w-[980px] font-['Kanit',sans-serif]">
            <thead>
              <tr className="bg-[#dfbc76] text-slate-900 border-b border-[#c29f5d] text-[11px] font-bold text-center">
                <th className="py-1.5 px-3 text-left w-48 border-r border-[#c29f5d]">สด / เวลา / คู่แข่งขัน</th>
                <th colSpan={5} className="py-1.5 px-2 border-r-2 border-[#8b734b] bg-[#d6b063]">
                  เต็มเวลา (Full Time)
                </th>
                <th colSpan={4} className="py-1.5 px-2 bg-[#dfbc76]">
                  ครึ่งแรก (First Half)
                </th>
              </tr>
              <tr className="bg-[#edd8a6] text-slate-800 border-b border-[#c29f5d] text-[10px] font-semibold text-center">
                <th className="py-1 px-3 text-left border-r border-[#c29f5d]">ทีมเหย้า vs ทีมเยือน</th>
                
                {/* Full Time Columns */}
                <th className="py-1 px-2 w-16 border-r border-[#d4b97a]">HDP</th>
                <th className="py-1 px-2 w-28 border-r border-[#d4b97a]">เจ้าบ้าน / ทีมเยือน</th>
                <th className="py-1 px-2 w-28 border-r border-[#d4b97a]">สูง / ต่ำ</th>
                <th className="py-1 px-2 w-24 border-r border-[#d4b97a]">1X2</th>
                <th className="py-1 px-2 w-16 border-r-2 border-[#8b734b]">คี่ / คู่</th>

                {/* First Half Columns */}
                <th className="py-1 px-2 w-16 border-r border-[#d4b97a]">HDP</th>
                <th className="py-1 px-2 w-28 border-r border-[#d4b97a]">เจ้าบ้าน / ทีมเยือน</th>
                <th className="py-1 px-2 w-24 border-r border-[#d4b97a]">สูง / ต่ำ</th>
                <th className="py-1 px-2 w-24">1X2</th>
              </tr>
            </thead>

            <tbody className="divide-y divide-slate-300">
              {LIVE_ASIAN_BOOKMAKER_MATCHES.map((match, matchIdx) => {
                const pickId = getPickId(match.id);
                const isFavoriteHome = match.favoriteTeam === 'home';
                const isFavoriteAway = match.favoriteTeam === 'away';

                return (
                  <React.Fragment key={match.id}>
                    {match.fullTimeLines.map((line, lineIdx) => {
                      const isFirstLine = lineIdx === 0;
                      const isEvenMatch = matchIdx % 2 === 0;
                      const rowBg = isEvenMatch ? 'bg-[#f8f9fa]' : 'bg-[#edf1f5]';

                      // Corresponding first half line
                      const halfLine = match.firstHalfLines[lineIdx];

                      return (
                        <tr 
                          key={`${match.id}-${lineIdx}`}
                          className={`${rowBg} hover:bg-amber-100/60 transition-colors border-b border-slate-300/60`}
                        >
                          {/* Col 1: Match Meta & Teams (Rendered only on first line or blank for tier lines) */}
                          <td className="py-1.5 px-3 align-top border-r border-slate-300">
                            {isFirstLine ? (
                              <div className="space-y-1">
                                <div className="flex items-center justify-between">
                                  <div className="flex items-center gap-1.5 font-bold">
                                    <span className="text-red-600 font-black">สด</span>
                                    <span className="font-mono text-slate-800">01:45</span>
                                  </div>
                                  <div className="flex items-center gap-0.5 text-[10px]">
                                    <span className="px-1 py-0.2 rounded bg-amber-500 text-white font-bold">M</span>
                                    <span className="px-1 py-0.2 rounded bg-blue-600 text-white font-bold">L</span>
                                    <span className="px-1 py-0.2 rounded bg-indigo-500 text-white font-bold">★</span>
                                  </div>
                                </div>

                                <div className="space-y-0.5 pt-0.5">
                                  <div className={`font-bold ${isFavoriteHome ? 'text-red-600 font-extrabold' : 'text-slate-900'}`}>
                                    {match.homeTeam}
                                  </div>
                                  <div className={`font-bold ${isFavoriteAway ? 'text-red-600 font-extrabold' : 'text-slate-900'}`}>
                                    {match.awayTeam}
                                  </div>
                                  <div className="text-[10px] text-slate-500">
                                    เสมอ
                                  </div>
                                </div>

                                {pickId && onScrollToPick && (
                                  <button
                                    onClick={() => onScrollToPick(pickId)}
                                    className="mt-1 px-2 py-0.5 rounded bg-amber-400 hover:bg-amber-500 text-slate-950 font-bold text-[10px] shadow-sm flex items-center gap-1"
                                  >
                                    <span>⭐ ทีเด็ดน้าหงส์</span>
                                    <span>→</span>
                                  </button>
                                )}
                              </div>
                            ) : null}
                          </td>

                          {/* Full Time HDP */}
                          <td className="py-1 px-2 text-center font-bold text-slate-900 border-r border-slate-300 font-mono">
                            {line.handicap}
                          </td>

                          {/* Full Time Home / Away Odds */}
                          <td className="py-1 px-2 text-center border-r border-slate-300 font-mono font-bold">
                            <div className="flex flex-col gap-0.5 text-[11px]">
                              <span className={line.homeOdds.startsWith('-') ? 'text-red-600 font-extrabold' : 'text-slate-900'}>
                                {line.homeOdds}
                              </span>
                              <span className={line.awayOdds.startsWith('-') ? 'text-red-600 font-extrabold' : 'text-slate-900'}>
                                {line.awayOdds} <span className="text-[9px] text-slate-500">u</span>
                              </span>
                            </div>
                          </td>

                          {/* Full Time Over / Under */}
                          <td className="py-1 px-2 text-center border-r border-slate-300 font-mono">
                            <div className="flex items-center justify-between text-[11px] px-1 font-semibold">
                              <span className="text-slate-700">{line.overUnder}</span>
                              <div className="flex flex-col text-right font-bold">
                                <span className={line.overOdds.startsWith('-') ? 'text-red-600' : 'text-slate-900'}>
                                  {line.overOdds}
                                </span>
                                <span className={line.underOdds.startsWith('-') ? 'text-red-600' : 'text-slate-900'}>
                                  {line.underOdds}
                                </span>
                              </div>
                            </div>
                          </td>

                          {/* Full Time 1X2 */}
                          <td className="py-1 px-2 text-center border-r border-slate-300 font-mono text-[11px]">
                            {isFirstLine ? (
                              <div className="flex flex-col gap-0.5 font-bold text-slate-800">
                                <span>{match.oneXTwo.home.toFixed(2)}</span>
                                <span>{match.oneXTwo.away.toFixed(2)}</span>
                                <span className="text-slate-600">{match.oneXTwo.draw.toFixed(2)}</span>
                              </div>
                            ) : null}
                          </td>

                          {/* Full Time Odd / Even */}
                          <td className="py-1 px-2 text-center border-r-2 border-[#8b734b] font-mono text-[10px]">
                            {isFirstLine && match.oddEven ? (
                              <div className="flex flex-col gap-0.5 text-slate-800 font-semibold">
                                <span className="text-blue-700">คี่ {match.oddEven.odd}</span>
                                <span className="text-blue-700">คู่ {match.oddEven.even}</span>
                              </div>
                            ) : null}
                          </td>

                          {/* First Half HDP */}
                          <td className="py-1 px-2 text-center font-bold text-slate-900 border-r border-slate-300 font-mono">
                            {halfLine ? halfLine.handicap : ''}
                          </td>

                          {/* First Half Odds */}
                          <td className="py-1 px-2 text-center border-r border-slate-300 font-mono font-bold">
                            {halfLine ? (
                              <div className="flex flex-col gap-0.5 text-[11px]">
                                <span className={halfLine.homeOdds.startsWith('-') ? 'text-red-600 font-extrabold' : 'text-slate-900'}>
                                  {halfLine.homeOdds}
                                </span>
                                <span className={halfLine.awayOdds.startsWith('-') ? 'text-red-600 font-extrabold' : 'text-slate-900'}>
                                  {halfLine.awayOdds} <span className="text-[9px] text-slate-500">u</span>
                                </span>
                              </div>
                            ) : null}
                          </td>

                          {/* First Half Over / Under */}
                          <td className="py-1 px-2 text-center border-r border-slate-300 font-mono">
                            {halfLine ? (
                              <div className="flex items-center justify-between text-[11px] px-1 font-semibold">
                                <span className="text-slate-700">{halfLine.overUnder}</span>
                                <div className="flex flex-col text-right font-bold">
                                  <span className={halfLine.overOdds.startsWith('-') ? 'text-red-600' : 'text-slate-900'}>
                                    {halfLine.overOdds}
                                  </span>
                                  <span className={halfLine.underOdds.startsWith('-') ? 'text-red-600' : 'text-slate-900'}>
                                    {halfLine.underOdds}
                                  </span>
                                </div>
                              </div>
                            ) : null}
                          </td>

                          {/* First Half 1X2 */}
                          <td className="py-1 px-2 text-center font-mono text-[11px]">
                            {isFirstLine && match.firstHalfOneXTwo ? (
                              <div className="flex flex-col gap-0.5 font-bold text-slate-800">
                                <span>{match.firstHalfOneXTwo.home.toFixed(2)}</span>
                                <span>{match.firstHalfOneXTwo.away.toFixed(2)}</span>
                                <span className="text-slate-600">{match.firstHalfOneXTwo.draw.toFixed(2)}</span>
                              </div>
                            ) : null}
                          </td>
                        </tr>
                      );
                    })}
                  </React.Fragment>
                );
              })}
            </tbody>
          </table>

          {/* Asian Odds Explainer Bar */}
          <div className="p-3 bg-[#e2e6eb] border-t border-slate-300 text-xs text-slate-700 flex flex-wrap items-center justify-between gap-3 font-medium">
            <div className="flex items-center gap-3">
              <span className="flex items-center gap-1">
                <span className="text-red-600 font-bold">ตัวอักษรสีแดง</span> = ทีมต่อ (Favorites) / ค่าน้ำติดลบ (มาเลย์ แดง)
              </span>
              <span className="flex items-center gap-1">
                <span className="text-slate-900 font-bold">ตัวอักษรสีดำ</span> = ทีมรอง / ค่าน้ำบวก
              </span>
            </div>
            <div className="text-slate-600 text-[11px] font-mono">
              ข้อมูลอัปเดตราคาแบบ Real-time ตรงตามกระดานฟุตบอลระดับสากล
            </div>
          </div>
        </div>
      )}

      {/* VIEW 2: Editorial Picks Table */}
      {activeTab === 'editorial-table' && (
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs border-collapse min-w-[760px]">
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
                    <td className="py-3 px-3 text-center font-mono font-bold text-slate-300 whitespace-nowrap">
                      {row.time}
                    </td>

                    <td className="py-3 px-2 text-center whitespace-nowrap">
                      <div className="w-5 h-5 mx-auto rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center text-[10px]">
                        🌐
                      </div>
                    </td>

                    <td className="py-3 px-2 text-center whitespace-nowrap">
                      <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse inline-block" />
                    </td>

                    <td className="py-3 px-4 text-center">
                      <div className="flex items-center justify-center gap-1.5 font-medium">
                        <span className="text-base">{row.homeTeam.flag}</span>
                        <span
                          className={`text-sm ${
                            row.homeTeam.isRecommended
                              ? 'text-red-500 font-bold underline decoration-red-500 decoration-1 underline-offset-2'
                              : 'text-slate-200'
                          }`}
                        >
                          {row.homeTeam.name}
                        </span>
                        <span className="text-slate-400 font-mono text-[11px]">
                          [{row.homeTeam.rank}]
                        </span>
                      </div>
                    </td>

                    <td className="py-3 px-3 text-center">
                      <div className="inline-flex flex-col items-center justify-center bg-slate-950/80 px-2.5 py-1 rounded-md border border-slate-800 font-mono">
                        <div className="flex items-center gap-1 font-bold text-amber-400">
                          <span>{row.handicapValues[0]}</span>
                          {row.priceTrend === 'up' && (
                            <span className="text-[10px] text-emerald-400 font-bold">▲</span>
                          )}
                          {row.priceTrend === 'down' && (
                            <span className="text-[10px] text-rose-400 font-bold">▼</span>
                          )}
                        </div>
                        {row.handicapValues.slice(1).map((val, i) => (
                          <span key={i} className="text-[10px] text-slate-400">
                            {val}
                          </span>
                        ))}
                      </div>
                    </td>

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
                        <span className="text-base">{row.awayTeam.flag}</span>
                      </div>
                    </td>

                    <td className="py-3 px-3 text-center font-mono text-slate-500">
                      {row.halfScore}
                    </td>

                    <td className="py-3 px-3 text-center font-mono font-bold text-red-500 tracking-wider">
                      {row.fullScore}
                    </td>

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
      )}

      {/* Legend & Summary Info Bar */}
      <div className="p-3.5 bg-slate-950/90 border-t border-slate-800 text-xs text-slate-400 flex flex-col sm:flex-row items-center justify-between gap-3">
        <div className="flex flex-wrap items-center gap-4 text-[11px]">
          <span className="flex items-center gap-1.5">
            <span className="text-red-500 font-bold underline">สีแดง</span>
            <span>= ทีมที่น้าหงส์ชี้เป้า / ราคาต่อรองหลัก</span>
          </span>
          <span className="flex items-center gap-1">
            <span className="text-emerald-400 font-bold">▲</span>
            <span>= ราคาน้ำไหลต่อ (นอร์เวย์ 1-1.5, เยอรมัน 2.0)</span>
          </span>
        </div>

        <div className="text-[11px] text-slate-400 flex items-center gap-1.5">
          <span>ไฮไลท์ 3 คู่เน้นคืนนี้:</span>
          <strong className="text-amber-400">นอร์เวย์ (1-1.5), เยอรมนี (2.0), อาเซอร์ไบจาน (2.0)</strong>
        </div>
      </div>

    </div>
  );
};
