const PartnersSection = () => {
  const partners = [
    { name: "Shield", logo: "/images/brands/shield.jpg" },
    { name: "Cedi Capital", logo: "/images/brands/cedi.jpg" },
    { name: "Google", logo: "/images/brands/gog 1.png" },
    { name: "CCT", logo: "/images/brands/cct.jpg" },
    { name: "Cepodek", logo: "/images/brands/CEPODEK ENTERPRISE.png" },
    { name: "Ubuntu", logo: "/images/brands/2ubuntu (1) 1.png" },
    { name: "Microsoft", logo: "/images/brands/micro 1.png" },
    { name: "AZ Enterprise", logo: "/images/brands/AZ ENTERPRISE.png" },
    { name: "Wema", logo: "/images/brands/wema-Logo-PNG (1) 1.png" },
    { name: "Ras Mawuli", logo: "/images/brands/Ras Ma (1) 1.png" },
    { name: "Fatum", logo: "/images/brands/Banking Partnership (2) 1.png" },
    { name: "Cal bank", logo: "/images/brands/cal (1) 1.png" },
  ];

  return (
    <section className="mt-5 mb-3 md:mb-10 flex flex-col gap-6 overflow-hidden flex-1 max-w-[100vw]">
      {/* Title Section */}
      <div className="text-center">
        <h2 className="lg:text-xl text-lg font-semibold">
          You are in good company
        </h2>
      </div>

      {/* Partners Grid */}
      <div className="relative w-full overflow-hidden">
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-10 px-4">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="lg:w-[6rem] lg:h-[3rem] w-[4rem] h-[2rem] flex-shrink-0 opacity-70 hover:opacity-100 transition-opacity"
            >
              <img
                src={partner.logo}
                alt={partner.name}
                className="w-full h-full object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
