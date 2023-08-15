import {useState} from "react"
import logo from "../assets/images/pngwing.com (13).png"
import profile from "../assets/images/pngwing.com (6).png"
import {BiSolidSun, BiSolidMoon} from "react-icons/bi"
import {BsPencil, BsPerson, BsBookmark} from "react-icons/bs"
import {Link} from "react-router-dom"

const Navbar = () => {
	
	const menuItems = [
		{
			id: 1,
			link: "/create",
			icon: <BsPencil/>,
			menu: "Create"
		},
		{
			id: 2,
			link: "/wishlist",
			icon: <BsBookmark/>,
			menu: "Wishlist"
		},
		{
			id: 3,
			link: "/login",
			icon: <BsPerson/>,
			menu: "Log in"
		}
		]
	
	const [themeMode, setThemeMode] = useState(false);
	const [showNavMenu, setShowNavMenu] = useState(false)
	
	//function to execute the themeMode toggling effect
	const themeModeToggle = () => {
		setThemeMode(!themeMode);
	}
	
	
	return (
		<div className={themeMode ? "dark" : ""}>
		  <nav className="w-full flex justify-between items-center bg-darkText px-4 py-2 fixed shadow-md dark:bg-darkBg z-40">
		    <Link to="/"><div className="flex justify-center items-center">
		      <div className="w-10 border-2 rounded-full flex justify-center items-center border-subColor overflow-hidden"><img src={logo} alt="logo" className="w-full bg-gray-50"/></div>
		      <h1 className="text-subColor font-semibold dark:text-darkText">ENEFTI<strong className="text-xlg text-mainColor font-bold">.</strong></h1>
		    </div></Link>
		    {/***toggle button for light and dark mode**/}
		    <button className="text-2xl dark:text-darkText" onClick={themeModeToggle}>{themeMode ? <BiSolidSun/> : <BiSolidMoon/>}</button>
		   
		    
		    <div className="text-center">
		      <div className="w-12 h-12 border-2 rounded-full flex justify-center items-center border-subColor overflow-hidden" onClick={() => setShowNavMenu(!showNavMenu)}>
		        <img src={profile} alt="profile" className="w-full"/>
		      </div>
		      <p className="font-bold text-[10px] dark:text-darkText">Hi, guest</p>
		    </div>
		    
		    
		    {showNavMenu ? (<div className="absolute right-4 top-[100%] bg-darkText shadow-md p-4 z-50">
		      <ul>{menuItems.map(item => {
		      	const {id, icon, link, menu} = item;
		      	return (
		      		  <li key={id} className="mb-4 last:mb-0">
		      		    <Link to={link} className="flex items-center text-sm">{icon}
		      		      <p className="ml-4">{menu}</p>
		      		    </Link>
		      		  </li>
		      		)
		      })}</ul>
		    </div>) : null}
		  </nav>
		</div>  
		)
}

export default Navbar