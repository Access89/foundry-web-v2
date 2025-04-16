import InfoSectionWithGoals from "@/components/reusable/info_section_with_goals";
import InfoCard from "@/components/shared/info_card";
import { CustomButton } from "@/components/shared/shared_customs";
import useScrollToSection from "@/hooks/useScrollToSection";
import { Icon } from "@iconify/react/dist/iconify.js";
import { Image } from "@nextui-org/react";
import { useNavigate } from "react-router-dom";

const FinancialServices = () => {
  const navigate = useNavigate();
  useScrollToSection();
  return (
    <main className="container md:pt-5">
      <section className=" bg-primary/10 rounded-xl px-5 lg:px-28 md:pt-16 pb-28 md:mt-[4.5rem] mt-6 relative">
        <div className="absolute -bottom-24 lg:-bottom-10 left-1/2 transform -translate-x-1/2 w-[60%] md:w-[42%] mx-auto bg-white rounded-3xl p-4 grid grid-cols-auto-fill-200 gap-3">
          {[
            {
              title: "Digital Banking",
              description:
                "A digital banking platform is an online or mobile application that allows customers to access banking services remotely"
            },
            {
              title: "Embedded Finance",
              description:
                "Embedded finance integrates financial services into non-financial platforms and products"
            }
          ].map((item, index) => (
            <div key={index}>
              <h2>{item.title}</h2>
              <div className="w-[20%] h-0.5 bg-black my-1" />
              <p className="text-xs text-secondary-black">{item.description}</p>
            </div>
          ))}
        </div>

        <div className="my-auto pt-5 md:pt-16 mb-5 md:mb-0">
          <h1 className="font-medium text-center lg:text-start text-3xl md:text-4xl md:pr-60 mb-8">
            Digital Finance is paving the way for embedded finance
          </h1>

          <div className="flex items-center flex-col lg:flex-row gap-2">
            <CustomButton
              className="bg-primary text-white font-medium px-5 lg:w-fit "
              onClick={() => {
                navigate("#explore");
              }}
            >
              Explore <Icon icon="solar:arrow-right-outline" fontSize={20} />
            </CustomButton>
            <CustomButton
              className="bg-transparent border-primary border-2 text-primary font-medium px-5 lg:w-fit "
              onPress={() => {
                // bookDemoModal.onOpen();
                navigate("/book-a-demo");
              }}
            >
              Book a Demo{" "}
              <Icon icon="solar:arrow-right-outline" fontSize={20} />
            </CustomButton>
          </div>
        </div>
        <Image
          src="/images/FS_1.webp"
          width={256}
          height={500}
          alt="mobile device"
          classNames={{
            wrapper: "hidden md:block absolute -right-3 -top-16"
          }}
        />
        <Image
          src="/images/FS_1.webp"
          width={208}
          height={400}
          alt="mobile device"
          classNames={{
            wrapper: "md:hidden mx-auto mb-5"
          }}
        />
      </section>
      {/* <section className=" lg:mt-28 mt-36 lg:pt-10 ">
        <div className="lg:mb-4 mb-3">
          <h2 className="font-medium text-3xl md:text-4xl mb-5">
            Built for Modern Financial Services
          </h2>
          <p className=" lg:text-[1rem] text-[0.89rem] font-normal text-[#717173]">
            Our platform combines cutting-edge technology with robust security
            features to deliver a comprehensive financial solution that drives
            efficiency and growth.
          </p>
        </div>
        <div className=" w-full  rounded-xl grid lg:grid-cols-2 grid-cols-1 gap-x-8 gap-y-6">
          <div className="grid grid-cols-1 gap-y-6 ">
            {modern_financial_services?.map((item) => (
              <div
                key={item.title}
                className="grid grid-cols-12 border-[1px] rounded-xl lg:p-4 px-6 py-2 lg:gap-4 gap-6 cursor-pointer hover:shadow-md duration-1000 "
              >
                <div className="flex items-start justify-center">
                  <div className="bg-primary/10 grid place-items-center lg:p-3 p-2 rounded-xl">
                    <Icon icon={item.icon} className="text-primary" />
                  </div>
                </div>
                <div className="col-span-11 flex flex-col gap-y-1">
                  <h4 className="font-semibold lg:text-[1.1rem] text-[0.95rem] text-primary">
                    {item.title}
                  </h4>
                  <p className="font-extralight lg:text-[0.89rem] text-[0.79rem] text-[#717173]">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div className="order-first lg:order-2">
            <div className="lg:w-[90%] w-full mx-auto h-full rounded-xl bg-primary/10 grid place-items-center">
              <Image src="/images/financial-services.svg" className='w-[70%] mx-auto' />
            </div>
          </div>
        </div>
      </section> */}
      <section className=" lg:mt-28 mt-36 lg:pt-10 ">
        <InfoSectionWithGoals
          sectionTitle="Built for Modern Financial Services"
          sectionDescription="Our platform combines cutting-edge technology with robust security features to deliver a comprehensive financial solution that drives efficiency and growth."
          goalsTitle="Your Business Goals"
          solutionTitle="How to Solve It with Foundry"
          goals={modern_financial_services?.map((item) => ({
            title: item.title,
            desc: [item.description]
          }))}
        />
      </section>

      <section className="py-10 pt-28 lg:pt-20" id="explore">
        <div className="flex justify-between">
          <h2 className="font-medium text-3xl md:text-4xl mb-5">
            More from Financial Service
          </h2>
        </div>
        <div className="md:grid md:grid-cols-auto-fill-300 gap-5 space-y-5 md:space-y-0">
          {moreConstant.map((item, index) => (
            <InfoCard
              key={index}
              title={item.title}
              description={item.description}
              showLearnMore
              onLearnMoreClick={() => {
                navigate(
                  `/financial-service/${item.title
                    .toLocaleLowerCase()
                    .split(" ")
                    .join("-")}`
                );
              }}
            />
          ))}
        </div>
      </section>
    </main>
  );
};

