import {BsHeart, BsHeartFill} from "react-icons/bs"
import {useGlobalContext} from "../context/Context"

const useFavorite = () => {
	const {removeFavorite, addFavorite, favoriteItems, products} = useGlobalContext()
	const favoriteProduct = products.map(product => product)
	const favoriteButton = <BsHeart onClick={() => addButton(product)}/>
	return {favoriteButton}
}
export default useFavorite