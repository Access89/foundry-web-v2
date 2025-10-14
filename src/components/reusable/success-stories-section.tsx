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
  buttonText: string;
};

type ImageCard = {
  type: 'image';
  imageSrc: string;
  imageAlt: string;
  overlayText: string;
  overlayIcon?: string;
};

type StatsCard = {
  type: 'stats';
  title: string;
  stats: { value: string; label: string }[];
  buttonText: string;
};

type CardItem = TextCard | ImageCard | StatsCard;

export type SuccessStoriesProps = {
  title: string;
  links: LinkItem[];
  cards: CardItem[];
};

const SuccessStories = ({ cards }: SuccessStoriesProps) => {
  return (
    <section className="my-10">
      <div className="container">
        <div className="md:grid grid-cols-[0.4fr,1fr] gap-x-10 mb-5">
          <motion.h2 
            className="font-medium text-3xl lg:text-4xl"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            Customer Success Stories
          </motion.h2>
        </div>
        {/* <div className="flex items-center gap-x-5">
          {links.map((item, index) => (
            <Link
              key={index}
              to={item.link}
              className="flex items-center gap-x-2 text-primary group hover:opacity-80"
            >
              {item.title}
              <Icon
                icon="fluent-emoji-high-contrast:right-arrow"
                fontSize={19}
                className="text-secondary group-hover:translate-x-1 transition-all"
              />
            </Link>
          ))}
        </div> */}

        <div className="md:grid md:grid-cols-auto-fill-300 gap-8 space-y-5 md:space-y-0 mt-5">
          {cards.map((card, index) => (
            <motion.div
              key={index}
              className={`${
                card.type === 'text'
                  ? 'bg-primary text-white px-4 py-5 rounded-xl h-full flex flex-col'
                  : card.type === 'stats'
                  ? 'bg-[#16232A] text-white px-4 py-5 rounded-xl h-full flex flex-col'
                  : 'overflow-hidden rounded-xl relative'
              }`}
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.2,
                ease: "easeOut"
              }}
              whileHover={{ 
                scale: 1.05, 
                y: -10,
                transition: { duration: 0.3 }
              }}
              viewport={{ once: true, amount: 0.3 }}
            >
              {card.type === 'text' ? (
                <>
                  <p className="text-2xl md:max-w-[15rem]">{card.content}</p>
                  <div className="mt-auto">
                    <p className="text-xs mt-7 mb-10">{card.author}</p>
                    <motion.button 
                      className="flex items-center gap-x-2 group"
                      whileHover={{ x: 5 }}
                      transition={{ duration: 0.2 }}
                    >
                      {card.buttonText}
                      <Icon
                        icon="fluent-emoji-high-contrast:right-arrow"
                        fontSize={19}
                        className="group-hover:translate-x-1 transition-transform duration-200"
                      />
                    </motion.button>
                  </div>
                </>
              ) : card.type === 'image' ? (
                <>
                  <img
                    src={card.imageSrc}
                    alt={card.imageAlt}
                    className="h-full"
                  />
                  <motion.div 
                    className="absolute bottom-5 left-5 right-5 rounded-md bg-[#FAFAFA]/20 backdrop-blur-sm p-3"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    viewport={{ once: true }}
                  >
                    <p className="text-white font-medium flex justify-between items-end">
                      {card.overlayText}
                      {card.overlayIcon && (
                        <img
                          src={card.overlayIcon}
                          alt=""
                          className="w-[1rem] mb-1"
                        />
                      )}
                    </p>
                  </motion.div>
                </>
              ) : (
                // Stats card
                <>
                  <p className="text-3xl font-medium">{card.title}</p>
                  {card.stats.map((stat, i) => (
                    <div key={i} className="mt-5">
                      <p className="text-2xl">{stat.value}</p>
                      <p className="text-sm">{stat.label}</p>
                    </div>
                  ))}
                  <div className="mt-auto">
                    <motion.button 
                      className="flex items-center gap-x-2 group"
                      whileHover={{ x: 5 }}
                      transition={{ duration: 0.2 }}
                    >
                      {card.buttonText}
                      <Icon
                        icon="fluent-emoji-high-contrast:right-arrow"
                        fontSize={19}
                        className="group-hover:translate-x-1 transition-transform duration-200"
                      />
                    </motion.button>
                  </div>
                </>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SuccessStories;
