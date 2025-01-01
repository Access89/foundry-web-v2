import Footer from '@/components/shared/footer';
import NavbarComponent from '@/components/shared/navbar';
import { Outlet } from 'react-router-dom';
import LazyPageWrapper from './lazy.page.wrapper';

const MainLayout = () => {
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
