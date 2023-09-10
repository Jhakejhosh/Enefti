import {Link, useNavigate} from "react-router-dom"
import logo from "../assets/images/pngwing.com (12).png"
import Head from "../utils/Head"
import {useState} from "react"
import {auth} from "../Firebase/Firebase"
import {signInWithEmailAndPassword} from "firebase/auth"
import {toast} from "react-toastify"

const Login = () => {
	
	const [email, setEmail] = useState("")
	const [password, setPassword] = useState("")
	const [loading, setLoading] = useState(false)
	
	const navigate = useNavigate()
	
  const signIn = async(e) => {
    e.preventDefault()
    setLoading(true)
    
    try {
    	const userCredential = await signInWithEmailAndPassword(auth, email, password)
    	const user = userCredential.user
    	toast.success("Welcome back!")
    	setLoading(false)
    	navigate("/")
    } catch (e) {
    	toast.error(e.message)
    }
  }
	
	return (
		  <div>
		    <Head title="Log in" description=""/>
		    <Link to="/"><div className="flex items-center p-4">
		      <div className="w-10 flex justify-center items-center border-subColor overflow-hidden"><img src={logo} alt="logo" className="w-full"/></div>
		      <h1 className="text-subColor font-bold">EN<span className="text-mainColor">EF</span>TI<strong className="text-xlg text-mainColor font-bold">.</strong></h1>
		    </div></Link>
		    <div className="text-center flex flex-col justify-center items-center px-4 py-10">
		      <h1 className="text-xl font-bold mb-2">Welcome back!</h1>
		      <p className="text-gray-400 font-medium px-8">Please enter your email and password to continue</p>
		      <form className="my-4 w-full md:w-[50%]" onSubmit={signIn}>
		        <div className="w-full"><input type="Email" placeholder="email" className="border-2 border-gray-400 rounded-md w-full p-2 my-4" onChange={e => setEmail(e.target.value)} required/></div>
		        <div className="w-full"><input type="Password" placeholder="password" className="border-2 border-gray-400 rounded-md w-full p-2 mb-6" onChange={e => setPassword(e.target.value)} required/></div>
		        <button type="submit" className="border-0 outline-0 rounded-md w-full p-2 bg-subColor text-darkText font-semibold">{loading ? "Loading..." : "Login"}</button>
		      </form>
		      <p className="text-gray-400">Don't have an account? <Link to="/signup" className="text-subColor font-semibold">Sign up</Link></p>
		    </div>
		  </div>
		)
}

export default Login