import { Icon } from "@iconify/react/dist/iconify.js";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const GreenSection = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className=" p-5 md:p-10  w-full text-primary-white mt-8 lg:mt-0"
    >
      <div className="container">
        <div>
          <p className="md:w-[40%] flex flex-col gap-4 pb-4">
            <h3 className="text-2xl md:text-3xl font-medium  w-full">
              <span className="text-black">Foundry </span>{" "}
              <p className="text-[#929292] hidden lg:flex">for Business</p>
              <span className="text-[#929292] lg:hidden ">for Business</span>
            </h3>
            <h3 className="font-normal text-sm  text-[#525866]">
              Our platform empowers key commercial enterprises across Africa
              with real-time, AI-driven decision-making, transforming industries
              from wholesale, supply chain and logistics, manufacturing,
              electric charging stations, and financial services.{" "}
            </h3>
          </p>
          <div className="grid md:grid-cols-2 gap-5 space-y-5 md:space-y-0">
            {[
              {
                description: `Strengthen your platform by integrating financial services like accounts and lending. Businesses embedded financial solutions designed for their core users, helping them attract more customers, generate additional revenue streams, and enhance the overall customer experience.`,
                linkTitle: "Visit Support",
                link: "",
                title: "Launch financial services on your platform"
              },
              {
                description: `Connect with a diverse range of suppliers with third-party-verified credentials and capabilities. Look for the "Verified" logo to start sourcing from experienced suppliers your business can trust.`,
                linkTitle: "Visit The Bottom Line",
                link: "",
                title:
                  "We can tailor the right mix of services and expertise to support any operations goal"
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                className="bg-[#5F9779] p-6 rounded-xl  flex flex-col justify-between"
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
                  className="text-sm font-light flex items-center gap-x-1 hover:opacity-80 group justify-between"
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

        <motion.div
          className="lg:flex grid-cols-[0.4fr,1fr] gap-x-10 my-16 text-sm"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >
          <div className="lg:w-[60%]">
            <h5 className="font-semibold text-2xl lg:text-4xl mb-10 lg:w-[70%] text-[#010101]">
              Full Stack B2B ecosystem, all in{" "}
              <span className="text-[#619B7D]">one platform.</span>
            </h5>

            {goalsConst.map((item, index) => (
              <motion.div
                key={index}
                className="flex flex-col gap-4 text-sm text-white border-b border-[#929292]/40 mt-3 pb-3"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + index * 0.2, duration: 0.5 }}
              >
                <div className="flex items-center gap-x-2 mb-1.5 md:mb-0 text-white">
                  <span className="p-[0.1rem] px-[0.6rem] md:p-[0.2rem] md:px-[0.6rem] rounded-md border-1 bg-[#619B7D] font-semibold">
                    {index + 1}
                  </span>
                  <p className="font-semibold md:text-lg uppercase text-[#010101]">
                    {item.title}
                  </p>
                </div>
                <p className="font-light text-xs md:text-sm text-[#929292]">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
          <div className="h-full lg:w-[40%] flex justify-center items-center mt-20">
            <div className="bg-[#D9D9D9] flex justify-center items-center w-full rounded-lg">
              {/* <img
              src="/icons/camera.svg"
              alt="camera"
              className="w-[5rem] h-[25rem]"
            /> */}
              <iframe
                src="https://www.youtube.com/embed/gL5JVyTBSXg?si=miYQF32DSLCEWaT_"
                title="YouTube video player"
                className="w-full h-[25rem] bg-[#D9D9D9] rounded-lg"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="mt-20 mb-10"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="mb-8 text-sm flex flex-col w-full items-center justify-center">
            <h5 className="font-semibold text-2xl lg:text-4xl mb-5 md:w-[68%] text-[#010101] text-center">
              <span className="text-[#ABABAB]">Collaborate</span> Within{" "}
              <p>The Ecosystem</p>
            </h5>
            {/* <p className="font-light text-base lg:text-lg text-[#F5F5F5]">
              Connect with industry peers, exchange ideas, and build strategic
              partnerships to drive innovation and growth
            </p> */}
          </div>
          <div className="grid grid-cols-auto-fill-300 gap-5 space-y-5 md:space-y-0">
            {[
              {
                description: "For around the clock product support.",
                icon: "/icons/support.svg",
                linkTitle: "Visit Support",
                link: ""
              },
              {
                description:
                  "For exclusive insights from Foundry business experts.",
                icon: "/icons/trend.svg",
                linkTitle: "Visit The Bottom Line",
                link: ""
              },
              {
                description: "To connect with other business owners.",
                icon: "/icons/chat.svg",
                linkTitle: "Learn More",
                link: ""
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                className="bg-[#5F9779] p-6 rounded-xl h-[300px] flex flex-col"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
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
    </motion.section>
  );
};

const goalsConst = [
  {
    title: "connect with verified players",
    desc: "Partner with reliable suppliers, service providers, and industry leaders to strengthen your business network"
  },
  {
    title: "Scale Your Business with capital",
    desc: "Expand your reach, increase efficiency, and drive sustainable growth with the right strategies and capital."
  },
  {
    title: "Gain Operational Insights",
    desc: "Leverage data-driven insights to monitor performance, streamline processes, and make informed decisions"
  },
  {
    title: "Optimize & Eliminate Waste",
    desc: "Improve efficiency, reduce costs, and enhance productivity by eliminating inefficiencies."
  },
  {
    title: "Enhance Customer Experience",
    desc: "Build lasting relationships by delivering exceptional service and personalized experiences."
  }
];

export default GreenSection;
