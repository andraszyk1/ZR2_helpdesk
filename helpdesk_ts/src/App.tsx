import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import Home from "./screens/Home";

import { EditTicket } from "./components/Forms/EditTicket/EditTicket";
import Ticket from "./screens/Ticket";
import TicketsScreen,{TicketInterface} from "./screens/TicketsSctreen";
import { AddTicket } from "./components/Forms/AddTicket/AddTicket";
import { useCallback, useContext, useState } from "react";
import TicketContextComponent from "./contexts/TicketContextComponent";


function App() {
  const [error, setError] = useState<string|null>(null);
 
  
  const handleError=useCallback((err:Error)=>{
    setError(err.message);
    setTimeout(() => {
      setError(null);
    }, 3000);
},[])

  return (
 <TicketContextComponent>
    <div className="container">
        {error && (
            <div className="fixed top-11 right-4 p-4 bg-red-500 text-2xl font-bold text-gray-100">
              {error}
            </div>
          )}
       
      <BrowserRouter>
        <Header />
        <Routes>
        
          <Route path="/" element={<Home />}></Route>
          <Route path="/ticket/:id" element={<Ticket />}></Route>
          <Route path="/tickets" element={<TicketsScreen onError={handleError} />}></Route>
          <Route path="/tickets/add" element={<AddTicket setTickets tickets/>}></Route>
          <Route path="/tickets/:id" element={<EditTicket />}></Route>
        </Routes>
      </BrowserRouter>
    
    </div>
    </TicketContextComponent>
  );
}

export default App;
