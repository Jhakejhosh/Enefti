import banner from "../assets/images/space.jpg"
import profile from "../assets/images/clientIMG02-768x768.jpg"

const ProfileBody = () => {
	return (
		  <div className="px-4 dark:bg-darkBg dark:text-darkText">
		    <div className="w-full relative pt-20">
		      <div className="w-full md:h-[60vh] absolute rounded-md bg-gradient-to-b from-transparent to-darkBg h-[200px] dark:hidden"></div>
		      <img src={banner} alt="banner" loading="lazy" className="rounded-md w-full  object-cover md:h-[60vh] h-[200px]"/>
		      <div className="absolute bottom-[-4rem] text-center w-[130px] h-[130px] bg-darkText dark:bg-darkBg left-24 rounded-full flex justify-center items-center p-2">
		        <img src={profile} alt="profile_img" loading="lazy" className="w-full bg-gray-900 rounded-full object-cover"/>
		      </div>
		    </div>
		    <p className="font-bold text-center pt-16">Jacob Joshua</p>
		  </div>
		)
}
export default ProfileBody