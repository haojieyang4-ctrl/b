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
  titleNote: "วันนี้น้าหงส์ไปสามตัว ได้แก่ นอร์เวย์, เยอรมนี, อาเซอร์ไบจาน คัดมาเน้นๆ จากตารางยูฟ่า เนชั่นส์ ลีก 2026-27 ฟอร์มเข้าตา ลุ้นเข้าวินยกแผงครับ!",
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
      recommendation: "ฟันธงต่อนอร์เวย์ เฮชัวร์ (ต่อ 0.5/1)",
      handicap: "-0.75 (ครึ่งควบลูก)",
      odds: 1.84,
      confidencePercent: 95,
      confidenceStars: 5,
      uncleHongVerdict: "นอร์เวย์ชุดนี้คุณภาพทีมและตัวผู้เล่นขี่เวลส์ชัดเจน เออร์ลิง ฮาแลนด์ กำลังกระหายประตูและฟอร์มเข้าฝักสุดขีด ประสานงานกับ มาร์ติน โอเดการ์ด ที่จ่ายคิลเลอร์พาสทะลุช่องได้แม่นยำ ทางด้านเวลส์อยู่ในช่วงผลัดใบ แผงหลังเชื่องช้าและมีช่องว่าง ราคาไหลต่อจากครึ่งลูกไปครึ่งควบลูก น้าหงส์มั่นใจต่อนอร์เวย์ เฮชัวร์แน่นอน!",
      projectedScore: "นอร์เวย์ บุกชนะ 2-0 หรือ 3-1",
      keyStats: [
        "ฮาแลนด์ ซัดไปแล้ว 9 ประตูจาก 6 เกมหลังสุดในนามทีมชาติ",
        "นอร์เวย์ ชนะ 4 จาก 5 นัดหลังสุด เกมรุกเฉลี่ย 2.4 ลูก/นัด",
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
      ]
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
      recommendation: "ฟันธงต่อเยอรมัน ขยันยิง (ต่อ 1.5)",
      handicap: "-1.5 (ลูกครึ่ง)",
      odds: 1.80,
      confidencePercent: 94,
      confidenceStars: 5,
      uncleHongVerdict: "อินทรีเหล็ก เยอรมนี ของ ยูเลียน นาเกลส์มันน์ มีระบบการเล่นที่รวดเร็ว ดุดัน และหลากหลาย ทั้ง มูเซียล่า, เวียร์ตซ์ และ ไค ฮาแวร์ตซ์ สร้างสรรค์โอกาสได้ตลอดเวลา เซอร์เบียเกมนอกบ้านเปราะบางมาก เวลาโดนบดหนักๆ มักจะยุบช่วงครึ่งหลัง ราคาบอลเปิดต่อลูกครึ่งไหลขึ้นไปลูกครึ่งควบสอง น้าหงส์ฟันธงต่อเยอรมัน ยิงขาดเกินสองเม็ดแน่นอน!",
      projectedScore: "เยอรมนี ชนะ 3-0 หรือ 4-1",
      keyStats: [
        "เยอรมนี ชนะในบ้าน 6 จาก 7 นัดหลังสุด ยิงเฉลี่ย 3.1 ประตู/เกม",
        "เซอร์เบีย แพ้เกมนอกบ้าน 4 จาก 5 นัดหลังสุด เสียรวม 11 ประตู",
        "เรตราคาน้ำไหลต่อเยอรมันชัดเจน (1.5 -> 1.5/2)"
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
      ]
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
      ]
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
