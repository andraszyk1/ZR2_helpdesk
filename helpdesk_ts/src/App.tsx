import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import Home from "./screens/Home";

import { AddTicket } from "./components/Forms/AddTicket/AddTicket";
import { EditTicket } from "./components/Forms/EditTicket/EditTicket";
import TicketContextComponent from "./contexts/TicketContextComponent";
import Ticket from "./screens/Ticket";
import TicketsScreen from "./screens/TicketsSctreen";


function App() {
  return (
 <TicketContextComponent>
      <BrowserRouter>
        <Header />
        <Routes>
        
          <Route path="/" element={<Home />}></Route>
          <Route path="/ticket/:id" element={<Ticket />}></Route>
          <Route path="/tickets" element={<TicketsScreen  />}></Route>
          <Route path="/tickets/add" element={<AddTicket setTickets tickets/>}></Route>
          <Route path="/tickets/:id" element={<EditTicket />}></Route>
        </Routes>
      </BrowserRouter>
    </TicketContextComponent>
  );
}

export default App;
