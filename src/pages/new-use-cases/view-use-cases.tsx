/* eslint-disable @typescript-eslint/no-explicit-any */
import SuccessStories, {
  SuccessStoriesProps,
} from '@/components/reusable/success-stories-section';
import { CustomButton } from '@/components/shared/shared_customs';
import { Icon } from '@iconify/react/dist/iconify.js';
import { useLocation, useNavigate } from 'react-router-dom';
import { UsecaseData } from './data';
import { useMemo } from 'react';
import { Image } from '@nextui-org/react';

const ViewUseCase = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const module: string = pathname.split('/')[2];
  const current = UsecaseData?.[module];

  const columnCount = useMemo(() => {
    const len = current?.['core-features']?.length ?? 1;
    if (len === 4) return 2;
    if (len % 3 === 0) return 3;
    return 2; // default to 2 if not 3-divisible
  }, [current]);

  return (
    <main className="">
      <section className="container">
        <section className="">
          <div className=" rounded-xl relative overflow-hidden flex flex-col">
            <div className="lg:px-28 md:pt-16 md:pb-28 px-5 flex flex-col-reverse md:flex-col">
              <div className="lg:max-w-lg md:max-w-xs mt-20">
                <h1 className="font-medium text-[#434343] text-2xl md:text-6xl w-[50vw]">
                  {current?.['title']}
                </h1>
                <p className="text-secondary-black text-base md:text-xl my-7">
                  {current?.['description']}
                </p>
                <div className="flex items-center gap-x-4">
                  <CustomButton
                    onPress={() => navigate('/book-a-demo')}
                    className="bg-primary text-white font-medium px-5 "
                  >
                    Book Demo
                  </CustomButton>
                </div>
              </div>
              <Image
                src="/images/LS_3.webp"
                alt="AI marketplace"
                // width={336}
                // height={458}
                classNames={{
                  wrapper:
                    'absolute right-10 rounded-none top-0 w-[5rem] h-[5rem] md:h-[20rem] md:w-[20rem]',
                  img: 'rounded-none',
                }}
              />
            </div>

            <div className="border-t md:border-0 p-4 mt-0 md:mt-16  flex items-center flex-col md:flex-row gap-5"></div>
          </div>
        </section>

        <section className="py-10 pt-28 lg:pt-20">
          <div className="text-center">
            <h2 className="font-medium text-3xl md:text-4xl ">Core Products</h2>
            <p className="text-primary lg:text-[1.2rem]  my-5">
              {current?.['features-description']}
            </p>
          </div>
          <div
            className={`grid grid-cols-1 md:grid-cols-${columnCount} gap-5 mt-10`}
          >
            {current?.['core-features']?.map((e: any, index: string) => {
              return (
                // <InfoCard
                //   title={e.title}
                //   icon={e.icon}
                //   description={e.description}
                //   key={e.title}
                // />
                <div
                  key={index}
                  className="bg-[#5F9779] text-white p-6 rounded-xl h-[300px] flex flex-col"
                >
                  {/* <img src={e.icon} alt="support" className="w-[2rem]" /> */}
                  <Icon
                    icon={e.icon}
                    fontSize={30}
                    className="group-hover:translate-x-1 transition-all text-white w-[2rem]"
                  />
                  <div className="mt-auto text-xl max-w-[15rem]">
                    <h5 className="pb-4">{e.description}</h5>
                    <p className="text-sm flex items-center gap-x-1 hover:opacity-80 group">
                      {e.title}
                      {/* <Icon
                        icon="iconamoon:arrow-right-2-duotone"
                        fontSize={20}
                        className="group-hover:translate-x-1 transition-all"
                      /> */}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* <section className=" lg:mt-8 lg:pt-5  ">
          <InfoSectionWithGoals
            sectionTitle={current?.title}
            sectionDescription={current?.description}
            goalsTitle="Your Business Goals"
            solutionTitle="How to Solve It with Foundry"
            goals={current?.goals?.map(
              (item: { title: string; description: string }) => ({
                title: item.title,
                desc: [item.description],
              }),
            )}
          />
        </section> */}

        <section className=" lg:mt-8 lg:pt-5 ">
          <SuccessStories {...exampleData} />
        </section>
      </section>

      {/* <InfoSectionWithVideo
        videoElement={
          <div className="bg-[#D9D9D9]/30 flex justify-center items-center h-[25rem]">
            <img src="/icons/camera.svg" alt="camera" className="w-[5rem]" />
          </div>
        }
      /> */}
    </main>
  );
};

// Example usage
const exampleData: SuccessStoriesProps = {
  title: 'Customer Success Stories',
  links: [
    { title: 'Read Foundry Reviews', link: '/foundry-reviews' },
    { title: 'View all Testimonials', link: '/testimonials' },
  ],
  cards: [
    {
      type: 'text',
      content:
        '"Stock loss has reduced and sales are booming. Foundry has grown and helped us implement all these different parts."',
      author: 'Cecilia Dekyi, Cepodek',
      buttonText: 'Read the case study',
    },
    {
      type: 'image',
      imageSrc: '/images/LS_4.webp', // Update to the correct image URL
      imageAlt: 'Afro woman in beauty store',
      overlayText: 'The importance of data to WeNaturals',
      overlayIcon: '/icons/play.svg',
    },
    {
      type: 'stats',
      title: 'SHIELD Microfinance',
      stats: [
        { value: '47%', label: 'revenue increase year over year' },
        { value: '30,000', label: 'transactions per month' },
      ],
      buttonText: 'See their Foundry Setup',
    },
  ],
};

// const InfoCard = ({
//   icon,
//   title,
//   description,
// }: {
//   icon: string;
//   title: string;
//   description: string;
// }) => {
//   return (
//     <div className="bg-secondary-light rounded-2xl p-4 lg:px-6 lg:py-6 w-full flex flex-col justify-between gap-6  duration-700  ">
//       <div className="flex flex-col gap-y-3 bg-primary/80 w-fit p-2 rounded-md">
//         <Icon icon={icon} fontSize={24} className="text-white" />
//       </div>

//       <div>
//         <h4 className="text-xl font-medium">{title}</h4>
//         <p className="text-[#575757] text-[0.9rem] leading-6 font-light">
//           {description}
//         </p>
//       </div>
//     </div>
//   );
// };

export default ViewUseCase;
