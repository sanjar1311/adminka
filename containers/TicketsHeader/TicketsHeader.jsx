import AvatarImg from "../../assets/images/avatar.jpg"

import {
  FindIcon,
  NotificationIcon
} from "../../assets/icons/Icons"

import "./TicketsHeader.scss"

const TicketsHeader = ()=> {
  return(
    <div className="tickets-header">
      <h1 className="tickets-header-title">Tickets</h1>
      <div className="header-right">
        <button className="find-icon">{<FindIcon />}</button>
        <button className="notification-icon">{<NotificationIcon />}</button>
        <p className="username">Jones Ferdinand</p>
        <img className="userpic" src={AvatarImg} width="44" height="44" alt="user img"/>
      </div>
    </div>
  )
}

export default TicketsHeader