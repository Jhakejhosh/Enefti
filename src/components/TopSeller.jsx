import image1 from "../assets/images/clientIMG02-768x768.jpg"
import image2 from "../assets/images/clientIMG03-768x768.jpg"
import image3 from "../assets/images/clientIMG01-768x768.jpg"
import image4 from "../assets/images/popular5.png"

const TopSeller = () => {
	
  const sellers = [
  	 {
  	 	id: 1,
  	 	image: image1,
  	 	name: "Adam Torres",
  	 	bid: "12ETH"
  	 },
  	 {
  	 	id: 2,
  	 	image: image2,
  	 	name: "Adam Torres",
  	 	bid: "12ETH"
  	 },
  	 {
  	 	id: 3,
  	 	image: image3,
  	 	name: "Adam Torres",
  	 	bid: "12ETH"
  	 },
  	 {
  	 	id: 4,
  	 	image: image4,
  	 	name: "Adam Torres",
  	 	bid: "12ETH"
  	 }
  	]
	
	return (
		  <div className="px-4 py-8 dark:text-darkText dark:bg-darkBg md:px-32">
		    <h1 className="font-semibold text-md mb-4">Top sellers</h1>
		    <div className="grid grid-cols-2 gap-4 md:flex justify-between items-center">{sellers.map(seller => {
		    	const {id, image, name, bid} = seller;
		    	return (
		    		  <div key={id} className="flex justify-center items-center">
		    		    <img src={image} alt={name} loading="lazy" className="w-[40px] rounded-full h-[40px] mr-2"/>
		    		    <div className="text-sm">
		    		      <p className="font-semibold">{name}</p>
		    		      <p className="text-subColor font-semibold text-xs">{bid}</p>
		    		    </div>
		    		  </div>
		    		)
		    })}</div>
		  </div>
		)
}

export default TopSeller