import { useEffect } from "react";
import { useV2Context } from "./context";
import { motion } from "framer-motion";
import SEO from "@/components/SEO";
import SuccessStories, {
  SuccessStoriesProps,
} from "@/components/reusable/success-stories-section";

const CustomerStories = () => {
  const { setActiveSegment } = useV2Context();

  useEffect(() => {
    setActiveSegment("merchant");
  }, [setActiveSegment]);

  return (
    <div className="bg-white min-h-screen">
      <SEO
        title="Customer Success Stories & Testimonials"
        description="Discover how businesses and financial institutions are transforming their operations with Foundry. Real success stories from our customers across business, finance, retail, and compliance."
        keywords="customer stories, success stories, testimonials, case studies, customer reviews, business transformation, Foundry customers"
      />
      {/* Hero Section */}
      <section className="pt-32 md:pt-28 xl:pt-44 pb-16 md:pb-24 xl:pb-32">
        <div className="container max-w-7xl px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-medium text-zinc-900 mb-6 tracking-tight"
            >
              Customer Success Stories
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
              className="text-lg md:text-xl font-light text-zinc-600 max-w-2xl mx-auto leading-relaxed"
            >
              Discover how businesses and financial institutions are
              transforming their operations with Foundry
            </motion.p>
          </div>
        </div>
      </section>

      {/* Business Success Stories */}
      <section className="pb-16">
        <div className="container max-w-7xl">
          <div className="mb-8">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-2xl md:text-3xl font-medium mb-3"
            >
              Business Success Stories
            </motion.h2>
          </div>
          <SuccessStories {...businessStoriesData} />
        </div>
      </section>

      {/* Finance Success Stories */}
      <section className="pb-16">
        <div className="container max-w-7xl">
          <div className="mb-8">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-2xl md:text-3xl font-medium mb-3"
            >
              Finance Success Stories
            </motion.h2>
          </div>
          <SuccessStories {...financeStoriesData} />
        </div>
      </section>

      {/* Retail Success Stories */}
      <section className="pb-16">
        <div className="container max-w-7xl">
          <div className="mb-8">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-2xl md:text-3xl font-medium mb-3"
            >
              Retail Success Stories
            </motion.h2>
          </div>
          <SuccessStories {...retailStoriesData} />
        </div>
      </section>

      {/* KYC & Compliance Stories */}
      <section className="pb-16">
        <div className="container max-w-7xl">
          <div className="mb-8">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-2xl md:text-3xl font-medium mb-3"
            >
              KYC & Compliance Success Stories
            </motion.h2>
          </div>
          <SuccessStories {...kycStoriesData} />
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto  py-16">
        <p className="text-xs uppercase tracking-wider text-zinc-500 mb-3 text-center">
          Get started
        </p>

        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-medium mb-4">
            Ready to Write Your{" "}
            <span className="italic font-serif">Success Story?</span>
          </h2>

          <p className="text-base text-zinc-600 leading-relaxed mb-6">
            Join thousands of businesses already growing with Foundry
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <button
              onClick={() => (window.location.href = "/pricing")}
              className="bg-primary text-white px-6 py-3 rounded-lg text-sm font-medium hover:bg-zinc-800 transition-colors"
            >
              Get Started
            </button>
            <button
              onClick={() => (window.location.href = "/book-a-demo")}
              className="bg-white border-2 border-zinc-200 text-zinc-900 px-6 py-3 rounded-lg text-sm font-medium hover:border-primary hover:text-primary transition-colors"
            >
              Contact Sales
            </button>
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
