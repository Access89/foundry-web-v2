/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react-hooks/exhaustive-deps */
import CustomModal from '@/components/shared/modal';
import { updateSubscriberState } from '@/store/features/subscriber';
import { Icon } from '@iconify/react/dist/iconify.js';
import { cn, useDisclosure } from '@nextui-org/react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { countries } from '../_utils/misc';
import { RootState } from '@/store/store';

const CountryPicker = () => {
  const { onOpenChange, onClose, isOpen, onOpen } = useDisclosure();
  const { country } = useSelector((state: RootState) => state.subscriber);

  const [selected, setSelected] = useState<string>(country || '');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const dispatch = useDispatch();

  // useEffect(() => {
  //   console.log({
  //     country,
  //     country_code,
  //   });
  //   if (country !== '') {
  //     dispatch(
  //       updateSubscriberState({
  //         safe: true,
  //       }),
  //     );
  //   }
  // }, []);

  const onSelectCountry = (country: any) => {
    console.log('fired', country);
    dispatch(
      updateSubscriberState({
        country: country.name,
        country_code: country.phoneCode,
      }),
    );
    setSelected(country.name);

    setSearchQuery('');
    onClose();
  };

  const reordered_counties = [
    ...countries.filter((country) => country.name === selected),
    ...countries
      .filter((country) => country.name !== selected)
      .sort((a, b) => a.name.localeCompare(b.name)),
  ];
  return (
    <div>
      <div
        className="lg:w-full rounded-xl bg-[#4C7F64]/5 hover:bg-[#4C7F64]/10 duration-700 px-4 py-3 cursor-pointer flex items-center justify-between "
        onClick={() => {
          onOpen();
        }}
      >
        <div>
          <p className="text-[#717173] font-extralight lg:text-[0.6rem] text-[0.7rem]">
            Country
          </p>
          <h4 className="lg:text-[0.95rem] lg:font-normal text-[0.95rem]">
            {selected}
          </h4>
        </div>
        <Icon icon={'icon-park-outline:down'} height={20} />
      </div>
      <CustomModal
        size="md"
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        body={
          <div className="lg:p-8 bg-[#717173]/5 p-4">
            <h4 className="font-semibold lg:text-[1.4rem] ">Country</h4>

            <div className="relative lg:my-4 my-2">
              <div className="absolute h-full  grid place-items-center lg:pl-4 pl-2 ">
                <Icon icon="pajamas:search" />
              </div>
              <input
                value={searchQuery}
                placeholder="Search"
                className="w-full bg-[#4C7F64]/5 focus:bg-[#4C7F64]/10 hover:bg-[#4C7F64]/10 rounded-3xl lg:pl-10 pl-8 lg:py-3 py-2 lg:px-4 outline-none"
                onChange={(event) => {
                  setSearchQuery(event.currentTarget.value.trim());
                }}
              />
              {searchQuery !== '' && (
                <div
                  className="absolute h-full right-0 top-0  grid place-items-center pr-4 "
                  // eslint-disable-next-line @typescript-eslint/no-unused-vars
                  onClick={(_) => {
                    setSearchQuery('');
                  }}
                >
                  <Icon
                    icon="material-symbols:cancel"
                    className="text-[#717173]/60"
                  />
                </div>
              )}
            </div>

            <div className="lg:h-[60vh] overflow-scroll bg-white rounded-[1rem] lg:p-2 p-1 flex flex-col lg:gap-2 scrollbar-hide h-[40vh]">
              {searchQuery !== '' ? (
                reordered_counties.filter((country) =>
                  country.name.includes(searchQuery),
                ).length != 0 ? (
                  reordered_counties
                    .filter((country) =>
                      country.name
                        .toLowerCase()
                        .includes(searchQuery.toLowerCase()),
                    )
                    ?.map((country) => {
                      return (
                        <div
                          onClick={(event) => {
                            event.preventDefault();
                            event.stopPropagation();
                            onSelectCountry(country);
                          }}
                          className={cn(
                            'flex items-center gap-4 px-2 py-3 rounded-xl cursor-pointer hover:bg-[#717173]/5',
                            selected == country.name && 'bg-[#4C7F64]/5',
                          )}
                        >
                          <div className="relative">
                            <Icon
                              icon={country.icon}
                              className="lg:text-[45px] text-[30px]"
                            />
                            {selected == country.name && (
                              <div className="lg:size-[0.9rem] size-[0.6rem] rounded-full bg-[#4C7F64] lg:bottom-[0rem] lg:right-0 bottom-[0.1rem] right-[0.05rem] absolute grid place-items-center">
                                <Icon
                                  icon={'fontisto:check'}
                                  className="lg:text-[0.35rem] text-[0.2rem]  text-white"
                                />
                              </div>
                            )}
                          </div>
                          <p className="">{country.name}</p>
                        </div>
                      );
                    })
                ) : (
                  <p className="font-semibold text-center lg:text-[1.2rem] mt-8">
                    No Result found
                  </p>
                )
              ) : (
                reordered_counties.map((country) => {
                  return (
                    <div
                      onClick={(event) => {
                        event.preventDefault();
                        event.stopPropagation();
                        setSelected(country.name);
                        onSelectCountry(country);
                        setSearchQuery('');
                        onClose();
                      }}
                      className={cn(
                        'flex items-center gap-4 px-2 py-3 rounded-xl cursor-pointer hover:bg-[#717173]/5',
                        selected == country.name && 'bg-[#4C7F64]/5',
                      )}
                    >
                      <div className="relative">
                        <Icon
                          icon={country.icon}
                          className="lg:text-[45px] text-[30px]"
                        />
                        {selected == country.name && (
                          <div className="lg:size-[0.9rem] size-[0.6rem] rounded-full bg-[#4C7F64] lg:bottom-[0rem] lg:right-0 bottom-[0.1rem] right-[0.05rem] absolute grid place-items-center">
                            <Icon
                              icon={'fontisto:check'}
                              className="lg:text-[0.35rem] text-[0.2rem]  text-white"
                            />
                          </div>
                        )}
                      </div>
                      <p>{country.name}</p>
                    </div>
                  );
                })
              )}
            </div>
          </div>
        }
        onClose={onClose}
      />
    </div>
  );
};

export default CountryPicker;
