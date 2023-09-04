export const favoriteInitialState = {
		favoriteItems: []
	}
	
export const favoriteReducer = (state, action) => {
	if(action.type === "ADD_FAVORITE") {
		return {...state, favoriteItems: [...state.favoriteItems, {...action.payload}]}
	}
	if(action.type === "REMOVE_FAVORITE") {
		const newItems = state.favoriteItems.filter(item => item.id !== action.payload)
		return {...state, favoriteItems: newItems}
	}
	return state;
}