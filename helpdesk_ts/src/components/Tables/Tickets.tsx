import { useState } from 'react';
import { useDeleteData } from '../../hooks/useDeleteData';
import { TicketInterface } from '../../screens/TicketsSctreen';
import Row from './Row';

interface props {
  tickets:TicketInterface[],
  deleteTicket:()=>void,
  lokalizacja:string
}
function Tickets({tickets,lokalizacja:lokalizacjaFromParent}:props) {
  const {apiDeleteData}=useDeleteData()
  const [id,setId]=useState()

  const handleDelete=(id:any)=>{
    setId(id)
    console.log(id);
    apiDeleteData(id)

    
  }
  return (
    <div className='flex flex-col gap-4'>
      <div className="w-32 font-bold text-3xl">Zgłoszenia {lokalizacjaFromParent} </div>
        <div className='flex flex-col gap-4 '>
            {[...tickets]?.map(({id,tytul,opiekun,lokalizacja})=>{return  (
                <div key={id} className={`flex flex-row gap-2`}>
                  <Row item={id} highlight={false} />
                  <Row item={tytul} highlight={false}/>
                  <Row item={opiekun} highlight={false}/>
                  <Row item={lokalizacja} highlight={lokalizacja===lokalizacjaFromParent}/>
                <div><button onClick={()=>handleDelete(id)} className="border-r-5 border-solid border-spacing-2 rounded-xl w-24 bg-red-500 p-2 transition-colors hover:text-cyan-600 hover:bg-slate-300">Usuń</button></div>
                </div>)
            })}
        </div>
    </div>
  )
}

export default Tickets