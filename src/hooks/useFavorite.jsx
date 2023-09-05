import {BsHeart, BsHeartFill} from "react-icons/bs"
import {useGlobalContext} from "../context/Context"

const useFavorite = () => {
	const {removeFavorite, addFavorite, favoriteItems, products} = useGlobalContext()
	const favoriteButton = () => {
	  return products.map(product => {
	  	const {id} = product
	    const isPresent = favoriteItems.some(item => item.id === id)
    	const addToFavorite = () => {
	  	  window.alert(product)
	  	  return addFavorite(product)
	    }
	    const removeFromFavorite = () => {
	    	window.alert(isPresent)
	    	return removeFavorite(id)
	    }
	  	return (
	  		  <>
	  		  {isPresent ? <BsHeartFill onClick={() => removeFromFavorite(id)}/> : <BsHeart onClick={() => addToFavorite(product)}/>}
	  		  </>
	  		)
	  })
	}
	return {favoriteButton}
}
export default useFavorite