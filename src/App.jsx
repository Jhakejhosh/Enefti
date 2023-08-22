import React, {lazy, Suspense} from "react";
import { Routes, Route } from 'react-router-dom'
import "./App.css"
const Home = lazy(() => import("./pages/Home.jsx"));
const ProductDetails = lazy(() => import("./pages/ProductDetails.jsx"))

function App() {

  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<Home/>} exact/>
        <Route path="/product/:id" element={<ProductDetails/>}/>
      </Routes>
      </Suspense>
    </>
  )
}

export default App
