import { CustomButton } from '@/components/shared/shared_customs';
import { allPlans } from '@/pages/pricing';
import { Icon } from '@iconify/react/dist/iconify.js';
import { cn } from '@nextui-org/react';
import { useLocation } from 'react-router-dom';
// import { useNavigate } from 'react-router-dom';

const appList = [
  {
    name: 'Foundry POS',
    qr_code: 'https://www.avasam.com/wp-content/uploads/2019/10/qr-sample.png',
    image: '/icons/app_icons/icon.pos.png',
    description:
      'Easily start selling in person, online, by phone, or on the go',
    appstore_link: 'https://apps.apple.com/gh/developer/access89/id1781630972',
    playstore_link:
      'https://play.google.com/store/apps/developer?id=access+89&hl=en_US',
    displayImage:
      'https://img.freepik.com/free-photo/close-up-hand-holding-phone_23-2148883491.jpg?semt=ais_hybrid&w=740&q=80',
    use_cases_list: [
      'Fashion, electronics, grocery, convenience shops',
      'Chain stores, local provision shops',
      'Chemists, medical supply stores',
      'Restaurants, fast food joints, cafes, bars, food trucks',
      'Stockists, FMCG distributors',
      'Hotels, motels, nightclubs, gyms',
      'Auto parts stores, filling stations',
      'MoMo agents, remittance shops, bill payment agents',
    ],
  },
  {
    name: 'Foundry Books',
    qr_code: 'https://www.avasam.com/wp-content/uploads/2019/10/qr-sample.png',
    image: '/icons/app_icons/icon.books.png',
    description: 'Manage your books and finances with ease.',
    appstore_link: 'https://apps.apple.com/gh/developer/access89/id1781630972',
    playstore_link:
      'https://play.google.com/store/apps/developer?id=access+89&hl=en_US',
    displayImage:
      'https://img.freepik.com/free-photo/close-up-hand-holding-phone_23-2148883491.jpg?semt=ais_hybrid&w=740&q=80',
    use_cases_list: [
      'Consultants, designers, tutors, artisans',
      'Boutiques, cosmetics shops, corner shops, general stores',
      'Hair salons, barber shops, spas, mechanics, cleaning services',
      'Caterers, small restaurants, bakeries, food vendors',
      'Wholesalers, distributors, suppliers',
      'Law firms, audit firms, small clinics, private schools',
      'E-commerce sellers, social media sellers (Instagram, WhatsApp shops)',
      'Small lending operations, susu collectors, savings groups',
    ],
  },
];

const InfoSection = () => {
  const location = useLocation();
  const { business_owner } = location.state?.payload || {};

  return (
    <div className="bg-primary/10 border-l-4 border-primary p-4 md:p-6 mb-8">
      <div className="flex items-center gap-3">
        <Icon
          icon="eos-icons:loading"
          className="text-primary text-2xl animate-spin"
        />
        <div>
          <h3 className="md:text-lg text-base font-semibold text-primary">
            Setting things up for you...
          </h3>
          <p className="text-gray-600 text-xs md:text-base">
            Congratulations {business_owner || 'User'}! We're preparing your
            Foundry experience.
          </p>
        </div>
      </div>
    </div>
  );
};

// Smart app selection based on business type
const getRecommendedApp = (businessType: string) => {
  if (!businessType) return null;

  const lowerBusinessType = businessType.toLowerCase();

  // Check which app's use_cases_list contains the business type
  for (const app of appList) {
    const hasMatch = app.use_cases_list.some(
      (useCase) =>
        useCase.toLowerCase().includes(lowerBusinessType) ||
        lowerBusinessType.includes(useCase.toLowerCase()),
    );

    if (hasMatch) {
      return app;
    }
  }

  // Default to Foundry Books if no specific match
  return appList[1]; // Foundry Books
};

const RecommendedAppSection = () => {
  const location = useLocation();
  const { business_type } = location.state?.payload || {};
  const recommendedApp = getRecommendedApp(business_type);

  if (!recommendedApp) return null;

  return (
    <section className="mb-12 mx-4 flex items-center justify-between">
      <div className=" mb-8 w-[35%]">
        <h2 className="text-2xl md:text-6xl font-semibold mb-4">
          {recommendedApp.name}
        </h2>
        <p className="text-gray-600 mb-6 text-base md:text-lg">
          {recommendedApp.description}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
          <div className="rounded-lg bg-primary-light p-4 md:col-span-2 flex justify-between items-center cursor-pointer group">
            <p className="flex flex-col justify-between  h-full group-hover:text-primary transition-colors">
              <p></p>
              <p className=" ">Scan to download</p>
            </p>
            <p>
              <img
                src={recommendedApp.qr_code}
                alt={recommendedApp.name}
                className="w-32 h-32 mx-auto group-hover:scale-105 transition-transform rounded-lg"
              />
            </p>
          </div>
          {/* Download Buttons */}
          {/* App Store Button */}
          <div
            className="bg-primary-light rounded-2xl p-4 cursor-pointer  transition-colors group"
            onClick={() => window.open(recommendedApp.appstore_link, '_blank')}
          >
            <div className="flex flex-col justify-between gap-10">
              <div className="flex items-center justify-between">
                <Icon
                  icon="simple-icons:apple"
                  className="text-primary text-3xl"
                />
                <Icon
                  icon="material-symbols:arrow-outward"
                  className="text-primary text-xl group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
                />
              </div>
              <div>
                <p className="">Open AppStore</p>
              </div>
            </div>
          </div>

          {/* Google Play Button */}
          <div
            className="bg-primary-light rounded-2xl p-4 cursor-pointer  transition-colors group"
            onClick={() => window.open(recommendedApp.playstore_link, '_blank')}
          >
            <div className="flex flex-col justify-between gap-10">
              <div className="flex items-center justify-between">
                <Icon
                  icon="simple-icons:googleplay"
                  className="text-primary text-3xl"
                />
                <Icon
                  icon="material-symbols:arrow-outward"
                  className="text-primary text-xl group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
                />
              </div>
              <div>
                <p className=""> Open Google Play</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-[65%]">
        <img
          src={recommendedApp.displayImage}
          alt={recommendedApp.name}
          className="w-full h-full mx-auto mb-6 rounded-lg"
        />
      </div>
    </section>
  );
};

