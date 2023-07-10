import React from 'react'
import { Outlet, useLocation  } from "react-router-dom";
// import l from '../components/Navbar';
import Footer from './Footer/Footer';
import Header from './Header/Header'
const Layout = () => {
  const location = useLocation();
  // Check if the current location is the Landing page or Login page
  const hideHeaderFooter = location.pathname === '/' || location.pathname === '/login';
  if (hideHeaderFooter) {
    return <Outlet />;
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