// src/Layouts/UserLayout.jsx
import { Outlet, Link } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import Footer from '../components/Footer';

function UserLayout() {
  return (
    <div className="user-layout">
     <Sidebar/>

      <main style={{marginLeft:'75px'}}>
        {/* This is where Home or Index will dynamically render */}
        <Outlet />
         <Footer />
      </main>

      
    </div>
  );
}

export default UserLayout;