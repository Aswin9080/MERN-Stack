import './App.css';
import Frontpage from './components/frontpage';
import Mens from './components/catogries/mens assests/mens';
import Cards from './components/cards';
import Billing from './components/billing';
import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Ladies from './components/catogries/ladies assests/ladies'
import Furniture from './components/catogries/furniture assests/furniture';
import Electronics from './components/catogries/electronics assests/electronics';
import Accessories from './components/catogries/accessories assests/accessories';
import Oneimagepage from './components/oneimagepage'
import AuthForm from './components/Auth';
function App() {
  const [sc, setsc] = useState([])
  const [randcoupon, setrandcoupon] = useState(Math.floor(Math.random() * 100000));
  console.log('app', randcoupon)

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/SignOut' element={<AuthForm ></AuthForm>}></Route>
          <Route path='/' element={<AuthForm ></AuthForm>}></Route>
          <Route path='/Mens' element={<Mens sc={sc} setsc={setsc}></Mens>}></Route>
          <Route path='/Ladies' element={<Ladies sc={sc} setsc={setsc}></Ladies>}></Route>
          <Route path='/Furniture' element={<Furniture sc={sc} setsc={setsc}></Furniture>}></Route>
          <Route path='/Electronics' element={<Electronics sc={sc} setsc={setsc}></Electronics>}></Route>
          <Route path='/Accessories' element={<Accessories sc={sc} setsc={setsc}></Accessories>}></Route>
          <Route path='/Oneimagepage' element={<Oneimagepage></Oneimagepage>}></Route>
          <Route path='/Frontpage' element={<Frontpage randcoupon={randcoupon} setrandcoupon={setrandcoupon}></Frontpage>}></Route>
          <Route path='/Cards' element={<Cards sc={sc} setsc={setsc} randcoupon={randcoupon} setrandcoupon={setrandcoupon}></Cards>}></Route>
          <Route path='/Billing' element={<Billing sc={sc} setsc={setsc}></Billing>}></Route>

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

