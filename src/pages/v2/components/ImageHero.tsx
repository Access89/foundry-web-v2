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
      className={`relative pt-32 lg:pt-40 pb-16 md:pb-20 lg:pb-24 xl:pb-32 overflow-hidden ${
        isDark ? "bg-[#1C1C1C]" : "bg-white"
      }`}
    >
      <div className="max-w-10xl px-4 md:px-6 lg:px-8 mx-auto">
        <div className="grid lg:grid-cols-[1fr,1.2fr] gap-12 lg:gap-20 items-center">
          <div
            className={`max-w-xl lg:max-w-none text-center lg:text-left ${
              isDark ? "text-white" : "text-zinc-900"
            }`}
          >
            <div
              className={`inline-block px-4 py-1.5 ${
                isDark ? "bg-zinc-800" : "bg-zinc-100"
              } text-[10px] md:text-xs font-medium mb-4 md:mb-6 uppercase tracking-wider rounded`}
            >
              {badge}
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-6xl font-medium tracking-tight leading-[1.1] mb-6">
              {title[0]}
              <br />
              <span className={isDark ? "text-gray-500" : "text-zinc-400"}>
                {title[1]}
              </span>
            </h1>
            <p
              className={`text-lg md:text-xl lg:text-2xl mb-8 leading-relaxed ${
                isDark ? "text-gray-400" : "text-zinc-600"
              }`}
            >
              {description}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button
                onClick={onCtaClick}
                className={`px-8 py-4 text-base font-medium rounded-lg transition-all uppercase tracking-wide ${
                  isDark
                    ? "bg-white text-black hover:bg-gray-100"
                    : "bg-primary text-white hover:bg-primary-dark"
                }`}
              >
                {cta}
              </button>
            </div>
          </div>
          <div className="relative w-full p-6 md:p-0">
            <div className="relative w-full aspect-[4/3] lg:aspect-auto lg:h-[500px] xl:h-[550px]">
              <img
                src={heroImage}
                alt={heroImageAlt}
                className="w-full h-full object-contain drop-shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default ImageHero;
