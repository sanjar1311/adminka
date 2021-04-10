import { useState } from "react"
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

  const [activePage, setActivePage] = useState('/')

  return(
    <div className="sidebar">
      <div className="logo">
        <span className="logo-icon"><Logo /></span>
        <span className="logo-title">Dashboard Kit</span>
      </div>
      <Link to="overview" onClick={()=> setActivePage('overview')}>
        <SidebarButton
          title="Overview"
          icon={<Overview />}
          active={activePage === 'overview'}
          />
      </Link>
      <Link to="/" onClick={()=> setActivePage('/')}>
        <SidebarButton
          title="Tickets"
          icon={<Ticets />}
          active={activePage === '/'}
          />
      </Link>
      <Link to="ideas" onClick={()=> setActivePage('ideas')}>
        <SidebarButton
          title="Ideas"
          icon={<Ideas />}
          active={activePage === 'ideas'}
          />
      </Link>
      <Link to="contacts" onClick={()=> setActivePage('contacts')}>
        <SidebarButton
          title="Contacts"
          icon={<Contacts />}
          active={activePage === 'contacts'}
          />
      </Link>
      <Link to="agents" onClick={()=> setActivePage('agents')}>
        <SidebarButton
          title="Agents"
          icon={<Agents />}
          active={activePage === 'agents'}
          />
      </Link>
      <Link to="articles" onClick={()=> setActivePage("articles")}>
        <SidebarButton
          title="Articles"
          icon={<Articles />}
          active={activePage === 'articles'}
          />
      </Link>

      <div className="line"></div>

      <Link to="settings" onClick={()=> setActivePage("settings")}>
        <SidebarButton
          title="Settings"
          icon={<Settings />}
          active={activePage === 'settings'}
          />
      </Link>
      <Link to="subscription" onClick={()=> setActivePage("subscription")}>
        <SidebarButton
          title="Subscription"
          icon={<Subscription />}
          active={activePage === 'subscription'}
          />
      </Link>
    </div>
  )
}

export default Sidebar