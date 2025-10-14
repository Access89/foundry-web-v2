import {   Image } from '@nextui-org/react'
// import React from 'react'
// import { CustomButton } from './shared/shared_customs'
// import { useNavigate } from 'react-router-dom';
interface HeroProps {
  title: string;
    description?: string;
    buttonText?: string;
    image?: string;}
const  Hero  = ({title,description,image}  : HeroProps) => {
    // const navigate = useNavigate();

    const colors = ['text-[#929292]', 'text-[#000000]', 'text-[#619B7D]'];

  return (
    <div className='container'>
        <div className=" rounded-xl relative overflow-hidden flex flex-col">
            <div className="lg:px-28 md:pt-16 md:pb-10 px-5 flex flex-col-reverse md:flex-row space-between">
              <div className="lg:max-w-lg md:max-w-xs mt-10">
                <h1 className="font-medium text-[#434343] text-xl sm:text-2xl md:text-[4rem] w-full max-w-full leading-snug sm:leading-tight break-words">
                  {/* First two words together */}
                  <span className="whitespace-nowrap">
                    <span className={`${colors[0]} mr-2 inline-block`}>
                      {title.split(' ')[0]}
                    </span>
                    <span
                      className={`${colors[1]} font-bold mr-2 inline-block`}
                    >
                      {title?.split(' ')[1]}
                    </span>
                  </span>

                  {/* Remaining words */}
                  {title
                    ?.split(' ')
                    .slice(2)
                    .map((word, idx) => (
                      <span
                        key={idx + 2}
                        className={`${
                          colors[(idx + 2) % colors.length]
                        } mr-2 inline-block`}
                      >
                        {word}
                      </span>
                    ))}
                </h1>

                <p className="text-secondary-black text-base md:text-xl my-7">
                  {description ||
                    'Explore the tools and services powering modern businesses.'}
                </p>
                <div className="flex items-center gap-x-4">
                  {/* <CustomButton
                    onPress={() => navigate('/book-a-demo')}
                    className="bg-primary text-white font-medium px-5 "
                  >
                    {buttonText || 'Book Demo'}
                  </CustomButton> */}
                </div>
              </div>
              <Image
                src={image}
                alt="AI marketplace"
                classNames={{
                  wrapper:
                    ' mt-16 ml-auto rounded-none top-0 w-[5rem] h-[5rem] md:h-[20rem] md:w-[20rem]',
                  img: 'rounded-none',
                }}
              />
            </div>

            <div className="border-t md:border-0 p-4 mt-0 md:mt-16 flex items-center flex-col md:flex-row gap-5"></div>
        </div>
    </div>
  )
}

export default Hero;