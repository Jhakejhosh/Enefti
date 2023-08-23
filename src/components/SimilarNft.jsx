import {FaEthereum} from "react-icons/fa"
import {Link} from "react-router-dom"

const SimilarNft = ({similarNftProduct}) => {
	return (
		 <section className="w-full relative px-4 md:px-32 dark:bg-darkBg dark:text-darkText pt-4">
		    <h1 className="font-bold mb-4">Similar Products</h1>
		    <div className="snap-x overflow-scroll flex w-full gap-4 py-2">{
		    	 similarNftProduct.map(nft => { 
		    		const {id, image, name, high_bid} = nft;
		    		return (
		    			  <Link to={`/product/${id}`} key={id}><div className="w-[130px] relative flex-shrink-0 snap-end overflow-hidden rounded-md shadow-md">
		    			    <img src={image} alt={name} loading="lazy" className="w-full h-[130px] object-cover"/>
		    			    <div className="p-2 dark:bg-gray-900">
		    			      <p className="font-semibold text-sm mb-2">{name}</p>
		    			      <p className="text-sm flex items-center text-gray-700 dark:text-gray-400 font-medium"><span><FaEthereum/></span>{high_bid}</p>
		    			    </div>
		    			  </div></Link>
		    			)
		    	})
		    }</div>
		 </section>
	)
}

export default SimilarNft