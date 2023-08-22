import {useParams} from "react-router-dom"
import {NFT_ITEMS} from "../assets/data/Data"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import NftProductBody from "../components/NftProductBody"
import {useGlobalContext} from "../context/Context"


const ProductDetails = () => {
	
	const {themeMode} = useGlobalContext();
	const {id} = useParams();
	const nftProductId = NFT_ITEMS.find(item => item.id == id);
	
	return (
		  <section className={themeMode ? "dark" : ""}>
		    <Navbar/>
		    <NftProductBody nftProductId={nftProductId}/>
		    <Footer/>
		  </section>
		)
}

export default ProductDetails