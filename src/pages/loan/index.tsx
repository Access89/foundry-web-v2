import { motion } from "framer-motion";
import { InfoCard } from "./components/info_card";
import { LoanCalculator } from "./components/loan-calculator";

const Loan = () => {
  return (
    <div className="container py-5 md:py-10">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
      >
        <h2 className="text-center text-2xl md:text-4xl font-semibold">
          What type of loan are you looking for?
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mt-10 md:mt-16">
          {loan_options.map((item, index) => (
            <InfoCard key={index} {...item} />
          ))}
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="flex flex-col gap-5 md:gap-10 mt-10 md:mt-16"
      >
        <h2 className="text-center text-2xl md:text-4xl font-semibold">
          Explore your options
        </h2>

        <LoanCalculator />
      </motion.div>
    </div>
  );
};

export default Loan;

const loan_options = [
  {
    icon: "healthicons:money-bag", // Money icon for salary loan
    title: "Salary Loan",
    description:
      "Get the financial support you need with our flexible salary loan options from our partners.",
  },
  {
    icon: "si:briefcase-fill", // Business icon for business loan
    title: "Business Loan",
    description:
      "Get the financial support you need to grow your business with tailored loan options.",
  },
  {
    icon: "game-icons:push", // Truck icon for supplier credit
    title: "Supplier Credit",
    description:
      "Access financial solutions to support your supply chain and business operations.",
  },
  {
    icon: "mage:user-fill", // User icon for personal loan
    title: "Personal Loan",
    description:
      "Get the financial support you need for personal expenses with flexible loan options.",
  },
];
