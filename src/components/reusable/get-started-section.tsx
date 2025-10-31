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
      className=" bg-white p-5 md:p-10 w-full text-primary-white mb-10"
    >
      <div className="container flex flex-col gap-5 items-center justify-center">
        <h2 className="text-[#1A1A1A] font-bold text-3xl sm:text-3xl md:text-4xl text-center">
          <span className="text-[#ABABAB]">Join</span> Foundry Platform{" "}
        </h2>

        <motion.p 
          className="text-[#575757] text-2xl sm:text-lg md:text-xl font-normal text-center"
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          We believe in the power of collaboration. Our Partner Program is
          designed for innovators and industry leaders ready to take the next
          step in growth. As a partner, you'll gain exclusive access to our
          latest tools, expert training, and dedicated support, all aimed at
          driving success together. {" "}
        </motion.p>

        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 md:gap-8 w-full sm:w-auto items-stretch sm:items-center justify-center">
          <motion.div
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.4 }}
          >
            <CustomButton
              onPress={() => {
                navigate("/become-partner");
              }}
              className="bg-[#075056] text-base sm:text-lg text-white flex items-center gap-1 justify-center w-full sm:w-auto"
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
