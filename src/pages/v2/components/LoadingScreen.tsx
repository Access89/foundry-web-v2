import { motion } from "framer-motion";

const LoadingScreen = () => {
  return (
    <div className="w-full h-full bg-primary-dark flex flex-col items-center justify-center overflow-hidden">
      <motion.div
        variants={{
          initial: { y: 300, opacity: 0, rotateX: 90, rotate: 0 },
          enter: {
            y: 0,
            opacity: 1,
            rotateX: 0,
            rotate: 360,
            transition: {
              duration: 1.2,
              ease: [0.16, 1, 0.3, 1],
              rotate: { delay: 0.4, duration: 1, ease: "circOut" }, // Spin starts after ascent begins
            },
          },
          exit: {
            y: -100,
            opacity: 1,
            scale: 0.9,
            transition: { duration: 0.5, ease: "easeInOut" },
          },
        }}
        initial="initial"
        animate="enter"
        exit="exit"
        className="relative"
      >
        <img
          src="/icons/logo_white.svg"
          alt="Foundry"
          className="w-16 h-16 md:w-20 md:h-20 object-contain"
        />
      </motion.div>
    </div>
  );
};

export default LoadingScreen;
