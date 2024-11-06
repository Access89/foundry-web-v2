import React from 'react';
import { Link } from 'react-router-dom';
import { Icon } from '@iconify/react';
import { cn } from '@nextui-org/react';

type SalesItem = {
  title: string;
  image: string;
};

interface SalesSectionProps {
  title: string;
  linkText?: string;
  linkTo?: string;
  imageClassName?: string;
  items: SalesItem[];
}

const SalesSection: React.FC<SalesSectionProps> = ({
  title,
  linkText,
  linkTo,
  items,
  imageClassName,
}) => {
  return (
    <section className="container py-10 pt-28 lg:pt-20">
      <div className="max-w-xl">
        <h2 className="font-medium text-3xl md:text-4xl mb-5">{title}</h2>
        {linkText && (
          <div className="flex items-center gap-x-5 my-2 mb-5">
            <Link
              to={String(linkTo)}
              className="flex items-center gap-x-2 text-primary group hover:opacity-80"
            >
              {linkText}
              <Icon
                icon="fluent-emoji-high-contrast:right-arrow"
                fontSize={19}
                className="text-foundry-secondary group-hover:translate-x-1 transition-all"
              />
            </Link>
          </div>
        )}
      </div>

      <div className="md:grid md:grid-cols-auto-fill-300 gap-8 space-y-5 md:space-y-0">
        {items.map((item, index) => (
          <div key={index} className="space-y-2 text-sm">
            <div className="border-2 border-white p-3 rounded-xl h-[15rem] overflow-hidden flex flex-col justify-center items-center">
              <img
                src={item.image}
                alt={item.title}
                className={cn('object-contain w-[16rem]', imageClassName)}
              />
            </div>
            <h2 className="md:text-base text-sm font-medium">{item.title}</h2>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SalesSection;
