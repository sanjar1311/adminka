import "./TicketListItem.scss"

const TicketListItem = ({avatar, message, activity, fullName, customerTime, dateDay, dateHour, status, settingsIcon}) => {
  return(
    <>
      <div className="ticket-list-item">
        <div className="item-left">
          <img className="ticket-owner-img" src={avatar} alt="User img"/>
          <div className="ticket-owner-info">
            <h4 className="owner-title customer-title">{message}</h4>
            <span className="owner-activity customer-info">{activity}</span>
          </div>
        </div>
        <div className="item-right">
          <div className="customer">
            <h4 className="customer-name customer-title">{fullName}</h4>
            <span className="customer-time customer-info">{customerTime}</span>
          </div>
          <div className="date">
            <h4 className="date-day customer-title">{dateDay}</h4>
            <span className="date-hour customer-info">{dateHour}</span>
          </div>
          <h4 className={`status customer-title ${status}`}>{status}</h4>
          <button className="costumer-settings-icon">{settingsIcon}</button>
        </div>
      </div>
    </>
  )
}

export default TicketListItem