import { useState, useRef, useEffect } from 'react';
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
      textColor?: string;
      description?: string;
    }[];
  }[];
}

interface DropdownProps {
  item: MenuItem;
}

// Animation variants
const containerVariants = {
  initial: { opacity: 0, y: 10 },
  animate: {
    opacity: 1,
    delay: 0.5,
    y: 0,
    transition: {
      staggerChildren: 0.4,
      delayChildren: 0.3,
    },
  },
  exit: { opacity: 0, y: -10 },
};

const itemVariants = {
  initial: { opacity: 0, y: 10 },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      // <-- MOVE 'transition' INSIDE 'animate'
      // type: 'spring', // You can uncomment this if you prefer spring physics
      stiffness: 400, // Adjust stiffness for speed
      mass: 1, // Adjust mass for inertia
      duration: 0.4, // Or use a regular duration if not using spring
      // delay: 0.5, // This delay will be applied *after* stagger. Consider removing or reducing this if the stagger is already sufficient.
      ease: 'easeInOut', // 'easeInOut' should be a string value for ease property
    },
  },
  exit: {
    opacity: 0,
    y: -10,
    transition: {
      duration: 0.2, // Add a transition for exit as well if desired
    },
  },
};

const CustomeDropdownDesktop = ({ item }: DropdownProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);
  const [activeParentIndex, setActiveParentIndex] = useState<number | null>(
    null,
  );

  useEffect(() => {
    setActiveParentIndex(null);
  }, [isOpen]);

  useOnClickOutside(dropdownRef, () => setIsOpen(false));

  return (
    <div
      className=""
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      {/* Trigger: render a non-navigating button when item has subItems so top label isn't clickable */}
      {item.subItems ? (
        <button
          type="button"
          aria-haspopup={true}
          aria-expanded={isOpen}
          onClick={(e) => {
            e.preventDefault();
            // toggle for keyboard users; mouseenter/mouseleave still work for hover
            setIsOpen((s) => !s);
          }}
          className=" h-full py-6  flex gap-1 transition-all items-center text-base font-medium  text-[#434343] px-2"
        >
          {item.title}
          {item.subItems && (
            <Icon
              className={`transition-transform duration-200 ${
                isOpen ? 'rotate-180' : ''
              }`}
              icon="majesticons:chevron-down"
            />
          )}
        </button>
      ) : (
        <Link
          to={item.link === '/our-platforms' ? '#' : item.link || '#'}
          onClick={() => {
            setIsOpen(false);
          }}
          target={item.external ? '_blank' : '_self'}
          className=" h-full py-6  flex gap-1 transition-all items-center text-base font-medium  text-[#434343] px-2"
        >
          {item.title}
        </Link>
      )}

      {/* Dropdown Menu */}
      <AnimatePresence>
        {isOpen && item.subItems && (
          <>
            <motion.div
              initial={{ opacity: 0, y: -3 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="absolute left-0 top-full h-screen w-[100vw] bg-black/90 backdrop-blur-3xl z-50 overflow-hidden"
            >
              <div className="relative z-10">
                {item?.is_green_card ? (
                  <div
                    ref={dropdownRef}
                    onMouseLeave={() => setIsOpen(false)}
                    className={`px-[5rem] bg-white   h-fit  overflow-y-scroll  shadow-xl border  p-6 flex items-center place-items-center  gap-4 
              }`}
                  >
                    {item.subItems.map((subItem, subIndex) => (
                      <Link
                        onClick={() => setIsOpen(false)}
                        to={subItem.link}
                        key={subIndex}
                        className={`${
                          subIndex === 0
                            ? 'bg-[#16232A] text-white'
                            : subIndex === 1
                            ? 'bg-[#E4EEF0] text-black'
                            : 'bg-[#075056] text-white'
                        } p-6 rounded-xl h-[300px] w-[300px] flex flex-col hover:scale-105 transition-all`}
                      >
                        {/* <Icon
                          icon={subItem.icon}
                          fontSize={34}
                          className={`group-hover:translate-x-1 transition-all w-[2rem] ${
                            subIndex === 1 ? 'text-black' : 'text-white'
                          }`}
                        /> */}
                       <div className="mt-auto text-xl max-w-[15rem]">
    <h5 className="pb-4 font-semibold">{subItem.description}</h5>
    <p className="text-sm flex items-center gap-x-1 hover:opacity-80 group">
      {subItem.title}
      <Icon
        icon="iconamoon:arrow-right-2-duotone"
        fontSize={20}
        className={`group-hover:translate-x-1 transition-all ${
          subIndex === 1 ? 'text-black' : 'text-white'
        }`}
      />
    </p>
  </div>
                      </Link>
                    ))}
                  </div>
                ) : (
                  <div
                    ref={dropdownRef}
                    onMouseLeave={() => setIsOpen(false)}
                    className="px-[6vw] pt-10 pb-14 bg-white  h-fit overflow-y-scroll shadow-xl border transition-all   grid grid-cols-3 gap-10"
                  >
                    {/* Left column – parent items */}
                    <div className="flex flex-col ">
                      {item?.subItems.map((subItem, index) => (
                        <div
                          key={index}
                          className="py-1 cursor-pointer"
                          onMouseEnter={() => setActiveParentIndex(index)}
                          onMouseLeave={() => setActiveParentIndex(null)}
                        >
                          <Link
                            to={subItem.link}
                            onClick={() => setIsOpen(false)}
                            className={`text-[1.6rem] text-[#000000] ${
                              activeParentIndex !== null &&
                              activeParentIndex !== index
                                ? 'text-[#939393]'
                                : 'text-[#000000]'
                            }  font-medium font-sans `}
                          >
                            {subItem.title}
                          </Link>
                        </div>
                      ))}
                      <Link
                        onClick={() => setIsOpen(false)}
                        to="use-cases"
                        className="mt-4 text-[#000000] hover:text-gray-400 transition-all"
                      >
                        All Use cases
                      </Link>
                    </div>

                    {/* Right column – core features of hovered parent */}
                    <motion.div
                      key={activeParentIndex}
                      variants={containerVariants}
                      transition={{ duration: 0.2 }}
                      initial="initial"
                      animate="animate"
                      exit="exit"
                      className="flex flex-col gap-8 min-w-[300px] h-full py-[1rem]"
                    >
                      {activeParentIndex !== null &&
                        item.subItems[activeParentIndex]?.core_features?.map(
                          (core, idx) => (
                            <motion.div key={idx} variants={itemVariants}>
                              <p
                                // to={core.link}
                                onClick={() => setIsOpen(false)}
                                className="flex items-start gap-3 hover:text-primary transition-all"
                              >
                                <Icon icon={core.icon} fontSize={20} />
                                <div>
                                  <p className="font-medium text-base">
                                    {core.title}
                                  </p>
                                </div>
                              </p>
                            </motion.div>
                          ),
                        )}
                    </motion.div>
                  </div>
                )}
              </div>

              {/* <div className="fixed bottom-0 inset-0 z-40 backdrop-blur-md bg-black/10" /> */}
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

export default CustomeDropdownDesktop;
