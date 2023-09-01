import {useEffect} from "react"
import {useParams} from "react-router-dom"
import {NFT_ITEMS} from "../assets/data/Data"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import NftProductBody from "../components/NftProductBody"
import Head from "../utils/Head"
import SimilarNft from "../components/SimilarNft"
import {useGlobalContext} from "../context/Context"


const ProductDetails = () => {
	
	const {themeMode} = useGlobalContext();
	const {id} = useParams();
	const nftProductId = NFT_ITEMS.find(item => item.id == id);
	
	//listing out objects in NFT_ITEMS with the same category
	const sameNftCategory = NFT_ITEMS.filter(product => product.category === nftProductId.category);
	
	//remove nft product from other listed products with similar category
	const similarNftProduct = sameNftCategory.filter(product => product.id !== nftProductId.id)
	
	useEffect(() => {
		window.scrollTo(0,0)
	}, [nftProductId])
	
	return (
		  <section className={themeMode ? "dark" : ""}>
		    <Head title={nftProductId.name} description=""/>
		    <Navbar/>
		    <NftProductBody nftProductId={nftProductId}/>
		    <SimilarNft similarNftProduct={similarNftProduct}/>
		    <Footer/>
		  </section>
		)
}

export default ProductDetails