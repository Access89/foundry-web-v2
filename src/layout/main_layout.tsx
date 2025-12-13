import { Outlet, useNavigate } from "react-router-dom";
import LazyPageWrapper from "./lazy.page.wrapper";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store/store";
import { fetchSubscriptionPlans } from "@/store/features/plans";
import Navbar from "@/pages/v2/components/Navbar";
import Footer from "@/pages/v2/components/Footer";
import MobileMenu from "@/pages/v2/components/MobileMenu";
import { getNavData } from "@/pages/v2/constants";

const MainLayout = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isLoading, lastFetched } = useSelector(
    (state: RootState) => state.plans
  );

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSegment, setActiveSegment] = useState("merchant");
  const [hoveredNav, setHoveredNav] = useState<string | null>(null);

  const navData = getNavData(navigate, setActiveSegment);

  // Fetch plans on app initialization if not already fetched or if data is stale (older than 5 minutes)
  useEffect(() => {
    const shouldFetch =
      !lastFetched || Date.now() - lastFetched > 5 * 60 * 1000;

    if (shouldFetch && !isLoading) {
      dispatch(fetchSubscriptionPlans({}) as any);
    }
  }, [dispatch, lastFetched, isLoading]);

  return (
    <main className="bg-background">
      <Navbar
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
        activeSegment={activeSegment}
        setActiveSegment={setActiveSegment}
        hoveredNav={hoveredNav}
        setHoveredNav={setHoveredNav}
        navData={navData}
      />
      <MobileMenu
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
        activeSegment={activeSegment}
        setActiveSegment={setActiveSegment}
        navData={navData}
      />
      <div className="">
        <LazyPageWrapper component={<Outlet />} />
      </div>
      <Footer
        activeSegment={activeSegment}
        setActiveSegment={setActiveSegment}
      />
    </main>
  );
};

export default MainLayout;
