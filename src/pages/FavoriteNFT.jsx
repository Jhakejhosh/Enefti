import {useGlobalContext} from "../context/Context"
import {FaEthereum} from "react-icons/fa"
import {Link} from "react-router-dom"

const FavoriteNFT = () => {
	
	const {favoriteItems} = useGlobalContext();
	
	return (
		  <>
		    <div className="grid grid-cols-2 w-full gap-4 py-4 md:grid-cols-4">{
		    	 favoriteItems.map(nft => { 
		    		const {id, image, name, high_bid} = nft;
		    		return (
		    			  <Link to={`/product/${id}`}><div className="w-full relative flex-shrink-0 snap-end overflow-hidden rounded-md shadow-md p-2 dark:bg-gray-900" key={id}>
                  <img src={image} alt={name} loading="lazy" className="w-full h-[150px] object-cover rounded-md"/>
		    			    <div className="py-2">
		    			      <p className="font-semibold text-sm mb-2">{name}</p>
		    			      <div className="flex justify-between items-center">
		    			        <p className="text-sm flex items-center text-gray-700 dark:text-gray-400 font-medium"><span><FaEthereum/></span>{high_bid}</p>
		    			      </div>
		    			    </div>
		    			  </div></Link>
		    			)
		    	})
		    }</div>
		  </>
		)
}

export default FavoriteNFT