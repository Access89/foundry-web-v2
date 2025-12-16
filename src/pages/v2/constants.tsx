import {
  CreditCard,
  Layers,
  ShoppingBag,
  Coffee,
  Building2,
  Landmark,
  BookOpen,
  Users,
  MessageSquare,
  FileText,
  Receipt,
  Package,
  Coins,
  ScanFace,
} from "lucide-react";

// Theme Config - Comprehensive Style System
export const theme = {
  merchant: {
    // Backgrounds
    primary: "bg-black",
    heroBg: "bg-white",
    sectionBg: "bg-zinc-50",
    cardBg: "bg-white",
    cardBgDark: "bg-zinc-50",
    codeBg: "bg-[#24272A]",
    codeTabBg: "bg-[#1C1C1C]",

    // Text Colors
    text: "text-zinc-900",
    textSecondary: "text-zinc-600",
    textMuted: "text-zinc-500",
    textLight: "text-zinc-400",

    // Borders
    border: "border-zinc-200",
    borderLight: "border-zinc-100",

    // Buttons
    button: "bg-black text-white hover:bg-gray-800",
    buttonSecondary: "bg-white text-black hover:bg-zinc-50",

    // Dropdowns & Menus
    dropdownBg: "bg-white border-zinc-200 text-zinc-900",
    dropdownHover: "hover:bg-zinc-50",

    // Footer
    footerBg: "bg-[#1C1C1C] border-zinc-800",
    footerText: "text-gray-400",

    // Mobile Menu
    mobileMenuBg: "bg-white text-zinc-900",

    // Stats & Accents
    accentColor: "text-black",
    statColor: "text-black",

    // Status Colors
    statusActive: "bg-green-100 text-green-700",

    // CTAs
    ctaBg: "bg-[#D6ECFF]",
    ctaText: "text-black",
  },
  bank: {
    // Backgrounds
    primary: "bg-[#1C1C1C]",
    heroBg: "bg-[#1C1C1C]",
    sectionBg: "bg-[#1C1C1C]",
    cardBg: "bg-[#24272A]",
    cardBgDark: "bg-[#1C1C1C]",
    codeBg: "bg-[#24272A]",
    codeTabBg: "bg-[#1C1C1C]",

    // Text Colors
    text: "text-white",
    textSecondary: "text-gray-400",
    textMuted: "text-gray-500",
    textLight: "text-gray-300",

    // Borders
    border: "border-zinc-800",
    borderLight: "border-zinc-700",

    // Buttons
    button: "bg-white text-black hover:bg-gray-100",
    buttonSecondary: "bg-zinc-800 text-white hover:bg-zinc-700",

    // Dropdowns & Menus
    dropdownBg: "bg-[#24272A] border-zinc-800 text-white",
    dropdownHover: "hover:bg-zinc-800",

    // Footer
    footerBg: "bg-[#1C1C1C] border-zinc-800",
    footerText: "text-gray-400",

    // Mobile Menu
    mobileMenuBg: "bg-[#1C1C1C] text-white",

    // Stats & Accents
    accentColor: "text-[#F6851B]",
    statColor: "text-[#F6851B]",

    // Status Colors
    statusActive: "bg-green-900/30 text-green-400",

    // CTAs
    ctaBg: "bg-[#D6ECFF]",
    ctaText: "text-black",
  },
};

// Navigation Data Helper
// We need to pass the navigate function to this helper or structure it differently.
// Since we are moving to React Router, we can store paths instead of actions.

export const getNavData = (
  navigate: (path: string) => void,
  setSegment?: (seg: string) => void
) => ({
  Products: {
    type: "categorized",
    sections: [
      {
        title: "For Business",
        items: [
          {
            title: "Point of Sale",
            desc: "In-store payments",
            icon: <CreditCard className="w-5 h-5" />,
            action: () => {
              navigate("/hardware");
              if (setSegment) setSegment("merchant");
            },
          },
          {
            title: "Invoices",
            desc: "Get paid faster",
            icon: <FileText className="w-5 h-5" />,
            action: () => {
              navigate("/invoices");
              if (setSegment) setSegment("merchant");
            },
          },
          {
            title: "Expenses",
            desc: "Corporate cards",
            icon: <Receipt className="w-5 h-5" />,
            action: () => {
              navigate("/expenses");
              if (setSegment) setSegment("merchant");
            },
          },
          {
            title: "Inventory",
            desc: "Sync across channels",
            icon: <Package className="w-5 h-5" />,
            action: () => {
              navigate("/inventory");
              if (setSegment) setSegment("merchant");
            },
          },
          {
            title: "Staff",
            desc: "Payroll & scheduling",
            icon: <Users className="w-5 h-5" />,
            action: () => {
              navigate("/staff");
              if (setSegment) setSegment("merchant");
            },
          },
          {
            title: "Credit",
            desc: "Capital & lending",
            icon: <Coins className="w-5 h-5" />,
            action: () => {
              navigate("/credit");
              if (setSegment) setSegment("merchant");
            },
          },
        ],
      },
      {
        title: "For Financial Institutions",
        items: [
          {
            title: "Banking as a Service",
            desc: "Accounts & cards infrastructure",
            icon: <Landmark className="w-5 h-5" />,
            action: () => {
              navigate("/baas");
              if (setSegment) setSegment("bank");
            },
          },
          {
            title: "Engagement Platform",
            desc: "Customer journey orchestration",
            icon: <Layers className="w-5 h-5" />,
            action: () => {
              navigate("/engagement");
              if (setSegment) setSegment("bank");
            },
          },
          {
            title: "Identity (KYC)",
            desc: "Identity verification & fraud",
            icon: <ScanFace className="w-5 h-5" />,
            action: () => {
              navigate("/kyc");
              if (setSegment) setSegment("bank");
            },
          },
        ],
      },
    ],
  },
  Solutions: [
    {
      title: "Retail",
      desc: "For shops and boutiques.",
      icon: <ShoppingBag className="w-5 h-5" />,
      action: () => {
        navigate("/retail");
        if (setSegment) setSegment("merchant");
      },
    },
    {
      title: "Food & Beverage",
      desc: "Restaurants, cafes, and bars.",
      icon: <Coffee className="w-5 h-5" />,
      action: () => {
        navigate("/fnb");
        if (setSegment) setSegment("merchant");
      },
    },
    {
      title: "Enterprise",
      desc: "Scale with custom integrations.",
      icon: <Building2 className="w-5 h-5" />,
      action: () => {
        navigate("/enterprise");
        if (setSegment) setSegment("bank");
      },
    },
    {
      title: "Banks",
      desc: "Modernize legacy infrastructure.",
      icon: <Landmark className="w-5 h-5" />,
      action: () => {
        navigate("/banks");
        if (setSegment) setSegment("bank");
      },
    },
  ],
  Resources: [
    {
      title: "Blog",
      desc: "News and industry insights.",
      icon: <BookOpen className="w-5 h-5" />,
      action: () => {
        window.open("https://www.linkedin.com/company/access-89/", "_blank");
      },
    },
    {
      title: "Customer Stories",
      desc: "See how others grow.",
      icon: <Users className="w-5 h-5" />,
      action: () => {
        navigate("/customer-stories");
        if (setSegment) setSegment("merchant");
      },
    },
    {
      title: "Help Center",
      desc: "24/7 support and guides.",
      icon: <MessageSquare className="w-5 h-5" />,
      action: () => {
        navigate("/help-center");
        if (setSegment) setSegment("merchant");
      },
    },
  ],
});
