import React, { useState } from 'react';
import { TeamMatch } from '../data/picksData';
import { 
  Clock, 
  MapPin, 
  Star, 
  TrendingUp, 
  ShieldCheck, 
  Flame, 
  Plus, 
  Check, 
  ChevronRight,
  Target
} from 'lucide-react';

interface PickCardProps {
  pick: TeamMatch;
  index: number;
  isSelectedInSlip: boolean;
  onToggleSlip: (pickId: string) => void;
}

export const PickCard: React.FC<PickCardProps> = ({
  pick,
  index,
  isSelectedInSlip,
  onToggleSlip,
}) => {
  const [imageError, setImageError] = useState(false);
  const [activeTab, setActiveTab] = useState<'verdict' | 'stats' | 'players' | 'tactics'>('verdict');

  return (
    <div 
      id={`pick-${pick.id}`}
      className="group relative rounded-2xl border border-slate-800 bg-slate-900/90 overflow-hidden shadow-lg hover:border-slate-700 transition-all duration-300 flex flex-col"
    >
      {/* Top Banner & Match Identity */}
      <div className="relative h-48 sm:h-56 w-full overflow-hidden bg-slate-950">
        {!imageError ? (
          <img
            src={pick.actionImage}
            alt={`${pick.country} match action`}
            referrerPolicy="no-referrer"
            onError={() => setImageError(true)}
            className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 opacity-75"
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-slate-900 via-slate-800 to-slate-950 flex items-center justify-center">
            <span className="text-4xl">{pick.flag}</span>
          </div>
        )}

        {/* Gradient Scrim for Contrast (4.5:1 ratio) */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/60 to-transparent" />

        {/* Top Badges */}
        <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="px-2.5 py-1 rounded-md text-xs font-bold bg-amber-400 text-slate-950 shadow-sm">
              ตัวที่ {index + 1}
            </span>
            <span className="text-xs text-white/90 font-medium px-2 py-0.5 rounded bg-black/40 backdrop-blur-sm border border-white/10">
              {pick.tournament}
            </span>
          </div>

          <div className="flex items-center gap-1 bg-black/60 backdrop-blur-sm px-2.5 py-1 rounded-md border border-white/10">
            <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
            <span className="text-xs font-mono font-bold text-amber-300 tabular-nums">
              มั่นใจ {pick.confidencePercent}%
            </span>
          </div>
        </div>

        {/* Match Header Overlay */}
        <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between">
          <div>
            <div className="flex items-center gap-2 text-xs text-slate-300 mb-1">
              <span className="flex items-center gap-1">
                <Clock className="w-3.5 h-3.5 text-amber-400" />
                <span>{pick.kickoffTimeShort}</span>
              </span>
              <span>·</span>
              <span className="flex items-center gap-1 truncate max-w-[180px] sm:max-w-xs">
                <MapPin className="w-3.5 h-3.5 text-slate-400" />
                <span>{pick.venue}</span>
              </span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white flex items-center gap-2">
              <span>{pick.flag}</span>
              <span>{pick.country}</span>
              <span className="text-xs text-slate-400 font-normal">({pick.countryEn})</span>
            </h3>
          </div>

          <div className="text-right">
            <span className="text-xs text-slate-400 block">ดวลกับ</span>
            <span className="text-sm sm:text-base font-semibold text-slate-200 flex items-center gap-1.5 justify-end">
              <span>{pick.opponent}</span>
              <span>{pick.opponentFlag}</span>
            </span>
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between space-y-5">
        
        {/* Recommended Angle Strip */}
        <div className="p-3.5 rounded-xl bg-amber-500/10 border border-amber-500/25 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
          <div>
            <span className="text-xs text-amber-400/90 font-medium block">แนวทางทีเด็ดน้าหงส์:</span>
            <span className="text-base font-bold text-amber-300">
              {pick.recommendation}
            </span>
          </div>
          <div className="flex items-center gap-3">
            <div className="text-right">
              <span className="text-[11px] text-slate-400 block">แฮนดิแคป</span>
              <span className="text-xs font-mono font-semibold text-slate-200">
                {pick.handicap}
              </span>
            </div>
            <div className="h-6 w-px bg-amber-500/20" />
            <div className="text-right">
              <span className="text-[11px] text-slate-400 block">ค่าน้ำโดยประมาณ</span>
              <span className="text-xs font-mono font-bold text-amber-400 tabular-nums">
                @{pick.odds.toFixed(2)}
              </span>
            </div>
          </div>
        </div>

        {/* Tab Controls for Detailed Insights */}
        <div className="flex items-center gap-1 border-b border-slate-800 pb-2">
          <button
            onClick={() => setActiveTab('verdict')}
            className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors ${
              activeTab === 'verdict'
                ? 'bg-amber-400 text-slate-950 font-semibold'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            ทัศนะน้าหงส์
          </button>
          <button
            onClick={() => setActiveTab('stats')}
            className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors ${
              activeTab === 'stats'
                ? 'bg-amber-400 text-slate-950 font-semibold'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            สถิติสำคัญ
          </button>
          <button
            onClick={() => setActiveTab('players')}
            className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors ${
              activeTab === 'players'
                ? 'bg-amber-400 text-slate-950 font-semibold'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            ตัวทีเด็ด
          </button>
          <button
            onClick={() => setActiveTab('tactics')}
            className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors ${
              activeTab === 'tactics'
                ? 'bg-amber-400 text-slate-950 font-semibold'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            แท็กติกเกม
          </button>
        </div>

        {/* Tab Content Display */}
        <div className="min-h-[140px]">
          {activeTab === 'verdict' && (
            <div className="space-y-3 animate-in fade-in duration-150">
              <div className="text-sm text-slate-300 leading-relaxed font-light">
                <span className="text-amber-400 font-medium">💬 น้าหงส์ฟันธง: </span>
                {pick.uncleHongVerdict}
              </div>
              <div className="flex flex-wrap items-center justify-between gap-2 pt-2 border-t border-slate-800/80">
                <div className="text-xs text-slate-400 flex items-center gap-1.5">
                  <Target className="w-3.5 h-3.5 text-amber-400" />
                  <span>สกอร์ที่คาด:</span>
                  <span className="text-white font-semibold">{pick.projectedScore}</span>
                </div>
                <div className="text-xs text-slate-400 flex items-center gap-1">
                  <span>H2H:</span>
                  <span className="text-slate-300">{pick.h2hSummary}</span>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'stats' && (
            <div className="space-y-3 animate-in fade-in duration-150">
              <ul className="space-y-2 text-xs text-slate-300">
                {pick.keyStats.map((stat, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-400 mt-1.5 shrink-0" />
                    <span>{stat}</span>
                  </li>
                ))}
              </ul>

              {/* Form Guide Circles */}
              <div className="pt-2 border-t border-slate-800/80 flex items-center justify-between text-xs">
                <div className="flex items-center gap-2">
                  <span className="text-slate-400">{pick.country}:</span>
                  <div className="flex items-center gap-1">
                    {pick.recentForm.team.map((res, i) => (
                      <span
                        key={i}
                        className={`w-5 h-5 rounded-full flex items-center justify-center font-mono font-bold text-[10px] ${
                          res === 'W'
                            ? 'bg-emerald-600 text-white'
                            : res === 'D'
                            ? 'bg-slate-600 text-white'
                            : 'bg-rose-600 text-white'
                        }`}
                      >
                        {res}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <span className="text-slate-400">{pick.opponent}:</span>
                  <div className="flex items-center gap-1">
                    {pick.recentForm.opponent.map((res, i) => (
                      <span
                        key={i}
                        className={`w-5 h-5 rounded-full flex items-center justify-center font-mono font-bold text-[10px] ${
                          res === 'W'
                            ? 'bg-emerald-600 text-white'
                            : res === 'D'
                            ? 'bg-slate-600 text-white'
                            : 'bg-rose-600 text-white'
                        }`}
                      >
                        {res}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'players' && (
            <div className="space-y-2.5 animate-in fade-in duration-150">
              {pick.keyPlayers.map((player, i) => (
                <div
                  key={i}
                  className="flex items-center justify-between p-2 rounded-lg bg-slate-950/70 border border-slate-800 text-xs"
                >
                  <div>
                    <span className="font-semibold text-white block">{player.name}</span>
                    <span className="text-slate-400 text-[11px]">{player.club} · {player.role}</span>
                  </div>
                  <span className="text-[11px] font-mono text-amber-400 px-2 py-0.5 rounded bg-amber-500/10 border border-amber-500/20">
                    {player.form}
                  </span>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'tactics' && (
            <div className="space-y-2 animate-in fade-in duration-150">
              <span className="text-xs text-amber-400 font-medium block">
                จุดได้เปรียบเชิงกลยุทธ์ (Tactical Edge):
              </span>
              <ul className="space-y-1.5 text-xs text-slate-300">
                {pick.tacticalHighlights.map((tactic, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-amber-400 text-xs mt-0.5">✦</span>
                    <span>{tactic}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* Action Button: Add to Slip */}
        <div className="pt-2 border-t border-slate-800">
          <button
            onClick={() => onToggleSlip(pick.id)}
            className={`w-full py-2.5 px-4 rounded-xl text-xs font-semibold flex items-center justify-center gap-2 transition-all ${
              isSelectedInSlip
                ? 'bg-emerald-600 text-white hover:bg-emerald-500 shadow-md shadow-emerald-700/20'
                : 'bg-slate-800 text-slate-200 hover:bg-slate-700 hover:text-white border border-slate-700'
            }`}
          >
            {isSelectedInSlip ? (
              <>
                <Check className="w-4 h-4 text-emerald-200" />
                <span>อยู่ในชุดสเต็ปจำลองแล้ว (คลิกเพื่อนำออก)</span>
              </>
            ) : (
              <>
                <Plus className="w-4 h-4 text-amber-400" />
                <span>เพิ่ม {pick.country} ลงชุดสเต็ปจำลอง</span>
              </>
            )}
          </button>
        </div>

      </div>
    </div>
  );
};
