import bgArt from "../assets/images/Landscape.jpg"
import bgSport from "../assets/images/3685363_2663.jpg"
import bgGame from "../assets/images/futuristic-cyborg-men-play-virtual-reality-nightclub-game-generated-by-ai.jpg"
import bgMusic from "../assets/images/young-adults-enjoying-hip-hop-nightclub-generated-by-ai.jpg"

const NftProductBody = ({nftProductId}) => {
	
	const {image, name, creator, high_bid, low_bid, description, category} = nftProductId;
	return (
		  <div className="px-4 dark:bg-darkBg dark:text-darkText">
		    <div className="w-full relative pt-24">
		      <div className="w-full h-[350px] md:h-[400px] absolute rounded-md dark:bg-gradient-to-b dark:from-transparent dark:to-darkBg bg-gradient-to-b from-transparent to-darkText"></div>
		      <img src={image} alt={name} loading="lazy" className="rounded-md w-full h-[350px] object-cover md:h-[400px]"/>
		      <div className="absolute bottom-2 px-2 md:text-center md:w-full">
		      <p className="font-bold mb-2">{name}</p>
		      <p className="text-sm dark:text-gray-400 text-gray-800">By {creator}</p>
		      </div>
		    </div>
		    
		    <div className="py-4 md:px-32">
		      <p className="font-bold mb-2">About Collection</p>
		      <p className="text-sm dark:text-gray-400 text-gray-800">{description}</p>
		    </div>
		    
		    <div className="md:px-32">
		      <h1 className="font-bold mb-2">Details</h1>
		      <p className="text-sm font-bold flex justify-between md:justify-start pb-2 text-gray-800 dark:text-gray-400">Creator: <span className="font-normal md:ml-2 dark:text-darkText">{creator}</span></p>
		      <p className="text-sm font-bold flex justify-between md:justify-start pb-2 text-gray-800 dark:text-gray-400">Top bid: <span className="font-normal md:ml-2 dark:text-darkText">{high_bid}ETH</span></p>
		      <p className="text-sm font-bold flex justify-between md:justify-start pb-2 text-gray-800 dark:text-gray-400">Low bid: <span className="font-normal md:ml-2 dark:text-darkText">{low_bid}ETH</span></p>
		      <p className="text-sm font-bold flex justify-between md:justify-start pb-2 text-gray-800 dark:text-gray-400">Category: <span className="font-normal md:ml-2 dark:text-darkText">{category}</span></p>
		    </div>
		  </div>
		)
}

export default NftProductBody