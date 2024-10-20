import { useContext, useMemo } from "react";
import { Link } from "react-router-dom";
import Filters from "../components/Filters";
import Tickets from "../components/Tables/Tickets";
import { TicketContext } from "../contexts/TicketContext";
import { getLokalizacjaInfo } from "../helpers/getLokalizacjaInfo";
export interface TicketInterface {
  id?: number;
  tytul: string;
  opiekun: string;
  lokalizacja: string;
}

function TicketsScreen() {
  const { state } = useContext(TicketContext);

  const lokalizacjaInfo = useMemo(
    () => getLokalizacjaInfo(state.selectedLokalizacja),
    [state.selectedLokalizacja]
  );
  if (state.isLoading) {
    return <p>Ładowanie strony</p>;
  }

  return (
    <>
      {lokalizacjaInfo && (
        <div className="p-4 bg-sky-500 text-2xl font-bold text-gray-100">
          {lokalizacjaInfo}
        </div>
      )}
      <div className="p-4 bg-sky-500 text-2xl font-bold text-gray-100 hover:bg-sky-400">
        <Link to={"/tickets/add"}>Dodaj Zgłoszenie</Link>
      </div>
      <div>
        <Filters />
        <Tickets />
      </div>
    </>
  );
}

export default TicketsScreen;
