import {NFT_ITEMS} from "../assets/data/Data"


const ArtCategory = () => {
	
	//variable that filters out all the object with the category "ART"
	const ART_NFTS = NFT_ITEMS.filter(item => item.category==="Art")
	
	return (
		  <section id="art" className="w-full relative px-4 md:px-32">
		    <h1>Art collections</h1>
		    <div className="nft-card">{
		    	 ART_NFTS.map(art => { 
		    		const {id, image, name, high_bid} = art;
		    		return (
		    			  <div key={id} className="w-full relative">
		    			    <img src={image} alt={name} loading="lazy" className="w-full h-[100px] object-cover"/>
		    			    <div>
		    			      <p>{name}</p>
		    			      <p>{high_bid}</p>
		    			    </div>
		    			  </div>
		    			)
		    	})
		    }</div>
		  </section>
		)
}

export default ArtCategory