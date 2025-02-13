/* eslint-disable @typescript-eslint/no-explicit-any */
import { updateHireState } from "@/store/features/hire";
import { Icon } from "@iconify/react/dist/iconify.js";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

interface AdCardProps {
  id: string;
  position: string;
  tags: string[];
  about_role: string;
  expertise: string[];
  responsibilities: string[];
}

export const AdCard = ({
  id,
  position,
  about_role,
  expertise,
  responsibilities,
  tags,
}: AdCardProps) => {
  const dispatch = useDispatch();

  const navigate = useNavigate();

  return (
    <div className="w-full flex flex-col gap-1 border rounded-lg py-4 ">
      <div className="p-2 md:px-4  flex justify-between items-center">
        <div className="flex gap-2 lg:gap-4">
          <p className="flex justify-center items-center rounded-lg bg-[#619B7D] p-4 py-3 border border-[#4C7F64]">
            <img
              src="/icons/logo_white.svg"
              alt="logo-white"
              className="w-[1rem]"
            />
          </p>
          <p className="text-[#0E121B] text-sm">{position}</p>
        </div>
        <Icon
          className="text-[#575757]/40"
          icon="icon-park-outline:tag"
          fontSize={24}
        />
      </div>

      <div className=" rounded-b-lg md:px-4 px-2 flex justify-between items-end">
        <p className="flex md:gap-4 items-center">
          <p className=" flex gap-2">
            {tags.map((item, index) => (
              <p
                className="flex whitespace-nowrap bg-[#EDF2EE] rounded-lg p-2 text-xs font-light"
                key={index}
              >
                {item}
              </p>
            ))}
          </p>
          <span className="font-light text-xs text-white leading-snug">
            {position}
          </span>
        </p>
        <button
          onClick={() => {
            dispatch(
              updateHireState({
                id,
                position,
                about_role,
                expertise,
                responsibilities,
                tags,
              })
            );
            navigate("/hire-detail");
          }}
        >
          <Icon icon="ei:plus" fontSize={30} className="text-[#4C7F64]" />
        </button>
      </div>
    </div>
  );
};
