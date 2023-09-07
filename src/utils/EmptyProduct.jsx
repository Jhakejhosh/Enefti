import {BiErrorCircle} from "react-icons/bi"

const EmptyProduct = ({empty}) => {
	return (
		  <div className="flex flex-col justify-between items-center py-6 dark:text-gray-500 text-gray-300">
		    <span><BiErrorCircle className="text-[100px] mb-2"/></span>
		    <h1 className="font-bold">{empty}</h1>
		  </div>
		)
}
export default EmptyProduct