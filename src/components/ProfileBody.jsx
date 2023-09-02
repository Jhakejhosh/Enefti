import banner from "../assets/images/space.jpg"
import profile from "../assets/images/clientIMG02-768x768.jpg"
import {NavLink, Outlet } from "react-router-dom"

const ProfileBody = () => {
	
	const activeLink = "px-8 py-4 font-semibold rounded-md bg-subColor text-sm text-darkText";
	const notActiveLink = "px-8 py-4 font-semibold rounded-md bg-transparent text-sm text-subColor"
	
	return (
		  <div className="px-4 dark:bg-darkBg dark:text-darkText">
		    <div className="w-full relative pt-20">
		      <div className="w-full md:h-[60vh] absolute rounded-md bg-gradient-to-b from-transparent to-darkBg h-[200px] dark:hidden"></div>
		      <img src={banner} alt="banner" loading="lazy" className="rounded-md w-full  object-cover md:h-[60vh] h-[200px]"/>
		      <div className="absolute bottom-[-4rem] text-center w-[130px] h-[130px] bg-darkText dark:bg-darkBg left-24 rounded-full flex justify-center items-center p-2">
		        <img src={profile} alt="profile_img" loading="lazy" className="w-full bg-gray-900 rounded-full object-cover"/>
		      </div>
		    </div>
		    <div className="pt-16 text text-center">
		      <p className="font-bold">Jacob Joshua</p>
		      <p className="text-gray-500 text-sm font-semibold">jhakejhosh@gmail.com</p>
		    </div>
		    <div className="flex justify-between items-center py-4">
		      <span className="font-semibold text-center">
		        <p className="text-gray-500 text-sm">Favorite</p>
		        <p className="dark:text-darkText">0</p>
		      </span>
		      <span className="font-semibold text-center">
		        <p className="text-gray-500 text-sm">NFT created</p>
		        <p className="dark:text-darkText">0</p>
		      </span>
		    </div>
		    <div className="py-2 flex items-center justify-between">
		      <NavLink to="favorites" className={({isActive}) => (isActive ? activeLink : notActiveLink)}>Favorite NFT</NavLink>
		      <NavLink to="myNft" className={({isActive}) => (isActive ? activeLink : notActiveLink)}>Your NFT</NavLink>
		    </div>
		    <Outlet/>
		  </div>
		)
}
export default ProfileBody