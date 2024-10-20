import { useEffect, useState } from "react"
import { apiDeleteData } from "../api/apiDeleteData";

export function useDeleteData(){
    const [isLoading,setIsLoading]=useState(true)
    useEffect(()=>{
        console.log("pierwszy delete");
    },[])
    useEffect(()=>{
        apiDeleteData
    },[apiDeleteData])
    
    return {apiDeleteData,isLoading}
}