const GlobalTradeSection = () => {
  return (
    <section className="p-5 md:p-10 md:my-10 w-full text-primary-white container">
      <div className="container flex flex-col gap-5 items-center justify-center">
        <h2 className="text-[#1A1A1A] font-medium text-xl md:text-3xl md:text-center">
          Empowering businesses through global trade
        </h2>
        <p className="text-[#575757]  text-xs md:text-sm font-normal md:text-center">
          Foundry.app provides comprehensive B2B trading solutions for small and
          medium-sized businesses worldwide, empowering them to transform
          through digital trade, seize opportunities, and accelerate
          international growth.
        </p>
      </div>
      <div className="md:grid lg:grid-cols-2 gap-5 mt-10 mx-auto">
        <div className="relative overflow-hidden rounded-lg flex flex-col lg:max-h-[30rem] max-h-[20rem]">
          <img
            src="/images/LS_4.webp"
            alt="a store with a woman in front of it"
            className="h-auto w-full object-cover rounded-lg"
          />
          <div className="absolute bottom-5 left-5 right-5 rounded-md bg-[#FAFAFA]/20 backdrop-blur-sm p-3">
            <p className="text-white font-medium flex items-center gap-2 md:py-2 max-w-[65%] h-[2rem] lg:h-[3rem]">
              Verified Suppliers
              <img
                src="/icons/play.svg"
                alt="play icon"
                className="w-[1rem] mb-1"
              />
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-5  max-h-[45rem] lg:max-h-[30rem]">
          <div className="relative overflow-hidden rounded-lg bg-secondary/20 flex flex-2 mt-4 lg:mt-0">
            <img
              src="/images/map.webp"
              alt="map"
              className="w-full h-auto object-cover rounded-lg"
            />
            <div className="absolute bottom-5 left-5 right-5 rounded-md bg-[#FAFAFA]/20 backdrop-blur-sm p-3 py-5">
              <p className="text-white font-medium flex items-center gap-2 max-w-[65%] h-[1rem] lg:h-[2rem]">
                Verified Suppliers
                <img
                  src="/icons/play.svg"
                  alt="play icon"
                  className="w-[1rem] mb-1"
                />
              </p>
            </div>
          </div>
          <div className="relative overflow-hidden rounded-lg flex-1 flex lg:max-h-[30rem] max-h-[20rem] ">
            <img
              src="/images/LS_4.webp"
              alt="a store with a woman in front of it"
              className="h-auto w-full object-cover rounded-lg"
            />
            <div className="absolute bottom-5 left-5 right-5 rounded-md bg-[#FAFAFA]/20 backdrop-blur-sm p-3 py-5">
              <p className="text-white font-medium flex items-center gap-2 max-w-[65%] h-[1rem] lg:h-[2rem]">
                Verified Suppliers
                <img
                  src="/icons/play.svg"
                  alt="play icon"
                  className="w-[1rem] mb-1"
                />
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GlobalTradeSection;
