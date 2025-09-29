import PricingPage from './pricing';
import { useParams } from 'react-router-dom';

const UpgradePlan = () => {
  const { category, id } = useParams();
  return <PricingPage category={category} customerId={id} />;
};

export default UpgradePlan;
