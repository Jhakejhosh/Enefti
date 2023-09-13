import {useState, useEffect} from "react"
import {auth} from "../Firebase/Firebase"
import {onAuthStateChanged} from "firebase/auth"

const useAuth = () => {
	const [theUser, setTheUser] = useState({})
	useEffect(() => {
		onAuthStateChanged(auth, (user) => {
			if (user) {
				setTheUser(user)
			} else {
				setTheUser(null)
			}
		})
	})
	return {theUser}
}

export default useAuth