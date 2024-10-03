

import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";


import Header from "./Components/Header.jsx";
import Home from "./Components/Home.jsx";
import Cart from "./Components/Cart.jsx";

function App() {
  return (
    <>
     
     <BrowserRouter>
     <Header/>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/cart" element={<Cart />}></Route>

          
        
      </Routes>
    </BrowserRouter>
      
      
    </>
  );
}

export default App;
