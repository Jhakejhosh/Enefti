import {BiChevronDown} from "react-icons/bi"

const SearchAndFilter = ({showOptions, setShowOptions}) => {
	
	const options = ["Alphabet", "Latest"]
	
	return (
		  <div className="dark:bg-darkBg dark:text-darkText p-4 relative md:px-32">
		    <input type="text" placeholder="Search..." className="border-2 border-gray-400 w-full rounded-md p-2 bg-transparent"/>
		    <button className="flex justify-between items-center bg-subColor p-2 rounded-md text-sm font-semibold my-2" onClick={() => setShowOptions(!showOptions)}>Sort by <BiChevronDown/></button>
		    {showOptions ? (<div className="absolute left-4 top-[85%] bg-darkText shadow-md p-4 z-40 md:left-32 rounded-md">
		      <ul>{options.map(item => {
		      	return (
		      		  <li key={item.index} className="mb-4 last:mb-0 text-gray-900">
		      		    <p className="ml-4">{item}</p>
		      		  </li>
		      		)
		      })}</ul>
		    </div>) : null}
		  </div>
		)
}

export default SearchAndFilter