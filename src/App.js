import './App.css'; 
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Pages/Home/Home';
import Notification from './Pages/Notification/Notification';
import DaftarJual from './Components/DaftarJual/DaftarJual'
import Semua from './Components/DaftarJual/Semua'
import Diminati from './Components/DaftarJual/Diminati'
import Terjual from './Components/DaftarJual/Terjual'
import Wishlist from './Components/DaftarJual/Wishlist'
import Login from './Pages/LogReg/Login';
import Register from './Pages/LogReg/Register';
import InfoProfile from './Pages/Profile/InfoProfile'
import InfoProduk from './Pages/Product/InfoProduk';
import InfoProdukBuyer from './Pages/Product/InfoProdukBuyer';
import Logout from './Components/LoginRegister/Logout'
import Protected from './Components/HOC/Protected'
import Unprotected from './Components/HOC/Unprotected';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public */}
        <Route path="/" element={<Home />} />
        <Route path="/infopb/:id" element={<InfoProdukBuyer />} />
        <Route path="/" element={<Unprotected />}>
          <Route path="/login" element={<Login />} />
        </Route>
        <Route path="/" element={<Unprotected />}>
          <Route path="/register" element={<Register />} />
        </Route>
        <Route path="/logout" element={<Logout/>}/>
       
       
        {/* Protected */}
        <Route path="/" element={<Protected />}>
          <Route path="/profile" element={<DaftarJual/>}>
            <Route path="semua" element={<Semua/>}/>
            <Route path="diminati" element={<Diminati/>}/>
            <Route path="terjual" element={<Terjual/>}/>
            <Route path="wishlist" element={<Wishlist/>}/>
          </Route>
        </Route>
        <Route path="/" element={<Protected />}>
          <Route path="/notification" element={<Notification />} />
        </Route>
        <Route path="/" element={<Protected />}>
          <Route path="/info" element={<InfoProfile />} />  
        </Route>
        <Route path="/" element={<Protected />}>
          <Route path="/infop/:id" element={<InfoProduk />} />
        </Route>
      </Routes>
      {/* <Route path="/floatbutton" element={<FloatButton />} /> */}
    </BrowserRouter>
    
  );
}

export default App;
