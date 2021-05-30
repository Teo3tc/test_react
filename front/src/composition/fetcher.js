import {useState} from 'react'

export const useFetcher =()=>{
    const [loading,setLoading] =useState(true)
    const [data,setData] = useState([])
    const [error,setEror] = useState(false)

    const fetchData = async function(url,filtre = null){
        setLoading(true)
        try{
            const response = await fetch(url);
            const res = await response.json();
            setData(res)
          
        }catch(e){
            setEror(true)
        }
        setLoading(false)
    }
    return{loading,data,error,fetchData}
}