import React, {lazy, Suspense} from "react";
import { Routes, Route } from 'react-router-dom'
import "./App.css"
const Home = lazy(() => import("./pages/Home.jsx"));

function App() {

  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<Home/>} exact/>
      </Routes>
      </Suspense>
    </>
  )
}

export default App
