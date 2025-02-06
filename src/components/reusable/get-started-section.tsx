import { Icon } from "@iconify/react/dist/iconify.js";
import { useNavigate } from "react-router-dom";
import { CustomButton } from "../shared/shared_customs";
import { motion } from "framer-motion";

const GetStartedSection = () => {
  const navigate = useNavigate();

  return (
    <motion.section
      whileInView={{ opacity: 1, y: 0 }}
      initial={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.5 }}
      className=" bg-white p-5 md:p-10 w-full text-primary-white"
    >
      <div className="container flex flex-col gap-5 items-center justify-center">
        <h2 className="text-[#1A1A1A] font-semibold text-xl md:text-4xl">
          Join Foundry Platform{" "}
        </h2>

        <p className="text-[#575757] text-xs md:text-sm font-normal md:text-center">
          We believe in the power of collaboration. Our Partner Program is
          designed for innovators and industry leaders ready to take the next
          step in growth. As a partner, you’ll gain exclusive access to our
          latest tools, expert training, and dedicated support, all aimed at
          driving success together.{" "}
        </p>

        <div className="flex gap-8">
          <motion.div
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.4 }}
          >
            <CustomButton
              onPress={() => {
                navigate("/onboarding");
              }}
              className="bg-primary text-white hidden md:flex"
            >
              Sign up <Icon icon="solar:arrow-right-outline" fontSize={20} />
            </CustomButton>
          </motion.div>

          <motion.div
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.4 }}
          >
            <CustomButton
              className="bg-[#EDF2EE] border-2 border-secondary text-primary"
              onPress={() => navigate("/book-a-demo")}
            >
              Book Demo
            </CustomButton>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default GetStartedSection;
