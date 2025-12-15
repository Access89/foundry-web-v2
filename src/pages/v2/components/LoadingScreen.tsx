const LoadingScreen = () => {
  return (
    <div className="w-full h-full bg-black flex flex-col items-center justify-center">
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
    </div>
  );
};

export default LoadingScreen;
