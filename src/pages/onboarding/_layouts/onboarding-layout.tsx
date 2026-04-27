import { CustomButton } from "@/components/shared/shared_customs";
import { Icon } from "@iconify/react/dist/iconify.js";
import type { ReactNode } from "react";

type OnboardingLayoutProps = {
  title: string;
  subtitle: string;
  children: ReactNode;
  onBack: () => void;
  onContinue: () => void;
  continueLabel?: string;
  isLoading?: boolean;
};

const OnboardingLayout = ({
  title,
  subtitle,
  children,
  onBack,
  onContinue,
  continueLabel = "Continue",
  isLoading = false,
}: OnboardingLayoutProps) => {
  return (
    <div className="lg:w-[700px] w-full h-full lg:pt-12 lg:px-6 mx-auto flex flex-col justify-between lg:pb-12 px-6 py-6">
      <div className="flex flex-col gap-4">
        <button
          type="button"
          className="flex items-center justify-start cursor-pointer"
          onClick={onBack}
          aria-label="Go back"
        >
          <Icon icon="fluent:arrow-left-16-filled" height={25} />
        </button>

        <div>
          <h4 className="font-semibold lg:text-[1.7rem] text-[1.2rem]">
            {title}
          </h4>
          <p className="text-[#717173] font-light lg:text-[0.9rem] text-[0.8rem]">
            {subtitle}
          </p>
        </div>

        {children}
      </div>

      <CustomButton
        className="py-6 transition-all duration-300 bg-primary text-white"
        isLoading={isLoading}
        onPress={onContinue}
      >
        {continueLabel}
      </CustomButton>
    </div>
  );
};

export default OnboardingLayout;
