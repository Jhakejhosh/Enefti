import {createContext, useState, useContext} from "react"

const AppContext = createContext();

const AppProvider = ({children}) => {
	
	const [themeMode, setThemeMode] = useState(false)
	
	return (
		 <AppContext.Provider value={{themeMode, setThemeMode}}>{children}</AppContext.Provider>
		)
}
export const useGlobalContext = () => {
	return useContext(AppContext)
}
export default AppProvider