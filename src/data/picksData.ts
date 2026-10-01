export interface GoalTimingData {
  interval: string;
  teamGoals: number;
  opponentGoals: number;
}

export interface MatchApiStats {
  apiProvider: string;
  sampleMatches: number;
  lastUpdated: string;
  winRate: {
    teamWinPercent: number;
    teamDrawPercent: number;
    teamLossPercent: number;
    teamWins10: number;
    teamDraws10: number;
    teamLosses10: number;
    opponentWinPercent: number;
    opponentDrawPercent: number;
    opponentLossPercent: number;
    opponentWins10: number;
    opponentDraws10: number;
    opponentLosses10: number;
  };
  goalStats: {
    teamAvgScored: number;
    teamAvgConceded: number;
    teamXG: number;
    teamConversionRate: number;
    teamCleanSheetPercent: number;
    opponentAvgScored: number;
    opponentAvgConceded: number;
    opponentXG: number;
    opponentConversionRate: number;
    opponentCleanSheetPercent: number;
    bttsPercent: number;
    over25Percent: number;
  };
  timingDistribution: GoalTimingData[];
  shotMetrics: {
    teamShotsOnTargetAvg: number;
    opponentShotsOnTargetAvg: number;
    teamPossessionAvg: number;
    opponentPossessionAvg: number;
  };
}

export interface TeamMatch {
  id: string;
  country: string;
  countryEn: string;
  flag: string;
  tournament: string;
  matchTitle: string;
  opponent: string;
  opponentFlag: string;
  kickoffTime: string;
  kickoffTimeShort: string;
  venue: string;
  isHome: boolean;
  recommendation: string;
  handicap: string;
  odds: number;
  confidencePercent: number;
  confidenceStars: number;
  uncleHongVerdict: string;
  projectedScore: string;
  keyStats: string[];
  keyPlayers: {
    name: string;
    club: string;
    role: string;
    form: string;
  }[];
  recentForm: {
    team: ('W' | 'D' | 'L')[];
    opponent: ('W' | 'D' | 'L')[];
  };
  h2hSummary: string;
  actionImage: string;
  tacticalHighlights: string[];
  apiStats: MatchApiStats;
}

export interface DayArchive {
  dateStr: string;
  buddhistYear: string;
  dateLabel: string;
  isToday: boolean;
  titleNote: string;
  threePicks: TeamMatch[];
}

