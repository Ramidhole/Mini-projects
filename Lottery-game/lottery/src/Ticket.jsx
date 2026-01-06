import TicketNum from "./TicketNum";
import "./ticketNum.css"


export default function Ticket ({ticket}){

    return(
        <div className="ticketNum">
      <p>Ticket</p>
            {ticket.map((num,idx)  => (

            <TicketNum num={num} key={idx}/>
))}

        </div>
    );
}