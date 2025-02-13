/* eslint-disable @typescript-eslint/no-explicit-any */
import { updateHireState } from "@/store/features/hire";
import { Icon } from "@iconify/react/dist/iconify.js";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

interface HireCardProps {
  id: string;
  position: string;
  tags: string[];
  about_role: string;
  expertise: string[];
  responsibilities: string[];
}

export const HireCard = ({
  id,
  position,
  about_role,
  expertise,
  responsibilities,
  tags,
}: HireCardProps) => {
  const dispatch = useDispatch();

  const navigate = useNavigate();

  return (
    <div className="flex flex-col  justify-between gap-4 bg-white rounded-lg border  shadow-md ">
      <div className="p-2 md:p-4 flex justify-between items-center ">
        <p></p>
        <Icon
          className="text-[#575757]/50"
          icon="icon-park-outline:tag"
          fontSize={24}
        />
      </div>

      <div className="p-2 md:p-4 md:px-6 text-[#0E121B] font-normal text-xl md:text-2xl">
        {position}
      </div>

      <div className="bg-[#619B7D] rounded-b-lg md:p-4 p-2 flex justify-between items-end">
        <p className="flex md:gap-4 items-center">
          <img
            src="/icons/logo_white.svg"
            alt="logo-white"
            className="w-[1.3rem]"
          />
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
          <Icon
            icon="line-md:plus-circle-filled"
            fontSize={24}
            className="text-white"
          />
        </button>
      </div>
    </div>
  );
};
