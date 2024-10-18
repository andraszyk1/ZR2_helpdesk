import { useParams } from "react-router-dom"

export function EditTicket(){
    const {id}=useParams()
    console.log(id);
    
    return (<div>
        <h2>EditTicket</h2>
    
    </div>)
}