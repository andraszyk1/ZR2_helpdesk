import { useEffect, useMemo, useState } from "react";
import BtnCategory from "../components/Buttons/BtnCategory";
import { AddTicket } from "../components/Forms/AddTicket/AddTicket";
import Tickets from "../components/Tables/Tickets";
import { TicketContext } from "../contexts/TicketContext";
import { getLokalizacjaInfo } from "../helpers/getLokalizacjaInfo";
import Filters from "../components/Filters";
import { Link } from "react-router-dom";
export interface TicketInterface {
  id: number;
  tytul: string;
  opiekun: string;
  lokalizacja: string;
}
function TicketsScreen({ onError }) {
  const [data, setData] = useState<TicketInterface[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [selectedLokalizacja, setSelectedLokalizacja] = useState<string>("");

  useEffect(() => {
    let isCanceled = false;
    const params =
      selectedLokalizacja === "" ? "" : `?lokalizacja=${selectedLokalizacja}`;
    fetch(`http://localhost:3000/zgloszenia${params}`)
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        throw Error("Bład ladowania danych");
      })
      .then((res) => {
        if (!isCanceled) {
          setData(res);
          setIsLoading(false);
        }
      })
      .catch(onError);
    return () => {
      isCanceled = true;
    };
  }, [selectedLokalizacja]);

  const handleAddTicket = (data: TicketInterface) => {
    fetch("http://localhost:3000/zgloszenia", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((res) => {
        if (res) {
          setData((prev) => [...prev, res]);
          setIsLoading(false);
        } else {
          throw Error("Bład dodawania zgłoszenia");
        }
      })
      .catch(onError);
  };
  const handleDeleteTicket = (id: number) => {
    fetch(`http://localhost:3000/zgloszenia/${id}`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => {
        if (res.ok) {
          setData((prev) => prev.filter((x: TicketInterface) => x.id != id));
          setIsLoading(false);
        } else {
          throw new Error("Bląd podczas usuwania zgłoszenia");
        }
      })
      .catch(onError);
  };
  const handleFilterLokalizacja = (lokalizacja: string) => {
    console.log(lokalizacja);
    setSelectedLokalizacja(lokalizacja);
  };
  const lokalizacjaInfo = useMemo(
    () => getLokalizacjaInfo(selectedLokalizacja),
    [selectedLokalizacja]
  );
  if (isLoading) {
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
        <Link to={"/tickets/add"} >Link</Link>
        <TicketContext.Provider value={{ lokalizacja: selectedLokalizacja,setTickets:handleAddTicket,tickets:data}}>
          <AddTicket setTickets={handleAddTicket} tickets={data} />
        </TicketContext.Provider>
      </div>
      <div>
        <Filters handleFilterLokalizacja={handleFilterLokalizacja} />
        {data?.length > 0 ? (
          <TicketContext.Provider value={{ lokalizacja: selectedLokalizacja }}>
            <Tickets deleteTicket={handleDeleteTicket} tickets={data} />
          </TicketContext.Provider>
        ) : (
          "Brak wynikow wyszukiwania"
        )}
      </div>
    </>
  );
}

export default TicketsScreen;
