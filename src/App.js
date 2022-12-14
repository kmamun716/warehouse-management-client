import { Route, Routes } from 'react-router-dom';
import RequireAuth from './components/RequireAuth/RequireAuth';
import Footer from './components/Shared/Footer';
import Header from './components/Shared/Header';
import Login from './pages/Auth/Login/Login';
import Register from './pages/Auth/Register/Register';
import Blogs from './pages/Blogs/Blogs';
import Home from './pages/Home';
import Inventory from './pages/Inventory/Inventory';
import ManageInventory from './pages/ManageInventory/ManageInventory';
import MyProduct from './pages/MyProduct/MyProduct';
import NotFound from './pages/NotFound/NotFound';
import Products from './pages/Products/Products';
function App() {
  return (
    <div className="container">
      <Header/>
     <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/register' element={<Register/>} />
      <Route path='/login' element={<Login/>} />
      <Route path='/blog' element={<Blogs/>} />
      <Route path='/vegetables' element={<Products/>} />
      <Route path='/inventory/:id' element={<RequireAuth>
        <Inventory/>
      </RequireAuth>} />
      <Route path='/myProduct' element={<RequireAuth>
        <MyProduct/>
      </RequireAuth>} />
      <Route path='/manage' element={<RequireAuth>
        <ManageInventory/>
      </RequireAuth>} />
      <Route path="*" element={<NotFound/>} />
     </Routes>
     <Footer/>
    </div>
  );
}

export default App;
