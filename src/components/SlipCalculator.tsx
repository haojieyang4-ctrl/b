import React, { useState } from 'react';
import { TeamMatch } from '../data/picksData';
import { Calculator, Copy, Check } from 'lucide-react';

interface SlipCalculatorProps {
  allPicks: TeamMatch[];
  selectedPickIds: string[];
  onTogglePick: (id: string) => void;
  onSelectAll: () => void;
  onClearAll: () => void;
}

export const SlipCalculator: React.FC<SlipCalculatorProps> = ({
  allPicks,
  selectedPickIds,
  onTogglePick,
  onSelectAll,
  onClearAll,
}) => {
  const [betMode, setBetMode] = useState<'parlay' | 'singles'>('parlay');
  const [stake, setStake] = useState<number>(500);
  const [copied, setCopied] = useState<boolean>(false);

  const selectedMatches = allPicks.filter((p) => selectedPickIds.includes(p.id));

  // Calculate Parlay Odds
  const parlayMultiplier = selectedMatches.reduce((acc, curr) => acc * curr.odds, 1);
  const potentialReturnParlay = Math.round(stake * parlayMultiplier);
  const profitParlay = potentialReturnParlay - stake;

  // Calculate Singles (Split stake equally among selected)
  const singleStake = selectedMatches.length > 0 ? stake / selectedMatches.length : 0;
  const potentialReturnSingles = Math.round(
    selectedMatches.reduce((acc, curr) => acc + singleStake * curr.odds, 0)
  );
  const profitSingles = potentialReturnSingles - stake;

  const presetStakes = [100, 300, 500, 1000, 2000, 5000];

  const handleCopySummary = () => {
    const textLines = [
      `⚽ แนวทางน้าหงส์ ประจำวันที่ 1 ตุลาคม 2569`,
      `วันนี้จัดไป 3 ตัวเน้นๆ:`,
      ...selectedMatches.map((m, i) => `${i + 1}. ${m.country}: ${m.recommendation} (เวลา ${m.kickoffTimeShort})`),
      selectedMatches.length > 1
        ? `🔥 สเต็ป ${selectedMatches.length} ตัว ค่าน้ำรวม ~${parlayMultiplier.toFixed(2)} เท่า`
        : '',
      `📌 น้าหงส์การันตีความพร้อม ขอให้สมาชิกทุกท่านเข้าวินยกชุดครับ!`
    ].filter(Boolean);

    navigator.clipboard.writeText(textLines.join('\n'));
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-900/90 p-5 sm:p-7 shadow-xl">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-5 border-b border-slate-800">
        <div>
          <div className="flex items-center gap-2">
            <div className="p-2 rounded-lg bg-amber-400/10 text-amber-400">
              <Calculator className="w-5 h-5" />
            </div>
            <h3 className="text-xl font-bold text-white">
              จำลองชุดแนวทาง & คำนวณค่าน้ำ
            </h3>
          </div>
          <p className="text-xs text-slate-400 mt-1">
            เลือกจัดชุดสเต็ป 3 น้าหงส์ หรือกระจายบอลเต็งเดี่ยว เพื่อดูผลตอบแทนจำลอง
          </p>
        </div>

        {/* Mode Selector */}
        <div className="flex items-center gap-1 p-1 bg-slate-950 rounded-xl border border-slate-800 self-start sm:self-auto">
          <button
            onClick={() => setBetMode('parlay')}
            className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap ${
              betMode === 'parlay'
                ? 'bg-amber-400 text-slate-950 shadow-sm'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            สเต็ป 3 น้าหงส์ (ชุดรวม)
          </button>
          <button
            onClick={() => setBetMode('singles')}
            className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap ${
              betMode === 'singles'
                ? 'bg-amber-400 text-slate-950 shadow-sm'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            บอลเต็งเดี่ยว (เฉลี่ยทุน)
          </button>
        </div>
      </div>

      {/* Selected Items Grid */}
      <div className="mt-5 space-y-3">
        <div className="flex items-center justify-between text-xs text-slate-400">
          <span>ทีมที่เลือกในชุด ({selectedMatches.length} จาก 3 ทีม):</span>
          <div className="flex items-center gap-2">
            <button
              onClick={onSelectAll}
              className="text-amber-400 hover:underline hover:text-amber-300"
            >
              เลือกครบ 3 ตัว
            </button>
            <span>·</span>
            <button
              onClick={onClearAll}
              className="text-slate-400 hover:underline hover:text-slate-300"
            >
              ล้างทั้งหมด
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
          {allPicks.map((pick) => {
            const isSelected = selectedPickIds.includes(pick.id);
            return (
              <button
                key={pick.id}
                onClick={() => onTogglePick(pick.id)}
                className={`p-3 rounded-xl border text-left flex items-center justify-between transition-all ${
                  isSelected
                    ? 'bg-amber-500/10 border-amber-500/40 text-white'
                    : 'bg-slate-950/60 border-slate-800/80 text-slate-400 hover:border-slate-700'
                }`}
              >
                <div className="flex items-center gap-2.5 min-w-0">
                  <span className="text-xl">{pick.flag}</span>
                  <div className="truncate">
                    <span className="text-xs font-bold block truncate text-slate-200">
                      {pick.country}
                    </span>
                    <span className="text-[11px] text-slate-400 block truncate">
                      {pick.handicap}
                    </span>
                  </div>
                </div>

                <div className="text-right shrink-0 ml-2">
                  <span className="text-xs font-mono font-semibold text-amber-400 tabular-nums">
                    @{pick.odds.toFixed(2)}
                  </span>
                  <span className="block mt-0.5">
                    {isSelected ? (
                      <span className="text-[10px] font-bold text-emerald-400">✓ เลือก</span>
                    ) : (
                      <span className="text-[10px] text-slate-500">+ เพิ่ม</span>
                    )}
                  </span>
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Stake Input & Presets */}
      <div className="mt-6 pt-5 border-t border-slate-800 space-y-3">
        <div className="flex items-center justify-between">
          <label htmlFor="stake-input" className="text-xs font-medium text-slate-300">
            จำลองจำนวนทุน (บาท):
          </label>
          <span className="text-xs font-mono tabular-nums text-amber-400 font-semibold">
            {stake.toLocaleString()} ฿
          </span>
        </div>

        <div className="flex flex-wrap items-center gap-2">
          {presetStakes.map((preset) => (
            <button
              key={preset}
              onClick={() => setStake(preset)}
              className={`px-3 py-1 text-xs font-mono rounded-lg border transition-colors ${
                stake === preset
                  ? 'bg-amber-400 text-slate-950 font-bold border-amber-400'
                  : 'bg-slate-950 text-slate-300 border-slate-800 hover:border-slate-700'
              }`}
            >
              {preset.toLocaleString()} ฿
            </button>
          ))}
          <input
            id="stake-input"
            type="number"
            min="50"
            max="100000"
            step="50"
            value={stake}
            onChange={(e) => setStake(Math.max(0, Number(e.target.value)))}
            className="w-24 px-2.5 py-1 text-xs font-mono bg-slate-950 border border-slate-800 rounded-lg text-white text-right focus:outline-none focus:border-amber-400"
          />
        </div>
      </div>

      {/* Result Card */}
      <div className="mt-6 p-4 rounded-xl bg-gradient-to-r from-amber-500/15 via-slate-900 to-amber-500/10 border border-amber-500/30 flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
        <div>
          <div className="text-xs text-amber-400 font-medium">
            {betMode === 'parlay' ? (
              <span>อัตราทวีคูณสเต็ปรวม ({selectedMatches.length} คู่):</span>
            ) : (
              <span>เฉลี่ยคู่ละ {singleStake.toFixed(0)} ฿ ({selectedMatches.length} คู่):</span>
            )}
          </div>
          <div className="text-2xl sm:text-3xl font-extrabold text-white font-mono tabular-nums mt-0.5">
            {betMode === 'parlay'
              ? `${parlayMultiplier.toFixed(2)}x เท่า`
              : `${(potentialReturnSingles / (stake || 1)).toFixed(2)}x เฉลี่ย`}
          </div>
        </div>

        <div className="flex items-center gap-6">
          <div>
            <span className="text-xs text-slate-400 block">ผลตอบแทนรวมจำลอง</span>
            <span className="text-xl sm:text-2xl font-bold font-mono text-emerald-400 tabular-nums">
              {betMode === 'parlay'
                ? potentialReturnParlay.toLocaleString()
                : potentialReturnSingles.toLocaleString()}{' '}
              ฿
            </span>
          </div>

          <div className="border-l border-slate-800 pl-6">
            <span className="text-xs text-slate-400 block">กำไรสุทธิจำลอง</span>
            <span className="text-xl sm:text-2xl font-bold font-mono text-amber-300 tabular-nums">
              +
              {betMode === 'parlay'
                ? profitParlay.toLocaleString()
                : profitSingles.toLocaleString()}{' '}
              ฿
            </span>
          </div>
        </div>

        <button
          onClick={handleCopySummary}
          className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-xs transition-colors shadow-md shadow-amber-500/20 whitespace-nowrap"
        >
          {copied ? <Check className="w-4 h-4 text-slate-950" /> : <Copy className="w-4 h-4" />}
          <span>{copied ? 'คัดลอกแล้ว!' : 'คัดลอกสรุปส่ง LINE'}</span>
        </button>
      </div>
    </div>
  );
};
