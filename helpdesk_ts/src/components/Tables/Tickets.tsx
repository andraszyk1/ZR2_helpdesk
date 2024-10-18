import Row from './Row';
import { TicketInterface } from '../../screens/TicketsSctreen';
import { AutoCounter } from '../../helpers/AutoCounter';
import { useContext } from 'react';
import { TicketContext } from '../../contexts/TicketContext';

interface props {
  tickets:TicketInterface[],
  deleteTicket:()=>void
}
function Tickets({tickets,deleteTicket}:props) {
const {lokalizacja:lokalizacjaContext}=useContext(TicketContext)

  return (
    <div className='flex flex-col gap-4'>
      <AutoCounter counts={Number(tickets?.length)} />
      <div className="w-32 font-bold text-3xl">Zgłoszenia {lokalizacjaContext} </div>
        <div className='flex flex-col gap-4 '>
            {[...tickets]?.map(({id,tytul,opiekun,lokalizacja})=>{return  (
                <div key={id} className={`flex flex-row gap-2`}>
                  <Row item={id} highlight={false} />
                  <Row item={tytul} highlight={false}/>
                  <Row item={opiekun} highlight={false}/>
                  <Row item={lokalizacja} highlight={lokalizacja===lokalizacjaContext}/>
                <div><button onClick={()=>deleteTicket(id)} className="border-r-5 border-solid border-spacing-2 rounded-xl w-24 bg-red-500 p-2 transition-colors hover:text-cyan-600 hover:bg-slate-300">Usuń</button></div>
                </div>)
            })}
        </div>
    </div>
  )
}

export default Tickets