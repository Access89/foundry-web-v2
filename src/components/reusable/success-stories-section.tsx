import { Icon } from '@iconify/react';
import { motion } from 'framer-motion';

type LinkItem = {
  title: string;
  link: string;
};

type TextCard = {
  type: 'text';
  content: string;
  author: string;
  bgClass?: string;
  textColor?: string;
  // buttonText: string;
};

type ImageCard = {
  type: 'image';
  imageSrc: string;
  imageAlt: string;
  overlayText: string;
  overlayIcon?: string;
  link?: string;
  buttonText?: string;
};

type StatsCard = {
  type: 'stats';
  title: string;
  stats: { value: string; label: string }[];
  buttonText: string;
};

type VideoCard = {
  type: 'video';
  videoSrc: string;
  videoAlt?: string;
  buttonText?: string;
};
type LinkedInCard = {
type: 'linkedin';
embedUrl: string;
height?: string;
width?: string;
buttonText?: string;
};

type CardItem = TextCard | ImageCard | StatsCard | VideoCard | LinkedInCard;

export type SuccessStoriesProps = {
  title: string;
  links: LinkItem[];
  cards: CardItem[];
};

const SuccessStories = ({ cards }: SuccessStoriesProps) => {
  return (
    <section className="my-10">
      <div className="container max-w-7xl">
        <div className="md:grid md:grid-cols-[0.4fr,1fr] gap-x-10 mb-5 px-4 md:px-0">
          <motion.h2
            className="font-medium text-2xl md:text-3xl lg:text-4xl"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            Customer Success Stories
          </motion.h2>
        </div>

        <div className="md:grid md:grid-cols-auto-fill-300 gap-8 space-y-5 md:space-y-0 mt-5 px-4 md:px-0">
        {cards.map((card, index) => (
          <motion.div
            key={index}
            className={`${
              card.type === 'text'
                ? `${card.bgClass ?? 'bg-primary'} ${card.textColor ?? 'text-white'} px-4 py-5 rounded-xl h-full flex flex-col`
                : card.type === 'stats'
                ? 'bg-[#16232A] text-white px-4 py-5 rounded-xl h-full flex flex-col'
                : 'overflow-hidden rounded-xl relative object-cover h-full flex flex-col'
            }`}
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.6, delay: index * 0.2, ease: "easeOut" }}
            whileHover={{ scale: 1.05, y: -10 }}
            viewport={{ once: true, amount: 0.3 }}
          >
              {/* TEXT CARD */}
              {card.type === 'text' ? (
                <>
                  <p className="text-xl md:text-2xl md:max-w-[15rem]">{card.content}</p>
                  <div className="mt-auto">
                    <p className="text-xs mt-7 mb-10">{card.author}</p>
                    <motion.button
                      className="flex items-center gap-x-2 group"
                      whileHover={{ x: 5 }}
                    >
                      {/* {card.buttonText} */}
                      {/* <Icon icon="fluent-emoji-high-contrast:right-arrow" fontSize={19} /> */}
                    </motion.button>
                  </div>
                </>

              /* ✅ IMAGE CARD */
              ) : card.type === 'image' ? (
                <>
                  <div className="flex-1 relative">
                    {card.link ? (
                      <a 
                        href={card.link} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="block h-full w-full relative cursor-pointer z-10"
                        onClick={(e) => {
                          e.stopPropagation();
                          window.open(card.link, '_blank', 'noopener,noreferrer');
                        }}
                      >
                        <img src={card.imageSrc} alt={card.imageAlt} className="h-full w-full object-cover" />
                        <div className="absolute bottom-5 left-5 right-5 bg-[#FAFAFA]/20 backdrop-blur-sm p-3 rounded-md pointer-events-none">
                          <p className="text-white font-medium flex justify-between">
                            {card.overlayText}
                            {card.overlayIcon && <img src={card.overlayIcon} alt="" className="w-auto h-5" />}
                          </p>
                        </div>
                      </a>
                    ) : (
                      <>
                        <img src={card.imageSrc} alt={card.imageAlt} className="h-full w-full object-cover" />
                        <div className="absolute bottom-5 left-5 right-5 bg-[#FAFAFA]/20 backdrop-blur-sm p-3 rounded-md">
                          <p className="text-white font-medium flex justify-between">
                            {card.overlayText}
                            {card.overlayIcon && <img src={card.overlayIcon} alt="" className="w-auto h-5" />}
                          </p>
                        </div>
                      </>
                    )}
                  </div>
                  {card.buttonText && (
                    <div className="p-4 bg-white">
                      <motion.button className="flex items-center gap-x-2 group text-primary font-medium">
                        {card.buttonText}
                        <Icon icon="fluent-emoji-high-contrast:right-arrow" fontSize={19} />
                      </motion.button>
                    </div>
                  )}
                </>

              /* ✅ STATS CARD */
              ) : card.type === 'stats' ? (
                <>
                  <p className="text-2xl md:text-3xl font-medium">{card.title}</p>
                  {card.stats.map((stat, i) => (
                    <div key={i} className="mt-5">
                      <p className="text-xl md:text-2xl">{stat.value}</p>
                      <p className="text-sm">{stat.label}</p>
                    </div>
                  ))}
                  <div className="mt-auto">
                    <motion.button className="flex items-center gap-x-2 group">
                      {card.buttonText}
                      <Icon icon="fluent-emoji-high-contrast:right-arrow" fontSize={19} />
                    </motion.button>
                  </div>
                </>

              /* ✅ NEW VIDEO CARD */
              ) : card.type === 'video' ? (
                <>
                  <div className="relative w-full aspect-video group">
                    <iframe
                      src={card.videoSrc}
                      title={card.videoAlt }
                      width="100%"
                      height="100%"
                      className="absolute inset-0 w-full h-full"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                    ></iframe>

                    {/* PLAY HOVER OVERLAY */}
                    {/* <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center">
                      <Icon icon="mdi:play-circle" className="text-white group-hover:scale-110 transition-transform duration-300" fontSize={60} />
                    </div> */}
                  </div>

                  {card.buttonText && (
                    <div className="p-4 bg-white">
                      <motion.button className="flex items-center gap-x-2 group text-primary font-medium">
                        {card.buttonText}
                        <Icon icon="fluent-emoji-high-contrast:right-arrow" fontSize={19} />
                      </motion.button>
                    </div>
                  )}
                </>
                
              ) : card.type === 'linkedin' ? (
                <>
                  {/* Show iframe on desktop, fallback on mobile */}
                  <div className="hidden md:block flex-1 relative w-full overflow-hidden bg-white" style={{ minHeight: card.height || '400px' }}>
                    <iframe
                      src={card.embedUrl}
                      height="100%"
                      width="100%"
                      frameBorder="0"
                      allowFullScreen
                      title="LinkedIn embedded post"
                      className="absolute inset-0 w-full h-full rounded-t-xl"
                    ></iframe>
                  </div>
                  
                  {/* Mobile fallback - clickable card */}
                  <div 
                    className="md:hidden flex-1 relative w-full overflow-hidden bg-gradient-to-br from-[#0077B5] to-[#00A0DC] p-8 flex flex-col justify-center items-center cursor-pointer min-h-[300px]"
                    onClick={() => {
                      const linkedinUrl = card.embedUrl.replace('/embed/feed/update/', '/feed/update/');
                      window.open(linkedinUrl, '_blank', 'noopener,noreferrer');
                    }}
                  >
                    <Icon icon="mdi:linkedin" className="text-white mb-4" fontSize={60} />
                    <p className="text-white text-center text-lg font-medium mb-2">View LinkedIn Post</p>
                    <p className="text-white/80 text-center text-sm">Tap to open in LinkedIn</p>
                  </div>
                  
                  {card.buttonText && (
                    <div className="p-4 bg-white">
                      <motion.button 
                        className="flex items-center gap-x-2 group text-primary font-medium"
                        onClick={() => {
                          const linkedinUrl = card.embedUrl.replace('/embed/feed/update/', '/feed/update/');
                          window.open(linkedinUrl, '_blank', 'noopener,noreferrer');
                        }}
                      >
                        {card.buttonText}
                        <Icon icon="fluent-emoji-high-contrast:right-arrow" fontSize={19} />
                      </motion.button>
                    </div>
                  )}
                </>
              ) : null}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SuccessStories;
