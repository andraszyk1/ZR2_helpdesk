import { forwardRef, useContext, useRef, useState } from "react";
import { TicketContext } from "../../../contexts/TicketContext";
const Input = forwardRef(function Input(props, ref) {
  return (
    <input ref={ref} type="text" id="tytul" className="p-1 bg-slate-200 w-32" />
  );
});
export function AddTicket({ setTickets, tickets }) {
  const {lokalizacja:lokalizacjaContext,setSelectedData,selectedData}=useContext(TicketContext)
  const [opiekun, setOpiekun] = useState<string>("");
  const [lokalizacja, setLokalizacja] = useState<string>("");
  const [error, setError] = useState<string>("");
  const tytulRef = useRef<null | any>(null);
  const handleOnSubmit = (e: Event) => {
    e.preventDefault();
    let tytul = tytulRef.current.value;

    if ([tytul, opiekun, lokalizacja].some((x) => x === "")) {
      setError("Wprowadz wartosc");
      setTimeout(() => {
        setError("");
      }, 2000);
    } else {
      setTickets({
        tytul: tytul,
        opiekun: opiekun,
        lokalizacja: lokalizacja,
      });
      //   setTytul("");
      setOpiekun("");
      setLokalizacja("");
    }
  };
  return (
    <div className="flex flex-col">
      <div className="w-64 font-bold text-3xl">Dodaj Zgłoszenie {selectedData}</div>
      <div className="flex flex-col gap-4 ">
        <form onSubmit={handleOnSubmit}>
          <div className="flex flex-row gap-4">
            <label htmlFor="tytul">Tytuł</label>
            <input
              className="border-r-5 border-solid border-spacing-2 w-96 rounded-xl bg-gray-400 p-2 transition-colors  hover:bg-slate-300"
              value={selectedData}
              name="selectedData"
              type="input"
              onChange={(e) => setSelectedData(e.target.value)}
            />
            <Input
              ref={tytulRef}
              className="border-r-5 border-solid border-spacing-2 rounded-xl w-96 bg-gray-400 p-2 transition-colors hover:bg-slate-300"
              //   value={tytul}
              name="tytul"
              type="input"
              //   onChange={(e) => setTytul(e.target.value)}
            />
            <label htmlFor="opiekun">Opiekun</label>
            <input
              className="border-r-5 border-solid border-spacing-2 w-96 rounded-xl bg-gray-400 p-2 transition-colors  hover:bg-slate-300"
              value={opiekun}
              name="opiekun"
              type="input"
              onChange={(e) => setOpiekun(e.target.value)}
            />
            <label htmlFor="lokalizacja">Lokalizacja</label>
            <select
              className="border-r-5 border-solid border-spacing-2 w-96 rounded-xl bg-gray-400 p-2 transition-colors  hover:bg-slate-300"
              name="lokalizacja"
              value={lokalizacja}
              onChange={(e) => setLokalizacja(e.target.value)}
            >
              <option value="">Wybierz Lokalizację</option>
              <option value="Tychy">Tychy</option>
              <option value="Torun">Toruń</option>
            </select>
            <button
              type="submit"
              className="border-r-5 border-solid border-spacing-2 rounded-xl w-96 bg-sky-600 p-2 transition-colors hover:bg-slate-300"
            >
              Dodaj Zgłoszenie
            </button>
          </div>
        </form>
      </div>
      {error && (
        <div className="p-4 bg-red-500 text-yellow-100 font-bold text-xl transition-colors">
          {error}
        </div>
      )}
    </div>
  );
}
