import { motion } from "framer-motion";
import { HireCard } from "./components/hire_card";

const Hire = () => {
  return (
    <>
      <div className="container py-5 md:py-10 pb-10 md:pb-20">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5"
        >
          {hires.map((item, index) => (
            <HireCard key={index} {...item} />
          ))}
        </motion.div>
      </div>
    </>
  );
};

const hires = [
  {
    position: "Warehouse Supervisor",
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
    position: "Sales Agent",
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
    position: "Sales Assistant",
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
    position: "Warehouse Supervisor",
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
    position: "Warehouse Supervisor",
    id: "7",
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
    id: "8",
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
    id: "9",
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

export default Hire;
