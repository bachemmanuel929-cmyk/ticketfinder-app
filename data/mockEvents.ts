export interface MockEvent {
  id: string;
  title: string;
  category: "sports" | "concerts" | "theater";
  subCategory: string;
  date: string;
  venue: { name: string; city: string; state: string };
  minPrice: number;
  imageUrl: string;
  description: string;
  stubhubOriginalUrl: string;
}

export const mockEvents: MockEvent[] = [
  {
    id: "evt-001",
    title: "Taylor Swift | The Eras Tour",
    category: "concerts",
    subCategory: "Pop",
    date: "2026-08-15T19:30:00-07:00",
    venue: { name: "SoFi Stadium", city: "Inglewood", state: "CA" },
    minPrice: 289,
    imageUrl:
      "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800&q=80",
    description:
      "Experience Taylor Swift's record-breaking Eras Tour live. A journey through every album era with spectacular production, surprise songs, and an unforgettable night of pop perfection.",
    stubhubOriginalUrl: "https://www.stubhub.com/taylor-swift-tickets/",
  },
  {
    id: "evt-002",
    title: "Los Angeles Lakers vs Boston Celtics",
    category: "sports",
    subCategory: "NBA Basketball",
    date: "2026-12-25T17:00:00-08:00",
    venue: { name: "Crypto.com Arena", city: "Los Angeles", state: "CA" },
    minPrice: 145,
    imageUrl:
      "https://images.unsplash.com/photo-1546519638-68e109498ffc?w=800&q=80",
    description:
      "Witness the greatest rivalry in basketball as the Lakers host the Celtics on Christmas Day. Two storied franchises battle for Western Conference supremacy.",
    stubhubOriginalUrl: "https://www.stubhub.com/los-angeles-lakers-tickets/",
  },
  {
    id: "evt-003",
    title: "Hamilton",
    category: "theater",
    subCategory: "Broadway Musical",
    date: "2026-09-20T19:00:00-04:00",
    venue: { name: "Richard Rodgers Theatre", city: "New York", state: "NY" },
    minPrice: 199,
    imageUrl:
      "https://images.unsplash.com/photo-1507676184212-d03ab07a01bf?w=800&q=80",
    description:
      "Lin-Manuel Miranda's revolutionary musical about Alexander Hamilton. Hip-hop, history, and heart collide in the show that changed Broadway forever.",
    stubhubOriginalUrl: "https://www.stubhub.com/hamilton-tickets/",
  },
  {
    id: "evt-004",
    title: "Coachella Valley Music and Arts Festival",
    category: "concerts",
    subCategory: "Festival",
    date: "2026-04-11T12:00:00-07:00",
    venue: { name: "Empire Polo Club", city: "Indio", state: "CA" },
    minPrice: 549,
    imageUrl:
      "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=800&q=80",
    description:
      "Three days of world-class music, art installations, and desert vibes. Coachella brings together the biggest names in music across multiple stages.",
    stubhubOriginalUrl: "https://www.stubhub.com/coachella-tickets/",
  },
  {
    id: "evt-005",
    title: "Super Bowl LX",
    category: "sports",
    subCategory: "NFL Football",
    date: "2027-02-07T15:30:00-08:00",
    venue: { name: "Levi's Stadium", city: "Santa Clara", state: "CA" },
    minPrice: 4250,
    imageUrl:
      "https://images.unsplash.com/photo-1566577739112-5180d4bf9390?w=800&q=80",
    description:
      "The biggest game in American sports. Super Bowl LX promises championship-level drama, halftime spectacle, and the ultimate football experience.",
    stubhubOriginalUrl: "https://www.stubhub.com/super-bowl-tickets/",
  },
  {
    id: "evt-006",
    title: "Beyoncé - Renaissance World Tour",
    category: "concerts",
    subCategory: "R&B / Pop",
    date: "2026-07-04T20:00:00-05:00",
    venue: { name: "MetLife Stadium", city: "East Rutherford", state: "NJ" },
    minPrice: 175,
    imageUrl:
      "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=800&q=80",
    description:
      "Queen Bey returns with a visually stunning celebration of dance, house music, and Black culture. The Renaissance World Tour is a club night on stadium scale.",
    stubhubOriginalUrl: "https://www.stubhub.com/beyonce-tickets/",
  },
  {
    id: "evt-007",
    title: "Wicked",
    category: "theater",
    subCategory: "Broadway Musical",
    date: "2026-10-05T19:30:00-04:00",
    venue: { name: "Gershwin Theatre", city: "New York", state: "NY" },
    minPrice: 129,
    imageUrl:
      "https://images.unsplash.com/photo-1514306191717-452ec5837818?w=800&q=80",
    description:
      "The untold story of the witches of Oz. Defy Gravity with Elphaba and Glinda in one of Broadway's most beloved and longest-running musicals.",
    stubhubOriginalUrl: "https://www.stubhub.com/wicked-tickets/",
  },
  {
    id: "evt-008",
    title: "New York Yankees vs Boston Red Sox",
    category: "sports",
    subCategory: "MLB Baseball",
    date: "2026-08-22T19:05:00-04:00",
    venue: { name: "Yankee Stadium", city: "Bronx", state: "NY" },
    minPrice: 68,
    imageUrl:
      "https://images.unsplash.com/photo-1566577739112-5180d4bf9390?w=800&q=80",
    description:
      "Baseball's fiercest rivalry comes to the Bronx. Yankees vs Red Sox — every pitch matters when these two AL East powers collide.",
    stubhubOriginalUrl: "https://www.stubhub.com/new-york-yankees-tickets/",
  },
  {
    id: "evt-009",
    title: "UFC 310: Main Event",
    category: "sports",
    subCategory: "Mixed Martial Arts",
    date: "2026-11-14T22:00:00-08:00",
    venue: { name: "T-Mobile Arena", city: "Las Vegas", state: "NV" },
    minPrice: 195,
    imageUrl:
      "https://images.unsplash.com/photo-1555597673-b21d5c935865?w=800&q=80",
    description:
      "Championship stakes under the bright lights of Las Vegas. UFC 310 features elite fighters battling for titles in the sport's most electric venue.",
    stubhubOriginalUrl: "https://www.stubhub.com/ufc-tickets/",
  },
  {
    id: "evt-010",
    title: "Bad Bunny - Most Wanted Tour",
    category: "concerts",
    subCategory: "Latin / Reggaeton",
    date: "2026-06-15T20:30:00-05:00",
    venue: { name: "United Center", city: "Chicago", state: "IL" },
    minPrice: 120,
    imageUrl:
      "https://images.unsplash.com/photo-1429962719631-2811c87c7617?w=800&q=80",
    description:
      "Global superstar Bad Bunny brings his Most Wanted Tour to Chicago. High-energy performances, reggaeton anthems, and a party that spans the entire arena.",
    stubhubOriginalUrl: "https://www.stubhub.com/bad-bunny-tickets/",
  },
  {
    id: "evt-011",
    title: "The Lion King",
    category: "theater",
    subCategory: "Broadway Musical",
    date: "2026-09-08T19:00:00-04:00",
    venue: { name: "Minskoff Theatre", city: "New York", state: "NY" },
    minPrice: 109,
    imageUrl:
      "https://images.unsplash.com/photo-1503090540240-747805556d6d?w=800&q=80",
    description:
      "Disney's award-winning masterpiece comes alive with stunning puppetry, iconic songs, and the timeless tale of Simba. A must-see for all ages.",
    stubhubOriginalUrl: "https://www.stubhub.com/the-lion-king-tickets/",
  },
  {
    id: "evt-012",
    title: "Formula 1 Miami Grand Prix",
    category: "sports",
    subCategory: "Motorsport",
    date: "2026-05-03T14:00:00-04:00",
    venue: { name: "Miami International Autodrome", city: "Miami", state: "FL" },
    minPrice: 375,
    imageUrl:
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
    description:
      "Speed, glamour, and sunshine. The Miami Grand Prix brings Formula 1's fastest cars to a world-class street circuit in the heart of South Florida.",
    stubhubOriginalUrl: "https://www.stubhub.com/formula-1-tickets/",
  },
  {
    id: "evt-013",
    title: "Drake - It's All A Blur Tour",
    category: "concerts",
    subCategory: "Hip-Hop",
    date: "2026-10-18T20:00:00-04:00",
    venue: { name: "Madison Square Garden", city: "New York", state: "NY" },
    minPrice: 155,
    imageUrl:
      "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=800&q=80",
    description:
      "Drake takes over The Garden with hits spanning two decades. An immersive production featuring his biggest chart-toppers and surprise guest appearances.",
    stubhubOriginalUrl: "https://www.stubhub.com/drake-tickets/",
  },
  {
    id: "evt-014",
    title: "The Book of Mormon",
    category: "theater",
    subCategory: "Broadway Musical",
    date: "2026-11-22T20:00:00-05:00",
    venue: { name: "Eugene O'Neill Theatre", city: "New York", state: "NY" },
    minPrice: 99,
    imageUrl:
      "https://images.unsplash.com/photo-1516280440614-37939bbacd81?w=800&q=80",
    description:
      "From the creators of South Park, this Tony-winning musical follows two missionaries on a hilariously outrageous adventure in Uganda.",
    stubhubOriginalUrl: "https://www.stubhub.com/the-book-of-mormon-tickets/",
  },
];
