/* eslint-disable @typescript-eslint/no-explicit-any */
// import axios from "axios";
import { Spinner } from '@nextui-org/react';
import { Icon } from '@iconify/react/dist/iconify.js';
import { useNavigate } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';
import { PopupButton } from 'react-calendly';
import { useSelector } from 'react-redux';
import { RootState } from '@/store/store';

const BookADemo = () => {
  const navigate = useNavigate();
  const calendlyButtonRef = useRef<HTMLDivElement>(null);
  const [isloading, setIsLoading] = useState(true);

  const {
    customer_name,
    business_location,
    business_type,
    business_owner,
    nature_of_business,
    email,
    mobile,
  } = useSelector((state: RootState) => state.subscriber);

  useEffect(() => {
    const timer = setTimeout(() => {
      calendlyButtonRef.current?.querySelector('button')?.click();

      setIsLoading(false);
    }, 1000); // slight delay ensures Calendly is rendered

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleMessage = (e: MessageEvent) => {
      if (e.origin === 'https://calendly.com') {
        if (e.data.event === 'calendly.event_scheduled') {
          console.log('Meeting scheduled!');
          navigate('/'); // ✅ Navigate back
        }
      }
    };

    window.addEventListener('message', handleMessage);
    return () => {
      window.removeEventListener('message', handleMessage);
    };
  }, [navigate]);

  return (
    <div className="lg:py-10 p-6 lg:w-[700px] mx-auto">
      <div className="lg:pb-8 pb-4">
        <div
          className="flex items-center justify-start cursor-pointer lg:pb-4 pb-2"
          onClick={(event) => {
            event.preventDefault();
            navigate(-1);
          }}
        >
          <Icon icon={'fluent:arrow-left-16-filled'} height={25} />
        </div>
        <h4 className="lg:text-[1.6rem] text-[1.2rem] font-semibold">
          Book a Demo
        </h4>
        <p className="font-light lg:text-[0.95rem] text-[0.85rem] text-[#717173] ">
          Fill out the form below and our team will get in touch with you
          shortly.
        </p>
      </div>

      <div className="flex flex-1 items-center justify-center">
        {isloading && <Spinner size="md" color="success" />}
      </div>

      <p className="hidden" ref={calendlyButtonRef} style={{ display: 'none' }}>
        <PopupButton
          url="https://calendly.com/payments-noreply-access89/foundry-demo"
          rootElement={document.getElementById('root')!}
          text="Schedule a Meeting"
          prefill={{
            name: business_owner || '',
            email: email || '',
            // customAnswers: {
            //   a1: customer_name || '',
            //   a2: business_type || '',
            //   a3: business_location || '',
            //   a4: nature_of_business || '',
            //   a5: mobile || '',
            // },
          }}
        />
      </p>
    </div>
  );
};

export default BookADemo;
