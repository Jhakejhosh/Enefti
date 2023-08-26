import {FaEthereum} from "react-icons/fa"
import {Link} from "react-router-dom"

const AllNftProduct = ({product}) => {
	return (
		  <div className="dark:bg-darkBg dark:text-darkText p-4 md:px-32">
		    {product.map((item) => {
		    	const {id, image, name, high_bid} = item;
		    	return (
		    		  <Link to={`/product/${id}`}><div key={id} className="flex justify-between items-center py-4 border-b-gray-200 border-2 border-transparent dark:border-b-gray-800">
		    		    <div className="flex justify-center items-center">
		    		      <img src={image} alt={name} loading="lazy" className="w-[50px] h-[50px] mr-2 rounded-md"/>
		    		      <p>{name}</p>
		    		    </div>
		    		    <div className="flex justify-center items-center">
		    		      <FaEthereum/><p className="ml-3">{high_bid}</p>
		    		    </div>
		    		  </div></Link>
		    		)
		    })}
		  </div>
		)
}

export default AllNftProduct