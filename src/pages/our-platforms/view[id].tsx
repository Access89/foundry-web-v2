import { useParams } from 'react-router-dom';
import { main_platform_data } from './data/platform.data';
import { Icon } from '@iconify/react/dist/iconify.js';
import { CustomButton } from '@/components/shared/shared_customs';
import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';

export interface LearnMoreItem {
  title?: string;
  description: string;
}

export interface SubComponentItem {
  title: string;
  description: string;
  icon: string;
  learn_more?: LearnMoreItem[];
}

export interface PlatformSubItem {
  title: string;
  description: string;
  detailedDescription?: string;
  link: string;
  bg: string;
  product_image?: string;
  sub_components_title?: string;
  sub_components?: SubComponentItem[];
  why_foundry?: {
    title: string;
    description: string;
  }[];
  features?: {
    title: string;
    goal: string;
    steps: string[];
  }[];
}

export interface PlatformItem {
  key: string;
  link: string;
  title: string;
  subitems: PlatformSubItem[];
}

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: 'easeOut' } },
};

const SubComponentsSection: React.FC<{ item: PlatformSubItem }> = ({
  item,
}) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleLearnMore = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="my-20 bg-primary/10 mt-40 pb-20">
      <div className="container flex flex-col gap-10 mx-auto py-20">
        <h3 className="text-5xl font-semibold my-2">
          {item.sub_components_title}
        </h3>

        <motion.div
          className="grid grid-cols-2 gap-6 my-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.3 }}
        >
          {item.sub_components?.map((subItem, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="flex flex-col gap-2 border p-6 rounded-xl bg-white shadow-sm"
            >
              <div className="flex gap-4 items-start">
                <p>
                  <Icon icon={subItem.icon} className="text-4xl text-primary" />
                </p>
                <div>
                  <h4 className="text-2xl font-semibold">{subItem.title}</h4>
                  <p className="text-base text-gray-600">
                    {subItem.description}
                  </p>
                </div>
              </div>

              {subItem?.learn_more && subItem.learn_more.length > 0 && (
                <button
                  onClick={() => toggleLearnMore(index)}
                  className="text-primary mt-2 text-start pl-8 text-sm underline hover:text-primary/80 transition"
                >
                  {openIndex === index ? 'Hide Details' : 'Learn More'}
                </button>
              )}

              {openIndex === index && (
                <div className="mt-2 pl-8">
                  {subItem?.learn_more?.map((learn, idx) => (
                    <div key={idx} className="text-sm text-gray-700 mb-2">
                      {learn.title && (
                        <p className="font-semibold">{learn.title}</p>
                      )}
                      <p>{learn.description}</p>
                    </div>
                  ))}
                </div>
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

const ViewPlatformSpecific = () => {
  const { name, subname } = useParams(); // e.g. 'business' + 'expense-management'
  const fullPath = `/our-platforms/${name}/${subname}`;
  // const navigate = useNavigate();

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
  const allSubitems: PlatformSubItem[] = main_platform_data.flatMap(
    (platform) =>
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
      <section className="container mx-auto flex justify-between items-center mb-6">
        <motion.div
          className="flex flex-col gap-4"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h1 className="text-5xl font-bold mb-10">{item.title}</h1>
          <p className="text-xl font-medium w-[25vw]">{item.description}</p>
          <p className="w-[25vw]">{item.detailedDescription}</p>
          <p>
            <CustomButton className="border-2 bg-primary text-white">
              Sign up
            </CustomButton>
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex items-center justify-center overflow-hidden rounded-md w-[20vw] h-[20vw] md:w-[40vw] md:h-[30vw]"
        >
          <img
            src={item?.product_image}
            width="100%"
            height="100%"
            alt={item.title}
            className="border rounded-md"
          />
        </motion.div>
      </section>

      <SubComponentsSection item={item} />

      {item?.why_foundry && item?.why_foundry?.length > 0 && (
        <section className="my-20 container mt-32 flex flex-col gap-5">
          <div className="flex items-center justify-center">
            {/* <p className="px-4 py-2 rounded-full bg-primary text-white text-center text-xs">
             BENEFITS
           </p> */}
          </div>
          <h3 className="text-5xl font-semibold my-2 text-center">
            Why Foundry stands out
          </h3>

          <div className="flex justify-between mt-4 gap-20">
            <p>
              <img src="https://placehold.co/500x550" className="rounded-md" />
            </p>
            <div className="flex flex-col gap-10 mt-16">
              {item?.why_foundry?.map((subItem, index) => (
                <motion.div
                  key={index}
                  className="flex gap-4 items-start"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: false, amount: 0.3 }}
                >
                  <Icon
                    icon="mingcute:arrow-right-line"
                    className="text-xl text-primary"
                  />
                  <div>
                    <h4 className="text-xl font-semibold">{subItem.title}</h4>
                    <p className="text-sm text-gray-600">
                      {subItem.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {scenarios && scenarios.length > 0 && (
        <section className="my-10 container mx-auto mt-32">
          <h3 className="text-5xl font-semibold my-4">User Scenarios</h3>

          {/* Tabs Header */}
          <div className="relative flex border-b border-gray-300 z-10 bg-white overflow-x-auto">
            {scenarios?.map((scenario, idx) => (
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
                <motion.div
                  key={idx}
                  className={`absolute ${positions[idx] ?? ''} w-52 text-sm`}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: idx * 0.1, duration: 0.4 }}
                >
                  {step}
                </motion.div>
              );
            })}
          </motion.div>
        </section>
      )}
    </div>
  );
};

export default ViewPlatformSpecific;
