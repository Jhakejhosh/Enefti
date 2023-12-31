import {Typewriter} from "react-simple-typewriter"
import {Link} from "react-router-dom"
import AliceCarousel from 'react-alice-carousel';
import image1 from "../assets/images/Glasshouse.jpg"
import image2 from "../assets/images/Cloud.jpg"
import image3 from "../assets/images/Virtual.jpg"
import image4 from "../assets/images/young-adults-enjoying-hip-hop-nightclub-generated-by-ai.jpg"


const Banner = () => {
	
	const imageFadeIn = [
		  <img src={image1} alt="image1" loading="lazy"/>,
		  <img src={image2} alt="image2" loading="lazy"/>,
		  <img src={image3} alt="image3" loading="lazy"/>,
		  <img src={image4} alt="image4" loading="lazy"/>
		]
		
		const responsive = {
        0: {
            items: 1,
        },
        1024: {
            items: 1,
            itemsFit: 'contain',
        }
      }

	
	return (
		  <div className="px-4 pt-28 pb-4 dark:bg-darkBg md:flex justify-between items-center w-full md:px-32 md:pt-24">
		    <div className="dark:text-darkText text-center md:text-left md:mr-4 md:w-[50%]">
		      <h1 className="text-[28px] font-bold font-[Poppins]">Get access to the free space that allows you to create and save</h1>
          <span className="text-subColor text-[28px] font-bold font-[Poppins]">
          <Typewriter
            words={['3d Art NFT🎨', 'sport NFT⚽', 'music NFT🎧', 'game NFT👾']}
            loop={false}
            cursor
            cursorStyle='|'
            typeSpeed={200}
            deleteSpeed={100}
            delaySpeed={1000}
          />
		      </span>
		      <p className="my-6 text-gray-700 dark:text-gray-400">Lorem ipsum dolor sit amet. Vel dolor unde in dignissimos dolor et repellendus saepe qui laboriosam quia et doloribus repudiandae qui perspiciatis odit.</p>
		      <button className="w-full py-3 bg-subColor rounded-md text-darkText font-bold text-sm"><Link to="/market">Explore Products</Link></button>
		    </div>
		    <div className="my-6 md:w-[50%] rounded-md"><AliceCarousel animationType="fadeout" items={imageFadeIn} responsive={responsive} mouseTracking infinite
		      autoPlayInterval={5000} animationDuration={2000} autoPlay disableDotsControls disableButtonsControls/>
		   </div>
		  </div>
		)
}

export default Banner