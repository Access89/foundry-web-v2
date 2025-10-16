import { motion } from "framer-motion";

const GlobalTradeSection = () => {
  return (
    <section className="p-4 sm:p-5 md:p-10 md:my-10 w-full text-primary-white container">
      <div className="container flex flex-col gap-4 sm:gap-5 items-center justify-center">
        <motion.h2
          className="text-[#1A1A1A] font-medium text-2xl sm:text-3xl md:text-4xl text-center leading-snug px-4 sm:px-0"
          whileInView={{ opacity: 1 }}
          initial={{ opacity: 0 }}
          transition={{ duration: 1 }}
        >
          Empowering businesses through global trade
        </motion.h2>

      
          <motion.p 
            className="text-[#575757] text-2xl sm:text-lg md:text-xl font-normal text-center max-w-[60ch] px-4 sm:px-0"
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Supply:Flow by Foundry is a cross-border supply chain and trade facilitation platform that simplifies international trade for businesses by providing tools to manage orders, payments, logistics, and compliance.
          </motion.p>
      </div>
    </section>
  );
};

export default GlobalTradeSection;
