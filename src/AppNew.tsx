import { Routes, Route } from "react-router-dom";
import Layout from "./pages/v2/Layout";
import Home from "./pages/v2/Home";
import Retail from "./pages/v2/Retail";
import FnB from "./pages/v2/FnB";
import Enterprise from "./pages/v2/Enterprise";
import Banks from "./pages/v2/Banks";
import BaaS from "./pages/v2/BaaS";
import Engagement from "./pages/v2/Engagement";
import Hardware from "./pages/v2/Hardware";
import Credit from "./pages/v2/Credit";
import KYC from "./pages/v2/KYC";
import Invoices from "./pages/v2/Invoices";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="retail" element={<Retail />} />
        <Route path="fnb" element={<FnB />} />
        <Route path="enterprise" element={<Enterprise />} />
        <Route path="banks" element={<Banks />} />
        <Route path="baas" element={<BaaS />} />
        <Route path="engagement" element={<Engagement />} />
        <Route path="hardware" element={<Hardware />} />
        <Route path="credit" element={<Credit />} />
        <Route path="kyc" element={<KYC />} />
        <Route path="invoices" element={<Invoices />} />
      </Route>
    </Routes>
  );
};

export default App;
