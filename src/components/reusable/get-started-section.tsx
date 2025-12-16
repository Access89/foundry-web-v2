import { useNavigate } from "react-router-dom";
import { CustomButton } from "../shared/shared_customs";
import { Icon } from "@iconify/react/dist/iconify.js";

const GetStartedSection = () => {
  const navigate = useNavigate();

  return (
    <section className="bg-white p-5 md:p-10 w-full text-primary-white mb-10">
      <div className="container flex flex-col gap-5 items-center justify-center">
        <h2 className="text-[#1A1A1A] font-bold text-3xl sm:text-3xl md:text-4xl text-center">
          <span className="text-[#ABABAB]">Join</span> Foundry Platform{" "}
        </h2>

        <p className="text-[#575757] text-2xl sm:text-lg md:text-xl font-normal text-center">
          We believe in the power of collaboration. Our Partner Program is
          designed for innovators and industry leaders ready to take the next
          step in growth. As a partner, you'll gain exclusive access to our
          latest tools, expert training, and dedicated support, all aimed at
          driving success together.{" "}
        </p>

        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 md:gap-8 w-full sm:w-auto items-stretch sm:items-center justify-center">
          <div>
            <CustomButton
              onPress={() => {
                navigate("/become-partner");
              }}
              className="bg-[#075056] text-base sm:text-lg text-white flex items-center gap-1 justify-center w-full sm:w-auto hover:opacity-90 transition-opacity"
            >
              Become a Partner <Icon icon="mingcute:arrow-right-line" />
            </CustomButton>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GetStartedSection;