export default FinancialServices;

const moreConstant = [
  {
    title: "Digital Onboarding",
    description:
      "Simplify and enhance onboarding for businesses and customers with our intuitive, user-friendly digital platform. "
  },
  {
    title: "Loan Origination",
    description:
      "Empower your business with our digital lending solution, providing your customers with quick and convenient access to the financing they need"
  },
  {
    title: "Credit Scoring",
    description:
      "Transform your credit analysis with our Decision Module, providing fast and accurate loan assessments for quicker approvals and enhanced customer satisfaction."
  },

  {
    title: "Foundry E-channels",
    description:
      "Our digital banking solutions, including internet banking, mobile banking, and USSD platforms, designed to provide customers with seamless and secure access to financial services anytime, anywhere."
  },

  {
    title: "Mobile Banking",
    description:
      "Enhance your banking experience with our user-friendly mobile application, bringing convenience to your fingertip"
  },
  {
    title: "Sentinel",
    description:
      "Safeguard your businesses with robust regulatory compliance and fraud detection measures"
  },
  {
    title: "Agency",
    description:
      "Expand banking access with our agent network platform, connecting underserved areas to essential financial services through local intermediaries"
  },
  {
    title: "Foundry Back Office",
    description:
      "Complete digital banking solution with web and mobile interfaces for employees enable rapid customer service and case resolution, reducing reliance on branches"
  },
  {
    title: "Customized Platform",
    description:
      "Tailored financial technology solutions for your specific needs."
  }
];

const modern_financial_services = [
  {
    icon: "uil:user",
    title: "Seamless Onboarding and Loan Origination",
    description:
      "Enable fast account openings and smooth loan applications with document upload functionality for a quick, paperless experience."
  },
  {
    icon: "lucide:gauge",
    title: "Efficient, Scalable Operations",
    description:
      "Achieve real-time transaction processing, automated compliance checks, and a scalable infrastructure designed for flexible growth."
  },
  {
    icon: "mdi:protected-outline",
    title: "Enhanced Security and Global Accessibility",
    description:
      "Leverage advanced fraud detection, multi-currency support, and secure global transactions to support international operations."
  },
  {
    icon: "hugeicons:connect",
    title: "Comprehensive Workflow Management",
    description:
      "Streamline investment processing, digital workflows, quick approvals, and back-office operations for efficient service delivery."
  }
];
