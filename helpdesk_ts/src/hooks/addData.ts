import { useEffect, useState } from "react";

export function addData(onError:any){
    const [data,setData]=useState({})
    const [newData,setNewData]=useState({})
    const [isLoading,setIsLoading]=useState(true)
    useEffect(()=>{
        fetch("http://localhost:3000/zgloszenia", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data),
          })
            .then((res) => res.json())
            .then((res) => {
              if (res) {
                console.log(res);
                
                setNewData(res)
                setIsLoading(false)
              } else {
                throw Error("Bład dodawania zgłoszenia");
              }
            })
            .catch(onError);
    },[data])
     
    return {newData,isLoading,setData}
}