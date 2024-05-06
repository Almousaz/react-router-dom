

import { useParams } from "react-router-dom"
import { ChangeProfile } from "../Components/ChangeProfile"
import { useContext } from "react"
import { ProfileContext } from "../App"


export const Profile =() => {


    const {userName} = useContext(ProfileContext);    

    const {name , id} = useParams()
    return(

        <>
        <div><h1> profile page . UserName is {userName}</h1></div>
        <ChangeProfile />
        
        
        </>
    )
    
}


