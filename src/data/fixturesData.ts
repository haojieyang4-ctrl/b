export interface NationsLeagueTableRow {
  id: string;
  time: string; // e.g. "22:59", "01:45"
  homeTeam: {
    name: string;
    nameEn: string;
    flag: string;
    rank: number;
    isFavorite: boolean;
    isRecommended: boolean;
    isNeutral?: boolean;
  };
  awayTeam: {
    name: string;
    nameEn: string;
    flag: string;
    rank: number;
    isFavorite: boolean;
    isRecommended: boolean;
  };
  handicapDisplay: string; // e.g. "2 \n 2/2.5"
  handicapValues: string[];
  priceTrend: 'up' | 'down' | 'neutral';
  halfScore: string; // "-"
  fullScore: string; // "? - ?"
  verdict: string; // e.g. "ฟันธงต่ออาเซอร์ไบจาน สราญอุรา"
  pickSide: 'home' | 'away';
  isKeyPick: boolean;
}

export const NATIONS_LEAGUE_TABLE_ROWS: NationsLeagueTableRow[] = [
  {
    id: "nl-aze-lie",
    time: "22:59",
    homeTeam: {
      name: "อาเซอร์ไบจาน",
      nameEn: "Azerbaijan",
      flag: "🇦🇿",
      rank: 126,
      isFavorite: true,
      isRecommended: true
    },
    awayTeam: {
      name: "ลิกเตนสไตน์",
      nameEn: "Liechtenstein",
      flag: "🇱🇮",
      rank: 206,
      isFavorite: false,
      isRecommended: false
    },
    handicapDisplay: "2 / 2/2.5",
    handicapValues: ["2", "2/2.5"],
    priceTrend: "up",
    halfScore: "-",
    fullScore: "? - ?",
    verdict: "ฟันธงต่ออาเซอร์ไบจาน สราญอุรา",
    pickSide: "home",
    isKeyPick: true
  },
  {
    id: "nl-den-por",
    time: "01:45",
    homeTeam: {
      name: "เดนมาร์ก",
      nameEn: "Denmark",
      flag: "🇩🇰",
      rank: 21,
      isFavorite: false,
      isRecommended: true
    },
    awayTeam: {
      name: "โปรตุเกส",
      nameEn: "Portugal",
      flag: "🇵🇹",
      rank: 7,
      isFavorite: true,
      isRecommended: false
    },
    handicapDisplay: "0.5 / 0/0.5",
    handicapValues: ["0.5", "0/0.5"],
    priceTrend: "down",
    halfScore: "-",
    fullScore: "? - ?",
    verdict: "ฟันธงรองเดนมาร์ก น่าฝากได้",
    pickSide: "home",
    isKeyPick: false
  },
  {
    id: "nl-gre-ned",
    time: "01:45",
    homeTeam: {
      name: "กรีซ",
      nameEn: "Greece",
      flag: "🇬🇷",
      rank: 46,
      isFavorite: false,
      isRecommended: true
    },
    awayTeam: {
      name: "เนเธอร์แลนด์",
      nameEn: "Netherlands",
      flag: "🇳🇱",
      rank: 9,
      isFavorite: true,
      isRecommended: false
    },
    handicapDisplay: "0.5 / 0/0.5",
    handicapValues: ["0.5", "0/0.5"],
    priceTrend: "down",
    halfScore: "-",
    fullScore: "? - ?",
    verdict: "ฟันธงรองกรีซ ไม่คิดมาก",
    pickSide: "home",
    isKeyPick: false
  },
  {
    id: "nl-ger-srb",
    time: "01:45",
    homeTeam: {
      name: "เยอรมนี",
      nameEn: "Germany",
      flag: "🇩🇪",
      rank: 12,
      isFavorite: true,
      isRecommended: true
    },
    awayTeam: {
      name: "เซอร์เบีย",
      nameEn: "Serbia",
      flag: "🇷🇸",
      rank: 40,
      isFavorite: false,
      isRecommended: false
    },
    handicapDisplay: "1.5 / 1.5/2",
    handicapValues: ["1.5", "1.5/2"],
    priceTrend: "up",
    halfScore: "-",
    fullScore: "? - ?",
    verdict: "ฟันธงต่อเยอรมัน ขยันยิง",
    pickSide: "home",
    isKeyPick: true
  },
  {
    id: "nl-wal-nor",
    time: "01:45",
    homeTeam: {
      name: "เวลส์",
      nameEn: "Wales",
      flag: "🏴󠁧󠁢󠁷󠁬󠁳󠁿",
      rank: 38,
      isFavorite: false,
      isRecommended: false
    },
    awayTeam: {
      name: "นอร์เวย์",
      nameEn: "Norway",
      flag: "🇳🇴",
      rank: 19,
      isFavorite: true,
      isRecommended: true
    },
    handicapDisplay: "0.5 / 0.5/1 / 1",
    handicapValues: ["0.5", "0.5/1", "1"],
    priceTrend: "up",
    halfScore: "-",
    fullScore: "? - ?",
    verdict: "ฟันธงต่อนอร์เวย์ เฮชัวร์",
    pickSide: "away",
    isKeyPick: true
  },
  {
    id: "nl-irl-aut",
    time: "01:45",
    homeTeam: {
      name: "ไอร์แลนด์",
      nameEn: "Republic of Ireland",
      flag: "🇮🇪",
      rank: 55,
      isFavorite: false,
      isRecommended: true
    },
    awayTeam: {
      name: "ออสเตรีย",
      nameEn: "Austria",
      flag: "🇦🇹",
      rank: 23,
      isFavorite: true,
      isRecommended: false
    },
    handicapDisplay: "0/0.5 / 0.5",
    handicapValues: ["0/0.5", "0.5"],
    priceTrend: "up",
    halfScore: "-",
    fullScore: "? - ?",
    verdict: "ฟันธงรองไอร์แลนด์ แสนสุขใจ",
    pickSide: "home",
    isKeyPick: false
  },
  {
    id: "nl-isr-kos",
    time: "01:45",
    homeTeam: {
      name: "อิสราเอล(N)",
      nameEn: "Israel",
      flag: "🇮🇱",
      rank: 76,
      isFavorite: false,
      isRecommended: false,
      isNeutral: true
    },
    awayTeam: {
      name: "โคโซโว",
      nameEn: "Kosovo",
      flag: "🇽🇰",
      rank: 78,
      isFavorite: true,
      isRecommended: true
    },
    handicapDisplay: "เสมอ / 0/0.5",
    handicapValues: ["เสมอ", "0/0.5"],
    priceTrend: "up",
    halfScore: "-",
    fullScore: "? - ?",
    verdict: "ฟันธงต่อโคโซโว ซัลโวชัย",
    pickSide: "away",
    isKeyPick: false
  },
  {
    id: "nl-mlt-gib",
    time: "01:45",
    homeTeam: {
      name: "มอลต้า",
      nameEn: "Malta",
      flag: "🇲🇹",
      rank: 161,
      isFavorite: true,
      isRecommended: true
    },
    awayTeam: {
      name: "ยิบรอลตาร์",
      nameEn: "Gibraltar",
      flag: "🇬🇮",
      rank: 202,
      isFavorite: false,
      isRecommended: false
    },
    handicapDisplay: "1.5",
    handicapValues: ["1.5"],
    priceTrend: "neutral",
    halfScore: "-",
    fullScore: "? - ?",
    verdict: "ฟันธงต่อมอลต้า บอกว่าชิวๆ",
    pickSide: "home",
    isKeyPick: false
  }
];
