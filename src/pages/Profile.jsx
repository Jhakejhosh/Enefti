import Navbar from "../components/Navbar.jsx"
import Footer from "../components/Footer"
import ProfileBody from "../components/ProfileBody"
import Head from "../utils/Head"
import {useGlobalContext} from "../context/Context"

const Profile = () => {
	
	const {themeMode} = useGlobalContext();
	
	return (
		  <div className={themeMode ? "dark" : ""}>
		    <Head title="Profile" description=""/>
		    <Navbar/>
		    <ProfileBody/>
		    <Footer/>
		  </div>
		)
}
export default Profile