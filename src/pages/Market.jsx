import Navbar from "../components/Navbar.jsx"
import Footer from "../components/Footer"
import MarketBanner from "../components/MarketBanner"
import Head from "../utils/Head"
import SearchAndFilter from "../components/SearchAndFilter"
import {NFT_ITEMS} from "../assets/data/Data"
import React, {lazy, Suspense, useState} from "react";
const AllNftProduct = lazy(() => import("../components/AllNftProduct.jsx"));
import {useGlobalContext} from "../context/Context"

const Market = () => {
	
	const {themeMode} = useGlobalContext();
	const [showOptions, setShowOptions] = useState(false)
	const [products, setProducts] = useState(NFT_ITEMS)

	
	return (
		  <section className={themeMode ? "dark" : ""}>
		    <Head title="NFT Product" description="Explore all the NFT products here"/>
		    <Navbar/>
		    <MarketBanner/>
		    <SearchAndFilter setShowOptions={setShowOptions} showOptions={showOptions} products={products} setProducts={setProducts}/>
		    <Suspense fallback={<div>Loading...</div>}>
		      {products.length === 0 ? <p className="text-center py-4">NFT not found</p> : <AllNftProduct product={products}/>}
		    </Suspense>
		    <Footer/>
		  </section>
		)
}

export default Market