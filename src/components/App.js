import Register from "./Resgiter";
import Home from "./Home"


import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState } from "react";

function App(){
  return( 
  <BrowserRouter>
    <Routes>
      <Route element={<Home/>} path="/" />
      <Route element ={<Register/>} path="/register-product" />
    </Routes>
    </BrowserRouter>)
}

export default App;
