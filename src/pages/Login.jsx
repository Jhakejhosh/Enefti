import {Link} from "react-router-dom"
import logo from "../assets/images/pngwing.com (12).png"

const Login = () => {
	return (
		  <div>
		    <Link to="/"><div className="flex items-center p-4">
		      <div className="w-10 flex justify-center items-center border-subColor overflow-hidden"><img src={logo} alt="logo" className="w-full"/></div>
		      <h1 className="text-subColor font-bold">EN<span className="text-mainColor">EF</span>TI<strong className="text-xlg text-mainColor font-bold">.</strong></h1>
		    </div></Link>
		    <div className="text-center flex flex-col justify-center items-center px-4">
		      <h1 className="text-xl font-bold mb-2">Welcome back!</h1>
		      <p className="text-gray-400 font-medium px-8">Please enter your email and password to continue</p>
		      <form className="my-4 w-full md:w-[50%]">
		        <div className="w-full"><input type="Email" placeholder="email" className="border-2 border-gray-400 rounded-md w-full p-2 my-4" required/></div>
		        <div className="w-full"><input type="Password" placeholder="password" className="border-2 border-gray-400 rounded-md w-full p-2 mb-6"required/></div>
		        <button type="submit" className="border-0 outline-0 rounded-md w-full p-2 bg-subColor text-darkText font-semibold">Sign in</button>
		      </form>
		      <p className="text-gray-400">Don't have an account? <Link to="/signup" className="text-subColor font-semibold">Sign up</Link></p>
		    </div>
		  </div>
		)
}

export default Login