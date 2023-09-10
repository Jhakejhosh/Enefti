import {useState} from "react"
import logo from "../assets/images/pngwing.com (12).png"
import profile from "../assets/images/pngwing.com (6).png"
import {BiSolidSun, BiSolidMoon} from "react-icons/bi"
import {AiOutlineLogin, AiOutlineLogout} from "react-icons/ai"
import {BsPencil, BsPerson} from "react-icons/bs"
import {Link} from "react-router-dom"
import useAuth from "../hooks/useAuth"
import {signOut} from "firebase/auth"
import {auth} from "../Firebase/Firebase"
import {useGlobalContext} from "../context/Context"
import {toast} from "react-toastify"

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
			link: "/profile",
			icon: <BsPerson/>,
			menu: "Profile"
		}
		]
	
	const {themeMode, setThemeMode} = useGlobalContext();
	const {currentUser} = useAuth()
	const [showNavMenu, setShowNavMenu] = useState(false)
	const [loading, setLoading] = useState(false)
	
	//function to execute the themeMode toggling effect
	const themeModeToggle = () => {
		setThemeMode(!themeMode);
	}
	
	const logOut = async () => {
		setLoading(true)
		try {
			await signOut(auth)
			toast.info("Successfully logged out")
			setLoading(false)
		} catch (e) {
			toast.error(e.message)
		}
	}
	
	
	return (
		  <nav className="w-full flex justify-between items-center bg-darkText px-4 py-2 fixed dark:bg-darkBg z-40 md:px-32">
		    <Link to="/"><div className="flex justify-center items-center">
		      <div className="w-10 flex justify-center items-center border-subColor overflow-hidden"><img src={logo} alt="logo" className="w-full"/></div>
		      <h1 className="text-subColor font-bold">EN<span className="text-mainColor">EF</span>TI<strong className="text-xlg text-mainColor font-bold">.</strong></h1>
		    </div></Link>
		    {/***toggle button for light and dark mode**/}
		    <button className="text-2xl dark:text-darkText" onClick={themeModeToggle}>{themeMode ? <BiSolidSun/> : <BiSolidMoon/>}</button>
		   
		    {/**profile picture**/}
		    <div className="text-center">
		      <div className="w-12 h-12 border-2 rounded-full flex justify-center items-center border-subColor overflow-hidden text-center" onClick={() => setShowNavMenu(!showNavMenu)}>
		        <img src={currentUser ? currentUser.photoURL : profile} alt="profile" className="w-full" loading="lazy"/>
		      </div>
		      <p className="font-bold text-[10px] dark:text-darkText text-center">{currentUser ? `Welcome ${currentUser.displayName}` : "Hi, guest"}</p>
		    </div>
		    
		    {/**Navmenu logic**/}
		    {showNavMenu ? (<div className="absolute right-0 top-[100%] dark:bg-gray-950 dark:text-darkText shadow-md bg-darkText shadow-lg w-32 dark:shadow-gray-800 p-4 z-50 md:right-28">
		      <ul>{menuItems.map(item => {
		      	const {id, icon, link, menu} = item;
		      	return (
		      		  <li key={id} className="mb-4">
		      		    <Link to={link} className="flex items-center text-sm">{icon}
		      		      <p className="ml-4">{menu}</p>
		      		    </Link>
		      		  </li>
		      		)
		      })}
		      <li className="mb-0">{currentUser ? (
		      	 <span className="flex items-center text-sm" onClick={logOut}><AiOutlineLogout/><p className="ml-4">Logout</p></span> 
		      	) : (
		      	   <Link to="/login" className="flex items-center text-sm"><AiOutlineLogin/><p className="ml-4">Login</p></Link> 
		      		)}</li></ul>
		    </div>) : null}
		  </nav>
		)
}

export default Navbar