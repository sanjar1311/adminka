import "./SidebarButton.scss"

function SidebarButton({title, icon, active}) {
  return(
    <>
      <div className={`sidebar-btn ${active ? 'active' : ''}`}>
        <span className="sidebar-btn-icon">{icon}</span>
        <span>{title}</span>
      </div>
    </>
  )
}

export default SidebarButton