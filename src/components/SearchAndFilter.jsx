import {BiChevronDown} from "react-icons/bi"
import {NFT_ITEMS} from "../assets/data/Data"

const SearchAndFilter = ({showOptions, setShowOptions, products, setProducts}) => {
	
	const options = ["Alphabet (A-Z)", "Price"]
	//Adding "All category" to the array of nft categories
	const allCategory = ["All category", ...new Set(NFT_ITEMS.map(product => product.category))]
	
	const handleCategoryFilter = e => {
		const categoryValue = e.target.value;
		if (categoryValue === "All category") {
			return setProducts(NFT_ITEMS)
		}
		const filteredCategoryProduct = NFT_ITEMS.filter(item => item.category === categoryValue)
		return setProducts(filteredCategoryProduct)
	}
	
	const handleSearch = e => {
		const searchValue = e.target.value;
		const searchedProduct = NFT_ITEMS.filter(product => product.name.toLowerCase().includes(searchValue.toLowerCase()))
		return setProducts(searchedProduct)
	}
	
	const sortedProduct = option => {
		if (option === "Alphabet (A-Z)") {
			const alphabeticalOrder = NFT_ITEMS.sort((a, b) => {
				if (a.name > b.name) return 1
				return -1
			})
			return alphabeticalOrder
		}
		if (option === "Price") {
			const priceOrder = NFT_ITEMS.sort((a, b) => a.high_bid > b.high_bid)
			return priceOrder
		}
		setShowOptions(false)
	}
	
	
	return (
		  <div className="dark:bg-darkBg dark:text-darkText p-4 relative md:px-32">
		    <input type="text" placeholder="🔍 Search..." className="border-2 border-gray-400 w-full rounded-md p-2 bg-transparent" onChange={handleSearch}/>
		    <div className="flex justify-between items-center my-2">
		      <button className="flex justify-between items-center bg-subColor p-2 rounded-md text-sm font-semibold" onClick={() => setShowOptions(!showOptions)}>Sort by <BiChevronDown/></button>
		      <select onChange={handleCategoryFilter} className="p-2 bg-transparent rounded-md outline-none border-2 border-subColor font-bold">
		        {allCategory.map((list, index) => {
		        	return (
                  <option key={index} value={list} >{list}</option>
		          )
		        })}
		      </select>
		   </div>
		    {showOptions ? (<div className="absolute left-4 top-[85%] bg-darkText shadow-md p-4 z-40 md:left-32 rounded-md">
		      <ul>{options.map(item => {
		      	return (
		      		  <li key={item.index} className="mb-2 last:mb-0 text-gray-900" onClick={() => sortedProduct(item)}>{item}</li>
		      		)
		      })}</ul>
		    </div>) : null}
		  </div>
		)
}

export default SearchAndFilter