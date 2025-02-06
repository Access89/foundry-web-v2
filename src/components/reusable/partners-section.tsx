import { motion } from "framer-motion";

const PartnersSection = () => {
  const partners = [
    { name: "Shield", logo: "/images/brands/sheild 1.png" },
    { name: "Google", logo: "/images/brands/gog 1.png" },
    { name: "CCT", logo: "/images/brands/cct (1) 1.png" },
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
    <section className="container  my-5 flex flex-col gap-4">
      <div className="text-center ">
        <h2 className="text-2xl font-semibold">You are in good company</h2>
      </div>
      <div className="flex justify-center items-center gap-8  whitespace-nowrap">
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
