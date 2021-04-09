import TicketsHeader from "../../containers/TicketsHeader/TicketsHeader"
import TicketList from "../../containers/TicketList/TicketList"

import "./Tickets.scss"

function Tickets() {
  return (
    <div className="tickets">
      <TicketsHeader />
      <TicketList />
    </div>
  )
}

export default Tickets