import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";
import useOnClickOutside from "@/hooks/useOnClickOutside";

interface MenuItem {
  title: string;
  link?: string;
  external?: boolean;
  subItems?: {
    heading: string;
    subs: { title: string; link: string; icon: string }[];
  }[];
}

interface DropdownProps {
  item: MenuItem;
}

const Dropdown = ({ item }: DropdownProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Close dropdown when clicking outside
  useOnClickOutside(dropdownRef, () => setIsOpen(false));

  return (
    <div className="relative z-50" ref={dropdownRef}>
      {/* Dropdown Trigger */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex gap-1 items-center cursor-pointer text-xs text-[#808080] hover:text-[#1A1A1A]"
      >
        {item.title} <Icon icon="majesticons:chevron-down" />
      </button>

      {/* Dropdown Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="absolute left-0 mt-2 bg-white shadow-lg rounded-lg p-4 w-[800px] z-50"
          >
            {item.subItems?.map((subItem, subIndex) => (
              <div key={subIndex} className="mb-4">
                <p className="font-bold text-lg text-[#000000]">
                  {subItem.heading}
                </p>
                <div className="grid grid-cols-2 gap-1">
                  {subItem.subs.map((linkItem, linkIndex) => (
                    <Link
                      key={linkIndex}
                      to={linkItem.link}
                      onClick={() => setIsOpen(false)}
                      className="flex items-center"
                    >
                      <Icon
                        className="text-[#4C7F64]/50"
                        fontSize={30}
                        icon={linkItem.icon}
                      />
                      <p className="text-sm font-medium text-[#000000] hover:text-gray-500">
                        {linkItem.title}
                      </p>
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Dropdown;
