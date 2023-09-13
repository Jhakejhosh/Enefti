import {useNavigate} from "react-router-dom"
import useAuth from "../hooks/useAuth"


const ProtectedRoute = ({children}) => {
	const {theUser} = useAuth()
	const navigate = useNavigate()
	
	return theUser ? children : navigate("/login")
}
export default ProtectedRoute