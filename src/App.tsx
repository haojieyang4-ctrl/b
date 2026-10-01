import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { HeroOverview } from './components/HeroOverview';
import { PickCard } from './components/PickCard';
import { SlipCalculator } from './components/SlipCalculator';
import { CommunityPoll } from './components/CommunityPoll';
import { DateArchiveBar } from './components/DateArchiveBar';
import { DisclaimerFooter } from './components/DisclaimerFooter';
import { NationsLeagueFixtures } from './components/NationsLeagueFixtures';
import { GroupReviews } from './components/GroupReviews';
import { LineFloatingButton } from './components/LineFloatingButton';
import { FootballApiStatsWidget } from './components/FootballApiStatsWidget';
import { TODAY_ARCHIVE } from './data/picksData';
import { Check, Share2, Flame, Award, ChevronUp } from 'lucide-react';

export default function App() {
  const [selectedDateId, setSelectedDateId] = useState<string>('2569-10-01');
  const [selectedSlipPickIds, setSelectedSlipPickIds] = useState<string[]>([
    'norway',
    'germany',
    'azerbaijan',
  ]);
  const [saved, setSaved] = useState<boolean>(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [showScrollTop, setShowScrollTop] = useState<boolean>(false);

  useEffect(() => {
    const isSaved = localStorage.getItem('nahong_saved_2569_10_01') === 'true';
    setSaved(isSaved);

    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const triggerToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 2800);
  };

  const handleToggleSave = () => {
    const nextState = !saved;
    setSaved(nextState);
    localStorage.setItem('nahong_saved_2569_10_01', String(nextState));
    triggerToast(nextState ? 'บันทึกแนวทางคืนนี้ลงอุปกรณ์แล้ว' : 'ยกเลิกการบันทึกแล้ว');
  };

  const handleShare = () => {
    const shareText = `⚽ แนวทางน้าหงส์ ประจำวันที่ 1 ตุลาคม 2569\nคืนนี้น้าหงส์ไปสามตัว ได้แก่ นอร์เวย์, เยอรมนี, อาเซอร์ไบจาน จัดเต็มบทวิเคราะห์ 5 ดาว คลิกอ่านได้ที่: ${window.location.href}`;

    if (navigator.share) {
      navigator
        .share({
          title: 'แนวทางน้าหงส์ 1 ตุลาคม 2569',
          text: shareText,
          url: window.location.href,
        })
        .catch(() => {
          copyToClipboard(shareText);
        });
    } else {
      copyToClipboard(shareText);
    }
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    triggerToast('คัดลอกลิงก์และสรุปแนวทางเรียบร้อยแล้ว');
  };

  const handleToggleSlipPick = (pickId: string) => {
    setSelectedSlipPickIds((prev) => {
      if (prev.includes(pickId)) {
        const next = prev.filter((id) => id !== pickId);
        triggerToast('นำออกจากชุดจำลองแล้ว');
        return next;
      } else {
        const next = [...prev, pickId];
        triggerToast('เพิ่มเข้าสู่ชุดจำลองสเต็ปแล้ว');
        return next;
      }
    });
  };

  const handleSelectAllSlip = () => {
    setSelectedSlipPickIds(['norway', 'austria', 'netherlands']);
    triggerToast('เลือกครบทั้ง 3 ตัวเน้นแล้ว');
  };

  const handleClearAllSlip = () => {
    setSelectedSlipPickIds([]);
    triggerToast('ล้างรายการในชุดแล้ว');
  };

  const scrollToPick = (pickId: string) => {
    const el = document.getElementById(`pick-${pickId}`);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-['Kanit',sans-serif]">
      {/* Toast Notification Popup */}
      {toastMessage && (
        <div className="fixed top-20 right-4 sm:right-8 z-50 flex items-center gap-2.5 px-4 py-2.5 rounded-xl bg-amber-400 text-slate-950 font-semibold text-xs shadow-xl animate-in fade-in slide-in-from-top-3 duration-200">
          <Check className="w-4 h-4 text-slate-950 shrink-0" />
          <span>{toastMessage}</span>
        </div>
      )}

      {/* Top Header */}
      <Header
        onShare={handleShare}
        saved={saved}
        onToggleSave={handleToggleSave}
      />

      <main className="flex-1 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 space-y-12 pb-16 sm:pb-20">
        {/* Date Selector Strip */}
        <div className="pt-4">
          <DateArchiveBar
            selectedDateId={selectedDateId}
            onSelectDate={(id) => {
              setSelectedDateId(id);
              if (id !== '2569-10-01') {
                triggerToast('แสดงข้อมูลแนวทางย้อนหลัง');
              } else {
                triggerToast('แสดงแนวทางคืนนี้ (1 ต.ค. 2569)');
              }
            }}
          />
        </div>

        {/* Hero Section with Uncle Hong */}
        <HeroOverview
          archive={TODAY_ARCHIVE}
          onScrollToPick={scrollToPick}
        />

        {/* UEFA Nations League 2026-27 Today's Fixtures */}
        <section id="nations-league-fixtures" className="pt-2">
          <NationsLeagueFixtures onScrollToPick={scrollToPick} />
        </section>

        {/* SECTION 1: 3 Matches Deep Dossier */}
        <section id="three-picks" className="space-y-6 pt-4">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2 border-b border-slate-800 pb-4">
            <div>
              <div className="flex items-center gap-2 text-xs text-amber-400 font-semibold uppercase tracking-wider">
                <Flame className="w-4 h-4 fill-amber-400 text-amber-400" />
                <span>ไฮไลท์คัดพิเศษระดับ 5 ดาว</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mt-1">
                เจาะลึก 3 ตัวเน้นน้าหงส์ คืนนี้
              </h2>
            </div>
            <p className="text-xs text-slate-400 max-w-md">
              วิเคราะห์ละเอียดแบบแมตช์ต่อแมตช์ สถิติ H2H ตัวผู้เล่นหลัก และแท็กติกการเข้าทำ
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {TODAY_ARCHIVE.threePicks.map((pick, index) => (
              <PickCard
                key={pick.id}
                pick={pick}
                index={index}
                isSelectedInSlip={selectedSlipPickIds.includes(pick.id)}
                onToggleSlip={handleToggleSlipPick}
              />
            ))}
          </div>
        </section>

        {/* SECTION: Football API Stats & Goal / Win Rate Analytics */}
        <FootballApiStatsWidget picks={TODAY_ARCHIVE.threePicks} />

        {/* SECTION: VIP Group Reviews & Past Performances */}
        <section id="group-reviews" className="pt-4">
          <GroupReviews />
        </section>

        {/* SECTION 2: Parlay Calculator & Slip Builder */}
        <section id="slip-calculator" className="pt-4">
          <SlipCalculator
            allPicks={TODAY_ARCHIVE.threePicks}
            selectedPickIds={selectedSlipPickIds}
            onTogglePick={handleToggleSlipPick}
            onSelectAll={handleSelectAllSlip}
            onClearAll={handleClearAllSlip}
          />
        </section>

        {/* SECTION 3: Community Prediction Poll */}
        <section id="community-poll" className="pt-4">
          <CommunityPoll />
        </section>
      </main>

      {/* Floating Scroll to Top button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          aria-label="Scroll to top"
          className="fixed bottom-6 right-6 z-30 p-3 rounded-full bg-slate-900 border border-slate-700 text-slate-300 hover:text-white hover:bg-amber-400 hover:border-amber-400 hover:text-slate-950 transition-all shadow-lg active:scale-95"
        >
          <ChevronUp className="w-5 h-5" />
        </button>
      )}

      {/* Floating LINE Contact Button */}
      <LineFloatingButton />

      {/* Footer */}
      <DisclaimerFooter />
    </div>
  );
}
