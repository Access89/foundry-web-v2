import { motion } from "framer-motion";

const LoadingScreen = () => {
  return (
    <div className="w-full h-full bg-primary-dark flex flex-col items-center justify-center overflow-hidden">
      <motion.div
        variants={{
          initial: {
            y: 300,
            opacity: 0,
            rotateX: 90,
            rotate: 0,
            transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] },
          },
          enter: {
            y: 0,
            opacity: 1,
            rotateX: 0,
            // rotate: 360,
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
        <div className="relative">
          {/* Animated Text */}
          <h1 className="text-white text-4xl md:text-5xl font-medium tracking-tighter animate-in fade-in zoom-in duration-700">
            Foundry.
          </h1>

          {/* Subtle Loading Indicator */}
          <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-full flex justify-center">
            <div className="w-1.5 h-1.5 bg-zinc-800 rounded-full animate-bounce [animation-delay:-0.3s]"></div>
            <div className="w-1.5 h-1.5 bg-zinc-800 rounded-full animate-bounce [animation-delay:-0.15s] mx-1"></div>
            <div className="w-1.5 h-1.5 bg-zinc-800 rounded-full animate-bounce"></div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default LoadingScreen;
