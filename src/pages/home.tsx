import FoundrySection from "@/components/reusable/foundry-stars-section";
import GetStartedSection from "@/components/reusable/get-started-section";
import GlobalTradeSection from "@/components/reusable/global-trade-section";
import GreenSection from "@/components/reusable/green-section";
import PartnersSection from "@/components/reusable/partners-section";
// import InfoCard from "@/components/shared/info_card";
// import { CustomButton } from "@/components/shared/shared_customs";
// import { Icon } from "@iconify/react";
// import { useNavigate } from "react-router-dom";

const Home = () => {
  // const navigate = useNavigate();
  return (
    <>
      <FoundrySection />
      <PartnersSection />
      <GreenSection />
      <GetStartedSection />
      <GlobalTradeSection />
      {/* <main className="container">
        <section className="bg-[#F9FFF6] rounded-3xl overflow-hidden pt-16 relative">
        <div className="md:grid grid-cols-2 lg:px-24 px-16 z-50">
          <div className="lg:h-full flex items-center">
            <h1 className="font-medium text-3xl md:text-4xl lg:text-[3.2rem] lg:leading-tight lg:font-semibold md:pr-10 mb-10 md:mb-0">
              Empowering all the ways you do business
            </h1>
          </div>

          <div className="place-self-end justify-center flex cursor-pointer">
            <div className="relative bg-gradient-to-b from-primary via-primary to-[#306348] rounded-3xl text-primary-white w-[270px] pb-5">
              <img
                src="/images/home_1.webp"
                alt=""
                className="w-[9rem] absolute -top-5 md:-left-14 -left-7"
              />
              <img src="/images/home_2.webp" alt="" className="w-[15rem]" />
              <p className="my-8 px-7 font-light">
                Maximize your sales with easy-to-use, reliable, and fast
                in-store POS system and payment solutions. Find out how our POS
                system can benefit your business.
              </p>
              <div className="flex justify-center items-center">
                <CustomButton
                  className="font-medium"
                  onPress={() => {
                    navigate("/onboarding");
                  }}
                >
                  Get Started{" "}
                  <Icon icon="solar:arrow-right-outline" fontSize={20} />
                </CustomButton>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-secondary md:grid grid-cols-3 gap-x-20 py-8 px-8 space-y-8 md:space-y-0 md:px-16 mt-5 z-50 cursor-pointer">
          {itemCard.map((item, index) => (
            <div key={index} className="text-primary-white">
              <img src={item.icon} alt={item.title} className="w-[1.6rem]" />
              <h2 className="font-semibold my-2.5">{item.title}</h2>
              <p className="text-sm font-light">{item.description}</p>
            </div>
          ))}
        </div>
      </section>

        <section className="md:grid grid-cols-[1fr,0.7fr] gap-x-20 py-16">
          <div className="lg:h-full flex items-center text-center lg:text-start   lg:items-start justify-center flex-col ">
            <h2 className="font-medium text-3xl md:text-4xl">
              Effortlessly expand your sales reach, rapidly and seamlessly,
              across any location
            </h2>
            <p className="text-secondary-black my-5 max-w-sm">
              Tailored product suites designed specifically for restaurants,
              retail, and beauty businesses
            </p>
          </div>
          <div className=" h-full place-self-end justify-center flex">
            <div className="rounded-3xl text-primary-white w-[370px] bg-secondary relative overflow-hidden">
              <img src="/images/aaaa.png" alt="" className="object-contain" />
              <div className="cursor-pointer rounded-l-2xl bg-[#EFEFEF]/10 backdrop-blur border-t-2 border-b-2 border-l-2 border-white/60 w-[80%] h-[65%] absolute top-16 right-0 p-4 overflow-hidden">
                <div className="rounded-md p-2 w-full h-full bg-[#EFEFEF]/20">
                  <div className="flex items-center gap-x-2 border-b border-b-black/20 pb-1.5">
                    <h5 className="bg-[#F9FFF6]/60 rounded-md p-2 text-secondary">
                      WC
                    </h5>
                    <div className="text-[9px]">
                      <h6 className="text-primary-black text-xs">
                        Walk-In Customer
                      </h6>
                      <p>ACC-SINV-2024-03349</p>
                      <p>GHS 72.00</p>
                    </div>
                  </div>

                  <div className="space-y-2 mt-1 border-b border-b-black/20 pb-1.5">
                    {Array.from({ length: 4 }).map((_, index) => (
                      <div
                        key={index}
                        className="grid grid-cols-[1fr,0.5fr,0.5fr] bg-white text-xs text-primary-black rounded-md p-1"
                      >
                        <div>
                          <h2>ABENA (5X5KG)</h2>
                          <p className="text-[9px] text-secondary-black">
                            RICE, ₵72.00/PCS
                          </p>
                        </div>
                        <div>
                          <h2>400</h2>
                          <p className="text-[9px] text-secondary-black">PCS</p>
                        </div>
                        <div>
                          <h2>28,800</h2>
                          <p className="text-[9px] text-secondary-black">GHS</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="grid grid-cols-[1fr,0.5fr,0.5fr] mt-2 px-1">
                    <div className="text-[9px]">
                      <h6 className="text-primary-black text-xs">TOTAL</h6>
                      <p>OVERALL</p>
                    </div>
                    <div className="text-[9px]">
                      <h6 className="text-primary-black text-xs">2000</h6>
                      <p>PCS</p>
                    </div>
                    <div className="text-[9px]">
                      <h6 className="text-primary-black text-xs">144,000</h6>
                      <p>GHS</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="absolute bottom-10 left-10">
                <CustomButton
                  className="font-medium"
                  onPress={() => {
                    navigate("/book-a-demo");
                  }}
                >
                  Book Demo{" "}
                  <Icon icon="solar:arrow-right-outline" fontSize={20} />
                </CustomButton>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16">
          <h2 className="font-medium text-3xl md:text-4xl mb-5">
            Built for business owners like you
          </h2>
          <div className="lg:grid grid-cols-[0.4fr,1fr] gap-x-10 xl:gap-x-20">
            <div className="flex flex-col md:grid grid-cols-2 lg:flex lg:flex-col space-y-6 justify-center md:justify-start">
              <img src="/images/home_4.webp" />
              <div className="bg-secondary rounded-xl p-4 lg:px-5 flex justify-between items-center gap-x-4 xl:gap-x-12 text-primary-white">
                <p>
                  Streamline the allocation of resources and time slots,
                  optimising bookings to minimise gaps and maximise utilisation
                </p>
                <div className="text-primary bg-primary-white p-2 rounded-full">
                  <Icon icon="solar:arrow-right-outline" fontSize={15} />
                </div>
              </div>
            </div>
            <div className="md:grid grid-cols-2 gap-5 space-y-5 md:space-y-0 mt-5 lg:mt-0">
              {infoCardDetails.map((item, index) => (
                <InfoCard
                  key={index}
                  title={item.title}
                  description={item.description}
                />
              ))}
            </div>
          </div>
        </section>

        <section className="py-10">
          <div className="flex justify-between">
            <h2 className="font-medium text-3xl md:text-4xl mb-5">
              Powered by Foundry
            </h2>
            <button className="underline text-secondary-black hidden">
              Show All
            </button>
          </div>
          <div className="md:grid md:grid-cols-auto-fill-220 w-full gap-10 space-y-5 md:space-y-0">
            {stores.map((item, index) => (
              <div key={index}>
                <img src={item.image} alt={item.name} className="w-full" />
                <h1 className="font-medium mb-1 mt-2">{item.name}</h1>
                <p className="text-sm text-secondary-black font-light">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="py-10">
          <div className="flex justify-between">
            <h2 className="font-medium text-3xl md:text-4xl mb-5">
              More from Foundry
            </h2>
          </div>
          <div className="md:grid md:grid-cols-auto-fill-300 gap-10 space-y-5 md:space-y-0">
            {moreFoundry.map((item, index) => (
              <div
                key={index}
                className="cursor-pointer hover:scale-[1.01] duration-700"
                onClick={() => {
                  if (item.link) {
                    window.open(item.link, "_blank");
                  }
                }}
              >
                <img src={item.image} alt={item.name} />
                <h1 className="font-medium mb-1 mt-2">{item.name}</h1>
                <p className="text-sm text-secondary-black ">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </section>
      </main> */}
    </>
  );
};

