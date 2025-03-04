import { useNavigate } from "react-router-dom";
import { CustomButton } from "../shared/shared_customs";
import { motion } from "framer-motion";
import { Icon } from "@iconify/react/dist/iconify.js";

const GetStartedSection = () => {
  const navigate = useNavigate();

  return (
    <motion.section
      whileInView={{ opacity: 1, y: 0 }}
      initial={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.5 }}
      className=" bg-white p-5 md:p-10 w-full text-primary-white  mb-10"
    >
      <div className="container flex flex-col gap-5 items-center justify-center">
        <h2 className="text-[#1A1A1A] font-semibold text-2xl md:text-4xl">
          <span className="text-[#ABABAB]">Join</span> Foundry Platform{" "}
        </h2>

        <p className="text-[#575757] text-sm  font-normal md:text-center">
          We believe in the power of collaboration. Our Partner Program is
          designed for innovators and industry leaders ready to take the next
          step in growth. As a partner, you’ll gain exclusive access to our
          latest tools, expert training, and dedicated support, all aimed at
          driving success together.{" "}
        </p>

        <div className="flex gap-4 md:gap-8">
          <motion.div
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.4 }}
          >
            <CustomButton
              onPress={() => {
                navigate("/onboarding");
              }}
              className="bg-[#619B7D] text-white flex items-center gap-1"
            >
              Become a Partner <Icon icon="mingcute:arrow-right-line" />
            </CustomButton>
          </motion.div>

          {/* <motion.div
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
          </motion.div> */}
        </div>
      </div>
    </motion.section>
  );
};

export default GetStartedSection;
