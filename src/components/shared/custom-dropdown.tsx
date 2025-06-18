import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Icon } from '@iconify/react';
import { Link } from 'react-router-dom';
import useOnClickOutside from '@/hooks/useOnClickOutside';

interface MenuItem {
  title: string;
  link?: string;
  external?: boolean;
  is_green_card?: boolean;
  subItems?: {
    title: string;
    icon: string;
    link: string;
    description?: string;
    core_features: {
      title: string;
      icon: string;
      link: string;
      description?: string;
    }[];
  }[];
}

interface DropdownProps {
  item: MenuItem;
}

const CustomeDropdownDesktop = ({ item }: DropdownProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);
  const [activeParentIndex, setActiveParentIndex] = useState<number | null>(
    null,
  );

  useOnClickOutside(dropdownRef, () => setIsOpen(false));

  return (
    <div
      className=""
      ref={dropdownRef}
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      {/* Trigger as clickable Link */}
      <Link
        to={item.link === '/our-platforms' ? '#' : item.link || '#'}
        onClick={() => () => {
          console.log(item.link);
          setIsOpen(false);
        }}
        target={item.external ? '_blank' : '_self'}
        className="flex gap-1 items-center text-sm text-[#808080] hover:text-[#1A1A1A]"
      >
        {item.title}
        {item.subItems && (
          <Icon
            className="transition-all"
            icon={`${
              isOpen ? 'majesticons:chevron-up' : 'majesticons:chevron-down'
            }`}
          />
        )}
      </Link>

      {/* Dropdown Menu */}
      <AnimatePresence>
        {isOpen && item.subItems && (
          <motion.div
            initial={{ opacity: 0, y: -3 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="absolute left-0 top-full w-[100vw] bg-white    z-50"
          >
            {item?.is_green_card ? (
              <div
                className={`px-[5rem]  h-full max-h-[60vh]  overflow-y-scroll  shadow-xl border rounded-md p-6 grid grid-cols-5 items-center place-items-center  gap-4 
              }`}
              >
                {item.subItems.map((subItem, subIndex) => (
                  <Link
                    to={subItem.link}
                    key={subIndex}
                    className="bg-[#5F9779] text-white p-6 rounded-xl h-[300px] w-[300px] flex flex-col"
                  >
                    <Icon
                      icon={subItem.icon}
                      fontSize={34}
                      className="group-hover:translate-x-1 transition-all text-white w-[2rem]"
                    />
                    <div className="mt-auto text-xl max-w-[15rem]">
                      <h5 className="pb-4">{subItem.description}</h5>
                      <p className="text-sm flex items-center gap-x-1 hover:opacity-80 group">
                        {subItem.title}
                        <Icon
                          icon="iconamoon:arrow-right-2-duotone"
                          fontSize={20}
                          className="group-hover:translate-x-1 transition-all"
                        />
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            ) : (
              <div className="px-[5rem] max-h-[60vh] overflow-y-scroll shadow-xl border rounded-md p-6 grid grid-cols-3 gap-10">
                {/* Left column – parent items */}
                <div className="flex flex-col gap-2">
                  {item.subItems.map((subItem, index) => (
                    <div
                      key={index}
                      className="p-4 hover:text-gray-500 rounded-md cursor-pointer"
                      onMouseEnter={() => setActiveParentIndex(index)}
                      onMouseLeave={() => setActiveParentIndex(null)}
                    >
                      <Link
                        to={subItem.link}
                        onClick={() => setIsOpen(false)}
                        className="flex gap-3 items-center"
                      >
                        <Icon icon={subItem.icon} fontSize={20} />
                        <span className="text-2xl font-medium">
                          {subItem.title}
                        </span>
                      </Link>
                    </div>
                  ))}
                </div>

                {/* Right column – core features of hovered parent */}
                <div className="flex flex-col gap-8 min-w-[300px] ">
                  {activeParentIndex !== null &&
                    item.subItems[activeParentIndex]?.core_features?.map(
                      (core, idx) => (
                        <Link
                          key={idx}
                          to={core.link}
                          onClick={() => setIsOpen(false)}
                          className="flex items-start gap-3 hover:text-primary transition-all"
                        >
                          <Icon icon={core.icon} fontSize={20} />
                          <div>
                            <p className="font-medium text-sm">{core.title}</p>
                            {/* {core.description && (
                              <p className="text-xs text-gray-500">
                                {core.description}
                              </p>
                            )} */}
                          </div>
                        </Link>
                      ),
                    )}
                </div>
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default CustomeDropdownDesktop;
