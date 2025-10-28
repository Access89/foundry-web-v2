import { useState } from 'react';
import { Icon } from '@iconify/react/dist/iconify.js';
import { CustomButton } from '@/components/shared/shared_customs';
import { useNavigate } from 'react-router-dom';

const OnboardingPage = () => {
  const navigate = useNavigate();
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      title: 'Welcome',
      content: 'Welcome to Foundry',
    },
    {
      title: 'Get Started',    
       content: 'Start your journey',
    },
    {
      title: 'Complete',
      content: 'You\'re all set!',
    },
  ];

  const handleNext = () => {
    if (activeStep < steps.length - 1) {
      setActiveStep(activeStep + 1);
    } else {   // Complete onboarding
        navigate('/dashboard');
      }
    };
  
    const handleBack = () => {
      if (activeStep > 0) {
        setActiveStep(activeStep - 1);
      } else {
        navigate(-1);
      }
    };
  
    return (
      <div className="min-h-screen w-full flex items-center justify-center">
        {/* Transparent container - no background */}
        <div className="w-full max-w-[700px] mx-auto px-6 py-12 flex flex-col justify-between min-h-screen">
          {/* Header */}
          <div className="flex flex-col gap-4">
            <div
              className="flex items-center justify-start cursor-pointer mb-8"
              onClick={handleBack}
            >
                   <Icon icon={'fluent:arrow-left-16-filled'} height={25} />
          </div>

          {/* Content */}
          <div className="flex-1">
            <h2 className="text-2xl font-semibold mb-4">
              {steps[activeStep].title}
            </h2>
            <p className="text-secondary-black">
              {steps[activeStep].content}
            </p>
          </div>
        </div>

        {/* Footer with button */}
        <CustomButton
          className="py-6 transition-all duration-300 bg-primary text-white shadow-lg hover:shadow-xl"
          onPress={handleNext}
        >
          {activeStep === steps.length - 1 ? 'Complete' : 'Continue'}
        </CustomButton>
      </div>
    </div>
  );
};

export default OnboardingPage;