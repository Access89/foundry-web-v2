import CustomFAQs from "@/components/shared/custom-faq";

const HelpCenter = () => {
  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="pt-32 md:pt-28 xl:pt-44 pb-16 md:pb-24 xl:pb-32 bg-zinc50">
        <div className="container max-w-7xl px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-medium text-zinc-900 mb-6 tracking-tight">
              Help Center
            </h1>
            <p className="text-lg md:text-xl font-light text-zinc-600 max-w-2xl mx-auto leading-relaxed">
              Find answers to frequently asked questions about Foundry's
              products and services
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-24">
        <div className="container max-w-4xl px-4 md:px-6">
          <h2 className="font-medium text-3xl md:text-4xl mb-12 text-center tracking-tight">
            Frequently Asked Questions
          </h2>
          <CustomFAQs options={faqQuestions} />
        </div>
      </section>

      {/* Additional Help Section */}
      <section className="py-16 md:py-24 bg-zinc-50">
        <div className="container max-w-4xl px-4 md:px-6">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-medium text-zinc-900 mb-4 tracking-tight">
              Need More Help?
            </h2>
            <p className="text-lg font-light text-zinc-600 mb-8 leading-relaxed">
              Our support team is here to assist you 24/7
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => (window.location.href = "/book-a-demo")}
                className="bg-primary text-white px-8 py-3 rounded-lg font-normal hover:opacity-90 transition-all"
              >
                Contact Support
              </button>
              <button
                onClick={() =>
                  window.open(
                    "https://www.linkedin.com/company/access-89/",
                    "_blank"
                  )
                }
                className="bg-white border-2 border-zinc-200 text-zinc-900 px-8 py-3 rounded-lg font-normal hover:border-primary hover:text-primary transition-all"
              >
                Visit Our LinkedIn
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

const faqQuestions = [
  {
    header: "What's the difference between Foundry Books and Foundry POS?",
    desc: [
      <>
        Foundry <strong className="font-semibold">Point of Sale (POS)</strong>{" "}
        is the app that helps you accept payments in person, online, or on the
        go. It's built to manage sales, track earnings, and keep your checkout
        experience seamless.
        <br />
        <br />
        <strong className="font-semibold">Foundry Books</strong>, on the other
        hand, is your all-in-one finance and accounting tool. It's designed to
        give you clear visibility into your cash flow, automate bookkeeping,
        handle invoicing, and keep your business financially organized.
        <br />
        <br />
        Together, Foundry Books and Foundry POS connect sales and finance in one
        ecosystem, so every transaction, expense, and report is synced
        automatically.
        <br />
        <br />
        Compare Foundry POS Free, Foundry POS Pro, and Foundry Books Pro plans
        to find the best setup for your business. Already using Foundry POS? Add
        Foundry Books Pro to unlock deeper financial insights, advanced
        reporting, and seamless integration between sales and accounting.
      </>,
    ],
  },
  {
    header: "Can you recommend the best solution for my business?",
    desc: [
      <>
        Foundry brings together the tools that power every part of your
        business, from sales and payments to accounting and growth. Discover the
        right solution tailored to your unique needs, all in one connected
        platform.
      </>,
    ],
  },
  {
    header: "Can I upgrade my Foundry plan?",
    desc: [
      <>
        Yes. You can upgrade from the{" "}
        <strong className="font-semibold">Foundry Free</strong> plan to the{" "}
        <strong className="font-semibold">Foundry Pro</strong> plan at any time
        by subscribing in your dashboard. You'll keep all your existing features
        and just set up the additional functionality that comes with your
        upgrade.
        <br />
        <br />
        To upgrade to a custom{" "}
        <strong className="font-semibold">Foundry Enterprise</strong> plan,
        simply contact our sales team.
      </>,
    ],
  },
  {
    header: "Can I downgrade my Foundry plan?",
    desc: [
      <>
        Yes. You can downgrade your subscription from{" "}
        <strong className="font-semibold">Foundry Pro</strong> back to{" "}
        <strong className="font-semibold">Foundry Free</strong> anytime in your
        Dashboard. When you downgrade, you'll see a notice showing which
        features you'll lose, such as advanced reporting, multi-location
        management, and premium integrations.
        <br />
        <br />
        You can review and compare plan features anytime on our pricing page.
        You can also pause your subscription directly from your Dashboard.
      </>,
    ],
  },
  {
    header: "How secure is Foundry?",
    desc: [
      <>
        Security is our top priority. Foundry uses bank-level encryption, secure
        data centers, and complies with international security standards
        including PCI DSS. All sensitive data is encrypted both in transit and
        at rest.
      </>,
    ],
  },
  {
    header: "Can I integrate Foundry with other tools?",
    desc: [
      <>
        Yes! Foundry integrates with a wide range of business tools including
        accounting software, e-commerce platforms, payment gateways, and more.
        Check our integrations page for a full list of compatible tools.
      </>,
    ],
  },
];

export default HelpCenter;
