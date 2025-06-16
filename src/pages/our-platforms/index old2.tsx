import { motion } from 'framer-motion';
import { useState, useRef, useEffect } from 'react';

const tabs = [
  { label: 'All', img: '/images/our-platforms/new/all.webp' },
  { label: 'Business', img: '/images/our-platforms/new/business.webp' },
  { label: 'Finance', img: '/images/our-platforms/new/finance.webp' },
  { label: 'Trade', img: '/images/our-platforms/new/trade.webp' },
];

const OurPlatforms = () => {
  const [activeTab, setActiveTab] = useState(0);
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const [indicatorStyle, setIndicatorStyle] = useState({ left: 0, width: 0 });

  useEffect(() => {
    const currentTab = tabRefs.current[activeTab];
    if (currentTab) {
      setIndicatorStyle({
        left: currentTab.offsetLeft,
        width: currentTab.offsetWidth,
      });
    }
  }, [activeTab]);

  return (
    <div className="w-full container h-[100vh] pt-[2rem] pb-[10rem] flex flex-col ">
      {/* Tabs Header */}
      <h2 className="text-3xl font-bold text-center mb-8">
        The Foundry Ecosystem
      </h2>

      {/* Image Section */}
      <motion.div
        key={tabs[activeTab].img}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.4 }}
        className="flex-1 relative flex items-center justify-center"
      >
        <img
          src={tabs[activeTab].img}
          alt={tabs[activeTab].label}
          className="object-contain  h-[40rem] w-full "
        />
      </motion.div>

      <div className="relative flex border-b border-gray-300 z-10 bg-white">
        {tabs.map((tab, idx) => (
          <button
            key={idx}
            ref={(el) => (tabRefs.current[idx] = el)}
            className={`flex-1 text-center py-4 font-semibold transition-colors ${
              activeTab === idx ? 'text-primary' : 'text-gray-500'
            }`}
            onClick={() => setActiveTab(idx)}
          >
            {tab.label}
          </button>
        ))}

        {/* Animated Indicator */}
        <motion.div
          className="absolute bottom-0 h-1 bg-primary rounded-full"
          layout
          transition={{ type: 'spring', stiffness: 300, damping: 30 }}
          style={{
            left: indicatorStyle.left,
            width: indicatorStyle.width,
          }}
        />
      </div>
    </div>
  );
};

export default OurPlatforms;
