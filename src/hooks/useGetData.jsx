import {useEffect, useState} from "react"
import {db} from "../Firebase/Firebase"
import {onSnapshot, collection} from "firebase/firestore"

const useGetData = () => {
	
	const [createdProduct, setCreatedProduct] = useState([])
	const collectionRef = collection(db, "products")
	
	useEffect(() => {
		const getData = async() => {
      await onSnapshot(collectionRef, (snapshot) => { setCreatedProduct(snapshot.docs.map(doc => ({...doc.data(), id: doc.id})))
		})
		}
		
		getData()
	}, [collectionRef])
	
	return {createdProduct}
}

export default useGetData