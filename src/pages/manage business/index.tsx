import { motion } from "framer-motion";
import { Icon } from "@iconify/react/dist/iconify.js";
import { Link } from "react-router-dom";

const Manage = () => {
  return (
    <div className="container pb-5 md:pb-10 justify-center items-center">
      <section className="text-center pb-10">
        <p className="text-sm text-secondary font-medium uppercase mb-5">
          Our SaaS Platform
        </p>
        <h1 className="font-medium text-3xl md:text-4xl lg:text-5xl md:pr-10 mb-10 md:mb-0">
          Foundry For Business
        </h1>
        <p className="text-secondary-black text-sm my-5">
          Our platform empowers key commercial enterprises across Africa with
          real-time, AI-driven decision-making, transforming industries from
          wholesale, supply chain and logistics, manufacturing, electric
          charging stations, and financial services.
        </p>
      </section>
      <div>
        <div className="grid md:grid-cols-2 gap-5 space-y-5 md:space-y-0">
          {[
            {
              description: `Access a suite of financial services, including digital accounts, lending, and payment processing, all within our platform. Streamline transactions, manage finances efficiently, and grow your business with our integrated financial solutions.`,
              linkTitle: "More About Finance",
              link: "/financial-services",
              title: "Financial Services"
            },
            {
              description: `Optimize your operations with our comprehensive business automation tools. From inventory and warehouse management to POS systems and workflow automation, our platform helps you reduce manual work, improve efficiency, and scale with ease.`,
              linkTitle: "More About Business Automation",
              link: "/business-automation",
              title: "Business Automation"
            }
          ].map((item, index) => (
            <motion.div
              key={index}
              className={`${
                index === 0 ? "bg-[#5F9779]" : "bg-[#929292]"
              } p-6 rounded-xl  flex flex-col justify-between`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + index * 0.2, duration: 0.5 }}
            >
              <h5 className="pb-4 font-medium text-lgs lg:text-2xl md:text-xl lg:h-[100px] text-[#E6E6E6] w-[90%]">
                {item.title}
              </h5>
              <h5 className="pb-4 font-light text-sm text-[#E6E6E6]">
                {item.description}
              </h5>
              <Link
                to={item.link}
                className="text-sm text-[#E6E6E6] font-light flex items-center gap-x-1 hover:opacity-80 group justify-between"
              >
                {item.linkTitle}
                <Icon
                  icon="iconamoon:arrow-right-2-duotone"
                  fontSize={20}
                  className="group-hover:translate-x-1 transition-all"
                />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Manage;
