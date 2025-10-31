import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Icon } from '@iconify/react';
import { Link } from 'react-router-dom';

interface SubItem {
  title: string;
  icon: string;
  link: string;
}

interface MenuItem {
  title: string;
  link?: string;
  subItems?: SubItem[];
}

const CustomMobileDropdown = ({
  item,
  closeMenu,
}: {
  item: MenuItem;
  closeMenu: () => void;
}) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // Animation variants for the sidebar container (now just opacity)
  const sidebarVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.25, // Quick fade for the sidebar itself
        when: 'beforeChildren',
        staggerChildren: 0.1, // Stagger children by 0.1 seconds
      },
    },
    exit: {
      opacity: 0,
      transition: { duration: 0.25 },
    },
  };

  // Animation variants for individual subitems (opacity and subtle y-axis movement)
  const subItemVariants = {
    hidden: { opacity: 0, y: 10 }, // Start slightly below and invisible
    visible: { opacity: 1, y: 0, transition: { duration: 0.3 } }, // Slide up and become visible
  };

  return (
    <div className="w-full">
      {/* Main item trigger */}
      <button
        onClick={() => {
          if (item.subItems) {
            setIsSidebarOpen(true);
          } else if (item.link) {
            closeMenu();
          }
        }}
        className="w-full flex justify-between items-center py-3 text-sm font-medium text-[#1A1A1A]"
      >
        {item.title}
        {item.subItems && (
          <Icon
            icon="mdi:chevron-right"
            className="transition-transform duration-200"
          />
        )}
      </button>

      {/* Sub-items Sidebar */}
      <AnimatePresence>
        {isSidebarOpen && item.subItems && (
          <motion.div
            variants={sidebarVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            // Changed from absolute to fixed to ensure it covers the whole screen regardless of scroll
            className="fixed top-0 right-0 h-screen w-full bg-white z-50 shadow-lg p-4 px-6"
          >
            <div className="flex items-center justify-between pb-4 ">
              <button onClick={() => setIsSidebarOpen(false)} className="mr-3">
                <Icon icon="ic:baseline-arrow-back" className="w-6 h-6" />
              </button>
              <button onClick={() => closeMenu()} className="mr-3">
                <Icon
                  icon="material-symbols:close-rounded"
                  className="w-6 h-6"
                />
              </button>
            </div>
            <div className="py-4 space-y-3">
              <h2 className="text-xs font-normal">{item.title}</h2>
              {item.subItems.map((subItem, idx) => (
                <motion.div key={idx} variants={subItemVariants}>
                  <Link
                    to={subItem.link}
                    onClick={() => {
                      setIsSidebarOpen(false);
                      closeMenu();
                    }}
                    className="flex items-center justify-between gap-3 py-2"
                  >
                    <p>
                      <span className="text-lg font-semibold text-black hover:text-gray-600">
                        {subItem.title}
                      </span>
                    </p>
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default CustomMobileDropdown;
