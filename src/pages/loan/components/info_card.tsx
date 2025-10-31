import { Icon } from "@iconify/react/dist/iconify.js";
import React from "react";

interface InfoCardProps {
  icon: string;
  title: string;
  description: string;
  onClick?: () => void;
  selected?: boolean;
}

export const InfoCard: React.FC<InfoCardProps> = ({
  description,
  icon,
  title,
  onClick,
  selected = false,
}) => {
  const base =
    "flex flex-col p-2 md:p-4 justify-between gap-5 md:gap-10 rounded-lg transition-transform group/card";

  const selectedClasses = selected
    ? "bg-[#eaf6ef] border-2 border-[#619B7D] shadow-[0px_6px_20px_rgba(97,155,125,0.12)]"
    : "bg-white shadow-[0px_2px_11px_2px_rgba(0,0,0,0.09)] hover:shadow-[0px_4px_15px_3px_rgba(0,0,0,0.12)]";

  return (
    <button
      type="button"
      onClick={onClick}
      className={`${base} ${selectedClasses}`}
      aria-pressed={selected}
    >
      <Icon className="text-[#9DC0AD]" icon={icon} fontSize={40} />

      <div className="text-center">
        <h3 className="text-base md:text-lg font-semibold">{title}</h3>
        <p className="text-sm md:text-sm font-light md:w-[70%] mx-auto text-[#838383]">
          {description}
        </p>
      </div>

      <div className="flex justify-between">
        <p />
        <p>
          <Icon
            icon={selected ? "ic:round-check-circle" : "stash:plus-duotone"}
            className={selected ? "text-[#2f8a56]" : "text-[#619B7D]"}
            fontSize={28}
          />
        </p>
      </div>
    </button>
  );
};
