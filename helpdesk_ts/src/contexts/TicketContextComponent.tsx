import { useCallback, useReducer, useState } from "react";
import { ticketsReducer } from "../reducer/ticketReducer";
import { TicketContext } from "./TicketContext";
interface Props {
  children: React.ReactNode;
}


function TicketContextComponent({ children }: Props) {
  const [state, dispatch] = useReducer(ticketsReducer, {});
  const [error, setError] = useState<string | null>(null);
  const handleError = useCallback((err: string) => {
    setError(err);
    setTimeout(() => {
      setError(null);
    }, 3000);
  }, []);
  return (
    <TicketContext.Provider
      value={{ state: state, dispatch: dispatch, onError: handleError }}
    >
      <div className="container">
        {error && (
          <div className="fixed top-11 right-4 p-4 bg-red-500 text-2xl font-bold text-gray-100">
            {error}
          </div>
        )}
      </div>
      {children}
    </TicketContext.Provider>
  );
}

export default TicketContextComponent;
