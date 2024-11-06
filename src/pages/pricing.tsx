import { CustomButton } from '@/components/shared/shared_customs';
import { Icon } from '@iconify/react/dist/iconify.js';
import React from 'react';
import ScrollIntoView from 'react-scroll-into-view';
import { Link } from 'react-router-dom';
import { Image, cn } from '@nextui-org/react';
import CustomFAQs from '@/components/shared/custom-faq';

const Pricing = () => {
  const [, setActiveHash] = React.useState('');
  const [selectedToolOption, setSelectedToolOption] = React.useState('All');

  React.useEffect(() => {
    const scrollActive = () => {
      const sections = document.querySelectorAll('section');
      sections.forEach((section) => {
        const top = section.offsetTop;
        const height = section.offsetHeight;
        if (window.scrollY >= top && window.scrollY < top + height) {
          const id = section.getAttribute('id');
          setActiveHash(String('#' + id));

          // window.scrollTo({ top: top, left: 0, behavior: 'smooth' });
        }
      });
    };
    window.addEventListener('scroll', scrollActive);
    return () => window.removeEventListener('scroll', scrollActive);
  }, []);

  return (
    <main>
      {/* hero */}
      <section className="container">
        <div className=" border-3 border-white rounded-xl  relative overflow-hidden flex flex-col">
          <div className="lg:px-28 md:pt-16 md:pb-28 px-5 flex flex-col-reverse md:flex-col">
            <div className="lg:max-w-lg md:max-w-xs">
              <h1 className="font-medium text-3xl md:text-4xl">
                Enabling every aspect of your business operations.
              </h1>
              <p className="text-secondary-black my-7">
                Work smarter, enhance efficiency through automation, and unlock
                new revenue streams with the software and hardware platform
                trusted by millions of businesses.
              </p>

              <div className="flex items-center gap-x-4">
                <CustomButton className="bg-transparent border-2 border-foundry-primary px-5 ">
                  Get Started
                </CustomButton>
                <CustomButton className="bg-foundry-primary text-white font-medium px-5 ">
                  Contact Sales
                </CustomButton>
              </div>
            </div>
            <Image
              src="/images/LS_3.webp"
              alt="AI marketplace"
              width={336}
              height={458}
              classNames={{
                wrapper: 'md:absolute right-10 rounded-none top-0',
                img: 'rounded-none',
              }}
            />
          </div>

          <div className="border-t p-4 mt-16 grid grid-cols-auto-fill-150 xl:grid-cols-auto-fill-200 gap-5">
            {navLinks.map((subNav, index) => (
              <CustomButton
                key={index}
                as={ScrollIntoView}
                onClick={() => setActiveHash(subNav.link)}
                selector={subNav.link}
                className="relative cursor-pointer overflow-hidden rounded-md text-foundry-secondary bg-transparent border-2 border-foundry-secondary font-medium flex items-center gap-x-2 transition-all custom-button hover:text-white"
              >
                {subNav.title}
                <Icon icon="iconamoon:arrow-down-2-light" fontSize={22} />
              </CustomButton>
            ))}
          </div>
        </div>
      </section>

      {/* Plans for every stage */}
      <section id="plans" className="py-16">
        <div className="container">
          <h2 className="font-medium text-3xl lg:text-4xl mb-5">
            Plans for every stage
          </h2>
          <div className="grid grid-cols-auto-fill-300 gap-5 space-y-5 md:space-y-0">
            {allPlans.map((plan, index) => (
              <div
                key={index}
                className="p-5 bg-[#619B7D]/10 rounded-xl flex flex-col"
              >
                <h3 className="text-lg font-medium">{plan.title}</h3>
                <p className="text-sm text-secondary-black my-2">
                  {plan.description}
                </p>

                <p>
                  <span className="text-2xl font-medium">{plan.price}</span>
                  {index !== 2 && '/mo'}
                </p>
                <p className="text-sm text-secondary-black my-4">
                  + processing fees
                </p>
                <CustomButton
                  className={cn(
                    'bg-foundry-primary text-white font-medium w-full mt-auto',
                    index === 2 &&
                      'border-2 border-primary bg-transparent text-foundry-primary'
                  )}
                >
                  Get Started
                </CustomButton>
              </div>
            ))}
          </div>

          <div>
            <h2 className="font-medium text-3xl lg:text-4xl mb-5 mt-10">
              Included with every Foundry account:
            </h2>
            <div className="grid grid-cols-auto-fill-300 gap-4 space-y-2 md:space-y-0">
              {Array.from({ length: 12 }).map((_, index) => (
                <div
                  key={index}
                  className="text-sm flex items-center gap-x-2 text-secondary-black"
                >
                  <Icon
                    icon="eva:checkmark-square-fill"
                    fontSize={20}
                    className="text-secondary"
                  />
                  <p>Real-time Updates</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Tools to mix & match */}
      <section id="explore-tools" className="py-16">
        <div className="container">
          <h2 className="font-medium text-3xl lg:text-4xl mb-5">
            Tools to mix & match
          </h2>
          <div className="flex gap-5 flex-wrap mb-10">
            {['All', 'Free', 'Commerce', 'Customers', 'Banking', 'Staff'].map(
              (item, index) => (
                <CustomButton
                  key={index}
                  disabled={selectedToolOption === item}
                  onPress={() => setSelectedToolOption(item)}
                  className={cn(
                    'relative cursor-pointer overflow-hidden rounded-md text-foundry-secondary bg-transparent border-2 border-foundry-secondary font-medium flex items-center gap-x-2 transition-all custom-button hover:text-white',
                    selectedToolOption === item &&
                      'text-white bg-foundry-secondary disabled:cursor-not-allowed'
                  )}
                >
                  {item}
                </CustomButton>
              )
            )}
          </div>
          <div className="grid grid-cols-auto-fill-300 gap-5 space-y-5 md:space-y-0">
            {Array.from({ length: 8 }).map((_, index) => (
              <div
                key={index}
                className="p-5 bg-[#619B7D]/10 rounded-xl flex flex-col"
              >
                <h3 className="text-lg font-medium">HR & Payroll</h3>
                <p className="text-sm text-secondary-black my-2">
                  Streamline the allocation of resources and time slots,
                  optimising bookings to minimise gaps and maximise utilisation
                </p>

                <p className="text-sm text-secondary-black mt-5">Starting at</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Processing Fees */}
      <section
        id="processing-fees"
        className=" bg-foundry-primary p-5 md:p-10 my-10 md:py-16 w-full text-primary-white"
      >
        <div className="container">
          <h2 className="font-medium text-3xl lg:text-4xl mb-5">
            Processing Fees
          </h2>
          <div className="grid grid-cols-auto-fill-200 gap-5">
            {Array.from({ length: 4 }).map((_, index) => (
              <div key={index}>
                <h2 className="text-xl font-medium mb-3">Title</h2>
                <p className="text-sm">
                  Streamline the allocation of resources and time slots,
                  optimising bookings to minimise gaps and maximise utilisation
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Plans by business Type */}
      <section id="business-type" className="container py-10 pt-28 lg:pt-20">
        <div className="flex justify-between">
          <h2 className="font-medium text-3xl md:text-4xl mb-5">
            Plans by business Type
          </h2>
        </div>
        <div className="md:grid md:grid-cols-auto-fill-300 gap-8 space-y-5 md:space-y-0">
          {[
            'Streamline the allocation of resources and time slots, optimising bookings to minimise gaps and maximise utilisation',
            'Streamline the allocation of resources and time slots, optimising bookings to minimise gaps and maximise utilisation',
            'Streamline the allocation of resources and time slots, optimising bookings to minimise gaps and maximise utilisation',
          ].map((item, index) => (
            <div key={index} className="space-y-2 text-sm">
              <div className="border-2 border-white p-3 rounded-xl h-[15rem]"></div>
              <h2 className="text-xl font-medium ">Title</h2>
              <p>{item}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Adaptable hardware solutions */}
      <section id="shop-hardware" className="py-10">
        <div className="container">
          <h2 className="font-medium text-3xl lg:text-4xl">
            Adaptable hardware solutions
          </h2>
          <div className="flex items-center gap-x-5 my-2">
            <Link
              to={''}
              className="flex items-center gap-x-2 text-foundry-primary group hover:opacity-80"
            >
              Discover every hardware and accessory available.
              <Icon
                icon="fluent-emoji-high-contrast:right-arrow"
                fontSize={19}
                className="text-secondary group-hover:translate-x-1  transition-all"
              />
            </Link>
          </div>

          <div className="md:grid md:grid-cols-auto-fill-300 gap-8 space-y-5 md:space-y-0 mt-5">
            {['Foundry Register', 'Foundry Terminal', 'Foundry KDS'].map(
              (item, index) => (
                <div
                  key={index}
                  className="overflow-hidden rounded-xl relative"
                >
                  <img
                    src="/images/LS_4.webp"
                    alt="a store with a woman in front of it"
                    className="h-full"
                  />
                  <div className="absolute bottom-5 left-5 right-5 rounded-md text-white bg-[#FAFAFA]/20 backdrop-blur-sm p-3">
                    <p className=" font-medium flex items-end gap-x-3">
                      {item}
                      <img
                        src="/icons/play.svg"
                        alt=""
                        className="w-[1rem] mb-1"
                      />
                    </p>
                    <p className="text-sm">maximise utilisation</p>
                  </div>
                </div>
              )
            )}
          </div>
        </div>
      </section>

      <section className="container md:grid grid-cols-[0.2fr,1fr] py-10 pb-16">
        <h2 className="font-medium text-3xl md:text-4xl mb-5">FAQ</h2>
        <CustomFAQs options={faqQuestion} />
      </section>
    </main>
  );
};

export default Pricing;

const faqQuestion = [
  {
    header: 'How does buy now, pay later work?',
    desc: [
      '	Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt corrupti commodi ipsa molestiae minima aliquid autem placeat voluptatem odit doloremque.',
    ],
  },
  {
    header: 'How does Foundry compare to other business software providers?',
    desc: [
      '	Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt corrupti commodi ipsa molestiae minima aliquid autem placeat voluptatem odit doloremque.',
    ],
  },
  {
    header: 'What kind of resources does Foundry provide businesses?',
    desc: [
      '	Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt corrupti commodi ipsa molestiae minima aliquid autem placeat voluptatem odit doloremque.',
    ],
  },
  {
    header: 'Does Foundry have tools for complex businesses?',
    desc: [
      '	Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt corrupti commodi ipsa molestiae minima aliquid autem placeat voluptatem odit doloremque.',
    ],
  },
  {
    header: 'What are merchant services?',
    desc: [
      '	Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt corrupti commodi ipsa molestiae minima aliquid autem placeat voluptatem odit doloremque.',
    ],
  },
  {
    header: 'Does Foundry have tools for professional services businesses?',
    desc: [
      '	Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt corrupti commodi ipsa molestiae minima aliquid autem placeat voluptatem odit doloremque.',
    ],
  },
];

const navLinks = [
  {
    title: 'See Plans',
    link: '#plans',
  },
  {
    title: 'Explore all tools',
    link: '#explore-tools',
  },
  {
    title: 'Processing  Fees',
    link: '#processing-fees',
  },
  {
    title: 'By business type',
    link: '#business-type',
  },
  {
    title: 'Shop hardware',
    link: '#shop-hardware',
  },
];

const allPlans = [
  {
    title: 'Free',
    description:
      'Optimize resources and time slots to optimise bookings to minimise gaps and maximise utilisation',
    price: '₵0',
  },
  {
    title: 'Plus',
    description:
      'Streamline the allocation of resources and time slots, optimising bookings to minimise gaps and maximise utilisation',
    price: '₵3000+',
  },
  {
    title: 'Premium',
    description:
      'Streamline the allocation of resources and time slots, optimising bookings to minimise gaps and maximise utilisation',
    price: 'Custom',
  },
];
