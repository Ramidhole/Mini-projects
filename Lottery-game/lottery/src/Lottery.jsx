import { useState } from "react"
import { genTicket, sum } from "./helper"
import Ticket from "./Ticket"
import "./TicketNum.css"

export default function Lottery({ n = 3, winningSum =15}) {
    let [ticket, setTicket] = useState(genTicket(n))

    let isWinning = sum(ticket) === winningSum;

    let buyTicket = () => {
        setTicket(genTicket(n))
    }

    return (
        <div>
            <h1>Lottery game </h1>
            <Ticket ticket={ticket} />

            <button className="btn" onClick={buyTicket}>Buy Ticket</button>
            <h3>{isWinning && "congratulations you won "}</h3>
        </div>
    )
}
 