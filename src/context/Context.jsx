import {createContext, useState, useContext, useReducer} from "react"
import {favoriteReducer, favoriteInitialState} from "./FavoriteReducer"
import {NFT_ITEMS} from "../assets/data/Data"

const AppContext = createContext();

const AppProvider = ({children}) => {
	
	const [themeMode, setThemeMode] = useState(false)
	const [products, setProducts] = useState(NFT_ITEMS)
	
	//useReducer for favorite products
	const [state, dispatch] = useReducer(favoriteReducer, favoriteInitialState)
	const addFavorite = (favorite) => {
		dispatch({type: "ADD_FAVORITE", payload: favorite})
	}
	const removeFavorite = (id) => {
		dispatch({type: "REMOVE_FAVORITE", payload: id})
	}
	
	return (
		 <AppContext.Provider value={{themeMode, setThemeMode, products, setProducts, addFavorite, removeFavorite}}>{children}</AppContext.Provider>
		)
}
export const useGlobalContext = () => {
	return useContext(AppContext)
}
export default AppProvider