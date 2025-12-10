import { useRef, useState, useEffect } from "react";

interface MadeForItem {
  title: string;
  bg: string;
  titleColor?: string;
  backgroundcolor?: string;
  backgroundsize?: string;
  titlePosition?: string;
}

interface MadeForSectionProps {
  activeSegment: string;
}

const MadeForSection = ({ activeSegment }: MadeForSectionProps) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const businessData: MadeForItem[] = [
    {
      title: "Invoice Management",
      bg: "/images/our-platforms/view/InvoiceManagement.png",
      backgroundcolor: "#B8D4D8",
      backgroundsize: "cover",
      titleColor: "text-[#272727]",
    },
    {
      title: "Manage Payroll",
      bg: "/images/ManagePayroll.png",
      backgroundcolor: "#E8E8E8",
      backgroundsize: "cover",
      titleColor: "text-[#272727]",
    },
    {
      title: "Business Loans",
      bg: "/images/AccessLoanCard.png",
      backgroundcolor: "#1C1C1C",
      backgroundsize: "cover",
      titleColor: "text-white",
    },
    {
      title: "Trust Score",
      bg: "/images/POS.png",
      backgroundcolor: "#E8DDD0",
      backgroundsize: "cover",
      titleColor: "text-[#272727]",
    },
    {
      title: "Business APIs",
      bg: "/images/BusinessAPI.png",
      backgroundcolor: "#D4D8E8",
      backgroundsize: "cover",
      titleColor: "text-[#272727]",
    },
  ];

  const financeData: MadeForItem[] = [
    {
      title: "Onboarding",
      titleColor: "text-white",
      bg: "/images/OnboardingCard.png",
      backgroundcolor: "white",
      backgroundsize: "cover",
    },
    {
      title: "Core Banking",
      titleColor: "text-[#272727]",
      titlePosition: "mt-4",
      bg: "/images/CoreBankingCard.png",
      backgroundcolor: "#E4EEF0",
      backgroundsize: "cover",
    },
    {
      title: "Digital Banking",
      titleColor: "text-white",
      bg: "/images/DigitalBanking.png",
      backgroundcolor: "#16232A",
      backgroundsize: "cover",
    },
    {
      title: "Banking as a Service",
      titleColor: "text-[#272727]",
      bg: "/images/BankingAsAService.png",
      backgroundcolor: "#FFFFFF",
      backgroundsize: "cover",
    },
    {
      title: "Lending",
      titleColor: "text-white",
      bg: "/images/LendingCard.png",
      backgroundcolor: "#16232A",
      backgroundsize: "cover",
    },
    {
      title: "Sentinel",
      titleColor: "text-white",
      bg: "/images/SentinelCard.png",
      backgroundcolor: "#16232A",
      backgroundsize: "cover",
    },
  ];

  const data = activeSegment === "merchant" ? businessData : financeData;

  // Compute scroll step based on actual card width and container gap
  const getCardStep = () => {
    if (!scrollRef.current) return 320;
    const firstCard = scrollRef.current.querySelector(
      "[data-card]"
    ) as HTMLElement | null;
    const cardWidth = firstCard?.offsetWidth || 300;
    const styles = window.getComputedStyle(scrollRef.current);
    const gapStr = styles.columnGap || styles.gap || "20";
    const gap = parseInt(gapStr, 10);
    return cardWidth + (Number.isNaN(gap) ? 20 : gap);
  };

  // Auto-advance slider
  useEffect(() => {
    if (!scrollRef.current || !data.length) return;

    const interval = setInterval(() => {
      if (!scrollRef.current || !data.length) return;

      const container = scrollRef.current;
      const totalCards = data.length;
      const step = getCardStep();

      setCurrentIndex((prevIndex) => {
        const nextIndex = prevIndex + 1;

        if (nextIndex >= totalCards) {
          container.scrollTo({ left: 0, behavior: "smooth" });
          return 0;
        }

        const scrollPosition = nextIndex * step;
        container.scrollTo({ left: scrollPosition, behavior: "smooth" });
        return nextIndex;
      });
    }, 4000);

    return () => clearInterval(interval);
  }, [data]);

  // Reset index when segment changes
  useEffect(() => {
    setCurrentIndex(0);
    if (scrollRef.current) {
      scrollRef.current.scrollTo({ left: 0 });
    }
  }, [activeSegment]);

  return (
    <section
      className={`py-24 transition-colors duration-500 ${
        activeSegment === "bank" ? "bg-[#1C1C1C]" : "bg-white"
      }`}
    >
      <div className=" px-4 md:px-6 lg:px-8">
        {/* Title */}
        <h2
          className={`text-3xl md:text-4xl lg:text-6xl font-semibold mb-10 text-center transition-colors duration-500 ${
            activeSegment === "bank" ? "text-white" : "text-zinc-900"
          }`}
        >
          <span
            className={
              activeSegment === "bank" ? "text-gray-400" : "text-[#929292]"
            }
          >
            Made
          </span>{" "}
          <span>for</span>{" "}
          <span className="text-[#075056] capitalize">
            {activeSegment === "merchant" ? "Business" : "Finance"}
          </span>
        </h2>

        {/* Carousel */}
        <div className="overflow-hidden relative">
          <div
            className="flex gap-5 px-1 transition-transform duration-300 ease-in-out items-stretch justify-start overflow-x-auto scrollbar-hide scroll-smooth"
            ref={scrollRef}
          >
            {data.map((item, idx) => (
              <div
                data-card
                key={idx}
                className={`cursor-pointer min-w-[60vw] sm:min-w-[45vw] lg:min-w-[18vw] min-h-[23rem] md:min-h-[18rem] lg:min-h-[28rem]
                  bg-[#36413E] bg-cover text-white p-0 flex flex-col justify-between
                  shadow hover:shadow-lg transition-all duration-300 ease-in-out transform rounded-3xl
                  ${idx === currentIndex + 2 ? "scale-100" : "scale-95"}`}
                style={{
                  backgroundImage: `url(${item.bg})`,
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                  backgroundSize: item.backgroundsize || "cover",
                  backgroundColor: item.backgroundcolor || "#36413E",
                }}
              >
                {/* Title Block */}
                <div className="py-8 md:p-8">
                  <div
                    className={`text-xl ${
                      item.titlePosition || "-mt-4"
                    } text-center font-semibold`}
                  >
                    <span className={item.titleColor || "text-[#272727]"}>
                      {item.title}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Indicators */}
          <div className="flex justify-center mt-6 gap-2">
            {data.map((_, idx) => (
              <div
                key={idx}
                onClick={() => {
                  if (!scrollRef.current) return;
                  const step = getCardStep();
                  scrollRef.current.scrollTo({
                    left: idx * step,
                    behavior: "smooth",
                  });
                  setCurrentIndex(idx);
                }}
                className={`h-2 w-2 rounded-full cursor-pointer ${
                  idx === currentIndex
                    ? activeSegment === "bank"
                      ? "bg-[#F6851B] scale-110"
                      : "bg-black scale-110"
                    : "bg-gray-400"
                } transition-all duration-300`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MadeForSection;
