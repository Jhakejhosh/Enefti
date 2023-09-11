import {NFT_ITEMS} from "../assets/data/Data"
import {FaEthereum} from "react-icons/fa"
import {Link} from "react-router-dom"


const PopularNft = () => {
	
	const popular = NFT_ITEMS.slice(3,7);
	
	return (
		  <section className="w-full relative px-4 md:px-32 dark:bg-darkBg dark:text-darkText">
		    <div className="flex items-center justify-between"><h1 className="font-semibold text-md">Popular 💡</h1><Link to="/market" className="text-sm text-subColor font-semibold">see all >>></Link></div>
		    <div className="grid grid-cols-2 w-full gap-4 py-4 md:grid-cols-4">{
		    	 popular.map(nft => { 
		    		const {id, image, name, high_bid} = nft;
		    		return (
		    			  <div className="w-full relative flex-shrink-0 snap-end overflow-hidden rounded-md shadow-md" key={id}>
                  <Link to={`/product/${id}`}>
                    <img src={image} alt={name} loading="lazy" className="w-full h-[150px] object-cover"/>
                  </Link>
		    			    <div className="p-2 dark:bg-gray-900">
		    			      <p className="font-semibold text-sm mb-2">{name}</p>
		    			      <div className="flex justify-between items-center">
		    			        <p className="text-sm flex items-center text-gray-700 dark:text-gray-400 font-medium"><span><FaEthereum/></span>{high_bid}</p>
		    			      </div>
		    			    </div>
		    			  </div>
		    			)
		    	})
		    }</div>
		  </section>
		)
}

export default PopularNft