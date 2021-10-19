import { useContext } from "react"
import { AuthContext } from "./AuthPovider"

const UseAuth=()=>{
    return useContext(AuthContext)
}

export default UseAuth