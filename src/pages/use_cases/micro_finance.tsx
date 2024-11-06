import InfoSectionWithGoals from '@/components/reusable/info_section_with_goals';
import InfoSectionWithVideo from '@/components/reusable/info_section_with_videos';
import InfoSectionWithLinksAndCards from '@/components/reusable/infosection_links_cards';
import SalesSection from '@/components/reusable/sales_section';
import { Icon } from '@iconify/react/dist/iconify.js';
import { motion } from 'framer-motion';
import ReactPlayer from 'react-player';

const MicroFinance = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 100 }}
      transition={{ duration: 1.5 }}
    >
      <SalesSection
        title={'Stop playing catch up. Get ahead.'}
        linkText="Try the Foundry POS Demo"
        items={[
          {
            title: 'Customer Onboarding',
            image: '/images/MF_1.png',
          },
          {
            title: 'Loan Origination',
            image: '/images/MF_2.png',
          },
          {
            title: 'Customer Servicing',
            image: '/images/MF_3.png',
          },
        ]}
      />

      <InfoSectionWithGoals
        sectionTitle="Become the preferred consumer banking app"
        sectionDescription="Engage customers at every stage—from onboarding to loan
							applications, and everything in between. Foundry Digital is the
							ultimate platform with ready-to-use apps that you can customize to
							make your bank truly stand out. The results? Higher conversion
							rates, lifelong loyalty, and increased share of wallet."
        goalsTitle="Your Business Goals"
        solutionTitle="How to Solve It with Foundry"
        goals={goalsConst}
      />

      <InfoSectionWithLinksAndCards
        title="See Micro Credit success stories"
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

export default MicroFinance;

const goalsConst = [
  {
    title: 'Open accounts in minutes',
    desc: [
      'Make a lasting first impression on prospects with a digital account opening process that is exceptionally easy, fast, and completed in just a few minutes.',
      'No paperwork. No waiting. Foundry Digital Onboarding removes friction for both customers and employees during the account opening process, enabling you to acquire more customers and increase your market share at lower costs',
    ],
  },
  {
    title: 'Quick applications, fast approvals',
    desc: [
      'When applying for a loan, your customers expect seamless experiences. However, the application process is often tedious for them and costly for you.',
      'Foundry Digital Lending allows you to send personalized offers and enable frictionless product applications with pre-filled forms and pre-qualification capabilities.',
    ],
  },
  {
    title: 'empower customer and reduce cost to serve',
    desc: [
      'Many financial service institutions view digitalization as an expense. However, we see it as a strategic investment.',
      'Foundry Digital’s intuitive and comprehensive digital banking apps streamline the banking experience for your customers, promoting the adoption of digital channels and self-service features.',
      'Our digital employee apps enable rapid customer service and efficient case resolution, reducing reliance on physical branches. This leads to increased customer satisfaction at a lower cost for your organization',
    ],
  },
];
