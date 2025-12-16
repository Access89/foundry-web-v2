import { motion } from "framer-motion";

const LoadingScreen = () => {
  return (
    <div className="w-full h-full bg-primary-dark flex flex-col items-center justify-center overflow-hidden">
      <motion.div
        initial={{ y: 200, opacity: 0, rotateX: 90 }}
        animate={{
          y: 0,
          opacity: 1,
          rotateX: 0,
          rotate: 360,
          transition: {
            duration: 1.2,
            ease: [0.16, 1, 0.3, 1], // Custom easing for smooth "snap"
            rotate: { duration: 1.5, ease: "circOut" },
          },
        }}
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
