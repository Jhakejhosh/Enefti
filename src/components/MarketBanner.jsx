import banner from "../assets/images/futuristic-cyborg-men-play-virtual-reality-nightclub-game-generated-by-ai.jpg"


const MarketBanner = () => {
	return (
		  <div className="px-4 dark:bg-darkBg text-darkText">
		    <div className="w-full relative pt-24">
		      <div className="w-full md:h-[60vh] absolute rounded-md dark:bg-gradient-to-b dark:from-transparent dark:to-darkBg h-auto"></div>
		      <img src={banner} alt="banner" loading="lazy" className="rounded-md w-full  object-cover md:h-[60vh]"/>
		      <div className="absolute bottom-4 px-2 text-center w-full">
		        <p className="font-bold mb-2 text-xl">NFT Product</p>
		        <p className="text-gray-200">All products are listed out here!🚀</p>
		      </div>
		    </div>
		  </div>
		)
}

export default MarketBanner