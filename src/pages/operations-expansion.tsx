/* eslint-disable @typescript-eslint/no-explicit-any */
import { CustomButton } from "@/components/shared/shared_customs";
import { Icon } from "@iconify/react/dist/iconify.js";
import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const OperationsExpansion = () => {
  const nav = useNavigate();
  const data: Record<string, any> = {
    "process-improvement": {
      title: "Process Improvement",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      "video-link": "https://youtube.com",
      "features-description":
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      "core-features": [
        {
          icon: "lucide:user-round",
          title: "Lorem Ipsum Feature 1",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        },
        {
          icon: "mage:id-card",
          title: "Lorem Ipsum Feature 2",
          description:
            "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        },
        {
          icon: "bx:user-check",
          title: "Lorem Ipsum Feature 3",
          description:
            "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        },
        {
          icon: "ant-design:rise-outlined",
          title: "Lorem Ipsum Feature 4",
          description:
            "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
        },
        {
          icon: "la:pen-nib",
          title: "Lorem Ipsum Feature 5",
          description:
            "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        },
        {
          icon: "mynaui:upload",
          title: "Lorem Ipsum Feature 6",
          description:
            "Curabitur pretium tincidunt lacus. Nulla gravida orci a odio."
        }
      ]
    },
    "operating-model-design": {
      title: "Operating Model Design",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      "video-link": "https://youtube.com",
      "features-description":
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      "core-features": [
        {
          icon: "solar:document-outline",
          title: "Lorem Ipsum Feature 1",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        },
        {
          icon: "mage:id-card",
          title: "Lorem Ipsum Feature 2",
          description:
            "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        },
        {
          icon: "tabler:building",
          title: "Lorem Ipsum Feature 3",
          description:
            "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        },
        {
          icon: "mingcute:safe-shield-2-line",
          title: "Lorem Ipsum Feature 4",
          description:
            "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
        },
        {
          icon: "mdi-light:settings",
          title: "Lorem Ipsum Feature 5",
          description:
            "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        },
        {
          icon: "la:pen-nib",
          title: "Lorem Ipsum Feature 6",
          description:
            "Curabitur pretium tincidunt lacus. Nulla gravida orci a odio."
        },
        {
          icon: "mynaui:users",
          title: "Lorem Ipsum Feature 7",
          description: "Suspendisse potenti. In facilisis feugiat consequat."
        },
        {
          icon: "solar:wallet-linear",
          title: "Lorem Ipsum Feature 8",
          description: "Vestibulum id ligula porta felis euismod semper."
        },
        {
          icon: "solar:document-linear",
          title: "Lorem Ipsum Feature 9",
          description:
            "Cras justo odio, dapibus ac facilisis in, egestas eget quam."
        },
        {
          icon: "ant-design:rise-outlined",
          title: "Lorem Ipsum Feature 10",
          description: "Curabitur blandit tempus porttitor."
        },
        {
          icon: "solar:calculator-broken",
          title: "Lorem Ipsum Feature 11",
          description:
            "Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh."
        },
        {
          icon: "iconoir:attachment",
          title: "Lorem Ipsum Feature 12",
          description: "Nulla vitae elit libero, a pharetra augue."
        }
      ]
    },
    "digital-transformation": {
      title: "Digital Transformation",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      "video-link": "https://youtube.com",
      "features-description":
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      "core-features": [
        {
          icon: "lucide:user-round",
          title: "Lorem Ipsum Feature 1",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        },
        {
          icon: "mage:id-card",
          title: "Lorem Ipsum Feature 2",
          description:
            "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        },
        {
          icon: "bx:user-check",
          title: "Lorem Ipsum Feature 3",
          description:
            "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        },
        {
          icon: "ant-design:rise-outlined",
          title: "Lorem Ipsum Feature 4",
          description:
            "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
        },
        {
          icon: "la:pen-nib",
          title: "Lorem Ipsum Feature 5",
          description:
            "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        },
        {
          icon: "mynaui:upload",
          title: "Lorem Ipsum Feature 6",
          description:
            "Curabitur pretium tincidunt lacus. Nulla gravida orci a odio."
        },
        {
          icon: "bx:user-check",
          title: "Lorem Ipsum Feature 7",
          description: "Suspendisse potenti. In facilisis feugiat consequat."
        },
        {
          icon: "ant-design:rise-outlined",
          title: "Lorem Ipsum Feature 8",
          description: "Vestibulum id ligula porta felis euismod semper."
        },
        {
          icon: "la:pen-nib",
          title: "Lorem Ipsum Feature 9",
          description:
            "Cras justo odio, dapibus ac facilisis in, egestas eget quam."
        },
        {
          icon: "mynaui:upload",
          title: "Lorem Ipsum Feature 10",
          description: "Curabitur blandit tempus porttitor."
        }
      ]
    }
  };
  const { pathname } = useLocation();
  const module: string = pathname.split("/")[2];
  const current = data?.[module];

  useEffect(() => {
    if (!Object.keys(data).includes(module)) {
      return nav("/financial-services");
    }
  }, []);
  return (
    <main className="container">
      <section className="flex items-center  flex-col justify-between gap-10 py-20   rounded-xl bg-primary/10   ">
        {/* <p className="text-sm text-foundry-secondary font-medium uppercase mb-5">
          {current?.title}
        </p> */}
        <div className="px-6 ">
          <h1 className="font-medium text-center text-3xl  md:text-4xl lg:text-5xl md:pr-0 mb-10 md:mb-0">
            {current?.title}
          </h1>
          <p className="text-primary lg:text-[1.2rem] text-center  my-5 lg:w-[70%] mx-auto">
            {current?.description}
          </p>
        </div>
        {current?.["video-link"] && (
          <CustomButton
            className="bg-primary text-white font-medium px-5 "
            onClick={() => {
              window.open(
                "https://www.youtube.com/watch?v=PpPci8gGRoE",
                "_blank"
              );
            }}
          >
            <Icon icon="si:video-line" fontSize={20} />
            Watch Video
          </CustomButton>
        )}
      </section>

      <section className="py-10 pt-28 lg:pt-20">
        <div className="text-center">
          <h2 className="font-medium text-3xl md:text-4xl ">Core Services</h2>
          <p className="text-primary lg:text-[1.2rem]  my-5">
            {current?.["features-description"]}
          </p>
        </div>
        <div className="md:grid md:grid-cols-auto-fill-300 gap-5 space-y-5 md:space-y-0 mt-10">
          {current?.["core-features"]?.map((e: any) => {
            return (
              <InfoCard
                title={e.title}
                icon={e.icon}
                description={e.description}
                key={e.title}
              />
            );
          })}
        </div>
      </section>
    </main>
  );
};

const InfoCard = ({
  icon,
  title,
  description
}: {
  icon: string;
  title: string;
  description: string;
}) => {
  return (
    <div className="bg-secondary-light rounded-2xl p-4 lg:px-6 lg:py-6 w-full flex flex-col justify-between gap-6 hover:scale-[1.02] duration-700 hover:shadow-lg cursor-pointer">
      <div className="flex flex-col gap-y-3 bg-primary/80 w-fit p-2 rounded-md">
        <Icon icon={icon} fontSize={24} className="text-white" />
      </div>

      <div>
        <h4 className="text-xl font-medium">{title}</h4>
        <p className="text-[#575757] text-[0.9rem] leading-6 font-light">
          {description}
        </p>
      </div>
    </div>
  );
};

export default OperationsExpansion;
