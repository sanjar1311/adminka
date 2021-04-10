import {Link} from "react-router-dom"

import SidebarButton from "../../components/SidebarButton/SidebarButton"
import {
  Logo,
  Overview,
  Ticets,
  Ideas,
  Contacts,
  Agents,
  Articles,
  Settings,
  Subscription,
} from "../../assets/icons/Icons"

import "./Sidebar.scss"

function Sidebar() {
  return(
    <div className="sidebar">
      <div className="logo">
        <span className="logo-icon"><Logo /></span>
        <span className="logo-title">Dashboard Kit</span>
      </div>
      <Link to="overview">
        <SidebarButton title="Overview" icon={<Overview />}/>
      </Link>
      <Link to="/">
        <SidebarButton title="Tickets" icon={<Ticets />}/>
      </Link>
      <Link to="ideas">
        <SidebarButton title="Ideas" icon={<Ideas />}/>
      </Link>
      <Link to="contacts">
        <SidebarButton title="Contacts" icon={<Contacts />}/>
      </Link>
      <Link to="agents">
        <SidebarButton title="Agents" icon={<Agents />}/>
      </Link>
      <Link to="articles">
        <SidebarButton title="Articles" icon={<Articles />}/>
      </Link>

      <div className="line"></div>

      <Link to="settings">
        <SidebarButton title="Settings" icon={<Settings />}/>
      </Link>
      <Link to="subscription">
        <SidebarButton title="Subscription" icon={<Subscription />}/>
      </Link>
    </div>
  )
}

export default Sidebar