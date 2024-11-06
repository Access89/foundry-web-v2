import { CustomButton } from '@/components/shared_customs';
import { Icon } from '@iconify/react/dist/iconify.js';
import React, { useRef } from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import { Accordion, AccordionItem, cn } from '@nextui-org/react';
import { AnimatePresence, motion } from 'framer-motion';

const UseCases = () => {
  const [isStickyVisible, setIsStickyVisible] = React.useState(false);
  const sectionRef = useRef<HTMLDivElement | null>(null);

  const { pathname } = useLocation();

  const handleScroll = () => {
    if (sectionRef.current) {
      const sectionRect = sectionRef.current.getBoundingClientRect();

      const isSectionInView =
        sectionRect.top < window.innerHeight && sectionRect.bottom >= 0;

      if (sectionRect.bottom <= window.innerHeight && !isSectionInView) {
        setIsStickyVisible(true);
      } else {
        setIsStickyVisible(false);
      }
    }
  };

  React.useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <main>
      {/* hero */}
      <section ref={sectionRef} className="container">
        <div className="border-3 border-white rounded-xl relative overflow-hidden flex flex-col">
          <div className="lg:px-28 md:pt-16 md:pb-28 px-5 flex flex-col-reverse md:flex-col">
            <div className="lg:max-w-lg md:max-w-xs">
              <h1 className="font-medium text-3xl md:text-4xl">
                Enabling every aspect of your business operations.
              </h1>
              <p className="text-secondary-black my-7">
                Work smarter, enhance efficiency through automation, and unlock
                new revenue streams with the software and hardware platform
                trusted by millions of businesses.
              </p>
              <div className="flex items-center gap-x-4">
                <CustomButton className="bg-transparent border-2 border-foundry-primary px-5 ">
                  Get Started
                </CustomButton>
                <CustomButton className="bg-foundry-primary text-white font-medium px-5 ">
                  Contact Sales
                </CustomButton>
              </div>
            </div>
            <img
              src="/images/LS_3.webp"
              alt="pos device"
              className="md:w-[19rem] lg:w-[21rem] md:absolute right-10 top-0"
            />
          </div>

          <div className="border-t p-4 mt-16 flex items-center flex-col md:flex-row gap-5">
            <p className="text-foundry-secondary flex items-center text-sm gap-x-3 text-nowrap">
              Customise your experience by
              <Icon
                icon="fluent-emoji-high-contrast:right-arrow"
                fontSize={16}
                className="text-foundry-secondary group-hover:translate-x-1  transition-all"
              />
            </p>
            <div className="flex items-center flex-wrap gap-2">
              {navLinks.map((subNav, index) => (
                <CustomButton
                  key={index}
                  as={Link}
                  to={subNav.link}
                  className={cn(
                    'relative cursor-pointer overflow-hidden rounded-md text-foundry-secondary bg-transparent border-2 border-foundry-secondary font-medium flex items-center gap-x-2 transition-all custom-button hover:text-white',
                    pathname === subNav.link &&
                      'bg-foundry-secondary text-white'
                  )}
                >
                  {subNav.title}
                </CustomButton>
              ))}
            </div>
          </div>
        </div>
      </section>

      {isStickyVisible && (
        <div className="lg:hidden flex sticky top-0 z-50 w-full shadow-md bg-white">
          <Accordion
            itemClasses={{
              base: 'py-0 w-full ',
              title: 'font-normal text-medium',
              trigger:
                ' py-3 px-4 data-[hover=true]:bg-default-100 rounded-none bg-white rounded-lg flex items-center ',
              indicator: 'text-medium',
              content: 'text-small bg-white',
            }}
            isCompact
          >
            <AccordionItem
              aria-label="Accordion 1"
              title={
                <div>
                  {navLinks.map(
                    (item) =>
                      pathname === item.link && (
                        <div key={item.link} className="text-xl">
                          {item.title}
                        </div>
                      )
                  )}
                </div>
              }
            >
              <div className="space-y max-w-[16rem] mx-auto">
                <p className="text-foundry-secondary flex items-center text-sm gap-x-3 text-nowrap mb-3">
                  Customise your experience by
                  <Icon
                    icon="fluent-emoji-high-contrast:right-arrow"
                    fontSize={16}
                    className="text-foundry-secondary group-hover:translate-x-1  transition-all"
                  />
                </p>
                {navLinks.map((subNav, index) => (
                  <CustomButton
                    key={index}
                    as={Link}
                    to={subNav.link}
                    className={cn(
                      'relative cursor-pointer overflow-hidden rounded-md text-foundry-secondary bg-transparent border-2 border-foundry-secondary font-medium flex items-center gap-x-2 transition-all custom-button hover:text-white  mb-3',
                      pathname === subNav.link &&
                        'bg-foundrysecondary text-white'
                    )}
                  >
                    {subNav.title}
                  </CustomButton>
                ))}
              </div>
            </AccordionItem>
          </Accordion>
        </div>
      )}

      <AnimatePresence>
        {isStickyVisible && (
          <motion.div
            exit={{ opacity: 0 }}
            className={
              'border-t p-3 sticky top-0 bg-white z-50 w-full  justify-between shadow-sm hidden lg:flex'
            }
          >
            <motion.div
              initial={{ x: 20 }}
              animate={{ x: 0 }}
              exit={{ x: 20, opacity: 0 }}
              className="flex items-center gap-5"
            >
              <p className="text-foundry-secondary flex items-center text-sm gap-x-3 text-nowrap">
                Customise your experience by
                <Icon
                  icon="fluent-emoji-high-contrast:right-arrow"
                  fontSize={16}
                  className="text-foundry-secondary group-hover:translate-x-1 transition-all"
                />
              </p>
              <div className="flex gap-5 max-w-[1200px]">
                {navLinks.map((subNav, index) => (
                  <CustomButton
                    key={index}
                    as={Link}
                    to={subNav.link}
                    className={cn(
                      'relative cursor-pointer overflow-hidden rounded-md text-foundry-secondary bg-transparent border-2 border-foundry-secondary font-medium flex items-center gap-x-2 transition-all custom-button hover:text-white',
                      pathname === subNav.link &&
                        'bg-foundry-secondary text-white'
                    )}
                  >
                    {subNav.title}
                  </CustomButton>
                ))}
              </div>
            </motion.div>
            <motion.div
              initial={{ x: -20 }}
              animate={{ x: 0 }}
              exit={{ x: -20, opacity: 0 }}
              className=" items-center gap-x-4 hidden xl:flex"
            >
              <CustomButton className="bg-transparent border-2 border-primary px-5 ">
                Get Started
              </CustomButton>
              <CustomButton className="bg-foundry-primary text-white font-medium px-5 ">
                Contact Sales
              </CustomButton>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <Outlet />
    </main>
  );
};

export default UseCases;

const navLinks = [
  {
    title: 'All',
    link: '/use-cases',
  },
  {
    title: 'Retail',
    link: '/use-cases/retail',
  },
  {
    title: 'Micro Finance / Credit',
    link: '/use-cases/micro-finance',
  },
  {
    title: 'Credit Unions',
    link: '/use-cases/credit-unions',
  },
  {
    title: 'Schools',
    link: '/use-cases/schools',
  },
  {
    title: 'Restaurants',
    link: '/use-cases/restaurants',
  },
];
