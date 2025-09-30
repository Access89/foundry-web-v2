import Footer from '@/components/shared/footer';
import NavbarComponent from '@/components/shared/navbar';
import { Outlet } from 'react-router-dom';
import LazyPageWrapper from './lazy.page.wrapper';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/store/store';
import { fetchSubscriptionPlans } from '@/store/features/plans';

const MainLayout = () => {
  const dispatch = useDispatch();
  const { isLoading, lastFetched } = useSelector(
    (state: RootState) => state.plans,
  );

  // Fetch plans on app initialization if not already fetched or if data is stale (older than 5 minutes)
  useEffect(() => {
    const shouldFetch =
      !lastFetched || Date.now() - lastFetched > 5 * 60 * 1000;

    if (shouldFetch && !isLoading) {
      dispatch(
        fetchSubscriptionPlans({ page: 1, limit: 10, category_id: '3' }) as any,
      );
    }
  }, [dispatch, lastFetched, isLoading]);

  return (
    <main className="bg-background">
      <NavbarComponent />
      <div className="pt-7">
        <LazyPageWrapper component={<Outlet />} />
      </div>
      <Footer />
    </main>
  );
};

export default MainLayout;