export const TODAY_ARCHIVE: DayArchive = {
  dateStr: "1 ตุลาคม 2569",
  buddhistYear: "2569",
  dateLabel: "1 ต.ค. 69 (คืนนี้)",
  isToday: true,
  titleNote: "วันนี้น้าหงส์ไปสามตัว ได้แก่ นอร์เวย์ (เรตไหลขึ้นเป็นลูกควบลูกครึ่ง), เยอรมนี (เรตไหลขึ้นเป็นสองลูก), อาเซอร์ไบจาน (ต่อสองลูก) อัปเดตราคาล่าสุดจากกระดานสด ยูฟ่า เนชั่นส์ ลีก ค่าน้ำงาม ลุ้นเข้าวินยกแผงครับ!",
  threePicks: [
    {
      id: "norway",
      country: "นอร์เวย์",
      countryEn: "Norway",
      flag: "🇳🇴",
      tournament: "ยูฟ่า เนชั่นส์ ลีก 2026-27",
      matchTitle: "เวลส์ [38] vs นอร์เวย์ [19]",
      opponent: "เวลส์",
      opponentFlag: "🏴󠁧󠁢󠁷󠁬󠁳󠁿",
      kickoffTime: "01:45 น. (คืนวันพฤหัสบดีที่ 1 ต.ค.)",
      kickoffTimeShort: "01:45 น.",
      venue: "คาร์ดิฟฟ์ ซิตี้ สเตเดียม, คาร์ดิฟฟ์",
      isHome: false,
      recommendation: "ฟันธงต่อนอร์เวย์ เฮชัวร์ (ต่อ 1/1.5)",
      handicap: "-1.25 (ลูกควบลูกครึ่ง)",
      odds: 1.96,
      confidencePercent: 95,
      confidenceStars: 5,
      uncleHongVerdict: "เรตราคาล่าสุดในกระดานไหลต่อแรงมาก จากเดิมครึ่งควบลูก ไหลขึ้นมาเป็น 'ลูกควบลูกครึ่ง (1-1.5)' ค่าน้ำนอร์เวย์ 0.96 จ่ายสวย บอลมีแนวโน้มขาด เออร์ลิง ฮาแลนด์ กำลังกระหายประตูและฟอร์มเข้าฝักสุดขีด ประสานงานกับ มาร์ติน โอเดการ์ด ขี่เวลส์ชัดเจน ทางเวลส์แผงหลังเชื่องช้า ราคาเปิด 1X2 เวลส์จ่ายถึง 7.02 นอร์เวย์ชนะจ่ายแค่ 1.44 สอดคล้องกับค่าน้ำที่บีบให้ต่อนอร์เวย์ น้าหงส์ฟันธงต่อนอร์เวย์ เฮชัวร์แน่นอน!",
      projectedScore: "นอร์เวย์ บุกชนะ 2-0 หรือ 3-1",
      keyStats: [
        "เรตราคาไหลต่อจาก 0.5/1 ขึ้นมาเป็น 1/1.5 (น้ำ 0.96) สะท้อนแรงต่อมหาศาล",
        "ราคาชนะ 1X2 นอร์เวย์จ่ายเพียง 1.44 ขณะที่เวลส์จ่ายสูงถึง 7.02",
        "ฮาแลนด์ ซัดไปแล้ว 9 ประตูจาก 6 เกมหลังสุดในนามทีมชาติ",
        "เวลส์ ไร้ชัยในบ้าน 3 นัดติด และเสียประตูทุกนัด"
      ],
      keyPlayers: [
        { name: "เออร์ลิง ฮาแลนด์", club: "แมนฯ ซิตี้", role: "กองหน้าตัวเป้า", form: "ยิง 7 นัดติด" },
        { name: "มาร์ติน โอเดการ์ด", club: "อาร์เซน่อล", role: "เพลย์เมกเกอร์ / กัปตันทีม", form: "คีย์พาสเฉลี่ย 3.8/เกม" },
        { name: "อเล็กซานเดอร์ ซอร์ลอธ", club: "แอตเลติโก มาดริด", role: "กองหน้าคู่", form: "แอสซิสต์ 3 นัดหลัง" }
      ],
      recentForm: {
        team: ['W', 'W', 'D', 'W', 'W'],
        opponent: ['L', 'D', 'W', 'L', 'D']
      },
      h2hSummary: "พบกันล่าสุด นอร์เวย์ ชนะ 2 เสมอ 1 เวลส์ไม่ชนะนอร์เวย์มา 3 เกมติด",
      actionImage: "/images/norway_match_action_1790821731890.jpg",
      tacticalHighlights: [
        "โอเดการ์ด จ่ายบอลทะลุช่องข้ามไลน์กองหลังเวลส์ให้ฮาแลนด์ใช้สปีดวิ่งฉีก",
        "การขึ้นเกมริมเส้นด้านซ้ายของ อันโตนิโอ นูซา",
        "บีบเพรสซิ่งสูงตัดบอลในแดนกลางเพื่อตัดจังหวะสวนกลับของเวลส์"
      ],
      apiStats: {
        apiProvider: "Opta / UEFA Nations League MatchFeed API v4",
        sampleMatches: 10,
        lastUpdated: "1 ต.ค. 2569 (อัปเดตสดก่อนแข่ง)",
        winRate: {
          teamWinPercent: 70,
          teamDrawPercent: 20,
          teamLossPercent: 10,
          teamWins10: 7,
          teamDraws10: 2,
          teamLosses10: 1,
          opponentWinPercent: 30,
          opponentDrawPercent: 30,
          opponentLossPercent: 40,
          opponentWins10: 3,
          opponentDraws10: 3,
          opponentLosses10: 4
        },
        goalStats: {
          teamAvgScored: 2.4,
          teamAvgConceded: 0.8,
          teamXG: 2.28,
          teamConversionRate: 19.4,
          teamCleanSheetPercent: 60,
          opponentAvgScored: 0.9,
          opponentAvgConceded: 1.6,
          opponentXG: 0.84,
          opponentConversionRate: 9.8,
          opponentCleanSheetPercent: 20,
          bttsPercent: 40,
          over25Percent: 70
        },
        timingDistribution: [
          { interval: "0-15'", teamGoals: 2, opponentGoals: 1 },
          { interval: "16-30'", teamGoals: 3, opponentGoals: 1 },
          { interval: "31-45'", teamGoals: 5, opponentGoals: 2 },
          { interval: "46-60'", teamGoals: 4, opponentGoals: 1 },
          { interval: "61-75'", teamGoals: 6, opponentGoals: 1 },
          { interval: "76-90'+", teamGoals: 4, opponentGoals: 3 }
        ],
        shotMetrics: {
          teamShotsOnTargetAvg: 7.2,
          opponentShotsOnTargetAvg: 3.1,
          teamPossessionAvg: 58.4,
          opponentPossessionAvg: 41.6
        }
      }
    },
    {
      id: "germany",
      country: "เยอรมนี",
      countryEn: "Germany",
      flag: "🇩🇪",
      tournament: "ยูฟ่า เนชั่นส์ ลีก 2026-27",
      matchTitle: "[12] เยอรมนี vs เซอร์เบีย [40]",
      opponent: "เซอร์เบีย",
      opponentFlag: "🇷🇸",
      kickoffTime: "01:45 น. (คืนวันพฤหัสบดีที่ 1 ต.ค.)",
      kickoffTimeShort: "01:45 น.",
      venue: "ซิกนัล อิดูนา พาร์ค, ดอร์ทมุนด์",
      isHome: true,
      recommendation: "ฟันธงต่อเยอรมัน ขยันยิง (ต่อ 2 ลูก)",
      handicap: "-2.0 (สองลูก)",
      odds: 1.90,
      confidencePercent: 94,
      confidenceStars: 5,
      uncleHongVerdict: "เรตราคาล่าสุดในกระดานขยับขึ้นจากลูกครึ่งทะลุไปถึง 'สองลูก (2.0)' น้ำ 0.90 ราคา 1X2 เยอรมันจ่ายเพียง 1.19 เซอร์เบียจ่ายสูงถึง 13.40 สะท้อนความห่างชั้นของศักยภาพทีม อินทรีเหล็กภายใต้ยูเลียน นาเกลส์มันน์ มีระบบเกมรุกที่ดุดัน ทั้งมูเซียล่า, เวียร์ตซ์ และ ไค ฮาแวร์ตซ์ เซอร์เบียนอกบ้านเปื่อยยุบง่าย น้าหงส์ยังมั่นใจต่อเยอรมัน ยิงขาดเกินสองเม็ดแน่นอน!",
      projectedScore: "เยอรมนี ชนะ 3-0 หรือ 4-1",
      keyStats: [
        "เรตราคาล่าสุดเปิดต่อสูงถึง 2.0 (สองลูก) ค่าน้ำ 0.90 และมีราคารอง 2-2.5",
        "ราคาชนะ 1X2 เยอรมันจ่ายเพียง 1.19 ขณะที่เซอร์เบียจ่ายสูงถึง 13.40",
        "เยอรมนี ชนะในบ้าน 6 จาก 7 นัดหลังสุด ยิงเฉลี่ย 3.1 ประตู/เกม",
        "เซอร์เบีย แพ้เกมนอกบ้าน 4 จาก 5 นัดหลังสุด เสียรวม 11 ประตู"
      ],
      keyPlayers: [
        { name: "จามาล มูเซียล่า", club: "บาเยิร์น มิวนิค", role: "เพลย์เมกเกอร์ตัวรุก", form: "ยิง 3 จ่าย 2 ใน 4 นัดหลัง" },
        { name: "โฟลเรียน เวียร์ตซ์", club: "เลเวอร์คูเซ่น", role: "ปีกสร้างสรรค์เกม", form: "สร้างโอกาสยิง 4.5 ครั้ง/เกม" },
        { name: "โยชัว คิมมิช", club: "บาเยิร์น มิวนิค", role: "กองกลาง / กัปตันทีม", form: "จ่ายบอลแม่นยำ 93%" }
      ],
      recentForm: {
        team: ['W', 'W', 'W', 'D', 'W'],
        opponent: ['L', 'D', 'L', 'W', 'L']
      },
      h2hSummary: "พบกัน 3 นัดหลังสุด เยอรมนี ชนะ 2 เสมอ 1 เซอร์เบียยังไม่เคยชนะในถิ่นเยอรมัน",
      actionImage: "/images/austria_match_action_1790821743527.jpg",
      tacticalHighlights: [
        "การสลับตำแหน่งระหว่าง เวียร์ตซ์ และ มูเซียล่า สร้างความสับสนให้เซ็นเตอร์แบ็กเซอร์เบีย",
        "เกมเพรสซิ่งแดนหน้าบีบให้แนวรับคู่แข่งจ่ายบอลเสียหน้าเขตโทษ",
        "การเติมเกมรุกริมเส้นของฟูลแบ็กเพื่อครอสบอลเข้าจุดนัดพบ"
      ],
      apiStats: {
        apiProvider: "Opta / UEFA Nations League MatchFeed API v4",
        sampleMatches: 10,
        lastUpdated: "1 ต.ค. 2569 (อัปเดตสดก่อนแข่ง)",
        winRate: {
          teamWinPercent: 80,
          teamDrawPercent: 10,
          teamLossPercent: 10,
          teamWins10: 8,
          teamDraws10: 1,
          teamLosses10: 1,
          opponentWinPercent: 40,
          opponentDrawPercent: 20,
          opponentLossPercent: 40,
          opponentWins10: 4,
          opponentDraws10: 2,
          opponentLosses10: 4
        },
        goalStats: {
          teamAvgScored: 2.9,
          teamAvgConceded: 0.7,
          teamXG: 2.82,
          teamConversionRate: 21.2,
          teamCleanSheetPercent: 50,
          opponentAvgScored: 1.2,
          opponentAvgConceded: 1.8,
          opponentXG: 1.05,
          opponentConversionRate: 11.4,
          opponentCleanSheetPercent: 20,
          bttsPercent: 50,
          over25Percent: 80
        },
        timingDistribution: [
          { interval: "0-15'", teamGoals: 4, opponentGoals: 1 },
          { interval: "16-30'", teamGoals: 5, opponentGoals: 2 },
          { interval: "31-45'", teamGoals: 4, opponentGoals: 1 },
          { interval: "46-60'", teamGoals: 7, opponentGoals: 3 },
          { interval: "61-75'", teamGoals: 4, opponentGoals: 2 },
          { interval: "76-90'+", teamGoals: 5, opponentGoals: 3 }
        ],
        shotMetrics: {
          teamShotsOnTargetAvg: 8.6,
          opponentShotsOnTargetAvg: 3.4,
          teamPossessionAvg: 64.2,
          opponentPossessionAvg: 35.8
        }
      }
    },
    {
      id: "azerbaijan",
      country: "อาเซอร์ไบจาน",
      countryEn: "Azerbaijan",
      flag: "🇦🇿",
      tournament: "ยูฟ่า เนชั่นส์ ลีก 2026-27",
      matchTitle: "[126] อาเซอร์ไบจาน vs ลิกเตนสไตน์ [206]",
      opponent: "ลิกเตนสไตน์",
      opponentFlag: "🇱🇮",
      kickoffTime: "22:59 น. (คืนวันพฤหัสบดีที่ 1 ต.ค.)",
      kickoffTimeShort: "22:59 น.",
      venue: "บัคเซลล์ อารีน่า, บากู (Bakcell Arena)",
      isHome: true,
      recommendation: "ฟันธงต่ออาเซอร์ไบจาน สราญอุรา (ต่อ 2 ลูก)",
      handicap: "-2.0 (สองลูก)",
      odds: 1.86,
      confidencePercent: 92,
      confidenceStars: 4.5,
      uncleHongVerdict: "เปิดหัวคู่แรกเวลา 22:59 น. อาเซอร์ไบจาน (อันดับ 126 โลก) ดวลกับ ลิกเตนสไตน์ (อันดับ 206 โลก) ช่องว่างของคุณภาพทีมห่างกันลิบลับ ลิกเตนสไตน์เล่นเกมนอกบ้านแทบหาบอลไม่เจอ แพ้รวดติดต่อกันหลายเกมและโดนยิงยับ อาเซอร์ไบจานเล่นในบ้านพร้อมพับสนามบุกตั้งแต่เสียงนกหวีดแรก ราคาเปิดสองลูกไหลไปสองลูกควบสองครึ่ง น้าหงส์ฟันธงต่ออาเซอร์ไบจาน สราญอุราแน่นอน!",
      projectedScore: "อาเซอร์ไบจาน ชนะ 3-0 หรือ 4-0",
      keyStats: [
        "ลิกเตนสไตน์ แพ้นอกบ้าน 12 นัดติดต่อกัน ยิงได้เพียง 1 ประตู เสียไปถึง 38 ประตู",
        "อาเซอร์ไบจาน ชนะเกมในบ้านเมื่อเจอกับทีมต่ำกว่าอันดับ 150 ทุกนัด",
        "ราคาบอลไหลต่อจาก 2.0 ไป 2/2.5 อย่างต่อเนื่อง"
      ],
      keyPlayers: [
        { name: "มาฮีร์ เอมเรลี", club: "เนิร์นแบร์ก", role: "กองหน้าตัวเป้า", form: "ยิง 4 ประตูในรอบคัดเลือก" },
        { name: "เอมิน มะห์มูดอฟ", club: "เนฟท์ชี่ บากู", role: "กองกลาง / กัปตันทีม", form: "จอมเตะลูกนิ่งประจำทีม" },
        { name: "รามิล เชย์ดาเยฟ", club: "คาราบัค", role: "ปีกความเร็วสูง", form: "เลี้ยงผ่านสำเร็จ 75%" }
      ],
      recentForm: {
        team: ['W', 'D', 'L', 'W', 'D'],
        opponent: ['L', 'L', 'L', 'L', 'L']
      },
      h2hSummary: "พบกัน 2 นัด อาเซอร์ไบจาน ชนะรวด ไม่เสียประตูแม้แต่ลูกเดียว",
      actionImage: "/images/netherlands_match_action_1790821755828.jpg",
      tacticalHighlights: [
        "การยิงไกลและลูกตั้งเตะอันตรายของ เอมิน มะห์มูดอฟ",
        "การเจาะทะลุตามช่องแนวลึกโดยใช้ความเร็วของ มาฮีร์ เอมเรลี",
        "การคุมจังหวะเกมแดนกลางตัดโอกาสสวนกลับของลิกเตนสไตน์"
      ],
      apiStats: {
        apiProvider: "Opta / UEFA Nations League MatchFeed API v4",
        sampleMatches: 10,
        lastUpdated: "1 ต.ค. 2569 (อัปเดตสดก่อนแข่ง)",
        winRate: {
          teamWinPercent: 50,
          teamDrawPercent: 30,
          teamLossPercent: 20,
          teamWins10: 5,
          teamDraws10: 3,
          teamLosses10: 2,
          opponentWinPercent: 0,
          opponentDrawPercent: 10,
          opponentLossPercent: 90,
          opponentWins10: 0,
          opponentDraws10: 1,
          opponentLosses10: 9
        },
        goalStats: {
          teamAvgScored: 1.8,
          teamAvgConceded: 1.1,
          teamXG: 2.15,
          teamConversionRate: 16.8,
          teamCleanSheetPercent: 60,
          opponentAvgScored: 0.2,
          opponentAvgConceded: 3.2,
          opponentXG: 0.24,
          opponentConversionRate: 3.5,
          opponentCleanSheetPercent: 0,
          bttsPercent: 20,
          over25Percent: 70
        },
        timingDistribution: [
          { interval: "0-15'", teamGoals: 3, opponentGoals: 0 },
          { interval: "16-30'", teamGoals: 4, opponentGoals: 1 },
          { interval: "31-45'", teamGoals: 3, opponentGoals: 0 },
          { interval: "46-60'", teamGoals: 5, opponentGoals: 0 },
          { interval: "61-75'", teamGoals: 2, opponentGoals: 1 },
          { interval: "76-90'+", teamGoals: 1, opponentGoals: 0 }
        ],
        shotMetrics: {
          teamShotsOnTargetAvg: 6.8,
          opponentShotsOnTargetAvg: 1.2,
          teamPossessionAvg: 62.1,
          opponentPossessionAvg: 37.9
        }
      }
    }
  ]
};

export interface ArchiveDayItem {
  id: string;
  label: string;
  badge?: string;
  isToday?: boolean;
}

export const ARCHIVE_DAYS: ArchiveDayItem[] = [
  { id: '2569-10-01', label: '1 ต.ค. 69 (คืนนี้)', badge: 'ล่าสุด', isToday: true },
  { id: '2569-09-30', label: '30 ก.ย. 69', badge: 'เข้า 3/3' },
  { id: '2569-09-29', label: '29 ก.ย. 69', badge: 'เข้า 2/3' },
  { id: '2569-09-28', label: '28 ก.ย. 69', badge: 'เข้า 3/3' },
  { id: '2569-09-27', label: '27 ก.ย. 69', badge: 'เข้า 3/3' },
];
