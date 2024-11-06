import InfoSectionWithGoals from '@/components/reusable/info_section_with_goals';
import InfoSectionWithVideo from '@/components/reusable/info_section_with_videos';
import InfoSectionWithLinksAndCards from '@/components/reusable/infosection_links_cards';
import SalesSection from '@/components/reusable/sales_section';
import { Icon } from '@iconify/react/dist/iconify.js';
import { motion } from 'framer-motion';
import ReactPlayer from 'react-player';

const CreditUnions = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 100 }}
      transition={{ duration: 1.5 }}
    >
      <SalesSection
        title={'Credit Unions'}
        linkText="Try the Foundry POS Demo"
        items={[
          {
            title: 'One true platform',
            image: '/images/MF_1.png',
          },
          {
            title: 'People-centric Experiences',
            image: '/images/MF_2.png',
          },
          {
            title: 'Flexibility to innovate',
            image: '/images/MF_3.png',
          },
        ]}
      />

      <InfoSectionWithGoals
        sectionTitle="Better Serve and Engage Your Members"
        sectionDescription="Empower your community with people-centric digital banking services. The result? Increased loyalty, retention, and satisfaction."
        goalsTitle="Your Business Goals"
        solutionTitle="How to Solve It with Foundry"
        goals={goalsConst}
      />

      <InfoSectionWithLinksAndCards
        title="See Micro Credit Success Stories"
        links={[
          { title: 'Read Foundry Reviews', link: '' },
          { title: 'View all Testimonials', link: '' },
        ]}
        cards={[
          {
            type: 'text',
            content: (
              <>
                <p className="text-2xl md:max-w-[15rem]">
                  "Stock loss has reduced and sales are booming. Foundry has
                  grown and helped us implement all these different parts."
                </p>
                <div className="mt-auto">
                  <p className="text-xs mt-7 mb-10">Cecilia Dekyi, Cepodek</p>
                  <button className="flex items-center gap-x-2">
                    Read the case study
                    <Icon
                      icon="fluent-emoji-high-contrast:right-arrow"
                      fontSize={19}
                    />
                  </button>
                </div>
              </>
            ),
          },
          {
            type: 'image',
            content: (
              <>
                <img
                  src="/images/LS_4.webp"
                  alt="a store with a woman in front of it"
                  className="h-full"
                />
                <div className="absolute bottom-5 left-5 right-5 rounded-md bg-[#FAFAFA]/20 backdrop-blur-sm p-3">
                  <p className="text-white font-medium flex items-end max-w-[10.5rem]">
                    The importance of data to WeNaturals
                    <img
                      src="/icons/play.svg"
                      alt=""
                      className="w-[1rem] mb-1"
                    />
                  </p>
                </div>
              </>
            ),
          },
          {
            type: 'text',
            content: (
              <div className="md:max-w-[15rem] flex flex-col h-full">
                <p className="text-3xl font-medium">SHIELD Microfinance</p>
                <p className="text-2xl mt-5 mb-7">47%</p>
                <p className="text-sm my-5">revenue increase year over year</p>
                <p className="text-base mt-10">30,000</p>
                <div className="mt-auto">
                  <p className="text-sm mb-8">transactions per month</p>
                  <button className="flex items-center gap-x-2">
                    See their Foundry Setup
                    <Icon
                      icon="fluent-emoji-high-contrast:right-arrow"
                      fontSize={19}
                    />
                  </button>
                </div>
              </div>
            ),
          },
        ]}
      />

      <InfoSectionWithVideo
        videoElement={
          <div className="w-full bg-gray-100  h-[25rem]">
            <ReactPlayer
              width={'100%'}
              height={'100%'}
              url="https://www.youtube.com/watch?v=1R2PRHEsezg"
            />
          </div>
        }
      />
    </motion.section>
  );
};

export default CreditUnions;

const goalsConst = [
  {
    title: 'Empowered members',
    desc: [
      'Expand your revenue streams by exploring new avenues.Monitor profit margins through inventory management and reporting functionalities.Synchronize orders, products, and stock levels seamlessly between your POS system and website.',
    ],
  },
  {
    title: 'Quick applications, fast approvals',
    desc: [
      'Expand your revenue streams by exploring new avenues.Monitor profit margins through inventory management and reporting functionalities.Synchronize orders, products, and stock levels seamlessly between your POS system and website.',
    ],
  },
  {
    title: 'empower customer and reduce cost to serve',
    desc: [
      'Expand your revenue streams by exploring new avenues.Monitor profit margins through inventory management and reporting functionalities.Synchronize orders, products, and stock levels seamlessly between your POS system and website.',
    ],
  },
];
