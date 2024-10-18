import { useState } from "react";
import { TicketContext } from "./TicketContext";
interface Props {
    children: React.ReactNode;
}

function TicketContextComponent({children}:Props) {
    const [selectedData,setSelectedData]=useState("")
  return (
    <TicketContext.Provider value={{
        lokalizacja:"testowa",
        selectedData:selectedData,
        setSelectedData:setSelectedData}}>
        {children}
    </TicketContext.Provider>
  )
}

export default TicketContextComponent