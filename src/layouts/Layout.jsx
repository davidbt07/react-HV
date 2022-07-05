import { Footer } from 'components/Footer';
import { Header } from 'components/Header';
import { VerticalInfo } from 'components/VerticalInfo';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <div className='flex flex-col'>
      <Header />
      <VerticalInfo />
      <Outlet />
      <Footer />
    </div>
  );
};

export { Layout };
