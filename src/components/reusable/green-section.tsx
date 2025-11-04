import { Icon } from '@iconify/react/dist/iconify.js';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import SpotifyEpisodeList from './spotify-episode-list';

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
      link: 'our-platforms/finance',
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
      link: '/our-platforms/trade',
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
      className=" p-5 md:p-10 w-full text-primary-white mt-6 lg:mt-0"
    >
      <div className="container" id="greensection">

        <div className="mt-10  ">
          <div className="mb-6 text-sm flex flex-col w-full items-center justify-center">
            <h5 className="font-semibold text-xl sm:text-2xl lg:text-4xl md:mb-5 max-w-[90%] md:max-w-[68%] text-[#010101] text-center leading-snug">
              <span className="text-[#ABABAB]">Collaborate</span> Within
              <span className="block">The Ecosystem</span>
            </h5>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-auto-fill-300 gap-3 md:gap-5">
            {items.map((e: any, index: number) => (
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
                  className={`${colors[index % colors.length]} p-5 sm:p-6 rounded-xl min-h-[220px] sm:h-[280px] md:h-[300px] flex flex-col transition-all duration-300 hover:shadow-xl`}
                >
                  <div className="mt-auto text-lg sm:text-xl max-w-[22rem]">
                    <h5 className={`pb-3 sm:pb-4 ${e.titleClass} ${e.textColor}`}>{e.description}</h5>
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
          className="grid lg:flex grid-cols-1 gap-y-10 lg:gap-y-0 lg:grid-cols-[0.4fr,1fr] gap-x-6 lg:gap-x-16 my-12 md:my-16 text-sm"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >
          <div className="lg:w-[60%] lg:order-1">
            <h5 className="font-semibold text-xl sm:text-2xl lg:text-4xl mb-6 sm:mb-8 mt-4 sm:mt-8 w-full text-[#010101] text-left">
              SME Voice by Foundry is the podcast where Africa's
              <span className="block sm:inline"> small and medium enterprises </span>
              <span className="text-[#075056]">get heard.</span>
            </h5>

        {/* Spotify Section */}
            <motion.div
              className="flex flex-col gap-4 mt-3"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h6 className="font-semibold text-lg sm:text-xl md:text-2xl text-[#010101]">Latest Episodes</h6>
              <div className="w-full">
                <SpotifyEpisodeList
                  max={4}
                  compact={true}
                  episodeUrls={[
                    'https://open.spotify.com/episode/2Lex8TchzmPPBCkkbxdNyO?si=550deccc6d0d4edc',
                    'https://open.spotify.com/episode/4uEPKzMTk3DrY0UysWO21q?si=0770801ffdf044e0',
                    'https://open.spotify.com/episode/0ImgWy9bErBARwJ9q1YR0H?si=44a344ca988d4000',
                    // 'https://open.spotify.com/episode/1rVCmJghbeRgoLJfSn9jXJ?si=d39e98aae3d1407f',
                  ]}
                />
              </div>
            </motion.div>
          </div>
          <div className="h-full lg:w-[40%] lg:order-2 flex flex-col justify-end items-center mt-6 sm:mt-24 lg:mt-[15rem]">
            <div className="bg-[#D9D9D9] flex justify-center items-center w-full rounded-lg">
              {/* <img
              src="/icons/camera.svg"
              alt="camera"
              className="w-[5rem] h-[25rem]"
            /> */}
              <img
                src="/images/foundry_stars/SMEVoice.jpeg"
                alt="SME Voice"
                title="SME Voice"
                className="w-full h-auto max-h-[60rem] sm:max-h-[28rem] bg-[#D9D9D9] rounded-lg cursor-pointer hover:opacity-90 transition-opacity object-cover"
                onClick={() => window.open('https://open.spotify.com/show/36anmwQqvL43s64Kzcx987?si=c5d95c2d7a9a415f/', '_blank', 'noopener,noreferrer')}
              
              />
            </div>
            <motion.button
              className="mt-6 sm:mt-4 bg-white text-[#075056] px-6 sm:px-8 py-3 rounded-lg font-semibold text-base sm:text-lg transition-all duration-300 flex items-center gap-2 shadow-lg hover:shadow-xl relative overflow-hidden"
              onClick={() => window.open('https://open.spotify.com/show/36anmwQqvL43s64Kzcx987?si=c5d95c2d7a9a415f/', '_blank', 'noopener,noreferrer')}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              whileHover={{ 
                scale: 1.05,
                y: -2,
                transition: { duration: 0.2 }
              }}
              whileTap={{ 
                scale: 0.95,
                transition: { duration: 0.1 }
              }}
              animate={{
                boxShadow: [
                  "0 10px 25px rgba(0,0,0,0.1)",
                  "0 15px 35px rgba(7, 80, 86, 0.2)",
                  "0 10px 25px rgba(0,0,0,0.1)"
                ]
              }}
           
        
            >
              <motion.span
                className="relative z-10"
                whileHover={{ x: 2 }}
                transition={{ duration: 0.2 }}
              >
                Listen More
              </motion.span>
              <motion.div
                whileHover={{ 
                  rotate: 360,
                  scale: 1.1
                }}
                transition={{ duration: 0.3 }}
              >
                <Icon
                  icon="mdi:spotify"
                  fontSize={22}
                  className="text-[#075056]"
                />
              </motion.div>
              
              {/* Animated background gradient */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-[#075056]/10 to-transparent"
                initial={{ x: "-100%" }}
                whileHover={{ x: "100%" }}
                transition={{ duration: 0.6 }}
              />
            </motion.button>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

// const goalsConst = [
//   {
//     title: 'connect with verified players',
//     desc: 'Partner with reliable suppliers, service providers, and industry leaders to strengthen your business network',
//   },
//   {
//     title: 'Scale Your Business with capital',
//     desc: 'Expand your reach, increase efficiency, and drive sustainable growth with the right strategies and capital.',
//   },
//   {
//     title: 'Gain Operational Insights',
//     desc: 'Leverage data-driven insights to monitor performance, streamline processes, and make informed decisions',
//   },
//   {
//     title: 'Optimize & Eliminate Waste',
//     desc: 'Improve efficiency, reduce costs, and enhance productivity by eliminating inefficiencies.',
//   },
//   {
//     title: 'Enhance Customer Experience',
//     desc: 'Build lasting relationships by delivering exceptional service and personalized experiences.',
//   },
// ];

export default GreenSection;
