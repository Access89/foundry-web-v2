export interface FeatureCard {
  icon: string;
  title: string;
  text: string;
}

export interface TeamMember {
  imageSrc: string;
  title: string;
  name: string;
}

export interface HeroData {
  title: string;
  subtitle: string;
  description: string;
  image: string;
  imageAlt: string;
}

export interface MissionData {
  title: string;
  description1: string;
  description2: string;
  image: string;
  imageAlt: string;
}

export interface VisionData {
  title: string;
  description: string;
}

export interface PurposeData {
  title: string;
  description: string;
  image: string;
  imageAlt: string;
}

export const aboutData = {
  hero: {
    title: "Discover Our Company",
    subtitle: "About Us",
    description: "Access 89 is a proudly Ghanaian-owned technology company and the force behind the Foundry Platform. We are a team of builders, innovators, and problem-solvers dedicated to creating a new digital ecosystem that empowers businesses and financial institutions.",
    image: "/images/Aboutbg1.png",
    imageAlt: "Access 89 Team"
  } as HeroData,

  features: [
    {
      icon: "fluent-emoji-high-contrast:bank",
      title: "For Financial Institutions",
      text: "Accelerated onboarding by 75%, faster loan processing, and reduced costs — empowering microfinance, savings & loans, and fund managers to compete as modern digital banks."
    },
    {
      icon: "ion:business",
      title: "For Businesses",
      text: "SMEs and enterprises gain real-time visibility, automated operations, and secure sales-to-supply-chain management — fueling growth and reducing risks."
    },
    {
      icon: "subway:world-1",
      title: "Our Impact",
      text: "Total Value Transacted (TVT) grows daily — a powerful measure of the trust and real value we're creating across Africa."
    }
  ] as FeatureCard[],

  mission: {
    title: "Our Mission",
    description1:"Our mission is to empower African SMEs by providing a single, unified digital platform that turns their daily operations into a competitive advantage. We do this by simplifying complex processes—sales, inventory, payments, customer engagement, and financial reporting—into one intuitive, secure system that small businesses can adopt quickly and scale with confidence.  ",
    description2:"By combining locally relevant features, affordable pricing, and accessible support, we help entrepreneurs reclaim time and focus on growth, not administration. We strive to remove friction from the way businesses transact, hire, and plan, unlocking new revenue opportunities and improving operational resilience. ",
    image: "/images/Team2.jpg",
    imageAlt: "Our Mission"
  } as MissionData,

  vision: {
    title: "Our Vision",
    description: "We are building the foundational layer for commerce and finance across the continent; a single, integrated ecosystem that powers every aspect of a business, from transactions and supply chain to financing and growth. We are not just creating a platform; we are building the digital nervous system for the African economy."
  } as VisionData,

  purpose: {
    title: "Why we come to work every day",
    description: "We come to work every day driven by the conviction that technology can be a powerful force for change. We are inspired by the resilience of the African entrepreneur and are committed to solving their most pressing challenges. Our purpose is to build a platform that empowers the corner shop owner with the same tools as a major corporation. We believe that by building better technology, we are building a stronger, more inclusive financial future for the continent.",
    image: "/images/Team.png",
    imageAlt: "Team working together"
  } as PurposeData,

  team: [
    {
      imageSrc: "/images/martin-gilbert.jpg",
      title: "CEO",
      name: "Gibson Annor Antwi"
    },
    {
      imageSrc: "/images/martin-gilbert.jpg",
      title: "VP Product",
      name: "Nadia Modoc"
    },
    {
      imageSrc: "/images/martin-gilbert.jpg",
      title: "VP Engineering",
      name: "Maltiti Suleman Osman"
    },
    {
      imageSrc: "/images/martin-gilbert.jpg",
      title: "VP Design",
      name: "Yaa Agyei-Ampomah-"
    },
  {
    imageSrc: "/images/martin-gilbert.jpg",
    title: "Site SRA Engineer/Information Security",
    name: "Nana Kwame Antwi Gyamfi-"
  
  },
  {
    imageSrc: "/images/martin-gilbert.jpg",
    title: "Data Scientist",
    name: "George Aboagye Kwansa"  
  },
 {
  imageSrc: "/images/martin-gilbert.jpg",
  title: "Software Engineer",
  name: "Akwasi Frimpong"
 },
 {
  imageSrc: "/images/martin-gilbert.jpg",
  title: "Software Engineer",
  name: "Maxwell Appiah Gyimah"
 }

  ] as TeamMember[]
};
