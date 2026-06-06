// src/App.jsx
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import UserLayout from './Layouts/UserLayout'
import Home from './Pages/Home'
import Index from './Pages/Index'
import Sidebar from './components/Sidebar'
import Viewfiles from './Pages/Viewfiles'
import Newarrivals from './components/newarrivals'
import Testdrive from './Pages/Testdrive'
import Car from './Pages/Car'
import Wishlist from './Pages/Wishlist'
import Profile from './Pages/Profile'
import Order from './Pages/Order'
import Checkout from './Pages/Checkout'
import Login from './Pages/Login'
import MyCart from './Pages/MyCart'
import Search from './Pages/Search'
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Index />} /> 
         <Route path="view-car" element={<Viewfiles />} />
         <Route path="New-arrivals" element={<Newarrivals />} />
          <Route path="test-drive" element={<Testdrive />} />
           <Route path="car-models" element={<Car />} />
              <Route path="wishlist" element={<Wishlist />} />
          <Route path="Profile" element={<Profile />} />
                <Route path="order" element={<Order />} />
                                <Route path="checkout" element={<Checkout />} />
          
<Route path="login" element={<Login />} />
<Route path="mycart" element={<MyCart />} />
         <Route path="search" element={<Search />} />

         
        {/* The Layout wraps these child routes */}
        <Route path="/" element={<UserLayout />}>
          {/* index means this renders on the base path "/" */}
          
          
          {/* This renders on "/home" */}
          <Route path="home" element={<Home />} />
          
          
          
        </Route>
        
      </Routes>
    </BrowserRouter>
  )
}

export default App