import React, { useState, useEffect } from 'react';
import { 
  ArrowRight, 
  Menu, 
  X, 
  CreditCard, 
  Smartphone, 
  Globe, 
  ShieldCheck, 
  Zap, 
  BarChart3, 
  Layers, 
  Code2, 
  Terminal,
  ChevronRight,
  ChevronDown,
  PieChart,
  Users,
  BookOpen,
  MessageSquare,
  Quote,
  Star,
  ShoppingBag,
  Coffee,
  Building2,
  Landmark,
  ArrowLeft,
  Server,
  Lock,
  RefreshCw,
  Layout,
  MousePointerClick,
  Monitor,
  Wifi,
  Battery,
  Receipt,
  Briefcase,
  Coins,
  Truck,
  Cpu,
  FileText,
  UserCheck,
  AlertTriangle,
  Search,
  Activity,
  Database,
  Shuffle,
  CheckCircle2,
  TrendingUp,
  FileSpreadsheet,
  ScanFace,
  Fingerprint,
  FileBadge,
  Package
} from 'lucide-react';

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSegment, setActiveSegment] = useState('merchant'); // 'merchant' or 'bank'
  const [currentView, setCurrentView] = useState('home'); 
  // Views: 'home', 'retail', 'fnb', 'enterprise', 'banks', 'baas', 'engagement', 'hardware', 'credit', 'kyc', 'invoices'
  const [scrolled, setScrolled] = useState(false);
  const [hoveredNav, setHoveredNav] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigateTo = (viewId, segmentPreference) => {
    setCurrentView(viewId);
    if (segmentPreference) setActiveSegment(segmentPreference);
    setIsMenuOpen(false);
    setHoveredNav(null);
    window.scrollTo(0, 0);
  };

  const theme = {
    merchant: {
      primary: 'bg-black',
      secondary: 'bg-zinc-100',
      text: 'text-zinc-900',
      accent: 'bg-emerald-500', 
      heroBg: 'bg-white',
      button: 'bg-zinc-900 text-white hover:bg-zinc-700',
      dropdownBg: 'bg-white border-zinc-200 text-zinc-900',
      dropdownHover: 'hover:bg-zinc-50',
      footerBg: 'bg-zinc-50 border-zinc-200',
      footerText: 'text-zinc-600',
      mobileMenuBg: 'bg-white text-zinc-900'
    },
    bank: {
      primary: 'bg-blue-900',
      secondary: 'bg-slate-50',
      text: 'text-slate-100', 
      accent: 'bg-indigo-500', 
      heroBg: 'bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900',
      button: 'bg-indigo-600 text-white hover:bg-indigo-500',
      dropdownBg: 'bg-slate-900 border-slate-700 text-slate-100',
      dropdownHover: 'hover:bg-white/5',
      footerBg: 'bg-slate-950 border-slate-800',
      footerText: 'text-slate-400',
      mobileMenuBg: 'bg-slate-900 text-white'
    }
  };

  const currentTheme = theme[activeSegment];

  const navData = {
    Products: {
      type: 'categorized',
      sections: [
        {
          title: 'For Business',
          items: [
            { title: 'Point of Sale', desc: 'In-store payments', icon: <CreditCard className="w-5 h-5"/>, action: () => navigateTo('hardware', 'merchant') },
            { title: 'Invoices', desc: 'Get paid faster', icon: <FileText className="w-5 h-5"/>, action: () => navigateTo('invoices', 'merchant') }, // Updated Link
            { title: 'Expenses', desc: 'Corporate cards', icon: <Receipt className="w-5 h-5"/>, action: () => navigateTo('retail', 'merchant') },
            { title: 'Inventory', desc: 'Sync across channels', icon: <Package className="w-5 h-5"/>, action: () => navigateTo('retail', 'merchant') },
            { title: 'Staff', desc: 'Payroll & scheduling', icon: <Users className="w-5 h-5"/>, action: () => navigateTo('retail', 'merchant') },
            { title: 'Credit', desc: 'Capital & lending', icon: <Coins className="w-5 h-5"/>, action: () => navigateTo('credit', 'merchant') },
          ]
        },
        {
          title: 'For Financial Institutions',
          items: [
            { title: 'Banking as a Service', desc: 'Accounts & cards infrastructure', icon: <Landmark className="w-5 h-5"/>, action: () => navigateTo('baas', 'bank') },
            { title: 'Engagement Platform', desc: 'Customer journey orchestration', icon: <Layers className="w-5 h-5"/>, action: () => navigateTo('engagement', 'bank') },
            { title: 'Identity (KYC)', desc: 'Identity verification & fraud', icon: <ScanFace className="w-5 h-5"/>, action: () => navigateTo('kyc', 'bank') },
          ]
        }
      ]
    },
    Solutions: [
      { title: 'Retail', desc: 'For shops and boutiques.', icon: <ShoppingBag className="w-5 h-5"/>, action: () => navigateTo('retail', 'merchant') },
      { title: 'Food & Beverage', desc: 'Restaurants, cafes, and bars.', icon: <Coffee className="w-5 h-5"/>, action: () => navigateTo('fnb', 'merchant') },
      { title: 'Enterprise', desc: 'Scale with custom integrations.', icon: <Building2 className="w-5 h-5"/>, action: () => navigateTo('enterprise', 'bank') },
      { title: 'Banks', desc: 'Modernize legacy infrastructure.', icon: <Landmark className="w-5 h-5"/>, action: () => navigateTo('banks', 'bank') }
    ],
    Developers: [
      { title: 'API Reference', desc: 'Detailed endpoints and guides.', icon: <Code2 className="w-5 h-5"/>, action: () => {} },
      { title: 'SDKs', desc: 'Libraries for every language.', icon: <Terminal className="w-5 h-5"/>, action: () => {} },
      { title: 'Sandbox', desc: 'Test with mock data.', icon: <Zap className="w-5 h-5"/>, action: () => {} }
    ],
    Resources: [
      { title: 'Blog', desc: 'News and industry insights.', icon: <BookOpen className="w-5 h-5"/>, action: () => {} },
      { title: 'Customer Stories', desc: 'See how others grow.', icon: <Users className="w-5 h-5"/>, action: () => {} },
      { title: 'Help Center', desc: '24/7 support and guides.', icon: <MessageSquare className="w-5 h-5"/>, action: () => {} }
    ]
  };

  // ... existing HomeView, RetailView, FnBView, EnterpriseView, BanksView, BaaSView, EngagementView, HardwareView, CreditView, KYCView ...
  const HomeView = () => (
    <div className="animate-in fade-in duration-500">
      {/* Hero Section */}
      <header className={`relative pt-32 pb-20 px-6 overflow-hidden transition-colors duration-700 ${currentTheme.heroBg}`}>
        <div className="max-w-7xl mx-auto relative z-10">
          
          {/* Segment Toggle */}
          <div className="flex justify-center mb-12">
            <div className={`p-1 rounded-full flex gap-1 ${activeSegment === 'bank' ? 'bg-white/10 backdrop-blur-sm border border-white/20' : 'bg-zinc-100 border border-zinc-200'}`}>
              <button 
                onClick={() => setActiveSegment('merchant')}
                className={`px-6 py-2 rounded-full text-sm font-bold transition-all duration-300 ${activeSegment === 'merchant' ? 'bg-white shadow-md text-black' : 'text-zinc-500 hover:text-zinc-900'}`}
              >
                For Business
              </button>
              <button 
                onClick={() => setActiveSegment('bank')}
                className={`px-6 py-2 rounded-full text-sm font-bold transition-all duration-300 ${activeSegment === 'bank' ? 'bg-indigo-500 shadow-md text-white' : 'text-zinc-500 hover:text-zinc-900'}`}
              >
                For Financial Institutions
              </button>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className={`max-w-2xl ${activeSegment === 'bank' ? 'text-white' : 'text-zinc-900'}`}>
              <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight leading-[1.1] mb-6">
                {activeSegment === 'merchant' ? (
                  <>
                    Commerce <br/>
                    <span className="text-zinc-400">Reinvented.</span>
                  </>
                ) : (
                  <>
                    Orchestrate <br/>
                    <span className="text-indigo-400">Digital Banking.</span>
                  </>
                )}
              </h1>
              <p className={`text-xl md:text-2xl mb-8 leading-relaxed ${activeSegment === 'bank' ? 'text-slate-300' : 'text-zinc-500'}`}>
                {activeSegment === 'merchant' 
                  ? "Everything you need to sell, run, and grow your business. One platform, infinite possibilities."
                  : "The Engagement Banking Platform that modernizes legacy systems and unifies the customer journey."}
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <button className={`px-8 py-4 rounded-full text-lg font-bold transition-transform hover:-translate-y-1 ${activeSegment === 'merchant' ? 'bg-black text-white shadow-lg shadow-zinc-500/20' : 'bg-indigo-500 text-white shadow-lg shadow-indigo-500/30'}`}>
                  {activeSegment === 'merchant' ? 'Start Selling' : 'Request Demo'}
                </button>
                <button className={`px-8 py-4 rounded-full text-lg font-bold border flex items-center justify-center gap-2 hover:bg-white/5 transition-colors ${activeSegment === 'bank' ? 'border-white/20 text-white' : 'border-zinc-300 text-zinc-900'}`}>
                  View Documentation <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Abstract Visuals */}
            <div className="relative h-[500px] w-full hidden lg:flex items-center justify-center perspective-1000">
              {activeSegment === 'merchant' ? (
                // Square-style Hardware/UI visual
                <div className="relative w-80 h-[480px] bg-white rounded-[2.5rem] shadow-2xl border-8 border-zinc-900 transform rotate-y-12 transition-all duration-700 hover:rotate-y-0">
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/3 h-6 bg-zinc-900 rounded-b-xl"></div>
                  <div className="p-6 pt-12 flex flex-col h-full">
                    <div className="flex justify-between items-center mb-8">
                      <div className="w-8 h-8 bg-zinc-100 rounded-full flex items-center justify-center"><Menu className="w-4 h-4" /></div>
                      <div className="text-lg font-bold">$240.50</div>
                    </div>
                    <div className="grid grid-cols-2 gap-4 mb-auto">
                      {[1,2,3,4].map(i => (
                        <div key={i} className="aspect-square bg-zinc-50 rounded-2xl flex items-center justify-center hover:bg-zinc-100 transition-colors cursor-pointer">
                          <div className={`w-12 h-12 rounded-full ${['bg-orange-100', 'bg-blue-100', 'bg-purple-100', 'bg-green-100'][i-1]} flex items-center justify-center`}>
                            {[<PieChart className="w-6 h-6 text-orange-500"/>, <CreditCard className="w-6 h-6 text-blue-500"/>, <Users className="w-6 h-6 text-purple-500"/>, <BarChart3 className="w-6 h-6 text-green-500"/>][i-1]}
                          </div>
                        </div>
                      ))}
                    </div>
                    <button className="w-full py-4 bg-zinc-900 text-white rounded-xl font-bold mt-4">Charge</button>
                  </div>
                  {/* Floating Elements */}
                  <div className="absolute -right-24 top-20 bg-white p-4 rounded-xl shadow-xl animate-bounce duration-[3000ms]">
                    <div className="flex gap-3 items-center">
                      <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center text-green-600"><ShieldCheck /></div>
                      <div>
                        <div className="text-xs text-zinc-500">Payment Verified</div>
                        <div className="font-bold text-sm">$42.00</div>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                // Backbase-style Platform Architecture visual
                <div className="relative w-full h-full flex items-center justify-center">
                   <div className="absolute inset-0 bg-indigo-500/10 blur-3xl rounded-full animate-pulse"></div>
                   
                   {/* Layer 3: Apps */}
                   <div className="absolute top-10 w-64 p-4 bg-slate-800/90 backdrop-blur border border-slate-700 rounded-xl text-center transform -translate-y-4 shadow-2xl z-30 animate-[bounce_4s_infinite]">
                      <div className="text-xs text-indigo-400 font-mono mb-2">OMNI-CHANNEL APPS</div>
                      <div className="flex justify-center gap-3">
                        <div className="w-8 h-8 bg-slate-700 rounded flex items-center justify-center hover:bg-indigo-500 transition-colors"><Smartphone className="w-4 h-4 text-white"/></div>
                        <div className="w-8 h-8 bg-slate-700 rounded flex items-center justify-center hover:bg-indigo-500 transition-colors"><Globe className="w-4 h-4 text-white"/></div>
                      </div>
                   </div>

                   {/* Layer 2: Platform */}
                   <div className="absolute top-1/2 -translate-y-1/2 w-80 h-40 bg-gradient-to-r from-indigo-900 to-blue-900 rounded-xl border border-indigo-500/30 flex flex-col items-center justify-center shadow-[0_0_50px_rgba(99,102,241,0.3)] z-20">
                      <Layers className="w-10 h-10 text-white mb-2" />
                      <div className="font-bold text-white tracking-widest">ENGAGEMENT CORE</div>
                      <div className="text-xs text-indigo-200 mt-1">Orchestration Layer</div>
                   </div>

                   {/* Layer 1: Legacy */}
                   <div className="absolute bottom-10 w-96 p-6 bg-slate-900 border border-slate-800 rounded-xl flex justify-between items-center z-10 opacity-70">
                      <div className="text-xs text-slate-500 font-mono">LEGACY CORE</div>
                      <div className="flex gap-2">
                         {[1,2,3].map(i => <div key={i} className="h-2 w-8 bg-slate-700 rounded-full"></div>)}
                      </div>
                   </div>
                   
                   {/* Connectors */}
                   <div className="absolute h-full w-px bg-gradient-to-b from-transparent via-indigo-500 to-transparent left-1/2 -translate-x-1/2"></div>
                </div>
              )}
            </div>
          </div>
        </div>
      </header>

      {/* --- Feature Grid (Bento Style) --- */}
      <section className={`py-24 px-6 transition-colors duration-500 ${activeSegment === 'bank' ? 'bg-slate-950 text-white' : 'bg-zinc-50 text-zinc-900'}`}>
        <div className="max-w-7xl mx-auto">
          <div className="mb-16 md:text-center max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold mb-4 tracking-tight">
              {activeSegment === 'merchant' ? "Built for your business." : "Architected for scale."}
            </h2>
            <p className="text-lg opacity-70">
              {activeSegment === 'merchant' 
                ? "Powerful software that runs your entire operation. From the first sale to the final reconciliation." 
                : "Decouple your customer experience from legacy constraints with a composable architecture."}
            </p>
          </div>

          {activeSegment === 'merchant' ? (
            // MERCHANT GRID
            <div className="grid md:grid-cols-3 md:grid-rows-3 gap-6 h-auto">
              
              {/* 1. SALES (Large) */}
              <div className="md:col-span-2 rounded-3xl p-8 bg-white border border-zinc-200 relative overflow-hidden group">
                <div className="relative z-10 flex flex-col h-full justify-between">
                  <div>
                    <div className="w-12 h-12 rounded-xl bg-zinc-100 flex items-center justify-center mb-6">
                      <ShoppingBag className="w-6 h-6 text-black" />
                    </div>
                    <h3 className="text-2xl font-bold mb-2">Omnichannel Sales</h3>
                    <p className="opacity-70 max-w-sm">Sell in-store, online, and on the go. Inventory syncs automatically across every channel.</p>
                  </div>
                  <div className="mt-8 flex gap-4">
                     <div className="bg-zinc-50 border border-zinc-100 rounded-lg p-4 flex-1 shadow-sm">
                        <div className="text-xs text-zinc-400 mb-1">Online</div>
                        <div className="font-bold text-lg">$14,203</div>
                        <div className="w-full h-1 bg-zinc-200 rounded-full mt-2"><div className="w-3/4 h-full bg-black rounded-full"></div></div>
                     </div>
                     <div className="bg-zinc-50 border border-zinc-100 rounded-lg p-4 flex-1 shadow-sm">
                        <div className="text-xs text-zinc-400 mb-1">In-Store</div>
                        <div className="font-bold text-lg">$8,450</div>
                        <div className="w-full h-1 bg-zinc-200 rounded-full mt-2"><div className="w-1/2 h-full bg-black rounded-full"></div></div>
                     </div>
                  </div>
                </div>
              </div>

              {/* 2. BANKING */}
              <div className="md:row-span-2 rounded-3xl p-8 bg-black text-white relative overflow-hidden flex flex-col">
                <div className="mb-6">
                  <div className="w-12 h-12 rounded-xl bg-zinc-800 flex items-center justify-center mb-6">
                    <Landmark className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-2">Banking & Reconciliation</h3>
                  <p className="opacity-70 text-sm">Payments land in your account instantly. Books balance themselves.</p>
                </div>
                <div className="flex-1 bg-zinc-900 rounded-xl p-4 border border-zinc-800 space-y-3 overflow-hidden relative">
                   {[
                     { name: "Coffee Beans Inc", amt: "-$450.00", status: "Auto-Matched" },
                     { name: "Daily Sales Payout", amt: "+$2,100.50", status: "Reconciled" },
                     { name: "Utility Bill", amt: "-$120.00", status: "Auto-Matched" },
                     { name: "Catering Deposit", amt: "+$500.00", status: "Reconciled" }
                   ].map((tx, i) => (
                     <div key={i} className="flex justify-between items-center text-xs">
                        <div>
                           <div className="font-bold">{tx.name}</div>
                           <div className="text-green-400 text-[10px]">{tx.status}</div>
                        </div>
                        <div className={tx.amt.startsWith('+') ? 'text-white' : 'text-zinc-500'}>{tx.amt}</div>
                     </div>
                   ))}
                   <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-zinc-900 to-transparent"></div>
                </div>
              </div>

              {/* 3. SPEND */}
              <div className="rounded-3xl p-8 bg-white border border-zinc-200 relative overflow-hidden group">
                 <div className="relative z-10">
                    <div className="w-10 h-10 rounded-lg bg-zinc-100 flex items-center justify-center mb-4">
                      <Receipt className="w-5 h-5 text-black" />
                    </div>
                    <h3 className="text-xl font-bold mb-2">Spend Management</h3>
                    <p className="text-sm opacity-70 mb-4">Issue corporate cards with custom limits for every employee.</p>
                    <div className="h-16 bg-zinc-900 rounded-xl w-3/4 shadow-lg relative p-3 flex flex-col justify-between group-hover:scale-105 transition-transform origin-left">
                       <div className="w-6 h-4 bg-zinc-700 rounded-sm"></div>
                       <div className="flex justify-between items-end">
                          <div className="text-[8px] text-zinc-400">**** 4242</div>
                          <div className="w-4 h-4 rounded-full bg-white/20"></div>
                       </div>
                    </div>
                 </div>
              </div>

              {/* 4. PURCHASES */}
              <div className="rounded-3xl p-8 bg-white border border-zinc-200 relative overflow-hidden">
                 <div className="relative z-10">
                    <div className="w-10 h-10 rounded-lg bg-zinc-100 flex items-center justify-center mb-4">
                      <Truck className="w-5 h-5 text-black" />
                    </div>
                    <h3 className="text-xl font-bold mb-2">Purchases</h3>
                    <p className="text-sm opacity-70 mb-4">Manage vendors, create purchase orders, and track deliveries.</p>
                    <div className="flex items-center gap-2 text-xs font-bold bg-zinc-50 p-2 rounded-lg border border-zinc-100">
                       <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                       PO #8832 • Approved
                    </div>
                 </div>
              </div>

              {/* 5. STAFF */}
              <div className="rounded-3xl p-8 bg-white border border-zinc-200 relative overflow-hidden">
                 <div className="relative z-10">
                    <div className="w-10 h-10 rounded-lg bg-zinc-100 flex items-center justify-center mb-4">
                      <Briefcase className="w-5 h-5 text-black" />
                    </div>
                    <h3 className="text-xl font-bold mb-2">Staff Management</h3>
                    <p className="text-sm opacity-70">Payroll, scheduling, and permissions fully integrated.</p>
                    <div className="flex -space-x-2 mt-4">
                       {[1,2,3].map(i => <div key={i} className="w-8 h-8 rounded-full bg-zinc-200 border-2 border-white"></div>)}
                       <div className="w-8 h-8 rounded-full bg-black text-white flex items-center justify-center text-xs border-2 border-white">+4</div>
                    </div>
                 </div>
              </div>

              {/* 6. CREDIT */}
              <div className="md:col-span-2 rounded-3xl p-8 bg-gradient-to-r from-zinc-100 to-white border border-zinc-200 relative overflow-hidden flex flex-col md:flex-row items-center gap-8 group">
                 <div className="flex-1">
                    <div className="w-10 h-10 rounded-lg bg-white shadow-sm flex items-center justify-center mb-4">
                      <Coins className="w-5 h-5 text-black" />
                    </div>
                    <h3 className="text-2xl font-bold mb-2">Credit & Lending</h3>
                    <p className="opacity-70 mb-6">Access capital based on your real-time sales data. No paperwork, just growth.</p>
                    <button 
                        onClick={() => navigateTo('credit', 'merchant')}
                        className="text-sm font-bold border-b border-black pb-0.5 hover:opacity-70 transition-opacity"
                    >
                        View Loan Offers
                    </button>
                 </div>
                 <div className="flex-1 w-full">
                    <div className="bg-white p-4 rounded-xl shadow-lg border border-zinc-100 group-hover:-translate-y-1 transition-transform">
                       <div className="flex justify-between items-center mb-2">
                          <div className="text-xs font-bold text-zinc-500">Available Credit</div>
                          <div className="text-xs text-green-600 font-bold">Ready now</div>
                       </div>
                       <div className="text-3xl font-bold mb-2">$50,000</div>
                       <div className="w-full bg-zinc-100 h-2 rounded-full overflow-hidden">
                          <div className="bg-black w-2/3 h-full rounded-full"></div>
                       </div>
                    </div>
                 </div>
              </div>
            </div>
          ) : (
            // BANK GRID
            <div className="grid md:grid-cols-3 md:grid-rows-3 gap-6 h-auto">
              {/* ... existing Bank grid ... */}
              <div className="md:col-span-2 md:row-span-1 rounded-3xl p-10 relative overflow-hidden group bg-gradient-to-br from-indigo-900 via-blue-900 to-slate-900 border border-indigo-500/30">
                <div className="relative z-10">
                  <div className="w-12 h-12 rounded-xl bg-indigo-600 text-white flex items-center justify-center mb-6">
                    <Layers className="w-6 h-6" />
                  </div>
                  <h3 className="text-3xl font-bold mb-3">Engagement Banking Platform</h3>
                  <p className="opacity-80 mb-6 max-w-lg text-lg">
                    Unify data, business logic, and customer journeys on a single orchestration layer. Replace disconnected silos with a seamless fabric.
                  </p>
                  <div className="flex gap-2">
                     <span className="text-xs font-bold bg-white/10 px-3 py-1 rounded-full border border-white/10">Digital Fabric</span>
                     <span className="text-xs font-bold bg-white/10 px-3 py-1 rounded-full border border-white/10">Data + AI</span>
                     <span className="text-xs font-bold bg-white/10 px-3 py-1 rounded-full border border-white/10">Integration</span>
                  </div>
                </div>
                <div className="absolute right-0 bottom-0 w-1/2 h-full opacity-20 group-hover:opacity-30 transition-opacity">
                   <div className="w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
                </div>
              </div>

              {/* 2. TAILORED SEGMENTS */}
              <div className="md:row-span-2 rounded-3xl p-8 bg-slate-900 border border-slate-800 relative overflow-hidden flex flex-col">
                <div className="mb-6">
                  <div className="w-12 h-12 rounded-xl bg-slate-800 flex items-center justify-center mb-6 text-indigo-400">
                    <Users className="w-6 h-6" />
                  </div>
                  <h3 className="text-2xl font-bold mb-2">Tailored Segments</h3>
                  <p className="opacity-60 text-sm">Pre-built journeys for every line of business.</p>
                </div>
                <div className="flex-1 space-y-3">
                   {[
                     { title: "Retail Banking", desc: "Daily banking & loyalty" },
                     { title: "Business Banking", desc: "SME onboarding & entitlements" },
                     { title: "Corporate", desc: "Treasury & trade finance" },
                     { title: "Wealth", desc: "Advisory & portfolio view" },
                   ].map((seg, i) => (
                     <div key={i} className="p-4 rounded-xl bg-slate-800/50 border border-slate-700/50 hover:bg-slate-800 transition-colors cursor-pointer group">
                        <div className="flex justify-between items-center mb-1">
                           <span className="font-bold text-slate-200">{seg.title}</span>
                           <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity text-indigo-400"/>
                        </div>
                        <div className="text-xs text-slate-500">{seg.desc}</div>
                     </div>
                   ))}
                </div>
              </div>

              {/* 3. SALES SUITE */}
              <div className="rounded-3xl p-8 bg-slate-900 border border-slate-800 relative overflow-hidden group">
                 <div className="relative z-10">
                    <div className="w-10 h-10 rounded-lg bg-slate-800 flex items-center justify-center mb-4 text-green-400">
                      <UserCheck className="w-5 h-5" />
                    </div>
                    <h3 className="text-xl font-bold mb-2">Onboarding & Origination</h3>
                    <p className="text-sm opacity-60 mb-4">Digitize the entire lifecycle. From ID verification to product funding in minutes.</p>
                    <div className="w-full bg-slate-800 h-1.5 rounded-full overflow-hidden">
                       <div className="bg-green-500 w-3/4 h-full rounded-full"></div>
                    </div>
                    <div className="text-[10px] text-green-400 mt-2 font-mono">KYC COMPLETE • ACCOUNT FUNDED</div>
                 </div>
              </div>

              {/* 4. SERVICING SUITE */}
              <div className="rounded-3xl p-8 bg-slate-900 border border-slate-800 relative overflow-hidden group">
                 <div className="relative z-10">
                    <div className="w-10 h-10 rounded-lg bg-slate-800 flex items-center justify-center mb-4 text-indigo-400">
                      <MessageSquare className="w-5 h-5" />
                    </div>
                    <h3 className="text-xl font-bold mb-2">Human Assist</h3>
                    <p className="text-sm opacity-60 mb-4">Empower employees with a unified dashboard. See exactly what your customer sees.</p>
                    <div className="flex -space-x-2 opacity-50">
                        <div className="w-6 h-6 rounded-full bg-indigo-500"></div>
                        <div className="w-6 h-6 rounded-full bg-slate-500"></div>
                    </div>
                 </div>
              </div>

              {/* 5. INTELLIGENCE */}
              <div className="md:col-span-3 rounded-3xl p-8 bg-slate-950 border border-slate-900 relative overflow-hidden flex flex-col md:flex-row items-center gap-8 group">
                 <div className="flex-1 relative z-10">
                    <div className="flex items-center gap-3 mb-4">
                       <div className="w-10 h-10 rounded-lg bg-slate-800 flex items-center justify-center text-purple-400">
                         <Cpu className="w-5 h-5" />
                       </div>
                       <span className="text-xs font-bold tracking-widest text-purple-400 uppercase">Grand Central</span>
                    </div>
                    <h3 className="text-2xl font-bold mb-2">Data & AI Fabric</h3>
                    <p className="opacity-60 mb-6 max-w-xl">
                       Drive real-time personalization. Cleanse, aggregate, and enrich legacy data to power agentic AI and predictive insights.
                    </p>
                    <button className="text-sm font-bold border-b border-white/20 pb-0.5 hover:text-purple-400 hover:border-purple-400 transition-colors">Explore Intelligence</button>
                 </div>
                 <div className="flex-1 w-full relative">
                    <div className="absolute inset-0 bg-purple-500/10 blur-3xl rounded-full"></div>
                    <div className="grid grid-cols-2 gap-3 relative z-10 opacity-70 text-xs font-mono">
                       <div className="p-3 border border-purple-500/30 rounded bg-purple-500/5">NEXT_BEST_ACTION</div>
                       <div className="p-3 border border-purple-500/30 rounded bg-purple-500/5">CHURN_RISK: LOW</div>
                       <div className="p-3 border border-purple-500/30 rounded bg-purple-500/5">SPEND_ANALYSIS</div>
                       <div className="p-3 border border-purple-500/30 rounded bg-purple-500/5">LOAN_ELIGIBILITY</div>
                    </div>
                 </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* --- KYC / AML Section (Bank Only) --- */}
      {activeSegment === 'bank' && (
        <section className="py-24 bg-slate-950 border-t border-slate-900 relative overflow-hidden">
           <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"></div>
           
           <div className="max-w-7xl mx-auto px-6 relative z-10">
              <div className="mb-16 md:text-center max-w-3xl mx-auto">
                 <div className="inline-block px-3 py-1 bg-red-900/30 text-red-400 border border-red-500/30 rounded-full text-xs font-bold mb-6 tracking-wide">RISK & COMPLIANCE</div>
                 <h2 className="text-4xl font-bold mb-4 text-white">See risk before it strikes.</h2>
                 <p className="text-lg text-slate-400">
                    Replace manual checks with automated, real-time intelligence. Screen against global watchlists, monitor transactions, and onboard customers faster.
                 </p>
              </div>

              <div className="grid lg:grid-cols-2 gap-12 items-center">
                 <div className="bg-slate-900 rounded-2xl border border-slate-800 p-6 shadow-2xl relative">
                    <div className="flex justify-between items-center mb-6 border-b border-slate-800 pb-4">
                       <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-slate-300 font-bold">JD</div>
                          <div>
                             <div className="text-white font-bold">John Doe</div>
                             <div className="text-xs text-slate-500">ID: 9928381</div>
                          </div>
                       </div>
                       <div className="px-3 py-1 bg-red-500/20 text-red-400 border border-red-500/50 rounded text-xs font-bold flex items-center gap-2">
                          <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
                          HIGH RISK
                       </div>
                    </div>
                    
                    <div className="space-y-4">
                       <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 flex justify-between items-center">
                          <div className="flex items-center gap-3">
                             <Globe className="w-5 h-5 text-indigo-400" />
                             <span className="text-sm text-slate-300">PEP Screening</span>
                          </div>
                          <span className="text-xs font-mono text-green-400">CLEAR</span>
                       </div>
                       <div className="p-4 bg-slate-950 rounded-xl border border-red-900/30 flex justify-between items-center">
                          <div className="flex items-center gap-3">
                             <ShieldCheck className="w-5 h-5 text-red-400" />
                             <span className="text-sm text-slate-300">Sanctions List</span>
                          </div>
                          <span className="text-xs font-mono text-red-400">MATCH FOUND</span>
                       </div>
                       <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 flex justify-between items-center">
                          <div className="flex items-center gap-3">
                             <RefreshCw className="w-5 h-5 text-indigo-400" />
                             <span className="text-sm text-slate-300">Adverse Media</span>
                          </div>
                          <span className="text-xs font-mono text-green-400">CLEAR</span>
                       </div>
                    </div>

                    <div className="mt-6 pt-6 border-t border-slate-800">
                       <div className="text-xs text-slate-500 mb-3 font-bold uppercase tracking-wider">Transaction Link Analysis</div>
                       <div className="flex justify-center gap-8 relative h-24 items-center">
                          <div className="w-8 h-8 bg-slate-700 rounded-full z-10 border-2 border-slate-500"></div>
                          <div className="absolute h-0.5 bg-slate-700 w-32 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></div>
                          <div className="w-12 h-12 bg-red-900/50 rounded-full z-10 border-2 border-red-500 flex items-center justify-center text-red-500 font-bold text-xs">!</div>
                          <div className="w-8 h-8 bg-slate-700 rounded-full z-10 border-2 border-slate-500"></div>
                       </div>
                    </div>
                 </div>

                 <div className="space-y-8">
                    {[
                       { title: "Global Sanctions & Watchlists", desc: "Live API connections to OFAC, UN, HMT, and 1000+ global enforcement lists. Updates in seconds, not days." },
                       { title: "AI Transaction Monitoring", desc: "Reduce false positives by 70%. Our behavioral models adapt to new fraud typologies automatically." },
                       { title: "Automated KYB", desc: "Unwrap corporate structures instantly. Visualize UBOs (Ultimate Beneficial Owners) with interactive graph networks." }
                    ].map((item, i) => (
                       <div key={i} className="flex gap-4">
                          <div className="w-10 h-10 rounded-lg bg-slate-900 border border-slate-800 flex flex-shrink-0 items-center justify-center text-red-400 font-bold">
                             {i+1}
                          </div>
                          <div>
                             <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                             <p className="text-slate-400 leading-relaxed">{item.desc}</p>
                          </div>
                       </div>
                    ))}
                    <button className="mt-4 px-8 py-3 bg-red-600 hover:bg-red-500 text-white rounded-full font-bold transition-colors shadow-lg shadow-red-900/20">
                       View Compliance API
                    </button>
                 </div>
              </div>
           </div>
        </section>
      )}

      {/* --- Success Stories --- */}
      <section className={`py-20 border-t ${activeSegment === 'bank' ? 'bg-slate-950 border-slate-900' : 'bg-white border-zinc-100'}`}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
             <div>
                <h3 className={`text-sm font-bold tracking-widest uppercase mb-4 ${activeSegment === 'bank' ? 'text-indigo-400' : 'text-zinc-500'}`}>Success Stories</h3>
                <h2 className={`text-3xl md:text-4xl font-bold mb-6 ${activeSegment === 'bank' ? 'text-white' : 'text-zinc-900'}`}>
                  {activeSegment === 'merchant' ? "Trusted by Main Street." : "Empowering Wall Street."}
                </h2>
                <div className="flex gap-1 mb-6">
                  {[1,2,3,4,5].map(i => <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />)}
                </div>
                <blockquote className={`text-xl font-medium leading-relaxed mb-6 ${activeSegment === 'bank' ? 'text-slate-300' : 'text-zinc-700'}`}>
                  "{activeSegment === 'merchant' 
                    ? "Since switching to Foundry, our cafe's checkout speed increased by 40%, and the inventory sync saves us hours every week. It just works."
                    : "Foundry's orchestration layer allowed us to modernize our legacy core without downtime. We launched our new mobile banking app in weeks, not months."}"
                </blockquote>
                <div>
                  <div className={`font-bold ${activeSegment === 'bank' ? 'text-white' : 'text-zinc-900'}`}>
                    {activeSegment === 'merchant' ? "Sarah Jenkins" : "Michael Chen"}
                  </div>
                  <div className={`text-sm ${activeSegment === 'bank' ? 'text-slate-500' : 'text-zinc-500'}`}>
                    {activeSegment === 'merchant' ? "Owner, Bean & Brew" : "CTO, Horizon Bank"}
                  </div>
                </div>
             </div>
             <div className="relative h-80 rounded-2xl overflow-hidden bg-zinc-100">
                <div className={`absolute inset-0 flex items-center justify-center ${activeSegment === 'bank' ? 'bg-slate-800' : 'bg-zinc-200'}`}>
                   {activeSegment === 'merchant' ? (
                     <div className="text-center opacity-30">
                        <Users className="w-20 h-20 mx-auto mb-2 text-zinc-500"/>
                        <div className="font-bold text-2xl text-zinc-900">Cafe Owner</div>
                     </div>
                   ) : (
                     <div className="text-center opacity-30">
                        <ShieldCheck className="w-20 h-20 mx-auto mb-2 text-indigo-400"/>
                        <div className="font-bold text-2xl text-white">Bank Executive</div>
                     </div>
                   )}
                </div>
             </div>
          </div>
        </div>
      </section>
    </div>
  );

  const RetailView = () => (
    <div className="pt-24 min-h-screen bg-white text-zinc-900 animate-in fade-in slide-in-from-bottom-5 duration-500">
      <div className="max-w-7xl mx-auto px-6">
         {/* Breadcrumb / Back */}
         <button onClick={() => navigateTo('home', 'merchant')} className="flex items-center gap-2 text-zinc-500 hover:text-black font-bold mb-8">
            <ArrowLeft className="w-4 h-4" /> Back to Home
         </button>

         <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
            <div>
               <div className="inline-block px-3 py-1 bg-zinc-100 rounded-full text-xs font-bold mb-6">RETAIL SOLUTIONS</div>
               <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-6">Sell anywhere.<br/>Manage everywhere.</h1>
               <p className="text-xl text-zinc-500 mb-8 leading-relaxed">
                  A complete point-of-sale system that works as hard as you do. Sync your online and offline sales in real-time.
               </p>
               <button className="px-8 py-4 bg-black text-white rounded-full font-bold text-lg hover:scale-105 transition-transform">Get Started Free</button>
            </div>
            <div className="relative h-[500px] bg-zinc-50 rounded-3xl border border-zinc-200 shadow-xl overflow-hidden flex items-center justify-center">
               <div className="w-64 h-[400px] bg-white border-8 border-zinc-900 rounded-[2rem] shadow-2xl flex flex-col">
                  <div className="h-8 bg-zinc-100 border-b border-zinc-100 flex items-center justify-center text-[10px] font-bold text-zinc-400">Foundry POS</div>
                  <div className="flex-1 p-4 grid grid-cols-2 gap-2">
                     {[1,2,3,4,5,6].map(i => <div key={i} className="bg-zinc-100 rounded-lg"></div>)}
                  </div>
                  <div className="p-4 border-t border-zinc-100">
                     <div className="flex justify-between font-bold mb-2"><span>Total</span><span>$142.50</span></div>
                     <div className="w-full h-10 bg-black text-white rounded-lg flex items-center justify-center text-sm font-bold">Charge</div>
                  </div>
               </div>
            </div>
         </div>

         <div className="grid md:grid-cols-3 gap-8 mb-20">
            {[
               { title: "Inventory Sync", desc: "Never oversell. Syncs across store and web automatically.", icon: <Layers className="w-6 h-6"/> },
               { title: "Staff Management", desc: "Track hours, performance, and permissions per employee.", icon: <Users className="w-6 h-6"/> },
               { title: "Loyalty Built-in", desc: "Turn walk-ins into regulars with automated rewards.", icon: <Star className="w-6 h-6"/> }
            ].map((feature, i) => (
               <div key={i} className="p-8 bg-zinc-50 rounded-2xl border border-zinc-100 hover:border-zinc-300 transition-colors">
                  <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center mb-6">{feature.icon}</div>
                  <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                  <p className="text-zinc-500">{feature.desc}</p>
               </div>
            ))}
         </div>

         {/* Wholesale Feature */}
         <div className="bg-zinc-50 rounded-3xl p-8 border border-zinc-100 flex flex-col md:flex-row items-center gap-12 mb-20">
            <div className="flex-1">
                <div className="inline-block px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-bold mb-4">NEW</div>
                <h2 className="text-3xl font-bold mb-4">Unified Wholesale</h2>
                <p className="text-zinc-500 mb-6 text-lg">
                    Manage B2B and B2C inventory in one place. Set custom price lists for wholesale clients, offer Net 30 terms, and send digital invoices instantly.
                </p>
                <ul className="space-y-3">
                    <li className="flex items-center gap-3 font-medium text-zinc-700">
                        <CheckCircle2 className="w-5 h-5 text-blue-600" /> Custom Catalog Pricing
                    </li>
                    <li className="flex items-center gap-3 font-medium text-zinc-700">
                        <CheckCircle2 className="w-5 h-5 text-blue-600" /> Bulk Order Portal
                    </li>
                    <li className="flex items-center gap-3 font-medium text-zinc-700">
                        <CheckCircle2 className="w-5 h-5 text-blue-600" /> Automated Invoicing
                    </li>
                </ul>
            </div>
            <div className="flex-1 bg-white p-6 rounded-2xl shadow-lg border border-zinc-100 w-full max-w-md">
                <div className="flex justify-between items-center mb-6 border-b border-zinc-100 pb-4">
                    <div className="font-bold">Wholesale Invoice #4492</div>
                    <div className="text-xs bg-orange-100 text-orange-700 px-2 py-1 rounded font-bold">Net 30</div>
                </div>
                <div className="space-y-4 mb-6">
                    <div className="flex justify-between text-sm">
                        <span className="text-zinc-500">20x Espresso Blend (5lb)</span>
                        <span className="font-bold">$900.00</span>
                    </div>
                    <div className="flex justify-between text-sm">
                        <span className="text-zinc-500">50x Ceramic Mugs</span>
                        <span className="font-bold">$250.00</span>
                    </div>
                    <div className="flex justify-between text-sm pt-2 border-t border-zinc-100">
                        <span className="font-bold">Total Due</span>
                        <span className="font-bold text-lg">$1,150.00</span>
                    </div>
                </div>
                <button className="w-full py-3 bg-black text-white rounded-lg font-bold text-sm">Send Invoice</button>
            </div>
         </div>
      </div>
    </div>
  );

  const FnBView = () => (
    <div className="pt-24 min-h-screen bg-white text-zinc-900 animate-in fade-in slide-in-from-bottom-5 duration-500">
      <div className="max-w-7xl mx-auto px-6">
         <button onClick={() => navigateTo('home', 'merchant')} className="flex items-center gap-2 text-zinc-500 hover:text-black font-bold mb-8">
            <ArrowLeft className="w-4 h-4" /> Back to Home
         </button>

         <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-block px-3 py-1 bg-orange-100 text-orange-700 rounded-full text-xs font-bold mb-6">FOOD & BEVERAGE</div>
            <h1 className="text-5xl md:text-6xl font-bold tracking-tighter mb-6">Serve faster. Turnover more.</h1>
            <p className="text-xl text-zinc-500 mb-8">
               From quick-service cafes to full-service fine dining, keep your front and back of house in perfect sync.
            </p>
         </div>

         <div className="grid md:grid-cols-2 gap-8 mb-20">
             <div className="bg-zinc-900 text-white p-10 rounded-3xl flex flex-col justify-between h-96 overflow-hidden relative">
                <div className="relative z-10">
                   <h3 className="text-3xl font-bold mb-2">Kitchen Display System</h3>
                   <p className="opacity-70">Replace paper tickets with smart screens.</p>
                </div>
                <div className="flex gap-4 mt-8">
                   <div className="flex-1 bg-zinc-800 p-4 rounded-xl border-l-4 border-green-500">
                      <div className="text-xs opacity-50 mb-1">Table 4 • 2m ago</div>
                      <div className="font-bold">2x Burger</div>
                      <div className="font-bold">1x Fries</div>
                   </div>
                   <div className="flex-1 bg-zinc-800 p-4 rounded-xl border-l-4 border-yellow-500">
                      <div className="text-xs opacity-50 mb-1">Table 2 • 5m ago</div>
                      <div className="font-bold">1x Salad</div>
                   </div>
                </div>
             </div>

             <div className="bg-orange-50 p-10 rounded-3xl border border-orange-100 flex flex-col justify-between h-96 relative overflow-hidden">
                 <div className="relative z-10">
                   <h3 className="text-3xl font-bold mb-2 text-orange-900">QR Ordering</h3>
                   <p className="text-orange-800/70">Let guests order and pay from their phone.</p>
                </div>
                <div className="absolute right-0 bottom-0 w-64 h-64 bg-white rounded-tl-[3rem] shadow-xl p-6 flex flex-col items-center justify-center">
                   <div className="w-32 h-32 bg-zinc-900 rounded-xl mb-4 flex items-center justify-center text-white font-mono text-xs">QR CODE</div>
                   <div className="font-bold text-sm">Scan to Order</div>
                </div>
             </div>
         </div>
      </div>
    </div>
  );

  const EnterpriseView = () => (
    <div className="pt-24 min-h-screen bg-slate-900 text-white animate-in fade-in slide-in-from-bottom-5 duration-500">
       <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-indigo-600/20 blur-[100px] rounded-full"></div>
       </div>
       
       <div className="max-w-7xl mx-auto px-6 relative z-10">
         <button onClick={() => navigateTo('home', 'bank')} className="flex items-center gap-2 text-slate-400 hover:text-white font-bold mb-8">
            <ArrowLeft className="w-4 h-4" /> Back to Home
         </button>

         <div className="flex flex-col lg:flex-row gap-16 items-center mb-20">
            <div className="flex-1">
               <div className="inline-block px-3 py-1 bg-indigo-900/50 border border-indigo-500/30 text-indigo-300 rounded-full text-xs font-bold mb-6">ENTERPRISE PLATFORM</div>
               <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-6">Global payments.<br/>Without the friction.</h1>
               <p className="text-xl text-slate-300 mb-8 leading-relaxed">
                  Consolidate your payment stack. One API for all your brands, regions, and channels.
               </p>
               <div className="flex gap-4">
                  <button className="px-8 py-4 bg-indigo-600 text-white rounded-full font-bold text-lg hover:bg-indigo-500 transition-colors">Contact Sales</button>
                  <button className="px-8 py-4 border border-slate-600 text-white rounded-full font-bold text-lg hover:bg-white/5 transition-colors">View API Docs</button>
               </div>
            </div>
            <div className="flex-1 bg-slate-950 p-6 rounded-2xl border border-slate-800 font-mono text-sm shadow-2xl">
               <div className="flex gap-2 mb-4 text-slate-500">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
               </div>
               <div className="space-y-2">
                  <div className="text-purple-400">const <span className="text-white">payment</span> = await foundry.charges.create({`{`}</div>
                  <div className="pl-4 text-blue-300">amount: <span className="text-green-400">2500000</span>,</div>
                  <div className="pl-4 text-blue-300">currency: <span className="text-green-400">'usd'</span>,</div>
                  <div className="pl-4 text-blue-300">source: <span className="text-green-400">'tok_mastercard_corporate'</span>,</div>
                  <div className="pl-4 text-blue-300">metadata: {'{'} <span className="text-green-400">order_id: '6735'</span> {'}'}</div>
                  <div className="text-purple-400">{`}`});</div>
                  <div className="text-slate-500 mt-4">// Response 200 OK</div>
                  <div className="text-green-400">"status": "succeeded"</div>
               </div>
            </div>
         </div>
      </div>
    </div>
  );

  const BanksView = () => (
    <div className="pt-24 min-h-screen bg-slate-950 text-white animate-in fade-in slide-in-from-bottom-5 duration-500">
       <div className="max-w-7xl mx-auto px-6">
         <button onClick={() => navigateTo('home', 'bank')} className="flex items-center gap-2 text-slate-400 hover:text-white font-bold mb-8">
            <ArrowLeft className="w-4 h-4" /> Back to Home
         </button>

         <div className="text-center max-w-4xl mx-auto mb-20">
            <div className="inline-block px-3 py-1 bg-blue-900/30 text-blue-300 border border-blue-500/30 rounded-full text-xs font-bold mb-6">BANKING AS A SERVICE</div>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-6">Digital transformation,<br/>delivered.</h1>
            <p className="text-xl text-slate-400 mb-8">
               Modernize your legacy core without the risky "rip and replace". Our orchestration layer sits on top of your mainframe to power modern apps.
            </p>
         </div>

         <div className="grid md:grid-cols-3 gap-6 mb-20">
             <div className="p-8 bg-slate-900 border border-slate-800 rounded-2xl">
                 <Smartphone className="w-10 h-10 text-indigo-400 mb-6" />
                 <h3 className="text-xl font-bold mb-3">White-label Apps</h3>
                 <p className="text-slate-400">Launch a 5-star mobile banking app in months, not years. Fully customizable UI.</p>
             </div>
             <div className="p-8 bg-slate-900 border border-slate-800 rounded-2xl">
                 <ShieldCheck className="w-10 h-10 text-indigo-400 mb-6" />
                 <h3 className="text-xl font-bold mb-3">Legacy Wrapper</h3>
                 <p className="text-slate-400">Securely expose your mainframe data via REST APIs. SOC2 compliant.</p>
             </div>
             <div className="p-8 bg-slate-900 border border-slate-800 rounded-2xl">
                 <PieChart className="w-10 h-10 text-indigo-400 mb-6" />
                 <h3 className="text-xl font-bold mb-3">Wealth Modules</h3>
                 <p className="text-slate-400">Plug-and-play investment and wealth management features for your retail customers.</p>
             </div>
         </div>
       </div>
    </div>
  );

  const BaaSView = () => {
    const [apiTab, setApiTab] = useState('cards');

    return (
      <div className="pt-24 min-h-screen bg-slate-950 text-white animate-in fade-in slide-in-from-bottom-5 duration-500">
        <div className="max-w-7xl mx-auto px-6">
          <button onClick={() => navigateTo('home', 'bank')} className="flex items-center gap-2 text-slate-400 hover:text-white font-bold mb-8">
            <ArrowLeft className="w-4 h-4" /> Back to Home
          </button>

          <div className="grid lg:grid-cols-2 gap-16 items-start mb-32">
            <div className="pt-8">
               <div className="inline-block px-3 py-1 bg-indigo-900/50 border border-indigo-500/30 text-indigo-300 rounded-full text-xs font-bold mb-6">BANKING INFRASTRUCTURE</div>
               <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-6 leading-[1.1]">
                 The <span className="text-indigo-400">operating system</span> for modern finance.
               </h1>
               <p className="text-xl text-slate-300 mb-10 leading-relaxed max-w-xl">
                 Embed banking, cards, and payments into your product in weeks, not years. 
                 Direct bank connections, automated compliance, and a ledger that never sleeps.
               </p>
               <div className="flex gap-4">
                  <button className="px-8 py-4 bg-indigo-600 text-white rounded-full font-bold text-lg hover:bg-indigo-500 transition-colors">Start Building</button>
                  <button className="px-8 py-4 bg-transparent border border-slate-600 text-white rounded-full font-bold text-lg hover:bg-white/5 transition-colors">Contact Sales</button>
               </div>
               <div className="mt-12 flex items-center gap-6 text-sm text-slate-500 font-medium">
                  <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-green-500"/> FDIC Insured eligible</div>
                  <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-green-500"/> 99.99% Uptime</div>
               </div>
            </div>

            <div className="bg-slate-900 rounded-xl border border-slate-800 shadow-2xl overflow-hidden mt-8 lg:mt-0">
               <div className="flex border-b border-slate-800 bg-slate-950">
                  {['cards', 'accounts', 'payments'].map((tab) => (
                    <button 
                      key={tab}
                      onClick={() => setApiTab(tab)}
                      className={`px-6 py-3 text-sm font-mono transition-colors ${apiTab === tab ? 'text-white border-b-2 border-indigo-500 bg-slate-900' : 'text-slate-500 hover:text-slate-300'}`}
                    >
                      /{tab}
                    </button>
                  ))}
               </div>
               <div className="p-6 font-mono text-sm h-[400px] overflow-auto">
                  {apiTab === 'cards' && (
                    <>
                      <div className="text-slate-500 mb-4"># Issue a virtual card</div>
                      <div className="text-purple-400">POST <span className="text-white">/v1/issuing/cards</span></div>
                      <div className="text-slate-300 mt-2">{`{`}</div>
                      <div className="pl-4 text-blue-300">cardholder: <span className="text-green-400">"ch_1Me9..."</span>,</div>
                      <div className="pl-4 text-blue-300">currency: <span className="text-green-400">"USD"</span>,</div>
                      <div className="pl-4 text-blue-300">type: <span className="text-green-400">"virtual"</span>,</div>
                      <div className="pl-4 text-blue-300">spending_controls: {'{'} <span className="text-green-400">monthly_limit: 5000</span> {'}'}</div>
                      <div className="text-slate-300">{`}`}</div>
                      <div className="mt-4 text-slate-500">// Response 201 Created</div>
                      <div className="text-slate-300">{`{`}</div>
                      <div className="pl-4 text-blue-300">id: <span className="text-green-400">"ic_19Xk..."</span>,</div>
                      <div className="pl-4 text-blue-300">brand: <span className="text-green-400">"Visa"</span>,</div>
                      <div className="pl-4 text-blue-300">last4: <span className="text-green-400">"4242"</span>,</div>
                      <div className="pl-4 text-blue-300">status: <span className="text-green-400">"active"</span></div>
                      <div className="text-slate-300">{`}`}</div>
                    </>
                  )}
                  {apiTab === 'accounts' && (
                    <>
                      <div className="text-slate-500 mb-4"># Create a checking account</div>
                      <div className="text-purple-400">POST <span className="text-white">/v1/treasury/financial_accounts</span></div>
                      <div className="text-slate-300 mt-2">{`{`}</div>
                      <div className="pl-4 text-blue-300">supported_currencies: [<span className="text-green-400">"usd"</span>],</div>
                      <div className="pl-4 text-blue-300">features: {'{'} <span className="text-green-400">intra_bank_transfers: true</span> {'}'}</div>
                      <div className="text-slate-300">{`}`}</div>
                      <div className="mt-4 text-slate-500">// Response 200 OK</div>
                      <div className="text-slate-300">{`{`}</div>
                      <div className="pl-4 text-blue-300">id: <span className="text-green-400">"fa_1Jk9..."</span>,</div>
                      <div className="pl-4 text-blue-300">balance: {'{'} <span className="text-green-400">cash: 0</span> {'}'},</div>
                      <div className="pl-4 text-blue-300">routing_number: <span className="text-green-400">"123456789"</span></div>
                      <div className="text-slate-300">{`}`}</div>
                    </>
                  )}
                  {apiTab === 'payments' && (
                    <>
                      <div className="text-slate-500 mb-4"># Send an ACH transfer</div>
                      <div className="text-purple-400">POST <span className="text-white">/v1/treasury/outbound_payments</span></div>
                      <div className="text-slate-300 mt-2">{`{`}</div>
                      <div className="pl-4 text-blue-300">amount: <span className="text-green-400">125000</span>,</div>
                      <div className="pl-4 text-blue-300">currency: <span className="text-green-400">"usd"</span>,</div>
                      <div className="pl-4 text-blue-300">destination_payment_method: <span className="text-green-400">"us_bank_account"</span></div>
                      <div className="text-slate-300">{`}`}</div>
                      <div className="mt-4 text-slate-500">// Response 200 OK</div>
                      <div className="text-slate-300">{`{`}</div>
                      <div className="pl-4 text-blue-300">id: <span className="text-green-400">"op_1Lk2..."</span>,</div>
                      <div className="pl-4 text-blue-300">status: <span className="text-green-400">"processing"</span>,</div>
                      <div className="pl-4 text-blue-300">expected_arrival_date: <span className="text-green-400">1698796800</span></div>
                      <div className="text-slate-300">{`}`}</div>
                    </>
                  )}
               </div>
            </div>
          </div>

          <div className="mb-32">
             <h2 className="text-3xl font-bold mb-12 text-center">Who builds on Foundry?</h2>
             <div className="grid md:grid-cols-3 gap-8">
                <div className="p-8 bg-slate-900 border border-slate-800 rounded-2xl hover:border-indigo-500/50 transition-colors group">
                   <div className="w-14 h-14 bg-indigo-900/30 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                      <Smartphone className="w-7 h-7 text-indigo-400" />
                   </div>
                   <h3 className="text-xl font-bold mb-3">Neobanks</h3>
                   <p className="text-slate-400 mb-6">Launch a full-stack bank in months. Debit cards, high-yield savings, and crypto rewards.</p>
                   <div className="flex gap-2 flex-wrap">
                      <span className="text-xs bg-slate-800 px-2 py-1 rounded border border-slate-700">Checking</span>
                      <span className="text-xs bg-slate-800 px-2 py-1 rounded border border-slate-700">Crypto</span>
                   </div>
                </div>
                <div className="p-8 bg-slate-900 border border-slate-800 rounded-2xl hover:border-indigo-500/50 transition-colors group">
                   <div className="w-14 h-14 bg-indigo-900/30 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                      <Building2 className="w-7 h-7 text-indigo-400" />
                   </div>
                   <h3 className="text-xl font-bold mb-3">Vertical SaaS</h3>
                   <p className="text-slate-400 mb-6">Add financial products to your platform. Offer loans to restaurants or expense cards to construction firms.</p>
                   <div className="flex gap-2 flex-wrap">
                      <span className="text-xs bg-slate-800 px-2 py-1 rounded border border-slate-700">Lending</span>
                      <span className="text-xs bg-slate-800 px-2 py-1 rounded border border-slate-700">Invoicing</span>
                   </div>
                </div>
                <div className="p-8 bg-slate-900 border border-slate-800 rounded-2xl hover:border-indigo-500/50 transition-colors group">
                   <div className="w-14 h-14 bg-indigo-900/30 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                      <ShoppingBag className="w-7 h-7 text-indigo-400" />
                   </div>
                   <h3 className="text-xl font-bold mb-3">Marketplaces</h3>
                   <p className="text-slate-400 mb-6">Streamline payouts to gig workers and sellers. Instant access to funds via virtual cards.</p>
                   <div className="flex gap-2 flex-wrap">
                      <span className="text-xs bg-slate-800 px-2 py-1 rounded border border-slate-700">Push-to-Card</span>
                      <span className="text-xs bg-slate-800 px-2 py-1 rounded border border-slate-700">Payouts</span>
                   </div>
                </div>
             </div>
          </div>

          <div className="mb-32">
             <div className="grid lg:grid-cols-2 gap-16 items-center">
                <div>
                   <div className="inline-block px-3 py-1 bg-green-900/30 text-green-400 border border-green-500/30 rounded-full text-xs font-bold mb-6 tracking-wide">CORE LEDGER</div>
                   <h2 className="text-4xl font-bold mb-6">The single source of truth.</h2>
                   <p className="text-xl text-slate-400 mb-8 leading-relaxed">
                      Gone are the days of batch processing and reconciliation nightmares. Foundry's real-time, double-entry ledger ensures that every cent is accounted for, instantly.
                   </p>
                   <ul className="space-y-4">
                      <li className="flex items-center gap-3 text-slate-300">
                         <div className="w-6 h-6 rounded-full bg-green-900/50 flex items-center justify-center text-green-400"><Database className="w-3 h-3"/></div>
                         Immutable transaction logs
                      </li>
                      <li className="flex items-center gap-3 text-slate-300">
                         <div className="w-6 h-6 rounded-full bg-green-900/50 flex items-center justify-center text-green-400"><RefreshCw className="w-3 h-3"/></div>
                         Sub-second settlement
                      </li>
                      <li className="flex items-center gap-3 text-slate-300">
                         <div className="w-6 h-6 rounded-full bg-green-900/50 flex items-center justify-center text-green-400"><Shuffle className="w-3 h-3"/></div>
                         Multi-currency support
                      </li>
                   </ul>
                </div>
                <div className="relative">
                   <div className="absolute -inset-4 bg-green-500/10 blur-xl rounded-full"></div>
                   <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 relative z-10 shadow-2xl">
                      <div className="flex justify-between items-center mb-6 text-sm text-slate-500 font-mono border-b border-slate-800 pb-2">
                         <span>TX_ID</span>
                         <span>DEBIT/CREDIT</span>
                         <span>BALANCE</span>
                      </div>
                      <div className="space-y-2 font-mono text-xs">
                         {[1,2,3,4,5].map((i) => (
                            <div key={i} className="flex justify-between items-center p-2 hover:bg-slate-800 rounded transition-colors cursor-default">
                               <span className="text-slate-400">txn_8923{i}8</span>
                               <span className={i % 2 === 0 ? "text-green-400" : "text-white"}>{i % 2 === 0 ? "+ $450.00" : "- $12.50"}</span>
                               <span className="text-slate-500">$12,4{i}0.00</span>
                            </div>
                         ))}
                         <div className="flex justify-between items-center p-2 bg-green-900/20 border border-green-900/50 rounded animate-pulse">
                               <span className="text-green-400">txn_pending...</span>
                               <span className="text-white">- $99.00</span>
                               <span className="text-slate-500">...</span>
                         </div>
                      </div>
                   </div>
                </div>
             </div>
          </div>

          <div className="bg-gradient-to-r from-indigo-900 to-blue-900 rounded-3xl p-12 relative overflow-hidden flex flex-col md:flex-row items-center gap-12 mb-32">
              <div className="flex-1 relative z-10">
                 <h2 className="text-4xl font-bold mb-4">Issue cards instantly.</h2>
                 <p className="text-indigo-200 mb-8 text-lg">
                    Create branded virtual and physical cards for your users. Set spend controls, manage PINs, and view transactions in real-time.
                 </p>
                 <ul className="space-y-2 mb-8 text-indigo-100">
                    <li className="flex items-center gap-2"><div className="w-2 h-2 bg-indigo-400 rounded-full"></div> Apple Pay & Google Pay ready</li>
                    <li className="flex items-center gap-2"><div className="w-2 h-2 bg-indigo-400 rounded-full"></div> Just-in-Time (JIT) Funding</li>
                    <li className="flex items-center gap-2"><div className="w-2 h-2 bg-indigo-400 rounded-full"></div> Dynamic Spend Controls</li>
                 </ul>
                 <button className="px-6 py-3 bg-white text-indigo-900 font-bold rounded-full">Explore Issuing</button>
              </div>
              
              <div className="flex-1 flex justify-center perspective-1000 relative">
                 <div className="w-80 h-52 bg-zinc-900 rounded-2xl shadow-2xl transform rotate-y-12 rotate-x-12 border border-zinc-700 relative overflow-hidden">
                    <div className="absolute top-0 right-0 p-6 text-white font-bold italic text-2xl">FOUNDRY</div>
                    <div className="absolute bottom-6 left-6 text-zinc-400 font-mono tracking-widest">**** **** **** 4242</div>
                    <div className="absolute bottom-6 right-6">
                       <div className="flex -space-x-2">
                          <div className="w-8 h-8 rounded-full bg-red-500/80"></div>
                          <div className="w-8 h-8 rounded-full bg-yellow-500/80"></div>
                       </div>
                    </div>
                    <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/10 to-transparent pointer-events-none"></div>
                 </div>
                 <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-indigo-500/30 blur-[80px] -z-10 rounded-full"></div>
              </div>
          </div>

          <div className="text-center mb-16">
             <h2 className="text-3xl font-bold mb-6">Global Compliance & Coverage</h2>
             <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                <div className="p-6 bg-slate-900 rounded-xl border border-slate-800">
                   <div className="font-bold text-2xl text-white mb-1">50+</div>
                   <div className="text-slate-500 text-sm">Countries Supported</div>
                </div>
                <div className="p-6 bg-slate-900 rounded-xl border border-slate-800">
                   <div className="font-bold text-2xl text-white mb-1">130+</div>
                   <div className="text-slate-500 text-sm">Currencies</div>
                </div>
                <div className="p-6 bg-slate-900 rounded-xl border border-slate-800">
                   <div className="font-bold text-2xl text-white mb-1">SOC2</div>
                   <div className="text-slate-500 text-sm">Type II Certified</div>
                </div>
                <div className="p-6 bg-slate-900 rounded-xl border border-slate-800">
                   <div className="font-bold text-2xl text-white mb-1">PCI</div>
                   <div className="text-slate-500 text-sm">DSS Level 1</div>
                </div>
             </div>
          </div>

        </div>
      </div>
    );
  };

  const EngagementView = () => (
    <div className="pt-24 min-h-screen bg-slate-950 text-white animate-in fade-in slide-in-from-bottom-5 duration-500">
      <div className="max-w-7xl mx-auto px-6">
         <button onClick={() => navigateTo('home', 'bank')} className="flex items-center gap-2 text-slate-400 hover:text-white font-bold mb-8">
            <ArrowLeft className="w-4 h-4" /> Back to Home
         </button>

         <div className="text-center max-w-4xl mx-auto mb-20">
            <div className="inline-block px-3 py-1 bg-indigo-900/50 border border-indigo-500/30 text-indigo-300 rounded-full text-xs font-bold mb-6">ENGAGEMENT PLATFORM</div>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-6">
              Re-architect banking<br/>
              <span className="text-indigo-400">around the customer.</span>
            </h1>
            <p className="text-xl text-slate-400 mb-8 max-w-2xl mx-auto">
               Stop patching legacy silos. Implement a unified engagement layer that orchestrates every interaction across web, mobile, and branch.
            </p>
            <div className="flex justify-center gap-4">
               <button className="px-8 py-4 bg-indigo-600 text-white rounded-full font-bold hover:bg-indigo-500">Request Platform Demo</button>
            </div>
         </div>

         <div className="mb-32 relative">
             <div className="absolute inset-0 bg-indigo-900/10 blur-[100px] rounded-full"></div>
             
             <div className="relative z-10 flex flex-col items-center gap-8">
                
                <div className="grid grid-cols-3 gap-6 w-full max-w-4xl">
                   <div className="p-6 bg-slate-900 border border-slate-800 rounded-xl text-center">
                      <Smartphone className="w-8 h-8 text-white mx-auto mb-3" />
                      <div className="font-bold">Retail App</div>
                   </div>
                   <div className="p-6 bg-slate-900 border border-slate-800 rounded-xl text-center">
                      <Globe className="w-8 h-8 text-white mx-auto mb-3" />
                      <div className="font-bold">Web Banking</div>
                   </div>
                   <div className="p-6 bg-slate-900 border border-slate-800 rounded-xl text-center">
                      <Users className="w-8 h-8 text-white mx-auto mb-3" />
                      <div className="font-bold">Employee Hub</div>
                   </div>
                </div>

                <div className="h-12 w-px bg-slate-700"></div>

                <div className="w-full max-w-5xl bg-gradient-to-r from-indigo-900 to-blue-900 rounded-2xl p-1 border border-indigo-500/50 shadow-[0_0_50px_rgba(79,70,229,0.3)]">
                   <div className="bg-slate-950/50 rounded-xl p-8 backdrop-blur-sm">
                      <div className="text-center mb-8">
                         <h3 className="text-2xl font-bold tracking-widest text-indigo-100">ENGAGEMENT BANKING PLATFORM</h3>
                         <p className="text-sm text-indigo-300">Orchestration & Experience Layer</p>
                      </div>
                      <div className="grid grid-cols-4 gap-4 text-center text-sm font-semibold">
                         <div className="p-4 bg-indigo-600/20 rounded border border-indigo-500/30">Identity Mgmt</div>
                         <div className="p-4 bg-indigo-600/20 rounded border border-indigo-500/30">Flow Control</div>
                         <div className="p-4 bg-indigo-600/20 rounded border border-indigo-500/30">Data Aggregation</div>
                         <div className="p-4 bg-indigo-600/20 rounded border border-indigo-500/30">Entitlements</div>
                      </div>
                   </div>
                </div>

                <div className="h-12 w-px bg-slate-700"></div>

                <div className="w-full max-w-4xl p-6 bg-slate-900 border border-slate-800 rounded-xl flex justify-between items-center opacity-60">
                   <div className="font-mono text-xs text-slate-500">SYSTEMS OF RECORD</div>
                   <div className="flex gap-4 font-bold text-slate-500">
                      <span>Core Banking</span>
                      <span>•</span>
                      <span>CRM</span>
                      <span>•</span>
                      <span>Payments Engine</span>
                      <span>•</span>
                      <span>KYC</span>
                   </div>
                </div>

             </div>
         </div>

         <div className="grid md:grid-cols-3 gap-8 mb-20">
            <div className="p-8 bg-slate-900 border border-slate-800 rounded-2xl">
               <Layout className="w-10 h-10 text-indigo-400 mb-6" />
               <h3 className="text-xl font-bold mb-3">Unified Customer View</h3>
               <p className="text-slate-400">Break down silos. See every account, interaction, and product holding in one dashboard.</p>
            </div>
            <div className="p-8 bg-slate-900 border border-slate-800 rounded-2xl">
               <MousePointerClick className="w-10 h-10 text-indigo-400 mb-6" />
               <h3 className="text-xl font-bold mb-3">Journey Orchestration</h3>
               <p className="text-slate-400">Design and deploy onboarding flows and loan applications without writing code.</p>
            </div>
            <div className="p-8 bg-slate-900 border border-slate-800 rounded-2xl">
               <Monitor className="w-10 h-10 text-indigo-400 mb-6" />
               <h3 className="text-xl font-bold mb-3">Employee Empowerment</h3>
               <p className="text-slate-400">Give your tellers and support agents the same view your customers see.</p>
            </div>
         </div>
      </div>
    </div>
  );

  const HardwareView = () => (
    <div className="pt-24 min-h-screen bg-white text-zinc-900 animate-in fade-in slide-in-from-bottom-5 duration-500">
      <div className="max-w-7xl mx-auto px-6">
         <button onClick={() => navigateTo('home', 'merchant')} className="flex items-center gap-2 text-zinc-500 hover:text-black font-bold mb-8">
            <ArrowLeft className="w-4 h-4" /> Back to Home
         </button>

         <div className="text-center max-w-4xl mx-auto mb-20">
            <div className="inline-block px-3 py-1 bg-zinc-100 rounded-full text-xs font-bold mb-6">POINT OF SALE</div>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-6">
              Hardware that<br/>
              <span className="text-zinc-400">means business.</span>
            </h1>
            <p className="text-xl text-zinc-500 mb-8 max-w-2xl mx-auto">
               Beautiful, reliable, and ready out of the box. Accept every payment type with security built-in.
            </p>
         </div>

         <div className="relative mb-32 flex justify-center">
            <div className="relative w-80 h-[500px] bg-zinc-900 rounded-[3rem] border-[8px] border-zinc-800 shadow-2xl flex flex-col overflow-hidden">
                <div className="flex-1 bg-white relative">
                   <div className="p-6 pt-12">
                      <div className="text-center mb-8">
                         <div className="text-4xl font-bold">$24.00</div>
                         <div className="text-sm text-zinc-400">Total Amount</div>
                      </div>
                      <div className="space-y-3">
                         <div className="h-12 bg-black text-white rounded-xl flex items-center justify-center font-bold shadow-lg">Tap to Pay</div>
                         <div className="h-12 border border-zinc-200 rounded-xl flex items-center justify-center font-bold">Insert Card</div>
                      </div>
                   </div>
                   <div className="absolute bottom-10 left-1/2 -translate-x-1/2 opacity-20">
                      <Zap className="w-24 h-24" />
                   </div>
                </div>
                <div className="h-16 bg-zinc-900 flex items-center justify-center border-t border-zinc-800">
                   <div className="w-1/3 h-1 bg-zinc-700 rounded-full"></div>
                </div>
            </div>
            
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-zinc-200 to-transparent rounded-full -z-10 blur-3xl opacity-60"></div>
         </div>

         <div className="grid md:grid-cols-3 gap-8 mb-24">
            <div className="group p-8 bg-zinc-50 rounded-3xl border border-zinc-100 hover:border-zinc-300 transition-all hover:shadow-xl">
               <div className="h-48 flex items-center justify-center mb-6">
                  <div className="w-24 h-24 bg-white rounded-2xl shadow-lg border border-zinc-100 flex items-center justify-center">
                     <CreditCard className="w-10 h-10 text-zinc-300" />
                  </div>
               </div>
               <h3 className="text-2xl font-bold mb-2">Reader</h3>
               <p className="text-zinc-500 mb-6">Connect wirelessly to your phone or tablet. Pocket-sized power.</p>
               <div className="flex justify-between items-center">
                  <span className="font-bold">$49</span>
                  <button className="px-4 py-2 bg-black text-white rounded-full text-sm font-bold">Shop</button>
               </div>
            </div>

            <div className="group p-8 bg-zinc-50 rounded-3xl border border-zinc-100 hover:border-zinc-300 transition-all hover:shadow-xl relative overflow-hidden">
               <div className="absolute top-4 right-4 bg-black text-white text-xs font-bold px-2 py-1 rounded">BEST SELLER</div>
               <div className="h-48 flex items-center justify-center mb-6">
                  <div className="w-32 h-48 bg-white rounded-2xl shadow-lg border border-zinc-100 flex flex-col p-2">
                     <div className="flex-1 bg-zinc-50 rounded-xl mb-2"></div>
                     <div className="h-2 w-1/2 bg-zinc-200 rounded-full mx-auto"></div>
                  </div>
               </div>
               <h3 className="text-2xl font-bold mb-2">Terminal</h3>
               <p className="text-zinc-500 mb-6">All-in-one device for payments and receipts. No phone needed.</p>
               <div className="flex justify-between items-center">
                  <span className="font-bold">$299</span>
                  <button className="px-4 py-2 bg-black text-white rounded-full text-sm font-bold">Shop</button>
               </div>
            </div>

            <div className="group p-8 bg-zinc-50 rounded-3xl border border-zinc-100 hover:border-zinc-300 transition-all hover:shadow-xl">
               <div className="h-48 flex items-center justify-center mb-6">
                  <div className="relative w-40 h-32 bg-white rounded-xl shadow-lg border border-zinc-100 flex items-center justify-center">
                      <div className="w-full h-full border-b-4 border-zinc-200 rounded-xl"></div>
                      <div className="absolute -right-6 top-1/2 -translate-y-1/2 w-12 h-20 bg-zinc-800 rounded-lg transform -rotate-12"></div>
                  </div>
               </div>
               <h3 className="text-2xl font-bold mb-2">Register</h3>
               <p className="text-zinc-500 mb-6">Two displays. Dedicated customer screen. The center of your counter.</p>
               <div className="flex justify-between items-center">
                  <span className="font-bold">$799</span>
                  <button className="px-4 py-2 bg-black text-white rounded-full text-sm font-bold">Shop</button>
               </div>
            </div>
         </div>

         <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-24 text-center">
            <div className="p-6 bg-zinc-50 rounded-2xl">
               <Battery className="w-8 h-8 mx-auto mb-3" />
               <div className="font-bold text-3xl mb-1">24h</div>
               <div className="text-sm text-zinc-500">Battery Life</div>
            </div>
             <div className="p-6 bg-zinc-50 rounded-2xl">
               <Zap className="w-8 h-8 mx-auto mb-3" />
               <div className="font-bold text-3xl mb-1">0.1s</div>
               <div className="text-sm text-zinc-500">Processing Speed</div>
            </div>
             <div className="p-6 bg-zinc-50 rounded-2xl">
               <Wifi className="w-8 h-8 mx-auto mb-3" />
               <div className="font-bold text-3xl mb-1">4G</div>
               <div className="text-sm text-zinc-500">LTE & WiFi</div>
            </div>
             <div className="p-6 bg-zinc-50 rounded-2xl">
               <ShieldCheck className="w-8 h-8 mx-auto mb-3" />
               <div className="font-bold text-3xl mb-1">IP67</div>
               <div className="text-sm text-zinc-500">Water Resistant</div>
            </div>
         </div>
      </div>
    </div>
  );

  const CreditView = () => (
    <div className="pt-24 min-h-screen bg-white text-zinc-900 animate-in fade-in slide-in-from-bottom-5 duration-500">
       <div className="max-w-7xl mx-auto px-6">
           <button onClick={() => navigateTo('home', 'merchant')} className="flex items-center gap-2 text-zinc-500 hover:text-black font-bold mb-8">
               <ArrowLeft className="w-4 h-4" /> Back to Home
           </button>

           <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
               <div>
                   <div className="inline-block px-3 py-1 bg-emerald-100 text-emerald-800 rounded-full text-xs font-bold mb-6">FOUNDRY CAPITAL</div>
                   <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-6">
                       Capital that flows<br/>
                       <span className="text-emerald-500">as fast as you do.</span>
                   </h1>
                   <p className="text-xl text-zinc-500 mb-8 leading-relaxed">
                       No paperwork. No personal guarantees. Access funds based on your sales history and inventory, deposited as soon as tomorrow.
                   </p>
                   <div className="flex gap-4">
                       <button className="px-8 py-4 bg-black text-white rounded-full font-bold text-lg hover:scale-105 transition-transform">Check Eligibility</button>
                   </div>
               </div>
               
               <div className="bg-zinc-50 rounded-3xl p-8 border border-zinc-200 shadow-xl relative overflow-hidden">
                   <div className="flex justify-between items-end mb-8">
                       <div>
                           <div className="text-sm text-zinc-500 font-bold mb-1">AVAILABLE CAPITAL</div>
                           <div className="text-4xl font-bold text-zinc-900">$50,000.00</div>
                       </div>
                       <div className="text-right">
                           <div className="text-xs font-bold text-emerald-600 bg-emerald-100 px-2 py-1 rounded">+12% vs last month</div>
                       </div>
                   </div>
                   
                   <div className="h-48 flex items-end justify-between gap-2 mb-6">
                       {[40, 65, 45, 80, 55, 90, 70].map((h, i) => (
                           <div key={i} className="w-full bg-zinc-200 rounded-t-sm relative group">
                               <div style={{height: `${h}%`}} className="absolute bottom-0 w-full bg-emerald-500 rounded-t-sm transition-all duration-500 group-hover:bg-emerald-400"></div>
                           </div>
                       ))}
                   </div>
                   <div className="flex justify-between text-xs text-zinc-400 font-bold uppercase tracking-wider">
                       <span>Mon</span><span>Tue</span><span>Wed</span><span>Thu</span><span>Fri</span><span>Sat</span><span>Sun</span>
                   </div>
               </div>
           </div>

           <div className="grid md:grid-cols-3 gap-8 mb-24">
               <div className="p-8 bg-white border border-zinc-200 rounded-3xl hover:shadow-xl transition-shadow group">
                   <div className="w-14 h-14 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mb-6">
                       <FileText className="w-7 h-7" />
                   </div>
                   <h3 className="text-2xl font-bold mb-3">Invoice Discounting</h3>
                   <p className="text-zinc-500 mb-6 min-h-[48px]">Get paid instantly for outstanding invoices. Advance up to 90% of value.</p>
                   <div className="bg-zinc-50 p-4 rounded-xl mb-6 border border-zinc-100">
                       <div className="flex justify-between text-sm mb-2">
                           <span className="font-bold">Invoice #1024</span>
                           <span className="font-bold">$12,500</span>
                       </div>
                       <button className="w-full py-2 bg-blue-600 text-white rounded-lg text-xs font-bold hover:bg-blue-500">Advance Now</button>
                   </div>
               </div>

               <div className="p-8 bg-white border border-zinc-200 rounded-3xl hover:shadow-xl transition-shadow group">
                   <div className="w-14 h-14 bg-purple-50 text-purple-600 rounded-2xl flex items-center justify-center mb-6">
                       <FileSpreadsheet className="w-7 h-7" />
                   </div>
                   <h3 className="text-2xl font-bold mb-3">Factoring</h3>
                   <p className="text-zinc-500 mb-6 min-h-[48px]">Turn your entire accounts receivable ledger into immediate working capital.</p>
                   <ul className="space-y-3 text-sm text-zinc-600 mb-6">
                       <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-purple-500"/> No collection hassle</li>
                       <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-purple-500"/> Scales with sales</li>
                   </ul>
               </div>

               <div className="p-8 bg-white border border-zinc-200 rounded-3xl hover:shadow-xl transition-shadow group">
                   <div className="w-14 h-14 bg-emerald-50 text-emerald-600 rounded-2xl flex items-center justify-center mb-6">
                       <TrendingUp className="w-7 h-7" />
                   </div>
                   <h3 className="text-2xl font-bold mb-3">Working Capital</h3>
                   <p className="text-zinc-500 mb-6 min-h-[48px]">Flexible funds for inventory or expansion. Repay automatically from daily sales.</p>
                   <div className="bg-zinc-50 p-4 rounded-xl mb-6 border border-zinc-100">
                       <div className="flex justify-between items-center mb-2">
                           <span className="text-xs text-zinc-500">Repayment</span>
                           <span className="text-xs font-bold">12% of daily sales</span>
                       </div>
                       <div className="w-full h-2 bg-zinc-200 rounded-full overflow-hidden">
                           <div className="w-1/3 h-full bg-emerald-500"></div>
                       </div>
                   </div>
               </div>
           </div>

           <div className="bg-zinc-900 text-white rounded-3xl p-12 md:p-20 text-center relative overflow-hidden">
               <div className="relative z-10 max-w-2xl mx-auto">
                   <h2 className="text-3xl md:text-4xl font-bold mb-6">Transparent pricing. No hidden fees.</h2>
                   <p className="text-zinc-400 mb-12">One flat fee. Repay automatically as you sell. If you have a slow month, you pay less.</p>
                   
                   <div className="grid grid-cols-3 gap-8 text-left border-t border-zinc-800 pt-8">
                       <div>
                           <div className="text-sm text-zinc-500 mb-1">Loan Amount</div>
                           <div className="text-2xl font-bold">$25,000</div>
                       </div>
                       <div>
                           <div className="text-sm text-zinc-500 mb-1">Flat Fee</div>
                           <div className="text-2xl font-bold">$1,800</div>
                       </div>
                       <div>
                           <div className="text-sm text-zinc-500 mb-1">Repayment</div>
                           <div className="text-2xl font-bold">10% <span className="text-sm text-zinc-500 font-normal">/ sale</span></div>
                       </div>
                   </div>
               </div>
               <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-zinc-800 to-transparent opacity-20 pointer-events-none"></div>
           </div>

       </div>
    </div>
  );

  const InvoicesView = () => (
    <div className="pt-24 min-h-screen bg-white text-zinc-900 animate-in fade-in slide-in-from-bottom-5 duration-500">
      <div className="max-w-7xl mx-auto px-6">
         {/* Breadcrumb */}
         <button onClick={() => navigateTo('home', 'merchant')} className="flex items-center gap-2 text-zinc-500 hover:text-black font-bold mb-8">
            <ArrowLeft className="w-4 h-4" /> Back to Home
         </button>

         {/* Hero */}
         <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
            <div>
               <div className="inline-block px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-bold mb-6">SMART INVOICING</div>
               <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-6">
                  Professional invoices,<br/>
                  <span className="text-blue-600">paid instantly.</span>
               </h1>
               <p className="text-xl text-zinc-500 mb-8 leading-relaxed">
                  Create, send, and track custom invoices in seconds. Let clients pay by card, ACH, or Apple Pay directly from the email.
               </p>
               <div className="flex gap-4">
                  <button className="px-8 py-4 bg-black text-white rounded-full font-bold text-lg hover:scale-105 transition-transform">Create Invoice</button>
               </div>
            </div>

            {/* Interactive Invoice Visual */}
            <div className="bg-zinc-50 rounded-3xl p-8 border border-zinc-200 shadow-xl relative">
               <div className="bg-white rounded-xl shadow-sm border border-zinc-100 p-6 max-w-sm mx-auto">
                  <div className="flex justify-between items-start mb-8">
                     <div className="w-12 h-12 bg-zinc-100 rounded-lg"></div>
                     <div className="text-right">
                        <div className="text-xs font-bold text-zinc-400">INVOICE</div>
                        <div className="font-mono">#INV-2024-001</div>
                     </div>
                  </div>
                  <div className="space-y-4 mb-8">
                     <div className="flex justify-between border-b border-zinc-50 pb-2">
                        <div>
                           <div className="font-bold text-sm">Web Design Service</div>
                           <div className="text-xs text-zinc-400">10 hours @ $150/hr</div>
                        </div>
                        <div className="font-bold">$1,500.00</div>
                     </div>
                     <div className="flex justify-between border-b border-zinc-50 pb-2">
                        <div>
                           <div className="font-bold text-sm">Hosting (Annual)</div>
                           <div className="text-xs text-zinc-400">Premium Plan</div>
                        </div>
                        <div className="font-bold">$240.00</div>
                     </div>
                  </div>
                  <div className="flex justify-between items-center pt-4">
                     <div className="text-zinc-500 text-sm">Total Due</div>
                     <div className="text-2xl font-bold">$1,740.00</div>
                  </div>
                  <button className="w-full mt-6 py-3 bg-blue-600 text-white rounded-lg font-bold">Pay Invoice</button>
               </div>
               
               {/* Floating Status Notification */}
               <div className="absolute top-1/2 -right-4 bg-white p-3 rounded-lg shadow-lg border border-zinc-100 flex items-center gap-3 animate-bounce">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                     <CheckCircle2 className="w-4 h-4 text-green-600" />
                  </div>
                  <div>
                     <div className="text-xs font-bold">Paid by Client</div>
                     <div className="text-[10px] text-zinc-400">Just now</div>
                  </div>
               </div>
            </div>
         </div>

         {/* Features Grid */}
         <div className="grid md:grid-cols-3 gap-8 mb-24">
            <div className="p-8 bg-zinc-50 rounded-3xl border border-zinc-100">
               <RefreshCw className="w-10 h-10 text-blue-600 mb-6" />
               <h3 className="text-xl font-bold mb-3">Recurring Billing</h3>
               <p className="text-zinc-500">Set it and forget it. Automatically charge cards for subscriptions or retainers on a schedule.</p>
            </div>
            <div className="p-8 bg-zinc-50 rounded-3xl border border-zinc-100">
               <FileText className="w-10 h-10 text-blue-600 mb-6" />
               <h3 className="text-xl font-bold mb-3">Estimates to Invoices</h3>
               <p className="text-zinc-500">Send estimates for approval. One click converts them into a payable invoice upon acceptance.</p>
            </div>
            <div className="p-8 bg-zinc-50 rounded-3xl border border-zinc-100">
               <Activity className="w-10 h-10 text-blue-600 mb-6" />
               <h3 className="text-xl font-bold mb-3">Real-time Tracking</h3>
               <p className="text-zinc-500">Know exactly when your client views the invoice and get notified instantly when they pay.</p>
            </div>
         </div>

         {/* Workflow Section */}
         <div className="bg-zinc-900 text-white rounded-3xl p-12 relative overflow-hidden">
            <div className="relative z-10 max-w-2xl">
               <h2 className="text-3xl font-bold mb-6">Automate your accounts receivable.</h2>
               <div className="space-y-6">
                  <div className="flex gap-4 items-start">
                     <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center font-bold text-sm">1</div>
                     <div>
                        <h4 className="font-bold mb-1">Send</h4>
                        <p className="text-zinc-400 text-sm">Email or text a secure link to your customer.</p>
                     </div>
                  </div>
                  <div className="h-8 w-px bg-zinc-800 ml-4"></div>
                  <div className="flex gap-4 items-start">
                     <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center font-bold text-sm">2</div>
                     <div>
                        <h4 className="font-bold mb-1">Remind</h4>
                        <p className="text-zinc-400 text-sm">Foundry automatically sends reminders 3 days before due date.</p>
                     </div>
                  </div>
                  <div className="h-8 w-px bg-zinc-800 ml-4"></div>
                  <div className="flex gap-4 items-start">
                     <div className="w-8 h-8 rounded-full bg-green-500 flex items-center justify-center font-bold text-sm">3</div>
                     <div>
                        <h4 className="font-bold mb-1">Reconcile</h4>
                        <p className="text-zinc-400 text-sm">Payment is instantly matched to the invoice in your ledger.</p>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
    </div>
  );

  const KYCView = () => (
    <div className="pt-24 min-h-screen bg-white text-zinc-900 animate-in fade-in slide-in-from-bottom-5 duration-500">
      <div className="max-w-7xl mx-auto px-6">
         <button onClick={() => navigateTo('home', 'merchant')} className="flex items-center gap-2 text-zinc-500 hover:text-black font-bold mb-8">
            <ArrowLeft className="w-4 h-4" /> Back to Home
         </button>

         <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
            <div>
               <div className="inline-block px-3 py-1 bg-indigo-100 text-indigo-700 rounded-full text-xs font-bold mb-6">IDENTITY VERIFICATION</div>
               <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-6">Trust is your<br/>currency.</h1>
               <p className="text-xl text-zinc-500 mb-8 leading-relaxed">
                  Verify users in seconds, not days. Prevent fraud with biometric authentication and global document checks.
               </p>
               <button className="px-8 py-4 bg-indigo-600 text-white rounded-full font-bold text-lg hover:bg-indigo-500 transition-colors">Start Verifying</button>
            </div>
            
            {/* Interactive KYC Demo */}
            <div className="bg-zinc-50 border border-zinc-200 rounded-3xl p-8 relative overflow-hidden flex flex-col items-center justify-center min-h-[500px]">
                <div className="relative w-64 h-[450px] bg-white rounded-[2.5rem] border-8 border-zinc-900 shadow-2xl flex flex-col overflow-hidden">
                   <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/3 h-6 bg-zinc-900 rounded-b-xl z-20"></div>
                   
                   {/* Screen Content */}
                   <div className="flex-1 p-6 flex flex-col items-center justify-center text-center">
                      <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-6 animate-in zoom-in duration-500">
                         <ScanFace className="w-10 h-10 text-green-600" />
                      </div>
                      <h3 className="text-xl font-bold mb-2">Identity Verified</h3>
                      <p className="text-sm text-zinc-500 mb-6">Match confirmed. Liveness check passed.</p>
                      
                      <div className="w-full bg-zinc-50 rounded-xl p-3 text-left mb-2 flex items-center gap-3">
                         <FileBadge className="w-5 h-5 text-indigo-500" />
                         <div className="text-xs">
                            <div className="font-bold">Document</div>
                            <div className="text-zinc-400">Driver's License</div>
                         </div>
                         <CheckCircle2 className="w-4 h-4 text-green-500 ml-auto" />
                      </div>
                      <div className="w-full bg-zinc-50 rounded-xl p-3 text-left flex items-center gap-3">
                         <Fingerprint className="w-5 h-5 text-indigo-500" />
                         <div className="text-xs">
                            <div className="font-bold">Biometrics</div>
                            <div className="text-zinc-400">99.8% Match</div>
                         </div>
                         <CheckCircle2 className="w-4 h-4 text-green-500 ml-auto" />
                      </div>
                   </div>
                   
                   <div className="p-4 bg-green-500 text-white text-center font-bold text-sm">
                      Access Granted
                   </div>
                </div>
            </div>
         </div>

         <div className="grid md:grid-cols-3 gap-8 mb-24">
            <div className="p-8 bg-zinc-50 rounded-3xl border border-zinc-100 hover:border-indigo-200 transition-colors">
               <ScanFace className="w-12 h-12 text-indigo-600 mb-6" />
               <h3 className="text-xl font-bold mb-3">Liveness Detection</h3>
               <p className="text-zinc-500">Stop deepfakes and bots. Our AI analyzes micro-movements to ensure the user is physically present.</p>
            </div>
            <div className="p-8 bg-zinc-50 rounded-3xl border border-zinc-100 hover:border-indigo-200 transition-colors">
               <Globe className="w-12 h-12 text-indigo-600 mb-6" />
               <h3 className="text-xl font-bold mb-3">Global Coverage</h3>
               <p className="text-zinc-500">Support for 12,000+ document types across 200+ countries and territories.</p>
            </div>
            <div className="p-8 bg-zinc-50 rounded-3xl border border-zinc-100 hover:border-indigo-200 transition-colors">
               <ShieldCheck className="w-12 h-12 text-indigo-600 mb-6" />
               <h3 className="text-xl font-bold mb-3">AML Screening</h3>
               <p className="text-zinc-500">Automatically screen users against PEPs, sanctions, and adverse media lists during onboarding.</p>
            </div>
         </div>

         <div className="bg-zinc-900 rounded-3xl p-10 text-white font-mono text-sm relative overflow-hidden">
            <div className="relative z-10">
               <div className="text-zinc-500 mb-4"># Initialize Verification Flow</div>
               <div className="text-purple-400">const <span className="text-white">verification</span> = await foundry.identity.verify({`{`}</div>
               <div className="pl-4 text-blue-300">type: <span className="text-green-400">'document'</span>,</div>
               <div className="pl-4 text-blue-300">user_id: <span className="text-green-400">'usr_8923...'</span>,</div>
               <div className="pl-4 text-blue-300">requirements: [<span className="text-green-400">'face_match'</span>, <span className="text-green-400">'liveness'</span>]</div>
               <div className="text-purple-400">{`}`});</div>
            </div>
            <div className="absolute right-0 top-0 p-10 opacity-20">
               <Code2 className="w-24 h-24" />
            </div>
         </div>
      </div>
    </div>
  );

  const Content = () => {
    switch (currentView) {
      case 'retail': return <RetailView />;
      case 'fnb': return <FnBView />;
      case 'enterprise': return <EnterpriseView />;
      case 'banks': return <BanksView />;
      case 'baas': return <BaaSView />; 
      case 'engagement': return <EngagementView />; 
      case 'hardware': return <HardwareView />;
      case 'credit': return <CreditView />; 
      case 'kyc': return <KYCView />;
      case 'invoices': return <InvoicesView />; // Added Route
      default: return <HomeView />;
    }
  };

  return (
    <div className={`min-h-screen font-sans transition-colors duration-500 ${activeSegment === 'bank' ? 'bg-slate-900 text-slate-100' : 'bg-white text-zinc-900'}`}>
      
      {/* --- Navigation --- */}
      <nav 
        className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? `backdrop-blur-md border-b shadow-sm ${activeSegment === 'bank' ? 'bg-slate-900/90 border-slate-800' : 'bg-white/90 border-zinc-200'}` : 'py-5 bg-transparent'}`}
        onMouseLeave={() => setHoveredNav(null)}
      >
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center relative">
          <div className="flex items-center gap-2 font-bold text-2xl tracking-tighter cursor-pointer z-50" onClick={() => navigateTo('home')}>
            <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${activeSegment === 'bank' ? 'bg-indigo-500' : 'bg-black'}`}>
              <Zap className="w-5 h-5 text-white" fill="currentColor" />
            </div>
            <span className={scrolled || activeSegment === 'merchant' ? (activeSegment === 'bank' ? 'text-white' : 'text-black') : 'text-white'}>Foundry</span>
          </div>

          {/* Desktop Menu */}
          <div className={`hidden md:flex gap-1 font-medium ${scrolled ? (activeSegment === 'bank' ? 'text-slate-300' : 'text-zinc-600') : (activeSegment === 'merchant' ? 'text-zinc-600' : 'text-slate-300')}`}>
            {Object.keys(navData).map((item) => (
              <div 
                key={item} 
                className="relative"
                onMouseEnter={() => setHoveredNav(item)}
              >
                <button 
                  className={`px-4 py-2 rounded-full flex items-center gap-1 hover:text-current transition-colors hover:opacity-100 opacity-80 ${hoveredNav === item ? (activeSegment === 'bank' ? 'bg-white/10' : 'bg-black/5') + ' opacity-100' : ''}`}
                >
                  {item} <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${hoveredNav === item ? 'rotate-180' : ''}`} />
                </button>
                
                {/* Mega Menu Dropdown */}
                <div 
                  className={`absolute top-full left-1/2 -translate-x-1/2 mt-4 p-2 rounded-2xl shadow-xl border backdrop-blur-md transition-all duration-300 origin-top ${hoveredNav === item ? 'opacity-100 scale-100 translate-y-0 visible' : 'opacity-0 scale-95 -translate-y-2 invisible'} ${currentTheme.dropdownBg} ${navData[item].type === 'categorized' ? 'w-[700px]' : 'w-80'}`}
                >
                  {navData[item].type === 'categorized' ? (
                    <div className="flex p-2 gap-8">
                      {navData[item].sections.map((section, idx) => (
                        <div key={idx} className="flex-1">
                          <div className={`text-xs font-bold uppercase tracking-wider mb-4 px-2 ${activeSegment === 'bank' ? 'text-slate-500' : 'text-zinc-400'}`}>
                            {section.title}
                          </div>
                          <div className="flex flex-col gap-1">
                            {section.items.map((subItem, subIdx) => (
                              <button 
                                key={subIdx} 
                                onClick={() => subItem.action && subItem.action()}
                                className={`flex items-start text-left gap-3 p-2.5 rounded-xl transition-colors group w-full ${currentTheme.dropdownHover}`}
                              >
                                <div className={`mt-0.5 p-1.5 rounded-lg ${activeSegment === 'bank' ? 'bg-white/10 text-indigo-400' : 'bg-zinc-100 text-zinc-900'}`}>
                                  {subItem.icon}
                                </div>
                                <div>
                                  <div className={`font-bold text-sm ${activeSegment === 'bank' ? 'text-white' : 'text-zinc-900'}`}>
                                    {subItem.title}
                                  </div>
                                  <div className={`text-xs mt-0.5 ${activeSegment === 'bank' ? 'text-slate-400' : 'text-zinc-500'}`}>
                                    {subItem.desc}
                                  </div>
                                </div>
                              </button>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="flex flex-col gap-1">
                      {navData[item].map((subItem, idx) => (
                        <button 
                          key={idx} 
                          onClick={() => subItem.action && subItem.action()}
                          className={`flex items-start text-left gap-4 p-3 rounded-xl transition-colors group w-full ${currentTheme.dropdownHover}`}
                        >
                          <div className={`mt-1 p-2 rounded-lg ${activeSegment === 'bank' ? 'bg-white/10 text-indigo-400' : 'bg-zinc-100 text-zinc-900'}`}>
                            {subItem.icon}
                          </div>
                          <div>
                            <div className={`font-bold text-sm ${activeSegment === 'bank' ? 'text-white' : 'text-zinc-900'}`}>
                              {subItem.title}
                            </div>
                            <div className={`text-xs mt-0.5 ${activeSegment === 'bank' ? 'text-slate-400' : 'text-zinc-500'}`}>
                              {subItem.desc}
                            </div>
                          </div>
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="hidden md:flex gap-4 z-50">
            <button className={`px-4 py-2 text-sm font-semibold transition-colors ${scrolled || activeSegment === 'merchant' ? (activeSegment === 'bank' ? 'text-white hover:bg-white/10' : 'text-black hover:bg-zinc-100') : 'text-white hover:bg-white/10'} rounded-full`}>
              Sign In
            </button>
            <button className={`px-5 py-2 text-sm font-bold rounded-full transition-all ${activeSegment === 'merchant' ? 'bg-black text-white hover:scale-105' : 'bg-indigo-500 text-white hover:bg-indigo-400'}`}>
              Get Started
            </button>
          </div>

          {/* Mobile Toggle */}
          <button className="md:hidden z-50" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? 
              <X className={scrolled || activeSegment === 'merchant' ? (activeSegment === 'bank' ? 'text-white' : 'text-black') : 'text-white'} /> : 
              <Menu className={scrolled || activeSegment === 'merchant' ? (activeSegment === 'bank' ? 'text-white' : 'text-black') : 'text-white'} />
            }
          </button>
        </div>

        {/* Mobile Menu (Theme Aware) */}
        {isMenuOpen && (
          <div className={`absolute top-0 left-0 w-full min-h-screen pt-24 px-6 flex flex-col gap-6 md:hidden z-40 animate-in slide-in-from-top-5 overflow-y-auto pb-10 transition-colors duration-500 ${currentTheme.mobileMenuBg}`}>
            {Object.keys(navData).map((item) => (
              <div key={item} className={`border-b pb-4 ${activeSegment === 'bank' ? 'border-slate-800' : 'border-zinc-100'}`}>
                <div className="text-xl font-bold mb-4">{item}</div>
                
                {navData[item].type === 'categorized' ? (
                  <div className="flex flex-col gap-6">
                    {navData[item].sections.map((section, idx) => (
                      <div key={idx}>
                        <div className={`text-xs font-bold uppercase tracking-wider mb-3 px-2 ${activeSegment === 'bank' ? 'text-slate-500' : 'text-zinc-400'}`}>
                          {section.title}
                        </div>
                        <div className="grid grid-cols-1 gap-4 pl-2">
                          {section.items.map((subItem, subIdx) => (
                            <button key={subIdx} onClick={() => { subItem.action && subItem.action(); setIsMenuOpen(false); }} className="flex items-center gap-3 text-left w-full">
                              <div className={activeSegment === 'bank' ? 'text-indigo-400' : 'text-zinc-400'}>{subItem.icon}</div>
                              <div>
                                <div className="font-semibold text-sm">{subItem.title}</div>
                                <div className={`text-xs ${activeSegment === 'bank' ? 'text-slate-400' : 'text-zinc-500'}`}>{subItem.desc}</div>
                              </div>
                            </button>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="grid grid-cols-1 gap-4 pl-2">
                    {navData[item].map((subItem, idx) => (
                      <button key={idx} onClick={() => { subItem.action && subItem.action(); setIsMenuOpen(false); }} className="flex items-center gap-3 text-left w-full">
                        <div className={activeSegment === 'bank' ? 'text-indigo-400' : 'text-zinc-400'}>{subItem.icon}</div>
                        <div>
                          <div className="font-semibold text-sm">{subItem.title}</div>
                          <div className={`text-xs ${activeSegment === 'bank' ? 'text-slate-400' : 'text-zinc-500'}`}>{subItem.desc}</div>
                        </div>
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <button className={`w-full py-4 rounded-xl font-bold mt-4 shadow-lg ${activeSegment === 'bank' ? 'bg-indigo-600 text-white' : 'bg-black text-white'}`}>Get Started</button>
            <button className={`w-full py-4 rounded-xl font-bold ${activeSegment === 'bank' ? 'bg-slate-800 text-white' : 'bg-zinc-100 text-zinc-900'}`}>Sign In</button>
          </div>
        )}
      </nav>

      <Content />

      {/* --- Footer (Theme Aware) --- */}
      <footer className={`pt-20 pb-10 border-t transition-colors duration-500 ${currentTheme.footerBg} ${currentTheme.footerText}`}>
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-10 mb-16">
          <div className="col-span-2 md:col-span-1">
            <div className={`flex items-center gap-2 font-bold text-2xl mb-6 ${activeSegment === 'bank' ? 'text-white' : 'text-black'}`}>
               <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${activeSegment === 'bank' ? 'bg-indigo-600' : 'bg-black'}`}>
                <Zap className="w-5 h-5 text-white" fill="currentColor" />
              </div>
              Foundry
            </div>
            <p className="text-sm mb-6 max-w-xs opacity-80">
              The operating system for modern finance. Bridging the gap between merchant agility and banking scale.
            </p>
            <div className="flex gap-4">
               {/* Social placeholders */}
               <div className={`w-8 h-8 rounded-full ${activeSegment === 'bank' ? 'bg-slate-800 hover:bg-slate-700' : 'bg-zinc-200 hover:bg-zinc-300'} transition-colors`}></div>
               <div className={`w-8 h-8 rounded-full ${activeSegment === 'bank' ? 'bg-slate-800 hover:bg-slate-700' : 'bg-zinc-200 hover:bg-zinc-300'} transition-colors`}></div>
               <div className={`w-8 h-8 rounded-full ${activeSegment === 'bank' ? 'bg-slate-800 hover:bg-slate-700' : 'bg-zinc-200 hover:bg-zinc-300'} transition-colors`}></div>
            </div>
          </div>
          
          <div>
            <h4 className={`font-bold mb-6 ${activeSegment === 'bank' ? 'text-white' : 'text-black'}`}>Products</h4>
            <ul className="space-y-3 text-sm">
              <li><button onClick={() => navigateTo('home', 'merchant')} className="hover:underline text-left">Payments</button></li>
              <li><button onClick={() => navigateTo('baas', 'bank')} className="hover:underline text-left">Banking as a Service</button></li>
              <li><button onClick={() => navigateTo('engagement', 'bank')} className="hover:underline text-left">Engagement Platform</button></li>
              <li><button onClick={() => navigateTo('hardware', 'merchant')} className="hover:underline text-left">Terminal Hardware</button></li>
            </ul>
          </div>
          
          <div>
            <h4 className={`font-bold mb-6 ${activeSegment === 'bank' ? 'text-white' : 'text-black'}`}>Resources</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#" className="hover:underline">Documentation</a></li>
              <li><a href="#" className="hover:underline">API Reference</a></li>
              <li><a href="#" className="hover:underline">Customer Stories</a></li>
              <li><a href="#" className="hover:underline">Blog</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className={`font-bold mb-6 ${activeSegment === 'bank' ? 'text-white' : 'text-black'}`}>Company</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#" className="hover:underline">About</a></li>
              <li><a href="#" className="hover:underline">Careers</a></li>
              <li><a href="#" className="hover:underline">Partners</a></li>
              <li><a href="#" className="hover:underline">Legal</a></li>
            </ul>
          </div>
        </div>
        
        <div className={`max-w-7xl mx-auto px-6 border-t pt-8 flex flex-col md:flex-row justify-between text-sm opacity-60 ${activeSegment === 'bank' ? 'border-slate-800' : 'border-zinc-200'}`}>
          <div>© 2024 Foundry Inc.</div>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:underline">Privacy Policy</a>
            <a href="#" className="hover:underline">Terms of Service</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;