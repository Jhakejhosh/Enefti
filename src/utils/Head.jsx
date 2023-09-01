import {Helmet} from "react-helmet"
import logo from "../assets/images/pngwing.com (12).png"


const Head = ({title, description}) => {
	return (
		  <Helmet>
		    <title>{title} | {description}</title>
		    <meta name="description" content={description}/>
		    <link rel="icon" type="image/png" href={logo}/>
		  </Helmet>
		)
}

export default Head