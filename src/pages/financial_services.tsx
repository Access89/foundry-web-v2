import BookADemo from '@/components/financial_services/book-demo-modal';
import InfoCard from '@/components/shared/info_card';
import CustomModal from '@/components/shared/modal';
import { CustomButton } from '@/components/shared/shared_customs';
import useScrollToSection from '@/hooks/useScrollToSection';
import { Icon } from '@iconify/react/dist/iconify.js';
import { useDisclosure } from '@nextui-org/react';
import { Image } from '@nextui-org/react';
import { useNavigate } from 'react-router-dom';

const FinancialServices = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const nav = useNavigate();
  useScrollToSection();
  return (
    <main className="container md:pt-5">
      <section className="border-3 border-white rounded-xl px-5 lg:px-28 md:pt-16 pb-28 md:mt-[4.5rem] mt-6 relative">
        <div className="absolute -bottom-24 lg:-bottom-10 left-1/2 transform -translate-x-1/2 w-[60%] md:w-[42%] mx-auto bg-white rounded-3xl p-4 grid grid-cols-auto-fill-200 gap-3">
          {[
            {
              title: 'Digital Banking',
              description:
                'A digital banking platform is an online or mobile application that allows customers to access banking services remotely',
            },
            {
              title: 'Embedded Finance',
              description:
                'Embedded finance integrates financial services into non-financial platforms and products',
            },
          ].map((item, index) => (
            <div key={index}>
              <h2>{item.title}</h2>
              <div className="w-[20%] h-0.5 bg-black my-1" />
              <p className="text-xs text-secondary-black">{item.description}</p>
            </div>
          ))}
        </div>

        <div className="my-auto pt-5 md:pt-16 mb-5 md:mb-0">
          <h1 className="font-medium text-3xl md:text-4xl md:pr-60 mb-8">
            Digital Finance is paving the way for embedded finance
          </h1>

          <div className="flex items-center gap-4">
            <CustomButton
              className="bg-foundry-primary text-white font-medium px-5 "
              onClick={() => {
                nav('#explore');
              }}
            >
              Explore <Icon icon="solar:arrow-right-outline" fontSize={20} />
            </CustomButton>

            <CustomButton
              className="bg-white text-foundry-primary font-medium px-5 "
              onClick={onOpen}
            >
              Book a Demo
            </CustomButton>
          </div>
        </div>
        <Image
          src="/images/FS_1.webp"
          width={256}
          height={500}
          alt="mobile device"
          classNames={{
            wrapper: 'hidden md:block absolute -right-3 -top-16',
          }}
        />
        <Image
          src="/images/FS_1.webp"
          width={208}
          height={400}
          alt="mobile device"
          classNames={{
            wrapper: 'md:hidden mx-auto mb-5',
          }}
        />
      </section>

      <section className="py-10 pt-28 lg:pt-20" id="explore">
        <div className="flex justify-between">
          <h2 className="font-medium text-3xl md:text-4xl mb-5">
            More from Financial Service
          </h2>
        </div>
        <div className="md:grid md:grid-cols-auto-fill-300 gap-5 space-y-5 md:space-y-0">
          {moreConstant.map((item, index) => (
            <InfoCard
              key={index}
              title={item.title}
              description={item.description}
              showLearnMore
              onLearnMoreClick={() => {
                nav(
                  `/financial-service/${item.title
                    .toLocaleLowerCase()
                    .split(' ')
                    .join('-')}`
                );
              }}
            />
          ))}
        </div>
      </section>
      <CustomModal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        header=""
        body={<BookADemo />}
      />
    </main>
  );
};

export default FinancialServices;

const moreConstant = [
  {
    title: 'Digital Onboarding',
    description:
      'Simplify and enhance onboarding for businesses and customers with our intuitive, user-friendly digital platform. ',
  },
  {
    title: 'Loan Origination',
    description:
      'Empower your business with our digital lending solution, providing your customers with quick and convenient access to the financing they need',
  },
  {
    title: 'Credit Scoring',
    description:
      'Transform your credit analysis with our Decision Module, providing fast and accurate loan assessments for quicker approvals and enhanced customer satisfaction.',
  },
  {
    title: 'Mobile Banking',
    description:
      'Enhance your banking experience with our user-friendly mobile application, bringing convenience to your fingertip',
  },
  {
    title: 'Sentinel',
    description:
      'Safeguard your businesses with robust regulatory compliance and fraud detection measures',
  },
  {
    title: 'Agency',
    description:
      'Expand banking access with our agent network platform, connecting underserved areas to essential financial services through local intermediaries',
  },
];
