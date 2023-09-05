import {FaEthereum} from "react-icons/fa"
import {BsHeart, BsHeartFill} from "react-icons/bs"
import {useGlobalContext} from "../context/Context"
import {Link} from "react-router-dom"
import {toast} from "react-toastify";

const AllNftProduct = () => {
	
	const {removeFavorite, addFavorite, products, favoriteItems} = useGlobalContext()
	
	return (
		  <div className="dark:bg-darkBg dark:text-darkText p-4 md:px-32">
		    {products.map((item) => {
		    	const {id, image, name, high_bid, low_bid} = item;
		    	const addToFavorite = () => {
		      		toast.success(`${name} was added to favorite😀`, {
		      			position: toast.POSITION.TOP_RIGHT,
		      			autoClose: 3000,
		      		});
		    		return addFavorite(item)
		    	}
		    	const removeFromFavorite = () => {
		      		toast.info(`${name} was removed from favorite☹️`, {
		      			position: toast.POSITION.TOP_RIGHT,
		      			autoClose: 3000,
		      		});
		    		return removeFavorite(id)
		    	}
		    	return (
		    		  <div key={id} className="flex justify-between items-center py-4 border-b-gray-200 border-2 border-transparent dark:border-b-gray-800">
		    		    <div className="flex justify-center items-center">
		    		      <span className="text-gray-500">{favoriteItems.some(favorite => favorite.id === id) ? <BsHeartFill onClick={removeFromFavorite}/> : <BsHeart onClick={() => addToFavorite(item)}/>}</span>
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