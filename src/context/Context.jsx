import {createContext, useState, useContext, useReducer, useEffect} from "react"
import {favoriteReducer, favoriteInitialState} from "./FavoriteReducer"
import {NFT_ITEMS} from "../assets/data/Data"

const AppContext = createContext();

const AppProvider = ({children}) => {
	
	const [themeMode, setThemeMode] = useState(true)
	const [products, setProducts] = useState(NFT_ITEMS)
	
	//useReducer for favorite products
	const [state, dispatch] = useReducer(favoriteReducer, favoriteInitialState)
	const addFavorite = (favorite) => {
		dispatch({type: "ADD_FAVORITE", payload: favorite})
	}
	const removeFavorite = (id) => {
		dispatch({type: "REMOVE_FAVORITE", payload: id})
	}
	useEffect(() => {
		localStorage.setItem("favorite", JSON.stringify(state.favoriteItems))
	}, [state])
	
	return (
		 <AppContext.Provider value={{...state, themeMode, setThemeMode, products, setProducts, addFavorite, removeFavorite}}>{children}</AppContext.Provider>
		)
}
export const useGlobalContext = () => {
	return useContext(AppContext)
}
export default AppProvider