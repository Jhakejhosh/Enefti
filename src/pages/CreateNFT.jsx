import Navbar from "../components/Navbar.jsx"
import Footer from "../components/Footer"
import CreateNftForm from "../components/CreateNftForm"
import Head from "../utils/Head"
import {useGlobalContext} from "../context/Context"

const CreateNft = () => {
	
	const {themeMode} = useGlobalContext();
	
	return (
		  <div className={themeMode ? "dark" : ""}>
		    <Head title="Create" description="Create your own NFT product here"/>
		    <Navbar/>
		    <CreateNftForm/>
		    <Footer/>
		  </div>
		)
}
export default CreateNft