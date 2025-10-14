import { Icon } from '@iconify/react/dist/iconify.js';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const GreenSection = () => {
  const colors = ['bg-[#16232A]', 'bg-[#E4EEF0]', 'bg-[#075056]'];
  const items = [
    {
      title: 'Business',
      description:
        'Optimize operations with tools for inventory, payroll, and analytics to run your business.',
      icon: 'streamline-cyber:business-chart-4',
      linkTitle: 'Learn More',
      link: 'our-platforms/business',
      // per-card styling
      textColor: 'text-white',
      fontClass: 'font-sans',
      titleClass: 'font-semibold text-xl',
      descClass: 'text-sm text-white/90',
    },
    {
      title: 'Finance',
      description:
        'Access credit, manage disbursements, and embed financial services.',
      // icon: 'material-symbols-light:money-bag-outline',
      linkTitle: 'Learn More',
      link: 'financial-services',
      textColor: 'text-black',
      fontClass: 'font-serif',
      titleClass: 'font-medium text-lg',
      descClass: 'text-sm text-black/90',
    },
    {
      title: 'Trade',
      description:
        'Streamline procurement, logistics, and B2B transactions end-to-end.',
      // icon: 'mdi-light:truck',
      linkTitle: 'Learn More',
      link: 'logistics-supply-chain',
      textColor: 'text-white',
      fontClass: 'font-sans',
      titleClass: 'font-semibold text-xl',
      descClass: 'text-sm text-white/90',
    },
  ];
  return (
    <motion.section
      // initial={{ opacity: 0, y: 50 }}
      // whileInView={{ opacity: 1, y: 0 }}
      // transition={{ duration: 0.8, ease: "easeOut" }}
      className=" p-5 md:p-10  w-full text-primary-white mt-8 lg:mt-0"
    >
      <div className="container" id="greensection">

        <div className="mt-10  ">
          <div className="mb-8 text-sm flex flex-col w-full items-center justify-center">
            <h5 className="font-semibold text-2xl lg:text-4xl  md:mb-5 md:w-[68%] text-[#010101] text-center">
              <span className="text-[#ABABAB]">Collaborate</span> Within{' '}
              <p>The Ecosystem</p>
            </h5>
          </div>
          <div className="grid grid-cols-auto-fill-300 gap-1 md:gap-5  md:space-y-0">
            {items.map((e, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ 
                  duration: 0.6, 
                  delay: index * 0.2,
                  ease: "easeOut"
                }}
                whileHover={{ 
                  scale: 1.05, 
                  y: -10,
                  transition: { duration: 0.3 }
                }}
                viewport={{ once: true, amount: 0.3 }}
              >
                <Link
                  to={e.link}
                  className={`${colors[index % colors.length]} p-6 rounded-xl h-[300px] flex flex-col transition-all duration-300 hover:shadow-xl`}
                >
                  <div className="mt-auto text-xl max-w-[15rem]">
                    <h5 className={`pb-4 ${e.titleClass} ${e.textColor}`}>{e.description}</h5>
                    <p className={`text-sm flex items-center gap-x-1 hover:opacity-80 group ${e.descClass} ${e.textColor}`}>
                      {e.title}
                      <Icon
                        icon="iconamoon:arrow-right-2-duotone"
                        fontSize={20}
                        className={`group-hover:translate-x-1 transition-all ${e.textColor}`}
                      />
                    </p>
                  </div>
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
              Full Stack B2B ecosystem, all in{' '}
              <span className="text-[#075056]">one platform.</span>
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
                  <span className="p-[0.1rem] px-[0.6rem] md:p-[0.2rem] md:px-[0.6rem] rounded-md border-1 bg-[#075056] font-semibold">
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
      </div>
    </motion.section>
  );
};

const goalsConst = [
  {
    title: 'connect with verified players',
    desc: 'Partner with reliable suppliers, service providers, and industry leaders to strengthen your business network',
  },
  {
    title: 'Scale Your Business with capital',
    desc: 'Expand your reach, increase efficiency, and drive sustainable growth with the right strategies and capital.',
  },
  {
    title: 'Gain Operational Insights',
    desc: 'Leverage data-driven insights to monitor performance, streamline processes, and make informed decisions',
  },
  {
    title: 'Optimize & Eliminate Waste',
    desc: 'Improve efficiency, reduce costs, and enhance productivity by eliminating inefficiencies.',
  },
  {
    title: 'Enhance Customer Experience',
    desc: 'Build lasting relationships by delivering exceptional service and personalized experiences.',
  },
];

export default GreenSection;
