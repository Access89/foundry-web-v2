import { CustomButton } from "@/components/shared/shared_customs";
import { RootState } from "@/store/store";
import { motion, useAnimation } from "framer-motion";
import { useSelector } from "react-redux";
import { AdCard } from "./components/ad_card";
import { useEffect } from "react";

const HireDetail = () => {
  const { id, about_role, expertise, position, responsibilities, tags } =
    useSelector((state: RootState) => state.hire);

  const controls = useAnimation();

  useEffect(() => {
    controls.start({
      opacity: [0, 1],
      x: [-20, 0],
      transition: { duration: 0.5 },
    });
  }, [id, controls]);

  return (
    <section className="bg-white lg:h-[100vh] container flex md:flex-row flex-col justify-between md:gap-16 mb-10">
      <motion.section
        initial={{ opacity: 0, x: -20 }}
        animate={controls}
        className="lg:w-[65%]"
      >
        <section className="flex justify-between">
          <div className="flex flex-col gap-2">
            <h3 className="text-[#0E121B] text-xl md:text-2xl font-bold">
              {position}
            </h3>
            <p className=" flex gap-2">
              {tags.map((item, index) => (
                <p
                  className=" bg-[#EDF2EE] rounded-lg p-2 text-xs font-light"
                  key={index}
                >
                  {item}
                </p>
              ))}
            </p>
          </div>
          <CustomButton className="bg-[#4C7F64] rounded-lg text-white font-medium">
            Hire now
          </CustomButton>
        </section>
        <section className="flex flex-col gap-4 md:gap-5 my-5 md:my-10">
          <div className="flex flex-col gap-2 md:gap-4">
            <h4 className="text-base md:text-xl font-semibold">
              About this role
            </h4>
            <p className="text-[#575757] font-normal text-sm">{about_role}</p>
          </div>
          <div className="flex flex-col gap-2 md:gap-4">
            <h4 className="text-base md:text-xl font-semibold">
              Our qualified personnels have
            </h4>
            <ul className="text-[#575757] font-normal text-sm">
              {expertise.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
          <div className="flex flex-col gap-2 md:gap-4">
            <h4 className="text-base md:text-xl font-semibold">
              Responsilbilites
            </h4>
            <ul className="text-[#575757] font-normal text-sm">
              {responsibilities.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        </section>{" "}
      </motion.section>
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="lg:w-[35%] lg:h-[100vh] flex lg:flex-col gap-2 md:gap-4 overflow-y-scroll scrollbar-hide"
      >
        {hires.map((item, index) => (
          <div key={index} className="h-fit">
            <AdCard {...item} />
          </div>
        ))}
      </motion.section>
    </section>
  );
};

const hires = [
  {
    position: "Sales Agent",
    id: "1",
    tags: ["Fulltime", "2-4 years", "Onsite"],
    about_role:
      "As a Warehouse Manager is responsible for overseeing daily warehouse operations, managing inventory, leading staff, and ensuring  safety and compliance. They optimize processes, coordinate logistics, and maintain cost-efficiency, all while ensuring that the warehouse runs smoothly and meets business goals.",
    expertise: [
      "A bachelor's degree in business, logistics, supply chain management, or a related field is often preferred (or with equivalent work experience).",
      "Strong leadership and team management abilities to oversee and motivate warehouse staff.",
      "Understanding of health and safety regulations and a commitment to maintaining a safe working environment.",
      "Effective verbal and written communication abilities for liaising with team members, management, and external partners.",
      "Relevant certifications such as OSHA training, Lean Six Sigma, or other logistics-related credentials can be beneficial.",
    ],
    responsibilities: [
      "Manage all warehouse activities, including receiving, storing, order picking, packing, and shipping of goods.",
      "Maintain accurate inventory records, conduct regular stock audits, and implement inventory control systems to prevent discrepancies.",
      "Lead, train, and schedule warehouse staff, ensuring they adhere to company policies and performance standards.",
      "Monitor operational costs, manage the warehouse budget, and generate performance reports on key metrics such as order fulfillment rates and inventory accuracy.",
    ],
  },
  {
    position: "Sales Assistant",
    id: "2",
    tags: ["Fulltime", "2-4 years", "Onsite"],
    about_role:
      "As a Warehouse Manager is responsible for overseeing daily warehouse operations, managing inventory, leading staff, and ensuring  safety and compliance. They optimize processes, coordinate logistics, and maintain cost-efficiency, all while ensuring that the warehouse runs smoothly and meets business goals.",
    expertise: [
      "A bachelor's degree in business, logistics, supply chain management, or a related field is often preferred (or with equivalent work experience).",
      "Strong leadership and team management abilities to oversee and motivate warehouse staff.",
      "Understanding of health and safety regulations and a commitment to maintaining a safe working environment.",
      "Effective verbal and written communication abilities for liaising with team members, management, and external partners.",
      "Relevant certifications such as OSHA training, Lean Six Sigma, or other logistics-related credentials can be beneficial.",
    ],
    responsibilities: [
      "Manage all warehouse activities, including receiving, storing, order picking, packing, and shipping of goods.",
      "Maintain accurate inventory records, conduct regular stock audits, and implement inventory control systems to prevent discrepancies.",
      "Lead, train, and schedule warehouse staff, ensuring they adhere to company policies and performance standards.",
      "Monitor operational costs, manage the warehouse budget, and generate performance reports on key metrics such as order fulfillment rates and inventory accuracy.",
    ],
  },

  {
    position: "Sales Agent",
    id: "3",
    tags: ["Fulltime", "2-4 years", "Onsite"],
    about_role:
      "As a Warehouse Manager is responsible for overseeing daily warehouse operations, managing inventory, leading staff, and ensuring  safety and compliance. They optimize processes, coordinate logistics, and maintain cost-efficiency, all while ensuring that the warehouse runs smoothly and meets business goals.",
    expertise: [
      "A bachelor's degree in business, logistics, supply chain management, or a related field is often preferred (or with equivalent work experience).",
      "Strong leadership and team management abilities to oversee and motivate warehouse staff.",
      "Understanding of health and safety regulations and a commitment to maintaining a safe working environment.",
      "Effective verbal and written communication abilities for liaising with team members, management, and external partners.",
      "Relevant certifications such as OSHA training, Lean Six Sigma, or other logistics-related credentials can be beneficial.",
    ],
    responsibilities: [
      "Manage all warehouse activities, including receiving, storing, order picking, packing, and shipping of goods.",
      "Maintain accurate inventory records, conduct regular stock audits, and implement inventory control systems to prevent discrepancies.",
      "Lead, train, and schedule warehouse staff, ensuring they adhere to company policies and performance standards.",
      "Monitor operational costs, manage the warehouse budget, and generate performance reports on key metrics such as order fulfillment rates and inventory accuracy.",
    ],
  },
  {
    position: "Sales Assistant",
    id: "4",
    tags: ["Fulltime", "2-4 years", "Onsite"],
    about_role:
      "As a Warehouse Manager is responsible for overseeing daily warehouse operations, managing inventory, leading staff, and ensuring  safety and compliance. They optimize processes, coordinate logistics, and maintain cost-efficiency, all while ensuring that the warehouse runs smoothly and meets business goals.",
    expertise: [
      "A bachelor's degree in business, logistics, supply chain management, or a related field is often preferred (or with equivalent work experience).",
      "Strong leadership and team management abilities to oversee and motivate warehouse staff.",
      "Understanding of health and safety regulations and a commitment to maintaining a safe working environment.",
      "Effective verbal and written communication abilities for liaising with team members, management, and external partners.",
      "Relevant certifications such as OSHA training, Lean Six Sigma, or other logistics-related credentials can be beneficial.",
    ],
    responsibilities: [
      "Manage all warehouse activities, including receiving, storing, order picking, packing, and shipping of goods.",
      "Maintain accurate inventory records, conduct regular stock audits, and implement inventory control systems to prevent discrepancies.",
      "Lead, train, and schedule warehouse staff, ensuring they adhere to company policies and performance standards.",
      "Monitor operational costs, manage the warehouse budget, and generate performance reports on key metrics such as order fulfillment rates and inventory accuracy.",
    ],
  },

  {
    position: "Sales Agent",
    id: "5",
    tags: ["Fulltime", "2-4 years", "Onsite"],
    about_role:
      "As a Warehouse Manager is responsible for overseeing daily warehouse operations, managing inventory, leading staff, and ensuring  safety and compliance. They optimize processes, coordinate logistics, and maintain cost-efficiency, all while ensuring that the warehouse runs smoothly and meets business goals.",
    expertise: [
      "A bachelor's degree in business, logistics, supply chain management, or a related field is often preferred (or with equivalent work experience).",
      "Strong leadership and team management abilities to oversee and motivate warehouse staff.",
      "Understanding of health and safety regulations and a commitment to maintaining a safe working environment.",
      "Effective verbal and written communication abilities for liaising with team members, management, and external partners.",
      "Relevant certifications such as OSHA training, Lean Six Sigma, or other logistics-related credentials can be beneficial.",
    ],
    responsibilities: [
      "Manage all warehouse activities, including receiving, storing, order picking, packing, and shipping of goods.",
      "Maintain accurate inventory records, conduct regular stock audits, and implement inventory control systems to prevent discrepancies.",
      "Lead, train, and schedule warehouse staff, ensuring they adhere to company policies and performance standards.",
      "Monitor operational costs, manage the warehouse budget, and generate performance reports on key metrics such as order fulfillment rates and inventory accuracy.",
    ],
  },
  {
    position: "Sales Assistant",
    id: "6",
    tags: ["Fulltime", "2-4 years", "Onsite"],
    about_role:
      "As a Warehouse Manager is responsible for overseeing daily warehouse operations, managing inventory, leading staff, and ensuring  safety and compliance. They optimize processes, coordinate logistics, and maintain cost-efficiency, all while ensuring that the warehouse runs smoothly and meets business goals.",
    expertise: [
      "A bachelor's degree in business, logistics, supply chain management, or a related field is often preferred (or with equivalent work experience).",
      "Strong leadership and team management abilities to oversee and motivate warehouse staff.",
      "Understanding of health and safety regulations and a commitment to maintaining a safe working environment.",
      "Effective verbal and written communication abilities for liaising with team members, management, and external partners.",
      "Relevant certifications such as OSHA training, Lean Six Sigma, or other logistics-related credentials can be beneficial.",
    ],
    responsibilities: [
      "Manage all warehouse activities, including receiving, storing, order picking, packing, and shipping of goods.",
      "Maintain accurate inventory records, conduct regular stock audits, and implement inventory control systems to prevent discrepancies.",
      "Lead, train, and schedule warehouse staff, ensuring they adhere to company policies and performance standards.",
      "Monitor operational costs, manage the warehouse budget, and generate performance reports on key metrics such as order fulfillment rates and inventory accuracy.",
    ],
  },
];

export default HireDetail;
