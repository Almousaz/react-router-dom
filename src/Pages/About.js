
import React from "react"
import {useNavigate} from 'react-router-dom'

export const About = () => {

    let navigate = useNavigate()



    return(


        <>

                <div><h1>This is about page</h1></div>

                <button onClick={()=> {navigate("/")}}>Go to home page</button>
        
        
        </>

        
    )
    
}
