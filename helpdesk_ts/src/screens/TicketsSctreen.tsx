import { useMemo, useReducer } from "react";
import { Link } from "react-router-dom";
import Filters from "../components/Filters";
import Tickets from "../components/Tables/Tickets";
import { getLokalizacjaInfo } from "../helpers/getLokalizacjaInfo";
import { useGetData } from "../hooks/useGetData";
import { ticketsReducer } from "../reducer/ticketReducer";
export interface TicketInterface {
  id?: number;
  tytul: string;
  opiekun: string;
  lokalizacja: string;
}

function TicketsScreen({ onError}) {
  const [{selectedLokalizacja},dispatch]=useReducer(ticketsReducer,{
  
    selectedLokalizacja:""
  })
  const {data:dataFromHook,isLoading:isLoadingFromHook}=useGetData(selectedLokalizacja,onError)
  

 
  const handleFilterLokalizacja = (lokalizacja: string) => {
    dispatch({type:"setLokalizacja",payload:lokalizacja});
  };
  const lokalizacjaInfo = useMemo(
    () => getLokalizacjaInfo(selectedLokalizacja),
    [selectedLokalizacja]
  );
  if (isLoadingFromHook) {
    return <p>Ładowanie strony</p>;
  }
  
  return (
    <>
      {lokalizacjaInfo && (
        <div className="p-4 bg-sky-500 text-2xl font-bold text-gray-100">
          {lokalizacjaInfo}
        </div>
      )}
      <div>
        <Link to={"/tickets/add"} >Dodaj Zgłoszenie</Link>
      </div>
      <div>
        <Filters handleFilterLokalizacja={handleFilterLokalizacja} />
        {dataFromHook?.length > 0 ? (
            <Tickets lokalizacja={selectedLokalizacja} tickets={dataFromHook} />
        ) : (
          "Brak wynikow wyszukiwania"
        )}
      </div>
    </>
  );
}

export default TicketsScreen;
