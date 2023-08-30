import {NFT_ITEMS} from "../assets/data/Data"
import {FaEthereum} from "react-icons/fa"
import {BsHeart, BsHeartFill} from "react-icons/bs"
import {Link} from "react-router-dom"


const TrendingNft = () => {
	
	const trending = NFT_ITEMS.slice(0,3);
	
	return (
		  <section className="w-full relative px-4 md:px-32 dark:bg-darkBg dark:text-darkText">
		    <h1 className="font-semibold text-md md:text-center">Trending 🔥</h1>
		    <div className="snap-x overflow-scroll flex w-full gap-4 py-4 md:justify-center">{
		    	 trending.map(nft => { 
		    		const {id, image, name, high_bid} = nft;
		    		return (
	             <div className="w-[130px] relative flex-shrink-0 snap-end overflow-hidden rounded-md shadow-md" key={id}>
	    			     <Link to={`/product/${id}`}><img src={image} alt={name} loading="lazy" className="w-full h-[130px] object-cover"/></Link>
		    			    <div className="p-2 dark:bg-gray-900">
		    			      <p className="font-semibold text-sm mb-2">{name}</p>
		    			      <div className="flex justify-between items-center">
		    			        <p className="text-sm flex items-center text-gray-700 dark:text-gray-400 font-medium"><span><FaEthereum/></span>{high_bid}</p>
	    			          <span className="text-gray-800 dark:text-gray-400"><BsHeart/></span>
	    			       </div>     
		    			    </div>
		    			  </div>
		    			)
		    	})
		    }</div>
		  </section>
		)
}

export default TrendingNft