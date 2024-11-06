import { Icon } from '@iconify/react/dist/iconify.js';
import { cn } from '@nextui-org/react';

interface IInfoCard {
  title: string;
  description: string;
  titleClassName?: string;
  descriptionClassName?: string;
}
const InfoCard = ({
  title,
  description,
  titleClassName,
  descriptionClassName,
}: IInfoCard) => {
  return (
    <div className="bg-secondary-light rounded-2xl p-4 lg:px-6 w-full flex flex-col gap-y-3">
      <Icon
        icon="eva:checkmark-square-fill"
        fontSize={24}
        className="text-foundry-secondary"
      />
      <h1 className={cn('text-xl font-medium', titleClassName)}>{title}</h1>
      <p
        className={cn('text-[#575757] text-sm leading-6', descriptionClassName)}
      >
        {description}
      </p>
    </div>
  );
};

export default InfoCard;
