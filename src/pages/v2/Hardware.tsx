import { Zap, CreditCard, Battery, Wifi, ShieldCheck } from "lucide-react";

const Hardware = () => {
  return (
    <div className="min-h-screen bg-white text-zinc-900">
      {/* Hero Section */}
      <header className="relative pt-32 md:pt-28 xl:pt-44 pb-16 md:pb-24 xl:pb-32 px-4 md:px-8 overflow-hidden bg-white">
        <div className="max-w-10xl px-4 md:px-6 lg:px-8 mx-auto relative z-10">
          <div className="text-center max-w-4xl mx-auto mb-8 md:mb-12">
            <div className="inline-block px-3 py-1 bg-zinc-100 text-xs font-medium mb-4 md:mb-6 uppercase tracking-wider">
              POINT OF SALE
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-medium tracking-tight leading-[1.1] mb-4 md:mb-6">
              Hardware that
              <br />
              <span className="text-zinc-400">means business.</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl xl:text-2xl mb-6 md:mb-8 leading-relaxed text-zinc-600 max-w-2xl mx-auto">
              Beautiful, reliable, and ready out of the box. Accept every
              payment type with security built-in.
            </p>
          </div>

          {/* Hero Product Visual */}
          <div className="relative flex justify-center">
            {/* Abstract representation of a sleek terminal */}
            <div className="relative w-64 md:w-80 h-[400px] md:h-[500px] bg-zinc-900 border-4 md:border-[8px] border-zinc-800 shadow-2xl flex flex-col overflow-hidden scale-75 md:scale-90 lg:scale-100">
              {/* Screen */}
              <div className="flex-1 bg-white relative">
                {/* UI Mockup */}
                <div className="p-6 pt-12">
                  <div className="text-center mb-8">
                    <div className="text-4xl font-medium">$24.00</div>
                    <div className="text-sm text-zinc-400">Total Amount</div>
                  </div>
                  <div className="space-y-3">
                    <div className="h-12 bg-black text-white flex items-center justify-center font-medium shadow-lg">
                      Tap to Pay
                    </div>
                    <div className="h-12 border border-zinc-200 flex items-center justify-center font-medium">
                      Insert Card
                    </div>
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
      <div className="max-w-10xl mx-auto px-6">
        {/* Product Lineup */}
        <div className="grid md:grid-cols-3 gap-8 mb-24">
          <div className="group p-8 bg-zinc-50 border border-zinc-200 hover:shadow-lg transition-shadow">
            <div className="h-48 flex items-center justify-center mb-6">
              {/* Reader Visual */}
              <div className="w-24 h-24 bg-white shadow-lg border border-zinc-100 flex items-center justify-center">
                <CreditCard className="w-10 h-10 text-zinc-300" />
              </div>
            </div>
            <h3 className="text-2xl font-medium mb-2">Reader</h3>
            <p className="text-zinc-600 mb-6">
              Connect wirelessly to your phone or tablet. Pocket-sized power.
            </p>
            <div className="flex justify-between items-center">
              <span className="font-medium">$49</span>
              <button className="px-4 py-2 bg-primary text-white rounded-md text-sm font-medium hover:opacity-90 transition-opacity">
                Shop
              </button>
            </div>
          </div>

          <div className="group p-8 bg-zinc-50 border border-zinc-200 hover:shadow-lg transition-shadow relative overflow-hidden">
            <div className="absolute top-4 right-4 bg-black text-white text-xs font-medium px-2 py-1">
              BEST SELLER
            </div>
            <div className="h-48 flex items-center justify-center mb-6">
              {/* Terminal Visual */}
              <div className="w-32 h-48 bg-white shadow-lg border border-zinc-100 flex flex-col p-2">
                <div className="flex-1 bg-zinc-50 mb-2"></div>
                <div className="h-2 w-1/2 bg-zinc-200 mx-auto"></div>
              </div>
            </div>
            <h3 className="text-2xl font-medium mb-2">Terminal</h3>
            <p className="text-zinc-600 mb-6">
              All-in-one device for payments and receipts. No phone needed.
            </p>
            <div className="flex justify-between items-center">
              <span className="font-medium">$299</span>
              <button className="px-4 py-2 bg-primary text-white rounded-md text-sm font-medium hover:opacity-90 transition-opacity">
                Shop
              </button>
            </div>
          </div>

          <div className="group p-8 bg-zinc-50 border border-zinc-200 hover:shadow-lg transition-shadow">
            <div className="h-48 flex items-center justify-center mb-6">
              {/* Register Visual */}
              <div className="relative w-40 h-32 bg-white shadow-lg border border-zinc-100 flex items-center justify-center">
                <div className="w-full h-full border-b-4 border-zinc-200"></div>
                <div className="absolute -right-6 top-1/2 -translate-y-1/2 w-12 h-20 bg-zinc-800 transform -rotate-12"></div>
              </div>
            </div>
            <h3 className="text-2xl font-medium mb-2">Register</h3>
            <p className="text-zinc-600 mb-6">
              Two displays. Dedicated customer screen. The center of your
              counter.
            </p>
            <div className="flex justify-between items-center">
              <span className="font-medium">$799</span>
              <button className="px-4 py-2 bg-primary text-white rounded-md text-sm font-medium hover:opacity-90 transition-opacity">
                Shop
              </button>
            </div>
          </div>
        </div>

        {/* Specs Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-24 text-center">
          <div className="p-6 bg-zinc-50 border border-zinc-200">
            <Battery className="w-8 h-8 mx-auto mb-3" />
            <div className="font-medium text-3xl mb-1">24h</div>
            <div className="text-sm text-zinc-500">Battery Life</div>
          </div>
          <div className="p-6 bg-zinc-50 border border-zinc-200">
            <Zap className="w-8 h-8 mx-auto mb-3" />
            <div className="font-medium text-3xl mb-1">0.1s</div>
            <div className="text-sm text-zinc-500">Processing Speed</div>
          </div>
          <div className="p-6 bg-zinc-50 border border-zinc-200">
            <Wifi className="w-8 h-8 mx-auto mb-3" />
            <div className="font-medium text-3xl mb-1">4G</div>
            <div className="text-sm text-zinc-500">LTE & WiFi</div>
          </div>
          <div className="p-6 bg-zinc-50 border border-zinc-200">
            <ShieldCheck className="w-8 h-8 mx-auto mb-3" />
            <div className="font-medium text-3xl mb-1">IP67</div>
            <div className="text-sm text-zinc-500">Water Resistant</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hardware;
