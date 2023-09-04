import {FaEthereum} from "react-icons/fa"
import {BsHeart, BsHeartFill} from "react-icons/bs"
import useFavorite from "../hooks/useFavorite"
import {useGlobalContext} from "../context/Context"
import {Link} from "react-router-dom"

const AllNftProduct = ({product}) => {
	
	const {removeFavorite, addFavorite, favoriteItems} = useGlobalContext()
	const {favoriteButton, favoriteSelected} = useFavorite()
	
	return (
		  <div className="dark:bg-darkBg dark:text-darkText p-4 md:px-32">
		    {product.map((item) => {
		    	const {id, image, name, high_bid, low_bid} = item;
		    	return (
		    		  <div key={id} className="flex justify-between items-center py-4 border-b-gray-200 border-2 border-transparent dark:border-b-gray-800">
		    		    <div className="flex justify-center items-center">
		    		      <BsHeart/>
                  <img src={image} alt={name} loading="lazy" className="w-[50px] h-[50px] mx-2 rounded-md"/>
                  <Link to={`/product/${id}`}>
                    <p>{name}</p>
                    <p className="text-gray-500 text-xs font-semibold">Low bid:- {low_bid}ETH</p>
                  </Link>
		    		    </div>
		    		    <div className="flex justify-center items-center">
		    		      <FaEthereum/><p className="ml-1">{high_bid}</p>
		    		    </div>
		    		  </div>
		    		)
		    })}
		  </div>
		)
}

export default AllNftProduct