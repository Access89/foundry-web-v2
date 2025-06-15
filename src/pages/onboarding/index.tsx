import { Button } from '@nextui-org/react';
import Country from './_components/_tabs/Country';
import { useState } from 'react';
import BasicInformation from './_components/_tabs/basic-information';
import { Icon } from '@iconify/react/dist/iconify.js';
import BusinessInformation from './_components/_tabs/business-information';
// import PasswordSetting from "./_components/_tabs/password";
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/store/store';
import { updateSubscriberState } from '@/store/features/subscriber';

type ITab = 'country' | 'basic-information' | 'business-information';
type TReturnValue = void | string;

const Onboarding = () => {
  const navigate = useNavigate();
  const { safe } = useSelector((state: RootState) => state.subscriber);

  const dispatch = useDispatch();

  const [activeTab, setActiveTab] = useState<ITab>('country');
  const tabs: Record<
    string,
    {
      prev: () => TReturnValue;
      next: () => TReturnValue;
      component: JSX.Element;
    }
  > = {
    country: {
      prev: () => {
        navigate(-1);
      },
      next: () => {
        return 'basic-information';
      },
      component: <Country />,
    },
    'basic-information': {
      prev: () => {
        return 'country';
      },
      next: () => {
        return 'business-information';
      },
      component: <BasicInformation />,
    },
    'business-information': {
      prev: () => {
        return 'basic-information';
      },
      next: () => {
        // return "password";
        navigate('password');
      },
      component: <BusinessInformation />,
    },
    // password: {
    //   prev: () => {
    //     return "business-information";
    //   },
    //   next: () => {
    //     navigate("pricing");
    //   },
    //   component: <PasswordSetting />,
    // },
  };
  return (
    <div className="lg:w-[700px] w-full h-full lg:pt-12 lg:px-6 mx-auto font-sans flex flex-col justify-between lg:pb-12 px-6 py-6">
      <div className="flex flex-col gap-4">
        <div
          className="flex items-center justify-start cursor-pointer"
          onClick={(event) => {
            event.preventDefault();
            const returnValue = tabs?.[activeTab]?.prev();
            if (typeof returnValue == 'string') {
              setActiveTab(returnValue as ITab);
            }
          }}
        >
          <Icon icon={'fluent:arrow-left-16-filled'} height={25} />
        </div>
        {tabs?.[activeTab]?.component}
      </div>

      <Button
        className={`lg:w-[50%] w-[90%] py-4 lg:py-6 rounded-3xl mx-auto shadow-xl focus:outline-none
        ${
          safe
            ? 'bg-[#4C7F64] text-white shadow-[#4C7F64]/30'
            : 'bg-gray-300 text-gray-500 shadow-none cursor-not-allowed'
        }`}
        onClick={() => {
          const returnValue = tabs?.[activeTab]?.next();
          if (typeof returnValue == 'string') {
            setActiveTab(returnValue as ITab);
          }
          dispatch(
            updateSubscriberState({
              safe: false,
            }),
          );
        }}
        disabled={!safe}
      >
        Continue
      </Button>
    </div>
  );
};

export default Onboarding;
