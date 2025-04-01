import { motion } from 'framer-motion';

const PartnersSection = () => {
  const partners = [
    { name: 'Shield', logo: '/images/brands/shield.jpg' },
    { name: 'Cedi Capital', logo: '/images/brands/cedi.jpg' },
    { name: 'Google', logo: '/images/brands/gog 1.png' },
    { name: 'CCT', logo: '/images/brands/cct.jpg' },
    { name: 'Cepodek', logo: '/images/brands/CEPODEK ENTERPRISE.png' },
    { name: 'Ubuntu', logo: '/images/brands/2ubuntu (1) 1.png' },
    { name: 'Microsoft', logo: '/images/brands/micro 1.png' },
    { name: 'AZ Enterprise', logo: '/images/brands/AZ ENTERPRISE.png' },
    { name: 'Wema', logo: '/images/brands/wema-Logo-PNG (1) 1.png' },
    { name: 'Ras Mawuli', logo: '/images/brands/Ras Ma (1) 1.png' },
    { name: 'Fatum', logo: '/images/brands/Banking Partnership (2) 1.png' },
    { name: 'Cal bank', logo: '/images/brands/cal (1) 1.png' },
  ];

  // Duplicate logos for seamless scrolling
  const scrollingPartners = [...partners, ...partners];

  return (
    <section className=" mt-5 mb-3 md:mb-10 flex flex-col gap-6 overflow-hidden flex-1 max-w-[100vw]">
      {/* Title Section with Fade-In Animation */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: 'easeOut' }}
        className="text-center"
      >
        <h2 className="lg:text-xl  text-lg font-semibold">
          You are in good company
        </h2>
      </motion.div>

      {/* Scrolling Animation */}
      <div className="relative w-full overflow-hidden">
        {/* Left Fade Effect */}
        <div className="absolute left-0 top-0 h-full w-20 bg-gradient-to-r from-white to-transparent pointer-events-none z-10" />

        {/* Right Fade Effect */}
        <div className="absolute right-0 top-0 h-full w-20 bg-gradient-to-l from-white to-transparent pointer-events-none z-10" />
        <motion.div
          className="flex items-center gap-10 whitespace-nowrap"
          animate={{ x: ['0%', '-100%'] }} // Move from right to left
          transition={{
            repeat: Infinity,
            duration: 20, // Adjust speed of scrolling
            ease: 'linear',
          }}
        >
          {scrollingPartners.map((partner, index) => (
            <div
              key={index}
              className="lg:w-[6rem] lg:h-[3rem] w-[4rem] h-[2rem] flex-shrink-0"
            >
              <img
                src={partner.logo}
                alt={partner.name}
                className="w-full h-full object-contain"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default PartnersSection;
