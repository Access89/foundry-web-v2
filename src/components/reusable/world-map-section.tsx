import { motion } from 'framer-motion';

const WorldMapSection = () => {
  return (
    <section className="pt-8 md:pt-2 pb-10 mt-0 md:-mt-20 bg-white">
      <div className="container mx-auto px-4">
         <motion.div
           className="text-center mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* <h2 className="text-3xl md:text-4xl font-semibold text-[#1A1A1A] mb-4">
            Global Reach, Local Impact
          </h2>
          <p className="text-lg text-[#575757] max-w-3xl mx-auto">
            Connecting businesses across continents with seamless trade solutions
          </p> */}
        </motion.div>

        <div className="relative">
          {/* World Map Image */}
          <motion.div
            className="flex justify-center"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            <img
              src="/images/map.webp"
              alt="World Map showing global trade connections"
              className="w-full mt-4 max-w-4xl h-auto"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WorldMapSection;
