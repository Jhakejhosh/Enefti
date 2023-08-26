import Navbar from "../components/Navbar.jsx"
import Footer from "../components/Footer"
import MarketBanner from "../components/MarketBanner"
import SearchAndFilter from "../components/SearchAndFilter"
import {NFT_ITEMS} from "../assets/data/Data"
import React, {lazy, Suspense, useState} from "react";
const AllNftProduct = lazy(() => import("../components/AllNftProduct.jsx"));
import {useGlobalContext} from "../context/Context"

const Market = () => {
	
	const {themeMode} = useGlobalContext();
	const [showOptions, setShowOptions] = useState(false)

	
	return (
		  <section className={themeMode ? "dark" : ""}>
		    <Navbar/>
		    <MarketBanner/>
		    <SearchAndFilter setShowOptions={setShowOptions} showOptions={showOptions}/>
		    <Suspense fallback={<div>Loading...</div>}>
		      <AllNftProduct product={NFT_ITEMS}/>
		    </Suspense>
		    <Footer/>
		  </section>
		)
}

export default Market