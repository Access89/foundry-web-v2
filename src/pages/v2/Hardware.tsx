import { Zap, Battery, Wifi, ShieldCheck } from "lucide-react";

// Page Data
const hardwareData = {
  hero: {
    badge: "POINT OF SALE",
    title: ["Hardware that", "means business."],
    description:
      "Beautiful, reliable, and ready out of the box. Accept every payment type with security built-in.",
    mockupData: {
      amount: "$24.00",
      label: "Total Amount",
      buttons: ["Tap to Pay", "Insert Card"],
    },
  },
  products: [
    {
      id: "mobile",
      name: "Mobile",
      description:
        "Connect wirelessly to your phone or tablet. Pocket-sized power.",
      image: "/images/v2/hand_trans.png",
      price: "$49",
      badge: null,
    },
    {
      id: "terminal",
      name: "Terminal",
      description:
        "All-in-one device for payments and receipts. No phone needed.",
      image: "/images/v2/terminal.png",
      price: "$299",
      badge: "BEST SELLER",
    },
    {
      id: "register",
      name: "Register",
      description:
        "Two displays. Dedicated customer screen. The center of your counter.",
      image: "/images/POS.png",
      price: "$799",
      badge: null,
    },
  ],
  specs: [
    {
      icon: Battery,
      value: "24h",
      label: "Battery Life",
    },
    {
      icon: Zap,
      value: "0.1s",
      label: "Processing Speed",
    },
    {
      icon: Wifi,
      value: "4G",
      label: "LTE & WiFi",
    },
    {
      icon: ShieldCheck,
      value: "IP67",
      label: "Water Resistant",
    },
  ],
};

const Hardware = () => {
  const { hero, products, specs } = hardwareData;
  return (
    <div className="px-4 lg:px-8 min-h-screen bg-white text-zinc-900">
      {/* Hero Section */}
      <header className="relative pt-32 md:pt-28 xl:pt-44 pb-16 md:pb-24 xl:pb-32 px-4 md:px-8 overflow-hidden bg-white">
        <div className="max-w-10xl px-4 md:px-6 lg:px-8 mx-auto relative z-10">
          <div className="text-center max-w-4xl mx-auto mb-8 md:mb-12">
            <div className="inline-block px-3 py-1 bg-zinc-100 text-xs font-medium mb-4 md:mb-6 uppercase tracking-wider">
              {hero.badge}
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-medium tracking-tight leading-[1.1] mb-4 md:mb-6">
              {hero.title[0]}
              <br />
              <span className="text-zinc-400">{hero.title[1]}</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl xl:text-2xl mb-6 md:mb-8 leading-relaxed text-zinc-600 max-w-2xl mx-auto">
              {hero.description}
            </p>
          </div>

          {/* Hero Product Visual */}
          <div className="relative flex justify-center">
            {/* Abstract representation of a sleek terminal */}
            <div className="relative w-64 md:w-80 h-[400px] md:h-[500px] bg-zinc-900 border-4 md:border-[8px] border-zinc-800 shadow-2xl flex flex-col overflow-hidden scale-75 md:scale-90 lg:scale-100 rounded-3xl">
              {/* Screen */}
              <div className="flex-1 bg-white relative">
                {/* UI Mockup */}
                <div className="p-6 pt-12">
                  <div className="text-center mb-8">
                    <div className="text-4xl font-medium">
                      {hero.mockupData.amount}
                    </div>
                    <div className="text-sm text-zinc-400">
                      {hero.mockupData.label}
                    </div>
                  </div>
                  <div className="space-y-3">
                    {hero.mockupData.buttons.map((button, idx) => (
                      <div
                        key={idx}
                        className={`h-12 flex items-center justify-center font-medium ${
                          idx === 0
                            ? "bg-black text-white shadow-lg"
                            : "border border-zinc-200"
                        }`}
                      >
                        {button}
                      </div>
                    ))}
                  </div>
                </div>
                {/* NFC Icon overlay */}
                <div className="absolute bottom-10 left-1/2 -translate-x-1/2 opacity-20">
                  <Zap className="w-24 h-24" />
                </div>
              </div>
              {/* Bottom Chin */}
              <div className="h-16 bg-zinc-900 flex items-center justify-center border-t border-zinc-800">
                <div className="w-1/3 h-1 bg-zinc-700"></div>
              </div>
            </div>

            {/* Decorative background blobs */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] md:w-[600px] h-[400px] md:h-[600px] bg-gradient-to-tr from-zinc-200 to-transparent -z-10 blur-3xl opacity-60"></div>
          </div>
        </div>
      </header>
      <div className="max-w-10xl mx-auto lg:px-8">
        {/* Product Lineup */}
        <div className="grid md:grid-cols-3 gap-8 mb-24">
          {products.map((product) => (
            <div
              key={product.id}
              className={`group p-8 bg-zinc-50 rounded-xl ${
                product.badge ? "relative overflow-hidden" : ""
              }`}
            >
              {product.badge && (
                <div className="absolute top-4 right-4 bg-black text-white text-xs font-medium px-2 py-1">
                  {product.badge}
                </div>
              )}
              <div className="h-48 flex items-center justify-center mb-6">
                <img
                  src={product.image}
                  alt={product.name}
                  className="max-h-full max-w-full object-contain"
                />
              </div>
              <h3 className="text-2xl font-medium mb-2">{product.name}</h3>
              <p className="text-zinc-600 mb-6">{product.description}</p>
              <div className="hidden justify-between items-center">
                <span className="font-medium">{product.price}</span>
                <button className="px-4 py-2 bg-primary text-white rounded-lg text-sm font-medium hover:opacity-90 transition-opacity">
                  Shop
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Specs Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-24 text-center">
          {specs.map((spec, idx) => (
            <div
              key={idx}
              className="p-6 bg-zinc-50  rounded-xl"
            >
              <spec.icon className="w-8 h-8 mx-auto mb-3" />
              <div className="font-medium text-3xl mb-1">{spec.value}</div>
              <div className="text-sm text-zinc-500">{spec.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hardware;
