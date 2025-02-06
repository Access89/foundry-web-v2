import { Icon } from "@iconify/react/dist/iconify.js";
import { useNavigate } from "react-router-dom";
import { CustomButton } from "../shared/shared_customs";

const GetStartedSection = () => {
  const navigate = useNavigate();
  return (
    <section className=" bg-white p-5 md:p-10 w-full text-primary-white">
      <div className="container flex flex-col gap-5 items-center justify-center">
        <h2 className="text-[#1A1A1A] font-semibold text-xl md:text-4xl">
          Join Foundry Platform{" "}
        </h2>
        <p className="text-[#575757]  text-xs md:text-sm font-normal md:text-center">
          We believe in the power of collaboration. Our Partner Program is
          designed for innovators and industry leaders ready to take the next
          step in growth. As a partner, you’ll gain exclusive access to our
          latest tools, expert training, and dedicated support, all aimed at
          driving success together.{" "}
        </p>
        <div className="flex gap-8">
          <CustomButton
            onPress={() => navigate("/onboarding")}
            className="bg-[#619B7D] text-white  md:flex"
          >
            Sign up <Icon icon="solar:arrow-right-outline" fontSize={20} />
          </CustomButton>
          <CustomButton
            onPress={() => navigate("/book-a-demo")}
            className="border border-[#619B7D] text-[#619B7D]  md:flex"
          >
            Book Demo <Icon icon="solar:arrow-right-outline" fontSize={20} />
          </CustomButton>
        </div>
      </div>
    </section>
  );
};

export default GetStartedSection;
