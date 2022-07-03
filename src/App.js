import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import NotFound from './pages/NotFound/NotFound';
function App() {
  return (
    <div className="container">
     <Routes>
      <Route path='/' element={<Home/>} />
      <Route path="*" element={<NotFound/>} />
     </Routes>
    </div>
  );
}

export default App;
