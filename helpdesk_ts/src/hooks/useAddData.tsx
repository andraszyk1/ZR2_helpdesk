import { useCallback, useEffect, useMemo, useState } from "react";

export function useAddData(onError:any){
    const [isLoading,setIsLoading]=useState(true)
    const addData=(data:any)=>{
      console.log("drugi");
      fetch("http://localhost:3000/zgloszenia", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      })
        .then((res) => res.json())
        .then((res) => {
          if (res) {
            setIsLoading(false)
          } else {
            throw Error("Bład dodawania zgłoszenia");
          }
        })
        .catch(onError);
    }
    useEffect(()=>{
      console.log("pierwszy");
      
    },[])
    useEffect(()=>{addData},[addData])
    

     
    return {isLoading,addData}
}