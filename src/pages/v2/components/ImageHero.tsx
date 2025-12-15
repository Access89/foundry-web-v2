interface ImageHeroProps {
  badge: string;
  title: string[];
  description: string;
  cta: string;
  onCtaClick: () => void;
  heroImage: string;
  heroImageAlt: string;
  theme?: "light" | "dark";
}

const ImageHero = ({
  badge,
  title,
  description,
  cta,
  onCtaClick,
  heroImage,
  heroImageAlt,
  theme = "light",
}: ImageHeroProps) => {
  const isDark = theme === "dark";

  return (
    <header
      className={`min-h-screen relative pt-32 md:pt-28 xl:pt-44 pb-16 md:pb-24 xl:pb-32 overflow-hidden ${
        isDark ? "bg-[#1C1C1C]" : "bg-white"
      }`}
    >
      <div className="max-w-10xl px-4 md:px-6 lg:px-8 mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
          <div
            className={`max-w-2xl mx-auto lg:mx-0 text-center lg:text-left ${
              isDark ? "text-white" : "text-zinc-900"
            }`}
          >
            <div
              className={`inline-block px-3 py-1 ${
                isDark ? "bg-zinc-800" : "bg-zinc-100"
              } text-xs font-medium mb-4 md:mb-6 uppercase tracking-wider`}
            >
              {badge}
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-medium tracking-tight leading-[1.1] mb-4 md:mb-6">
              {title[0]}
              <br />
              <span className={isDark ? "text-gray-400" : "text-zinc-400"}>
                {title[1]}
              </span>
            </h1>
            <p
              className={`text-base sm:text-lg md:text-xl xl:text-2xl mb-6 md:mb-8 leading-relaxed ${
                isDark ? "text-gray-300" : "text-zinc-600"
              }`}
            >
              {description}
            </p>
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center lg:justify-start">
              <button
                onClick={onCtaClick}
                className={`px-6 md:px-8 py-3 md:py-4 text-base md:text-lg font-medium rounded-lg transition-all uppercase ${
                  isDark
                    ? "bg-white text-black hover:bg-gray-100"
                    : "bg-primary text-white hover:bg-primary-dark"
                }`}
              >
                {cta}
              </button>
            </div>
          </div>
          <div className="relative h-[300px] md:h-[400px] lg:h-[500px] w-full flex items-center justify-center">
            <img
              src={heroImage}
              alt={heroImageAlt}
              className="w-full h-full object-contain"
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default ImageHero;
