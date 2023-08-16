import Navbar from "../components/Navbar.jsx"
import Banner from "../components/Banner.jsx"
import Category from "../components/Category"
import {useGlobalContext} from "../context/Context"

const Home = () => {
	
	const {themeMode, setThemeMode} = useGlobalContext();
	
	return (
		  <section className={themeMode ? "dark" : ""}>
		    <Navbar/>
		    <Banner/>
		    <Category/>
		  </section>
		)
}

export default Home