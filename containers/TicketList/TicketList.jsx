import TicketListItem from "../../components/TicketListItem/TicketListItem"
import Avatar from "../../assets/images/avatar.jpg"
import {ThreeDotsIcon} from "../../assets/icons/Icons"

import './TicketList.scss'

const TicketList = ()=> {

  const customerArr = [
    {
      avatar: Avatar,
      message: "Contact Email not Linked",
      activity: "Updated 1 day ago",
      fullName: "Tom Cruise",
      customerTime: "on 24.05.2019",
      dateDay: "May 26, 2019",
      dateHour: "6:30 PM",
      status: "high",
      settingsIcon: <ThreeDotsIcon />,
    },
    {
      avatar: Avatar,
      message: "Contact Email not Linked",
      activity: "Updated 1 day ago",
      fullName: "Tom Cruise",
      customerTime: "on 24.05.2019",
      dateDay: "May 26, 2019",
      dateHour: "6:30 PM",
      status: "normal",
      settingsIcon: <ThreeDotsIcon />,
    },
    {
      avatar: Avatar,
      message: "Contact Email not Linked",
      activity: "Updated 1 day ago",
      fullName: "Tom Cruise",
      customerTime: "on 24.05.2019",
      dateDay: "May 26, 2019",
      dateHour: "6:30 PM",
      status: "low",
      settingsIcon: <ThreeDotsIcon />,
    },
    {
      avatar: Avatar,
      message: "Contact Email not Linked",
      activity: "Updated 1 day ago",
      fullName: "Tom Cruise",
      customerTime: "on 24.05.2019",
      dateDay: "May 26, 2019",
      dateHour: "6:30 PM",
      status: "normal",
      settingsIcon: <ThreeDotsIcon />,
    },
    {
      avatar: Avatar,
      message: "Contact Email not Linked",
      activity: "Updated 1 day ago",
      fullName: "Tom Cruise",
      customerTime: "on 24.05.2019",
      dateDay: "May 26, 2019",
      dateHour: "6:30 PM",
      status: "high",
      settingsIcon: <ThreeDotsIcon />,
    },
    {
      avatar: Avatar,
      message: "Contact Email not Linked",
      activity: "Updated 1 day ago",
      fullName: "Tom Cruise",
      customerTime: "on 24.05.2019",
      dateDay: "May 26, 2019",
      dateHour: "6:30 PM",
      status: "normal",
      settingsIcon: <ThreeDotsIcon />,
    },
    {
      avatar: Avatar,
      message: "Contact Email not Linked",
      activity: "Updated 1 day ago",
      fullName: "Tom Cruise",
      customerTime: "on 24.05.2019",
      dateDay: "May 26, 2019",
      dateHour: "6:30 PM",
      status: "normal",
      settingsIcon: <ThreeDotsIcon />,
    },
  ]

  return(
    <div className="tickets-list">
      {
        customerArr.map((item, index) => (
          <TicketListItem 
            key= {index}
            avatar= {item.avatar}
            message= {item.message}
            activity= {item.activity}
            fullName= {item.fullName}
            customerTime= {item.customerTime} 
            dateDay= {item.dateDay}
            dateHour= {item.dateHour}
            status= {item.status}
            settingsIcon={item.settingsIcon}
        />
        ))
      }
    </div>
  )
}

export default TicketList