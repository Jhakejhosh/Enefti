import banner from "../assets/images/space.jpg"
import profile from "../assets/images/clientIMG02-768x768.jpg"
import {NavLink, Outlet } from "react-router-dom"
import {useGlobalContext} from "../context/Context"
import useAuth from "../hooks/useAuth"
import useGetData from "../hooks/useGetData"

const ProfileBody = () => {
	
	const {favoriteItems} = useGlobalContext()
	const {theUser} = useAuth()
	const {createdProduct} = useGetData()
	
	const activeLink = "px-8 py-4 font-semibold rounded-md bg-subColor text-sm text-darkText mmd:mr-6";
	const notActiveLink = "px-8 py-4 font-semibold rounded-md bg-transparent text-sm text-subColor md:mr-6"
	
	return (
		  <div className="px-4 dark:bg-darkBg dark:text-darkText">
		    <div className="w-full relative pt-20">
		      <div className="w-full md:h-[50vh] absolute rounded-md bg-gradient-to-b from-transparent to-darkBg h-[200px] dark:hidden"></div>
		      <img src={banner} alt="banner" loading="lazy" className="rounded-md w-full  object-cover md:h-[50vh] h-[200px]"/>
		      <div className="absolute bottom-[-4rem] text-center w-[130px] h-[130px] border-4-darkText dark:border-4-darkBg left-24 md:left-32 rounded-full flex justify-center items-center overflow-hidden">
		        <img src={theUser&&theUser.photoURL} alt="profile_img" loading="lazy" className="w-full bg-gray-900 object-cover rounded-full m-2"/>
		      </div>
		    </div>
		    <div className="pt-16 text-center md:px-32">
		      <p className="font-bold">{theUser&&theUser.displayName}</p>
		      <p className="text-gray-500 text-sm font-semibold">{theUser?.email}</p>
		    </div>
		    <div className="flex justify-center items-center py-4 md:px-32">
		      <span className="font-semibold text-center p-2">
		        <p className="text-gray-500 text-sm">Favorite</p>
		        <p className="dark:text-darkText">{favoriteItems.length}</p>
		      </span>
		      <span className="font-semibold text-center p-2">
		        <p className="text-gray-500 text-sm">NFT created</p>
		        <p className="dark:text-darkText">{createdProduct.length}</p>
		      </span>
		    </div>
		    <div className="py-2 flex items-center justify-between md:justify-center md:px-32">
		      <NavLink to="favorites" className={({isActive}) => (isActive ? activeLink : notActiveLink)}>Favorite NFT</NavLink>
		      <NavLink to="myNft" className={({isActive}) => (isActive ? activeLink : notActiveLink)}>Your NFT</NavLink>
		    </div>
		    <Outlet/>
		  </div>
		)
}
export default ProfileBody