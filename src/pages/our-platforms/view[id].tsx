import { useParams, useNavigate } from 'react-router-dom';
import { main_platform_data } from './data/platform.data';
import { Icon } from '@iconify/react/dist/iconify.js';
import { CustomButton } from '@/components/shared/shared_customs';
import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';

const ViewPlatformSpecific = () => {
  const { name, subname } = useParams(); // e.g. 'business' + 'expense-management'
  const fullPath = `/our-platforms/${name}/${subname}`;
  const navigate = useNavigate();

  const [activeTab, setActiveTab] = useState(0);
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const [indicatorStyle, setIndicatorStyle] = useState({ left: 0, width: 0 });

  useEffect(() => {
    const currentTab = tabRefs.current[activeTab];
    if (currentTab) {
      setIndicatorStyle({
        left: currentTab.offsetLeft,
        width: currentTab.offsetWidth,
      });
    }
  }, [activeTab]);

  // Flatten all subitems with parent info
  const allSubitems = main_platform_data.flatMap((platform) =>
    platform.subitems.map((sub) => ({
      ...sub,
      parentKey: platform.key,
      parentTitle: platform.title,
    })),
  );

  const item = allSubitems.find((sub) => sub.link === fullPath);
  const scenarios = item?.features ?? [];

  if (!item) {
    return (
      <div className="p-8 text-center text-gray-500">
        No platform found for <code>{fullPath}</code>
      </div>
    );
  }

  return (
    <div className=" py-12">
      {/* <Link
        to={`/our-platforms/${name}`}
        className="text-primary hover:underline text-sm mb-1 inline-block"
      >
        ← Back to {item.parentTitle}
      </Link> */}

      <section className="container mx-auto flex justify-between items-center mb-6">
        <p className="flex flex-col gap-4">
          <h1 className=" text-5xl font-bold mb-10">{item.title}</h1>
          <p className="text-xl font-medium w-[30vw]">{item.description}</p>
          <p className="w-[30vw]">{item.detailedDescription}</p>
          <p>
            <CustomButton
              className="bg-[#EDF2EE] border-2 border-secondary text-primary"
              onPress={() => navigate('/book-a-demo')}
            >
              Book Demo
            </CustomButton>{' '}
          </p>
        </p>
        <p className="flex items-center justify-center overflow-hidden rounded-md w-[20vw] h-[20vw] md:w-[30vw] md:h-[30vw]">
          <img
            src={item.bg}
            width="100%"
            height="100%"
            alt={item.title}
            className=""
          />
        </p>
      </section>

      {/* <p className="py-4">{item.detailedDescription}</p> */}

      <section className="my-20 bg-primary/10  mt-40 pb-20">
        <div className="container  flex flex-col gap-10 mx-auto py-20">
          <h3 className="text-5xl font-semibold my-2">
            {item.sub_components_title}
          </h3>
          <div className="grid grid-cols-2 gap-6 my-4">
            {item?.sub_components?.map((subItem, index) => (
              <div key={index} className="flex gap-4 items-start">
                <p>
                  {' '}
                  <Icon icon={subItem.icon} className="text-4xl text-primary" />
                </p>
                <div className="">
                  <h4 className="text-2xl font-semibold">{subItem.title}</h4>
                  <p className="text-base text-gray-600">
                    {subItem.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="my-20 container mt-32 flex flex-col gap-5">
        <div className="flex items-center justify-center">
          {/* <p className="px-4 py-2 rounded-full bg-primary text-white text-center text-xs">
            BENEFITS
          </p> */}
        </div>
        <h3 className="text-5xl font-semibold my-2 ">Why Foundry stands out</h3>

        <div className="flex justify-between mt-4 gap-20">
          <p>
            <img src="https://placehold.co/500x550" className="rounded-md" />
          </p>
          <div className="flex flex-col gap-10 mt-16">
            {item?.why_foundry?.map((subItem, index) => (
              <div key={index} className="flex gap-4 items-start">
                <p>
                  <Icon
                    icon={'mingcute:arrow-right-line'}
                    className="text-xl text-primary"
                  />
                </p>
                <div className="">
                  <h4 className="text-xl font-semibold">{subItem.title}</h4>
                  <p className="text-sm text-gray-600">{subItem.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="my-10 container mx-auto mt-32">
        <h3 className="text-5xl font-semibold my-4">User Scenarios</h3>

        {/* Tabs Header */}
        <div className="relative flex border-b border-gray-300 z-10 bg-white overflow-x-auto">
          {scenarios.map((scenario, idx) => (
            <button
              key={idx}
              ref={(el) => (tabRefs.current[idx] = el)}
              onClick={() => setActiveTab(idx)}
              className={`flex-shrink-0 px-6 py-4 font-medium whitespace-nowrap transition-colors ${
                activeTab === idx ? 'text-primary' : 'text-gray-500'
              }`}
            >
              {scenario.title}
            </button>
          ))}
          <motion.div
            className="absolute bottom-0 h-1 bg-primary rounded-full"
            layout
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            style={{
              left: indicatorStyle.left,
              width: indicatorStyle.width,
            }}
          />
        </div>

        {/* Scenario Display */}
        <motion.div
          key={scenarios[activeTab]?.title}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="relative w-full h-[400px] mt-12"
        >
          <h4 className="text-xl font-semibold absolute left-4 top-4">
            {scenarios[activeTab]?.title}
          </h4>

          {/* Center Goal */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 rounded-full bg-white shadow-md flex items-center justify-center text-center text-sm font-semibold px-4">
            {scenarios[activeTab]?.goal}
          </div>

          {/* Radial Steps (manually positioned) */}
          {scenarios[activeTab]?.steps?.map((step, idx) => {
            const positions = [
              'top-10 left-1/2 -translate-x-1/2',
              'top-1/3 right-8',
              'bottom-1/4 right-6',
              'bottom-10 left-1/4',
              'top-1/3 left-6',
              'top-1/3 left-6', // duplicated — you may want to adjust this!
            ];

            return (
              <div
                key={idx}
                className={`absolute ${positions[idx] ?? ''} w-52 text-sm`}
              >
                {step}
              </div>
            );
          })}
        </motion.div>
      </section>
    </div>
  );
};

export default ViewPlatformSpecific;
