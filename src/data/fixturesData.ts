export interface AsianBookmakerLine {
  handicap: string;
  homeOdds: string;
  awayOdds: string;
  overUnder: string;
  overOdds: string;
  underOdds: string;
}

export interface AsianBookmakerMatch {
  id: string;
  league: string;
  time: string;
  homeTeam: string;
  awayTeam: string;
  favoriteTeam: 'home' | 'away';
  fullTimeLines: AsianBookmakerLine[];
  oneXTwo: {
    home: number;
    draw: number;
    away: number;
  };
  oddEven?: {
    odd: string;
    even: string;
  };
  firstHalfLines: {
    handicap: string;
    homeOdds: string;
    awayOdds: string;
    overUnder: string;
    overOdds: string;
    underOdds: string;
  }[];
  firstHalfOneXTwo?: {
    home: number;
    draw: number;
    away: number;
  };
}

export const LIVE_ASIAN_BOOKMAKER_MATCHES: AsianBookmakerMatch[] = [
  {
    id: "abm-den-por",
    league: "ยูฟ่า เนชั่นส์ ลีก เอ",
    time: "สด 01:45",
    homeTeam: "เดนมาร์ก",
    awayTeam: "โปรตุเกส",
    favoriteTeam: "away",
    fullTimeLines: [
      { handicap: "0.5", homeOdds: "0.85", awayOdds: "-0.91", overUnder: "2.5-3", overOdds: "0.81", underOdds: "-0.89" },
      { handicap: "0-0.5", homeOdds: "-0.87", awayOdds: "0.81", overUnder: "3", overOdds: "-0.95", underOdds: "0.87" },
      { handicap: "0.5-1", homeOdds: "0.65", awayOdds: "-0.71", overUnder: "2.5", overOdds: "0.65", underOdds: "-0.73" },
      { handicap: "0", homeOdds: "-0.60", awayOdds: "0.54", overUnder: "3-3.5", overOdds: "-0.74", underOdds: "0.66" }
    ],
    oneXTwo: { home: 3.35, draw: 3.68, away: 2.08 },
    oddEven: { odd: "0.95", even: "0.95" },
    firstHalfLines: [
      { handicap: "0-0.5", homeOdds: "0.80", awayOdds: "-0.88", overUnder: "1-1.5", overOdds: "-0.91", underOdds: "0.83" },
      { handicap: "0", homeOdds: "-0.69", awayOdds: "0.61", overUnder: "1", overOdds: "0.64", underOdds: "-0.72" },
      { handicap: "0.5", homeOdds: "0.54", awayOdds: "-0.62", overUnder: "1.5", overOdds: "-0.65", underOdds: "0.57" }
    ],
    firstHalfOneXTwo: { home: 3.61, draw: 2.31, away: 2.59 }
  },
  {
    id: "abm-ger-srb",
    league: "ยูฟ่า เนชั่นส์ ลีก เอ",
    time: "สด 01:45",
    homeTeam: "เยอรมัน",
    awayTeam: "เซอร์เบีย",
    favoriteTeam: "home",
    fullTimeLines: [
      { handicap: "2", homeOdds: "0.90", awayOdds: "-0.96", overUnder: "3.5", overOdds: "0.93", underOdds: "0.99" },
      { handicap: "2-2.5", homeOdds: "-0.85", awayOdds: "0.79", overUnder: "3.5-4", overOdds: "-0.90", underOdds: "0.82" },
      { handicap: "1.5-2", homeOdds: "0.72", awayOdds: "-0.78", overUnder: "3-3.5", overOdds: "0.72", underOdds: "-0.80" },
      { handicap: "2.5", homeOdds: "-0.71", awayOdds: "0.65", overUnder: "4", overOdds: "-0.69", underOdds: "0.61" }
    ],
    oneXTwo: { home: 1.19, draw: 7.16, away: 13.40 },
    oddEven: { odd: "0.96", even: "0.94" },
    firstHalfLines: [
      { handicap: "1", homeOdds: "-0.88", awayOdds: "0.80", overUnder: "1.5", overOdds: "0.90", underOdds: "-0.98" },
      { handicap: "0.5-1", homeOdds: "0.76", awayOdds: "-0.84", overUnder: "1-1.5", overOdds: "0.62", underOdds: "-0.70" },
      { handicap: "0.5", homeOdds: "0.57", awayOdds: "-0.65", overUnder: "1.5-2", overOdds: "-0.74", underOdds: "0.66" }
    ],
    firstHalfOneXTwo: { home: 1.56, draw: 3.19, away: 7.00 }
  },
  {
    id: "abm-gre-ned",
    league: "ยูฟ่า เนชั่นส์ ลีก เอ",
    time: "สด 01:45",
    homeTeam: "กรีซ",
    awayTeam: "เนเธอร์แลนด์",
    favoriteTeam: "away",
    fullTimeLines: [
      { handicap: "0-0.5", homeOdds: "-0.95", awayOdds: "0.89", overUnder: "2.5-3", overOdds: "0.84", underOdds: "-0.92" },
      { handicap: "0.5", homeOdds: "0.79", awayOdds: "-0.85", overUnder: "3", overOdds: "-0.87", underOdds: "0.79" },
      { handicap: "0.5-1", homeOdds: "0.59", awayOdds: "-0.65", overUnder: "2.5", overOdds: "0.68", underOdds: "-0.76" },
      { handicap: "0", homeOdds: "-0.62", awayOdds: "0.56", overUnder: "3-3.5", overOdds: "-0.69", underOdds: "0.61" }
    ],
    oneXTwo: { home: 3.23, draw: 3.63, away: 2.14 },
    oddEven: { odd: "0.96", even: "0.94" },
    firstHalfLines: [
      { handicap: "0-0.5", homeOdds: "0.77", awayOdds: "-0.85", overUnder: "1-1.5", overOdds: "-0.88", underOdds: "0.80" },
      { handicap: "0", homeOdds: "-0.72", awayOdds: "0.64", overUnder: "1", overOdds: "0.63", underOdds: "-0.71" },
      { handicap: "0.5", homeOdds: "0.52", awayOdds: "-0.60", overUnder: "1.5", overOdds: "-0.64", underOdds: "0.56" }
    ],
    firstHalfOneXTwo: { home: 3.49, draw: 2.33, away: 2.63 }
  },
  {
    id: "abm-wal-nor",
    league: "ยูฟ่า เนชั่นส์ ลีก เอ",
    time: "สด 01:45",
    homeTeam: "เวลส์",
    awayTeam: "นอร์เวย์",
    favoriteTeam: "away",
    fullTimeLines: [
      { handicap: "1-1.5", homeOdds: "0.98", awayOdds: "0.96", overUnder: "3-3.5", overOdds: "-0.86", underOdds: "0.78" },
      { handicap: "1.5", homeOdds: "0.71", awayOdds: "-0.77", overUnder: "3", overOdds: "0.91", underOdds: "-0.99" },
      { handicap: "1", homeOdds: "-0.77", awayOdds: "0.71", overUnder: "2.5-3", overOdds: "0.73", underOdds: "-0.81" },
      { handicap: "1.5-2", homeOdds: "0.55", awayOdds: "-0.61", overUnder: "3.5", overOdds: "-0.73", underOdds: "0.65" }
    ],
    oneXTwo: { home: 7.02, draw: 4.71, away: 1.44 },
    oddEven: { odd: "0.96", even: "0.94" },
    firstHalfLines: [
      { handicap: "0.5", homeOdds: "0.94", awayOdds: "0.98", overUnder: "1-1.5", overOdds: "0.94", underOdds: "0.98" },
      { handicap: "0.5-1", homeOdds: "0.62", awayOdds: "-0.70", overUnder: "1.5", overOdds: "-0.74", underOdds: "0.66" },
      { handicap: "0-0.5", homeOdds: "-0.69", awayOdds: "0.61", overUnder: "1", overOdds: "0.52", underOdds: "-0.60" }
    ],
    firstHalfOneXTwo: { home: 5.04, draw: 2.56, away: 1.97 }
  }
];

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
    handicapDisplay: "0.5 / 0-0.5 / 0.5-1",
    handicapValues: ["0.5", "0-0.5", "0.5-1", "0"],
    priceTrend: "down",
    halfScore: "-",
    fullScore: "? - ?",
    verdict: "ฟันธงรองเดนมาร์ก น่าฝากได้ (หรือต่ำ 2.5/3)",
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
    handicapDisplay: "0-0.5 / 0.5 / 0.5-1",
    handicapValues: ["0-0.5", "0.5", "0.5-1", "0"],
    priceTrend: "down",
    halfScore: "-",
    fullScore: "? - ?",
    verdict: "ฟันธงรองกรีซ ไม่คิดมาก (หรือต่ำ 2.5/3)",
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
    handicapDisplay: "2 / 2-2.5 / 1.5-2",
    handicapValues: ["2", "2-2.5", "1.5-2", "2.5"],
    priceTrend: "up",
    halfScore: "-",
    fullScore: "? - ?",
    verdict: "ฟันธงต่อเยอรมัน ขยันยิง (ต่อ 2 ลูก)",
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
    handicapDisplay: "1-1.5 / 1.5 / 1",
    handicapValues: ["1-1.5", "1.5", "1", "1.5-2"],
    priceTrend: "up",
    halfScore: "-",
    fullScore: "? - ?",
    verdict: "ฟันธงต่อนอร์เวย์ เฮชัวร์ (ต่อ 1/1.5)",
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
