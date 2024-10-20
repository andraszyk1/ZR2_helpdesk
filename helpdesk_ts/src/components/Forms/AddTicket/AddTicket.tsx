import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAddData } from "../../../hooks/useAddData";

export function AddTicket({onError}:any) {
  
  const [opiekun, setOpiekun] = useState<string>("");
  const [tytul, setTytul] = useState<string>("");
  const [lokalizacja, setLokalizacja] = useState<string>("");
  const [error, setError] = useState<string>("");
  const {addData}=useAddData(onError)
 
  const navigate=useNavigate()
  const handleOnSubmit = (e: Event) => {
    e.preventDefault();
    if ([tytul, opiekun, lokalizacja].some((x) => x === "")) {
      setError("Wprowadz wartosc");
      setTimeout(() => {
        setError("");
      }, 2000);
    } else {
      addData({
        tytul: tytul,
        opiekun: opiekun,
        lokalizacja: lokalizacja
      })
      setTytul("");
      setOpiekun("");
      setLokalizacja("");
      navigate("/tickets")
   
     
      
    }
  };
  return (
    <div className="flex flex-col">
      <div className="w-64 font-bold text-3xl">Dodaj Zgłoszenie</div>
      <div className="flex flex-col gap-4 ">
        <form onSubmit={handleOnSubmit}>
          <div className="flex flex-row gap-4">
            <label htmlFor="tytul">Tytuł</label>
           
            <input
              className="border-r-5 border-solid border-spacing-2 rounded-xl w-96 bg-gray-400 p-2 transition-colors hover:bg-slate-300"
              value={tytul}
              name="tytul"
              type="input"
              onChange={(e) => setTytul(e.target.value)}
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