export default Home;

// const itemCard = [
//   {
//     title: "Business Automation",
//     description:
//       "Optimize your workflow, enhance efficiency through automation, and unlock new revenue streams on the trusted software and hardware platform used by businesses.",
//     icon: "/icons/truck.svg",
//   },
//   {
//     title: "Financial Services",
//     description:
//       "Digital Finance is paving the way for embedded finance. Foundry Digital Banking Platform empowers Financial Institutions in their Digital Transformation.",
//     icon: "/icons/headphones.svg",
//   },
// ];

// const infoCardDetails = [
//   {
//     title: "Retail & Wholesale",
//     description:
//       "Designed to streamline your daily operations, our best-in-class POS software helps you maximize productivity when faced with numerous tasks and limited time",
//   },
//   {
//     title: "Restaurant",
//     description:
//       "Boost order efficiency and profitability for your FSR, QSR, bar, or multi-concept restaurant with our user-friendly cloud-based solution.",
//   },
//   {
//     title: "Pharmacy",
//     description:
//       "Choose a pharmacy POS system that reduces the time spent on business administration, inventory management, and accounting, allowing you to dedicate more time to serving customers.",
//   },
//   {
//     title: "Beauty & Barber Shop",
//     description:
//       "Transform your barber shop with the perfect salon POS solution. From head to toe, our POS system ensures smooth operations for your spa and salon needs!",
//   },
//   {
//     title: "Bakery",
//     description:
//       "Discover the ideal POS system for bakeries. Enhance your baking process with Foundry’s advanced stock control, fast checkout software, and real-time reports.",
//   },
//   {
//     title: "Online Store",
//     description:
//       "Accelerate your online business growth with Foundry's user-friendly website builder. Expand your reach and establish a strong online presence effortlessly",
//   },
// ];

