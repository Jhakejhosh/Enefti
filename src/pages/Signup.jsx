import {Link, useNavigate} from "react-router-dom"
import {useState} from "react"
import logo from "../assets/images/pngwing.com (12).png"
import Head from "../utils/Head"
import {createUserWithEmailAndPassword, updateProfile} from "firebase/auth"
import {ref, uploadBytesResumable, getDownloadURL} from "firebase/storage"
import {setDoc, doc} from "firebase/firestore"
import {auth} from "../Firebase/Firebase"
import {storage} from "../Firebase/Firebase"
import {db} from "../Firebase/Firebase"
import {toast} from "react-toastify"

const Signup = () => {
	
	const [username, setUsername] = useState("")
	const [imageFile, setImageFile] = useState(null)
	const [email, setEmail] = useState("")
	const [password, setPassword] = useState("")
	const [loading, setLoading] = useState(false)
	
	const navigate = useNavigate()
	
	const CreateAccount = async (e) => {
		e.preventDefault()
		setLoading(true)
		try {
			//authentication of email and password
			const userCredential = await createUserWithEmailAndPassword(auth, email, password)
		  const user = userCredential.user
		  
		  //handling authentication of username and profile picture
		  
		  //referencing the profile image
		  const profileImgRef = ref(storage, `Images/${Date.now()+username}`)
		  const uploadTask = uploadBytesResumable(profileImgRef, imageFile)
		  
		  //uploading image 
		  uploadTask.on((error) => {
		  	taost.error(error.message)
		  }, () => {
		  	getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
		  		//update username and profile image
		  		await updateProfile(user, {
		  			displayName: username,
		  			photoURL: downloadURL
		  		})
		  		//storing user data in firebase
		  		await setDoc(doc(db, "users", user.uid), {
		  			uid: user.uid,
		  			displayName: username,
		  			email,
		  			photoURL: downloadURL
		  		})
		  	})
		  })
		  
			
			toast.success(`Account created by ${user.displayName}`)
			navigate("/login")
			setLoading(false)
		} catch (e) {
			toast.error(e.message)
		}
	}
	
	return (
		  <div>
		    <Head title="Sign up" description=""/>
		    <Link to="/"><div className="flex items-center p-4">
		      <div className="w-10 flex justify-center items-center border-subColor overflow-hidden"><img src={logo} alt="logo" className="w-full"/></div>
		      <h1 className="text-subColor font-bold">EN<span className="text-mainColor">EF</span>TI<strong className="text-xlg text-mainColor font-bold">.</strong></h1>
		    </div></Link>
		    <div className="text-center flex flex-col justify-center items-center px-4 py-10">
		      <h1 className="text-xl font-bold mb-2">Sign Up Here!</h1>
		      <p className="text-gray-400 font-medium px-8">Please enter your account details here</p>
		      <form className="my-4 w-full md:w-[50%]" onSubmit={CreateAccount}>
		        <div>
		          <p className="text-left font-semibold">Upload profile</p>
		          <input type="file" className="border-2 border-gray-400 rounded-md w-full p-2 my-4 mt-2" onChange={e => setImageFile(e.target.files[0])} required/></div>
		        <div><input type="Text" placeholder="Username" className="border-2 border-gray-400 rounded-md w-full p-2 my-4"  value={username} onChange={e => setUsername(e.target.value)} required/></div>
		        <div><input type="Email" placeholder="email" className="border-2 border-gray-400 rounded-md w-full p-2 my-4"  onChange={e => setEmail(e.target.value)} required/></div>
		        <div><input type="Password" placeholder="password" className="border-2 border-gray-400 rounded-md w-full p-2 my-4" onChange={e => setPassword(e.target.value)} required/></div>
		        <button type="submit" className="border-0 outline-0 rounded-md w-full p-2 bg-subColor text-darkText font-semibold">{loading ? "Loading..." : "Create an Account"}</button>
		      </form>
		      <p className="text-gray-400">Have an account already? <Link to="/login" className="text-subColor font-semibold">Log in</Link></p>
		    </div>
		  </div>
		)
}

export default Signup