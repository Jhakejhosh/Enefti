import Navbar from "../components/Navbar.jsx"
import Banner from "../components/Banner.jsx"
import Category from "../components/Category"
import TopSeller from "../components/TopSeller"
import Footer from "../components/Footer"
import React, {lazy, Suspense} from "react";
const NftCategories = lazy(() => import("../utils/NftCategories.jsx"));
import {useGlobalContext} from "../context/Context"

const Home = () => {
	
	const {themeMode} = useGlobalContext();
	
	return (
		  <section className={themeMode ? "dark" : ""}>
		    <Navbar/>
		    <Banner/>
		    <Category/>
		    <TopSeller/>
		    <Suspense fallback={<div>Loading...</div>}>
		      <NftCategories itemCategory="Art" path="art" title="Trending 🔥"/>
		    </Suspense>
		    <Suspense fallback={<div>Loading...</div>}>
		      <NftCategories itemCategory="Music" path="music" title="Best Sales 🚀"/>
		    </Suspense>
		    <Suspense fallback={<div>Loading...</div>}>
		      <NftCategories itemCategory="Sport" path="sport" title="Newly Created 🤑"/>
		    </Suspense>
		    <Suspense fallback={<div>Loading...</div>}>
		      <NftCategories itemCategory="Game" path="game" title="Discount 👾"/>
		    </Suspense>
		    <Footer/>
		  </section>
		)
}

export default Home