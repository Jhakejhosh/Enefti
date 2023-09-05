import React, {lazy, Suspense} from "react";
import { Routes, Route } from 'react-router-dom'
import "./App.css"
const Home = lazy(() => import("./pages/Home.jsx"));
const ProductDetails = lazy(() => import("./pages/ProductDetails.jsx"))
const Login = lazy(() => import("./pages/Login.jsx"));
const Signup = lazy(() => import("./pages/Signup.jsx"));
const Market = lazy(() => import("./pages/Market.jsx"));
const CreateNft = lazy(() => import("./pages/CreateNFT.jsx"));
const Profile = lazy(() => import("./pages/Profile.jsx"));
const FavoriteNFT = lazy(() => import("./pages/FavoriteNFT.jsx"));
const CreatedNFT = lazy(() => import("./pages/CreatedNFT.jsx"));
import {useGlobalContext} from "./context/Context"
import {ToastContainer} from "react-toastify"
import "react-toastify/dist/ReactToastify.css";

function App() {
	
	const {themeMode} = useGlobalContext()

  return (
    <>
      <ToastContainer theme={!themeMode ? "light" : "dark"}/>
      <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<Home/>} exact/>
        <Route path="/product/:id" element={<ProductDetails/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/market" element={<Market/>}/>
        <Route path="/create" element={<CreateNft/>}/>
        <Route path="/profile" element={<Profile/>}>
          <Route index element={<FavoriteNFT/>}/>
          <Route path="favorites" element={<FavoriteNFT/>}/>
          <Route path="myNft" element={<CreatedNFT/>}/>
        </Route>
      </Routes>
      </Suspense>
    </>
  )
}

export default App
