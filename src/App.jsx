import React, {lazy, Suspense} from "react";
import { Routes, Route } from 'react-router-dom'
import "./App.css"
const Home = lazy(() => import("./pages/Home.jsx"));
const ProductDetails = lazy(() => import("./pages/ProductDetails.jsx"))
const Login = lazy(() => import("./pages/Login.jsx"));
const Signup = lazy(() => import("./pages/Signup.jsx"));
const Market = lazy(() => import("./pages/Market.jsx"));
const CreateNft = lazy(() => import("./pages/CreateNFT.jsx"));

function App() {

  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<Home/>} exact/>
        <Route path="/product/:id" element={<ProductDetails/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/market" element={<Market/>}/>
        <Route path="/create" element={<CreateNft/>}/>
      </Routes>
      </Suspense>
    </>
  )
}

export default App
