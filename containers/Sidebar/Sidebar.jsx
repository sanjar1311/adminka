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
      <SidebarButton title="Overview" icon={<Overview />}/>
      <SidebarButton title="Ticets" icon={<Ticets />}/>
      <SidebarButton title="Ideas" icon={<Ideas />}/>
      <SidebarButton title="Contacts" icon={<Contacts />}/>
      <SidebarButton title="Agents" icon={<Agents />}/>
      <SidebarButton title="Articles" icon={<Articles />}/>

      <div className="line"></div>

      <SidebarButton title="Settings" icon={<Settings />}/>
      <SidebarButton title="Subscription" icon={<Subscription />}/>
    </div>
  )
}

export default Sidebar