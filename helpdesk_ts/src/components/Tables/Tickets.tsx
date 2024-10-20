import { useContext, useEffect, useState } from "react";
import { useDeleteData } from "../../hooks/useDeleteData";
import Row from "./Row";
import { TicketContext } from "../../contexts/TicketContext";
import { useGetData } from "../../hooks/useGetData";

interface DataInterface {
  id: string;
  tytul: string;
  opiekun: string;
  lokalizacja: string;
}

function Tickets() {
  const { state, dispatch, onError } = useContext(TicketContext);
  const { data: dataFromHook } = useGetData("", onError);
  const { apiDeleteData } = useDeleteData();

  useEffect(() => {
    dispatch({ type: "set", payload: dataFromHook });
  }, [dataFromHook]);

  const handleDelete = (id: any) => {
    apiDeleteData(id);
    dispatch({ type: "delete", payload: id });
  };

  if (state.isLoading) {
    return <p>Ładowanie strony ...</p>;
  }
  return (
    <div className="flex flex-col gap-4">
      <div className="w-32 font-bold text-3xl">
        Zgłoszenia
      </div>
      <div className="flex flex-col gap-4 ">
        {state.data?.map(
          ({ id, tytul, opiekun, lokalizacja }: DataInterface) => {
            return (
              <div key={id} className={`flex flex-row gap-2`}>
                <Row item={id} highlight={false} />
                <Row item={tytul} highlight={false} />
                <Row item={opiekun} highlight={false} />
                <Row
                  item={lokalizacja}
                  highlight={lokalizacja === state.selectedLokalizacja}
                />
                <div>
                  <button
                    onClick={() => handleDelete(id)}
                    className="border-r-5 border-solid border-spacing-2 rounded-xl w-24 bg-red-500 p-2 transition-colors hover:text-cyan-600 hover:bg-slate-300"
                  >
                    Usuń
                  </button>
                </div>
              </div>
            );
          }
        )}
      </div>
    </div>
  );
}

export default Tickets;
