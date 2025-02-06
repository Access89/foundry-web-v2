import { Icon } from "@iconify/react/dist/iconify.js";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const GreenSection = () => {
  return (
    <section className="bg-[#4C7F64] p-5 md:p-10 mt-10 w-full text-primary-white">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="font-medium text-xl lg:text-2xl mb-8 md:w-[65%]">
            Trade with confidence, from production quality assurance to purchase
            protection.
          </h2>
          <div className="grid md:grid-cols-2 gap-5 space-y-5 md:space-y-0">
            {[
              {
                description: `Connect with a diverse range of suppliers with third-party-verified credentials and capabilities. Look for the "Verified" logo to start sourcing from experienced suppliers your business can trust.`,
                linkTitle: "Visit Support",
                link: "",
              },
              {
                description: `Connect with a diverse range of suppliers with third-party-verified credentials and capabilities. Look for the "Verified" logo to start sourcing from experienced suppliers your business can trust.`,
                linkTitle: "Visit The Bottom Line",
                link: "",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                className="bg-[#5F9779] p-6 rounded-xl h-[300px] flex flex-col"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + index * 0.2, duration: 0.5 }}
              >
                <div className="mt-auto text-xl ">
                  <h5 className="pb-4 font-light text-sm text-[#E6E6E6]">
                    {item.description}
                  </h5>
                  <Link
                    to={item.link}
                    className="text-sm font-light flex items-center gap-x-1 hover:opacity-80 group justify-between"
                  >
                    {item.linkTitle}
                    <Icon
                      icon="iconamoon:arrow-right-2-duotone"
                      fontSize={20}
                      className="group-hover:translate-x-1 transition-all"
                    />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          className="md:flex grid-cols-[0.4fr,1fr] gap-x-10 my-16 text-sm"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >
          <div className="md:w-[60%]">
            <h5 className="font-medium text-xl lg:text-2xl mb-10 w-[100%]">
              Simplify ordering from search to fulfillment, all in one platform.
            </h5>

            {goalsConst.map((item, index) => (
              <motion.div
                key={index}
                className="flex flex-col gap-4 text-sm text-white border-b border-[#929292] mt-3 pb-3"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + index * 0.2, duration: 0.5 }}
              >
                <div className="flex items-center gap-x-2 mb-1.5 md:mb-0 text-white">
                  <span className="p-[0.1rem] px-[0.5rem] md:p-[0.2rem] md:px-[0.5rem] rounded-md border-1 border-white font-semibold">
                    {index + 1}
                  </span>
                  <p className="font-medium md:text-lg uppercase">
                    {item.title}
                  </p>
                </div>
                <p className="font-light text-xs md:text-sm ">{item.desc}</p>
              </motion.div>
            ))}
          </div>
          <div className="h-full md:w-[40%] flex justify-center items-center mt-20">
            <div className="bg-[#D9D9D9]/30 flex justify-center items-center w-full">
              {/* <img
              src="/icons/camera.svg"
              alt="camera"
              className="w-[5rem] h-[25rem]"
            /> */}
              <iframe
                src="https://www.youtube.com/embed/gL5JVyTBSXg?si=miYQF32DSLCEWaT_"
                title="YouTube video player"
                className="w-full h-[25rem]"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="my-16"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="mb-8 text-sm">
            <h5 className="font-medium text-xl lg:text-2xl mb-5 md:w-[68%]">
              Receive customized discounts, services, and tools tailored to your
              business stage.
            </h5>
            <p className="font-light text-lg text-[#F5F5F5]">
              Expand your business with the curated benefits of a free
              Foundry.com Membership. Whether you're a small business seeking
              essential sourcing tools or an established enterprise requiring
              advanced solutions for complex orders, we've got you covered.
            </p>
          </div>
          <div className="grid grid-cols-auto-fill-300 gap-5 space-y-5 md:space-y-0">
            {[
              {
                description: "For around the clock product support.",
                icon: "/icons/support.svg",
                linkTitle: "Visit Support",
                link: "",
              },
              {
                description:
                  "For exclusive insights from Foundry business experts.",
                icon: "/icons/trend.svg",
                linkTitle: "Visit The Bottom Line",
                link: "",
              },
              {
                description: "To connect with other business owners.",
                icon: "/icons/chat.svg",
                linkTitle: "Visit Foundry Hub",
                link: "",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                className="bg-[#5F9779] p-6 rounded-xl h-[300px] flex flex-col"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + index * 0.2, duration: 0.5 }}
              >
                <img src={item.icon} alt="support" className="w-[2rem]" />
                <div className="mt-auto text-xl max-w-[15rem]">
                  <h5 className="pb-4">{item.description}</h5>
                  <Link
                    to={item.link}
                    className="text-sm flex items-center gap-x-1 hover:opacity-80 group"
                  >
                    {item.linkTitle}
                    <Icon
                      icon="iconamoon:arrow-right-2-duotone"
                      fontSize={20}
                      className="group-hover:translate-x-1 transition-all"
                    />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const goalsConst = [
  {
    title: "Search for Matches",
    desc: "Enhance customer loyalty and value by leveraging centralized customer data and insights.",
  },
  {
    title: "identify the right one",
    desc: "Expand your revenue streams by exploring new avenues.Monitor",
  },
  {
    title: "pay with confidence",
    desc: "Get powerful insights to make confident decisions.",
  },
  {
    title: "Fulfill with transparency",
    desc: "Get powerful insights to make confident decisions.",
  },
  {
    title: "manage with ease",
    desc: "Get powerful insights to make confident decisions.",
  },
];

export default GreenSection;
