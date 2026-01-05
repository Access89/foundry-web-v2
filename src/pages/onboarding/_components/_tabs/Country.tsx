import CountryPicker from '../country-picker';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { resetSubscriber, updateSubscriberState } from '@/store/features/subscriber';
import { RootState } from '@/store/store';

const Country = () => {
  const dispatch = useDispatch();
  const { country } = useSelector((state: RootState) => state.subscriber);

  console.log('country render', country);

  useEffect(() => {
    dispatch(resetSubscriber());
  }, [dispatch]);

  useEffect(() => {
    // Only set safe to true when a country is actually selected
    if (country !== '') {
      dispatch(
        updateSubscriberState({
          safe: true,
        }),
      );
    } else {
      dispatch(
        updateSubscriberState({
          safe: false,
        }),
      );
    }
  }, [country, dispatch]);

  return (
    <div>
      <div>
        <h4 className="font-semibold lg:text-[1.7rem] text-[1.2rem]">
          Let's get started!
        </h4>
        <p className="text-[#717173] font-light lg:text-[0.9rem] text-[0.8rem]">
          Which country did you set up your business in?
        </p>
      </div>

      <div className="lg:pt-6 pt-4">
        <CountryPicker />
      </div>
    </div>
  );
};

export default Country;
