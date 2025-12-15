import { RefreshCw, FileText, Activity } from "lucide-react";
import ImageHero from "./components/ImageHero";

// Page Data
const invoicesData = {
  hero: {
    badge: "SMART INVOICING",
    title: ["Professional invoices,", "paid instantly."],
    description:
      "Create, send, and track custom invoices in seconds. Let clients pay by card, ACH, or Apple Pay directly from the email.",
    cta: "Create Invoice",
    invoice: {
      number: "#INV-2024-001",
      items: [
        {
          name: "Web Design Service",
          detail: "10 hours @ $150/hr",
          amount: "$1,500.00",
        },
        {
          name: "Hosting (Annual)",
          detail: "Premium Plan",
          amount: "$240.00",
        },
      ],
      total: "$1,740.00",
      notification: {
        title: "Paid by Client",
        time: "Just now",
      },
    },
  },
  features: [
    {
      icon: RefreshCw,
      title: "Recurring Billing",
      description:
        "Set it and forget it. Automatically charge cards for subscriptions or retainers on a schedule.",
    },
    {
      icon: FileText,
      title: "Estimates to Invoices",
      description:
        "Send estimates for approval. One click converts them into a payable invoice upon acceptance.",
    },
    {
      icon: Activity,
      title: "Real-time Tracking",
      description:
        "Know exactly when invoices are viewed, paid, or overdue. Automated reminders keep cash flowing.",
    },
  ],
  workflow: [
    {
      step: "1",
      title: "Send",
      description: "Email or text a secure link to your customer.",
    },
    {
      step: "2",
      title: "Remind",
      description:
        "Foundry automatically sends reminders 3 days before due date.",
    },
    {
      step: "3",
      title: "Reconcile",
      description:
        "Payment is instantly matched to the invoice in your ledger.",
    },
  ],
};

const Invoices = () => {
  const { hero, features, workflow } = invoicesData;
  return (
    <div className="lg:px-8 min-h-screen bg-white text-zinc-900">
      <ImageHero
        badge={hero.badge}
        title={hero.title}
        description={hero.description}
        cta={hero.cta}
        onCtaClick={() => {}}
        heroImage="/images/v2/invoice.png"
        heroImageAlt="Invoice management dashboard"
        theme="light"
      />
      <div className="max-w-10xl mx-auto px-4 md:px-6 lg:px-8">
        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-24">
          {features.map((feature, idx) => (
            <div key={idx} className="p-8 bg-zinc-50 rounded-xl">
              <feature.icon className="w-10 h-10 text-primary mb-6" />
              <h3 className="text-xl font-medium mb-3">{feature.title}</h3>
              <p className="text-zinc-600">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="bg-zinc-900 text-white p-12 relative overflow-hidden mb-20 rounded-xl">
          <div className="relative z-10 max-w-2xl">
            <h2 className="text-3xl font-medium mb-6">
              Automate your accounts receivable.
            </h2>
            <div className="space-y-6">
              {workflow.map((item, idx) => (
                <div key={idx}>
                  <div className="flex gap-4 items-start">
                    <div className="w-8 h-8 bg-white text-black flex items-center justify-center font-medium text-sm rounded-full">
                      {item.step}
                    </div>
                    <div>
                      <h4 className="font-medium mb-1">{item.title}</h4>
                      <p className="text-zinc-400 text-sm">
                        {item.description}
                      </p>
                    </div>
                  </div>
                  {idx < workflow.length - 1 && (
                    <div className="h-8 w-px bg-zinc-800 ml-4"></div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Invoices;
