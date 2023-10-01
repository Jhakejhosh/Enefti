import Navbar from "../components/Navbar.jsx"
import Footer from "../components/Footer"
import MarketBanner from "../components/MarketBanner"
import Head from "../utils/Head"
import SearchAndFilter from "../components/SearchAndFilter"
import React, {lazy, Suspense, useState} from "react";
const AllNftProduct = lazy(() => import("../components/AllNftProduct.jsx"));
import {useGlobalContext} from "../context/Context"

const Market = () => {
	
	const {themeMode, products, setProducts} = useGlobalContext();
	const [showOptions, setShowOptions] = useState(false)

	
	return (
		  <section className={themeMode ? "dark" : ""}>
		    <Head title="NFT Product" description="Explore all the NFT products here"/>
		    <Navbar/>
		    <MarketBanner/>
		    <SearchAndFilter setShowOptions={setShowOptions} showOptions={showOptions} products={products} setProducts={setProducts}/>
		    <Suspense fallback={<div className="w-full flex justify-center items-center h-[50vh] dark:bg-darkBg dark:text-darkText">Product loading...</div>}>
		      {products.length === 0 ? <p className="text-center py-4">NFT not found</p> : <AllNftProduct product={products}/>}
		    </Suspense>
		    <Footer/>
		  </section>
		)
}

export default Market