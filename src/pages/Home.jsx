import Navbar from "../components/Navbar.jsx"
import Banner from "../components/Banner.jsx"
import Category from "../components/Category"
import TopSeller from "../components/TopSeller"
import React, {lazy, Suspense} from "react";
const NftCategories = lazy(() => import("../utils/NftCategories.jsx"));
import {useGlobalContext} from "../context/Context"

const Home = () => {
	
	const {themeMode, setThemeMode} = useGlobalContext();
	
	return (
		  <section className={themeMode ? "dark" : ""}>
		    <Navbar/>
		    <Banner/>
		    <Category/>
		    <TopSeller/>
		    <Suspense fallback={<div>Loading...</div>}>
		    <NftCategories itemCategory="Art" path="art" title="Art Collections"/>
		    <NftCategories itemCategory="Music" path="music" title="Music Collections"/>
		    <NftCategories itemCategory="Sport" path="sport" title="Sport Collections"/>
		    <NftCategories itemCategory="Game" path="game" title="Game Collections"/>
		    </Suspense>
		  </section>
		)
}

export default Home