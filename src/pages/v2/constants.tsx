import React from "react";
import {
  CreditCard,
  Smartphone,
  Layers,
  ShoppingBag,
  Coffee,
  Building2,
  Landmark,
  Code2,
  Terminal,
  Zap,
  BookOpen,
  Users,
  MessageSquare,
  FileText,
  Receipt,
  Package,
  Coins,
  ScanFace,
} from "lucide-react";

// Theme Config
export const theme = {
  merchant: {
    primary: "bg-black",
    secondary: "bg-zinc-100",
    text: "text-zinc-900",
    accent: "bg-emerald-500",
    heroBg: "bg-white",
    button: "bg-zinc-900 text-white hover:bg-zinc-700",
    dropdownBg: "bg-white border-zinc-200 text-zinc-900",
    dropdownHover: "hover:bg-zinc-50",
    footerBg: "bg-zinc-50 border-zinc-200",
    footerText: "text-zinc-600",
    mobileMenuBg: "bg-white text-zinc-900",
  },
  bank: {
    primary: "bg-blue-900",
    secondary: "bg-slate-50",
    text: "text-slate-100",
    accent: "bg-indigo-500",
    heroBg: "bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900",
    button: "bg-indigo-600 text-white hover:bg-indigo-500",
    dropdownBg: "bg-slate-900 border-slate-700 text-slate-100",
    dropdownHover: "hover:bg-white/5",
    footerBg: "bg-slate-950 border-slate-800",
    footerText: "text-slate-400",
    mobileMenuBg: "bg-slate-900 text-white",
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
              navigate("/v2/hardware");
              if (setSegment) setSegment("merchant");
            },
          },
          {
            title: "Invoices",
            desc: "Get paid faster",
            icon: <FileText className="w-5 h-5" />,
            action: () => {
              navigate("/v2/invoices");
              if (setSegment) setSegment("merchant");
            },
          },
          {
            title: "Expenses",
            desc: "Corporate cards",
            icon: <Receipt className="w-5 h-5" />,
            action: () => {
              navigate("/v2/retail");
              if (setSegment) setSegment("merchant");
            },
          },
          {
            title: "Inventory",
            desc: "Sync across channels",
            icon: <Package className="w-5 h-5" />,
            action: () => {
              navigate("/v2/retail");
              if (setSegment) setSegment("merchant");
            },
          },
          {
            title: "Staff",
            desc: "Payroll & scheduling",
            icon: <Users className="w-5 h-5" />,
            action: () => {
              navigate("/v2/retail");
              if (setSegment) setSegment("merchant");
            },
          },
          {
            title: "Credit",
            desc: "Capital & lending",
            icon: <Coins className="w-5 h-5" />,
            action: () => {
              navigate("/v2/credit");
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
              navigate("/v2/baas");
              if (setSegment) setSegment("bank");
            },
          },
          {
            title: "Engagement Platform",
            desc: "Customer journey orchestration",
            icon: <Layers className="w-5 h-5" />,
            action: () => {
              navigate("/v2/engagement");
              if (setSegment) setSegment("bank");
            },
          },
          {
            title: "Identity (KYC)",
            desc: "Identity verification & fraud",
            icon: <ScanFace className="w-5 h-5" />,
            action: () => {
              navigate("/v2/kyc");
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
        navigate("/v2/retail");
        if (setSegment) setSegment("merchant");
      },
    },
    {
      title: "Food & Beverage",
      desc: "Restaurants, cafes, and bars.",
      icon: <Coffee className="w-5 h-5" />,
      action: () => {
        navigate("/v2/fnb");
        if (setSegment) setSegment("merchant");
      },
    },
    {
      title: "Enterprise",
      desc: "Scale with custom integrations.",
      icon: <Building2 className="w-5 h-5" />,
      action: () => {
        navigate("/v2/enterprise");
        if (setSegment) setSegment("bank");
      },
    },
    {
      title: "Banks",
      desc: "Modernize legacy infrastructure.",
      icon: <Landmark className="w-5 h-5" />,
      action: () => {
        navigate("/v2/banks");
        if (setSegment) setSegment("bank");
      },
    },
  ],
  Developers: [
    {
      title: "API Reference",
      desc: "Detailed endpoints and guides.",
      icon: <Code2 className="w-5 h-5" />,
      action: () => {},
    },
    {
      title: "SDKs",
      desc: "Libraries for every language.",
      icon: <Terminal className="w-5 h-5" />,
      action: () => {},
    },
    {
      title: "Sandbox",
      desc: "Test with mock data.",
      icon: <Zap className="w-5 h-5" />,
      action: () => {},
    },
  ],
  Resources: [
    {
      title: "Blog",
      desc: "News and industry insights.",
      icon: <BookOpen className="w-5 h-5" />,
      action: () => {},
    },
    {
      title: "Customer Stories",
      desc: "See how others grow.",
      icon: <Users className="w-5 h-5" />,
      action: () => {},
    },
    {
      title: "Help Center",
      desc: "24/7 support and guides.",
      icon: <MessageSquare className="w-5 h-5" />,
      action: () => {},
    },
  ],
});