const FreePlanSection = () => {
  return (
    <section className="mb-12">
      <div className="text-center mb-8">
        <h2 className="text-2xl md:text-3xl font-semibold mb-4">
          You're on the Free Plan
        </h2>
        <p className="text-gray-600 mb-6">
          Enjoy access to our core features. Upgrade anytime for more
          capabilities.
        </p>
      </div>

      <div className="bg-gradient-to-r from-primary/10 to-primary/5 rounded-lg p-8 border border-primary/20">
        <div className="text-center">
          <Icon
            icon="mdi:gift"
            className="text-primary text-4xl mx-auto mb-4"
          />
          <h3 className="text-xl font-semibold mb-2">Free Tier Benefits</h3>
          <ul className="text-left max-w-md mx-auto space-y-2">
            <li className="flex items-center gap-2">
              <Icon icon="uil:check" className="text-primary" />
              <span>Basic POS functionality</span>
            </li>
            <li className="flex items-center gap-2">
              <Icon icon="uil:check" className="text-primary" />
              <span>Essential bookkeeping features</span>
            </li>
            <li className="flex items-center gap-2">
              <Icon icon="uil:check" className="text-primary" />
              <span>Customer management</span>
            </li>
            <li className="flex items-center gap-2">
              <Icon icon="uil:check" className="text-primary" />
              <span>Basic reporting</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

const DownloadAppsAndOtherOffers = () => {
  //   const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Setup message at top */}
      <InfoSection />

      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Recommended app based on business type */}
        <RecommendedAppSection />

        {/* Free plan information */}
        <FreePlanSection />

        {/* All available apps */}
        <section className="mb-12">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-semibold mb-4">
              All Available Apps
            </h2>
            <p className="text-gray-600 mb-6">
              Access our complete suite of business management tools
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {appList.map((app, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md p-6 border hover:shadow-lg transition-shadow"
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
                      className="bg-black text-white px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-gray-800 transition-colors"
                      onClick={() => window.open(app.appstore_link, '_blank')}
                    >
                      <Icon icon="simple-icons:apple" className="w-5 h-5" />
                      App Store
                    </CustomButton>
                    <CustomButton
                      className="bg-green-600 text-white px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-green-700 transition-colors"
                      onClick={() => window.open(app.playstore_link, '_blank')}
                    >
                      <Icon
                        icon="simple-icons:googleplay"
                        className="w-5 h-5"
                      />
                      Play Store
                    </CustomButton>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Upgrade plans section */}
        <section id="plans" className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="font-medium text-3xl lg:text-4xl mb-5">
                Looking for more?
              </h2>
              <p className="text-gray-600 mb-6">
                Compare features across all our plans and upgrade when you're
                ready.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
              {allPlans.map((plan, index) => (
                <div
                  key={index}
                  className="p-6 bg-white rounded-lg shadow-md border hover:shadow-lg transition-shadow flex flex-col"
                >
                  <div className="mb-4">
                    <h3 className="text-xl lg:text-2xl font-medium mb-2">
                      {plan.title}
                    </h3>
                    <p className="text-sm text-gray-600">{plan.description}</p>
                  </div>

                  <div className="flex-grow mb-4">
                    <h6 className="font-semibold text-base mb-3">Features</h6>
                    <ul className="space-y-2 text-sm">
                      {plan.features.slice(0, 4).map((feature, i) => (
                        <li key={i} className="flex items-center gap-2">
                          <Icon
                            icon={'uil:check'}
                            className="text-primary text-sm"
                          />
                          <span>{feature}</span>
                        </li>
                      ))}
                      {plan.features.length > 4 && (
                        <li className="text-xs text-gray-500">
                          +{plan.features.length - 4} more features
                        </li>
                      )}
                    </ul>
                  </div>

                  <div className="mt-auto">
                    <div className="mb-4">
                      <span className="text-2xl lg:text-3xl font-medium">
                        {plan.price}
                      </span>
                      {index !== 3 && (
                        <span className="text-sm text-gray-500">/mo</span>
                      )}
                    </div>

                    {index !== 0 && (
                      <CustomButton
                        className={cn(
                          'bg-primary text-white font-medium w-full py-3 text-sm hover:bg-primary/90 transition-colors',
                          index === 3 &&
                            'border-2 border-primary bg-transparent text-primary hover:bg-primary hover:text-white',
                        )}
                        onPress={() => {
                          // Handle plan selection
                          console.log('Selected plan:', plan.title);
                        }}
                      >
                        {index === 3 ? 'Contact Sales' : 'Request Plan'}
                      </CustomButton>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default DownloadAppsAndOtherOffers;