// const stores = [
//   {
//     name: "Cepodek",
//     image: "/images/cepodek.webp",
//     description:
//       "Cepodek’s wholesale operations entail the bulk sale of products to retailers or distributors.",
//   },
//   {
//     name: "Kimimi",
//     image: "/images/kimimi.webp",
//     description:
//       "Kimimi's retail operations involve selling fabrics directly to consumers through various channels such as physical stores, online platforms, or other retail outlets.",
//   },
//   {
//     name: "We Naturals",
//     image: "/images/we_natural.webp",
//     description:
//       "We Naturals hair products cater to a wide range of hair needs, offering carefully formulated solutions specifically designed for natural hair, including kinky, curly, and coily textures.",
//   },
//   {
//     name: "Ras Mawuli Ventures",
//     image: "/images/ras_mawuli.webp",
//     description:
//       "Ras Mawuli Ventures specializes in retailing consumer electronics, offering a diverse range of products tailored to meet various needs and preferences.",
//   },
// ];

// const moreFoundry = [
//   {
//     name: "Hub - B2B Marketplace",
//     image: "/images/hub.webp",
//     description:
//       "Full-stack B2B Ecosystem for small and medium enterprises (SMEs) in Africa",
//     link: "https://hub.foundry-platform.app",
//   },
//   {
//     name: "CornerShop",
//     image: "/images/cornershop.webp",
//     description:
//       "Corner shop enables shopkeepers to seamlessly restock directly from Foundry Hub with physical and digital payments and one-day delivery",
//   },
//   {
//     name: "Logistics",
//     image: "/images/logistics.webp",
//     description:
//       "Foundry, logistics and supply chain management involves efficiently sourcing raw materials, managing production processes, and delivering finished products to customers while optimizing costs and ensuring quality.",
//   },
// ];
