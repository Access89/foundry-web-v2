// Page Data
const fnbData = {
  hero: {
    badge: "FOOD & BEVERAGE",
    title: ["Serve faster. ", "Turnover more."],
    description:
      "From quick-service cafes to full-service fine dining, keep your front and back of house in perfect sync.",
  },
  features: [
    {
      title: "Kitchen Display System",
      subtitle: "Replace paper tickets with smart screens.",
      bgClass: "bg-zinc-900",
      orders: [
        {
          table: "Table 4",
          time: "2m ago",
          items: ["2x Burger", "1x Fries"],
          borderColor: "border-white",
        },
        {
          table: "Table 2",
          time: "5m ago",
          items: ["1x Salad"],
          borderColor: "border-zinc-500",
        },
      ],
    },
    {
      title: "QR Ordering",
      subtitle: "Let guests order and pay from their phone.",
      bgClass: "bg-zinc-50",
      qrLabel: "Scan to Order",
    },
  ],
};

const FnB = () => {
  const { hero, features } = fnbData;
  return (
    <div className="min-h-screen bg-white text-zinc-900">
      {/* Hero Section */}
      <header className="relative pt-32 md:pt-28 xl:pt-44 pb-16 md:pb-24 xl:pb-32 px-4 md:px-8 overflow-hidden bg-white">
        <div className="max-w-10xl px-4 md:px-6 lg:px-8 mx-auto relative z-10">
          <div className="text-center max-w-4xl mx-auto mb-8 md:mb-12 lg:mb-24 xl:mb-32 lg:mt-10">
            <div className="inline-block px-3 py-1 bg-zinc-100 text-xs font-medium mb-4 md:mb-6 uppercase tracking-wider">
              {hero.badge}
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-medium tracking-tight leading-[1.1] mb-4 md:mb-6">
              {hero.title[0]}{" "}
              <span className="text-zinc-400">{hero.title[1]}</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl xl:text-2xl mb-6 md:mb-8 leading-relaxed text-zinc-600 max-w-2xl mx-auto">
              {hero.description}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-20">
            {features.map((feature, idx) => (
              <div
                key={idx}
                className={`${feature.bgClass} ${
                  feature.bgClass === "bg-zinc-50"
                    ? "border border-zinc-200"
                    : "text-white"
                } p-10 flex flex-col justify-between h-96 overflow-hidden relative rounded-xl`}
              >
                <div className="relative z-10">
                  <h3 className="text-3xl font-medium mb-2">{feature.title}</h3>
                  <p
                    className={
                      feature.bgClass === "bg-zinc-50"
                        ? "text-zinc-600"
                        : "opacity-70"
                    }
                  >
                    {feature.subtitle}
                  </p>
                </div>
                {feature.orders ? (
                  <div className="flex gap-4 mt-8">
                    {feature.orders.map((order, orderIdx) => (
                      <div
                        key={orderIdx}
                        className={`flex-1 bg-zinc-800 p-4 border-l-4 ${order.borderColor} rounded-r-lg`}
                      >
                        <div className="text-xs opacity-50 mb-1">
                          {order.table} • {order.time}
                        </div>
                        {order.items.map((item, itemIdx) => (
                          <div key={itemIdx} className="font-medium">
                            {item}
                          </div>
                        ))}
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="absolute right-0 bottom-0 w-64 h-64 bg-white shadow-xl p-6 flex flex-col items-center justify-center border-l border-t border-zinc-200">
                    <div className="w-32 h-32 bg-zinc-900 mb-4 flex items-center justify-center text-white font-mono text-xs rounded-lg">
                      QR CODE
                    </div>
                    <div className="font-medium text-sm">{feature.qrLabel}</div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </header>
    </div>
  );
};

export default FnB;
