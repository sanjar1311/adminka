import "./SidebarButton.scss"

function SidebarButton({title, icon}) {
  return(
    <>
      <button className="sidebar-btn">
        <span className="sidebar-btn-icon">{icon}</span>
        <span>{title}</span>
      </button>
    </>
  )
}

export default SidebarButton