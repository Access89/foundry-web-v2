const FnB = () => {
  return (
    <div className="min-h-screen bg-white text-zinc-900">
      {/* Hero Section */}
      <header className="relative pt-32 md:pt-28 xl:pt-44 pb-16 md:pb-24 xl:pb-32 px-4 md:px-8 overflow-hidden bg-white">
        <div className="max-w-10xl px-4 md:px-6 lg:px-8 mx-auto relative z-10">
          <div className="text-center max-w-4xl mx-auto mb-8 md:mb-12 lg:mb-24 xl:mb-32 lg:mt-10">
            <div className="inline-block px-3 py-1 bg-zinc-100 text-xs font-medium mb-4 md:mb-6 uppercase tracking-wider">
              FOOD & BEVERAGE
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-medium tracking-tight leading-[1.1] mb-4 md:mb-6">
              Serve faster.{" "}
              <span className="text-zinc-400">Turnover more.</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl xl:text-2xl mb-6 md:mb-8 leading-relaxed text-zinc-600 max-w-2xl mx-auto">
              From quick-service cafes to full-service fine dining, keep your
              front and back of house in perfect sync.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-20">
            <div className="bg-zinc-900 text-white p-10 flex flex-col justify-between h-96 overflow-hidden relative">
              <div className="relative z-10">
                <h3 className="text-3xl font-medium mb-2">
                  Kitchen Display System
                </h3>
                <p className="opacity-70">
                  Replace paper tickets with smart screens.
                </p>
              </div>
              <div className="flex gap-4 mt-8">
                <div className="flex-1 bg-zinc-800 p-4 border-l-4 border-white">
                  <div className="text-xs opacity-50 mb-1">
                    Table 4 • 2m ago
                  </div>
                  <div className="font-medium">2x Burger</div>
                  <div className="font-medium">1x Fries</div>
                </div>
                <div className="flex-1 bg-zinc-800 p-4 border-l-4 border-zinc-500">
                  <div className="text-xs opacity-50 mb-1">
                    Table 2 • 5m ago
                  </div>
                  <div className="font-medium">1x Salad</div>
                </div>
              </div>
            </div>

            <div className="bg-zinc-50 p-10 border border-zinc-200 flex flex-col justify-between h-96 relative overflow-hidden">
              <div className="relative z-10">
                <h3 className="text-3xl font-medium mb-2">QR Ordering</h3>
                <p className="text-zinc-600">
                  Let guests order and pay from their phone.
                </p>
              </div>
              <div className="absolute right-0 bottom-0 w-64 h-64 bg-white shadow-xl p-6 flex flex-col items-center justify-center border-l border-t border-zinc-200">
                <div className="w-32 h-32 bg-zinc-900 mb-4 flex items-center justify-center text-white font-mono text-xs">
                  QR CODE
                </div>
                <div className="font-medium text-sm">Scan to Order</div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default FnB;
