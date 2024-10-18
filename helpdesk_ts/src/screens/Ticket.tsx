import { useParams } from 'react-router-dom'

function Ticket() {
  const {id}=useParams()
  console.log(id);
  
    return (
    <div><h2>Ticket</h2></div>
  )
}

export default Ticket