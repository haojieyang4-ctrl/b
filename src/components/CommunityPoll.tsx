import React, { useState, useEffect } from 'react';
import { Vote, CheckCircle2, Users, Trophy } from 'lucide-react';

interface PollOption {
  id: string;
  label: string;
  sublabel: string;
  flag: string;
  initialVotes: number;
}

const INITIAL_OPTIONS: PollOption[] = [
  {
    id: 'norway',
    label: 'นอร์เวย์ บุกเก็บชัย',
    sublabel: 'มั่นใจต่อนอร์เวย์ เฮชัวร์ ฮาแลนด์ & โอเดการ์ด ยิงสนั่น',
    flag: '🇳🇴',
    initialVotes: 942,
  },
  {
    id: 'germany',
    label: 'เยอรมนี ยิงขาดลอย',
    sublabel: 'มั่นใจต่อเยอรมัน ขยันยิง มูเซียล่า & เวียร์ตซ์ จัดจ้าน',
    flag: '🇩🇪',
    initialVotes: 815,
  },
  {
    id: 'azerbaijan',
    label: 'อาเซอร์ไบจาน สราญอุรา',
    sublabel: 'มั่นใจต่ออาเซอร์ไบจาน ถล่มลิกเตนสไตน์ขาดลอย',
    flag: '🇦🇿',
    initialVotes: 629,
  },
  {
    id: 'all_three',
    label: 'ตามน้าหงส์ยกชุด 3 ตัวเน้น!',
    sublabel: 'จัดสเต็ป 3 คืนนี้ มั่นใจเข้าวินยกแผง',
    flag: '🔥',
    initialVotes: 1580,
  },
];

export const CommunityPoll: React.FC = () => {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [votes, setVotes] = useState<Record<string, number>>({});
  const [hasVoted, setHasVoted] = useState(false);

  useEffect(() => {
    const savedVote = localStorage.getItem('nahong_user_vote_2569_10_01');
    const savedCounts = localStorage.getItem('nahong_vote_counts_2569_10_01');

    if (savedCounts) {
      try {
        setVotes(JSON.parse(savedCounts));
      } catch {
        initDefaultVotes();
      }
    } else {
      initDefaultVotes();
    }

    if (savedVote) {
      setSelectedOption(savedVote);
      setHasVoted(true);
    }
  }, []);

  const initDefaultVotes = () => {
    const defaultObj: Record<string, number> = {};
    INITIAL_OPTIONS.forEach((opt) => {
      defaultObj[opt.id] = opt.initialVotes;
    });
    setVotes(defaultObj);
  };

  const handleVote = (optionId: string) => {
    if (hasVoted) return;

    const newVotes = {
      ...votes,
      [optionId]: (votes[optionId] || 0) + 1,
    };

    setVotes(newVotes);
    setSelectedOption(optionId);
    setHasVoted(true);

    localStorage.setItem('nahong_user_vote_2569_10_01', optionId);
    localStorage.setItem('nahong_vote_counts_2569_10_01', JSON.stringify(newVotes));
  };

  const totalVotes = Object.values(votes).reduce((a, b) => a + b, 0);

  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-900/90 p-5 sm:p-7 shadow-xl">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-5 border-b border-slate-800">
        <div>
          <div className="flex items-center gap-2">
            <div className="p-2 rounded-lg bg-amber-400/10 text-amber-400">
              <Vote className="w-5 h-5" />
            </div>
            <h3 className="text-xl font-bold text-white">
              โพลแฟนบอลน้าหงส์: มั่นใจทีมไหนที่สุดคืนนี้?
            </h3>
          </div>
          <p className="text-xs text-slate-400 mt-1">
            ร่วมแสดงความคิดเห็นกับแฟนบอลกว่า {totalVotes.toLocaleString()} คนทั่วประเทศ
          </p>
        </div>

        <div className="flex items-center gap-2 text-xs text-slate-400 bg-slate-950 px-3 py-1.5 rounded-lg border border-slate-800 self-start sm:self-auto">
          <Users className="w-4 h-4 text-amber-400" />
          <span>ยอดโหวตสะสม:</span>
          <span className="font-mono font-bold text-white tabular-nums">
            {totalVotes.toLocaleString()} โหวต
          </span>
        </div>
      </div>

      <div className="mt-5 space-y-3">
        {INITIAL_OPTIONS.map((opt) => {
          const count = votes[opt.id] || opt.initialVotes;
          const percentage = totalVotes > 0 ? ((count / totalVotes) * 100).toFixed(1) : '0';
          const isSelected = selectedOption === opt.id;

          return (
            <div
              key={opt.id}
              onClick={() => handleVote(opt.id)}
              className={`relative overflow-hidden rounded-xl border p-4 transition-all duration-200 cursor-pointer ${
                hasVoted
                  ? isSelected
                    ? 'border-amber-400 bg-amber-500/10'
                    : 'border-slate-800 bg-slate-950/60'
                  : 'border-slate-800 bg-slate-950/60 hover:border-slate-700 hover:bg-slate-950'
              }`}
            >
              {/* Animated Progress Bar fill */}
              {hasVoted && (
                <div
                  style={{ width: `${percentage}%` }}
                  className={`absolute inset-y-0 left-0 transition-all duration-700 pointer-events-none opacity-20 ${
                    isSelected ? 'bg-amber-400' : 'bg-slate-500'
                  }`}
                />
              )}

              <div className="relative z-10 flex items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <span className="text-2xl">{opt.flag}</span>
                  <div>
                    <span className="text-sm font-semibold text-white block flex items-center gap-2">
                      <span>{opt.label}</span>
                      {isSelected && (
                        <CheckCircle2 className="w-4 h-4 text-amber-400 inline" />
                      )}
                    </span>
                    <span className="text-xs text-slate-400 block">{opt.sublabel}</span>
                  </div>
                </div>

                <div className="text-right shrink-0">
                  {hasVoted ? (
                    <div>
                      <span className="text-base font-bold font-mono text-white tabular-nums">
                        {percentage}%
                      </span>
                      <span className="text-[11px] text-slate-400 block font-mono tabular-nums">
                        ({count.toLocaleString()} เสียง)
                      </span>
                    </div>
                  ) : (
                    <button className="px-3 py-1.5 rounded-lg bg-slate-800 text-xs font-medium text-slate-200 hover:bg-amber-400 hover:text-slate-950 transition-colors">
                      โหวตทีมนี้
                    </button>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {hasVoted && (
        <div className="mt-4 pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-400">
          <div className="flex items-center gap-1.5">
            <Trophy className="w-4 h-4 text-amber-400" />
            <span>คุณได้โหวตแล้ว ขอบคุณที่ร่วมสนุกกับครอบครัวน้าหงส์!</span>
          </div>
          <span className="text-amber-400 font-medium">คะแนนโหวตอัปเดตแบบเรียลไทม์</span>
        </div>
      )}
    </div>
  );
};
