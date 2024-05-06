
import { useContext } from "react"
import { ProfileContext } from "../App"




export const Home = () => {

    const  {userName} = useContext(ProfileContext)

    return(

        <div><h1> home page UserName is {userName}</h1></div>
    )
    
}

