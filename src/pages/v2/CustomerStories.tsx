import SuccessStories, {
  SuccessStoriesProps,
} from "@/components/reusable/success-stories-section";

const CustomerStories = () => {
  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="pt-32 md:pt-28 xl:pt-44 pb-16 md:pb-24 xl:pb-32">
        <div className="container max-w-7xl px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-medium text-zinc-900 mb-6 tracking-tight">
              Customer Success Stories
            </h1>
            <p className="text-lg md:text-xl font-light text-zinc-600 max-w-2xl mx-auto leading-relaxed">
              Discover how businesses and financial institutions are
              transforming their operations with Foundry
            </p>
          </div>
        </div>
      </section>

      {/* Business Success Stories */}
      <section className="pb-16">
        <div className="container max-w-7xl">
          <SuccessStories {...businessStoriesData} />
        </div>
      </section>

      {/* Finance Success Stories */}
      <section className="pb-16">
        <div className="container max-w-7xl">
          <SuccessStories {...financeStoriesData} />
        </div>
      </section>

      {/* Retail Success Stories */}
      <section className="pb-16">
        <div className="container max-w-7xl">
          <SuccessStories {...retailStoriesData} />
        </div>
      </section>

      {/* KYC & Compliance Stories */}
      <section className="pb-16">
        <div className="container max-w-7xl">
          <SuccessStories {...kycStoriesData} />
        </div>
      </section>

      {/* CTA Section - Bento Style */}
      <section className="py-16 md:py-24 bg-zinc50">
        <div className="container max-w-6xl px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-medium text-zinc-900 mb-4">
              Ready to Write Your Success Story?
            </h2>
            <p className="text-lg font-light text-zinc-600 mb-8 leading-relaxed">
              Join thousands of businesses already growing with Foundry
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => (window.location.href = "/onboarding")}
                className="bg-primary text-white px-8 py-3 rounded-lg font-normal hover:opacity-90 transition-all"
              >
                Get Started
              </button>
              <button
                onClick={() => (window.location.href = "/book-a-demo")}
                className="bg-white border-2 border-zinc-200 text-zinc-900 px-8 py-3 rounded-lg font-normal hover:border-primary hover:text-primary transition-all"
              >
                Contact Sales
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

const businessStoriesData: SuccessStoriesProps = {
  title: "Business Success Stories",
  links: [
    { title: "Read Foundry Reviews", link: "/foundry-reviews" },
    { title: "View all Testimonials", link: "/testimonials" },
  ],
  cards: [
    {
      type: "text",
      content:
        '"Stock loss has reduced and sales are booming. Foundry has grown and helped us implement all these different parts."',
      author: "Cecilia Dekyi, Cepodek",
    },
    {
      type: "image",
      imageSrc: "/images/LS_4.webp",
      imageAlt: "Business owner in store",
      overlayText: "The importance of data to business growth",
      overlayIcon: "/icons/play.svg",
    },
    {
      type: "stats",
      title: "Retail Chain Growth",
      stats: [
        { value: "47%", label: "revenue increase year over year" },
        { value: "30,000", label: "transactions per month" },
      ],
      buttonText: "See their Foundry Setup",
    },
  ],
};

const financeStoriesData: SuccessStoriesProps = {
  title: "Finance Success Stories",
  links: [
    { title: "Discover Finance Case Studies", link: "/finance-cases" },
    { title: "View Client Testimonials", link: "/client-testimonials" },
  ],
  cards: [
    {
      type: "text",
      content:
        '"Our partnership with Foundry not only eliminated our manual errors but gave us the digital power to scale our customer base and dramatically increase revenue"',
      author: "Nana Agyemang Prempeh, CEO of Negios MicroCredit",
      bgClass: "bg-[#16232A]",
      textColor: "text-white",
    },
    {
      type: "text",
      content:
        '"We grew our customer base by 300% in a year, thanks to Foundry\'s digital platform that made scaling possible"',
      author: "Reuben Cudjoe, CEO of Shield Microfinance",
      bgClass: "bg-[#E4EEF0]",
      textColor: "text-black",
    },
    {
      type: "text",
      content:
        '"Going fully digital with Foundry didn\'t just save us time, it slashed our operational costs by 50% and brought our paper costs down to zero."',
      author: "Kwadwo Adjei, CEO of Ubuntu Microfinance",
    },
  ],
};

const retailStoriesData: SuccessStoriesProps = {
  title: "Retail Success Stories",
  links: [
    { title: "Read Retail Case Studies", link: "/case-studies/retail" },
    { title: "View Retail Testimonials", link: "/testimonials/retail" },
  ],
  cards: [
    {
      type: "text",
      content:
        '"Foundry POS has streamlined our checkout process and inventory management across all our locations."',
      author: "Sarah M., Multi-Location Retailer",
    },
    {
      type: "stats",
      title: "Fashion Boutique",
      stats: [
        { value: "35%", label: "increase in sales" },
        { value: "50%", label: "faster checkout times" },
      ],
      buttonText: "Read their story",
    },
    {
      type: "text",
      content:
        '"The analytics and reporting features have given us insights we never had before. We can now make data-driven decisions."',
      author: "John K., Electronics Store Owner",
    },
  ],
};

const kycStoriesData: SuccessStoriesProps = {
  title: "KYC & Compliance Success Stories",
  links: [
    {
      title: "Read Compliance Case Studies",
      link: "/case-studies/compliance",
    },
    { title: "Customer Testimonials", link: "/testimonials/compliance" },
  ],
  cards: [
    {
      type: "text",
      content:
        '"Fortify your institution with Foundry Sentinel, a holistic compliance and risk management platform."',
      author: "Shield Microfinance",
      bgClass: "bg-[#16232A]",
      textColor: "text-white",
    },
    {
      type: "text",
      content:
        '"Empowering your compliance team to focus on genuine threats and streamline their response efforts within a single, unified interface."',
      author: "Ubuntu Capital",
      bgClass: "bg-[#E4EEF0]",
      textColor: "text-black",
    },
    {
      type: "text",
      content:
        '"By reducing false positives by up to 95%, our intelligent platform turns noisy alerts into actionable intelligence."',
      author: "Cedi Capital",
      bgClass: "bg-[#16232A]",
      textColor: "text-white",
    },
  ],
};

export default CustomerStories;
