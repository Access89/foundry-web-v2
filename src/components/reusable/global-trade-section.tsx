import { motion } from "framer-motion";

const GlobalTradeSection = () => {
  return (
    <section className="p-5 md:p-10 md:my-10 w-full text-primary-white container">
      <div className="container flex flex-col gap-5 items-center justify-center">
        <motion.h2
          className="text-[#1A1A1A] font-medium text-2xl md:text-4xl text-center"
          whileInView={{ opacity: 1 }}
          initial={{ opacity: 0 }}
          transition={{ duration: 1 }}
        >
          Empowering businesses through global trade
        </motion.h2>

        <motion.p
          className="text-[#575757] text-sm font-normal md:text-center"
          whileInView={{ opacity: 1 }}
          initial={{ opacity: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          Foundry.app provides comprehensive B2B trading solutions for small and
          medium-sized businesses worldwide, empowering them to transform
          through digital trade, seize opportunities, and accelerate
          international growth.
        </motion.p>
      </div>

      {/* Centered full-width map to align with section headers */}
      <div className="w-full mt-10">
        <div className="container mx-auto">
          <motion.div
            className="w-full flex justify-center"
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <img
              src="/images/map.webp"
              alt="map"
              className="w-full max-w-[640px] md:max-w-[720px] rounded-lg object-cover mx-auto"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default GlobalTradeSection;
