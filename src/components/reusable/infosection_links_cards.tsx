import React from 'react';
import { Link } from 'react-router-dom';
import { Icon } from '@iconify/react';

type LinkItem = {
  title: string;
  link: string;
};

type Card = {
  type: 'text' | 'image';
  content: React.ReactNode;
};

interface InfoSectionWithLinksAndCardsProps {
  title: string;
  links: LinkItem[];
  cards: Card[];
}

const InfoSectionWithLinksAndCards: React.FC<
  InfoSectionWithLinksAndCardsProps
> = ({ title, links, cards }) => {
  return (
    <section className="my-10">
      <div className="container">
        <div className="md:grid grid-cols-[0.4fr,1fr] gap-x-10 mb-5">
          <h2 className="font-medium text-3xl lg:text-4xl">{title}</h2>
        </div>
        <div className="flex items-center gap-x-5">
          {links.map((item, index) => (
            <Link
              key={index}
              to={item.link}
              className="flex items-center gap-x-2 text-foundry-primary group hover:opacity-80"
            >
              {item.title}
              <Icon
                icon="fluent-emoji-high-contrast:right-arrow"
                fontSize={19}
                className="text-foundry-secondary group-hover:translate-x-1 transition-all"
              />
            </Link>
          ))}
        </div>

        <div className="md:grid md:grid-cols-auto-fill-300 gap-8 space-y-5 md:space-y-0 mt-5">
          {cards.map((card, index) => (
            <div
              key={index}
              className={`rounded-xl ${
                card.type === 'text'
                  ? 'bg-[#2D6145] text-white px-4 py-5'
                  : 'overflow-hidden relative'
              }`}
            >
              {card.content}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InfoSectionWithLinksAndCards;
