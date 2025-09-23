import { CustomButton } from '@/components/shared/shared_customs';
import { allPlans } from '@/pages/pricing';
import { Icon } from '@iconify/react/dist/iconify.js';
import { cn } from '@nextui-org/react';
import { useNavigate } from 'react-router-dom';

const appList = [
  {
    name: 'Foundry POS',
    image: '/icons/app_icons/icon.pos.png',
    description:
      'Easily start selling in person, online, by phone, or on the go',
    appstore_link: 'https://apps.apple.com/gh/developer/access89/id1781630972',
    playstore_link:
      'https://play.google.com/store/apps/developer?id=access+89&hl=en_US',
  },
  {
    name: 'Foundry Books',
    image: '/icons/app_icons/icon.books.png',
    description: 'Manage your books and finances with ease.',
    appstore_link: 'https://apps.apple.com/gh/developer/access89/id1781630972',
    playstore_link:
      'https://play.google.com/store/apps/developer?id=access+89&hl=en_US',
  },
];

const DownloadAppsAndOtherOffers = () => {
  const navigate = useNavigate();
  return (
    <section className="flex flex-col gap-10">
      <div className="text-center mb-8">
        <h2 className="text-2xl md:text-3xl font-semibold mb-4">
          Sign up is Successful!
        </h2>
        <p className="text-gray-600 mb-6">
          You have successfully signed up and are on the{' '}
          <span className="font-bold">FREE</span> plan. This gives you access to
          this suite of apps:
        </p>
      </div>

      <section>
        <section className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12 mx-auto container ">
          {appList.map((app, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md p-6 border"
            >
              <div className="text-center">
                <img
                  src={app.image}
                  alt={app.name}
                  className="w-20 h-20 mx-auto mb-4 rounded-lg"
                />
                <h3 className="text-xl font-semibold mb-2">{app.name}</h3>
                <p className="text-gray-600 mb-4">{app.description}</p>

                <div className="flex gap-3 justify-center">
                  <CustomButton
                    className="bg-black text-white px-4 py-2 rounded-lg flex items-center gap-2"
                    onClick={() => window.open(app.appstore_link, '_blank')}
                  >
                    <Icon icon="simple-icons:apple" className="w-5 h-5" />
                    App Store
                  </CustomButton>
                  <CustomButton
                    className="bg-green-600 text-white px-4 py-2 rounded-lg flex items-center gap-2"
                    onClick={() => window.open(app.playstore_link, '_blank')}
                  >
                    <Icon icon="simple-icons:googleplay" className="w-5 h-5" />
                    Play Store
                  </CustomButton>
                </div>
              </div>
            </div>
          ))}
        </section>
      </section>
      <section id="plans" className="py-16">
        <div className="container">
          <div>
            <h2 className="font-medium text-3xl lg:text-4xl mb-5">
              Looking for more?
            </h2>
            <p className="text-gray-600 mb-6">
              Compare features across all our plans.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:pt-8 pt-4">
            {allPlans.map((plan, index) => (
              <div
                key={index}
                className="p-4 bg-[#619B7D]/10 rounded-lg cursor-pointer hover:scale-[1.01] duration-300 flex flex-col"
              >
                <div className="mb-2">
                  <h3 className="text-[1.2rem] lg:text-[2rem] font-medium">
                    {plan.title}
                  </h3>
                  <p className="lg:text-[0.9rem] text-[0.8rem] font-light text-secondary-black">
                    {plan.description}
                  </p>
                </div>
                <div className="flex-grow">
                  <h6 className="font-semibold text-[1rem] mb-1">Features</h6>
                  <ul className="space-y-1 text-[0.8rem] lg:text-[0.9rem]">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <Icon icon={'uil:check'} className="text-primary" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mt-4">
                  <p>
                    <span className="lg:text-[2.3rem] text-[1.5rem] font-medium">
                      {plan.price}
                    </span>
                    {index !== 3 && <span className="text-sm">/mo</span>}
                  </p>
                  {index !== 0 && (
                    <CustomButton
                      className={cn(
                        'bg-primary text-white font-medium w-full mt-2 py-2 lg:py-4 lg:text-[0.9rem]',
                        index === 3 &&
                          'border-2 border-primary bg-transparent text-primary',
                      )}
                      onPress={() =>
                        // index === 3
                        //   ? navigate('/custom-plan')
                        //   : navigate('/onboarding')
                        {}
                      }
                    >
                      {index === 3 ? 'Contact Sales' : 'Request Plan'}
                    </CustomButton>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="hidden">
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
    </section>
  );
};

export default DownloadAppsAndOtherOffers;
