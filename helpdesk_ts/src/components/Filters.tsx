import { useContext, useMemo } from 'react'
import { TicketContext } from '../contexts/TicketContext'
import BtnCategory from './Buttons/BtnCategory'

function Filters() {
  const {state,dispatch}=useContext(TicketContext)
  useMemo(()=>dispatch,[state.selectedLokalizacja])
  
  return (
    <div className="flex flex-col items-start">
    <div className="font-bold text-3xl">Filtry</div>
    <div className="flex flex-col gap-2">
      <BtnCategory
        onClick={() =>dispatch({type:"setLokalizacja",payload:""})}
        className={`w-40 bg-slate-300  hover:bg-slate-100 active:bg-green-300`}
      >
        Wszystkie lokalizacje
      </BtnCategory>
      <BtnCategory
         onClick={() =>dispatch({type:"setLokalizacja",payload:"Torun"})}
        className="w-40 bg-slate-300 hover:bg-slate-100"
      >
        Toruń
      </BtnCategory>
      <BtnCategory
        onClick={() =>dispatch({type:"setLokalizacja",payload:"Tychy"})}
        className="w-40 bg-slate-300 hover:bg-slate-100"
      >
        Tychy
      </BtnCategory>
    </div>
  </div>
  )
}

export default Filters