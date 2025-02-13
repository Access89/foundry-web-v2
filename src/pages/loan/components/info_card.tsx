import { Icon } from "@iconify/react/dist/iconify.js";

interface InfoCardProps {
  icon: string;
  title: string;
  description: string;
}

export const InfoCard = ({ description, icon, title }: InfoCardProps) => {
  return (
    <div className="flex flex-col p-2 md:p-4 justify-between gap-5 md:gap-10 bg-white rounded-lg  shadow-[0px_2px_11px_2px_rgba(0,0,0,0.09)] hover:shadow-[0px_4px_15px_3px_rgba(0,0,0,0.12)] transition-transform group/card">
      <Icon className="text-[#9DC0AD]" icon={icon} fontSize={40} />

      <div>
        <h3 className="text-base md:text-lg font-semibold">{title}</h3>
        <p className="text-sm md:text-sm font-light md:w-[70%] text-[#838383]">
          {description}
        </p>
      </div>

      <div className="flex justify-between">
        <p></p>
        <p>
          <Icon
            icon="stash:plus-duotone"
            className="text-[#619B7D]"
            fontSize={28}
          />
        </p>
      </div>
    </div>
  );
};
