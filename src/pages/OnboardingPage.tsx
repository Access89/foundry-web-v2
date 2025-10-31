import { Icon } from '@iconify/react/dist/iconify.js';

const OnboardingPage = () => {
  // Mock data for the three onboarding screens
  const onboardingScreens = [
    {
      id: 1,
      image: '/images/OnboardingCard.png',
      alt: 'Let\'s make it official'
    },
    {
      id: 2,
      image: '/images/OnboardingCard.png',
      alt: 'Complete registration'
    },
    {
      id: 3,
      image: '/images/OnboardingCard.png',
      alt: 'Complete and signup for your loan details'
    }
  ];

  return (
    <div className="min-h-screen w-full bg-[#075056] relative overflow-x-hidden">
      {/* Decorative circular elements at the bottom */}
      <div className="fixed bottom-0 left-0 right-0 h-64 opacity-20 pointer-events-none z-0">
        <div className="absolute bottom-[-50px] left-[5%] w-32 h-32 border-4 border-white/30 rounded-full"></div>
        <div className="absolute bottom-[-30px] left-[15%] w-20 h-20 border-4 border-white/30 rounded-full"></div>
        <div className="absolute bottom-[20px] left-[25%] w-40 h-40 border-4 border-white/30 rounded-full"></div>
        <div className="absolute bottom-[-40px] right-[30%] w-28 h-28 border-4 border-white/30 rounded-full"></div>
        <div className="absolute bottom-[10px] right-[15%] w-24 h-24 border-4 border-white/30 rounded-full"></div>
        <div className="absolute bottom-[-20px] right-[5%] w-36 h-36 border-4 border-white/30 rounded-full"></div>
        
        {/* Additional decorative lines */}
        <div className="absolute bottom-[40px] left-[20%] w-16 h-1 bg-white/20 rotate-45"></div>
        <div className="absolute bottom-[60px] left-[22%] w-12 h-1 bg-white/20 rotate-45"></div>
        <div className="absolute bottom-[50px] right-[25%] w-20 h-1 bg-white/20 -rotate-45"></div>
        <div className="absolute bottom-[70px] right-[27%] w-14 h-1 bg-white/20 -rotate-45"></div>
      </div> 

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-6 py-12 max-w-6xl">
        {/* Header */}
        <div className="mb-16">
          <div className="flex items-center gap-3 text-white">
            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
              <Icon icon="mdi:finance" className="text-[#075056] text-2xl" />
            </div>
            <div>
              <h1 className="text-2xl md:text-3xl font-bold">Foundry Finance</h1>
              <p className="text-lg md:text-xl font-semibold">Onboarding</p>
            </div>
          </div>
        </div>

       {/* Three Phone Screens Section */}
<div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12 mb-16">
  {onboardingScreens.map((screen, index) => (
    <div 
      key={screen.id}
      className="relative"
      style={{
        animation: `fadeInUp 0.6s ease-out ${index * 0.2}s both`
      }}
    >
      <img 
        src={screen.image} 
        alt={screen.alt}
        className="w-64 h-auto object-contain drop-shadow-2xl"
      />
    </div>
  ))}
</div>

        {/* Tagline */}
        <div className="text-center mb-32">
          <h2 className="text-white text-3xl md:text-4xl lg:text-5xl font-bold">
            Onboard in Minutes, Not Days.
          </h2>
        </div>

        {/* Account Opening Form Section */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          {/* Left: Image */}
          <div className="flex justify-center md:justify-start">
            <img 
              src="/images/OnboardingCard.png" 
              alt="Complete information for your loan details"
              className="w-80 h-auto object-contain drop-shadow-2xl rounded-2xl"
            />
          </div>

          {/* Right: Content */}
          <div className="text-white space-y-6">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
              Account Opening form
            </h2>
            <p className="text-lg md:text-xl text-white/90 leading-relaxed">
              Experience our Self Service and Assisted Service (Agent Portal) platform. A clean, intuitive interface that enables new customers to begin the application seamlessly
            </p>
          </div>
        </div>

        {/* KYC/KYB & Risk Rating Section */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          {/* Left: Image */}
          <div className="flex justify-center md:justify-start">
            <img 
              src="/images/OnboardingCard.png" 
              alt="User Verification"
              className="w-80 h-auto object-contain drop-shadow-2xl rounded-2xl"
            />
          </div>

          {/* Right: Content */}
          <div className="text-white space-y-6">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
              KYC/KYB & Risk Rating
            </h2>
            <p className="text-lg md:text-xl text-white/90 leading-relaxed">
              Delivers compliance and confidence with real-time Ghana Card facial authentication via the NIA Identity Verification System, integrated KYC and KYB workflows, and dynamic risk scoring engine empowering you to onboard customers and businesses swiftly while minimising fraud and meeting regulatory requirements
            </p>
          </div>
        </div>

        {/* Document Collection Section */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          {/* Left: Image */}
          <div className="flex justify-center md:justify-start">
            <img 
              src="/images/OnboardingCard.png" 
              alt="Complete Documentation Upload"
              className="w-80 h-auto object-contain drop-shadow-2xl rounded-2xl"
            />
          </div>

          {/* Right: Content */}
          <div className="text-white space-y-6">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
              Document Collection
            </h2>
            <p className="text-lg md:text-xl text-white/90 leading-relaxed">
              Effortlessly upload and collect essential documents like IDs, utility bills, and financial statements via mobile or web. Securely store them in a centralised, trackable system and monitor their status in real time.
            </p>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center text-white/70 text-lg">
          <span>Join over 100+ financial services lending with ease - </span>
          <a 
            href="/onboarding" 
            className="text-white font-semibold hover:underline cursor-pointer"
          >
            Sign up now
          </a>
        </div>
      </div>

      {/* Add animation keyframes */}
      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
};
       
       


export default OnboardingPage;