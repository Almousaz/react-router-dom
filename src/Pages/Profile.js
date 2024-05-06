

import { useParams } from "react-router-dom"
import { ChangeProfile } from "../Components/ChangeProfile"


export const Profile =(props) => {


    const {name , id} = useParams()
    return(

        <>
        <div><h1> profile page . UserName is {props.userName}</h1></div>
        <ChangeProfile setUserName={props.setUserName} />
        
        
        </>
    )
    
}


