import { Icon } from '@iconify/react/dist/iconify.js';
import { cn } from '@nextui-org/react';

interface IInfoCard {
  title: string;
  description: string;
  titleClassName?: string;
  descriptionClassName?: string;
  showLearnMore?: boolean;
  onLearnMoreClick?: () => void;
}
const InfoCard = ({
  title,
  description,
  titleClassName,
  descriptionClassName,
  showLearnMore = false,
  onLearnMoreClick = () => {},
}: IInfoCard) => {
  return (
    <div className="bg-secondary-light rounded-2xl p-4 lg:px-6 w-full flex flex-col justify-between gap-y-2   ">
      <div className="flex flex-col gap-y-3">
        <Icon
          icon="eva:checkmark-square-fill"
          fontSize={24}
          className="text-secondary"
        />
        <h1 className={cn('text-xl font-medium', titleClassName)}>{title}</h1>
        <p
          className={cn(
            'text-[#575757] text-sm leading-6 font-light',
            descriptionClassName,
          )}
        >
          {description}
        </p>
      </div>
      {showLearnMore && (
        <div
          className="flex items-center gap-2 cursor-pointer text-primary hover:bg-primary hover:text-white py-2 hover:px-3 duration-500 rounded-md w-fit "
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            onLearnMoreClick();
          }}
        >
          <p className="font-light text-[0.9rem]">Learn More</p>
          <Icon icon={'solar:arrow-right-outline'} />
        </div>
      )}
    </div>
  );
};

export default InfoCard;
