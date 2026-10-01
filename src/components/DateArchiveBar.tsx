import React from 'react';
import { Calendar, ChevronLeft, ChevronRight } from 'lucide-react';
import { ARCHIVE_DAYS } from '../data/picksData';

interface DateArchiveBarProps {
  selectedDateId: string;
  onSelectDate: (id: string) => void;
}

export const DateArchiveBar: React.FC<DateArchiveBarProps> = ({
  selectedDateId,
  onSelectDate,
}) => {
  return (
    <div className="flex items-center justify-between gap-3 p-2 sm:p-2.5 rounded-2xl bg-slate-900/90 border border-slate-800 text-xs">
      <div className="flex items-center gap-2 px-2 text-slate-400">
        <Calendar className="w-4 h-4 text-amber-400 shrink-0" />
        <span className="hidden sm:inline font-medium">คลังแนวทางย้อนหลัง:</span>
      </div>

      <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar py-0.5">
        {ARCHIVE_DAYS.map((day) => {
          const isActive = selectedDateId === day.id;
          return (
            <button
              key={day.id}
              onClick={() => onSelectDate(day.id)}
              className={`px-3 py-1.5 rounded-xl font-medium transition-all whitespace-nowrap ${
                isActive
                  ? 'bg-amber-400 text-slate-950 font-bold shadow-sm shadow-amber-500/20'
                  : 'bg-slate-950/70 text-slate-300 hover:text-white border border-slate-800 hover:border-slate-700'
              }`}
            >
              {day.label}
            </button>
          );
        })}
      </div>
    </div>
  );
};
