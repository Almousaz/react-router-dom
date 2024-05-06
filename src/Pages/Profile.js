

import { useParams } from "react-router-dom"


export const Profile =() => {


    const {name , id} = useParams()
    return(

        <div><h1>This is profile page of {name} - {id} </h1></div>
    )
    
}


