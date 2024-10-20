import { useEffect, useState } from "react";

export function useGetData(selectedLokalizacja:string,onError:any){
    const [data,setData]=useState()
    const [isLoading,setIsLoading]=useState(true)
    useEffect(() => {
        let isCanceled = false;
        const params =selectedLokalizacja === "" ? "" : `?lokalizacja=${selectedLokalizacja}`;
        fetch(`http://localhost:3000/zgloszenia${params}`)
          .then((res) => {
            if (res.ok) {
              return res.json();
            }
            throw Error("Bład ladowania danych");
          })
          .then((res) => {
            if (!isCanceled) {
              setData(res)
              setIsLoading(false)
            }
          })
          .catch(onError);
        return () => {
          isCanceled = true;
        };
      }, [selectedLokalizacja]);
    return {data,isLoading}
}