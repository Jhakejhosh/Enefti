import Navbar from "../components/Navbar.jsx"
import Footer from "../components/Footer"
import CreateNftForm from "../components/CreateNftForm"
import {useGlobalContext} from "../context/Context"

const CreateNft = () => {
	
	const {themeMode} = useGlobalContext();
	
	return (
		  <div className={themeMode ? "dark" : ""}>
		    <Navbar/>
		    <CreateNftForm/>
		    <Footer/>
		  </div>
		)
}
export default CreateNft