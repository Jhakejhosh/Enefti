import {FaFootballBall, FaGamepad, FaPaintBrush, FaMusic} from "react-icons/fa"


const Category = () => {
	
	const categories = [
		  {
		  	id: 1,
		  	icon: <FaPaintBrush/>,
		  	Category: "Art",
		  	path: "#art"
		  },
		  {
		  	id: 2,
		  	icon: <FaMusic/>,
		  	Category: "Music",
		  	path: "#music"
		  },
		  {
		  	id: 3,
		  	icon: <FaFootballBall/>,
		  	Category: "Sport",
		  	path: "#sport"
		  },
		  {
		  	id: 4,
		  	icon: <FaGamepad/>,
		  	Category: "Game",
		  	path: "#game"
		  }
		]
	
	return (
		  <div className="px-4 dark:bg-darkBg dark:text-darkText md:px-32 pt-6">
		    {/**<h1 className="font-semibold text-lg mb-4">Category</h1>**/}
		    <div className="flex justify-between items-center gap-2 relative">{categories.map(cate => {
		    	const {id, path, icon, Category} = cate
		    	return (
		    		  <div key={id} className="border-2 border-gray-100 w-[100px] h-[100px] p-2 text-center flex justify-center items-center rounded-md dark:bg-gray-900 dark:border-0"><a href={path} className="font-semibold">
		    		    <span className="dark:bg-gray-800 bg-gray-100 flex justify-center items-center rounded-full p-2 h-[50px] w-[50px] mb-2">{icon}</span>
		    		    <p className="text-sm">{Category}</p>
		    		  </a></div>
		    		)
		    })}</div>
		  </div>
		)
}

export default Category