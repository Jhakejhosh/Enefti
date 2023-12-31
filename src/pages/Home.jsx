import Navbar from "../components/Navbar.jsx"
import Banner from "../components/Banner.jsx"
import Category from "../components/Category"
import TopSeller from "../components/TopSeller"
import Footer from "../components/Footer"
import Head from "../utils/Head"
import React, {lazy, Suspense} from "react";
const TrendingNft = lazy(() => import("../components/NftCategories.jsx"));
const PopularNft = lazy(() => import("../components/PopularNft.jsx"));
import {useGlobalContext} from "../context/Context"

const Home = () => {
	
	const {themeMode} = useGlobalContext();
	
	return (
		  <section className={themeMode ? "dark" : ""}>
		    <Head title="Home" description="Get free access to save and create your own nft"/>
		    <Navbar/>
		    <Banner/>
		    <Category/>
		    <TopSeller/>
		    <Suspense fallback={<div>Loading...</div>}>
		      <TrendingNft/>
		    </Suspense>
		    <Suspense fallback={<div>Loading...</div>}>
		      <PopularNft/>
		    </Suspense>
		    <Footer/>
		  </section>
		)
}

export default Home