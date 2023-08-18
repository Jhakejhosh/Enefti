import Navbar from "../components/Navbar.jsx"
import Banner from "../components/Banner.jsx"
import Category from "../components/Category"
import TopSeller from "../components/TopSeller"
import ArtCategory from "../components/Art category"
import {useGlobalContext} from "../context/Context"

const Home = () => {
	
	const {themeMode, setThemeMode} = useGlobalContext();
	
	return (
		  <section className={themeMode ? "dark" : ""}>
		    <Navbar/>
		    <Banner/>
		    <Category/>
		    <TopSeller/>
		    <ArtCategory/>
		  </section>
		)
}

export default Home