import { motion } from "framer-motion";

const PartnersSection = () => {
  const partners = [
    { name: "Shield", logo: "/images/brands/sheild 1.png" },
    { name: "Google", logo: "/images/brands/gog 1.png" },
    { name: "Cepodek", logo: "/images/brands/CEPODEK ENTERPRISE.png" },
    { name: "Ubuntu", logo: "/images/brands/2ubuntu (1) 1.png" },
    { name: "Microsoft", logo: "/images/brands/micro 1.png" },
    { name: "AZ Enterprise", logo: "/images/brands/AZ ENTERPRISE.png" },
    { name: "Wema", logo: "/images/brands/wema-Logo-PNG (1) 1.png" },
    { name: "Ras Mawuli", logo: "/images/brands/Ras Ma (1) 1.png" },
  ];

  return (
    <section className="container mx-auto my-10 flex flex-col gap-4">
      <div className="text-center ">
        <h2 className="text-2xl font-semibold">Connect with trusted players</h2>
      </div>
      <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-8 justify-center items-center gap-8 ">
        {partners.map((partner, index) => (
          <motion.div key={index} className="w-[5rem] h-[3rem]">
            <img
              src={partner.logo}
              alt={partner.name}
              className="w-full h-full object-contain"
            />{" "}
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default PartnersSection;
