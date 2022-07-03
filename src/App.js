import { Route, Routes } from 'react-router-dom';
import RequireAuth from './components/RequireAuth/RequireAuth';
import Footer from './components/Shared/Footer';
import Header from './components/Shared/Header';
import Login from './pages/Auth/Login/Login';
import Register from './pages/Auth/Register/Register';
import Home from './pages/Home';
import NotFound from './pages/NotFound/NotFound';
import ProtectPage from './pages/Protect/ProtectPage';
function App() {
  return (
    <div className="container">
      <Header/>
     <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/register' element={<Register/>} />
      <Route path='/login' element={<Login/>} />
      <Route path='/protect' element={<RequireAuth>
        <ProtectPage/>
      </RequireAuth>} />
      <Route path="*" element={<NotFound/>} />
     </Routes>
     <Footer/>
    </div>
  );
}

export default App;
