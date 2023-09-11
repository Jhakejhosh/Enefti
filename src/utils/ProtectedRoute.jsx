import {useNavigate} from "react-router-dom"
import useAuth from "../hooks/useAuth"


const ProtectedRoute = ({children}) => {
	const {currentUser} = useAuth()
	const navigate = useNavigate()
	
	return currentUser ? children : navigate("/login")
}
export default ProtectedRoute