import { useEffect, useState } from "react"

export function useDeleteData(onError){
    const [data,setData]=useState({})
    const [isLoading,setIsLoading]=useState(true)
    useEffect(()=>{
        const handleDeleteTicket = (id: number) => {
  
            fetch(`http://localhost:3000/zgloszenia/${id}`, {
              method: "DELETE",
              headers: { "Content-Type": "application/json" },
            })
              .then((res) => {
                if (res.ok) {
                  setData(res)
                } else {
                  throw new Error("Bląd podczas usuwania zgłoszenia");
                }
              })
              .catch(onError);
          };
    },[

    ])
    return {data}
}