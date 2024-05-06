import { useState } from "react"


export const ChangeProfile = (props)=> {


    const [newUserName , setUserName] = useState("")
    

    return(
        <div>
            <input onChange={(event) => {setUserName(event.target.value)}} />
            <button onClick={()=>{props.setUserName(newUserName)}} >Change UserName</button>

        </div>
    )
}
