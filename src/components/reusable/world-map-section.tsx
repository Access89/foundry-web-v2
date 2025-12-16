const WorldMapSection = () => {
  return (
    <section className="pt-8 md:pt-2 pb-10 mt-0 md:-mt-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-4">
          {/* Optional header - currently commented out */}
        </div>

        <div className="relative">
          {/* World Map Image */}
          <div className="flex justify-center">
            <img
              src="/images/map.webp"
              alt="World Map showing global trade connections"
              className="w-full mt-4 max-w-4xl h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorldMapSection;
