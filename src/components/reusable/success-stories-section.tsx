import { Icon } from '@iconify/react';

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
          <h2 className="font-medium text-3xl lg:text-4xl">
            Customer Success Stories
          </h2>
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
            <div
              key={index}
              className={`${
                card.type === 'text' || card.type === 'stats'
                  ? 'bg-[#2D6145] text-white px-4 py-5 rounded-xl h-full flex flex-col'
                  : 'overflow-hidden rounded-xl relative'
              }`}
            >
              {card.type === 'text' ? (
                <>
                  <p className="text-2xl md:max-w-[15rem]">{card.content}</p>
                  <div className="mt-auto">
                    <p className="text-xs mt-7 mb-10">{card.author}</p>
                    <button className="flex items-center gap-x-2">
                      {card.buttonText}
                      <Icon
                        icon="fluent-emoji-high-contrast:right-arrow"
                        fontSize={19}
                      />
                    </button>
                  </div>
                </>
              ) : card.type === 'image' ? (
                <>
                  <img
                    src={card.imageSrc}
                    alt={card.imageAlt}
                    className="h-full"
                  />
                  <div className="absolute bottom-5 left-5 right-5 rounded-md bg-[#FAFAFA]/20 backdrop-blur-sm p-3">
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
                  </div>
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
                    <button className="flex items-center gap-x-2">
                      {card.buttonText}
                      <Icon
                        icon="fluent-emoji-high-contrast:right-arrow"
                        fontSize={19}
                      />
                    </button>
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SuccessStories;
