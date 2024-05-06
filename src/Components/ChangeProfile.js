import { useState } from "react"
import { useContext } from "react"
import { ProfileContext } from "../App"


export const ChangeProfile = ()=> {

    const {setUserName} = useContext(ProfileContext);
    const [newUserName , setNewUserName] = useState("")
    

    return(
        <div>
            <input onChange={(event) => {setNewUserName(event.target.value)}} />
            <button onClick={()=>{setUserName(newUserName)}} >Change UserName</button>

        </div>
    )
}
