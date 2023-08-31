import {Link} from "react-router-dom"
import logo from "../assets/images/pngwing.com (12).png"

const Signup = () => {
	return (
		  <div>
		    <Link to="/"><div className="flex items-center p-4">
		      <div className="w-10 flex justify-center items-center border-subColor overflow-hidden"><img src={logo} alt="logo" className="w-full"/></div>
		      <h1 className="text-subColor font-bold">EN<span className="text-mainColor">EF</span>TI<strong className="text-xlg text-mainColor font-bold">.</strong></h1>
		    </div></Link>
		    <div className="text-center flex flex-col justify-center items-center px-4 py-10">
		      <h1 className="text-xl font-bold mb-2">Sign Up Here!</h1>
		      <p className="text-gray-400 font-medium px-8">Please enter your account details here</p>
		      <form className="my-4 w-full md:w-[50%]">
		        <div><input type="file" className="border-2 border-gray-400 rounded-md w-full p-2 my-4" required/></div>
		        <div><input type="Text" placeholder="Username" className="border-2 border-gray-400 rounded-md w-full p-2 my-4" required/></div>
		        <div><input type="Email" placeholder="email" className="border-2 border-gray-400 rounded-md w-full p-2 my-4" required/></div>
		        <div><input type="Password" placeholder="password" className="border-2 border-gray-400 rounded-md w-full p-2 my-4"required/></div>
		        <button type="submit" className="border-0 outline-0 rounded-md w-full p-2 bg-subColor text-darkText font-semibold">Sign up</button>
		      </form>
		      <p className="text-gray-400">Have an account already? <Link to="/login" className="text-subColor font-semibold">Log in</Link></p>
		    </div>
		  </div>
		)
}

export default Signup