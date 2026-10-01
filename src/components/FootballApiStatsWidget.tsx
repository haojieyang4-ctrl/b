import React, { useState } from 'react';
import { TeamMatch } from '../data/picksData';
import { 
  BarChart3, 
  Activity, 
  TrendingUp, 
  CheckCircle2, 
  Clock, 
  Flame, 
  Shield, 
  Target, 
  Zap, 
  Layers
} from 'lucide-react';

interface FootballApiStatsWidgetProps {
  picks: TeamMatch[];
}

export const FootballApiStatsWidget: React.FC<FootballApiStatsWidgetProps> = ({ picks }) => {
  const [selectedPickId, setSelectedPickId] = useState<string>(picks[0]?.id || 'norway');
  const currentPick = picks.find(p => p.id === selectedPickId) || picks[0];
  const stats = currentPick.apiStats;

  // Max goals for bar scaling in timing chart
  const maxTimingGoals = Math.max(
    ...stats.timingDistribution.map(t => Math.max(t.teamGoals, t.opponentGoals, 1))
  );

  return (
    <section id="api-stats-section" className="py-12 border-t border-slate-800/80 bg-slate-950/60 relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-bold tracking-wide">
              <Activity className="w-3.5 h-3.5 animate-pulse" />
              <span>LIVE API FOOTBALL ANALYTICS</span>
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
              กราฟสถิติการทำประตู & อัตราการชนะ (API ดาต้าสด)
            </h2>
            <p className="text-xs sm:text-sm text-slate-400 max-w-2xl">
              ดึงข้อมูลสถิติเชิงลึกผ่านระบบ API ของฟุตบอลระดับสากล เพื่อเป็นหลักฐานเชิงตัวเลขยืนยันความแม่นยำในบทวิเคราะห์ของน้าหงส์
            </p>
          </div>

          {/* API Verification Pill */}
          <div className="flex items-center gap-2.5 p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-xs text-slate-300">
            <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping shrink-0" />
            <div>
              <span className="font-semibold text-white block">{stats.apiProvider}</span>
              <span className="text-[11px] text-slate-400">อ้างอิงฐานข้อมูลจริง 10 นัดล่าสุด</span>
            </div>
          </div>
        </div>

        {/* Match Switcher Tabs */}
        <div className="flex flex-wrap items-center gap-2 p-1.5 rounded-2xl bg-slate-900/90 border border-slate-800">
          {picks.map((pick, index) => {
            const isSelected = pick.id === currentPick.id;
            return (
              <button
                key={pick.id}
                onClick={() => setSelectedPickId(pick.id)}
                className={`flex-1 min-w-[200px] flex items-center justify-between px-4 py-3 rounded-xl transition-all text-left ${
                  isSelected
                    ? 'bg-amber-400 text-slate-950 font-bold shadow-lg shadow-amber-400/20'
                    : 'text-slate-300 hover:text-white hover:bg-slate-800/60'
                }`}
              >
                <div className="flex items-center gap-2.5">
                  <span className="text-xl">{pick.flag}</span>
                  <div>
                    <span className="text-xs uppercase tracking-wider block opacity-75">
                      ตัวที่ {index + 1}
                    </span>
                    <span className="text-sm font-black leading-tight block">
                      {pick.country} vs {pick.opponent}
                    </span>
                  </div>
                </div>
                <div className={`px-2 py-0.5 rounded text-[11px] font-mono font-bold ${
                  isSelected ? 'bg-slate-950 text-amber-300' : 'bg-slate-800 text-slate-300'
                }`}>
                  ชนะ {pick.apiStats.winRate.teamWinPercent}%
                </div>
              </button>
            );
          })}
        </div>

        {/* Analytics Display Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          
          {/* Card 1: Win Rate & Match Outcome Comparison (6 cols) */}
          <div className="lg:col-span-6 rounded-2xl bg-slate-900/90 border border-slate-800 p-5 sm:p-6 space-y-6 shadow-xl">
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <div className="flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-amber-400" />
                <h3 className="text-base font-bold text-white">
                  อัตราการชนะ 10 นัดล่าสุด (Win Rate Comparison)
                </h3>
              </div>
              <span className="text-xs font-mono text-slate-400">10 เกมหลังสุด</span>
            </div>

            {/* Team 1 (Uncle Hong's Pick) */}
            <div className="space-y-2">
              <div className="flex items-center justify-between text-sm">
                <div className="flex items-center gap-2 font-bold text-white">
                  <span className="text-xl">{currentPick.flag}</span>
                  <span>{currentPick.country}</span>
                  <span className="text-xs px-2 py-0.5 rounded bg-amber-400/20 text-amber-300 font-semibold border border-amber-400/30">
                    น้าหงส์เชียร์
                  </span>
                </div>
                <div className="text-right">
                  <span className="text-base font-black text-amber-400">
                    {stats.winRate.teamWinPercent}%
                  </span>
                  <span className="text-xs text-slate-400 ml-1.5 font-mono">
                    (ชนะ {stats.winRate.teamWins10} เสมอ {stats.winRate.teamDraws10} แพ้ {stats.winRate.teamLosses10})
                  </span>
                </div>
              </div>

              {/* Progress Multi-Bar */}
              <div className="h-4 w-full rounded-full bg-slate-950 overflow-hidden flex p-0.5 border border-slate-800">
                <div 
                  style={{ width: `${stats.winRate.teamWinPercent}%` }}
                  className="h-full bg-gradient-to-r from-amber-500 to-amber-400 rounded-l-full flex items-center justify-center text-[10px] font-black text-slate-950"
                  title={`ชนะ ${stats.winRate.teamWinPercent}%`}
                >
                  {stats.winRate.teamWinPercent > 15 && `${stats.winRate.teamWinPercent}%`}
                </div>
                <div 
                  style={{ width: `${stats.winRate.teamDrawPercent}%` }}
                  className="h-full bg-slate-600 flex items-center justify-center text-[10px] font-bold text-slate-200"
                  title={`เสมอ ${stats.winRate.teamDrawPercent}%`}
                />
                <div 
                  style={{ width: `${stats.winRate.teamLossPercent}%` }}
                  className="h-full bg-rose-900/60 rounded-r-full flex items-center justify-center text-[10px] font-bold text-rose-300"
                  title={`แพ้ ${stats.winRate.teamLossPercent}%`}
                />
              </div>
            </div>

            {/* Team 2 (Opponent) */}
            <div className="space-y-2">
              <div className="flex items-center justify-between text-sm">
                <div className="flex items-center gap-2 font-semibold text-slate-300">
                  <span className="text-xl">{currentPick.opponentFlag}</span>
                  <span>{currentPick.opponent}</span>
                  <span className="text-xs text-slate-400">(คู่แข่ง)</span>
                </div>
                <div className="text-right">
                  <span className="text-base font-black text-slate-300">
                    {stats.winRate.opponentWinPercent}%
                  </span>
                  <span className="text-xs text-slate-400 ml-1.5 font-mono">
                    (ชนะ {stats.winRate.opponentWins10} เสมอ {stats.winRate.opponentDraws10} แพ้ {stats.winRate.opponentLosses10})
                  </span>
                </div>
              </div>

              {/* Progress Multi-Bar */}
              <div className="h-4 w-full rounded-full bg-slate-950 overflow-hidden flex p-0.5 border border-slate-800">
                <div 
                  style={{ width: `${stats.winRate.opponentWinPercent}%` }}
                  className="h-full bg-slate-400 rounded-l-full flex items-center justify-center text-[10px] font-black text-slate-950"
                >
                  {stats.winRate.opponentWinPercent > 15 && `${stats.winRate.opponentWinPercent}%`}
                </div>
                <div 
                  style={{ width: `${stats.winRate.opponentDrawPercent}%` }}
                  className="h-full bg-slate-700 flex items-center justify-center text-[10px] font-bold text-slate-300"
                />
                <div 
                  style={{ width: `${stats.winRate.opponentLossPercent}%` }}
                  className="h-full bg-rose-900/80 rounded-r-full flex items-center justify-center text-[10px] font-bold text-rose-300"
                />
              </div>
            </div>

            {/* Legend */}
            <div className="flex items-center justify-center gap-6 text-xs text-slate-400 pt-2 border-t border-slate-800/80">
              <span className="flex items-center gap-1.5">
                <span className="w-3 h-3 rounded-full bg-amber-400" />
                <span>ชนะ (Win)</span>
              </span>
              <span className="flex items-center gap-1.5">
                <span className="w-3 h-3 rounded-full bg-slate-600" />
                <span>เสมอ (Draw)</span>
              </span>
              <span className="flex items-center gap-1.5">
                <span className="w-3 h-3 rounded-full bg-rose-800" />
                <span>แพ้ (Loss)</span>
              </span>
            </div>

            {/* In-depth Metrics Matrix */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-3">
              <div className="p-3 rounded-xl bg-slate-950/70 border border-slate-800/80 text-center">
                <span className="text-[10px] text-slate-400 block font-medium">โอกาสยิงตรงกรอบ</span>
                <span className="text-base font-black text-amber-400 font-mono">
                  {stats.shotMetrics.teamShotsOnTargetAvg} ครั้ง
                </span>
                <span className="text-[10px] text-slate-500 block">vs {stats.shotMetrics.opponentShotsOnTargetAvg} ครั้ง</span>
              </div>
              <div className="p-3 rounded-xl bg-slate-950/70 border border-slate-800/80 text-center">
                <span className="text-[10px] text-slate-400 block font-medium">ครองบอลเฉลี่ย</span>
                <span className="text-base font-black text-emerald-400 font-mono">
                  {stats.shotMetrics.teamPossessionAvg}%
                </span>
                <span className="text-[10px] text-slate-500 block">vs {stats.shotMetrics.opponentPossessionAvg}%</span>
              </div>
              <div className="p-3 rounded-xl bg-slate-950/70 border border-slate-800/80 text-center">
                <span className="text-[10px] text-slate-400 block font-medium">เปลี่ยนเป็นประตู</span>
                <span className="text-base font-black text-sky-400 font-mono">
                  {stats.goalStats.teamConversionRate}%
                </span>
                <span className="text-[10px] text-slate-500 block">vs {stats.goalStats.opponentConversionRate}%</span>
              </div>
              <div className="p-3 rounded-xl bg-slate-950/70 border border-slate-800/80 text-center">
                <span className="text-[10px] text-slate-400 block font-medium">อัตราคลีนชีต</span>
                <span className="text-base font-black text-indigo-400 font-mono">
                  {stats.goalStats.teamCleanSheetPercent}%
                </span>
                <span className="text-[10px] text-slate-500 block">vs {stats.goalStats.opponentCleanSheetPercent}%</span>
              </div>
            </div>
          </div>

          {/* Card 2: Goal Stats & Expected Goals (xG) Analytics (6 cols) */}
          <div className="lg:col-span-6 rounded-2xl bg-slate-900/90 border border-slate-800 p-5 sm:p-6 space-y-6 shadow-xl">
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <div className="flex items-center gap-2">
                <Target className="w-5 h-5 text-emerald-400" />
                <h3 className="text-base font-bold text-white">
                  สถิติการยิงประตู & ค่า xG (Expected Goals)
                </h3>
              </div>
              <span className="text-xs font-mono text-emerald-400 font-bold">API Verified</span>
            </div>

            {/* Comparison Metrics Bars */}
            <div className="space-y-4">
              {/* Metric 1: Avg Goals Scored */}
              <div className="space-y-1.5">
                <div className="flex justify-between text-xs">
                  <span className="text-slate-300 font-medium">
                    {currentPick.country} ({stats.goalStats.teamAvgScored} ลูก/นัด)
                  </span>
                  <span className="text-slate-400 font-semibold">ประตูที่ยิงได้เฉลี่ย</span>
                  <span className="text-slate-400">
                    {currentPick.opponent} ({stats.goalStats.opponentAvgScored} ลูก/นัด)
                  </span>
                </div>
                <div className="grid grid-cols-2 gap-2">
                  <div className="h-3 rounded-l-full bg-slate-950 overflow-hidden flex justify-end p-0.5 border border-slate-800">
                    <div 
                      style={{ width: `${Math.min(100, (stats.goalStats.teamAvgScored / 3.5) * 100)}%` }}
                      className="h-full bg-amber-400 rounded-l-full"
                    />
                  </div>
                  <div className="h-3 rounded-r-full bg-slate-950 overflow-hidden flex justify-start p-0.5 border border-slate-800">
                    <div 
                      style={{ width: `${Math.min(100, (stats.goalStats.opponentAvgScored / 3.5) * 100)}%` }}
                      className="h-full bg-slate-500 rounded-r-full"
                    />
                  </div>
                </div>
              </div>

              {/* Metric 2: Expected Goals (xG) */}
              <div className="space-y-1.5">
                <div className="flex justify-between text-xs">
                  <span className="text-emerald-400 font-bold">
                    xG {stats.goalStats.teamXG}
                  </span>
                  <span className="text-slate-300 font-semibold">คุณภาพโอกาสเข้าทำ (xG per Match)</span>
                  <span className="text-slate-400 font-mono">
                    xG {stats.goalStats.opponentXG}
                  </span>
                </div>
                <div className="grid grid-cols-2 gap-2">
                  <div className="h-3 rounded-l-full bg-slate-950 overflow-hidden flex justify-end p-0.5 border border-slate-800">
                    <div 
                      style={{ width: `${Math.min(100, (stats.goalStats.teamXG / 3.5) * 100)}%` }}
                      className="h-full bg-emerald-400 rounded-l-full"
                    />
                  </div>
                  <div className="h-3 rounded-r-full bg-slate-950 overflow-hidden flex justify-start p-0.5 border border-slate-800">
                    <div 
                      style={{ width: `${Math.min(100, (stats.goalStats.opponentXG / 3.5) * 100)}%` }}
                      className="h-full bg-slate-500 rounded-r-full"
                    />
                  </div>
                </div>
              </div>

              {/* Metric 3: Goals Conceded */}
              <div className="space-y-1.5">
                <div className="flex justify-between text-xs">
                  <span className="text-slate-300 font-medium">
                    เสียเฉลี่ย {stats.goalStats.teamAvgConceded} ลูก
                  </span>
                  <span className="text-slate-400 font-semibold">ความเหนียวของเกมรับ (เสียน้อย = ดี)</span>
                  <span className="text-rose-400 font-medium">
                    เสียเฉลี่ย {stats.goalStats.opponentAvgConceded} ลูก
                  </span>
                </div>
                <div className="grid grid-cols-2 gap-2">
                  <div className="h-3 rounded-l-full bg-slate-950 overflow-hidden flex justify-end p-0.5 border border-slate-800">
                    <div 
                      style={{ width: `${Math.min(100, (stats.goalStats.teamAvgConceded / 3.5) * 100)}%` }}
                      className="h-full bg-emerald-500 rounded-l-full"
                    />
                  </div>
                  <div className="h-3 rounded-r-full bg-slate-950 overflow-hidden flex justify-start p-0.5 border border-slate-800">
                    <div 
                      style={{ width: `${Math.min(100, (stats.goalStats.opponentAvgConceded / 3.5) * 100)}%` }}
                      className="h-full bg-rose-600 rounded-r-full"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Goal Timing Interval Bar Chart */}
            <div className="pt-2 border-t border-slate-800/80 space-y-3">
              <div className="flex items-center justify-between text-xs">
                <span className="font-bold text-white flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-amber-400" />
                  <span>กราฟช่วงเวลาที่ทำประตู (Goal Timing Distribution)</span>
                </span>
                <span className="text-slate-400 text-[11px]">นาทีที่ยิงประตู</span>
              </div>

              {/* Vertical Bars by Time Slot */}
              <div className="grid grid-cols-6 gap-2 h-28 items-end pt-3 bg-slate-950/60 p-3 rounded-xl border border-slate-800/80">
                {stats.timingDistribution.map((timing, i) => {
                  const teamHeight = (timing.teamGoals / maxTimingGoals) * 100;
                  const oppHeight = (timing.opponentGoals / maxTimingGoals) * 100;

                  return (
                    <div key={i} className="flex flex-col items-center h-full justify-end group">
                      <div className="w-full flex items-end justify-center gap-1 h-20">
                        {/* Team Bar */}
                        <div 
                          style={{ height: `${Math.max(12, teamHeight)}%` }}
                          className="w-3.5 sm:w-4 bg-gradient-to-t from-amber-500 to-amber-300 rounded-t-sm transition-all group-hover:brightness-110 flex items-start justify-center pt-0.5"
                          title={`${currentPick.country}: ${timing.teamGoals} ประตู`}
                        >
                          <span className="text-[9px] font-black text-slate-950 leading-none">
                            {timing.teamGoals}
                          </span>
                        </div>
                        {/* Opponent Bar */}
                        <div 
                          style={{ height: `${Math.max(12, oppHeight)}%` }}
                          className="w-3.5 sm:w-4 bg-slate-700 rounded-t-sm transition-all group-hover:bg-slate-600 flex items-start justify-center pt-0.5"
                          title={`${currentPick.opponent}: ${timing.opponentGoals} ประตู`}
                        >
                          <span className="text-[9px] font-bold text-slate-300 leading-none">
                            {timing.opponentGoals}
                          </span>
                        </div>
                      </div>
                      <span className="text-[9px] font-mono text-slate-400 mt-1 block text-center leading-none">
                        {timing.interval}
                      </span>
                    </div>
                  );
                })}
              </div>

              {/* Chart Takeaway Note */}
              <div className="p-3 rounded-xl bg-amber-400/10 border border-amber-400/20 text-xs text-amber-200 flex items-start gap-2">
                <span className="text-amber-400 text-sm font-bold shrink-0">💡</span>
                <span>
                  <strong>จุดสังเกตจาก API:</strong> {currentPick.country} มีสถิติอัตราการทำประตูและค่า xG ที่เหนือกว่า {currentPick.opponent} อย่างมีนัยสำคัญ สอดคล้องกับราคาต่อรองและบทวิเคราะห์ฟันธงของน้าหงส์
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
