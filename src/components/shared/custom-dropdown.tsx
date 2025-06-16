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
    // subs: { title: string; link: string; icon: string }[];
  }[];
}

interface DropdownProps {
  item: MenuItem;
}

const CustomeDropdownDesktop = ({ item }: DropdownProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

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
            className="absolute left-0 top-full w-[100vw] bg-white   z-50"
          >
            <div
              className={`px-[5rem]  h-full max-h-[60vh]  overflow-y-scroll  shadow-xl border rounded-md p-6 grid items-center place-items-center grid-cols-5
              } gap-4`}
            >
              {item.subItems.map((subItem, subIndex) =>
                item?.is_green_card ? (
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
                ) : (
                  <Link
                    to={subItem.link}
                    onClick={() => setIsOpen(false)}
                    key={subIndex}
                    className=" p-6  flex flex-col group "
                  >
                    <div className="max-w-[15rem] max-h-[10rem] flex items-center justify-center overflow-hidden">
                      <img
                        src={subItem.icon}
                        alt="support"
                        width="100%"
                        height="100%"
                        className="group-hover:scale-105 transition-all w-full h-full"
                      />
                    </div>
                    <p className="mt-2 text-xl text-black flex flex-col gap-1">
                      <h5 className="text-medium font-medium whitespace-nowrap">
                        {subItem.title}
                      </h5>
                      <p className="text-xs ">{subItem.description}</p>
                    </p>
                  </Link>
                ),
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default CustomeDropdownDesktop;
