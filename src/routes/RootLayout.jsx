import MainHeader from '../components/MainHeader';
import { Outlet } from 'react-router-dom';

export default function RootLayout() {
  return (
    <>
      <MainHeader />
      <Outlet />
    </>
  );
}

// MainHeader component is shared. For that it must be shown in everywhere
// Outlet component lets us to use children inside of the Root Layout
