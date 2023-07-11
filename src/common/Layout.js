import React from 'react'
import { Outlet, useLocation  } from "react-router-dom";
// import l from '../components/Navbar';
import Footer from './Footer/Footer';
import Header from './Header/Header'
import HeaderDashboard from './Header/HeaderDashboard';
const Layout = () => {
  const location = useLocation();
  // Check if the current location is the Landing page or Login page
  const hideHeaderFooter = location.pathname === '/' || location.pathname === '/login';
  const diffHeader = location.pathname === '/Dashboard';
  if (hideHeaderFooter) {
    return <Outlet />;
  }
  if (diffHeader) {
    return (
      <><HeaderDashboard /><Outlet /></>
    );
  }
  return (
    <>
        <Header/>
            <Outlet />
        <Footer/>
    </>
  )
}
export default Layout;