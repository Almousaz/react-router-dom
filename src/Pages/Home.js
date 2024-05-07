
import { useContext } from "react"
import { ProfileContext } from "../App"
import {useQuery} from 'react-query'
import Axios from 'axios'

export const Home = () => {

    const {data , isLoading , isError, error , refetch} = useQuery(["cat"] , () =>{
        return Axios.get("https://catfact.ninja/fact").then((res) => res.data)
    })

    const  {userName} = useContext(ProfileContext)

    if(isLoading)
    return <h2>Loading ...</h2>

    if(isError)
    return <h2>sorry , there was an error : error :{error.message}</h2>

    return(

        <>
        <div><h1> home page UserName is {userName}</h1></div>
        <h1>{data?.fact}</h1>
        <button onClick={refetch}>Update</button>
        
        </>
    )
    
}

